"use client";

import { motion } from "framer-motion";
import { Shield, Workflow, MessageSquare } from "lucide-react";
import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import { AccentTitle, SectionEyebrow, fadeUp, stagger, useReveal } from "./primitives";

const POINT_ICONS = [Shield, Workflow, MessageSquare] as const;

const BENTO_SPANS = [
  "md:col-span-7 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-12 md:row-span-1",
] as const;

function BentoPointCard({
  index,
  heading,
  description,
  variant,
}: {
  index: number;
  heading: string;
  description: string;
  variant: "featured" | "light" | "wide";
}) {
  const Icon = POINT_ICONS[index] ?? Shield;
  const num = String(index + 1).padStart(2, "0");

  const variantStyles = {
    featured:
      "bg-evren-navy border-evren-navy-light/30 text-white hover:shadow-[0_20px_50px_rgba(26,36,33,0.22)]",
    light:
      "bg-white border-evren-light-gray/45 text-evren-navy hover:shadow-warm-hover hover:border-evren-peach/30",
    wide:
      "bg-gradient-to-br from-evren-peach-light/50 via-white to-white border-evren-peach/25 text-evren-navy hover:shadow-[0_15px_40px_rgba(136,201,179,0.15)] hover:border-evren-peach/40",
  }[variant];

  const labelClass =
    variant === "featured" ? "text-evren-peach" : "text-evren-peach/90";
  const titleClass =
    variant === "featured" ? "text-white" : "text-evren-navy";
  const bodyClass =
    variant === "featured" ? "text-white/70" : "text-evren-charcoal/80";
  const iconClass =
    variant === "featured"
      ? "text-white/10 group-hover:text-white/15"
      : "text-evren-navy/[0.04] group-hover:text-evren-peach/20";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={`group relative overflow-hidden rounded-[22px] border p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] transition-shadow duration-300 cursor-default ${variantStyles}`}
    >
      <div
        className={`absolute -top-10 -right-8 pointer-events-none transition-all duration-500 ${iconClass}`}
        aria-hidden="true"
      >
        <Icon size={140} strokeWidth={0.8} />
      </div>

      <motion.div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold font-heading ${
              variant === "featured"
                ? "bg-evren-peach/20 text-evren-peach"
                : "bg-evren-peach-light text-evren-navy/80"
            }`}
          >
            {num}
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-wider ${labelClass}`}>
            Strategic pillar
          </span>
        </div>
        <h3
          className={`font-heading font-semibold text-lg sm:text-xl leading-snug mb-3 max-w-lg ${titleClass}`}
        >
          {heading}
        </h3>
        <p className={`font-body text-sm leading-relaxed max-w-prose font-normal ${bodyClass}`}>
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
}

export default function CaseStudyStrategic({
  content,
}: {
  content: TextFocusedCaseStudyContent;
}) {
  const { ref, isInView } = useReveal();
  const section = content.strategicImperative;
  const variants: Array<"featured" | "light" | "wide"> = ["featured", "light", "wide"];

  return (
    <section className="relative bg-white border-t border-evren-light-gray/40 py-24 md:py-32">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="max-w-3xl mb-12 md:mb-14">
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <AccentTitle
            as="h2"
            accent={section.accentWord}
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-evren-navy leading-[1.15] tracking-tight"
          >
            {section.titlePrefix}
          </AccentTitle>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 auto-rows-fr"
        >
          {section.points.map((point, i) => (
            <motion.div
              key={point.heading}
              className={`col-span-1 ${BENTO_SPANS[i] ?? "md:col-span-12"}`}
            >
              <BentoPointCard
                index={i}
                heading={point.heading}
                description={point.description}
                variant={variants[i] ?? "light"}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
