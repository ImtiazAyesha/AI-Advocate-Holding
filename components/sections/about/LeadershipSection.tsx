"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.8 },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  LEADERSHIP — Single CEO Statement Layout
// ═══════════════════════════════════════════════════════════════════════

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative w-full overflow-hidden bg-evren-warm-white py-8 lg:py-12"
    >
      {/* ── Background Elements ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft radial gradients for depth */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(136, 201, 179, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(78, 124, 110, 0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-30%, 30%)",
          }}
        />

        {/* Architectural grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col"
        >
          {/* Main Section Title (Mobile) */}
          <motion.div variants={fadeSlideUp} className="mb-8 text-left block lg:hidden">
            <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-evren-navy">
              A{" "}
              <span className="relative inline-block">
                <span className="heading-highlight">Message</span>
              </span>{" "}
              Addressed To You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* ── Left side / Text (Now on the right) ───────────────────── */}
            <div className="relative flex flex-col justify-start order-2 mt-4">
              {/* Main Section Title (Desktop) */}
              <motion.div variants={fadeSlideUp} className="mb-6 lg:mb-8 text-left hidden lg:block">
                <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-evren-navy">
                  A{" "}
                  <span className="relative inline-block">
                    <span className="heading-highlight">Message</span>
                  </span>{" "}
                  Addressed To You
                </h2>
              </motion.div>

              {/* Editorial Statement */}
              <motion.p
                variants={fadeSlideUp}
                className="font-heading text-evren-charcoal text-lg sm:text-lg md:text-xl lg:text-2xl leading-[1.8] -tracking-[0.01em]"
              >
                <span>Most teams spend months debating tools and architectures before writing a single line of production code. We built AI Advocate to close that gap. </span>
                <span className="heading-highlight font-semibold">
                  We bring the technical depth, the QA discipline, and the delivery speed
                </span>
                <span> that founders and product teams need to go from idea to working software without the usual false starts.</span>
              </motion.p>

            </div>

            {/* ── Right side / Image (Now on the left) ───────────────── */}
            <motion.div
              variants={imageReveal}
              className="relative group w-full max-w-[400px] lg:max-w-[480px] mx-auto order-1"
            >
              {/* Image Card with overlaid founder info */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-evren-navy/10 border-4 border-evren-peach/10 bg-evren-peach">
                <Image
                  src="/Meer.png"
                  alt="Moazzam Ali, Founder & CEO of AI Advocate"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                  quality={100}
                  priority
                />

                {/* Gradient + name overlay */}
                <motion.div
                  variants={fadeSlideUp}
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-evren-navy/90 via-evren-navy/50 to-transparent px-6 pb-6 pt-16"
                >
                  <h3 className="font-heading text-white font-bold text-xl tracking-tight mb-1">
                    Moazzam Ali
                  </h3>
                  <p className="font-sans text-white/80 text-sm">
                    Founder & CEO
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
