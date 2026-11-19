"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Ship,
  Fuel,
  Fish,
  Droplets,
  CloudSun,
  FileCheck2,
  Sun,
  Coffee,
  Snowflake,
  Check,
  ExternalLink,
  Anchor,
  Utensils,
  Package,
  Car,
} from "lucide-react";
import { FEES_INCLUDE, SITE_INFO, WHAT_TO_BRING, type ChecklistItem } from "@/data/charterData";
import {
  CoastalWaveDivider,
  CompassRoseWatermark,
  MarshHorizonSilhouette,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

function renderIcon(name: ChecklistItem["icon"]) {
  const cls = "w-5 h-5";
  switch (name) {
    case "boat":
      return <Ship className={cls} />;
    case "fuel":
      return <Fuel className={cls} />;
    case "rod":
      return <Anchor className={cls} />;
    case "water":
      return <Droplets className={cls} />;
    case "fish":
      return <Fish className={cls} />;
    case "license":
      return <FileCheck2 className={cls} />;
    case "weather":
      return <CloudSun className={cls} />;
    case "sun":
      return <Sun className={cls} />;
    case "snacks":
      return <Coffee className={cls} />;
    case "cooler":
      return <Snowflake className={cls} />;
  }
}

export default function TripChecklistSection() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const togglePacked = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const packedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = WHAT_TO_BRING.length;
  const progressPct = Math.round((packedCount / totalCount) * 100);

  return (
    <section
      id="trip-details"
      className="relative pt-14 pb-24 lg:pt-20 lg:pb-28 bg-estuary-chart overflow-hidden scroll-mt-20"
    >
      {/* Nautical Cartography Lines & Soundings */}
      <NauticalChartOverlay dark={false} />

      {/* Subtle Bourbon Street Fisherman Official Emblem Watermark Centered Behind Header */}
      <img
        src="/images/real/uscg-badge.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 left-1/2 -translate-x-1/2 w-56 sm:w-72 opacity-[0.055] grayscale"
      />

      {/* Soft Compass Rose Accent in Upper Left */}
      <CompassRoseWatermark
        color="#6d5a37"
        className="hidden lg:block absolute -top-20 -left-20 w-[300px] h-[300px] opacity-[0.05]"
      />

      {/* Full-Width Misty Marsh & Cypress Horizon Grounding the Cattails */}
      <MarshHorizonSilhouette
        color="#46422c"
        className="absolute bottom-0 inset-x-0 h-32 sm:h-40 opacity-95 z-10"
      />

      {/* LUSH BOTANICAL MARSH CATTAILS FRAMING LEFT & RIGHT (Gently Swaying in the Breeze!) */}
      <img
        src="/images/art/marsh-cattails.png"
        alt=""
        aria-hidden="true"
        className="animate-marsh-sway hidden xl:block pointer-events-none select-none absolute -bottom-5 -left-10 2xl:-left-2 w-56 2xl:w-64 opacity-95 drop-shadow-[0_12px_18px_rgba(38,32,16,0.25)] z-10"
      />
      <img
        src="/images/art/marsh-cattails.png"
        alt=""
        aria-hidden="true"
        className="animate-marsh-sway-delayed hidden xl:block pointer-events-none select-none absolute -bottom-5 -right-10 2xl:-right-2 w-56 2xl:w-64 opacity-95 -scale-x-100 drop-shadow-[0_12px_18px_rgba(38,32,16,0.25)] z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Bold Iconic "FEES INCLUDE  VS  WHAT TO BRING" Single Semantic SEO Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h2 className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-display uppercase text-3xl sm:text-5xl font-bold text-[#12115d] tracking-tight">
            <span>Fees Include</span>
            <span className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ff5a1d] to-[#c73800] text-white font-display font-bold text-lg sm:text-2xl shadow-lg border-2 border-[#fbf5e7]">
              VS
            </span>
            <span>What To Bring</span>
          </h2>
          <p className="mt-3 text-[#4b4336] text-sm sm:text-base max-w-xl mx-auto font-medium">
            Your charter fee covers boat, captain, gas, oil, rods, reels, bait, tackle, ice,
            bottled water &amp; fish cleaning. Check off what to bring on the right.
          </p>
        </motion.div>

        {/* Sculpted Warm Ivory Split Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT PANEL: Fees Include */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#fbf7ee] p-6 sm:p-7 shadow-[0_20px_45px_-18px_rgba(32,26,14,0.28)] border-2 border-[#d4c29e] flex flex-col"
          >
            <div className="pb-4 border-b-2 border-[#e5dac2]">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7c6a46]">
                All-Inclusive Rate
              </span>
              <h3 className="font-display uppercase text-2xl font-bold text-[#12115d]">
                Provided On Board
              </h3>
            </div>

            <ul className="mt-5 space-y-3 flex-1">
              {FEES_INCLUDE.map((item, idx) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 hover:bg-[#12115d] border border-[#e3d7be] hover:border-[#12115d] shadow-sm transition-all duration-300"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-md bg-[#ff4b09] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#12115d] group-hover:text-white transition-colors text-[15px]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#575044] group-hover:text-white/80 transition-colors mt-0.5 leading-snug">
                      {item.detail}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#f3ead8] text-[#6d5932] group-hover:bg-[#ff4b09] group-hover:text-white flex items-center justify-center shrink-0 transition-colors border border-[#dfd1b2] group-hover:border-[#ff4b09]">
                    {renderIcon(item.icon)}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT PANEL: Interactive What To Bring */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#fbf7ee] p-6 sm:p-7 shadow-[0_20px_45px_-18px_rgba(32,26,14,0.28)] border-2 border-[#d4c29e] flex flex-col"
          >
            <div className="flex items-center justify-between gap-2 pb-4 border-b-2 border-[#e5dac2]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff4b09]">
                  Tap to Check Off
                </span>
                <h3 className="font-display uppercase text-2xl font-bold text-[#12115d]">
                  Your Packing List
                </h3>
              </div>

              <div className="text-right">
                <span className="block text-xs font-bold text-[#12115d]">
                  {packedCount === totalCount
                    ? "All Packed!"
                    : `${packedCount} / ${totalCount} Packed`}
                </span>
                <div className="mt-1.5 w-24 h-2 rounded-full bg-[#e3d7be] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ff4b09] to-[#ff7c47] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 24 }}
                  />
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-3 flex-1">
              {WHAT_TO_BRING.map((item, idx) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.4 }}
                    onClick={() => togglePacked(item.id)}
                    className={`group flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all duration-250 cursor-pointer select-none shadow-sm ${
                      isChecked
                        ? "bg-emerald-50/90 border-emerald-400/60"
                        : "bg-white/85 border-[#e3d7be] hover:border-[#ff4b09] hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={`Mark ${item.title} as packed`}
                      className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isChecked
                          ? "bg-emerald-600 border-emerald-600 text-white scale-105"
                          : "border-[#ff4b09]/70 bg-white group-hover:border-[#ff4b09]"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4
                          className={`font-bold text-[15px] transition-colors ${
                            isChecked ? "line-through text-slate-400" : "text-[#12115d]"
                          }`}
                        >
                          {item.title}
                        </h4>
                        {item.actionUrl && (
                          <a
                            href={item.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#ff4b09] hover:bg-[#12115d] text-white transition-colors shadow-sm"
                          >
                            {item.actionLabel}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p
                        className={`text-xs sm:text-sm mt-0.5 leading-snug transition-colors ${
                          isChecked ? "text-slate-400" : "text-[#575044]"
                        }`}
                      >
                        {item.detail}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors border ${
                        isChecked
                          ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                          : "bg-[#f3ead8] text-[#ff4b09] border-[#dfd1b2]"
                      }`}
                    >
                      {renderIcon(item.icon)}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Verified Official Charter Amenities Strip (From /amenities/ Page) */}
        <motion.div
          id="amenities"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 scroll-mt-28 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Cook Your Catch */}
          <div className="rounded-2xl bg-[#fbf7ee] p-5 border-2 border-[#d4c29e] shadow-sm">
            <div className="flex items-center gap-2.5 text-[#12115d] font-display uppercase font-bold text-base">
              <Utensils className="w-4 h-4 text-[#ff4b09]" />
              Cook Your Catch
            </div>
            <p className="mt-1.5 text-xs text-[#575044] leading-relaxed">
              Have your fresh catch fried, blackened, or sautéed at partner local restaurants:
            </p>
            <div className="mt-2.5 flex flex-col gap-1">
              {SITE_INFO.restaurants.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#12115d] hover:text-[#ff4b09] transition-colors"
                >
                  {r.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Fish Shipping */}
          <div className="rounded-2xl bg-[#fbf7ee] p-5 border-2 border-[#d4c29e] shadow-sm">
            <div className="flex items-center gap-2.5 text-[#12115d] font-display uppercase font-bold text-base">
              <Package className="w-4 h-4 text-[#ff4b09]" />
              Ship Your Catch Home
            </div>
            <p className="mt-1.5 text-xs text-[#575044] leading-relaxed">
              Freeze, package &amp; ship anywhere in the U.S. with{" "}
              <strong className="text-[#12115d]">{SITE_INFO.shippingPartner.name}</strong> (
              {SITE_INFO.shippingPartner.contact}):
            </p>
            <a
              href={SITE_INFO.shippingPartner.phoneHref}
              className="mt-2.5 inline-block text-xs font-bold text-[#ff4b09] hover:text-[#12115d] transition-colors"
            >
              Call {SITE_INFO.shippingPartner.phone} · Marrero, LA
            </a>
          </div>

          {/* Round-Trip Transportation */}
          <div className="rounded-2xl bg-[#fbf7ee] p-5 border-2 border-[#d4c29e] shadow-sm">
            <div className="flex items-center gap-2.5 text-[#12115d] font-display uppercase font-bold text-base">
              <Car className="w-4 h-4 text-[#ff4b09]" />
              NOLA Round-Trip Rides
            </div>
            <p className="mt-1.5 text-xs text-[#575044] leading-relaxed">
              Uber/Lyft are out of range for return pickups from Lafitte. Book round-trip rides with{" "}
              <strong className="text-[#12115d]">{SITE_INFO.transportPartner.contact}</strong> at{" "}
              {SITE_INFO.transportPartner.name}:
            </p>
            <a
              href={SITE_INFO.transportPartner.phoneHref}
              className="mt-2.5 inline-block text-xs font-bold text-[#ff4b09] hover:text-[#12115d] transition-colors"
            >
              Call {SITE_INFO.transportPartner.phone} (Mention Capt. Jason)
            </a>
          </div>
        </motion.div>
      </div>

      {/* Coastal Wave Seam Flowing Into Deep Bayou Teal Photo Gallery */}
      <CoastalWaveDivider
        fillColor="#1c495a"
        midColor="#286075"
        backColor="#3c7f96"
        crestColor="#ebd8ad"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}
