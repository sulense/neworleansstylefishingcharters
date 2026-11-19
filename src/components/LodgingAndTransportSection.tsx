"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  CoastalWaveDivider,
  MarshHorizonSilhouette,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

const GUEST_HOUSE_PHOTOS = [
  {
    id: "living",
    label: "Living Room",
    src: "/images/real/guest-house-living.jpg",
    alt: "Living room inside the New Orleans Style Fishing Charters private fishing guest house",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    src: "/images/real/guest-house-bedroom.jpg",
    alt: "Private bedroom inside the two-bedroom fishing guest house accommodating up to eight guests",
  },
];

export default function LodgingAndTransportSection() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const currentRoomPhoto = GUEST_HOUSE_PHOTOS[photoIdx];

  return (
    <section
      id="trip-logistics"
      className="relative pt-16 pb-28 lg:pt-22 lg:pb-34 bg-marsh-sage scroll-mt-20 overflow-hidden"
    >
      <NauticalChartOverlay dark={false} />
      <MarshHorizonSilhouette
        color="#203F39"
        className="absolute bottom-6 inset-x-0 h-28 opacity-45"
      />
      <img
        src="/images/art/marsh-cattails.png"
        alt=""
        aria-hidden="true"
        className="animate-marsh-sway hidden 2xl:block pointer-events-none select-none absolute bottom-2 -left-8 w-40 opacity-55"
      />
      <img
        src="/images/art/marsh-cattails.png"
        alt=""
        aria-hidden="true"
        className="animate-marsh-sway-delayed hidden 2xl:block pointer-events-none select-none absolute bottom-2 -right-8 w-40 opacity-55 -scale-x-100"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 8 Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-11 lg:mb-13"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            Lodging &amp; Transportation
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
            Make a Trip Out of It
          </h2>
        </motion.div>

        {/* Two Concise Photography-Led Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1 — Stay a Little Longer */}
          <motion.article
            id="lodging"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="group scroll-mt-24 rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#849481]/50 hover:border-[#BF754C]/85 shadow-[0_22px_46px_-22px_rgba(21,43,39,0.28),0_4px_12px_-4px_rgba(21,43,39,0.08)] hover:shadow-[0_30px_58px_-18px_rgba(21,43,39,0.36)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Matted Guest House Interior Photo + Clean Room Toggle */}
            <div className="p-2.5 pb-0">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#152B27] ring-1 ring-inset ring-[#152B27]/12">
                <img
                  src={currentRoomPhoto.src}
                  alt={currentRoomPhoto.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#152B27]/55 to-transparent" />

                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 p-1 rounded-lg bg-[#152B27]/80 backdrop-blur-md border border-[#F6F1E7]/20">
                  {GUEST_HOUSE_PHOTOS.map((room, i) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setPhotoIdx(i)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                        photoIdx === i
                          ? "bg-[#BF754C] text-white"
                          : "text-[#F6F1E7]/85 hover:text-white"
                      }`}
                    >
                      {room.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-7 pt-6 pb-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#BF754C]">
                  2 Bedrooms · Sleeps Up to 8
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#203F39] group-hover:text-[#BF754C] transition-colors">
                  Stay a Little Longer
                </h3>
                <div className="mt-3 h-[2px] w-10 rounded-full bg-[#BF754C]/65 group-hover:w-16 group-hover:bg-[#BF754C] transition-all duration-300" />
                <p className="mt-3.5 text-sm sm:text-[15px] text-[#455350] leading-[1.7]">
                  Make the most of your coastal fishing getaway at our available fishing guest
                  house, featuring two bedrooms and comfortable accommodations for up to eight
                  guests.
                </p>
              </div>

              <div className="mt-6 pt-1">
                <Link
                  href="/lodging"
                  className="btn-copper w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider group/cta"
                >
                  Explore Lodging
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-[#203F39] via-[#BF754C] to-[#849481] opacity-75 group-hover:opacity-100 transition-opacity" />
          </motion.article>

          {/* Card 2 — Getting Here Is Easy */}
          <motion.article
            id="amenities"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="group scroll-mt-24 rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#849481]/50 hover:border-[#BF754C]/85 shadow-[0_22px_46px_-22px_rgba(21,43,39,0.28),0_4px_12px_-4px_rgba(21,43,39,0.08)] hover:shadow-[0_30px_58px_-18px_rgba(21,43,39,0.36)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Matted Marina / Bayou Launch Surroundings Photo */}
            <div className="p-2.5 pb-0">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#152B27] ring-1 ring-inset ring-[#152B27]/12">
                <img
                  src="/images/art/hero-bay-boat-sunrise.jpg"
                  alt="Custom bay boat resting on calm Lafitte bayou waters near the departure launch at sunrise"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="px-6 sm:px-7 pt-6 pb-7 flex-1 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#BF754C]">
                  Round-Trip From New Orleans
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#203F39] group-hover:text-[#BF754C] transition-colors">
                  Getting Here Is Easy
                </h3>
                <div className="mt-3 h-[2px] w-10 rounded-full bg-[#BF754C]/65 group-hover:w-16 group-hover:bg-[#BF754C] transition-all duration-300" />
                <p className="mt-3.5 text-sm sm:text-[15px] text-[#455350] leading-[1.7]">
                  Staying in New Orleans without your own transportation? Round-trip transportation
                  from the city is available, along with help coordinating everything you need for a
                  smooth day on the water.
                </p>
              </div>

              <div className="mt-6 pt-1">
                <Link
                  href="/location"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#203F39] hover:bg-[#BF754C] text-[#F6F1E7] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors group/cta"
                >
                  Transportation &amp; Directions
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-[#203F39] via-[#BF754C] to-[#849481] opacity-75 group-hover:opacity-100 transition-opacity" />
          </motion.article>
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Warm Oyster Cream FAQ Section */}
      <CoastalWaveDivider
        fillColor="#F6F1E7"
        midColor="#ECE5D6"
        backColor="#D2DBD0"
        crestColor="#BF754C"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}
