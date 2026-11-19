"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ship,
  Anchor,
  Fish,
  ExternalLink,
  FileCheck2,
  Sun,
  Coffee,
  Snowflake,
  CloudSun,
} from "lucide-react";
import { SITE_INFO } from "@/data/charterData";
import {
  BayouStampWatermark,
  CoastalWaveDivider,
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

interface PricingSectionProps {
  onSelectTier: (tierLabel: string) => void;
}

const INCLUDED_PILLARS = [
  {
    icon: Ship,
    title: "Boat & Professional Captain",
    detail:
      "Private 22 ft custom bay boat (225hp Mercury Pro XS), USCG licensed captain, all gas, oil, boat ice, and bottled water.",
  },
  {
    icon: Anchor,
    title: "Rods, Reels, Bait & Tackle",
    detail:
      "7' medium-action spinning rods, 2500 Penn reels (bait casters on request), popping corks, market shrimp, soft plastics, spoons & spinner baits.",
  },
  {
    icon: Fish,
    title: "Fish Cleaning & Packing",
    detail:
      "We clean, filet, and pack your eligible keepers in zip-lock bags so they are ready to cook, ship, or bring home.",
  },
];

const QUICK_BRING_ITEMS = [
  { icon: FileCheck2, label: "LA Fishing License ($20, ages 18+)", href: SITE_INFO.licenseUrl },
  { icon: CloudSun, label: "Weather-appropriate attire" },
  { icon: Sun, label: "Sunglasses & sun block" },
  { icon: Coffee, label: "Snacks & drinks (no glass)" },
  { icon: Snowflake, label: "Cooler for your filets" },
];

// Section 5: Charter Pricing cards strictly aligned to NOSFC - Brief
const CHARTER_PRICING_CARDS = [
  {
    id: "1-2-anglers",
    title: "1–2 Anglers",
    price: 550,
    description: "Private 5-hour fishing charter.",
    bookingTierValue: "1–2 Anglers ($550)",
  },
  {
    id: "3-anglers",
    title: "3 Anglers",
    price: 600,
    description: "Private 5-hour fishing charter.",
    bookingTierValue: "3 Anglers ($600)",
  },
  {
    id: "4-anglers",
    title: "4 Anglers",
    price: 650,
    description: "Private 5-hour fishing charter.",
    bookingTierValue: "4 Anglers ($650)",
  },
];

export default function PricingSection({ onSelectTier }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 bg-bayou-green text-[#F6F1E7] scroll-mt-20 overflow-x-clip"
    >
      {/* Clipped coastal background cartography, compass rose & USCG stamp */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <NauticalChartOverlay dark />
        <CompassRoseWatermark
          color="#D6E0D4"
          className="hidden md:block absolute -top-24 -right-24 w-[420px] h-[420px] opacity-[0.075]"
        />
        <BayouStampWatermark className="animate-float-stamp hidden lg:block absolute top-24 left-12 w-44 h-44 text-[#E5A780] opacity-[0.09]" />
      </div>

      {/* Hanging Saltwater Hook on Rope Connected Flush Into the Top Wave Seam (Zero Gap) */}
      <img
        src="/images/art/fishing-hook-rope.png"
        alt=""
        aria-hidden="true"
        className="animate-anchor-swing hidden xl:block pointer-events-none select-none absolute -top-[28px] left-5 2xl:left-10 w-24 2xl:w-28 opacity-90 drop-shadow-[0_14px_20px_rgba(0,0,0,0.55)] z-30"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION 5: CHARTER PRICING — Clean, Minimal 3-Card Grid per NOSFC Brief */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-11"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#E5A780]">
            Charter Pricing
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#F6F1E7] tracking-tight leading-[1.15]">
            Simple Pricing. Unforgettable Fishing.
          </h2>
        </motion.div>

        {/* 3 Sculpted Two-Tone Coastal Rate Plaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 max-w-4xl mx-auto items-stretch">
          {CHARTER_PRICING_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex"
            >
              <Link
                href="/contact"
                onClick={() => onSelectTier(card.bookingTierValue)}
                className="group relative w-full rounded-2xl overflow-hidden bg-[#FAF6EE] text-[#26302E] border border-[#E5D7C3]/75 hover:border-[#BF754C] shadow-[0_26px_54px_-18px_rgba(4,14,12,0.68),0_4px_14px_-4px_rgba(4,14,12,0.28)] hover:shadow-[0_34px_64px_-16px_rgba(4,14,12,0.78),0_0_28px_-6px_rgba(191,117,76,0.28)] transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E5A780]"
              >
                {/* Deep Bayou Green Header Band */}
                <div className="relative w-full bg-gradient-to-b from-[#1A3832] to-[#132924] px-6 py-5 border-b-2 border-[#BF754C]/65 group-hover:border-[#BF754C] transition-colors">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5A780]/50 to-transparent"
                  />

                  <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#F6F1E7] group-hover:text-[#F4D5B8] transition-colors tracking-tight leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Warm Oyster Cream Editorial Price Stage */}
                <div className="relative flex-1 w-full px-7 pt-8 pb-8 flex flex-col items-center justify-center">
                  {/* Delicate inset ledger hairline frame */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 rounded-xl border border-[#849481]/25 group-hover:border-[#BF754C]/35 transition-colors"
                  />
                  {/* Soft warm ambient spotlight behind the price */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(191,117,76,0.085),transparent_68%)] opacity-70 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Monumental Serif Price with Refined Copper Superscript $ */}
                  <div className="relative inline-flex items-start justify-center leading-none">
                    <span className="font-display text-2xl sm:text-[27px] font-bold text-[#BF754C] mt-1.5 mr-1">
                      $
                    </span>
                    <span className="font-display text-[54px] sm:text-[62px] font-bold text-[#203F39] tracking-[-0.03em]">
                      {card.price}
                    </span>
                  </div>

                  {/* Coastal Diamond Hairline Divider */}
                  <div
                    aria-hidden="true"
                    className="relative mt-5 flex items-center justify-center gap-2.5 w-full"
                  >
                    <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#849481]/50 group-hover:to-[#BF754C]/60 transition-colors" />
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#BF754C] transition-transform duration-300 group-hover:scale-125" />
                    <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#849481]/50 group-hover:to-[#BF754C]/60 transition-colors" />
                  </div>

                  <p className="relative mt-4 text-sm text-[#43524E] font-medium tracking-[0.01em] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Bottom Burnished-Copper Glint */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#203F39]/15 via-[#BF754C]/70 to-[#203F39]/15 opacity-75 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Per-Charter Clarification, $150 Deposit Note & Primary CTA */}
        <div className="mt-8 max-w-xl mx-auto text-center">
          <p className="text-sm sm:text-base font-semibold text-[#E5A780]">
            Pricing is per charter, not per person.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[#F6F1E7]/80 leading-relaxed">
            A <strong className="text-white font-semibold">${SITE_INFO.deposit} reservation deposit</strong>{" "}
            is required to reserve your charter date.{" "}
            <Link
              href="/charter-info"
              className="font-semibold text-[#E5A780] hover:text-white underline underline-offset-4 transition-colors"
            >
              View full charter details &amp; cancellation policies →
            </Link>
          </p>

          <div className="mt-7">
            <Link
              href="/contact"
              className="btn-copper w-full sm:w-auto inline-flex items-center justify-center text-white px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.14em]"
            >
              Request Your Charter Date
            </Link>
          </div>
        </div>

        {/* SECTION 6: CONNECTED "WHAT'S INCLUDED" BLOCK */}
        <div
          id="whats-included"
          className="mt-16 pt-14 border-t border-[#849481]/30 scroll-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#E5A780]">
              What&apos;s Included
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F6F1E7] leading-snug">
              We&apos;ve Got the Gear. You Bring the Excitement.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INCLUDED_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl bg-[#162D29]/80 border-2 border-[#849481]/55 hover:border-[#E5A780]/75 transition-colors p-6 sm:p-7 shadow-[0_14px_30px_-14px_rgba(6,16,14,0.5)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#BF754C]/20 border-2 border-[#BF754C]/60 text-[#E5A780] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F6F1E7]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#F6F1E7]/80 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Concise Verified "What to Bring" Reference Strip */}
          <div className="mt-8 rounded-2xl bg-[#F6F1E7]/10 border-2 border-[#849481]/55 px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5A780] shrink-0">
                What to Bring:
              </span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-[#F6F1E7]/90">
                {QUICK_BRING_ITEMS.map((b) => {
                  const BIcon = b.icon;
                  return b.href ? (
                    <a
                      key={b.label}
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#F6F1E7] hover:text-[#E5A780] underline underline-offset-4 transition-colors"
                    >
                      <BIcon className="w-4 h-4 text-[#E5A780] shrink-0" />
                      {b.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span key={b.label} className="inline-flex items-center gap-1.5">
                      <BIcon className="w-4 h-4 text-[#E5A780] shrink-0" />
                      {b.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Crisp White Testimonials Section */}
      <CoastalWaveDivider
        fillColor="#FFFFFF"
        midColor="#E8EEE6"
        backColor="#849481"
        crestColor="#E5A780"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}
