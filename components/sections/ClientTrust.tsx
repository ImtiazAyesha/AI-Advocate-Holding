"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

// ─── 6 testimonials matching available case studies ──────────────────
const TESTIMONIALS = [
  {
    quote: (
      <>
        The <span className="text-evren-peach">IntelliBots platform</span> transformed our approach to internal AI. We&apos;re now empowering teams to deploy solutions in <span className="text-evren-peach">hours, not months</span>, a game-changer for <span className="text-evren-peach">organizational agility</span>.
      </>
    ),
    name: "Maria Flores",
    title: "Chief Digital Officer",
    company: "Global Freight Logistics",
  },
  {
    quote: (
      <>
        AI Advocate delivered a <span className="text-evren-peach">sophisticated, HIPAA-compliant telehealth solution</span> that balanced innovation with the rigorous security our patients deserve.
      </>
    ),
    name: "Dr. Marcus Thorne",
    title: "Chief Medical Officer",
    company: "iSeedoc.com",
  },
  {
    quote: (
      <>
        We have seen a <span className="text-evren-peach">40% reduction in on-site incidents</span>. AI Advocate understands the realities of our operational environment better than anyone.
      </>
    ),
    name: "Bill Schmidt",
    title: "Head of Operations",
    company: "Apex Construction Group",
  },
  {
    quote: (
      <>
        The <span className="text-evren-peach">real-time intelligence platform</span> AI Advocate built delivers insights from earnings calls in seconds, a fundamental part of our <span className="text-evren-peach">competitive edge</span>.
      </>
    ),
    name: "Olivia Reed",
    title: "Chief Investment Officer",
    company: "Stone Ridge Capital",
  },
  {
    quote: (
      <>
        AI Advocate&apos;s platform <span className="text-evren-peach">recovered 15% of previously unbillable time</span> in the first quarter alone. The system <span className="text-evren-peach">paid for itself almost immediately</span>.
      </>
    ),
    name: "Mark Goldstein",
    title: "Managing Partner",
    company: "Goldstein & Associates Law",
  },
  {
    quote: (
      <>
        AI Advocate&apos;s embedded engineers were <span className="text-evren-peach">world-class</span> and integrated seamlessly. We launched our product <span className="text-evren-peach">six months ahead of schedule</span>.
      </>
    ),
    name: "Sarah Kim",
    title: "VP of Engineering",
    company: "InnovateX",
  },
];

const AUTOPLAY_INTERVAL = 5000;
// 6 testimonials → 3 pages of 2
const TOTAL_PAGES = 3;

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 100 : -100 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d > 0 ? -100 : 100 }),
};

export default function ClientTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const [page, setPage] = useState(0);          // 0 | 1 | 2
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((p: number, dir?: number) => {
    setDirection(dir ?? (p > page ? 1 : -1));
    setPage(p);
  }, [page]);

  const next = useCallback(() => goTo((page + 1) % TOTAL_PAGES, 1), [page, goTo]);
  const prev = useCallback(() => goTo((page - 1 + TOTAL_PAGES) % TOTAL_PAGES, -1), [page, goTo]);

  useEffect(() => {
    if (!isInView || paused) return;
    const t = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(t);
  }, [isInView, paused, next]);

  // Each page shows 2 cards
  const startIndex = page * 2;
  const pair = [TESTIMONIALS[startIndex], TESTIMONIALS[startIndex + 1]];

  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="relative bg-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle dot texture */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ct-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#1a2421" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ct-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ── Header row: heading left, CTA right ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14 lg:mb-16"
        >
          <div>
            <span className="block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-evren-peach font-bold mb-3">
              Client Trust
            </span>
            <h2 className="font-heading font-bold text-evren-navy text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
              Trusted by Startups &amp;&nbsp;
              <span className="text-evren-peach">Growing Businesses.</span>
            </h2>
          </div>

          <div className="shrink-0">
            <ArrowButton href="/work" variant="primary" size="md" className="whitespace-nowrap w-full sm:w-auto">
              View All Case Studies
            </ArrowButton>
          </div>
        </motion.div>

        {/* ── Carousel card ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Carousel track */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
              >
                {pair.map((t, i) => (
                  <div
                    key={i}
                    className="bg-[#f7f9f8] rounded-2xl sm:rounded-3xl border border-evren-navy/[0.07] p-6 sm:p-8 lg:p-9 flex flex-col"
                  >
                    {/* Quote mark */}
                    <span
                      className="font-heading font-extrabold text-evren-peach/35 leading-none select-none block mb-4"
                      style={{ fontSize: "2.5rem", lineHeight: 1 }}
                    >
                      &ldquo;
                    </span>

                    {/* Quote */}
                    <blockquote className="font-heading font-medium text-evren-navy text-base sm:text-[17px] lg:text-lg leading-[1.65] flex-1 mb-7">
                      {t.quote}
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-evren-navy/8 pt-5">
                      <p className="font-heading font-extrabold text-evren-navy text-sm sm:text-base tracking-tight leading-snug">
                        {t.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-evren-peach mt-1">
                        {t.title}&nbsp;&middot;&nbsp;{t.company}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Nav row: arrows + 6 dots ───────────────────────── */}
          <div className="flex items-center justify-center gap-4 mt-7 sm:mt-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy/40 hover:bg-evren-navy hover:text-white hover:border-evren-navy transition-all duration-200"
            >
              <ChevronLeft size={16} strokeWidth={1.8} />
            </button>

            {/* 6 dots — 2 highlighted per page */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => {
                const isActive = Math.floor(i / 2) === page;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(Math.floor(i / 2))}
                    aria-label={`Go to testimonials ${i * 2 + 1}–${i * 2 + 2}`}
                    className="focus:outline-none"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-5 h-2 bg-evren-peach"
                          : "w-2 h-2 bg-evren-navy/15 hover:bg-evren-navy/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy/40 hover:bg-evren-navy hover:text-white hover:border-evren-navy transition-all duration-200"
            >
              <ChevronRight size={16} strokeWidth={1.8} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
