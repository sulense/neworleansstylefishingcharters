"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, BadgeCheck, ArrowUpRight } from "lucide-react";
import { SITE_INFO, TESTIMONIALS } from "@/data/charterData";
import {
  BayouStampWatermark,
  CoastalWaveDivider,
  CompassRoseWatermark,
  FishingBookerLogo,
  GoogleGLogo,
} from "@/components/CoastalDecorations";

export default function TestimonialsSection() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="reviews"
      className="relative pt-16 pb-28 lg:pt-24 lg:pb-34 bg-white overflow-hidden scroll-mt-20"
    >
      <CompassRoseWatermark
        color="#849481"
        className="hidden md:block absolute -top-20 -left-24 w-[340px] h-[340px] opacity-[0.07]"
      />
      <BayouStampWatermark className="hidden lg:block absolute bottom-20 right-10 w-40 h-40 text-[#203F39] opacity-[0.045] rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            Testimonials
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
            Good Times. Great Catches. Happy Anglers.
          </h2>
        </motion.div>

        {/* TRUSTINDEX-STYLE GOOGLE REVIEWS SUMMARY HEADER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-2xl bg-[#F6F1E7] border-2 border-[#849481]/60 p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-5"
        >
          {/* Left: Google Logo + EXCELLENT + 4.9 / 202 Reviews */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-white border-2 border-[#849481]/40 flex items-center justify-center shadow-xs shrink-0">
                <GoogleGLogo className="w-7 h-7" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg sm:text-xl text-[#203F39] tracking-tight">
                    EXCELLENT
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#203F39]/10 text-[#203F39] text-[11px] font-bold">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-display font-bold text-base text-[#203F39]">
                    {SITE_INFO.googleRating}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-[#F4B400] fill-[#F4B400]" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-[#495754]">
                    Based on{" "}
                    <strong className="text-[#203F39]">
                      {SITE_INFO.googleReviewCount} Google reviews
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Direct Google Write-a-Review CTA + FishingBooker Secondary Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={SITE_INFO.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold uppercase tracking-wider"
            >
              Write a Review
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={SITE_INFO.fishingBookerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#203F39] border-2 border-[#849481]/50 hover:border-[#203F39] transition-colors"
            >
              <FishingBookerLogo
                className="h-5"
                wordmarkClassName="text-[#203F39] group-hover:text-[#F6F1E7] transition-colors"
              />
              <span className="text-xs font-bold text-[#203F39] group-hover:text-[#E5A780] transition-colors">
                4.8★ (70+)
              </span>
            </a>
          </div>
        </motion.div>

        {/* TRUSTINDEX-STYLE 3-COLUMN x 2-ROW GOOGLE REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {TESTIMONIALS.map((review, idx) => {
            const isExpanded = Boolean(expandedIds[review.id]);
            const isLong = review.quote.length > 210;

            return (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.07 }}
                className="group relative rounded-2xl p-5 sm:p-6 bg-[#FAF7F1] hover:bg-white border-2 border-[#849481]/55 hover:border-[#BF754C] shadow-sm hover:shadow-[0_18px_36px_-16px_rgba(32,63,57,0.22)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Trustindex Card Header: Reviewer Avatar + Name + Google "G" Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={`${review.author} Google reviewer profile`}
                          loading="lazy"
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#849481]/40 shrink-0 bg-white"
                        />
                      ) : (
                        <span
                          style={{ backgroundColor: review.avatarColor }}
                          className="w-10 h-10 rounded-full text-[#F6F1E7] font-bold text-xs flex items-center justify-center border-2 border-[#849481]/40 shrink-0"
                        >
                          {review.initials}
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="font-display font-bold text-[15px] text-[#203F39] truncate leading-tight">
                          {review.author}
                        </p>
                        <p className="text-[11px] text-[#5F6E6A] mt-0.5">Google Review</p>
                      </div>
                    </div>

                    <a
                      href={SITE_INFO.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on Google Business Profile"
                      className="w-7 h-7 rounded-full bg-white border border-[#849481]/35 flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                    >
                      <GoogleGLogo className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Trustindex Star Rating Row + Blue Verified Badge */}
                  <div className="mt-3.5 flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#F4B400] fill-[#F4B400]" />
                      ))}
                    </div>
                    <BadgeCheck
                      className="w-4 h-4 text-[#1A73E8] shrink-0"
                      aria-label="Verified Google review"
                    />
                  </div>

                  {/* Verbatim Google Review Copy with Trustindex-style Expand */}
                  <p
                    className={`mt-3 text-[#35413E] text-sm leading-relaxed ${
                      !isExpanded && isLong ? "line-clamp-4" : ""
                    }`}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {isLong && (
                  <div className="mt-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(review.id)}
                      className="text-xs font-bold text-[#6B7A74] hover:text-[#BF754C] transition-colors cursor-pointer"
                    >
                      {isExpanded ? "Hide" : "Read more"}
                    </button>
                  </div>
                )}
              </motion.article>
            );
          })}

          {/* 6th Grid Card: Featured Google Business Profile Summary & CTA Card (Completes 3x2 Trustindex Grid) */}
          <motion.a
            href={SITE_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="group relative rounded-2xl p-6 bg-[#203F39] text-[#F6F1E7] border-2 border-[#BF754C] shadow-[0_22px_45px_-16px_rgba(21,43,39,0.5)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center"
          >
            <div className="flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <GoogleGLogo className="w-6 h-6" />
              </span>

              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E5A780]">
                Google Business Profile
              </p>

              <div className="mt-2 font-display text-4xl font-bold text-[#F6F1E7] leading-none">
                {SITE_INFO.googleRating}
                <span className="text-lg font-sans text-[#F6F1E7]/65 ml-1">/ 5</span>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-[#F4B400] fill-[#F4B400]" />
                ))}
              </div>

              <p className="mt-3 text-sm text-[#F6F1E7]/85 leading-relaxed max-w-xs">
                See all <strong className="text-white">{SITE_INFO.googleReviewCount} verified Google reviews</strong>{" "}
                from anglers and families who fished Lafitte with Captain Jason.
              </p>
            </div>

            <span className="btn-copper mt-6 w-full py-3 px-4 rounded-xl text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5">
              View Google Reviews
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Warm Oyster Cream Catch Gallery */}
      <CoastalWaveDivider
        fillColor="#F6F1E7"
        midColor="#EAE2D2"
        backColor="#D4DCD1"
        crestColor="#BF754C"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}
