"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingBayouIcons from "@/components/FloatingBayouIcons";
import HeroSection from "@/components/HeroSection";
import AnimatedFishingRopeDivider from "@/components/AnimatedFishingRopeDivider";
import HeroBadgesBar from "@/components/HeroBadgesBar";
import { CaptainSection, BlogSection } from "@/components/CaptainAndGallerySection";
import FishingExperienceSection from "@/components/FishingExperienceSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpeciesSection from "@/components/SpeciesSection";
import LodgingAndTransportSection from "@/components/LodgingAndTransportSection";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import BookingAndFooter from "@/components/BookingAndFooter";
import { SITE_INFO } from "@/data/charterData";

export default function HomePage() {
  const [selectedTier, setSelectedTier] = useState<string>("3 Anglers ($600)");

  return (
    <div className="relative min-h-screen flex flex-col">
      <FloatingBayouIcons />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AnimatedFishingRopeDivider />
        <HeroBadgesBar />
        <CaptainSection />
        <FishingExperienceSection />
        <PricingSection onSelectTier={setSelectedTier} />
        <TestimonialsSection />
        <SpeciesSection />
        <LodgingAndTransportSection />
        <FaqSection />
        <BlogSection />
        <LocationSection />
        <BookingAndFooter selectedTier={selectedTier} />
      </main>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F6F1E7]/95 backdrop-blur-md border-t border-[#849481]/35 px-3 py-2.5 flex items-center gap-2.5 shadow-[0_-8px_24px_rgba(21,43,39,0.16)]">
        <a
          href={SITE_INFO.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#203F39] text-[#F6F1E7] text-xs font-bold uppercase tracking-wider"
        >
          <Phone className="w-4 h-4 text-[#E5A780]" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#BF754C] text-white text-xs font-bold uppercase tracking-wider"
        >
          <CalendarCheck className="w-4 h-4" />
          Book Charter
        </Link>
      </div>
    </div>
  );
}
