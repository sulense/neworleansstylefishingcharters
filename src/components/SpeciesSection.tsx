"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Instagram, ArrowUpRight, ArrowRight } from "lucide-react";
import { CATCH_FEED_PHOTOS, SITE_INFO, type CatchPhoto } from "@/data/charterData";
import {
  CoastalWaveDivider,
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

export default function SpeciesSection() {
  const [activePhoto, setActivePhoto] = useState<CatchPhoto | null>(null);
  const visiblePhotos = CATCH_FEED_PHOTOS.slice(0, 8);

  return (
    <section
      id="gallery"
      className="relative bg-oyster-cream pt-16 pb-28 lg:pt-22 lg:pb-34 overflow-x-clip scroll-mt-20"
    >
      {/* Clipped NOAA chart grid & compass rose */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <NauticalChartOverlay dark={false} />
        <CompassRoseWatermark
          color="#203F39"
          className="hidden md:block absolute -bottom-24 -left-24 w-[380px] h-[380px] opacity-[0.045]"
        />
      </div>

      {/* Hanging Saltwater Hook on Rope Connected Flush Into the Top Wave Seam (Zero Gap) */}
      <img
        src="/images/art/fishing-hook-rope.png"
        alt=""
        aria-hidden="true"
        className="animate-anchor-swing hidden xl:block pointer-events-none select-none absolute -top-[28px] right-5 2xl:right-10 w-24 2xl:w-28 opacity-85 -scale-x-100 drop-shadow-[0_12px_18px_rgba(32,63,57,0.35)] z-30"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Left-Aligned Header + Top-Right Action Buttons Above the 4x2 Catch Grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-2xl">
            <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
              New Orleans Fishing Charter Gallery · Lafitte, LA
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
              Our Catch Gallery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#495754] leading-relaxed">
              Real redfish, speckled trout, black drum, sheepshead, and flounder landed on our
              private Lafitte inshore fishing charters out of Joe&apos;s Landing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/gallery"
              className="btn-copper w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider group"
            >
              View Our Fishing Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={SITE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#203F39] text-[#203F39] hover:text-[#F6F1E7] border border-[#849481]/45 hover:border-[#203F39] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 group"
            >
              <Instagram className="w-4 h-4 text-[#BF754C] group-hover:text-[#E5A780]" />
              See All on Instagram
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* 4-Column x 2-Row Curated Square Catch Photo Grid (2-col on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {visiblePhotos.map((photo, idx) => (
            <motion.button
              key={photo.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: (idx % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActivePhoto(photo)}
              aria-label={`View catch photo: ${photo.caption}`}
              className="group relative aspect-square w-full rounded-xl overflow-hidden bg-[#152B27] border-2 border-[#849481]/55 hover:border-[#BF754C] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#BF754C] cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={idx < 4 ? "eager" : "lazy"}
                className={`w-full h-full object-cover ${
                  photo.objectPosition || "object-center"
                } transition-transform duration-700 ease-out group-hover:scale-105`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#152B27]/85 via-[#152B27]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#203F39]/85 backdrop-blur-md border border-[#F6F1E7]/30 text-[#F6F1E7] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs sm:text-[13px] font-medium text-[#F6F1E7] leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]">
                  {photo.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Soft Marsh Sage Lodging & Transport Section */}
      <CoastalWaveDivider
        fillColor="#E8EEE6"
        midColor="#D3DDD0"
        backColor="#849481"
        crestColor="#BF754C"
        className="absolute -bottom-px inset-x-0 z-20"
      />

      {/* Pure Full-Image Lightbox View Only */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[70] bg-[#101F1C]/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-fit max-w-[94vw] max-h-[88vh] rounded-2xl overflow-hidden border-2 border-[#F6F1E7]/35 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close catch photo"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#BF754C] text-white flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="block max-w-[94vw] max-h-[88vh] w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
