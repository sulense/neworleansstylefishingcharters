"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ShieldCheck, MapPin, List as Menu, X, InstagramLogo as Instagram, FacebookLogo as Facebook, YoutubeLogo as Youtube, XLogo } from "@phosphor-icons/react/dist/ssr";
import { NAV_ITEMS, SITE_INFO } from "@/data/charterData";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Deep Bayou Green Utility Bar */}
      <div
        className={`bg-[#152B27] text-[#F6F1E7] border-b border-[#849481]/25 transition-all duration-300 ${
          scrolled ? "h-0 opacity-0 overflow-hidden border-b-0" : "h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] sm:text-xs tracking-[0.01em]">
          <div className="flex items-center gap-4 text-[#F6F1E7]/90">
            <span className="inline-flex items-center gap-2 font-bold">
              <ShieldCheck weight="fill" className="w-[18px] h-[18px] shrink-0 text-[#D8946D]" />
              USCG Licensed Captains · Est. {SITE_INFO.establishedYear}
            </span>
            <span className="hidden md:inline-flex items-center gap-2 font-semibold text-[#F6F1E7]/85">
              <MapPin weight="fill" className="w-[18px] h-[18px] shrink-0 text-[#D8946D]" />
              Joe&apos;s Landing · Lafitte, LA (20 Miles South of NOLA)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE_INFO.phoneHref}
              className="inline-flex items-center gap-2 font-extrabold text-[#E6B18E] hover:text-white transition-colors"
            >
              <Phone weight="fill" className="w-[18px] h-[18px] shrink-0 text-[#D8946D]" />
              {SITE_INFO.phone}
            </a>
            <div className="hidden sm:flex items-center gap-4 pl-4 border-l border-[#849481]/30">
              <a
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
                className="text-[#F6F1E7] hover:text-[#D8946D] transition-colors"
              >
                <Facebook weight="fill" className="w-[18px] h-[18px] shrink-0" />
              </a>
              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="text-[#F6F1E7] hover:text-[#D8946D] transition-colors"
              >
                <Instagram weight="fill" className="w-[18px] h-[18px] shrink-0" />
              </a>
              <a
                href={SITE_INFO.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on X"
                className="text-[#F6F1E7] hover:text-[#D8946D] transition-colors"
              >
                <XLogo weight="fill" className="w-[18px] h-[18px] shrink-0" />
              </a>
              <a
                href={SITE_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch on YouTube"
                className="text-[#F6F1E7] hover:text-[#D8946D] transition-colors"
              >
                <Youtube weight="fill" className="w-[18px] h-[18px] shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Warm Oyster Cream Sticky Navigation Bar */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#F6F1E7]/96 backdrop-blur-md shadow-[0_10px_28px_-10px_rgba(21,43,39,0.2)] border-[#849481]/35 py-2"
            : "bg-[#F6F1E7]/98 border-[#849481]/25 py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Official Horizontal Logo */}
          <Link
            href="/"
            className="group flex items-center shrink-0 focus:outline-none"
            aria-label={SITE_INFO.name}
          >
            <img
              src="/images/real/logo-header.png"
              alt="New Orleans Style Fishing Charters — Come Fish A Nawlins Good Time!"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                scrolled ? "h-11 sm:h-12" : "h-12 sm:h-14"
              }`}
            />
          </Link>

          {/* Desktop Navigation Links — Exact 8 Items */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative py-1.5 text-[14px] 2xl:text-[15px] font-bold uppercase tracking-wider text-[#26302E] hover:text-[#BF754C] transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] rounded-full bg-[#BF754C] transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1.5 text-[14px] 2xl:text-[15px] font-bold uppercase tracking-wider transition-colors group ${
                    isActive ? "text-[#BF754C]" : "text-[#26302E] hover:text-[#BF754C]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#BF754C] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary Phone / Book Action + Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="btn-copper hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-white text-[13px] font-extrabold uppercase tracking-wider shrink-0"
            >
              Book Your Charter
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="xl:hidden p-2.5 rounded-lg text-[#203F39] hover:bg-[#203F39]/10 transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-[#F6F1E7] border-b border-[#849481]/35 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 rounded-lg text-base font-bold text-[#26302E] hover:bg-[#203F39] hover:text-[#F6F1E7] transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-bold transition-colors ${
                      isActive
                        ? "bg-[#203F39] text-[#F6F1E7]"
                        : "text-[#26302E] hover:bg-[#203F39] hover:text-[#F6F1E7]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#849481]/25 flex flex-col gap-2">
                <a
                  href={SITE_INFO.phoneHref}
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#203F39] text-[#F6F1E7] text-sm font-bold"
                >
                  <Phone className="w-4 h-4 text-[#D8946D]" />
                  Call {SITE_INFO.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-copper w-full inline-flex items-center justify-center py-3 rounded-lg text-white text-sm font-bold uppercase tracking-wider"
                >
                  Book Your Charter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
