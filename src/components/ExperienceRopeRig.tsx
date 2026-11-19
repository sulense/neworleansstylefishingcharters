"use client";

import { useId } from "react";

/**
 * Sleek braided moss-green saltwater fishing line draped along a gentle quadratic Bezier arc.
 * Designed for crisp readability against Warm Oyster Cream (#F6F1E7) with a subtle metallic braid sheen.
 */
export function FishingLineArc({
  viewBoxWidth,
  viewBoxHeight = 44,
  x0,
  y0,
  cx,
  cy,
  x1,
  y1,
  className = "",
}: {
  viewBoxWidth: number;
  viewBoxHeight?: number;
  x0: number;
  y0: number;
  cx: number;
  cy: number;
  x1: number;
  y1: number;
  className?: string;
}) {
  const pathD = `M ${x0} ${y0} Q ${cx} ${cy} ${x1} ${y1}`;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block w-full h-full overflow-visible ${className}`}
    >
      {/* Whisper-soft grounded shadow cast onto the cream backdrop */}
      <path
        d={pathD}
        transform="translate(0, 2.6)"
        stroke="#152B27"
        strokeOpacity="0.16"
        strokeWidth="4.8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Core dark bayou-green braided fishing line */}
      <path
        d={pathD}
        stroke="#183832"
        strokeWidth="4.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Subtle mid-tone braided weave depth */}
      <path
        d={pathD}
        stroke="#2E5F56"
        strokeWidth="2.4"
        strokeDasharray="5 4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Crisp sunlit braided micro-weave sheen catching daylight */}
      <path
        d={pathD}
        transform="translate(0, -0.8)"
        stroke="#C5DAD0"
        strokeOpacity="0.78"
        strokeWidth="1.2"
        strokeDasharray="4 3.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/**
 * Miniature saltwater crimp sleeve & polished brass swivel ring terminating the left/right fishing line ends.
 * Attachment point sits precisely at (20, 8) for side="left" (mirrored cleanly for side="right").
 */
export function FishingLineEndTackle({
  side,
  className = "",
}: {
  side: "left" | "right";
  className?: string;
}) {
  const uid = useId();
  const brassGrad = `lineEndBrass-${uid}`;

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible drop-shadow-[0_2px_3px_rgba(21,43,39,0.22)] ${
        side === "right" ? "-scale-x-100" : ""
      } ${className}`}
    >
      <defs>
        <linearGradient id={brassGrad} x1="4" y1="3" x2="20" y2="13" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5CFA8" />
          <stop offset="50%" stopColor="#C4774B" />
          <stop offset="100%" stopColor="#6C3B1E" />
        </linearGradient>
      </defs>

      {/* Polished brass swivel eyelet ring */}
      <circle cx="8" cy="8" r="4.2" stroke="#4A2916" strokeWidth="2.4" />
      <circle cx="8" cy="8" r="4.2" stroke={`url(#${brassGrad})`} strokeWidth="1.45" />
      <path d="M 5.6 5.6 A 3.4 3.4 0 0 1 9.8 5" stroke="#FFF2DC" strokeWidth="0.7" strokeLinecap="round" opacity="0.85" />

      {/* Compact brass crimp sleeve & Palomar knot cinching onto the fishing line at x=20 */}
      <rect
        x="12.2"
        y="5.0"
        width="5.5"
        height="6.0"
        rx="2.4"
        fill={`url(#${brassGrad})`}
        stroke="#4A2916"
        strokeWidth="0.75"
      />
      <line x1="13.5" y1="6.7" x2="16.5" y2="6.7" stroke="#FFF2DC" strokeOpacity="0.78" strokeWidth="0.7" strokeLinecap="round" />

      {/* Tight dark-green braided clinch knot collar */}
      <rect x="17.6" y="5.3" width="3.5" height="5.4" rx="1.6" fill="#183832" stroke="#0E211D" strokeWidth="0.65" />
    </svg>
  );
}

/**
 * Stationary 3-way saltwater fishing swivel & braided Palomar knots anchored on the main line at y=14.
 * Sits in front of the top end of the pivoting leader so the card pivots cleanly from the swivel eye.
 */
export function FishingLineSwivelKnot({ className = "" }: { className?: string }) {
  const uid = useId();
  const brassGrad = `swivelKnotBrass-${uid}`;

  return (
    <svg
      aria-hidden="true"
      width="32"
      height="22"
      viewBox="0 0 32 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible drop-shadow-[0_2px_4px_rgba(21,43,39,0.28)] ${className}`}
    >
      <defs>
        <linearGradient id={brassGrad} x1="8" y1="6" x2="24" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5CFA8" />
          <stop offset="48%" stopColor="#C4774B" />
          <stop offset="100%" stopColor="#6C3B1E" />
        </linearGradient>
      </defs>

      {/* Left & right braided fishing line clinch knots gripping the horizontal 3-way swivel */}
      <rect x="3.6" y="8.3" width="4.8" height="5.4" rx="2" fill="#183832" stroke="#0D1F1C" strokeWidth="0.7" />
      <rect x="23.6" y="8.3" width="4.8" height="5.4" rx="2" fill="#183832" stroke="#0D1F1C" strokeWidth="0.7" />

      {/* Side brass swivel eyelets */}
      <circle cx="10.2" cy="11" r="2.2" fill="#F6F1E7" stroke="#4A2916" strokeWidth="1.9" />
      <circle cx="10.2" cy="11" r="2.2" stroke={`url(#${brassGrad})`} strokeWidth="1.15" />
      <circle cx="21.8" cy="11" r="2.2" fill="#F6F1E7" stroke="#4A2916" strokeWidth="1.9" />
      <circle cx="21.8" cy="11" r="2.2" stroke={`url(#${brassGrad})`} strokeWidth="1.15" />

      {/* Center machined brass 3-way swivel barrel & pivot pin */}
      <rect
        x="11.6"
        y="7.8"
        width="8.8"
        height="6.4"
        rx="3.2"
        fill={`url(#${brassGrad})`}
        stroke="#4A2916"
        strokeWidth="0.85"
      />
      <line x1="13.5" y1="9.6" x2="18.5" y2="9.6" stroke="#FFF2DC" strokeOpacity="0.82" strokeWidth="0.8" strokeLinecap="round" />

      {/* Bottom pivot eye locking smoothly over the pivoting vertical dropper leader */}
      <circle cx="16" cy="15.5" r="2.2" fill="#F6F1E7" stroke="#4A2916" strokeWidth="1.8" />
      <circle cx="16" cy="15.5" r="2.2" stroke={`url(#${brassGrad})`} strokeWidth="1.05" />
    </svg>
  );
}

/**
 * Unified pivoting saltwater fishing leader + miniature brass barrel swivel + coastlock snap clip +
 * flush-mounted riveted Bayou Green card bracket.
 * Positioned at -top-[30px] inside the pivoting card wrapper so y=0 sits dead-center inside the 3-way swivel
 * (transformOrigin: "50% -30px") and y=30 sits flush on the card's top border.
 */
export function CardFishingLineClip({ className = "" }: { className?: string }) {
  const uid = useId();
  const brassGrad = `clipBrass-${uid}`;
  const steelGrad = `clipSteel-${uid}`;

  return (
    <svg
      aria-hidden="true"
      width="48"
      height="43"
      viewBox="0 0 48 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible drop-shadow-[0_3px_5px_rgba(21,43,39,0.2)] ${className}`}
    >
      <defs>
        <linearGradient id={brassGrad} x1="18" y1="10" x2="30" y2="33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5CFA8" />
          <stop offset="48%" stopColor="#C4774B" />
          <stop offset="100%" stopColor="#6C3B1E" />
        </linearGradient>
        <linearGradient id={steelGrad} x1="20" y1="18" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F7F8" />
          <stop offset="50%" stopColor="#B8C7C4" />
          <stop offset="100%" stopColor="#566966" />
        </linearGradient>
      </defs>

      {/* Crisp taut braided vertical dropper leader line descending from the 3-way swivel at y=0 */}
      <line x1="24" y1="2" x2="24" y2="12.5" stroke="#183832" strokeWidth="3.6" strokeLinecap="round" />
      <line
        x1="23.2"
        y1="3"
        x2="23.2"
        y2="12"
        stroke="#C5DAD0"
        strokeOpacity="0.75"
        strokeWidth="1.05"
        strokeDasharray="2.5 2"
        strokeLinecap="round"
      />

      {/* Miniature brass barrel swivel along the vertical drop leader */}
      <ellipse
        cx="24"
        cy="15.5"
        rx="2.6"
        ry="3.9"
        fill={`url(#${brassGrad})`}
        stroke="#4A2916"
        strokeWidth="0.8"
      />
      <line x1="23" y1="13.4" x2="23" y2="17.2" stroke="#FFF2DC" strokeOpacity="0.8" strokeWidth="0.7" strokeLinecap="round" />

      {/* Sleek stainless-steel coastlock fishing snap clip linking swivel to the card clasp pin */}
      <path
        d="M 21.4 29.2 L 21.4 23.2 C 21.4 20.6 22.5 19.2 24 19.2 C 25.5 19.2 26.6 20.6 26.6 23.2 L 26.6 29.2"
        stroke="#223633"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M 21.4 29.2 L 21.4 23.2 C 21.4 20.6 22.5 19.2 24 19.2 C 25.5 19.2 26.6 20.6 26.6 23.2 L 26.6 29.2"
        stroke={`url(#${steelGrad})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 21.8 22.6 C 22 21 22.8 20 24 20"
        stroke="#FFFFFF"
        strokeOpacity="0.88"
        strokeWidth="0.65"
        strokeLinecap="round"
      />

      {/* Flush-mounted Bayou Green clasp bracket clamped solidly across the card's top border (y=30) */}
      <path
        d="M 8 30 C 8 28.1 9.5 27 11.4 27 L 36.6 27 C 38.5 27 40 28.1 40 30 L 40 38 C 40 40.2 38.2 41.8 36 41.8 L 12 41.8 C 9.8 41.8 8 40.2 8 38 Z"
        fill="#203F39"
        stroke="#849481"
        strokeOpacity="0.7"
        strokeWidth="0.9"
      />

      {/* Burnished copper snap-bar pin locking the fishing snap securely into the card bracket */}
      <rect
        x="18"
        y="28.3"
        width="12"
        height="3.2"
        rx="1.6"
        fill={`url(#${brassGrad})`}
        stroke="#4A2916"
        strokeWidth="0.75"
      />
      <line x1="19.6" y1="29.4" x2="28.4" y2="29.4" stroke="#FFF0D8" strokeOpacity="0.75" strokeWidth="0.65" strokeLinecap="round" />

      {/* Twin gleaming brass rivets anchoring the bracket flush onto the card frame */}
      <circle cx="13.2" cy="35.6" r="2" fill={`url(#${brassGrad})`} stroke="#4A2916" strokeWidth="0.65" />
      <circle cx="12.7" cy="35" r="0.5" fill="#FFF2DC" />
      <circle cx="34.8" cy="35.6" r="2" fill={`url(#${brassGrad})`} stroke="#4A2916" strokeWidth="0.65" />
      <circle cx="34.3" cy="35" r="0.5" fill="#FFF2DC" />

      {/* Subtle warm copper bottom trim hairline along the riveted plate */}
      <line x1="12" y1="40.3" x2="36" y2="40.3" stroke="#E5A780" strokeOpacity="0.35" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Vertical braided fishing line + miniature brass swivel clamped flush between stacked cards on mobile (< md).
 */
export function MobileVerticalLineLink() {
  const uid = useId();
  const brassGrad = `mobLineBrass-${uid}`;

  return (
    <div
      aria-hidden="true"
      className="md:hidden flex justify-center -my-2 relative z-20 pointer-events-none select-none"
    >
      <svg
        width="44"
        height="54"
        viewBox="0 0 44 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_2px_4px_rgba(21,43,39,0.2)]"
      >
        <defs>
          <linearGradient id={brassGrad} x1="14" y1="0" x2="30" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5CFA8" />
            <stop offset="50%" stopColor="#BF754C" />
            <stop offset="100%" stopColor="#6D3D20" />
          </linearGradient>
        </defs>

        {/* Taut vertical dark bayou-green braided fishing line */}
        <line x1="22" y1="9" x2="22" y2="45" stroke="#183832" strokeWidth="4" strokeLinecap="round" />
        <line
          x1="21.2"
          y1="10"
          x2="21.2"
          y2="44"
          stroke="#C5DAD0"
          strokeOpacity="0.75"
          strokeWidth="1.15"
          strokeDasharray="3.2 2.6"
          strokeLinecap="round"
        />

        {/* Miniature centered brass barrel swivel */}
        <ellipse cx="22" cy="27" rx="2.6" ry="4.2" fill={`url(#${brassGrad})`} stroke="#4A2916" strokeWidth="0.8" />
        <line x1="21" y1="24.8" x2="21" y2="28.8" stroke="#FFF2DC" strokeOpacity="0.8" strokeWidth="0.7" strokeLinecap="round" />

        {/* Top clasp bracket anchored flush to upper card */}
        <rect x="10" y="1" width="24" height="9" rx="3" fill="#203F39" stroke="#849481" strokeOpacity="0.7" strokeWidth="0.9" />
        <rect x="16.5" y="7.5" width="11" height="3.2" rx="1.6" fill={`url(#${brassGrad})`} stroke="#4A2916" strokeWidth="0.7" />
        <circle cx="14" cy="5.5" r="1.5" fill={`url(#${brassGrad})`} />
        <circle cx="30" cy="5.5" r="1.5" fill={`url(#${brassGrad})`} />

        {/* Bottom clasp bracket anchored flush to lower card */}
        <rect x="10" y="44" width="24" height="9" rx="3" fill="#203F39" stroke="#849481" strokeOpacity="0.7" strokeWidth="0.9" />
        <rect x="16.5" y="43.3" width="11" height="3.2" rx="1.6" fill={`url(#${brassGrad})`} stroke="#4A2916" strokeWidth="0.7" />
        <circle cx="14" cy="48.5" r="1.5" fill={`url(#${brassGrad})`} />
        <circle cx="30" cy="48.5" r="1.5" fill={`url(#${brassGrad})`} />
      </svg>
    </div>
  );
}
