"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Car,
  Utensils,
  Package,
  Phone,
  ArrowRight,
  ExternalLink,
  Check,
  AlertCircle,
  MapPin,
} from "lucide-react";
import { LODGING_INFO, SITE_INFO } from "@/data/charterData";
import {
  CoastalWaveDivider,
  MarshHorizonSilhouette,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

interface LodgingAndTransportSectionProps {
  onSelectTier: (tierLabel: string) => void;
}

const GUEST_HOUSE_PHOTOS = [
  {
    id: "living",
    label: "Living Room",
    src: "/images/real/guest-house-living.jpg",
    alt: "Living room inside the New Orleans Style Fishing Charters private guest house rental in Lafitte, Louisiana",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    src: "/images/real/guest-house-bedroom.jpg",
    alt: "Clean private guest house bedroom near Joe's Landing in Lafitte, Louisiana — sleeps up to 8 guests",
  },
];

export default function LodgingAndTransportSection({
  onSelectTier,
}: LodgingAndTransportSectionProps) {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-14"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            Lodging, Transportation &amp; Local Amenities
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
            Make a Trip Out of It
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#495754] leading-relaxed">
            Turn your morning on the bayou into an effortless South Louisiana getaway—with private
            waterfront-area lodging, round-trip New Orleans transportation, cook-your-catch dining,
            and dry-ice fish shipping.
          </p>
        </motion.div>

        {/* Two Split Photography Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* CARD 1: STAY A LITTLE LONGER (PRIVATE GUEST HOUSE) */}
          <motion.article
            id="lodging"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="scroll-mt-24 rounded-2xl overflow-hidden bg-white border-2 border-[#849481]/60 shadow-[0_20px_44px_-18px_rgba(32,63,57,0.2)] flex flex-col justify-between"
          >
            <div>
              {/* Real Guest House Interior Photo + Clean Room Toggle */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#152B27]">
                <img
                  src={currentRoomPhoto.src}
                  alt={currentRoomPhoto.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#152B27]/75 via-[#152B27]/20 to-transparent" />

                <span className="absolute top-3.5 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#203F39]/90 backdrop-blur-sm text-[#F6F1E7] text-[11px] font-bold uppercase tracking-wider border border-[#F6F1E7]/20">
                  <Home className="w-3.5 h-3.5 text-[#E5A780]" />
                  {LODGING_INFO.title}
                </span>

                {/* Subtle Authentic Room Switcher */}
                <div className="absolute bottom-3.5 right-4 inline-flex items-center gap-1 p-1 rounded-lg bg-[#152B27]/80 backdrop-blur-md border border-[#F6F1E7]/20">
                  {GUEST_HOUSE_PHOTOS.map((room, i) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setPhotoIdx(i)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                        photoIdx === i
                          ? "bg-[#BF754C] text-white"
                          : "text-[#F6F1E7]/80 hover:text-white"
                      }`}
                    >
                      {room.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold text-[#203F39]">
                    Stay a Little Longer
                  </h3>
                  <span className="text-sm font-bold text-[#BF754C]">{LODGING_INFO.baseRate}</span>
                </div>

                <p className="mt-2.5 text-sm text-[#495754] leading-relaxed">
                  Skip the early-morning highway drive from downtown. Our clean, private{" "}
                  <strong className="text-[#203F39] font-semibold">{LODGING_INFO.layout}</strong>{" "}
                  guest house keeps your fishing crew rested right near Lafitte and Joe&apos;s
                  Landing.
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#3A4643]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      <strong>Rates:</strong> {LODGING_INFO.baseRate} ·{" "}
                      {LODGING_INFO.extraGuestRate} · {LODGING_INFO.cleaningFee}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      <strong>Beds:</strong> Master (1 queen, 1 twin/full bunk, 1 twin/twin bunk) ·
                      Bedroom 2 (1 full, 1 twin/full bunk)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      <strong>Amenities:</strong> {LODGING_INFO.amenities}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/lodging"
                className="btn-copper w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider group"
              >
                Explore Lodging
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                onClick={() => onSelectTier("Charter + Guest House Lodging")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-[#203F39] hover:text-[#BF754C] border border-[#849481]/40 hover:border-[#BF754C] transition-colors"
              >
                Reserve Guest House
              </Link>
            </div>
          </motion.article>

          {/* CARD 2: GETTING HERE IS EASY (TRANSPORTATION FROM NEW ORLEANS) */}
          <motion.article
            id="amenities"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="scroll-mt-24 rounded-2xl overflow-hidden bg-white border-2 border-[#849481]/60 shadow-[0_20px_44px_-18px_rgba(32,63,57,0.2)] flex flex-col justify-between"
          >
            <div>
              {/* Golden-Hour Lafitte Bay Boat Launch Scene */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#152B27]">
                <img
                  src="/images/art/hero-bay-boat-sunrise.jpg"
                  alt="Custom 22-foot inshore bay boat resting on calm Lafitte bayou marsh waters at sunrise near Joe's Landing"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#152B27]/75 via-[#152B27]/20 to-transparent" />

                <span className="absolute top-3.5 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#203F39]/90 backdrop-blur-sm text-[#F6F1E7] text-[11px] font-bold uppercase tracking-wider border border-[#F6F1E7]/20">
                  <Car className="w-3.5 h-3.5 text-[#E5A780]" />
                  Round-Trip NOLA Transportation
                </span>

                <span className="absolute bottom-3.5 left-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F1E7] drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)]">
                  <MapPin className="w-3.5 h-3.5 text-[#E5A780]" />
                  ~20 miles (35–45 min) south of Downtown New Orleans
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold text-[#203F39]">
                  Getting Here Is Easy
                </h3>

                <p className="mt-2.5 text-sm text-[#495754] leading-relaxed">
                  Staying in the French Quarter or downtown New Orleans without a rental car? We
                  partner directly with{" "}
                  <strong className="text-[#203F39] font-semibold">
                    {SITE_INFO.transportPartner.contact} at {SITE_INFO.transportPartner.name}
                  </strong>{" "}
                  for reliable round-trip pickup to Joe&apos;s Landing, airport transfers, and local
                  tours.
                </p>

                {/* Honest Rideshare Warning + Verified Partner Call Box */}
                <div className="mt-4 rounded-xl bg-[#F6F1E7] border-2 border-[#849481]/45 p-4 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A4643]">
                    <AlertCircle className="w-4 h-4 text-[#BF754C] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#203F39]">Heads up on rideshares:</strong> Uber and
                      Lyft drivers are out of range for return pickups from Lafitte. Pre-book a
                      round-trip ride with Tony and mention Captain Jason.
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#849481]/25 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#203F39]">
                      {SITE_INFO.transportPartner.name}
                    </span>
                    <a
                      href={SITE_INFO.transportPartner.phoneHref}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#BF754C] hover:text-[#203F39] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {SITE_INFO.transportPartner.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/location"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#203F39] hover:bg-[#BF754C] text-[#F6F1E7] px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors group"
              >
                Transportation &amp; Directions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={SITE_INFO.transportPartner.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-[#203F39] hover:text-[#BF754C] border border-[#849481]/40 hover:border-[#BF754C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#BF754C]" />
                Call Tony ({SITE_INFO.transportPartner.phone})
              </a>
            </div>
          </motion.article>
        </div>

        {/* Verified Partner Amenities Strip: Cook Your Catch & Ship Your Catch Home */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Cook Your Catch */}
          <div className="rounded-2xl bg-[#F6F1E7] border-2 border-[#849481]/55 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#203F39] text-[#E5A780] flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#203F39]">
                Cook Your Fresh Catch Locally
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#495754] leading-relaxed">
                Bring your cleaned fillets straight from our dock to partner restaurants that cook
                your catch New Orleans style:
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {SITE_INFO.restaurants.map((rest) => (
                  <a
                    key={rest.name}
                    href={rest.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#203F39] hover:text-[#BF754C] underline underline-offset-4 transition-colors"
                  >
                    {rest.name}
                    <ExternalLink className="w-3 h-3 text-[#BF754C]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Ship Your Catch Home */}
          <div className="rounded-2xl bg-[#F6F1E7] border-2 border-[#849481]/55 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#203F39] text-[#E5A780] flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#203F39]">
                Flying Home? Ship Your Catch
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#495754] leading-relaxed">
                <strong className="text-[#203F39]">{SITE_INFO.shippingPartner.name}</strong> (
                {SITE_INFO.shippingPartner.address}) vacuum-packs and ships fillets nationwide on
                dry ice.
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm">
                <a
                  href={SITE_INFO.shippingPartner.phoneHref}
                  className="inline-flex items-center gap-1.5 font-bold text-[#BF754C] hover:text-[#203F39] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {SITE_INFO.shippingPartner.contact}: {SITE_INFO.shippingPartner.phone}
                </a>
                <Link
                  href="/amenities"
                  className="inline-flex items-center gap-1 font-semibold text-[#203F39] hover:text-[#BF754C] underline underline-offset-4 transition-colors"
                >
                  All Amenities
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
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
