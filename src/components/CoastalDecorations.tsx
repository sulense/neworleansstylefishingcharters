"use client";

export function CompassRoseWatermark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Outer degree rings */}
      <circle cx="200" cy="200" r="186" stroke={color} strokeWidth="1.4" strokeDasharray="3 5" />
      <circle cx="200" cy="200" r="170" stroke={color} strokeWidth="1.2" />
      <circle cx="200" cy="200" r="158" stroke={color} strokeWidth="0.7" strokeDasharray="8 6" />
      <circle cx="200" cy="200" r="92" stroke={color} strokeWidth="1" />
      <circle cx="200" cy="200" r="34" stroke={color} strokeWidth="1.2" />

      {/* 32 compass degree ticks */}
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i * 360) / 32;
        const len = i % 4 === 0 ? 16 : i % 2 === 0 ? 10 : 6;
        return (
          <line
            key={i}
            x1="200"
            y1="16"
            x2="200"
            y2={16 + len}
            stroke={color}
            strokeWidth={i % 4 === 0 ? "1.6" : "0.9"}
            transform={`rotate(${angle} 200 200)`}
          />
        );
      })}

      {/* Intercardinal diagonal star points (NE, SE, SW, NW) */}
      {[45, 135, 225, 315].map((rot) => (
        <g key={rot} transform={`rotate(${rot} 200 200)`}>
          <polygon points="200,52 214,186 200,200" fill={color} fillOpacity="0.45" />
          <polygon points="200,52 186,186 200,200" stroke={color} strokeWidth="1" />
        </g>
      ))}

      {/* Cardinal major star points (N, E, S, W) */}
      {[0, 90, 180, 270].map((rot) => (
        <g key={rot} transform={`rotate(${rot} 200 200)`}>
          <polygon points="200,26 220,180 200,200" fill={color} fillOpacity="0.75" />
          <polygon points="200,26 180,180 200,200" stroke={color} strokeWidth="1.3" fill="none" />
        </g>
      ))}

      {/* Cardinal letters */}
      <text
        x="200"
        y="14"
        textAnchor="middle"
        fill={color}
        fontSize="14"
        fontWeight="700"
        letterSpacing="2"
      >
        N
      </text>
      <text
        x="200"
        y="396"
        textAnchor="middle"
        fill={color}
        fontSize="13"
        fontWeight="700"
      >
        S
      </text>
      <text
        x="390"
        y="205"
        textAnchor="middle"
        fill={color}
        fontSize="13"
        fontWeight="700"
      >
        E
      </text>
      <text
        x="11"
        y="205"
        textAnchor="middle"
        fill={color}
        fontSize="13"
        fontWeight="700"
      >
        W
      </text>
      <circle cx="200" cy="200" r="8" fill={color} />
    </svg>
  );
}

export function MarshHorizonSilhouette({
  className = "",
  color = "#203F39",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none w-full ${className}`}
    >
      {/* Distant misty cypress treeline layer */}
      <path
        d="M0 170V116 C36 105 56 64 82 78 C98 86 112 52 138 66 C164 80 184 98 228 106 C268 113 305 118 358 114 C400 110 425 82 454 92 C480 100 510 120 580 124 C670 129 740 126 835 119 C885 115 918 76 955 86 C984 94 1010 62 1044 74 C1078 86 1110 108 1170 112 C1232 116 1272 72 1308 82 C1340 90 1372 48 1408 64 C1424 71 1435 82 1440 88 V170 H0 Z"
        fill={color}
        fillOpacity="0.16"
      />
      {/* Closer marsh grass & water bank layer */}
      <path
        d="M0 170V136 C64 128 112 118 176 126 C246 134 318 142 404 136 C496 130 564 146 668 144 C762 142 834 128 928 134 C1018 140 1094 148 1194 136 C1274 126 1364 120 1440 132 V170 H0 Z"
        fill={color}
        fillOpacity="0.26"
      />
      {/* Delicate bayou reed blades rising across the foreground bank */}
      <g stroke={color} strokeOpacity="0.34" strokeWidth="2" strokeLinecap="round">
        <path d="M90 170 Q84 132 72 104" />
        <path d="M106 170 Q112 138 124 114" />
        <path d="M238 170 Q232 140 222 118" />
        <path d="M250 170 Q258 144 268 124" />
        <path d="M1182 170 Q1174 136 1160 110" />
        <path d="M1200 170 Q1208 142 1222 118" />
        <path d="M1332 170 Q1324 130 1310 98" />
        <path d="M1352 170 Q1362 136 1378 106" />
      </g>
    </svg>
  );
}

export function NauticalChartOverlay({
  dark = true,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const stroke = dark ? "#D6E0D4" : "#203F39";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full ${className}`}
    >
      {/* Subtle latitude / longitude cartography grid */}
      <g stroke={stroke} strokeOpacity={dark ? "0.08" : "0.055"} strokeWidth="1">
        <line x1="0" y1="140" x2="1440" y2="140" strokeDasharray="4 8" />
        <line x1="0" y1="350" x2="1440" y2="350" strokeDasharray="4 8" />
        <line x1="0" y1="560" x2="1440" y2="560" strokeDasharray="4 8" />
        <line x1="280" y1="0" x2="280" y2="700" strokeDasharray="4 8" />
        <line x1="720" y1="0" x2="720" y2="700" strokeDasharray="4 8" />
        <line x1="1160" y1="0" x2="1160" y2="700" strokeDasharray="4 8" />
      </g>

      {/* Crosshair coordinate ticks */}
      {[
        [280, 140],
        [720, 140],
        [1160, 140],
        [280, 560],
        [1160, 560],
      ].map(([cx, cy], idx) => (
        <g key={idx} stroke={stroke} strokeOpacity={dark ? "0.16" : "0.11"} strokeWidth="1.2">
          <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} />
          <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} />
        </g>
      ))}
    </svg>
  );
}

export function NauticalRopeDivider({ className = "" }: { className?: string }) {
  const positionClass = className.includes("absolute") ? "" : "relative";
  return (
    <div
      aria-hidden="true"
      className={`w-full h-3.5 overflow-hidden select-none pointer-events-none ${positionClass} ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-55deg, #c6a76e 0px, #e8d2a2 5px, #8e6d36 8px, #5c431b 10px, #c6a76e 14px)",
        boxShadow:
          "inset 0 2px 3px rgba(255,248,225,0.45), inset 0 -2px 4px rgba(34,22,5,0.55), 0 3px 8px rgba(0,0,0,0.22)",
      }}
    />
  );
}

export function CoastalWaveDivider({
  fillColor = "#203F39",
  midColor = "#3B5D54",
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
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none w-full overflow-hidden leading-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-10 sm:h-14 lg:h-[68px]"
      >
        {/* Distant translucent tidal swell */}
        <path
          d="M0 44 C180 12, 360 66, 580 34 C780 6, 980 64, 1200 32 C1320 15, 1390 28, 1440 36 V84 H0 Z"
          fill={backColor}
          fillOpacity="0.26"
        />
        {/* Mid layered estuary current */}
        <path
          d="M0 54 C210 22, 420 74, 680 42 C900 16, 1100 68, 1320 40 C1375 33, 1412 40, 1440 46 V84 H0 Z"
          fill={midColor}
          fillOpacity="0.54"
        />
        {/* Primary foreground wave matching next section surface seamlessly */}
        <path
          d="M0 60 C240 82, 460 28, 740 54 C990 76, 1210 34, 1440 56 V84 H0 Z"
          fill={fillColor}
        />
        {/* Sunlit champagne-foam crest shimmer along leading wave edge */}
        <path
          d="M0 60 C240 82, 460 28, 740 54 C990 76, 1210 34, 1440 56"
          stroke={crestColor}
          strokeWidth="1.6"
          strokeOpacity="0.48"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function BayouStampWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Pure drawn nautical rings & compass medallion (no background text) */}
      <circle cx="110" cy="110" r="102" stroke="currentColor" strokeWidth="2.4" strokeDasharray="6 4" />
      <circle cx="110" cy="110" r="90" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="110" cy="110" r="64" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="110" cy="110" r="16" stroke="currentColor" strokeWidth="1.2" />

      {/* 16 compass degree ticks between outer rings */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line
            key={i}
            x1="110"
            y1="26"
            x2="110"
            y2={i % 4 === 0 ? "38" : "33"}
            stroke="currentColor"
            strokeWidth={i % 4 === 0 ? "1.6" : "1"}
            transform={`rotate(${angle} 110 110)`}
          />
        );
      })}

      {/* Center 4-point nautical star & subtle wave lines */}
      {[0, 90, 180, 270].map((rot) => (
        <polygon
          key={rot}
          points="110,58 117,103 110,110 103,103"
          fill="currentColor"
          fillOpacity="0.45"
          transform={`rotate(${rot} 110 110)`}
        />
      ))}
      <circle cx="110" cy="110" r="4.5" fill="currentColor" />
    </svg>
  );
}

export function FishingBookerLogo({
  className = "h-7",
  wordmarkClassName = "text-[#203F39]",
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Pinfish location-pin + fish emblem */}
      <svg
        aria-hidden="true"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
      >
        <path
          d="M18 2C10.82 2 5 7.82 5 15C5 23.6 18 34 18 34C18 34 31 23.6 31 15C31 7.82 25.18 2 18 2Z"
          fill="#00897B"
        />
        <path
          d="M11 15.2C13.6 11.9 18.6 11.4 22.8 14.5C24.2 13.3 25.5 12.6 26.7 12.5C26.1 14 26.1 16 26.7 17.5C25.5 17.4 24.2 16.7 22.8 15.5C18.6 18.6 13.6 18.1 11 15.2Z"
          fill="#FFFFFF"
        />
        <circle cx="15.2" cy="14.7" r="1.2" fill="#00897B" />
      </svg>
      <span className="font-sans font-extrabold tracking-tight text-[17px] leading-none">
        <span className={wordmarkClassName}>Fishing</span>
        <span className="text-[#00897B]">Booker</span>
      </span>
    </span>
  );
}

export function GoogleGLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function FishingBookerPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M18 2C10.82 2 5 7.82 5 15C5 23.6 18 34 18 34C18 34 31 23.6 31 15C31 7.82 25.18 2 18 2Z"
        fill="#00897B"
      />
      <path
        d="M11 15.2C13.6 11.9 18.6 11.4 22.8 14.5C24.2 13.3 25.5 12.6 26.7 12.5C26.1 14 26.1 16 26.7 17.5C25.5 17.4 24.2 16.7 22.8 15.5C18.6 18.6 13.6 18.1 11 15.2Z"
        fill="#FFFFFF"
      />
      <circle cx="15.2" cy="14.7" r="1.2" fill="#00897B" />
    </svg>
  );
}

/* Official Tripadvisor Ollie Owl vector mark (Simple Icons official path) */
export function TripAdvisorLogo({
  className = "w-6 h-6",
  fill = "#000000",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        fill={fill}
        d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"
      />
    </svg>
  );
}

/* Official Yelp Burst vector mark (Simple Icons official path) */
export function YelpLogo({
  className = "w-6 h-6",
  fill = "#FF1A1A",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        fill={fill}
        d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041z"
      />
    </svg>
  );
}

/* Official-style split pill badge for FishingBooker (matches horizontal accreditation badge rhythm) */
export function FishingBookerHeroBadge({
  rating = "4.8",
  count = "70+",
}: {
  rating?: string;
  count?: string;
}) {
  return (
    <span className="inline-flex items-stretch h-[50px] rounded-lg overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.35)] border border-white/25 select-none">
      <span className="bg-white px-2.5 flex items-center gap-1.5">
        <FishingBookerPinIcon className="w-6 h-6" />
        <span className="flex flex-col leading-none text-left">
          <span className="font-sans font-extrabold text-[11px] tracking-tight text-[#203F39]">
            Fishing
          </span>
          <span className="font-sans font-extrabold text-[11px] tracking-tight text-[#00897B]">
            Booker
          </span>
        </span>
      </span>
      <span className="bg-[#00796B] px-2.5 flex flex-col items-center justify-center text-white leading-tight">
        <span className="font-sans font-extrabold text-[13px] tracking-tight">
          {rating} <span className="text-[#FFD54F]">★</span>
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-white/90">
          {count} Rev
        </span>
      </span>
    </span>
  );
}

/* Official Tripadvisor circular brand seal (official #34E0A1 Tripadvisor green + black Ollie Owl) */
export function TripAdvisorHeroBadge({
  rating = "5.0",
  count = "126",
}: {
  rating?: string;
  count?: string;
}) {
  return (
    <span className="inline-flex flex-col items-center justify-center w-[58px] h-[58px] rounded-full bg-[#34E0A1] border-2 border-white/85 shadow-[0_6px_16px_rgba(0,0,0,0.38)] text-[#002B11] leading-none select-none">
      <TripAdvisorLogo className="w-7 h-5" fill="#000000" />
      <span className="mt-0.5 font-sans font-extrabold text-[11px] tracking-tight">
        {rating}★
      </span>
      <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#002B11]/85">
        {count} Rev
      </span>
    </span>
  );
}

/* Official Yelp circular brand seal (official white badge + crimson #FF1A1A Yelp Burst) */
export function YelpHeroBadge({
  rating = "5.0",
  count = "15",
}: {
  rating?: string;
  count?: string;
}) {
  return (
    <span className="inline-flex flex-col items-center justify-center w-[58px] h-[58px] rounded-full bg-white border-2 border-[#D32323] shadow-[0_6px_16px_rgba(0,0,0,0.38)] text-[#2D2E2F] leading-none select-none">
      <YelpLogo className="w-5 h-5" fill="#FF1A1A" />
      <span className="mt-0.5 font-sans font-extrabold text-[11px] tracking-tight text-[#D32323]">
        {rating}★
      </span>
      <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#2D2E2F]/80">
        {count} Rev
      </span>
    </span>
  );
}
