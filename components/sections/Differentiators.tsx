"use client";

import { useRef, useLayoutEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Cpu, Users, Shield, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SCROLL_STEP_RATIO = 0.42;
const SCROLL_STEP_MIN_PX = 28;

const headerFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface Principle {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  layerClass: string;
  labelClass: string;
  titleClass: string;
  bodyClass: string;
  iconClass: string;
  iconBgClass: string;
  iconWrapClass: string;
  iconSize: number;
  bodyMaxClass: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: "ai-native",
    label: "AI + AUTOMATION EXPERTISE",
    title: "Full-Stack AI Capability",
    body: "From OpenAI and Claude API integrations to workflow automation with Zapier, Make, and n8n we bring end-to-end AI expertise that turns complex requirements into practical, production-ready solutions.",
    icon: Cpu,
    layerClass:
      "bg-evren-navy border border-evren-navy-light/30 shadow-[0_20px_60px_rgba(26,36,33,0.25)]",
    labelClass: "text-evren-peach/90",
    titleClass: "text-white",
    bodyClass: "text-white/70",
    iconClass: "text-white",
    iconBgClass: "opacity-[0.08] group-hover:opacity-10",
    iconWrapClass: "-top-16 -right-12 rotate-12",
    iconSize: 280,
    bodyMaxClass: "max-w-md",
  },
  {
    id: "partnership",
    label: "QUALITY ASSURANCE",
    title: "Built-In QA, Zero Surprises",
    body: "Every product we ship includes automated testing Selenium, Cypress, API and regression testing. Quality is built in from the first sprint, not bolted on as an afterthought.",
    icon: Users,
    layerClass:
      "bg-white border border-evren-light-gray/40 shadow-warm",
    labelClass: "text-evren-peach/90",
    titleClass: "text-evren-navy",
    bodyClass: "text-evren-charcoal/80",
    iconClass: "text-evren-navy",
    iconBgClass: "opacity-[0.03] group-hover:opacity-[0.06]",
    iconWrapClass: "-top-12 -right-12 -rotate-12",
    iconSize: 240,
    bodyMaxClass: "max-w-sm",
  },
  {
    id: "built-to-last",
    label: "BUSINESS OUTCOMES",
    title: "Scalable Code. Real Results.",
    body: "We write clean, scalable architecture and maintain fast, structured communication throughout. Our focus is your business outcome shipping software that works, scales, and grows with you.",
    icon: Shield,
    layerClass:
      "bg-gradient-to-br from-evren-peach-light via-evren-peach/25 to-evren-peach-light/90 border border-evren-peach/50 shadow-[0_15px_40px_rgba(136,201,179,0.28)]",
    labelClass: "text-evren-gold",
    titleClass: "text-evren-navy",
    bodyClass: "text-evren-navy/80",
    iconClass: "text-evren-gold",
    iconBgClass: "opacity-[0.2] group-hover:opacity-[0.32]",
    iconWrapClass: "top-1/2 -translate-y-1/2 -right-12 md:right-16 -rotate-[5deg]",
    iconSize: 260,
    bodyMaxClass: "md:max-w-xl",
  },
];

function SectionLabel({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`block text-[11px] font-heading font-semibold uppercase tracking-[0.2em] mb-3 ${className}`}
    >
      {text}
    </span>
  );
}

function PrincipleLayer({ principle }: { principle: Principle }) {
  const Icon = principle.icon;

  return (
    <div
      className={`group relative w-full rounded-[24px] overflow-hidden p-8 lg:p-10 flex flex-col justify-between ${principle.layerClass}`}
    >
      <div
        className={`absolute transform ${principle.iconWrapClass} ${principle.iconBgClass} group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none`}
      >
        <Icon
          size={principle.iconSize}
          strokeWidth={0.7}
          className={principle.iconClass}
        />
      </div>

      <div className="relative z-10">
        <SectionLabel text={principle.label} className={principle.labelClass} />
        <h3
          className={`text-2xl lg:text-3xl font-heading font-bold mt-2 mb-3 leading-tight ${principle.titleClass}`}
        >
          {principle.title}
        </h3>
        <p
          className={`font-body text-[15px] leading-relaxed ${principle.bodyClass} ${principle.bodyMaxClass}`}
        >
          {principle.body}
        </p>
      </div>
    </div>
  );
}

const portalMaskStyle = {
  WebkitMaskImage:
    "radial-gradient(circle at 50% 50%, transparent var(--portal-r, 0%), black var(--portal-r, 0%))",
  maskImage:
    "radial-gradient(circle at 50% 50%, transparent var(--portal-r, 0%), black var(--portal-r, 0%))",
} as const;

export default function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    const stage = stageRef.current;
    if (!section || !stack || !stage) return;

    let ctx: gsap.Context | undefined;
    let refreshTimer = 0;
    let retryId = 0;
    let mounted = true;

    const setup = (): boolean => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const layerEls = layerRefs.current.filter(Boolean) as HTMLDivElement[];
      if (layerEls.length !== PRINCIPLES.length) return false;

      ctx?.revert();

      if (prefersReducedMotion) {
        layerEls.forEach((el) => {
          el.style.maskImage = "none";
          el.style.webkitMaskImage = "none";
        });
        return true;
      }

      ctx = gsap.context(() => {
        const cardHeight = stage.offsetHeight;
        const stepPx = Math.max(
          Math.round(cardHeight * SCROLL_STEP_RATIO + SCROLL_STEP_MIN_PX),
          180
        );
        const scrollTrackPx = (PRINCIPLES.length - 1) * stepPx;

        layerEls.forEach((el) => {
          gsap.set(el, { "--portal-r": "0%" });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top 72%",
            end: `+=${scrollTrackPx}`,
            scrub: 0.35,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 0; i < PRINCIPLES.length - 1; i++) {
          tl.to(
            layerEls[i],
            {
              "--portal-r": "150%",
              ease: "power4.in",
              duration: 1,
            },
            i
          );
        }
      }, section);

      ScrollTrigger.refresh();
      return true;
    };

    const refresh = () => ScrollTrigger.refresh();

    const bind = () => {
      window.addEventListener("resize", refresh);
      window.addEventListener("lenis-ready", refresh);
      refreshTimer = window.setTimeout(refresh, 2800);
    };

    const unbind = () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("lenis-ready", refresh);
      ctx?.revert();
    };

    if (!setup()) {
      retryId = requestAnimationFrame(() => {
        if (!mounted) return;
        if (setup()) bind();
      });
    } else {
      bind();
    }

    return () => {
      mounted = false;
      cancelAnimationFrame(retryId);
      unbind();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-evren"
      className="relative w-full bg-evren-warm-white"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(136, 201, 179, 0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-8%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(78, 124, 110, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="pt-12 sm:pt-16 lg:pt-20 pb-10 lg:pb-14 max-w-3xl"
          variants={headerFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-4">
            Why AI Advocate Holding
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-evren-navy font-heading font-bold leading-tight">
            AI Expertise.{" "}
            <span className="heading-highlight">Built-In Quality.</span>
          </h2>
          <p className="mt-4 text-evren-medium-gray font-body text-[15px] leading-relaxed max-w-xl">
            Three reasons our clients choose us and why they keep coming back
            to build, automate, and scale with us.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
        <div ref={stackRef} className="relative w-full">
          <div ref={stageRef} className="relative w-full">
              <div className="invisible pointer-events-none select-none" aria-hidden="true">
                <PrincipleLayer principle={PRINCIPLES[0]} />
              </div>

              {PRINCIPLES.map((principle, index) => {
                const zIndex = PRINCIPLES.length - index;

                return (
                  <div
                    key={principle.id}
                    ref={(el) => {
                      layerRefs.current[index] = el;
                    }}
                    className="absolute inset-0 w-full"
                    style={{
                      zIndex,
                      ...portalMaskStyle,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      ["--portal-r" as any]: "0%",
                    }}
                    aria-label={`${principle.title} principle`}
                    aria-hidden={index !== 0}
                  >
                    <PrincipleLayer principle={principle} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
