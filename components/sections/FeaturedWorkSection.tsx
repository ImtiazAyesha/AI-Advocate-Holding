"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";

interface CaseStudy {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "iSeedoc Telehealth",
    description:
      "We built a HIPAA-compliant telehealth platform that automates patient intake, routes consultations via AI triage, and surfaces clinical summaries in real time. Patients get faster care.",
    tags: ["Healthcare", "Next.js", "AI Pipelines"],
    image: "/case-study/Healthcare.png",
    href: "/case-studies/iseedoc-telehealth",
  },
  {
    title: "VerifiedX Cybersecurity",
    description:
      "We deployed an LLM-based threat detection engine that identifies and neutralizes phishing campaigns and anomalous access patterns before they reach end users.",
    tags: ["Cybersecurity", "Python", "LLMs"],
    image: "/case-study/Cybersecurity.png",
    href: "/case-studies/verifiedx-cybersecurity",
  },
  {
    title: "IntelliBots AI Platform",
    description:
      "We built a centralized platform for deploying RAG-powered AI agents at scale, from internal IT support to customer service, without heavy per-bot development overhead.",
    tags: ["Enterprise", "FastAPI", "RAG"],
    image: "/case-study/Automation.png",
    href: "/case-studies/intellibots-ai-agent-platform",
  },
];

export default function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useInView(sectionRef, { amount: 0.15, once: true });

  return (
    <section
      ref={sectionRef}
      id="featured-work"
      className="relative w-full py-10 sm:py-16 md:py-20 bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
          <div>
            <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-3 sm:mb-4 block">
              Featured Work
            </span>
            <h2 className="text-[2rem] sm:text-4xl md:text-5xl leading-[1.15] text-evren-navy font-heading font-bold">
              Real Products.<br />
              <span className="text-evren-peach">Measurable Impact.</span>
            </h2>
          </div>

          <ArrowButton href="/work" variant="outline" size="sm">
            <span className="hidden sm:inline">View All Work</span>
            <span className="sm:hidden">View All</span>
          </ArrowButton>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-evren-navy rounded-2xl flex flex-col p-7 lg:p-8"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white/5">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={100}
                  className="object-contain object-center p-2"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-white mb-3">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-evren-light-gray text-sm leading-relaxed mb-6 flex-1">
                {study.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-evren-light-gray/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <ArrowButton
                href={study.href}
                variant="outline"
                size="sm"
                inverted={true}
                className="w-fit !border-white/30 !text-white hover:!bg-white/10 hover:!border-white transition-all"
              >
                View Case Study
              </ArrowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
