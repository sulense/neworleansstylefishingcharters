"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FAQS, SITE_INFO, type FaqItem } from "@/data/charterData";
import {
  BayouStampWatermark,
  CoastalWaveDivider,
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

function FaqAccordionCard({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `${faq.id}-panel`;

  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 border-2 ${
        isOpen
          ? "bg-white border-[#BF754C] shadow-[0_18px_36px_-18px_rgba(32,63,57,0.22)]"
          : "bg-white/95 hover:bg-white border-[#849481]/50 hover:border-[#849481] shadow-sm"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 bottom-0 w-1 bg-[#BF754C] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#BF754C]"
      >
        <span className="font-display font-bold text-[15px] sm:text-base leading-snug text-[#203F39]">
          {faq.question}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-[#BF754C] text-white rotate-180"
              : "bg-[#F6F1E7] text-[#203F39]"
          }`}
        >
          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
        </span>
      </button>

      {/* Smooth zero-jump CSS grid-row accordion collapse/expand */}
      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 pt-3.5 text-sm sm:text-[15px] text-[#455350] leading-relaxed border-t border-[#849481]/20">
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Split into two independent vertical stacks so opening an item in one column
  // never creates an empty gap below closed items in the opposite column.
  const mid = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, mid);
  const rightFaqs = FAQS.slice(mid);

  return (
    <section
      id="faqs"
      className="relative bg-oyster-cream pt-16 pb-28 lg:pt-22 lg:pb-34 scroll-mt-20 overflow-hidden"
    >
      <NauticalChartOverlay dark={false} />
      <CompassRoseWatermark
        color="#203F39"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.045]"
      />
      <BayouStampWatermark className="animate-float-stamp hidden lg:block absolute top-16 right-10 w-40 h-40 text-[#BF754C] opacity-[0.08]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            Charter Planning
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
            A Few Things to Know Before You Go
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#495754] leading-relaxed">
            Quick, honest answers to the most common questions about our private New Orleans
            inshore fishing charters in Lafitte.
          </p>
        </motion.div>

        {/* Two Independent Vertical Columns (Zero Empty Row Gaps When Toggling) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
        >
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq) => (
              <FaqAccordionCard
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq) => (
              <FaqAccordionCard
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA & Direct Phone Prompt */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/faqs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#203F39] hover:bg-[#BF754C] text-[#F6F1E7] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors group"
          >
            View All FAQs
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <span className="text-sm text-[#495754]">
            Have another question?{" "}
            <a
              href={SITE_INFO.phoneHref}
              className="font-bold text-[#203F39] hover:text-[#BF754C] underline underline-offset-4 transition-colors"
            >
              Call Capt. Jason at {SITE_INFO.phone}
            </a>
          </span>
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Deep Bayou Green Blog Section */}
      <CoastalWaveDivider
        fillColor="#203F39"
        midColor="#3B5D54"
        backColor="#849481"
        crestColor="#E5A780"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}
