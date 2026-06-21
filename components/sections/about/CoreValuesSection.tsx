"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import {
  Search,
  Database,
  Layers,
  Code2,
  ShieldCheck,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const AUTOPLAY_MS = 4500;

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 },
  },
};

const values = [
  {
    title: "Discover the Business Problem",
    description:
      "Problem discovery and requirements come first. We clarify the business challenge, success metrics, and what your product must solve before any build begins.",
    icon: Search,
    bg: "bg-evren-navy",
    theme: "dark" as const,
  },
  {
    title: "Audit Data and Feasibility",
    description:
      "Data discovery and data quality are assessed early. We identify what is ready for AI, what needs preparation, and whether the solution is feasible before commitment.",
    icon: Database,
    bg: "bg-evren-peach-light",
    theme: "light" as const,
  },
  {
    title: "Design the AI Architecture",
    description:
      "Solution design and product requirements shape every decision. We define the architecture, user flows, and AI capabilities that will deliver real business value.",
    icon: Layers,
    bg: "bg-evren-navy-light",
    theme: "dark" as const,
  },
  {
    title: "Build and Evaluate the AI System",
    description:
      "Data pipelines, model and LLM development, and evaluation run in parallel. Each iteration is tested against clear criteria so the system performs reliably before launch.",
    icon: Code2,
    bg: "bg-evren-peach",
    theme: "light" as const,
  },
  {
    title: "Deploy with Guardrails",
    description:
      "Productization, deployment, and rollout happen with safety guardrails built in. Your AI goes live in a controlled, production-ready way your team can trust.",
    icon: ShieldCheck,
    bg: "bg-evren-gold",
    theme: "dark" as const,
  },
  {
    title: "Monitor and Improve",
    description:
      "Observability, feedback loops, and governance are established from day one. Continuous monitoring helps your AI improve over time and stay aligned with business needs.",
    icon: Activity,
    bg: "bg-evren-warm-white",
    theme: "light" as const,
  },
];

function ValueCard({
  value,
  index,
  isVisible,
  isCenter,
  isEnlarged,
  cardsPerView,
  onSelect,
}: {
  value: (typeof values)[0];
  index: number;
  isVisible: boolean;
  isCenter: boolean;
  isEnlarged: boolean;
  cardsPerView: number;
  onSelect: () => void;
}) {
  const Icon = value.icon;
  const isDark = value.theme === "dark";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`View ${value.title}`}
      aria-current={isCenter ? "true" : undefined}
      className={`
        group shrink-0 text-left rounded-2xl overflow-hidden border
        transition-all duration-500 ease-out origin-center
        ${value.bg}
        ${isDark ? "border-evren-navy" : "border-evren-light-gray/70"}
        ${isEnlarged
          ? "scale-100 sm:scale-105 z-20 border-evren-peach/50 shadow-warm"
          : isCenter
            ? "scale-100 z-20 border-evren-peach/40 shadow-sm"
            : isVisible
              ? "scale-[0.92] sm:scale-[0.94] z-10 opacity-70"
              : "scale-[0.88] z-0 border-transparent opacity-40"
        }
      `}
      style={{
        width: `calc((100% - (var(--card-gap) * (${cardsPerView} - 1))) / ${cardsPerView})`,
      }}
    >
      <div
        className={`relative w-full transition-all duration-500 ${
          isEnlarged ? "h-[230px] sm:h-[250px]" : "h-[210px] sm:h-[225px]"
        }`}
      >
        <Icon
          size={isEnlarged ? 88 : 72}
          strokeWidth={1}
          aria-hidden
          className={`
            absolute top-3 right-3 pointer-events-none transition-all duration-500
            ${isDark ? "text-white/12 group-hover:text-white/18" : "text-evren-navy/10 group-hover:text-evren-navy/16"}
          `}
        />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p
            className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-1.5 ${
              isDark ? "text-evren-peach/80" : "text-evren-gold"
            }`}
          >
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            className={`
              font-heading font-bold leading-snug
              ${isEnlarged ? "text-base sm:text-lg line-clamp-2" : "text-sm sm:text-base line-clamp-2"}
              ${isDark ? "text-white" : "text-evren-navy"}
            `}
          >
            {value.title}
          </h3>
          <p
            className={`
              font-body leading-relaxed mt-1.5
              ${isEnlarged ? "text-[11px] sm:text-xs line-clamp-3" : "text-[10px] sm:text-[11px] line-clamp-2"}
              ${isDark ? "text-white/85" : "text-evren-charcoal/75"}
            `}
          >
            {value.description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, values.length - cardsPerView);

  const centerOffset = Math.floor((cardsPerView - 1) / 2);

  const scrollIndex = Math.min(
    Math.max(current - centerOffset, 0),
    maxIndex
  );

  const centerIndex = scrollIndex + centerOffset;

  const active = values[current];

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % values.length),
    []
  );

  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev - 1 + values.length) % values.length),
    []
  );

  useEffect(() => {
    const updateCardsPerView = () => {
      const next = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setCardsPerView(next);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) return;

    const timer = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isInView, isPaused, nextSlide, current]);

  return (
    <section
      ref={sectionRef}
      id="core-values"
      className="relative w-full overflow-hidden bg-white py-12 lg:py-16"
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(136,201,179,0.07) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <div className="text-center mb-6 sm:mb-8 flex flex-col items-center gap-3">
            <motion.p
              variants={fadeSlideUp}
              className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-2"
            >
              What We Stand For
            </motion.p>

            <motion.div variants={fadeSlideUp} className="pb-1">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={current}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="font-heading font-extrabold text-evren-navy text-2xl sm:text-3xl lg:text-4xl leading-[1.08] -tracking-tight max-w-3xl mx-auto"
                >
                  {active.title.split(" ").map((word, wi, arr) =>
                    wi === arr.length - 1 ? (
                      <span key={wi} className="relative inline-block">
                        <span className="heading-highlight">{word}</span>
                      </span>
                    ) : (
                      <span key={wi}>{word} </span>
                    )
                  )}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeSlideUp} className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="font-body text-evren-charcoal/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                  style={{ lineHeight: 1.7 }}
                >
                  {active.description}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            variants={fadeSlideUp}
            className="w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="
                [--card-gap:1rem] sm:[--card-gap:1.25rem] lg:[--card-gap:1.5rem]
                relative w-full overflow-hidden py-2 sm:py-3
              "
            >
              <div
                className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  gap: "var(--card-gap)",
                  transform: `translateX(calc(-${scrollIndex} * ((100% - (var(--card-gap) * (${cardsPerView} - 1))) / ${cardsPerView} + var(--card-gap))))`,
                }}
              >
                {values.map((value, i) => {
                  const isVisible = i >= scrollIndex && i < scrollIndex + cardsPerView;
                  const isCenter = i === current;
                  const isEnlarged =
                    i === centerIndex && i !== 0 && i !== values.length - 1;

                  return (
                    <ValueCard
                      key={value.title}
                      value={value}
                      index={i}
                      isVisible={isVisible}
                      isCenter={isCenter}
                      isEnlarged={isEnlarged}
                      cardsPerView={cardsPerView}
                      onSelect={() => setCurrent(i)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-end mt-5 sm:mt-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous step"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy hover:bg-evren-navy hover:text-white transition-colors duration-300 group"
                >
                  <ChevronLeft
                    size={20}
                    className="transform group-hover:-translate-x-0.5 transition-transform"
                  />
                </button>

                <div className="flex gap-2 sm:gap-2.5 items-center px-1">
                  {values.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`transition-all duration-300 rounded-full border border-evren-navy/20 ${
                        i === current
                          ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-evren-peach border-evren-peach"
                          : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-transparent hover:bg-evren-navy/10 cursor-pointer"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next step"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy hover:bg-evren-navy hover:text-white transition-colors duration-300 group"
                >
                  <ChevronRight
                    size={20}
                    className="transform group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
