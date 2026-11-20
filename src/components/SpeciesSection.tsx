"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowsOut as Maximize2, X, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import {
  CoastalWaveDivider,
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

interface MasonryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspectClass: string;
  objectPosition?: string;
}

// Curated 6-photo 100% authentic editorial masonry gallery in 3 alternating height-balanced columns
// (Tall/Wide, Wide/Tall, Tall/Wide) at exact natural aspect ratios — zero cropping, flush bottom edge.
const MASONRY_COLUMNS: MasonryPhoto[][] = [
  // Column 1: Tall 3:4 boat catch + 4:3 family catch
  [
    {
      id: "mg-1",
      src: "/images/real/charter-boat.webp",
      alt: "Two smiling anglers on the bow of the charter boat holding giant golden Louisiana redfish",
      caption: "Trophy Lafitte redfish aboard the bay boat",
      aspectClass: "aspect-[3/4]",
      objectPosition: "object-center",
    },
    {
      id: "mg-2",
      src: "/images/real/catches/catch-02.jpg",
      alt: "Three-generation family and kids smiling behind a full table of speckled trout and redfish at Joe's Landing",
      caption: "Family inshore charter haul at Joe's Landing",
      aspectClass: "aspect-[4/3]",
      objectPosition: "object-center",
    },
  ],
  // Column 2: 4:3 multi-boat group catch + Tall 3:4 flounder & marsh scenery on the bow
  [
    {
      id: "mg-3",
      src: "/images/real/catches/catch-05.jpg",
      alt: "Large smiling group charter crew behind dozens of fresh Lafitte redfish and black drum",
      caption: "Multi-boat group charter haul out of Barataria",
      aspectClass: "aspect-[4/3]",
      objectPosition: "object-center",
    },
    {
      id: "mg-4",
      src: "/images/real/catch-vertical.jpg",
      alt: "Smiling guest holding a fresh Louisiana flounder on the boat bow surrounded by calm Lafitte marshlands",
      caption: "Barataria marsh flounder under clear blue Louisiana skies",
      aspectClass: "aspect-[3/4]",
      objectPosition: "object-center",
    },
  ],
  // Column 3: Tall 3:4 kid & speckled trout with bay boat + 4:3 redfish on the boat
  [
    {
      id: "mg-5",
      src: "/images/real/catch-5.webp",
      alt: "Smiling young angler giving a thumbs-up behind a row of fresh speckled trout with the bay boat moored behind",
      caption: "Kid-friendly speckled trout action at Joe's Landing",
      aspectClass: "aspect-[3/4]",
      objectPosition: "object-center",
    },
    {
      id: "mg-6",
      src: "/images/real/catches/catch-11.jpg",
      alt: "Smiling guest aboard the bay boat holding a hefty copper-spotted redfish",
      caption: "Shallow-water copper redfish right off the marsh bank",
      aspectClass: "aspect-[4/3]",
      objectPosition: "object-center",
    },
  ],
];

export default function SpeciesSection() {
  const [activePhoto, setActivePhoto] = useState<MasonryPhoto | null>(null);

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
        {/* Part B: Photo Gallery Centered Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            Photo Gallery
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
            Life on the Louisiana Bayou
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#495754] leading-relaxed">
            Happy anglers, fresh redfish and trout catches, our custom bay boats, and the scenic
            marshes of Lafitte.
          </p>
        </motion.div>

        {/* Varied-Dimension 3-Column Editorial Masonry Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-start">
          {MASONRY_COLUMNS.map((colPhotos, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 lg:gap-5">
              {colPhotos.map((photo, itemIdx) => (
                <motion.button
                  key={photo.id}
                  type="button"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: (colIdx * 0.08) + (itemIdx * 0.05),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setActivePhoto(photo)}
                  aria-label={`View gallery photo: ${photo.caption}`}
                  className={`group relative w-full ${photo.aspectClass} rounded-2xl overflow-hidden bg-[#152B27] border-2 border-[#849481]/50 hover:border-[#BF754C] shadow-[0_16px_36px_-18px_rgba(21,43,39,0.3)] hover:shadow-[0_24px_48px_-14px_rgba(21,43,39,0.42)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#BF754C] cursor-pointer`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={itemIdx === 0 ? "eager" : "lazy"}
                    className={`w-full h-full object-cover ${
                      photo.objectPosition || "object-center"
                    } transition-transform duration-700 ease-out group-hover:scale-105`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#152B27]/82 via-[#152B27]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#203F39]/85 backdrop-blur-md border border-[#F6F1E7]/30 text-[#F6F1E7] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-xs sm:text-[13px] font-medium text-[#F6F1E7] leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]">
                      {photo.caption}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          ))}
        </div>

        {/* Primary Gallery CTA */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/gallery"
            className="btn-copper w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-xl text-sm sm:text-[15px] font-extrabold uppercase tracking-wider group"
          >
            View Our Fishing Gallery
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
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

      {/* Full-Image Lightbox View */}
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
                aria-label="Close gallery photo"
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
