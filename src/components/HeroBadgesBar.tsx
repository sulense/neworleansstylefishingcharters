"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Anchor, ShieldCheck } from "lucide-react";

// Exact 4 Quick Highlights from Section 2 of the Homepage Brief
const TRUST_HIGHLIGHTS = [
  {
    icon: Clock,
    title: "5-Hour Charters",
    subtitle: "Time on the water",
    href: "/charter-info",
  },
  {
    icon: Users,
    title: "Private Fishing Trips",
    subtitle: "Up to 4 anglers per boat",
    href: "/charter-info",
  },
  {
    icon: Anchor,
    title: "All Gear Provided",
    subtitle: "Rods, bait & tackle",
    href: "/charter-info",
  },
  {
    icon: ShieldCheck,
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
            const Icon = item.icon;
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
                  className="group flex items-center gap-3.5 py-4 sm:py-5 lg:px-6 first:lg:pl-0 last:lg:pr-0 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#203F39] text-[#E5A780] flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[#BF754C] group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-sm sm:text-[15px] text-[#203F39] group-hover:text-[#BF754C] transition-colors leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[#556360] font-medium">
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
