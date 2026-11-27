"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "@phosphor-icons/react/dist/ssr";
import { BLOG_POSTS, SITE_INFO } from "@/data/charterData";
import {
  BayouStampWatermark,
  CoastalWaveDivider,
  CompassRoseWatermark,
  NauticalChartOverlay,
} from "@/components/CoastalDecorations";

export function CaptainSection() {
  return (
    <section
      id="captain"
      className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 bg-white scroll-mt-20 overflow-hidden"
    >
      <NauticalChartOverlay dark={false} />
      <CompassRoseWatermark
        color="#203F39"
        className="hidden md:block absolute -top-24 -right-24 w-[380px] h-[380px] opacity-[0.045]"
      />
      <BayouStampWatermark className="animate-float-stamp hidden lg:block absolute bottom-20 left-8 w-40 h-40 text-[#849481] opacity-[0.12]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Split-Screen Left: Authentic Captain Jason Photograph + Subtle Overlapping Marsh Detail */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_28px_60px_-20px_rgba(32,63,57,0.28)] hover:shadow-[0_32px_68px_-18px_rgba(32,63,57,0.38)] border-2 border-[#849481]/55 hover:border-[#BF754C] bg-[#F6F1E7] p-2 aspect-[4/4.4] max-w-lg mx-auto lg:mx-0 group transition-all duration-300 ease-out hover:-translate-y-1">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src="/images/real/capt-jason-centered.jpg"
                  alt="Captain Jason Shilling holding a golden Louisiana redfish on his custom bay boat in Lafitte"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152B27]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[#F6F1E7]">
                  <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#E5A780]">
                    Owner &amp; Head Guide · Est. {SITE_INFO.establishedYear}
                  </p>
                  <p className="font-display text-xl sm:text-2xl font-bold mt-0.5">
                    {SITE_INFO.captain}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Overlapping Bayou Sunset Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="hidden sm:block absolute -bottom-6 right-0 lg:right-4 w-56 z-10"
            >
              {/* Soft breathing shadow anchored beneath the photo for true floating depth */}
              <div
                aria-hidden="true"
                className="animate-photo-float-shadow pointer-events-none absolute -bottom-3.5 inset-x-4 h-5 rounded-full bg-[#152B27]/80 blur-md opacity-30"
              />
              <div className="animate-photo-float relative z-10">
                <div className="group rounded-xl overflow-hidden bg-[#F6F1E7] p-1.5 shadow-[0_28px_52px_-12px_rgba(21,43,39,0.48),0_10px_20px_-8px_rgba(21,43,39,0.28)] hover:shadow-[0_34px_60px_-10px_rgba(21,43,39,0.55),0_12px_24px_-6px_rgba(21,43,39,0.32)] border-2 border-[#849481]/65 hover:border-[#BF754C] ring-1 ring-white/75 transition-all duration-300 ease-out hover:-translate-y-1.5">
                  <div className="rounded-lg overflow-hidden aspect-[3/2] bg-[#152B27]">
                    <img
                      src="/images/real/guiding-on-the-bayou.jpg"
                      alt="Captain Jason Shilling guiding a charter guest fighting a fish at sunset on the Lafitte bayou"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Split-Screen Right: Warm, Conversational Bio Copy (Per Brief) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-[#BF754C]">
              Your Local Louisiana Fishing Guide
            </span>
            <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-bold text-[#203F39] tracking-tight leading-[1.16]">
              Good Fishing.
              <br />
              Great Company.
              <br />
              True Southern Hospitality.
            </h2>

            <div className="mt-5 space-y-4 text-[#3D4A47] text-[15px] sm:text-base leading-relaxed">
              <p>
                I&apos;m <strong>Captain Jason Shilling</strong>,
                lifelong Lafitte local and owner of New Orleans Style Fishing Charters. Just 20
                miles south of New Orleans, our shallow backwater marshes, bays, and bayous hold
                hard-fighting redfish, speckled trout, black drum, sheepshead, and flounder year-round.
              </p>
              <p>
                Every trip is a <strong>private 5-hour charter</strong>{" "}
                out of Joe&apos;s Landing aboard a 22 ft custom bay boat (225hp Mercury Pro XS, up
                to 4 anglers—with multi-boat trips available for larger groups). Whether you&apos;ve
                fished your whole life or it&apos;s your family&apos;s very first cast, we tailor
                the day to you.
              </p>
              <p className="font-serif italic text-[#203F39] text-base sm:text-lg pt-1">
                &ldquo;We don&apos;t just go fishing, we make memories.&rdquo;
              </p>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
              <Link
                href="/charter-info"
                className="btn-copper w-full sm:w-auto inline-flex items-center justify-center text-white px-6 py-4 rounded-lg text-[15px] font-extrabold uppercase tracking-wider"
              >
                More About Our Charters
              </Link>

              <Link
                href="/lodging"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-lg bg-[#F6F1E7] hover:bg-[#203F39] text-[#203F39] hover:text-[#F6F1E7] border-2 border-[#849481]/45 hover:border-[#203F39] text-[15px] font-extrabold uppercase tracking-wider transition-all duration-200"
              >
                Guest House Lodging
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Warm Oyster Cream Experience Section */}
      <CoastalWaveDivider
        fillColor="#F6F1E7"
        midColor="#EAE2D2"
        backColor="#D4DCD1"
        crestColor="#BF754C"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}

export function BlogSection() {
  return (
    <section
      id="blog"
      className="relative pt-20 pb-28 lg:pt-24 lg:pb-34 bg-bayou-green text-[#F6F1E7] scroll-mt-20 overflow-hidden"
    >
      <NauticalChartOverlay dark />
      <CompassRoseWatermark
        color="#D6E0D4"
        className="hidden md:block absolute -top-24 -left-24 w-[360px] h-[360px] opacity-[0.07]"
      />
      {/* Swinging Cast-Metal Nautical Anchors Framing Lower Corners */}
      <img
        src="/images/art/nautical-anchor.png"
        alt=""
        aria-hidden="true"
        className="animate-anchor-swing hidden xl:block pointer-events-none select-none absolute bottom-10 left-3 w-20 2xl:w-24 opacity-65 drop-shadow-[0_12px_18px_rgba(0,0,0,0.5)] z-10"
      />
      <img
        src="/images/art/nautical-anchor.png"
        alt=""
        aria-hidden="true"
        className="animate-anchor-swing hidden xl:block pointer-events-none select-none absolute bottom-10 right-3 w-20 2xl:w-24 opacity-65 -scale-x-100 drop-shadow-[0_12px_18px_rgba(0,0,0,0.5)] z-10"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-bold text-[#E5A780]">
              <BookOpen className="w-3.5 h-3.5" />
              Lafitte Fishing Reports &amp; Tips
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#F6F1E7] tracking-tight">
              From The Bayou Blog
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#F6F1E7]/80 max-w-xl leading-relaxed">
              Seasonal South Louisiana fishing reports, first-time charter prep tips, and local
              guides from Captain Jason Shilling.
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-copper w-full sm:w-auto justify-center inline-flex items-center gap-2 self-start md:self-auto px-5 py-3.5 rounded-lg text-white text-sm sm:text-[15px] font-extrabold uppercase tracking-wider group shrink-0"
          >
            Read All Blog Posts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Editorial Fishing Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl overflow-hidden bg-[#F6F1E7] text-[#26302E] border-2 border-[#849481]/60 hover:border-[#BF754C] shadow-[0_20px_42px_-16px_rgba(10,22,20,0.5)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Link
                href={post.href}
                className="flex flex-col flex-1 focus:outline-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#152B27]">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className={`w-full h-full object-cover ${
                      post.objectPosition || "object-center"
                    } transition-transform duration-700 ease-out group-hover:scale-105`}
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#203F39]/90 backdrop-blur-sm border border-[#F6F1E7]/25 text-[11px] font-semibold uppercase tracking-wider text-[#F6F1E7]">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <time className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E6D69]">
                      <Calendar className="w-3.5 h-3.5 text-[#BF754C]" />
                      {post.date}
                    </time>

                    <h3 className="mt-2 font-display text-lg sm:text-[19px] font-bold text-[#203F39] group-hover:text-[#BF754C] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-[#495754] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#849481]/25 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#203F39] group-hover:text-[#BF754C] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#BF754C] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Coastal Wave Seam Flowing Into Crisp White Location Section */}
      <CoastalWaveDivider
        fillColor="#FFFFFF"
        midColor="#E8EEE6"
        backColor="#849481"
        crestColor="#E5A780"
        className="absolute -bottom-px inset-x-0 z-20"
      />
    </section>
  );
}
