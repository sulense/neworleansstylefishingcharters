"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Send,
  CheckCircle2,
  Star,
  ChevronDown,
} from "lucide-react";
import { SITE_INFO } from "@/data/charterData";
import {
  FishingBookerHeroBadge,
  GoogleGLogo,
  TripAdvisorHeroBadge,
  YelpHeroBadge,
} from "@/components/CoastalDecorations";
import AnimatedHeroHeading from "@/components/AnimatedHeroHeading";

const SERVICE_OPTIONS = [
  "1–2 People Fishing Charter",
  "3 People Fishing Charter",
  "4 People Fishing Charter",
  "5+ Multi-Boat Group Charter",
  "Charter + Guest House Lodging",
  "Evening Fishing Charter",
  "General Question / Availability",
];

const HERO_MOBILE_STATIC = "/images/art/hero-lafitte-open-marsh.jpg";
const HERO_VIDEO_POSTER = "/images/video-clips/hero-video-poster.jpg";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [enableVideo, setEnableVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [serviceNeed, setServiceNeed] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Enable full-width looping video on desktop screens when reduced-motion and Data Saver are off;
  // mobile, slow connections, and reduced-motion devices receive the crisp static sunrise marsh image.
  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") {
      setEnableVideo(false);
      return;
    }

    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const isSlowOrDataSaver =
      Boolean(nav.connection?.saveData) ||
      nav.connection?.effectiveType === "slow-2g" ||
      nav.connection?.effectiveType === "2g";

    if (isSlowOrDataSaver) {
      setEnableVideo(false);
      return;
    }

    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setEnableVideo(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [prefersReduced]);

  // Ensure smooth autoplay and ready state sync if cached
  useEffect(() => {
    if (!enableVideo || !videoRef.current) return;
    const vid = videoRef.current;
    if (vid.readyState >= 2) {
      setVideoReady(true);
    }
    const playPromise = vid.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Fallback gracefully to static poster if browser blocks autoplay
      });
    }
  }, [enableVideo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative pt-[128px] sm:pt-[148px] lg:pt-[184px] xl:pt-[196px] pb-16 sm:pb-20 lg:pb-28 xl:pb-32 lg:min-h-[880px] xl:min-h-[920px] flex items-center overflow-hidden bg-[#152B27]">
      {/* FULL-WIDTH CINEMATIC BAYOU HERO VIDEO (Desktop, Muted) / HIGH-QUALITY STATIC LAFITTE MARSH IMAGE (Mobile, Slow Connections & Reduced Motion) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile (<768px), slow/Data Saver connections & reduced-motion high-quality static open-marsh hero image */}
        <img
          src={HERO_MOBILE_STATIC}
          alt="Wide-open Lafitte and Barataria shallow coastal marsh waters and Louisiana sky — New Orleans Style Fishing Charters"
          className={`absolute inset-0 w-full h-full object-cover object-center ${
            enableVideo ? "md:hidden" : "block"
          }`}
        />

        {/* Desktop (>=768px) seamless video poster + muted looping Hero video */}
        {enableVideo && (
          <>
            <img
              src={HERO_VIDEO_POSTER}
              alt="Golden sunrise view over the Lafitte and Barataria coastal marshes in South Louisiana — New Orleans Style Fishing Charters"
              className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
            />
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_VIDEO_POSTER}
              onCanPlay={() => setVideoReady(true)}
              aria-label="New Orleans Style Fishing Charters bayou background video"
              className={`hidden md:block absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/videos/hero-bayou-hd.mp4" type="video/mp4" />
            </video>
          </>
        )}

        {/* Mobile full-width Deep Bayou Green scrim so stacked copy stays razor-legible */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(21, 43, 39, 0.84) 0%, rgba(32, 63, 57, 0.74) 55%, rgba(21, 43, 39, 0.68) 100%)",
          }}
        />
        {/* Desktop directional Deep Bayou Green scrim — crisp readability left, vibrant bayou video center/right */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(16, 34, 30, 0.88) 0%, rgba(22, 46, 41, 0.74) 40%, rgba(22, 46, 41, 0.34) 66%, rgba(16, 34, 30, 0.32) 100%)",
          }}
        />
        {/* Soft top & bottom editorial vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#132622]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#132622]/75 to-transparent" />
      </div>

      {/* CONTAINED TWO-COLUMN HERO WITH FAR-LEFT MARGIN FOR BOURBON ST. FISHERMAN */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-36 lg:pr-8 xl:pl-36 xl:pr-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* LEFT COLUMN: Brief Editorial Copy + Bourbon St. Fisherman H1 + CTAs + Capt. Jason Card */}
          <div className="lg:col-span-7 text-[#F6F1E7]">
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 text-[11px] sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#E5B492]"
            >
              Lafitte, Louisiana &nbsp;|&nbsp; Just Outside New Orleans
            </motion.p>

            <AnimatedHeroHeading />

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16.5px] text-[#F6F1E7]/92 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
            >
              Private{" "}
              <strong className="text-white font-semibold">
                New Orleans inshore fishing charters
              </strong>{" "}
              through the beautiful bayous and marshes of South Louisiana with{" "}
              <strong className="text-white font-semibold">{SITE_INFO.captain}</strong>. Great
              fishing, Southern hospitality, and memories that last a lifetime.
            </motion.p>

            {/* Primary & Secondary CTAs (Per Brief) */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 44 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href="/contact"
                className="btn-copper w-full sm:w-auto justify-center inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider group"
              >
                Book Your Charter
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/charter-info"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#203F39]/75 hover:bg-[#F6F1E7] text-[#F6F1E7] hover:text-[#203F39] backdrop-blur-md border border-[#F6F1E7]/40 hover:border-[#F6F1E7] text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Our Trips
              </Link>
            </motion.div>

            {/* Signature Transparent Google Business Review & Official Platform Badges Strip */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 pt-5 border-t border-[#F6F1E7]/20 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            >
              {/* Signature Transparent Google Business Review Lockup + Clickable Official Review Emblems */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
                {/* Google Business Review Signature Lockup (Matches Reference Layout) */}
                <a
                  href={SITE_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Google Business Review: ${SITE_INFO.googleRating} stars from ${SITE_INFO.googleReviewCount}+ Google reviews`}
                  className="group inline-flex items-center gap-3.5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col">
                    {/* Top Row: Big Multicolor Google G + Stacked "Google Business Review" */}
                    <div className="flex items-center gap-2">
                      <GoogleGLogo className="w-8 h-8" />
                      <div className="leading-[1.08] text-left">
                        <span className="block font-sans font-extrabold text-[14px] text-white tracking-tight">
                          Google
                        </span>
                        <span className="block font-sans font-extrabold text-[14px] text-white tracking-tight">
                          Business Review
                        </span>
                      </div>
                    </div>

                    {/* Bottom Row: Bold 4.9 + 5 Bright Gold Stars */}
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="font-sans font-extrabold text-[22px] text-white leading-none tracking-tight">
                        {SITE_INFO.googleRating}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-4 h-4 text-[#FBC02D] fill-[#FBC02D] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Text Column: "from 202+ / Google reviews" */}
                  <div className="text-left leading-snug text-xs sm:text-[13px] font-semibold text-[#F6F1E7]/92 group-hover:text-white transition-colors">
                    <span className="block">from {SITE_INFO.googleReviewCount}+</span>
                    <span className="block">Google reviews</span>
                  </div>
                </a>

                {/* Subtle Vertical Hairline Divider */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block w-px h-11 bg-[#F6F1E7]/28"
                />

                {/* Right Clickable Official Review Emblems: FishingBooker + TripAdvisor + Yelp */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href={SITE_INFO.fishingBookerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`FishingBooker: ${SITE_INFO.fishingBookerRating} stars (${SITE_INFO.fishingBookerReviewCount}+ reviews)`}
                    aria-label={`FishingBooker: ${SITE_INFO.fishingBookerRating} stars from ${SITE_INFO.fishingBookerReviewCount}+ reviews`}
                    className="transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
                  >
                    <FishingBookerHeroBadge
                      rating={SITE_INFO.fishingBookerRating}
                      count={`${SITE_INFO.fishingBookerReviewCount}+`}
                    />
                  </a>

                  <a
                    href={SITE_INFO.tripAdvisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`TripAdvisor: ${SITE_INFO.tripAdvisorRating} stars (${SITE_INFO.tripAdvisorReviewCount} reviews)`}
                    aria-label={`TripAdvisor: ${SITE_INFO.tripAdvisorRating} stars from ${SITE_INFO.tripAdvisorReviewCount} reviews`}
                    className="transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
                  >
                    <TripAdvisorHeroBadge
                      rating={SITE_INFO.tripAdvisorRating}
                      count={`${SITE_INFO.tripAdvisorReviewCount}`}
                    />
                  </a>

                  <a
                    href={SITE_INFO.yelpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Yelp: ${SITE_INFO.yelpRating} stars (${SITE_INFO.yelpReviewCount} reviews)`}
                    aria-label={`Yelp: ${SITE_INFO.yelpRating} stars from ${SITE_INFO.yelpReviewCount} reviews`}
                    className="transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
                  >
                    <YelpHeroBadge
                      rating={SITE_INFO.yelpRating}
                      count={`${SITE_INFO.yelpReviewCount}`}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Short Hero Charter Availability Form (Restyled in Oyster Cream + Bayou Green + Copper) */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 56 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full max-w-md lg:max-w-[460px] mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="rounded-2xl overflow-hidden bg-[#F6F1E7] border-2 border-[#849481]/65 shadow-[0_30px_65px_-16px_rgba(10,22,20,0.65)]">
              {/* Deep Bayou Green Form Header (Clean & Minimal) */}
              <div className="bg-[#203F39] px-6 py-4 border-b-2 border-[#BF754C]/45">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5A780]">
                  Private Lafitte Charters
                </span>
                <h2 className="mt-0.5 font-display text-xl sm:text-[22px] font-bold text-[#F6F1E7] leading-snug">
                  Check Availability
                </h2>
              </div>

              <div className="p-5 sm:p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#203F39]/10 text-[#203F39] flex items-center justify-center mx-auto mb-3.5">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#203F39]">
                      Availability Request Sent
                    </h3>
                    <p className="mt-2 text-sm text-[#4A5855] max-w-sm mx-auto leading-relaxed">
                      Thanks{firstName ? `, ${firstName}` : ""}! Captain Jason received your
                      inquiry for <strong className="text-[#203F39]">{serviceNeed}</strong> and
                      will respond shortly to confirm availability.
                    </p>
                    <p className="mt-3 text-xs text-[#5B6B67]">
                      Prefer to call? Reach us at{" "}
                      <a href={SITE_INFO.phoneHref} className="font-bold text-[#BF754C] underline">
                        {SITE_INFO.phone}
                      </a>{" "}
                      ({SITE_INFO.hours}).
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 px-5 py-2.5 rounded-lg bg-[#203F39] hover:bg-[#BF754C] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-first-name"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                        >
                          First Name *
                        </label>
                        <input
                          id="hero-first-name"
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hero-last-name"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                        >
                          Last Name *
                        </label>
                        <input
                          id="hero-last-name"
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-email"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                        >
                          Email *
                        </label>
                        <input
                          id="hero-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@email.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hero-phone"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                        >
                          Phone *
                        </label>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(504) 555-0192"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: City & What Do You Need Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-city"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                        >
                          City
                        </label>
                        <input
                          id="hero-city"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. New Orleans, LA"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="hero-need"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                        >
                          What Do You Need? *
                        </label>
                        <div className="relative">
                          <select
                            id="hero-need"
                            required
                            value={serviceNeed}
                            onChange={(e) => setServiceNeed(e.target.value)}
                            className={`w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm font-medium transition-all cursor-pointer ${
                              serviceNeed ? "text-[#26302E]" : "text-[#7A8783]"
                            }`}
                          >
                            <option value="" disabled>
                              Select a charter...
                            </option>
                            {SERVICE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="text-[#26302E]">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none w-4 h-4 text-[#203F39] absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Short Message */}
                    <div>
                      <label
                        htmlFor="hero-message"
                        className="block text-[11px] font-bold uppercase tracking-wider text-[#203F39] mb-1"
                      >
                        Short Message
                      </label>
                      <textarea
                        id="hero-message"
                        rows={2}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Preferred dates, number of anglers, or questions..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#849481]/45 focus:border-[#BF754C] focus:ring-2 focus:ring-[#BF754C]/20 focus:outline-none text-sm text-[#26302E] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-copper w-full py-3.5 px-6 rounded-lg text-white text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Request Charter Availability
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
