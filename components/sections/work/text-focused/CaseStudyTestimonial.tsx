"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import { AccentTitle, SectionEyebrow, fadeUp, stagger, useReveal } from "./primitives";

function getInitials(client: string) {
  const cleaned = client.replace(/[^a-zA-Z0-9]/g, "");
  if (cleaned.length >= 2) return cleaned.slice(0, 2).toUpperCase();
  return client.slice(0, 2).toUpperCase() || "EV";
}

export default function CaseStudyTestimonial({
  content,
}: {
  content: TextFocusedCaseStudyContent;
}) {
  const { ref, isInView } = useReveal();
  const { testimonial } = content;
  const cardLabel = testimonial.label ?? "Client Testimonial";

  return (
    <section className="bg-evren-warm-white py-16 md:py-20 lg:py-24 border-t border-evren-light-gray/40">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left — section heading */}
          <motion.header
            variants={fadeUp}
            className="min-w-0 lg:pr-4 lg:py-2"
          >
            <SectionEyebrow>{testimonial.eyebrow}</SectionEyebrow>
            <AccentTitle
              as="h2"
              accent={testimonial.accentWord}
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.35rem] xl:text-4xl text-evren-navy leading-[1.12] tracking-tight"
            >
              {testimonial.titlePrefix}
            </AccentTitle>
          </motion.header>

          {/* Right — testimonial card */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="rounded-2xl bg-white border border-evren-light-gray/50 shadow-[0_8px_30px_rgba(26,36,33,0.06)] p-6 sm:p-7 lg:p-8 min-w-0 h-full flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <Quote
                className="w-4 h-4 text-evren-peach flex-shrink-0"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-evren-peach font-heading">
                {cardLabel}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <motion.div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-evren-navy text-white text-xs font-semibold font-heading ring-2 ring-white shadow-sm"
                aria-hidden="true"
              >
                {getInitials(content.client)}
              </motion.div>
              <p className="font-body text-sm text-evren-charcoal/90 min-w-0">
                <span className="font-medium text-evren-navy/90">{testimonial.title}</span>
                <span className="mx-2 text-evren-medium-gray/60" aria-hidden="true">
                  •
                </span>
                <span className="text-evren-medium-gray">{testimonial.company}</span>
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="font-body text-[15px] sm:text-base text-evren-charcoal/85 leading-relaxed italic font-normal"
            >
              &ldquo;{testimonial.quote}&rdquo;
            </motion.blockquote>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
