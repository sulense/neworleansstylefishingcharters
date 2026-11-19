"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, ExternalLink, Info } from "lucide-react";
import { FAQS, SITE_INFO } from "@/data/charterData";
import {
  BayouStampWatermark,
  CoastalWaveDivider,
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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

        {/* 2-Column Clean Accordion Grid (1-Column on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const isLicenseHighlight = faq.highlight?.includes("LDWF");
            const isTransportHighlight = faq.highlight?.includes("913-4638");

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                  isOpen
                    ? "bg-white border-[#BF754C] shadow-[0_18px_36px_-18px_rgba(32,63,57,0.22)]"
                    : "bg-white/90 hover:bg-white border-[#849481]/55 shadow-sm"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#BF754C] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 text-left cursor-pointer"
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

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-0 text-sm sm:text-[15px] text-[#495754] leading-relaxed border-t border-[#849481]/20">
                        <p className="pt-3.5">{faq.answer}</p>

                        {faq.highlight && (
                          <div className="mt-3.5">
                            {isLicenseHighlight ? (
                              <a
                                href={SITE_INFO.licenseUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F6F1E7] hover:bg-[#203F39] text-[#203F39] hover:text-[#F6F1E7] text-xs font-bold border border-[#BF754C]/40 transition-colors"
                              >
                                <Info className="w-3.5 h-3.5 text-[#BF754C]" />
                                {faq.highlight}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : isTransportHighlight ? (
                              <a
                                href={SITE_INFO.transportPartner.phoneHref}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F6F1E7] hover:bg-[#203F39] text-[#203F39] hover:text-[#F6F1E7] text-xs font-bold border border-[#BF754C]/40 transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#BF754C]" />
                                {faq.highlight}
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F6F1E7] text-[#203F39] text-xs font-bold border border-[#BF754C]/40">
                                <Info className="w-3.5 h-3.5 text-[#BF754C]" />
                                {faq.highlight}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

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
