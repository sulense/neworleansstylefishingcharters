"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  Car,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
  X,
} from "lucide-react";
import { NAV_ITEMS, SITE_INFO } from "@/data/charterData";
import AnimatedFishingRopeDivider from "@/components/AnimatedFishingRopeDivider";
import {
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

interface BookingAndFooterProps {
  selectedTier: string;
}

const ANGLER_OPTIONS = [
  "1–2 Anglers ($550)",
  "3 Anglers ($600)",
  "4 Anglers ($650)",
  "5+ Multi-Boat Group",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function normalizeTierLabel(tier: string): string {
  const cleaned = tier.replace("People", "Anglers");
  if (ANGLER_OPTIONS.includes(cleaned)) return cleaned;
  if (cleaned.includes("5+")) return "5+ Multi-Boat Group";
  return "3 Anglers ($600)";
}

function formatDateISO(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function formatDateReadable(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const dateObj = new Date(y, m - 1, d);
  return dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BookingAndFooter({ selectedTier }: BookingAndFooterProps) {
  const [groupSize, setGroupSize] = useState<string>(() =>
    normalizeTierLabel(selectedTier || "3 Anglers ($600)")
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [wantLodging, setWantLodging] = useState(false);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // SSR-safe interactive calendar state (hydrated on client mount to prevent any timezone mismatch)
  const [today, setToday] = useState<Date | null>(null);
  const [viewYear, setViewYear] = useState<number>(2026);
  const [viewMonth, setViewMonth] = useState<number>(0);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
    setViewYear(now.getFullYear());
    setViewMonth(now.getMonth());
  }, []);

  useEffect(() => {
    if (!selectedTier) return;
    if (selectedTier.toLowerCase().includes("lodging")) {
      setWantLodging(true);
    } else {
      setGroupSize(normalizeTierLabel(selectedTier));
    }
  }, [selectedTier]);

  const calendarCells = useMemo(() => {
    const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: Array<{ day: number | null; iso: string; isPast: boolean; isToday: boolean }> = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push({ day: null, iso: "", isPast: true, isToday: false });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(viewYear, viewMonth, day);
      cellDate.setHours(0, 0, 0, 0);
      const isPast = today ? cellDate.getTime() < today.getTime() : false;
      const isToday = today ? cellDate.getTime() === today.getTime() : false;
      cells.push({
        day,
        iso: formatDateISO(viewYear, viewMonth, day),
        isPast,
        isToday,
      });
    }
    return cells;
  }, [viewYear, viewMonth, today]);

  const canGoPrevMonth = useMemo(() => {
    if (!today) return false;
    return (
      viewYear > today.getFullYear() ||
      (viewYear === today.getFullYear() && viewMonth > today.getMonth())
    );
  }, [viewYear, viewMonth, today]);

  const handlePrevMonth = () => {
    if (!canGoPrevMonth) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* SECTION 11: FINAL BOOKING CTA — DRAMATIC BAYOU PHOTO BACKDROP + CALENDAR BOOKING APP CARD */}
      <section
        id="booking"
        className="relative py-20 lg:py-28 scroll-mt-20 overflow-hidden bg-[#152B27]"
      >
        {/* Full-Width Dramatic South Louisiana Bayou Backdrop */}
        <div className="absolute inset-0">
          <img
            src="/images/art/hero-cypress-bayou.jpg"
            alt="Sunrise light over calm South Louisiana bayou marshes in Lafitte"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#132622]/90 via-[#1A3530]/84 to-[#142824]/94" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Editorial Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-10 lg:mb-12"
          >
            <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#E5A780]">
              Reserve Your Lafitte Inshore Charter
            </span>
            <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F1E7] tracking-tight leading-[1.12]">
              Ready to Fish the Bayou?
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#F6F1E7]/85 leading-relaxed">
              Let&apos;s get you on the water. Pick your preferred date and reach out to{" "}
              {SITE_INFO.captain} to plan your private Louisiana fishing adventure.
            </p>
          </motion.div>

          {/* Booking-App-Style Split Card: Interactive Visual Calendar + Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden bg-[#F6F1E7] border-2 border-[#E5A780]/55 shadow-[0_34px_75px_-20px_rgba(5,14,12,0.75)]"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 px-6 sm:px-10 text-center max-w-xl mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#203F39]/10 text-[#203F39] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9 text-[#BF754C]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#203F39]">
                  Charter Availability Request Sent
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#495754] leading-relaxed">
                  Thanks{name ? `, ${name}` : ""}! Captain Jason will review availability for{" "}
                  <strong className="text-[#203F39]">{groupSize}</strong>
                  {preferredDate ? (
                    <>
                      {" "}
                      on{" "}
                      <strong className="text-[#203F39]">
                        {formatDateReadable(preferredDate)}
                      </strong>
                    </>
                  ) : (
                    " (flexible dates)"
                  )}
                  {wantLodging ? " with Private Guest House lodging" : ""} and get back to you
                  shortly.
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[#5A6864]">
                  Prefer to confirm right away? Call or text{" "}
                  <a
                    href={SITE_INFO.phoneHref}
                    className="font-bold text-[#BF754C] hover:text-[#203F39] underline underline-offset-4"
                  >
                    {SITE_INFO.phone}
                  </a>{" "}
                  ({SITE_INFO.hours}).
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-lg bg-[#203F39] hover:bg-[#BF754C] text-[#F6F1E7] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Another Date
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* LEFT PANE: INTERACTIVE VISUAL CALENDAR DATE PICKER */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#849481]/25 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#849481]/20">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-[#203F39] text-[#E5A780] flex items-center justify-center shrink-0">
                          <CalendarDays className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#BF754C]">
                            Step 1 of 2
                          </p>
                          <h3 className="font-display text-base sm:text-lg font-bold text-[#203F39] leading-tight">
                            Select Preferred Date
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Month Header & Controls */}
                    <div className="mt-5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        disabled={!canGoPrevMonth}
                        aria-label="Previous month"
                        className="w-9 h-9 rounded-lg border border-[#849481]/35 flex items-center justify-center text-[#203F39] hover:bg-[#F6F1E7] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <span className="font-display font-bold text-sm sm:text-base text-[#203F39]">
                        {MONTH_NAMES[viewMonth]} {viewYear}
                      </span>

                      <button
                        type="button"
                        onClick={handleNextMonth}
                        aria-label="Next month"
                        className="w-9 h-9 rounded-lg border border-[#849481]/35 flex items-center justify-center text-[#203F39] hover:bg-[#F6F1E7] transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Weekday Labels */}
                    <div className="mt-4 grid grid-cols-7 gap-1 text-center">
                      {WEEKDAYS.map((wd) => (
                        <span
                          key={wd}
                          className="text-[11px] font-bold uppercase tracking-wider text-[#6B7A74] py-1"
                        >
                          {wd}
                        </span>
                      ))}
                    </div>

                    {/* Calendar Day Grid */}
                    <div className="mt-1 grid grid-cols-7 gap-1">
                      {calendarCells.map((cell, idx) => {
                        if (cell.day === null) {
                          return <span key={`empty-${idx}`} className="h-9 sm:h-10" />;
                        }
                        const isSelected = preferredDate === cell.iso;
                        return (
                          <button
                            key={cell.iso}
                            type="button"
                            disabled={cell.isPast}
                            onClick={() => setPreferredDate(cell.iso)}
                            aria-pressed={isSelected}
                            className={`h-9 sm:h-10 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center ${
                              cell.isPast
                                ? "text-[#849481]/45 cursor-not-allowed"
                                : isSelected
                                ? "bg-[#BF754C] text-white font-bold shadow-md scale-[1.03] cursor-pointer"
                                : cell.isToday
                                ? "bg-[#F6F1E7] text-[#203F39] ring-1 ring-[#BF754C] hover:bg-[#203F39] hover:text-white cursor-pointer"
                                : "text-[#26302E] hover:bg-[#F6F1E7] hover:text-[#203F39] cursor-pointer"
                            }`}
                          >
                            {cell.day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Date Summary Pill */}
                    <div className="mt-4 rounded-xl bg-[#F6F1E7] border-2 border-[#849481]/45 px-3.5 py-2.5 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7A74]">
                          Preferred Charter Date
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-[#203F39] truncate">
                          {preferredDate
                            ? formatDateReadable(preferredDate)
                            : "Flexible — Pick any date or leave open"}
                        </p>
                      </div>
                      {preferredDate && (
                        <button
                          type="button"
                          onClick={() => setPreferredDate("")}
                          aria-label="Clear selected date"
                          className="p-1 rounded-md text-[#6B7A74] hover:text-[#203F39] hover:bg-white transition-colors cursor-pointer shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Verified Deposit & Payment Reassurance */}
                  <div className="mt-6 pt-4 border-t border-[#849481]/20 space-y-2 text-xs text-[#495754]">
                    <p className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#203F39]">Availability request:</strong> No charge
                        today. A ${SITE_INFO.deposit} deposit per day holds your boat once Capt.
                        Jason confirms.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5" />
                      <span>
                        No deposit charged for inclement weather · {SITE_INFO.cancellationDays}-day
                        advance cancellation refund · {SITE_INFO.paymentMethods}.
                      </span>
                    </p>
                  </div>
                </div>

                {/* RIGHT PANE: PARTY SIZE, CONTACT FIELDS & SUBMIT */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="pb-4 border-b border-[#849481]/25">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#BF754C]">
                        Step 2 of 2
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#203F39]">
                        Your Crew &amp; Contact Info
                      </h3>
                      <p className="text-xs sm:text-sm text-[#495754] mt-1">
                        Private 5-hour Lafitte inshore charters — all-inclusive pricing per boat.
                      </p>
                    </div>

                    {/* Number of Anglers Selector Pills */}
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#203F39] mb-2">
                        Number of Anglers
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {ANGLER_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setGroupSize(opt)}
                            className={`px-3 py-2.5 rounded-lg text-xs sm:text-[13px] font-bold border transition-all cursor-pointer ${
                              groupSize === opt
                                ? "bg-[#203F39] text-[#F6F1E7] border-[#203F39] shadow-sm"
                                : "bg-white text-[#203F39] border-[#849481]/35 hover:border-[#BF754C]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="booking-name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#203F39] mb-1.5"
                        >
                          Name *
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/40 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="booking-phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#203F39] mb-1.5"
                        >
                          Phone *
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(504) 555-0192"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/40 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#203F39] mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/40 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-colors"
                      />
                    </div>

                    {/* Optional Private Guest House Lodging Checkbox */}
                    <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white border-2 border-[#849481]/45 cursor-pointer hover:border-[#BF754C] transition-colors">
                      <input
                        type="checkbox"
                        checked={wantLodging}
                        onChange={(e) => setWantLodging(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#BF754C] rounded shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-[#3A4643] leading-snug">
                        Also check availability for the{" "}
                        <strong className="text-[#203F39]">
                          Private Guest House Rental ($200/night up to 4 guests, sleeps 8)
                        </strong>
                      </span>
                    </label>

                    {/* Message / Questions */}
                    <div>
                      <label
                        htmlFor="booking-notes"
                        className="block text-xs font-bold uppercase tracking-wider text-[#203F39] mb-1.5"
                      >
                        Message / Questions
                      </label>
                      <textarea
                        id="booking-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about your group (first-time anglers, kids ages 4+, evening charter request, or NOLA pickup questions)..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/40 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Primary Submit CTA + Prefer-to-Talk Line */}
                  <div className="mt-6 space-y-3.5">
                    <button
                      type="submit"
                      className="btn-copper w-full py-4 px-6 rounded-xl text-white text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Book Your Fishing Charter
                    </button>

                    <p className="text-center text-xs sm:text-sm text-[#495754]">
                      Prefer to talk? Call Captain Jason at{" "}
                      <a
                        href={SITE_INFO.phoneHref}
                        className="font-bold text-[#203F39] hover:text-[#BF754C] underline underline-offset-4 transition-colors"
                      >
                        {SITE_INFO.phone}
                      </a>{" "}
                      <span className="text-[#6B7A74]">({SITE_INFO.hours})</span>
                    </p>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Slim Animated Coastal Rope & Hooked Catches Seam Divider */}
      <AnimatedFishingRopeDivider />

      {/* SECTION 12: DEEP BAYOU GREEN FOOTER WITH SUBTLE WATERWAY CONTOUR TEXTURE */}
      <footer className="relative bg-bayou-green text-[#F6F1E7] border-t border-[#849481]/25 overflow-hidden">
        <NauticalChartOverlay dark />
        <CompassRoseWatermark
          color="#D6E0D4"
          className="hidden md:block absolute -bottom-28 -right-20 w-[340px] h-[340px] opacity-[0.075]"
        />
        <img
          src="/images/real/uscg-badge.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block pointer-events-none select-none absolute bottom-8 left-1/2 -translate-x-1/2 w-40 opacity-[0.06] invert"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 sm:py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#F6F1E7]/12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <img
                src="/images/real/logo-footer.png"
                alt="New Orleans Style Fishing Charters Logo"
                className="h-20 w-auto object-contain mb-4"
              />
              <p className="text-sm text-[#F6F1E7]/78 max-w-sm leading-relaxed">
                {SITE_INFO.legalName} (Est. {SITE_INFO.establishedYear}) — private inshore fishing
                charters in Lafitte &amp; Barataria, just outside New Orleans. Fully insured, USCG
                &amp; LDWF licensed local captains.
              </p>

              {/* Icon-Only Verified Social Links */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <a
                  href={SITE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Facebook"
                  className="w-10 h-10 rounded-lg bg-[#F6F1E7]/10 hover:bg-[#BF754C] text-[#F6F1E7] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SITE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="w-10 h-10 rounded-lg bg-[#F6F1E7]/10 hover:bg-[#BF754C] text-[#F6F1E7] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SITE_INFO.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                  className="w-10 h-10 rounded-lg bg-[#F6F1E7]/10 hover:bg-[#BF754C] text-[#F6F1E7] flex items-center justify-center transition-colors text-sm font-bold"
                >
                  𝕏
                </a>
                <a
                  href={SITE_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch on YouTube"
                  className="w-10 h-10 rounded-lg bg-[#F6F1E7]/10 hover:bg-[#BF754C] text-[#F6F1E7] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#E5A780] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-[#F6F1E7]/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#E5A780] hover:translate-x-0.5 inline-block transition-all"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-[#E5A780] hover:translate-x-0.5 inline-block transition-all"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Helpful Resources */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#E5A780]">
                Launch &amp; Contact
              </h4>
              <ul className="space-y-3 text-sm text-[#F6F1E7]/82">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#BF754C] shrink-0" />
                  <div>
                    <a
                      href={SITE_INFO.phoneHref}
                      className="text-base font-bold text-[#F6F1E7] hover:text-[#E5A780] transition-colors"
                    >
                      {SITE_INFO.phone}
                    </a>
                    <span className="block text-xs text-[#F6F1E7]/60">{SITE_INFO.hours}</span>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#BF754C] shrink-0" />
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="hover:text-[#E5A780] transition-colors break-all"
                  >
                    {SITE_INFO.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5" />
                  <a
                    href={SITE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E5A780] transition-colors"
                  >
                    Joe&apos;s Landing · {SITE_INFO.address}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#BF754C] shrink-0" />
                  <span>
                    NOLA Ride: {SITE_INFO.transportPartner.contact} (
                    <a
                      href={SITE_INFO.transportPartner.phoneHref}
                      className="hover:text-[#E5A780] font-semibold"
                    >
                      {SITE_INFO.transportPartner.phone}
                    </a>
                    )
                  </span>
                </li>
              </ul>

              <a
                href={SITE_INFO.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 px-4 py-2.5 rounded-lg bg-[#F6F1E7]/10 hover:bg-[#BF754C] border border-[#849481]/40 text-xs font-bold uppercase tracking-wider text-[#F6F1E7] transition-colors"
              >
                Purchase $20 LA Fishing License
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom Legal & Tagline Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F6F1E7]/60">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <p>© 2026 {SITE_INFO.name}. All rights reserved.</p>
              <span className="text-[#F6F1E7]/25">|</span>
              <a
                href={SITE_INFO.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6F1E7] underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <p className="italic font-display text-[#E5A780]">&ldquo;{SITE_INFO.tagline}&rdquo;</p>
          </div>
        </div>
      </footer>
    </>
  );
}
