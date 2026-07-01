"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Cpu, Users, Shield, type LucideIcon } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const headerFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.18,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ═══════════════════════════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════════════════════════

interface Card {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  glow: string;
  glowDim: string;
  accent: string;
}

const CARDS: Card[] = [
  {
    id: "ai-native",
    label: "AI + AUTOMATION EXPERTISE",
    title: "Full-Stack AI Capability",
    body: "From OpenAI and Claude API integrations to workflow automation with Zapier, Make, and n8n we bring end-to-end AI expertise that turns complex requirements into practical, production-ready solutions.",
    icon: Cpu,
    glow: "rgba(136, 201, 179, 0.75)",
    glowDim: "rgba(136, 201, 179, 0.22)",
    accent: "#88C9B3",
  },
  {
    id: "partnership",
    label: "QUALITY ASSURANCE",
    title: "Built-In QA, Zero Surprises",
    body: "Every product we ship includes automated testing Selenium, Cypress, API and regression testing. Quality is built in from the first sprint, not bolted on as an afterthought.",
    icon: Users,
    glow: "rgba(107, 200, 160, 0.75)",
    glowDim: "rgba(107, 200, 160, 0.22)",
    accent: "#6BC8A0",
  },
  {
    id: "built-to-last",
    label: "BUSINESS OUTCOMES",
    title: "Scalable Code. Real Results.",
    body: "We write clean, scalable architecture and maintain fast, structured communication throughout. Our focus is your business outcome: shipping software that works, scales, and grows with you.",
    icon: Shield,
    glow: "rgba(78, 180, 140, 0.75)",
    glowDim: "rgba(78, 180, 140, 0.22)",
    accent: "#4EB48C",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  GLASS CARD
// ═══════════════════════════════════════════════════════════════════════

function GlassCard({ card, index, inView }: { card: Card; index: number; inView: boolean }) {
  const Icon = card.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Outer glow shell — overflow-visible so the icon circle can protrude above */}
      <div
        className="relative rounded-2xl p-px flex flex-col flex-1 overflow-visible transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          background: `linear-gradient(135deg, ${card.glow} 0%, rgba(255,255,255,0.15) 40%, ${card.glowDim} 100%)`,
          boxShadow: `0 0 18px ${card.glowDim}, 0 4px 32px rgba(0,0,0,0.18)`,
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            `0 0 32px ${card.glow}, 0 0 72px ${card.glowDim}, 0 8px 40px rgba(0,0,0,0.25)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            `0 0 18px ${card.glowDim}, 0 4px 32px rgba(0,0,0,0.18)`;
        }}
      >
        {/* ── Floating icon circle — centered on top edge, half above ── */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                     w-16 h-16 rounded-full flex items-center justify-center
                     transition-all duration-400 group-hover:scale-110"
          style={{
            background: "rgba(8, 22, 17, 0.90)",
            border: `1.5px solid ${card.glow}`,
            boxShadow: `0 0 14px ${card.glow}, 0 0 32px ${card.glowDim}, inset 0 0 10px ${card.glowDim}`,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Inner ring */}
          <span
            className="absolute inset-[4px] rounded-full pointer-events-none"
            style={{ border: `1px solid ${card.glowDim}` }}
          />
          <Icon size={24} style={{ color: card.accent }} strokeWidth={1.6} />
        </div>

        {/* Corner glow accents */}
        <span
          className="absolute -top-px -left-px w-16 h-16 rounded-tl-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 0% 0%, ${card.glow} 0%, transparent 70%)` }}
        />
        <span
          className="absolute -bottom-px -right-px w-16 h-16 rounded-br-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 100% 100%, ${card.glow} 0%, transparent 70%)` }}
        />

        {/* Glass inner surface */}
        <div
          className="relative flex flex-col flex-1 rounded-2xl overflow-hidden pt-12 px-7 pb-7 lg:pt-14 lg:px-8 lg:pb-8"
          style={{
            background: "rgba(8, 20, 16, 0.72)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          />

          {/* Top inner glow line */}
          <div
            className="absolute top-0 left-6 right-6 h-px pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${card.glow}, transparent)`,
              opacity: 0.45,
            }}
          />

          {/* Label */}
          <span
            className="block text-[10px] font-heading font-bold uppercase tracking-[0.22em] mb-3 text-center"
            style={{ color: card.accent }}
          >
            {card.label}
          </span>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-heading font-bold text-white leading-tight mb-4 text-center">
            {card.title}
          </h3>

          {/* Body */}
          <p className="font-body text-[14px] lg:text-[15px] text-white/60 leading-relaxed text-center">
            {card.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="why-evren"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: "linear-gradient(160deg, #0b1812 0%, #0d1e18 55%, #091410 100%)" }}
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(136,201,179,0.08) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse at 20% 80%, rgba(78,180,140,0.07) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse at 80% 30%, rgba(107,200,160,0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diff-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0M0 48V0" stroke="rgba(136,201,179,0.8)" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diff-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mb-12 lg:mb-16 max-w-3xl"
          variants={headerFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-4">
            Why AI Advocate
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-white font-heading font-bold leading-tight">
            AI Expertise.{" "}
            <span className="heading-highlight">Built-In Quality.</span>
          </h2>
          <p className="mt-4 text-white/50 font-body text-[15px] leading-relaxed max-w-xl">
            Three reasons our clients choose us and why they keep coming back
            to build, automate, and scale with us.
          </p>
        </motion.div>

        {/* 3-card row — pt-10 gives clearance for the icon circle protruding above each card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-10">
          {CARDS.map((card, i) => (
            <GlassCard key={card.id} card={card} index={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
