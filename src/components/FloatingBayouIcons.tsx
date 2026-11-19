"use client";

import { useId } from "react";

type IconKind = "redfish" | "hook" | "trout" | "anchor";

interface FloatingItem {
  id: string;
  kind: IconKind;
  leftPct: number;
  size: number;
  durationSec: number;
  delaySec: number;
  swaySec: number;
  opacity: number;
  hookTone?: "steel" | "brass";
  desktopOnly?: boolean;
}

// Curated, uncrowded ambient fleet (18 sculpted 3D icons evenly distributed along the full footer -> header page height)
// ~2-3 icons naturally visible per viewport height without chasing your scroll
const FLOATING_ITEMS: FloatingItem[] = [
  // Left coastal margin lanes (staggered evenly from 0% to 95% of page height)
  { id: "fl-1", kind: "redfish", leftPct: 3.0, size: 42, durationSec: 118, delaySec: -6, swaySec: 7.4, opacity: 0.42 },
  { id: "fl-2", kind: "hook", leftPct: 8.8, size: 32, durationSec: 128, delaySec: -22, swaySec: 8.2, opacity: 0.4, hookTone: "brass", desktopOnly: true },
  { id: "fl-3", kind: "trout", leftPct: 4.5, size: 38, durationSec: 136, delaySec: -41, swaySec: 6.8, opacity: 0.36 },
  { id: "fl-4", kind: "hook", leftPct: 11.5, size: 30, durationSec: 124, delaySec: -59, swaySec: 8.5, opacity: 0.36, hookTone: "steel", desktopOnly: true },
  { id: "fl-5", kind: "redfish", leftPct: 3.4, size: 40, durationSec: 132, delaySec: -78, swaySec: 7.6, opacity: 0.4 },
  { id: "fl-6", kind: "anchor", leftPct: 9.5, size: 28, durationSec: 142, delaySec: -98, swaySec: 9.0, opacity: 0.3, desktopOnly: true },
  { id: "fl-7", kind: "trout", leftPct: 5.0, size: 36, durationSec: 126, delaySec: -112, swaySec: 7.1, opacity: 0.36, desktopOnly: true },

  // Whisper-soft inner drift lanes (extra subtle so center text/cards stay effortless to read)
  { id: "fm-1", kind: "hook", leftPct: 32, size: 26, durationSec: 138, delaySec: -15, swaySec: 8.6, opacity: 0.16, hookTone: "steel", desktopOnly: true },
  { id: "fm-2", kind: "redfish", leftPct: 68, size: 32, durationSec: 130, delaySec: -48, swaySec: 7.8, opacity: 0.16, desktopOnly: true },
  { id: "fm-3", kind: "trout", leftPct: 38, size: 30, durationSec: 144, delaySec: -86, swaySec: 8.3, opacity: 0.15, desktopOnly: true },
  { id: "fm-4", kind: "hook", leftPct: 64, size: 26, durationSec: 134, delaySec: -116, swaySec: 8.8, opacity: 0.16, hookTone: "brass", desktopOnly: true },

  // Right coastal margin lanes (staggered evenly from 0% to 95% of page height)
  { id: "fr-1", kind: "hook", leftPct: 94.5, size: 34, durationSec: 120, delaySec: -12, swaySec: 7.2, opacity: 0.42, hookTone: "steel" },
  { id: "fr-2", kind: "redfish", leftPct: 89.5, size: 44, durationSec: 134, delaySec: -32, swaySec: 8.0, opacity: 0.4, desktopOnly: true },
  { id: "fr-3", kind: "trout", leftPct: 93.2, size: 38, durationSec: 126, delaySec: -52, swaySec: 6.9, opacity: 0.36 },
  { id: "fr-4", kind: "hook", leftPct: 87.2, size: 30, durationSec: 140, delaySec: -71, swaySec: 8.9, opacity: 0.34, hookTone: "brass", desktopOnly: true },
  { id: "fr-5", kind: "redfish", leftPct: 94.0, size: 40, durationSec: 128, delaySec: -90, swaySec: 7.5, opacity: 0.4 },
  { id: "fr-6", kind: "anchor", leftPct: 89.0, size: 28, durationSec: 144, delaySec: -108, swaySec: 9.1, opacity: 0.3, desktopOnly: true },
  { id: "fr-7", kind: "hook", leftPct: 92.8, size: 32, durationSec: 122, delaySec: -118, swaySec: 7.7, opacity: 0.38, hookTone: "steel", desktopOnly: true },
];

function BayouIcon3D({
  item,
  uid,
}: {
  item: FloatingItem;
  uid: string;
}) {
  const { kind, size, hookTone = "steel" } = item;
  const gMain = `gMain-${uid}-${item.id}`;
  const gFin = `gFin-${uid}-${item.id}`;
  const gGloss = `gGloss-${uid}-${item.id}`;

  if (kind === "redfish") {
    return (
      <svg
        width={size}
        height={size * 0.58}
        viewBox="0 0 56 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sculpted 3D Copper-Bronze Louisiana Redfish Body */}
          <linearGradient id={gMain} x1="26" y1="3" x2="26" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE8B6" />
            <stop offset="28%" stopColor="#E39747" />
            <stop offset="68%" stopColor="#B86222" />
            <stop offset="100%" stopColor="#5C2D0B" />
          </linearGradient>
          <linearGradient id={gFin} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD28E" />
            <stop offset="100%" stopColor="#8F4614" />
          </linearGradient>
          <linearGradient id={gGloss} x1="8" y1="8" x2="36" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFF0C8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dorsal & Ventral Sculpted Fins */}
        <path
          d="M 18 9 C 22 3 28 3.5 32 9.5 Z"
          fill={`url(#${gFin})`}
          stroke="#4F2609"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        <path
          d="M 22 22.5 L 28 28.5 L 31 22 Z"
          fill={`url(#${gFin})`}
          stroke="#4F2609"
          strokeWidth="0.85"
          strokeLinejoin="round"
        />

        {/* Embossed Main Body & Tail */}
        <path
          d="M 4 16 C 10.5 6.2 27 5.5 39.5 13.2 L 50.5 7.2 L 47.4 16 L 50.5 24.8 L 39.5 18.8 C 27 26.5 10.5 25.8 4 16 Z"
          fill={`url(#${gMain})`}
          stroke="#4B2408"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* 3D Top Bevel Specular Highlight */}
        <path
          d="M 9.5 13.5 C 16 8.5 27.5 8.2 37.5 13.5"
          stroke={`url(#${gGloss})`}
          strokeWidth="2.1"
          strokeLinecap="round"
        />

        {/* Sculpted Gill Ridge & Pectoral Fin */}
        <path
          d="M 18 11 C 20.5 15.5 20.5 19.5 18 22.5"
          stroke="#5F2E0C"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M 18.8 11.4 C 21 15.5 21 19.3 18.8 22"
          stroke="#FFE4AE"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Iconic Redfish Tail Spot with Rim */}
        <circle cx="38.5" cy="16" r="2.6" fill="#1C1410" stroke="#F8D794" strokeWidth="0.8" />

        {/* Glossy 3D Eye */}
        <circle cx="12" cy="14" r="2.2" fill="#18120E" stroke="#F7D99B" strokeWidth="0.7" />
        <circle cx="11.3" cy="13.3" r="0.75" fill="#FFFFFF" />
      </svg>
    );
  }

  if (kind === "trout") {
    return (
      <svg
        width={size}
        height={size * 0.54}
        viewBox="0 0 56 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sculpted 3D Pearlescent Silver-Slate Speckled Trout */}
          <linearGradient id={gMain} x1="28" y1="3" x2="28" y2="27" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5FAFF" />
            <stop offset="30%" stopColor="#AFC7D8" />
            <stop offset="68%" stopColor="#658399" />
            <stop offset="100%" stopColor="#2A3E50" />
          </linearGradient>
          <linearGradient id={gGloss} x1="48" y1="8" x2="18" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E1F0FA" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dorsal Fin */}
        <path
          d="M 36 8.5 C 31.5 3.2 25 3.5 21 9 Z"
          fill="#8CA8BC"
          stroke="#25384A"
          strokeWidth="0.85"
          strokeLinejoin="round"
        />

        {/* Embossed Body Facing Right */}
        <path
          d="M 52 15 C 44 6.5 27 6.5 15.5 13 L 5.5 7.5 L 8.2 15 L 5.5 22.5 L 15.5 17 C 27 23.5 44 23.5 52 15 Z"
          fill={`url(#${gMain})`}
          stroke="#223446"
          strokeWidth="1.15"
          strokeLinejoin="round"
        />

        {/* 3D Glossy Top Ridge */}
        <path
          d="M 46.5 12.6 C 39 8.2 27.5 8.4 18 13"
          stroke={`url(#${gGloss})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Raised Speckled Trout Spots */}
        <circle cx="33" cy="11.5" r="1.2" fill="#1E2F3F" />
        <circle cx="28" cy="12.5" r="1.15" fill="#1E2F3F" />
        <circle cx="23.5" cy="11.8" r="1.1" fill="#1E2F3F" />
        <circle cx="19" cy="13.2" r="1.05" fill="#1E2F3F" />

        {/* Glossy 3D Eye */}
        <circle cx="44" cy="13.4" r="2.1" fill="#162230" stroke="#E4F0F8" strokeWidth="0.65" />
        <circle cx="44.7" cy="12.8" r="0.7" fill="#FFFFFF" />
      </svg>
    );
  }

  if (kind === "hook") {
    const isBrass = hookTone === "brass";
    return (
      <svg
        width={size * 0.74}
        height={size}
        viewBox="0 0 32 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gMain} x1="6" y1="4" x2="26" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isBrass ? "#FFF3CC" : "#FFFFFF"} />
            <stop offset="42%" stopColor={isBrass ? "#DDA952" : "#CBD6E4"} />
            <stop offset="100%" stopColor={isBrass ? "#7A5016" : "#556478"} />
          </linearGradient>
        </defs>

        {/* Deep 3D Extruded Back Shadow */}
        <g transform="translate(1.4, 1.6)" opacity="0.55">
          <circle cx="20.5" cy="6" r="3.4" stroke="#101829" strokeWidth="3.2" />
          <path
            d="M 20.5 9.4 L 20.5 29.5 C 20.5 38 7.5 38 7.5 29 C 7.5 24.5 10.3 22 13.4 21.2 L 10.2 26"
            stroke="#101829"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Forged Metallic Cylindrical Hook Body */}
        <circle cx="20.5" cy="6" r="3.4" stroke={`url(#${gMain})`} strokeWidth="2.8" />
        <path
          d="M 20.5 9.4 L 20.5 29.5 C 20.5 38 7.5 38 7.5 29 C 7.5 24.5 10.3 22 13.4 21.2 L 10.2 26"
          stroke={`url(#${gMain})`}
          strokeWidth="3.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Crisp Specular Rim Light Giving Real Rounded 3D Chrome/Brass Volume */}
        <path
          d="M 19.6 10.4 L 19.6 29 C 19.6 35.6 10.2 36.2 8.7 29.8"
          stroke="#FFFFFF"
          strokeWidth="1.05"
          strokeLinecap="round"
          opacity="0.88"
        />
        <path
          d="M 18.6 4.4 A 3.4 3.4 0 0 1 22.3 4.3"
          stroke="#FFFFFF"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    );
  }

  // Sculpted 3D Cast-Brass Maritime Anchor
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gMain} x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2C6" />
          <stop offset="45%" stopColor="#D4A24E" />
          <stop offset="100%" stopColor="#6D4813" />
        </linearGradient>
      </defs>

      {/* Extruded Back Edge */}
      <g transform="translate(1.3, 1.5)" opacity="0.5">
        <circle cx="18" cy="7.5" r="3.2" stroke="#18120A" strokeWidth="2.8" />
        <line x1="18" y1="10.7" x2="18" y2="30" stroke="#18120A" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="11.5" y1="15.5" x2="24.5" y2="15.5" stroke="#18120A" strokeWidth="2.8" strokeLinecap="round" />
        <path
          d="M 8 22 C 8 28 12.5 31 18 31 C 23.5 31 28 28 28 22"
          stroke="#18120A"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </g>

      {/* Cast Brass Body */}
      <circle cx="18" cy="7.5" r="3.2" stroke={`url(#${gMain})`} strokeWidth="2.5" />
      <line x1="18" y1="10.7" x2="18" y2="30" stroke={`url(#${gMain})`} strokeWidth="2.9" strokeLinecap="round" />
      <line x1="11.5" y1="15.5" x2="24.5" y2="15.5" stroke={`url(#${gMain})`} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M 8 22 C 8 28 12.5 31 18 31 C 23.5 31 28 28 28 22"
        stroke={`url(#${gMain})`}
        strokeWidth="2.9"
        strokeLinecap="round"
      />
      {/* Fluke Arrow Tips */}
      <path d="M 5.8 23.8 L 8 20.4 L 10.6 23.2" stroke={`url(#${gMain})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 25.4 23.2 L 28 20.4 L 30.2 23.8" stroke={`url(#${gMain})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Top Specular Bevel */}
      <line x1="17.2" y1="11.5" x2="17.2" y2="28.5" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
      <line x1="12.2" y1="14.7" x2="23.8" y2="14.7" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export default function FloatingBayouIcons() {
  const uid = useId();

  return (
    <div
      aria-hidden="true"
      className="floating-bayou-layer absolute inset-0 z-[25] pointer-events-none select-none overflow-hidden"
    >
      {FLOATING_ITEMS.map((item) => (
        /* Full-document-height GPU track so translate3d(-100%) flows naturally from real Footer -> real Header */
        <div
          key={item.id}
          style={{
            animationDuration: `${item.durationSec}s`,
            animationDelay: `${item.delaySec}s`,
          }}
          className={`animate-bayou-float-up absolute inset-0 ${
            item.desktopOnly ? "hidden md:block" : "block"
          }`}
        >
          <div
            style={
              item.leftPct > 50
                ? { right: `${Math.max(1.5, 100 - item.leftPct - 2.5)}%` }
                : { left: `${item.leftPct}%` }
            }
            className="absolute bottom-0"
          >
            <div
              style={{
                opacity: item.opacity,
                animationDuration: `${item.swaySec}s`,
                animationDelay: `${item.delaySec * 0.4}s`,
              }}
              className="animate-bayou-drift drop-shadow-[0_8px_10px_rgba(8,12,34,0.36)] drop-shadow-[0_2px_2px_rgba(8,12,34,0.22)]"
            >
              <BayouIcon3D item={item} uid={uid} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
