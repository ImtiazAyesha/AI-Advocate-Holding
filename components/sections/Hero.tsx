"use client";

import { useRef, useEffect, useLayoutEffect, useState } from "react";
import ArrowButton from "@/components/ui/ArrowButton";
import InnovationIllustration from "@/components/icons/InnovationIllustration";

// ═══════════════════════════════════════════════════════════════════════
//  HEADLINE FIT — scales each row to container width so text never clips
// ═══════════════════════════════════════════════════════════════════════

function HeroHeadlineLine({
  children,
  className = "",
  maxSize = 128,
  minSize = 20,
}: {
  children: React.ReactNode;
  className?: string;
  maxSize?: number;
  minSize?: number;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const el = textRef.current;
    if (!wrap || !el) return;

    const fit = () => {
      const maxWidth = wrap.clientWidth;
      if (!maxWidth) return;

      let size = maxSize;
      el.style.fontSize = `${size}px`;

      while (el.scrollWidth > maxWidth && size > minSize) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [maxSize, minSize, children]);

  return (
    <span ref={wrapRef} className="block w-full min-w-0 overflow-visible">
      <span
        ref={textRef}
        className={`inline-block whitespace-nowrap max-w-full ${className}`.trim()}
      >
        {children}
      </span>
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  WATERMARK — scales to container width so text never clips
// ═══════════════════════════════════════════════════════════════════════

function HeroWatermark({ text, compact = false }: { text: string; compact?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const el = textRef.current;
    if (!wrap || !el) return;

    const fit = () => {
      el.style.fontSize = "";
      const maxWidth = wrap.clientWidth;
      if (!maxWidth) return;

      let size = parseFloat(getComputedStyle(el).fontSize) || 48;
      const minSize = maxWidth < 640 ? 16 : 22;
      const maxSize = compact ? (maxWidth < 640 ? 72 : 96) : maxWidth < 640 ? 120 : 200;

      while (el.scrollWidth < maxWidth * 0.992 && size < maxSize) {
        size += 1;
        el.style.fontSize = `${size}px`;
      }

      while (el.scrollWidth > maxWidth && size > minSize) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [text, compact]);

  return (
    <div ref={wrapRef} className="hero-watermark-wrap">
      <p ref={textRef} className="hero-watermark" aria-hidden="true">
        {text}
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  HERO SECTION
// ═══════════════════════════════════════════════════════════════════════

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export default function Hero() {
  const isXs = useMediaQuery("(max-width: 374px)");
  const isSm = useMediaQuery("(max-width: 639px)");
  const isCompactHero = useMediaQuery("(max-height: 860px)");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ gridX: 0, gridY: 0, opacity: 0 });
  const [enablePointerFx, setEnablePointerFx] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnablePointerFx(canHover);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!enablePointerFx || !gridRef.current) return;

    const gridRect = gridRef.current.getBoundingClientRect();
    setMousePos({
      gridX: e.clientX - gridRect.left,
      gridY: e.clientY - gridRect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };


  // Content column is full-width on mobile, ~48% on md+
  const headlineLineOneMax = isXs ? 26 : isSm ? 34 : isCompactHero ? 28 : 44;
  const headlineLineOneMin = 14;
  const headlineLineTwoMax = isXs ? 42 : isSm ? 60 : isCompactHero ? 48 : 82;
  const headlineLineTwoMin = 18;

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative isolate w-full flex flex-col bg-evren-warm-white overflow-x-clip ${
        isCompactHero
          ? "min-h-[100dvh] max-h-[100dvh] overflow-y-auto"
          : "min-h-[100dvh] lg:h-[100svh] lg:min-h-[700px]"
      }`}
    >
      {/* Layer 0a — glassmorphism color blobs (give backdrop-filter something rich to blur) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute rounded-full"
          style={{
            top: "10%", left: "5%",
            width: "48%", height: "55%",
            background: "radial-gradient(ellipse at center, rgba(136,201,179,0.42) 0%, rgba(136,201,179,0.18) 45%, transparent 72%)",
            filter: "blur(48px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: "20%", right: "4%",
            width: "44%", height: "52%",
            background: "radial-gradient(ellipse at center, rgba(224,242,236,0.60) 0%, rgba(107,168,142,0.22) 50%, transparent 75%)",
            filter: "blur(56px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "15%", left: "28%",
            width: "42%", height: "40%",
            background: "radial-gradient(ellipse at center, rgba(78,124,110,0.28) 0%, transparent 68%)",
            filter: "blur(64px)",
          }}
        />
      </div>

      {/* Layer 0b — subtle plus grid (below text) */}
      <div className="hero-deco-layer pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[100vw] h-full min-h-[420px] sm:min-h-[520px] md:min-h-[800px]">
          <div ref={gridRef} className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-[0.14]">
                <defs>
                  <pattern
                    id="base-plus-pattern"
                    x="0"
                    y="0"
                    width={isSm ? 44 : 56}
                    height={isSm ? 44 : 56}
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M28 24v8M24 28h8"
                      stroke="rgba(26, 36, 33, 0.2)"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#base-plus-pattern)" />
              </svg>

              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: mousePos.opacity,
                  maskImage: `radial-gradient(circle 350px at ${mousePos.gridX}px ${mousePos.gridY}px, black, transparent)`,
                  WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.gridX}px ${mousePos.gridY}px, black, transparent)`,
                }}
              >
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <pattern
                      id="glow-plus-pattern"
                      x="0"
                      y="0"
                      width={isSm ? 44 : 56}
                      height={isSm ? 44 : 56}
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M28 24v8M24 28h8"
                        stroke="#88C9B3"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#glow-plus-pattern)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2 — two-column layout */}
      <div
        ref={contentRef}
        className={`relative z-10 flex-1 flex flex-col site-container hero-fade-in min-h-0 ${
          isCompactHero
            ? "pt-[calc(4.75rem+env(safe-area-inset-top,0px))] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]"
            : "pt-[calc(5rem+env(safe-area-inset-top,0px))] sm:pt-[6.5rem] md:pt-[7.75rem] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-24 md:pb-32 lg:pb-36"
        }`}
      >
        <div
          className={`w-full flex-1 flex flex-col lg:flex-row items-center min-h-0 gap-4 sm:gap-5 md:gap-6 lg:gap-12 xl:gap-16 ${
            isCompactHero
              ? "px-5 sm:px-8 md:px-12 py-3 sm:py-4"
              : "px-5 sm:px-8 md:px-12 lg:px-14 xl:px-20 py-4 sm:py-6 md:py-8 lg:py-0"
          }`}
        >
          {/* SVG — top on mobile/md (order-1), right column on lg+ (order-2) */}
          <div className="order-1 lg:order-2 flex w-full lg:w-[52%] flex-shrink-0 items-center justify-center">
            <InnovationIllustration
              className="w-full h-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[480px] xl:max-w-[520px]"
            />
          </div>

          {/* Content — below SVG on mobile/md (order-2), left column on lg+ (order-1) */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left w-full lg:w-[48%] min-w-0">

            {/* Badge */}
            <div className={isCompactHero ? "mb-2" : "mb-3 sm:mb-4 md:mb-5"}>
              <span className="block text-[9px] sm:text-[10px] font-heading font-bold text-evren-navy/50 tracking-[0.1em] sm:tracking-[0.18em] uppercase leading-snug">
                AI Development · Automation · SaaS · QA
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading w-full min-w-0 overflow-visible flex flex-col gap-0.5 sm:gap-1">
              <HeroHeadlineLine
                maxSize={headlineLineOneMax}
                minSize={headlineLineOneMin}
                className="font-light text-evren-medium-gray/90 tracking-normal leading-[1.12] sm:leading-[1.18]"
              >
                From Concept to
              </HeroHeadlineLine>
              <HeroHeadlineLine
                maxSize={headlineLineTwoMax}
                minSize={headlineLineTwoMin}
                className="heading-liquid font-extrabold tracking-tight leading-[1.06] sm:leading-[1.1]"
              >
                Production-Ready AI.
              </HeroHeadlineLine>
            </h1>

            {/* Body copy */}
            <p
              className={`font-body text-evren-charcoal leading-relaxed text-pretty
                text-[13px] sm:text-sm md:text-base lg:text-[17px]
                max-w-[38ch] sm:max-w-[48ch] md:max-w-[54ch] lg:max-w-none
                ${isCompactHero ? "mt-2 sm:mt-3" : "mt-3 sm:mt-4 md:mt-5 lg:mt-6"}`}
              style={{ lineHeight: 1.65 }}
            >
              We build production-ready AI systems that turn complex data into
              measurable business outcomes.
            </p>

            {/* CTAs
                < 640px        → stacked, full-width
                640–1023px     → side-by-side (single-col hero, full width available)
                1024–1279px    → stacked again (two-col hero, content col ~415px — too narrow)
                1280px+        → side-by-side (two-col hero, content col ~490px — fits)  */}
            <div
              className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-2.5 sm:gap-3 xl:gap-4 w-full sm:w-auto lg:w-full xl:w-auto
                ${isCompactHero ? "mt-3 sm:mt-4" : "mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8"}`}
            >
              <ArrowButton
                href="/connect"
                id="hero-cta-primary"
                ariaLabel="Book a free consultation with AI Advocate"
                variant="primary"
                size={isSm ? "md" : isCompactHero ? "md" : "lg"}
                className="w-full sm:w-auto lg:w-full xl:w-auto whitespace-nowrap justify-between sm:justify-start lg:justify-between xl:justify-start"
              >
                Book a Free Consultation
              </ArrowButton>

              <ArrowButton
                href="/capabilities"
                id="hero-cta-secondary"
                ariaLabel="See our capabilities"
                variant="outline"
                size={isSm ? "md" : isCompactHero ? "md" : "lg"}
                className="w-full sm:w-auto lg:w-full xl:w-auto whitespace-nowrap justify-between sm:justify-start lg:justify-between xl:justify-start"
              >
                See Our Capabilities
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width centered watermark */}
      <div
        className={`hero-watermark-band pointer-events-none ${isCompactHero ? "hero-watermark-band--compact" : ""}`}
      >
        <HeroWatermark text="AI Advocate" compact={isCompactHero} />
      </div>

      {/* Layer 3 — bottom section fade (above bg, below content) */}
      <div className="hero-bottom-fade pointer-events-none" />
    </section>
  );
}
