"use client";

import { motion } from "framer-motion";
import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import { SectionEyebrow, fadeUp, stagger, useReveal } from "./primitives";

export default function CaseStudyResults({
  content,
}: {
  content: TextFocusedCaseStudyContent;
}) {
  const { ref, isInView } = useReveal();
  const section = content.outcomes;

  return (
    <section className="bg-evren-warm-white py-24 md:py-32 border-t border-evren-light-gray/40">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.header
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-20"
        >
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <h2 className="font-heading tracking-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-evren-navy leading-[1.15] mb-3">
              {section.title}
            </span>
            <span className="block text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-evren-peach leading-snug">
              {section.accentPhrase}
            </span>
          </h2>
        </motion.header>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {section.cards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group flex flex-col h-full bg-white rounded-studio overflow-hidden shadow-warm border border-evren-light-gray/40 border-t-[4px] border-t-evren-peach hover:shadow-warm-hover hover:border-evren-peach/25 transition-[box-shadow,border-color] duration-300"
            >
              <motion.div className="flex flex-col flex-1 gap-4 p-7 md:p-8">
                <h3 className="font-heading font-bold text-[1.05rem] sm:text-lg text-evren-navy leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-evren-medium-gray leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.aside
          variants={fadeUp}
          className="mt-14 md:mt-16 max-w-3xl mx-auto rounded-studio bg-white border border-evren-light-gray/40 border-l-[4px] border-l-evren-peach px-8 py-8 md:px-10 md:py-9 shadow-warm"
        >
          <p className="font-body text-base md:text-lg text-evren-charcoal leading-relaxed text-center">
            {section.closingStatement}
          </p>
        </motion.aside>
      </motion.div>
    </section>
  );
}
