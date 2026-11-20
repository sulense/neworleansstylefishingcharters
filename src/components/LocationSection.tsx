"use client";

import { motion } from "framer-motion";
import { MapPin, NavigationArrow as Navigation, ArrowSquareOut as ExternalLink } from "@phosphor-icons/react/dist/ssr";
import { SITE_INFO } from "@/data/charterData";
import {
  BayouStampWatermark,
  MarshHorizonSilhouette,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative pt-16 pb-24 lg:pt-24 lg:pb-28 bg-white scroll-mt-20 overflow-hidden"
    >
      <NauticalChartOverlay dark={false} />
      <BayouStampWatermark className="hidden lg:block absolute top-14 right-10 w-40 h-40 text-[#203F39] opacity-[0.05] rotate-12" />
      <MarshHorizonSilhouette
        color="#849481"
        className="absolute bottom-0 inset-x-0 h-24 opacity-45"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout: Concise Copy Left / Live High-Res GBP Satellite Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
              Location · Where We Fish
            </span>
            <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-[31px] xl:text-[35px] font-bold text-[#203F39] tracking-tight leading-[1.16]">
              Just Outside New Orleans.
              <br />
              <span className="sm:whitespace-nowrap">A World Away From Ordinary.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-[#495754] leading-relaxed">
              Just south of New Orleans, the city opens into the calm inshore waters of the{" "}
              <strong>Lafitte and Barataria area</strong>
              —winding bayous, shallow marshes, and quiet bays teeming with South Louisiana
              wildlife. All charters depart from{" "}
              <strong>Joe&apos;s Landing</strong>.
            </p>

            {/* Primary Get Directions CTA */}
            <div className="mt-7">
              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-copper w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-xl text-sm sm:text-[15px] font-extrabold uppercase tracking-wider"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live High-Quality Google Business Profile Satellite Hybrid Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#849481]/60 shadow-[0_24px_50px_-18px_rgba(32,63,57,0.28)] h-[340px] sm:h-[410px] lg:h-[450px] bg-[#1D3530]">
              <iframe
                title="New Orleans Style Fishing Charters — Satellite Map at Joe's Landing, 4811 Privateer Blvd, Barataria, LA 70036"
                src={SITE_INFO.mapsEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />

              {/* Direct Clickable Link to Official Google Business Profile Map */}
              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#152B27]/90 hover:bg-[#BF754C] backdrop-blur-md text-[#F6F1E7] text-xs font-bold border border-[#F6F1E7]/25 shadow-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E5A780]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
