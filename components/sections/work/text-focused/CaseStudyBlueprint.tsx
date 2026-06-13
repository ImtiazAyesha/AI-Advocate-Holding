"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  Sparkles,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import { SectionEyebrow, fadeUp, stagger, useReveal } from "./primitives";

const BLUEPRINT_ICONS: LucideIcon[] = [
  ShieldCheck,
  Layers,
  Sparkles,
  MessageSquare,
];

export default function CaseStudyBlueprint({
  content,
}: {
  content: TextFocusedCaseStudyContent;
}) {
  const { ref, isInView } = useReveal();
  const section = content.technicalBlueprint;

  return (
    <section className="relative bg-evren-navy py-24 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(136, 201, 179, 0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="max-w-3xl mb-12 md:mb-14">
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.15] tracking-tight">
            <span className="text-evren-peach">{section.titlePrefix}</span>{" "}
            {section.titleAccent}
          </h2>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {section.points.map((point, i) => {
            const Icon = BLUEPRINT_ICONS[i] ?? ShieldCheck;

            return (
              <motion.div
                key={point.heading}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="bg-white/5 border border-white/10 rounded-[22px] p-6 sm:p-7 lg:p-8 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300"
              >
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <motion.span
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-evren-peach/15 border border-evren-peach/30 flex items-center justify-center text-evren-peach"
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(136, 201, 179, 0.25)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </motion.span>
                  <motion.div className="min-w-0">
                    <h3 className="font-heading font-semibold text-lg sm:text-xl text-white leading-snug mb-3 max-w-lg">
                      {point.heading}
                    </h3>
                    <p className="font-body text-sm text-white/70 leading-relaxed max-w-prose font-normal">
                      {point.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
