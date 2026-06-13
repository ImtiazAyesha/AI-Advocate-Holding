"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

export default function WorkCtaBanner() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-cta-banner"
      aria-label="Case study CTA"
      className="bg-evren-warm-white pb-16 lg:pb-24 px-4 sm:px-6"
    >
      <motion.div
        ref={ctaRef}
        initial={{ scale: 0.94, opacity: 0, y: 40 }}
        animate={ctaInView ? { scale: 1, opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 70, damping: 20, duration: 0.9 }}
        className="max-w-7xl mx-auto bg-evren-navy rounded-[32px] relative overflow-hidden shadow-warm-hover"
      >
        <motion.div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute -top-[30%] -right-[15%] w-[600px] h-[600px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(136, 201, 179, 0.25) 0%, rgba(136, 201, 179, 0.06) 50%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            className="absolute -bottom-[40%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(78, 124, 110, 0.2) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[18%] md:translate-y-[15%] w-full text-center flex justify-center pointer-events-none z-0">
            <span className="font-heading font-extrabold text-[18vw] sm:text-[16vw] md:text-[15vw] lg:text-[16rem] xl:text-[19rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.1] to-transparent select-none whitespace-nowrap">
              AI Advocate Holding
            </span>
          </motion.div>
        </motion.div>

        <motion.div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
          <motion.div className="lg:col-span-7 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block text-[11px] sm:text-sm font-bold uppercase tracking-[0.2em] text-evren-peach font-body mb-6"
            >
              Your Turn
            </motion.span>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-heading font-bold text-white tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.08] max-w-xl"
            >
              Want results like these?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-lg text-white/60 font-body max-w-lg mt-6 leading-relaxed"
            >
              Let&apos;s discuss how we can drive measurable ROI for your business.
            </motion.p>
          </motion.div>

          <motion.div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center p-5 sm:p-10 md:p-14 lg:p-16 lg:border-l border-white/[0.06] w-full max-w-full overflow-hidden">
            <motion.div className="w-full max-w-[340px] sm:max-w-sm space-y-4 sm:space-y-5 mx-auto lg:mx-0">
              <ArrowButton
                href="/connect"
                id="case-study-cta-banner-btn"
                variant="primary"
                size="lg"
                className="w-full justify-between text-[13px] sm:text-[15px] md:text-base pr-1"
              >
                Book a Call
              </ArrowButton>

              <motion.a
                href="mailto:hello@evrenai.com"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-2 sm:gap-4 w-full border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 font-heading font-semibold text-[13px] sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer transition-all duration-300"
              >
                <span className="flex items-center gap-2 sm:gap-3 truncate pr-2">
                  <Mail size={16} className="text-evren-peach/70 shrink-0" />
                  <span className="truncate">hello@evrenai.com</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-white/40 group-hover:text-white/70 transition-colors shrink-0"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
