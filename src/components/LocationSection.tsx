"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Car, ExternalLink, Compass } from "lucide-react";
import { OFFICIAL_PARTNERS, SITE_INFO } from "@/data/charterData";
import {
  BayouStampWatermark,
  FishingBookerLogo,
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
        {/* Split Layout: Left Copy & Address Card / Right Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
              Where We Fish &amp; Depart
            </span>
            <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold text-[#203F39] tracking-tight leading-[1.15]">
              Just Outside New Orleans. A World Away From Ordinary.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#495754] leading-relaxed">
              Just 20 miles south of Bourbon Street, the city fades into endless Lafitte and
              Barataria coastal marshes. We depart from{" "}
              <strong className="text-[#203F39] font-semibold">Joe&apos;s Landing</strong> and fish
              protected backwater marshes, lakes, bays, and bayous—typically less than five feet
              deep—teeming with redfish, speckled trout, black drum, sheepshead, and flounder.
            </p>

            {/* Verified Marina Address & Launch Details Card */}
            <div className="mt-6 rounded-2xl bg-[#F6F1E7] border-2 border-[#849481]/55 p-5 space-y-3.5">
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#203F39] text-[#E5A780] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#BF754C]">
                    Departure Marina · {SITE_INFO.launchName}
                  </p>
                  <p className="text-sm font-bold text-[#203F39] mt-0.5">
                    4811 Privateer Blvd, Suite 100, Barataria, LA 70036
                  </p>
                  <p className="text-xs text-[#495754] mt-1">
                    Free guest parking available at the end of Anthony Lane right at the launch.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#849481]/25 flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-white border border-[#849481]/35 text-[#203F39] flex items-center justify-center shrink-0 mt-0.5">
                  <Car className="w-4 h-4 text-[#BF754C]" />
                </span>
                <div className="text-xs sm:text-sm text-[#495754] leading-snug">
                  <p className="font-semibold text-[#203F39]">
                    Need round-trip NOLA transportation?
                  </p>
                  <p className="mt-0.5">
                    Call {SITE_INFO.transportPartner.contact} ({SITE_INFO.transportPartner.name}) at{" "}
                    <a
                      href={SITE_INFO.transportPartner.phoneHref}
                      className="font-bold text-[#BF754C] hover:text-[#203F39] transition-colors"
                    >
                      {SITE_INFO.transportPartner.phone}
                    </a>{" "}
                    and mention Captain Jason.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-copper w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

              <a
                href={SITE_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-[#203F39] text-[#203F39] hover:text-[#F6F1E7] border border-[#849481]/45 hover:border-[#203F39] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#BF754C]" />
                {SITE_INFO.phone}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#849481]/60 shadow-[0_22px_48px_-18px_rgba(32,63,57,0.22)] h-[320px] sm:h-[380px] lg:h-[430px] bg-[#EAEFE8]">
              <iframe
                title="Joe's Landing Launch Map — New Orleans Style Fishing Charters, 4811 Privateer Blvd Suite 100, Barataria, LA 70036"
                src="https://www.google.com/maps?q=4811+Privateer+Blvd,+Barataria,+LA+70036&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />

              <div className="pointer-events-none absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#203F39]/92 backdrop-blur-md text-[#F6F1E7] text-xs font-semibold border border-[#F6F1E7]/20 shadow-lg">
                <Compass className="w-3.5 h-3.5 text-[#E5A780]" />
                <span>~35–45 Min South of Downtown New Orleans</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Official Gear Partners, FishingBooker Reviews & LDWF License Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-10 border-t border-[#849481]/25"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#6B7A74] mb-6">
            Official Gear Partners, Verified Reviews &amp; Louisiana Licensing
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {OFFICIAL_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FBF8F3] hover:bg-white rounded-xl p-4 border-2 border-[#849481]/50 hover:border-[#BF754C] shadow-sm hover:shadow-md flex items-center justify-center h-24 transition-all duration-250 hover:-translate-y-0.5"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Official Partner Logo`}
                  loading="lazy"
                  className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}

            {/* Official FishingBooker Profile Card */}
            <a
              href={SITE_INFO.fishingBookerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FBF8F3] hover:bg-white rounded-xl p-4 border-2 border-[#849481]/50 hover:border-[#00897B] shadow-sm hover:shadow-md flex flex-col items-center justify-center h-24 transition-all duration-250 hover:-translate-y-0.5"
            >
              <FishingBookerLogo className="h-6" wordmarkClassName="text-[#203F39]" />
              <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#00897B]">
                4.8★ · 70+ Reviews
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Official LDWF Fishing License CTA */}
            <a
              href={SITE_INFO.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 md:col-span-1 group bg-[#203F39] hover:bg-[#BF754C] text-[#F6F1E7] rounded-xl p-4 border-2 border-[#203F39] hover:border-[#BF754C] shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center h-24 transition-all duration-250 hover:-translate-y-0.5"
            >
              <span className="font-display text-xs sm:text-sm font-bold leading-snug">
                Buy LA Fishing License
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#E5A780] group-hover:text-white">
                LDWF Official Site ($20)
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
