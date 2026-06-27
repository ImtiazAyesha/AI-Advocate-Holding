"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { BrainCircuit, Workflow } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CUSTOM ANIMATED VISUALS
// ═══════════════════════════════════════════════════════════════════════

function VisualLLM() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-4 overflow-hidden bg-evren-warm-white/50 rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/30 transition-colors duration-500 p-6 md:p-8">
       {/* User Prompt */}
       <motion.div 
         className="self-end bg-evren-navy text-white text-[11px] md:text-sm font-medium py-2 px-4 rounded-xl rounded-tr-sm shadow-md"
         animate={{ opacity: [0, 1, 1, 0, 0], y: [10, 0, 0, -10, -10] }}
         transition={{ duration: 8, times: [0, 0.1, 0.8, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
       >
          Analyze context...
       </motion.div>

       {/* LLM Response */}
       <motion.div 
         className="self-start bg-white border border-evren-light-gray w-[85%] p-4 rounded-xl rounded-tl-sm shadow-sm space-y-2.5 lg:space-y-3"
         animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.95, 0.95, 1, 1, 0.95] }}
         transition={{ duration: 8, times: [0, 0.15, 0.25, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
       >
          <motion.div 
             className="h-2 lg:h-2.5 bg-evren-peach rounded-full"
             animate={{ width: ["0%", "0%", "100%", "100%", "0%"] }}
             transition={{ duration: 8, times: [0, 0.25, 0.35, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
             className="h-2 lg:h-2.5 bg-evren-navy/15 rounded-full"
             animate={{ width: ["0%", "0%", "85%", "85%", "0%"] }}
             transition={{ duration: 8, times: [0, 0.35, 0.45, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
             className="h-2 lg:h-2.5 bg-evren-navy/15 rounded-full"
             animate={{ width: ["0%", "0%", "60%", "60%", "0%"] }}
             transition={{ duration: 8, times: [0, 0.45, 0.55, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
          />
       </motion.div>
    </div>
  );
}

function VisualSaaS() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-evren-warm-white/50 rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/30 transition-colors duration-500 p-4 md:p-5">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-300/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-300/60" />
        <div className="w-2 h-2 rounded-full bg-green-300/60" />
        <div className="flex-1 h-5 rounded-md bg-evren-navy/5 ml-2 flex items-center px-2">
          <div className="w-16 h-1.5 rounded-full bg-evren-navy/12" />
        </div>
      </div>
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Users", val: "2.4k" },
          { label: "MRR", val: "$18k" },
          { label: "Uptime", val: "99.9%" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="bg-white rounded-xl border border-evren-light-gray/60 p-2 flex flex-col gap-0.5"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <span className="text-[9px] font-semibold text-evren-navy/40 uppercase tracking-wide">{s.label}</span>
            <span className="text-sm md:text-base font-bold text-evren-navy leading-none">{s.val}</span>
          </motion.div>
        ))}
      </div>
      {/* Content rows */}
      <div className="flex flex-col gap-2 flex-1">
        {[75, 55, 65].map((w, i) => (
          <motion.div key={i} className="flex items-center gap-2"
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
          >
            <div className="w-2 h-2 rounded-full bg-evren-peach/60 shrink-0" />
            <div className="h-[6px] rounded-full bg-evren-navy/8" style={{ width: `${w}%` }} />
          </motion.div>
        ))}
      </div>
      {/* Deploy strip */}
      <motion.div
        className="mt-3 h-7 rounded-lg bg-evren-navy flex items-center justify-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-bold text-white/80 tracking-wide uppercase">Deploy to Production</span>
      </motion.div>
    </div>
  );
}

function VisualQA() {
  const tests = ["login_flow_test", "api_response_test", "ai_output_validation", "regression_suite", "performance_bench"];
  return (
    <div className="relative w-full h-full flex flex-col justify-center overflow-hidden bg-evren-warm-white/50 rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/30 transition-colors duration-500 p-4 md:p-5">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-evren-navy/8">
        <div className="w-1.5 h-1.5 rounded-full bg-evren-peach animate-pulse" />
        <span className="text-[10px] font-bold text-evren-navy/50 uppercase tracking-widest">Test Suite Running</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {tests.map((label, i) => (
          <motion.div key={label} className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.18, duration: 0.35 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-[#4ade80]/15"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: i * 0.18 + 0.2, type: "spring", stiffness: 200 }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4L3 5.5L6.5 2" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <span className="text-[10px] md:text-[11px] font-mono text-evren-navy/60 truncate">{label}</span>
            <span className="ml-auto text-[9px] font-bold text-[#4ade80] shrink-0">PASS</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-3 flex items-center justify-between bg-white rounded-lg border border-evren-light-gray/60 px-3 py-1.5"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-bold text-[#4ade80]">5 passed</span>
        <span className="text-[10px] font-mono text-evren-navy/40">0 failed</span>
        <span className="text-[10px] font-mono text-evren-navy/40">5 total</span>
      </motion.div>
    </div>
  );
}

function VisualWorkflow() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F9FAFB] border border-evren-light-gray group-hover:border-evren-peach/20 transition-colors duration-500">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(var(--evren-navy) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
      />
      {/* Portrait viewBox — parent has explicit px height so inset-0 resolves correctly */}
      <svg
        viewBox="0 0 140 240"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Node 1: Trigger ── */}
        <rect x="20" y="8" width="100" height="34" rx="8" fill="white" stroke="rgba(26,36,33,0.1)" strokeWidth="1" />
        <circle cx="36" cy="25" r="7" fill="rgba(136,201,179,0.18)" />
        <text x="36" y="29" textAnchor="middle" fontSize="8" fill="#5aaa8a">⚡</text>
        <text x="85" y="22" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A2421" fontFamily="system-ui,sans-serif">Trigger</text>
        <text x="85" y="34" textAnchor="middle" fontSize="6" fill="rgba(26,36,33,0.4)" fontFamily="system-ui,sans-serif">New event</text>

        {/* ── Connector 1 ── */}
        <line x1="70" y1="42" x2="70" y2="70" stroke="rgba(26,36,33,0.15)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
        <polygon points="67,68 70,74 73,68" fill="rgba(26,36,33,0.2)" />

        {/* ── Node 2: Automation ── */}
        <rect x="10" y="76" width="120" height="34" rx="8" fill="#1A2421" />
        <text x="70" y="90" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">n8n / Zapier / Make</text>
        <text x="70" y="102" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.45)" fontFamily="system-ui,sans-serif">Route → filter → act</text>

        {/* ── Connector 2 ── */}
        <line x1="70" y1="110" x2="70" y2="138" stroke="rgba(26,36,33,0.15)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
        <polygon points="67,136 70,142 73,136" fill="rgba(26,36,33,0.2)" />

        {/* ── Node 3: AI Processing ── */}
        <rect x="10" y="144" width="120" height="34" rx="8" fill="rgba(26,36,33,0.04)" stroke="rgba(26,36,33,0.1)" strokeWidth="1" />
        <text x="70" y="158" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A2421" fontFamily="system-ui,sans-serif">AI Processing</text>
        <text x="70" y="170" textAnchor="middle" fontSize="6" fill="rgba(26,36,33,0.4)" fontFamily="system-ui,sans-serif">Context → decision → action</text>

        {/* ── Connector 3 ── */}
        <line x1="70" y1="178" x2="70" y2="206" stroke="rgba(136,201,179,0.5)" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
        <polygon points="67,204 70,210 73,204" fill="rgba(136,201,179,0.7)" />

        {/* ── Node 4: Output ── */}
        <rect x="20" y="212" width="100" height="22" rx="8" fill="rgba(136,201,179,0.15)" stroke="#88C9B3" strokeWidth="1.5" />
        <text x="70" y="227" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#1A2421" fontFamily="system-ui,sans-serif">Output  •  Auto-synced</text>

        {/* ── Animated traveling dot ── */}
        <motion.circle
          r="3.5"
          fill="#88C9B3"
          cx={70}
          animate={{ cy: [8, 42, 76, 110, 144, 178, 212, 234, 8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", times: [0, 0.17, 0.27, 0.44, 0.54, 0.71, 0.81, 0.98, 1] }}
          style={{ filter: "drop-shadow(0 0 5px rgba(136,201,179,0.9))" }}
        />
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PILLAR DATA
// ═══════════════════════════════════════════════════════════════════════

const PILLARS = [
  {
    title: "AI API Integration",
    body: "We integrate OpenAI and Claude APIs into your product with production-grade reliability. Prompt engineering, context management, streaming responses, and cost controls built in from the start.",
    Visual: VisualLLM,
    bgIcon: BrainCircuit,
  },
  {
    title: "SaaS Development",
    body: "Full-stack SaaS platforms built with React, Next.js, Node.js, and PostgreSQL. Clean architecture, multi-tenancy, authentication, billing, and the performance foundations that hold up at scale.",
    Visual: VisualSaaS,
  },
  {
    title: "QA Automation",
    body: "Every product we ship includes automated testing. Selenium and Cypress for end-to-end coverage, API and regression testing, and performance benchmarks that catch problems before your users do.",
    Visual: VisualQA,
  },
  {
    title: "Workflow Automation",
    body: "We build automation pipelines using n8n, Zapier, and Make that eliminate manual work across your business. Lead routing, data sync, AI-enhanced processing, and cross-app workflows that run without supervision.",
    Visual: VisualWorkflow,
    bgIcon: Workflow,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════════════════════════════════════

function PillarCard({ pillar, isWide = false }: { pillar: typeof PILLARS[0]; isWide?: boolean }) {
  const Visual = pillar.Visual;
  const BgIcon = pillar.bgIcon;
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative bg-white rounded-[2rem] p-6 lg:p-8 border border-evren-light-gray/60
                 transition-all duration-500 ease-out flex flex-col justify-center cursor-pointer
                 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(26,36,33,0.1)] hover:border-evren-peach/60
                 overflow-hidden w-full h-full ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      {/* Background Icon */}
      {BgIcon && (
        <div className="absolute -top-12 -right-12 transform -rotate-12 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none">
          <BgIcon size={240} strokeWidth={0.8} className="text-evren-navy" />
        </div>
      )}

      {/* (Hover accent gradient explicitly removed) */}

      <div className={`relative z-10 w-full h-full flex ${isWide ? 'flex-col md:flex-row items-stretch md:items-center gap-6 lg:gap-10' : 'flex-col items-stretch gap-6 lg:gap-8'}`}>
        
        {/* Animated Visual Box */}
        <div className={`relative shrink-0 w-full ${isWide ? 'md:w-[45%] lg:w-[40%] h-[200px] lg:h-[240px]' : 'h-[180px] lg:h-[200px]'}`}>
          <Visual />
        </div>

        {/* Text Content */}
        <div className={`flex flex-col flex-1 ${isWide ? 'py-4' : ''}`}>
          <h3 className="text-2xl lg:text-[26px] font-heading font-bold text-evren-navy mb-3 lg:mb-4">
            {pillar.title}
          </h3>
          <p className="text-evren-charcoal font-body leading-relaxed text-base lg:text-[17px]">
            {pillar.body}
          </p>
        </div>
        
      </div>
    </motion.article>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  AI-NATIVE DIFFERENCE — TIGHT-FIT BENTO GRID
// ═══════════════════════════════════════════════════════════════════════

export default function AINativeDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="ai-native-difference"
      aria-label="The AI-Native Difference"
      className="relative w-full bg-evren-warm-white py-12 lg:py-16 overflow-hidden"
    >
      {/* ── Decorative Orbs ─────────────────────────────────────── */}
      <div
        className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(136, 201, 179, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(26, 36, 33, 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════════
            CENTERED HEADER
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4"
          >
            The Differentiation
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight"
          >
            What We{" "}
            <span className="relative inline-block">
              <span className="heading-highlight">Build</span>
            </span>{" "}
            and How
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base lg:text-lg text-evren-charcoal font-body leading-relaxed mb-8"
          >
            Four core capabilities delivered as one integrated service. AI development, workflow automation, SaaS platforms, and QA work together in every project we take on.
          </motion.p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════
            CONTENT — TIGHT-FIT BENTO GRID
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {/* Row 1: Wide then Narrow */}
          <PillarCard pillar={PILLARS[0]} isWide />
          <PillarCard pillar={PILLARS[1]} />
          
          {/* Row 2: Narrow then Wide */}
          <PillarCard pillar={PILLARS[2]} />
          <PillarCard pillar={PILLARS[3]} isWide />
        </motion.div>
      </div>
    </section>
  );
}