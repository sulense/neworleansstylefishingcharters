"use client";

import { useEffect, useState, useCallback, useId } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";

// Exact native dimensions & feature coordinates of the official Bourbon St. fisherman cutout (uscg-badge.png)
const IMG_W = 386;
const IMG_H = 614;
const BOX_W = 110;
const BOX_H = (BOX_W * IMG_H) / IMG_W; // 174.97px
const SCALE = BOX_W / IMG_W;
const BOX_LEFT = -120; // Positioned far left outside the H1 flush-left edge
const BOX_TOP = -14;
const PIVOT_X = 183; // Fisherman's upper hand gripping the rod
const PIVOT_Y = 320;
const TIP_X = 383; // Exact tip-top eye of the official rod
const TIP_Y = 146;
const TIP_DX = TIP_X - PIVOT_X;
const TIP_DY = TIP_Y - PIVOT_Y;
const ORIGIN_X_PCT = `${((PIVOT_X / IMG_W) * 100).toFixed(2)}%`;
const ORIGIN_Y_PCT = `${((PIVOT_Y / IMG_H) * 100).toFixed(2)}%`;

// Target anchor on the left vertical stem of the serif "E" in "Experience Louisiana"
const HOOK_END_Y = 30;

export default function AnimatedHeroHeading() {
  const prefersReduced = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);
  const gradId = useId();

  // Physically locked motion values so the braided line, J-hook, official bending rod, and H1 move as ONE unit
  const pullX = useMotionValue(0);
  const h1Opacity = useMotionValue(1);
  const fishermanOpacity = useMotionValue(0);
  const fishermanX = useMotionValue(0);
  const ropeOpacity = useMotionValue(0);
  const rodRotate = useMotionValue(0);

  const ropePath = useMotionValue("M -10.8 18 Q -4 22 3 26");
  const tipRingX = useMotionValue(-10.8);
  const tipRingY = useMotionValue(18);
  const hookX = useMotionValue(3);
  const hookAngle = useMotionValue(10);
  const braidOffset = useMotionValue(0);

  const updateRopeGeometry = useCallback(() => {
    const px = pullX.get();
    const deg = rodRotate.get();
    const rad = (deg * Math.PI) / 180;

    const rotTipX = PIVOT_X + TIP_DX * Math.cos(rad) - TIP_DY * Math.sin(rad);
    const rotTipY = PIVOT_Y + TIP_DX * Math.sin(rad) + TIP_DY * Math.cos(rad);

    const startX = BOX_LEFT + rotTipX * SCALE;
    const startY = BOX_TOP + rotTipY * SCALE;
    const endX = Math.max(2, px + 3);
    const endY = HOOK_END_Y;

    const tension = Math.min(1, Math.max(0, (-deg - 2) / 11));
    const baseSlack = Math.min(22, Math.max(3, px * 0.14));
    const sag = baseSlack * (1 - tension * 0.86) + 1.5;

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2 + sag;
    const angleDeg = (Math.atan2(endY - midY, endX - midX) * 180) / Math.PI;

    tipRingX.set(startX);
    tipRingY.set(startY);
    hookX.set(endX);
    hookAngle.set(angleDeg);
    braidOffset.set((125 - px) * 0.75);

    ropePath.set(
      `M ${startX.toFixed(1)} ${startY.toFixed(1)} Q ${midX.toFixed(1)} ${midY.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`
    );
  }, [pullX, rodRotate, ropePath, tipRingX, tipRingY, hookX, hookAngle, braidOffset]);

  useEffect(() => {
    updateRopeGeometry();
    const unsubPull = pullX.on("change", updateRopeGeometry);
    const unsubRod = rodRotate.on("change", updateRopeGeometry);
    return () => {
      unsubPull();
      unsubRod();
    };
  }, [pullX, rodRotate, updateRopeGeometry]);

  const runReelInSequence = useCallback(async () => {
    if (prefersReduced) {
      pullX.set(0);
      h1Opacity.set(1);
      fishermanOpacity.set(0);
      fishermanX.set(0);
      ropeOpacity.set(0);
      rodRotate.set(0);
      return;
    }

    // On mobile/tablet (<1024px) where far-left fisherman is hidden, run a clean single right-to-left fade-in
    const isDesktop =
      typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) {
      pullX.set(36);
      h1Opacity.set(0);
      fishermanOpacity.set(0);
      ropeOpacity.set(0);
      await Promise.all([
        animate(pullX, 0, { duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }),
        animate(h1Opacity, 1, { duration: 0.55, delay: 0.16, ease: "easeOut" }),
      ]);
      return;
    }

    // Desktop: Fisherman appears far left, casts braided line & reels H1 flush-left in 2 crisp tugs, then fades out
    pullX.set(125);
    h1Opacity.set(0);
    fishermanOpacity.set(0);
    fishermanX.set(0);
    ropeOpacity.set(0);
    rodRotate.set(5);

    animate(fishermanOpacity, 1, { duration: 0.28, ease: "easeOut" });
    await animate(ropeOpacity, 1, { duration: 0.24, delay: 0.16 });
    animate(h1Opacity, 1, { duration: 0.35, ease: "easeOut" });

    const rodAnim = animate(rodRotate, [5, -14, -5, -15, -2, 2, 0], {
      duration: 1.35,
      times: [0, 0.22, 0.44, 0.68, 0.85, 0.94, 1],
      ease: "easeInOut",
    });

    const pullAnim = animate(pullX, [125, 64, 70, 0], {
      duration: 1.22,
      times: [0, 0.4, 0.52, 1],
      ease: [0.22, 1, 0.36, 1],
    });

    await Promise.all([pullAnim, rodAnim]);

    await animate(ropeOpacity, 0, { duration: 0.35, delay: 0.1, ease: "easeOut" });
    animate(fishermanX, -10, { duration: 0.7, ease: "easeOut" });
    await animate(fishermanOpacity, 0, { duration: 0.7, ease: "easeOut" });
  }, [prefersReduced, pullX, h1Opacity, fishermanOpacity, fishermanX, ropeOpacity, rodRotate]);

  useEffect(() => {
    setHasMounted(true);
    runReelInSequence();
  }, [runReelInSequence]);

  return (
    <div className="relative w-full select-none">
      {/* OFFICIAL BOURBON ST. LAMP-POST FISHERMAN (Appears far left to pull the H1 in, then smoothly fades away) */}
      {hasMounted && !prefersReduced && (
        <motion.div
          style={{
            left: `${BOX_LEFT}px`,
            top: `${BOX_TOP}px`,
            width: `${BOX_W}px`,
            height: `${BOX_H}px`,
            opacity: fishermanOpacity,
            x: fishermanX,
          }}
          className="hidden lg:block absolute pointer-events-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)]"
        >
          <img
            src="/images/real/bourbon-fisherman-base.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
          />
          <motion.img
            src="/images/real/bourbon-fisherman-rod.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            style={{
              rotate: rodRotate,
              transformOrigin: `${ORIGIN_X_PCT} ${ORIGIN_Y_PCT}`,
            }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </motion.div>
      )}

      {/* CONTINUOUS BRAIDED FISHING LINE & SLEEK J-HOOK PULLING THE H1 FROM RIGHT TO LEFT */}
      {hasMounted && !prefersReduced && (
        <motion.svg
          style={{ opacity: ropeOpacity }}
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute left-0 top-0 w-full h-full overflow-visible z-20"
        >
          <defs>
            <linearGradient
              id={gradId}
              gradientUnits="userSpaceOnUse"
              x1="-25"
              y1="14"
              x2="175"
              y2="26"
            >
              <stop offset="0%" stopColor="#F6F1E7" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#E4CEB0" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#D69A72" stopOpacity="1" />
            </linearGradient>
          </defs>

          <motion.path
            d={ropePath}
            stroke="#10211E"
            strokeWidth="3.4"
            strokeOpacity="0.58"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            d={ropePath}
            stroke={`url(#${gradId})`}
            strokeWidth="1.85"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            d={ropePath}
            stroke="#FFFDF6"
            strokeWidth="0.9"
            strokeOpacity="0.58"
            strokeDasharray="2 3.5"
            strokeLinecap="round"
            style={{ strokeDashoffset: braidOffset }}
            fill="none"
          />

          <motion.circle
            cx={tipRingX}
            cy={tipRingY}
            r="1.6"
            fill="#F6F1E7"
            stroke="#10211E"
            strokeWidth="0.6"
          />

          <motion.g
            style={{
              x: hookX,
              y: HOOK_END_Y,
              rotate: hookAngle,
            }}
          >
            <ellipse
              cx="-4.5"
              cy="0"
              rx="2.6"
              ry="1.25"
              fill="#BF754C"
              stroke="#462614"
              strokeWidth="0.55"
            />
            <circle cx="-1" cy="0" r="1.4" fill="none" stroke="#EED8BE" strokeWidth="1.15" />
            <path
              d="M 0.2 0 L 6.5 0 C 10.6 0 11.2 5.4 7.6 6.4 C 5.5 7 3.8 5.6 4.4 3.8 L 6 4.7"
              stroke="#10211E"
              strokeWidth="3.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.55"
            />
            <path
              d="M 0.2 0 L 6.5 0 C 10.6 0 11.2 5.4 7.6 6.4 C 5.5 7 3.8 5.6 4.4 3.8 L 6 4.7"
              stroke="#F6F1E7"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 8.6 1.6 C 9.5 2.7 9.4 4.3 8.1 5.1"
              stroke="#FFFFFF"
              strokeWidth="0.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          </motion.g>
        </motion.svg>
      )}

      {/* LIBRE BASKERVILLE BOLD 2-LINE HEADLINE — Reeled flush-left by the Bourbon St. fisherman */}
      <motion.h1
        style={{
          x: pullX,
          opacity: h1Opacity,
        }}
        className="font-display font-bold tracking-tight leading-[1.12] text-[34px] sm:text-[44px] lg:text-[38px] xl:text-[48px] min-[1420px]:text-[56px] text-[#F6F1E7] drop-shadow-[0_6px_18px_rgba(12,24,22,0.65)]"
      >
        <span className="block lg:whitespace-nowrap">Experience Louisiana</span>
        <span className="block lg:whitespace-nowrap">
          Fishing <span className="text-[#E5A780]">Like Never Before</span>
        </span>
      </motion.h1>

      {/* Small Classic Brand Tagline Directly Under Headline (Per Brief) */}
      <motion.p
        initial={prefersReduced ? false : { opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-2.5 font-serif italic text-base sm:text-lg text-[#F6F1E7]/90 tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        &ldquo;Come Fish a Nawlins Good Time!&rdquo;
      </motion.p>
    </div>
  );
}
