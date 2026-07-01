"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import {
  MeshBackground,
  HeroAccentTitle,
  fadeUp,
  stagger,
  useReveal,
} from "./primitives";

function HeroStatsRow({
  timeline,
  teamSize,
  hardMetric,
}: {
  timeline: string;
  teamSize: string;
  hardMetric: string;
}) {
  const stats = [
    { label: "Timeline", value: timeline },
    { label: "Team", value: teamSize },
    { label: "Core Result", value: hardMetric },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-3 gap-3 sm:gap-4 w-full mt-4 sm:mt-5"
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="bg-white/90 rounded-xl px-3 py-3 sm:px-3.5 sm:py-3.5 border border-evren-light-gray/45 min-w-0"
        >
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-evren-peach/90 block mb-1 leading-tight">
            {item.label}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-evren-navy/90 font-body leading-snug block">
            {item.value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function HeroDetailsPanel({
  metadata,
}: {
  metadata: TextFocusedCaseStudyContent["hero"]["metadata"];
}) {
  const details = [
    { label: "Industry", value: metadata.industry },
    { label: "Core Challenge", value: metadata.coreChallenge },
    { label: "Solution", value: metadata.solution },
  ];

  return (
    <motion.div variants={fadeUp} className="space-y-3 pt-1">
      {details.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
          whileHover={{ y: -2 }}
          className="group rounded-xl border border-evren-light-gray/50 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-warm hover:border-evren-peach/25"
        >
          <motion.div className="flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-evren-peach-light/70 to-white border-b border-evren-light-gray/40">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-white/80 text-[11px] font-semibold text-evren-navy/70 font-heading shadow-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-evren-navy/65">
              {item.label}
            </span>
          </motion.div>
          <p className="px-4 py-3 sm:py-3.5 font-body text-[13px] sm:text-sm text-evren-charcoal/90 leading-relaxed font-normal">
            {item.value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function CaseStudyHero({ content }: { content: TextFocusedCaseStudyContent }) {
  const { ref, isInView } = useReveal();
  const { hero } = content;

  return (
    <section className="relative bg-evren-warm-white overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-20 md:pb-28">
      <MeshBackground />

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-evren-medium-gray font-body hover:text-evren-navy transition-colors mb-8"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Our Work
        </Link>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 lg:items-start"
        >
          <motion.div variants={fadeUp} className="space-y-5 lg:space-y-6 min-w-0">
            <HeroAccentTitle headline={hero.headline} accentWord={hero.accentWord} />

            <p className="font-body text-base md:text-[17px] text-evren-charcoal/90 leading-relaxed font-normal">
              {hero.subheadline}
            </p>

            <HeroDetailsPanel metadata={hero.metadata} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative w-full min-w-0 lg:self-start flex flex-col"
          >
            <motion.div
              className="relative w-full rounded-studio overflow-hidden shadow-warm border border-evren-light-gray/40"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="relative aspect-[4/3] w-full bg-evren-navy">
                <Image
                  src={content.heroImage}
                  alt={hero.headline}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                />
              </div>
            </motion.div>

            <HeroStatsRow
              timeline={content.timeline}
              teamSize={content.teamSize}
              hardMetric={content.hardMetric}
            />

            <div className="absolute -inset-6 bg-gradient-to-tr from-evren-peach/10 via-transparent to-evren-navy/5 rounded-3xl blur-2xl -z-10 pointer-events-none hidden lg:block" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
