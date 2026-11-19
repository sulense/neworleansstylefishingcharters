"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCE_CARDS } from "@/data/charterData";
import {
  CoastalWaveDivider,
  MarshHorizonSilhouette,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";
import {
  CardFishingLineClip,
  FishingLineArc,
  FishingLineEndTackle,
  FishingLineSwivelKnot,
  MobileVerticalLineLink,
} from "@/components/ExperienceRopeRig";

export default function FishingExperienceSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative pt-16 pb-28 lg:pt-22 lg:pb-36 bg-oyster-cream scroll-mt-20 overflow-hidden"
    >
      <NauticalChartOverlay dark={false} />
      <MarshHorizonSilhouette
        color="#203F39"
        className="absolute bottom-6 inset-x-0 h-28 opacity-55"
      />
      <img
        src="/images/art/marsh-cattails.png"
        alt=""
        aria-hidden="true"
        className="animate-marsh-sway hidden 2xl:block pointer-events-none select-none absolute bottom-2 -left-8 w-40 opacity-65"
      />
      <img
        src="/images/art/marsh-cattails.png"
        alt=""
        aria-hidden="true"
        className="animate-marsh-sway-delayed hidden 2xl:block pointer-events-none select-none absolute bottom-2 -right-8 w-40 opacity-65 -scale-x-100"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-9 lg:mb-11"
        >
          <span className="block text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            The Fishing Experience
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.15]">
            A Different Kind of Louisiana Adventure
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#495754] leading-relaxed">
            Calm coastal marsh waters, nonstop redfish and speckled trout action, and genuine South
            Louisiana hospitality just minutes from New Orleans.
          </p>
        </motion.div>

        {/* Three Matted Coastal-Editorial Cards Linked Along a Continuous Saltwater Fishing Line */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {EXPERIENCE_CARDS.map((card, idx) => (
            <div key={card.id} className="relative flex flex-col md:pt-11">
              {/* Desktop Stationary Horizontal Braided Fishing Line & 3-Way Swivels */}
              <div
                aria-hidden="true"
                className="hidden md:block pointer-events-none select-none"
              >
                {/* Left leading draped fishing line tail + brass swivel ring on Card 1 */}
                {idx === 0 && (
                  <>
                    <div className="absolute top-0 left-[10%] right-1/2 h-11 z-10">
                      <FishingLineArc
                        viewBoxWidth={180}
                        x0={0}
                        y0={23}
                        cx={90}
                        cy={24}
                        x1={180}
                        y1={14}
                      />
                    </div>
                    <div className="absolute top-[15px] left-[10%] -translate-x-[20px] z-20">
                      <FishingLineEndTackle side="left" />
                    </div>
                  </>
                )}

                {/* Graceful catenary fishing line span bridging exact center of Card idx -> Card idx+1 */}
                {idx < EXPERIENCE_CARDS.length - 1 && (
                  <div className="absolute top-0 left-1/2 w-[calc(100%+1.5rem)] lg:w-[calc(100%+2rem)] h-11 z-10">
                    <FishingLineArc
                      viewBoxWidth={360}
                      x0={0}
                      y0={14}
                      cx={180}
                      cy={32}
                      x1={360}
                      y1={14}
                    />
                  </div>
                )}

                {/* Right trailing draped fishing line tail + brass swivel ring on Card 3 */}
                {idx === EXPERIENCE_CARDS.length - 1 && (
                  <>
                    <div className="absolute top-0 left-1/2 right-[10%] h-11 z-10">
                      <FishingLineArc
                        viewBoxWidth={180}
                        x0={0}
                        y0={14}
                        cx={90}
                        cy={24}
                        x1={180}
                        y1={23}
                      />
                    </div>
                    <div className="absolute top-[15px] right-[10%] translate-x-[20px] z-20">
                      <FishingLineEndTackle side="right" />
                    </div>
                  </>
                )}

                {/* Stationary 3-way saltwater swivel anchored dead-center at y=14 over the pivot */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 z-30">
                  <FishingLineSwivelKnot />
                </div>
              </div>

              {/* Pivoting Hanging Assembly: dropper leader + snap swivel + clasp + card swing together from the 3-way swivel eye (50%, -25.5px) */}
              <motion.article
                style={{ transformOrigin: "50% -25.5px" }}
                whileHover={
                  prefersReduced
                    ? undefined
                    : { rotate: idx === 1 ? 1.15 : -1.15 }
                }
                transition={{
                  type: "spring",
                  stiffness: 210,
                  damping: 13,
                  mass: 0.85,
                }}
                className="group relative z-20 flex-1 flex flex-col will-change-transform"
              >
                {/* Unified Dropper Leader + Barrel Swivel + Snap Clip + Riveted Bayou Green Clasp */}
                <div className="hidden md:block pointer-events-none select-none absolute -top-[30px] left-1/2 -translate-x-1/2 z-20">
                  <CardFishingLineClip />
                </div>

                {/* Inner Rounded Matted Card Surface */}
                <div className="relative z-10 flex-1 flex flex-col rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#849481]/50 group-hover:border-[#BF754C]/85 shadow-[0_22px_46px_-22px_rgba(21,43,39,0.3),0_4px_12px_-4px_rgba(21,43,39,0.08)] group-hover:shadow-[0_30px_58px_-18px_rgba(21,43,39,0.4),0_8px_20px_-6px_rgba(191,117,76,0.18)] transition-all duration-300 ease-out">
                  {/* Matted Framed Photo Viewport */}
                  <div className="p-2.5 md:pt-4 pb-0">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#152B27] ring-1 ring-inset ring-[#152B27]/12">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        loading="lazy"
                        className={`w-full h-full object-cover ${
                          card.objectPosition || "object-center"
                        } transition-transform duration-700 ease-out group-hover:scale-[1.045]`}
                      />
                    </div>
                  </div>

                  {/* Editorial Copy */}
                  <div className="px-6 pt-5 pb-7 flex-1 flex flex-col">
                    <span className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#BF754C]">
                      {card.subtitle}
                    </span>

                    <h3 className="mt-2 font-display text-[21px] sm:text-[22px] font-bold text-[#203F39] group-hover:text-[#BF754C] transition-colors leading-[1.22] tracking-tight">
                      {card.title}
                    </h3>

                    {/* Signature Animated Copper Hairline */}
                    <div className="mt-3 h-[2px] w-10 rounded-full bg-[#BF754C]/65 group-hover:w-16 group-hover:bg-[#BF754C] transition-all duration-300" />

                    <p className="mt-3.5 text-sm sm:text-[14.5px] text-[#455350] leading-[1.68]">
                      {card.description}
                    </p>
                  </div>

                  {/* Subtle Coastal Accent Base Bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#203F39] via-[#BF754C] to-[#849481] opacity-75 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.article>

              {/* Mobile Vertical Fishing Line Connector Between Stacked Cards */}
              {idx < EXPERIENCE_CARDS.length - 1 && <MobileVerticalLineLink />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Coastal Wave Seam Flowing Into Deep Bayou Green Pricing Section */}
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
