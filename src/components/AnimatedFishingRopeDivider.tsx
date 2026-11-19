"use client";

import { useId } from "react";

interface CatchSpec {
  id: string;
  offsetX: number;
  src: string;
  width: number;
  height: number;
  // Offset so the fish's left-facing open mouth lands pixel-exact inside the J-hook bend
  fishTop: number;
  pivotY: number;
  altWiggle?: boolean;
}

const TILE_WIDTH = 1600;

const CATCHES: CatchSpec[] = [
  {
    id: "redfish",
    offsetX: 340,
    src: "/images/art/species-redfish.png",
    width: 122,
    height: 54,
    fishTop: -31,
    pivotY: 31,
    altWiggle: false,
  },
  {
    id: "trout",
    offsetX: 1140,
    src: "/images/art/species-trout.png",
    width: 116,
    height: 47,
    fishTop: -25,
    pivotY: 25,
    altWiggle: true,
  },
];

function FishingLineTile({ patternId }: { patternId: string }) {
  return (
    <svg
      width={TILE_WIDTH}
      height={14}
      viewBox={`0 0 ${TILE_WIDTH} 14`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block shrink-0 drop-shadow-[0_2px_4px_rgba(8,16,20,0.46)]"
    >
      <defs>
        {/* Seamless 10px-period braided saltwater fishing line weave (160 repeats = 1600px exact) */}
        <pattern
          id={patternId}
          width="10"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          {/* Dark moss-green braided fishing line body (5.2px tall, centered at y=7) */}
          <rect x="0" y="4.4" width="10" height="5.2" fill="#183630" />
          {/* Diagonal braided micro-strands */}
          <path
            d="M -2 9.4 L 3.8 4.5 L 7.0 4.5 L 1.2 9.4 Z"
            fill="#2E5F56"
          />
          <path
            d="M 3 9.4 L 8.8 4.5 L 12.0 4.5 L 6.2 9.4 Z"
            fill="#2E5F56"
          />
          {/* Mid-strand subtle specular weave */}
          <path
            d="M 1.2 7.2 L 4.4 5.4"
            stroke="#5E9186"
            strokeOpacity="0.65"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          <path
            d="M 6.2 7.2 L 9.4 5.4"
            stroke="#5E9186"
            strokeOpacity="0.65"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
          {/* Crisp sunlit sheen catching the top edge so the line pops cleanly over the dark hero */}
          <path
            d="M 0.8 5.05 L 5.2 5.05"
            stroke="#DFECE6"
            strokeOpacity="0.88"
            strokeWidth="1.15"
            strokeLinecap="round"
          />
          <path
            d="M 6.6 5.3 L 9.2 5.3"
            stroke="#A8C4B8"
            strokeOpacity="0.72"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          {/* Deep bottom edge contrast so the line stays razor-sharp against the cream bar below */}
          <line
            x1="0"
            y1="9.4"
            x2="10"
            y2="9.4"
            stroke="#0C1E1A"
            strokeOpacity="0.9"
            strokeWidth="0.95"
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width={TILE_WIDTH} height="14" fill={`url(#${patternId})`} />
    </svg>
  );
}

function HookedFishRig({ catchItem }: { catchItem: CatchSpec }) {
  return (
    <div
      style={{ left: `${catchItem.offsetX}px`, top: "48px" }}
      className="absolute pointer-events-none"
    >
      {/* Back Rig SVG: Inline Dropper Swivel & Clinch Knots on Fishing Line + Brass Swivel + Taut Leader Into Fish Mouth */}
      <svg
        width="46"
        height="34"
        viewBox="-8 -14 46 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-[8px] -top-[14px] overflow-visible z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]"
      >
        {/* Inline Saltwater Dropper Swivel + Braided Clinch Knots Gripping the 5.2px Fishing Line (y=0 is line center) */}
        <g>
          {/* Left & right dark-green braided Palomar/clinch knot wraps */}
          <rect x="-5.8" y="-3.1" width="3.5" height="6.2" rx="1.6" fill="#1C3D37" stroke="#0C1C19" strokeWidth="0.7" />
          <rect x="4.1" y="-3.1" width="3.5" height="6.2" rx="1.6" fill="#1C3D37" stroke="#0C1C19" strokeWidth="0.7" />
          {/* Polished miniature brass inline dropper sleeve */}
          <rect x="-2.6" y="-3.6" width="7.0" height="7.2" rx="3" fill="#C97E52" stroke="#4B2B16" strokeWidth="0.85" />
          <line x1="-0.9" y1="-1.6" x2="2.7" y2="-1.6" stroke="#FFF2DC" strokeOpacity="0.85" strokeWidth="0.85" strokeLinecap="round" />
        </g>

        {/* Short Taut Fluorocarbon Dropper Leader Streaming Right Under Pull */}
        <path
          d="M 7.0 -0.7 Q 12.2 -2.4 17 -3"
          stroke="#0A1418"
          strokeWidth="3.0"
          strokeOpacity="0.48"
          strokeLinecap="round"
        />
        <path
          d="M 7.0 -0.7 Q 12.2 -2.4 17 -3"
          stroke="#DCEAE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Polished Brass Barrel Swivel */}
        <ellipse
          cx="19.5"
          cy="-3"
          rx="3.2"
          ry="1.6"
          fill="#D4A657"
          stroke="#4B3210"
          strokeWidth="0.65"
        />
        <line x1="17.4" y1="-3.7" x2="21.6" y2="-3.7" stroke="#FFF1C7" strokeWidth="0.7" strokeLinecap="round" />
        <circle cx="23.5" cy="-3" r="1.6" fill="none" stroke="#E8C988" strokeWidth="1.2" />

        {/* Taut Fluorocarbon Leader Entering Directly Into the Fish's Mouth (Hook Concealed Inside) */}
        <path
          d="M 24.8 -3 L 36 -3"
          stroke="#0A1418"
          strokeWidth="2.8"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        <path
          d="M 24.8 -3 L 36 -3"
          stroke="#DCEAE4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Hooked Louisiana Fish — Flipped Facing Left, Wiggling Gently Around Its Mouth Where the Line Enters */}
      <div
        style={{
          left: "29px",
          top: `${catchItem.fishTop - 3}px`,
          width: `${catchItem.width}px`,
          height: `${catchItem.height}px`,
          transformOrigin: `3px ${catchItem.pivotY}px`,
        }}
        className={`absolute z-20 ${
          catchItem.altWiggle ? "animate-fish-wiggle-alt" : "animate-fish-wiggle"
        }`}
      >
        <img
          src={catchItem.src}
          alt=""
          draggable={false}
          className="w-full h-full object-contain -scale-x-100 drop-shadow-[0_6px_10px_rgba(8,14,34,0.52)]"
        />
      </div>
    </div>
  );
}

export default function AnimatedFishingRopeDivider() {
  const uid = useId();
  const patternId = `fishingLinePat-${uid}`;

  return (
    <div
      aria-hidden="true"
      className="relative z-30 w-full h-0 overflow-visible select-none pointer-events-none"
    >
      {/* Horizontal clip viewport centered exactly on the Hero/Badges seam (y = 48px) */}
      <div className="absolute inset-x-0 -top-[48px] h-[96px] overflow-x-clip">
        {/* 3x 1600px Seamless Continuous Track (4800px covers ultrawide screens cleanly) */}
        <div className="animate-rope-reel flex w-[4800px] h-full">
          {[0, 1, 2].map((tileIdx) => (
            <div
              key={tileIdx}
              style={{ width: `${TILE_WIDTH}px` }}
              className="relative h-full shrink-0"
            >
              {/* Slim Braided Saltwater Fishing Line Centered on the Seam (y = 48px) */}
              <div className="absolute left-0 top-[41px] w-full h-[14px]">
                <FishingLineTile patternId={`${patternId}-${tileIdx}`} />
              </div>

              {/* Physically Locked Hooked Fish Rigs Tied Directly to the Moving Fishing Line */}
              {CATCHES.map((catchItem) => (
                <HookedFishRig
                  key={`${tileIdx}-${catchItem.id}`}
                  catchItem={catchItem}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
