"use client";

import { useEffect, useRef } from "react";

interface WavePoint {
  x: number;
  y: number;
  slope: number;
}

function evalCubic(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const m = 1 - t;
  return m * m * m * p0 + 3 * m * m * t * p1 + 3 * m * t * t * p2 + t * t * t * p3;
}

function evalCubicDeriv(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const m = 1 - t;
  return 3 * m * m * (p1 - p0) + 6 * m * t * (p2 - p1) + 3 * t * t * (p3 - p2);
}

// Precompute exact samples along the foreground wave curve:
// M0 60 C240 82, 460 28, 740 54 C990 76, 1210 34, 1440 56
const FOREGROUND_WAVE_POINTS: WavePoint[] = (() => {
  const pts: WavePoint[] = [];
  const stepsPerSeg = 120;

  for (let i = 0; i <= stepsPerSeg; i++) {
    const t = i / stepsPerSeg;
    const x = evalCubic(0, 240, 460, 740, t);
    const y = evalCubic(60, 82, 28, 54, t);
    const dx = evalCubicDeriv(0, 240, 460, 740, t);
    const dy = evalCubicDeriv(60, 82, 28, 54, t);
    pts.push({ x, y, slope: dy / dx });
  }

  for (let i = 1; i <= stepsPerSeg; i++) {
    const t = i / stepsPerSeg;
    const x = evalCubic(740, 990, 1210, 1440, t);
    const y = evalCubic(54, 76, 34, 56, t);
    const dx = evalCubicDeriv(740, 990, 1210, 1440, t);
    const dy = evalCubicDeriv(54, 76, 34, 56, t);
    pts.push({ x, y, slope: dy / dx });
  }

  return pts;
})();

function sampleForegroundWave(svgX: number): { y: number; slope: number } {
  const clamped = Math.max(0, Math.min(1440, svgX));
  let lo = 0;
  let hi = FOREGROUND_WAVE_POINTS.length - 1;

  while (lo + 1 < hi) {
    const mid = (lo + hi) >> 1;
    if (FOREGROUND_WAVE_POINTS[mid].x <= clamped) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  const a = FOREGROUND_WAVE_POINTS[lo];
  const b = FOREGROUND_WAVE_POINTS[hi];
  const span = b.x - a.x || 1;
  const frac = (clamped - a.x) / span;

  return {
    y: a.y + (b.y - a.y) * frac,
    slope: a.slope + (b.slope - a.slope) * frac,
  };
}

const LOOP_DURATION_MS = 24000;
const INITIAL_PROGRESS = 0.28; // Start already cruising cleanly on screen when viewed

export default function GlidingBoatWaveDivider({
  fillColor = "#FFFFFF",
  midColor = "#E8EEE6",
  backColor = "#849481",
  crestColor = "#E5A780",
  className = "",
}: {
  fillColor?: string;
  midColor?: string;
  backColor?: string;
  crestColor?: string;
  className?: string;
}) {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const boatRef = useRef<HTMLDivElement | null>(null);
  const boatBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dividerEl = dividerRef.current;
    const boatEl = boatRef.current;
    const boatBodyEl = boatBodyRef.current;
    if (!dividerEl || !boatEl || !boatBodyEl) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    let startTime = performance.now() - INITIAL_PROGRESS * LOOP_DURATION_MS;

    const positionBoat = (now: number, staticMode: boolean) => {
      const width = dividerEl.clientWidth;
      const height = dividerEl.clientHeight;
      if (width <= 0 || height <= 0) return;

      const boatWidth = boatBodyEl.offsetWidth || 200;
      const startX = width + boatWidth * 0.65;
      const endX = -boatWidth * 0.95;

      const progress = staticMode
        ? 0.38
        : (((now - startTime) % LOOP_DURATION_MS) + LOOP_DURATION_MS) % LOOP_DURATION_MS /
        LOOP_DURATION_MS;

      const cx = startX + (endX - startX) * progress;
      const svgX = (cx / width) * 1440;
      const { y: waveSvgY, slope } = sampleForegroundWave(svgX);

      // Exact screen Y of the foreground wave crest at the boat's current horizontal center
      const waveY = (waveSvgY / 84) * height;
      // Exact screen tangent pitch angle matching the wave curve at this viewport aspect ratio
      const screenSlope = slope * (height / 84) / (width / 1440);
      const waveAngle = (Math.atan(screenSlope) * 180) / Math.PI;

      // Subtle buoyant water bob & gentle planing bow trim keeping the entire hull seated solidly in the wave
      const bobY = staticMode ? 0.5 : 0.6 + Math.sin(now * 0.0024) * 0.9;
      const bobAngle = staticMode ? 0.4 : 0.5 + Math.cos(now * 0.002) * 0.55;

      boatEl.style.transform = `translate3d(${cx.toFixed(2)}px, ${(waveY + bobY).toFixed(2)}px, 0) rotate(${(
        waveAngle + bobAngle
      ).toFixed(2)}deg)`;
      boatEl.style.opacity = "1";
    };

    if (reducedMotion) {
      positionBoat(performance.now(), true);
      const onResize = () => positionBoat(performance.now(), true);
      window.addEventListener("resize", onResize, { passive: true });
      return () => window.removeEventListener("resize", onResize);
    }

    const tick = (now: number) => {
      positionBoat(now, false);
      rafId = window.requestAnimationFrame(tick);
    };

    startTime = performance.now() - INITIAL_PROGRESS * LOOP_DURATION_MS;
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none w-full leading-none ${className}`}
    >
      <div ref={dividerRef} className="relative w-full h-10 sm:h-14 lg:h-[68px]">
        {/* Layer 1 (Back): Distant translucent tidal swell & mid estuary current behind the boat */}
        <svg
          viewBox="0 0 1440 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 z-10 block w-full h-full"
        >
          <path
            d="M0 44 C180 12, 360 66, 580 34 C780 6, 980 64, 1200 32 C1320 15, 1390 28, 1440 36 V84 H0 Z"
            fill={backColor}
            fillOpacity="0.26"
          />
          <path
            d="M0 54 C210 22, 420 74, 680 42 C900 16, 1100 68, 1320 40 C1375 33, 1412 40, 1440 46 V84 H0 Z"
            fill={midColor}
            fillOpacity="0.54"
          />
        </svg>

        {/* Layer 2 (Mid): Top-open viewport clipping cleanly at left, right, and bottom of divider */}
        <div className="absolute -top-40 bottom-0 inset-x-0 z-20 overflow-hidden">
          {/* Exact 1:1 coordinate frame aligned with the divider SVG (top=y:0, bottom=y:84) */}
          <div className="absolute top-40 bottom-0 inset-x-0">
            <div
              ref={boatRef}
              style={{ opacity: 0, transformOrigin: "0 0" }}
              className="absolute top-0 left-0 will-change-transform"
            >
              {/* Centered on x=0 with bottom edge locked directly to the foreground wave surface (y=0) */}
              <div
                ref={boatBodyRef}
                className="relative -translate-x-1/2 -translate-y-full w-[144px] sm:w-[178px] lg:w-[214px]"
              >
                {/* 22 ft Custom Center-Console Bay Boat: keel sits snugly into the foreground wave crest (39.2% vs 35.8% keel) */}
                <img
                  src="/images/art/custom-bay-boat.png"
                  alt=""
                  draggable={false}
                  className="block w-full h-auto translate-y-[39.2%] drop-shadow-[0_6px_12px_rgba(8,20,18,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3 (Front): Foreground wave crest lapping over the keel & concealing the submerged prop */}
        <svg
          viewBox="0 0 1440 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 z-30 block w-full h-full"
        >
          <path
            d="M0 60 C240 82, 460 28, 740 54 C990 76, 1210 34, 1440 56 V84 H0 Z"
            fill={fillColor}
          />
          <path
            d="M0 60 C240 82, 460 28, 740 54 C990 76, 1210 34, 1440 56"
            stroke={crestColor}
            strokeWidth="1.6"
            strokeOpacity="0.48"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
