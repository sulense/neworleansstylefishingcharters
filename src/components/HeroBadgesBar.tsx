"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Exact 4 Quick Highlights from Section 2 of the Homepage Brief
const TRUST_HIGHLIGHTS = [
  {
    icon: "/images/art/trust/5hour-charters.png",
    title: "5-Hour Charters",
    subtitle: "Time on the water",
    href: "/charter-info",
  },
  {
    icon: "/images/art/trust/private-trips.png",
    title: "Private Fishing Trips",
    subtitle: "Up to 4 anglers per boat",
    href: "/charter-info",
  },
  {
    icon: "/images/art/trust/all-gear.png",
    title: "All Gear Provided",
    subtitle: "Rods, bait & tackle",
    href: "/charter-info",
  },
  {
    icon: "/images/art/trust/local-captains.png",
    title: "Experienced Local Captains",
    subtitle: "Coast Guard licensed",
    href: "/charter-info",
  },
];

export default function HeroBadgesBar() {
  return (
    <section
      aria-label="New Orleans inshore fishing charter highlights"
      className="relative z-20 bg-[#F6F1E7] border-b border-[#849481]/30 shadow-[0_12px_28px_-14px_rgba(21,43,39,0.18)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#849481]/25 sm:gap-x-6 lg:gap-x-0">
          {TRUST_HIGHLIGHTS.map((item, idx) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center lg:justify-center gap-4 py-5 sm:py-6 lg:px-7 xl:px-9 transition-colors"
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="w-[60px] h-[60px] rounded-full shrink-0 shadow-[0_6px_14px_-6px_rgba(21,43,39,0.45)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                  />
                  <div className="min-w-0">
                    <p className="font-display font-bold text-[15px] sm:text-[17px] text-[#203F39] group-hover:text-[#BF754C] transition-colors leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] text-[#556360]">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
