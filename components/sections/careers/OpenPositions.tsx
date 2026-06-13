"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { POSITIONS } from "@/lib/careers-data";

function JobCard({ job }: { job: typeof POSITIONS[0] }) {
  return (
    <Link href={`/careers/${job.slug}`} className="block group">
      <div className="bg-white rounded-[24px] overflow-hidden transition-all duration-300 ease-out border border-evren-light-gray shadow-[0_4px_20px_rgba(26,36,33,0.02)] group-hover:border-evren-navy/30 group-hover:shadow-[0_8px_30px_rgba(26,36,33,0.04)] relative">
        {/* Subtle mesh background on hover */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(136,201,179,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl pointer-events-none -mr-32 -mt-32" />

        {/* ── CARD HEADER ── */}
        <div className="px-[24px] py-[28px] md:px-[40px] md:py-[36px] flex flex-col md:flex-row md:items-center justify-between interactive-glow relative z-10">
          <div>
            <h3 className="text-[24px] md:text-[28px] font-heading font-semibold leading-tight tracking-tight text-evren-navy transition-colors duration-300 group-hover:text-evren-rose">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-[8px] md:gap-[12px] mt-[16px]">
              {job.meta.map((tag) => (
                <span
                  key={tag}
                  className="bg-evren-warm-white border border-evren-light-gray text-evren-navy/80 text-[12px] font-heading font-medium px-[14px] py-[6px] rounded-full tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 md:mt-0 flex items-center shrink-0">
            <div className="flex items-center justify-between pl-[24px] pr-[6px] py-[6px] rounded-full border border-evren-navy text-evren-navy transition-all duration-300 group-hover:bg-evren-navy group-hover:text-white bg-transparent relative overflow-hidden">
              <span className="text-[14px] md:text-[15px] font-heading font-semibold mr-[20px] relative z-10 transition-colors duration-300 group-hover:text-white">
                View Details
              </span>
              <div className="flex items-center justify-center w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-evren-light-gray/60 transition-all duration-300 group-hover:bg-white/10 relative z-10">
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="text-evren-navy transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function OpenPositions() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F2F2F2] py-16 lg:py-24 px-4 sm:px-6 relative border-y border-evren-light-gray"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-[64px] lg:mb-[80px]"
        >
          <span className="block text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.1em] mb-[16px]">
            Open Positions
          </span>
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-evren-navy leading-[1.2] tracking-tight max-w-[800px] mx-auto">
            Two Roles. One Standard:{" "}
            <span className="heading-highlight">Exceptional.</span>
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-evren-medium-gray leading-[1.6] max-w-[600px] mx-auto mt-[20px]">
            We hire slowly and deliberately. Both roles require engineers who can think
            at the product level, not just the code level.
          </p>
        </motion.div>

        {/* Position Cards */}
        <div className="flex flex-col gap-[24px] max-w-[1024px] mx-auto">
          {POSITIONS.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
