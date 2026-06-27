"use client";

import { useRef, useEffect, useLayoutEffect, useState } from "react";
import ArrowButton from "@/components/ui/ArrowButton";

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
  const isMd = useMediaQuery("(max-width: 767px)");
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


  const headlineLineOneMax = isXs ? 30 : isSm ? 36 : isCompactHero ? 38 : isMd ? 46 : 54;
  const headlineLineOneMin = isXs ? 13 : isSm ? 14 : 18;
  const headlineLineTwoMax = isXs ? 48 : isSm ? 62 : isCompactHero ? 64 : isMd ? 88 : 108;
  const headlineLineTwoMin = isXs ? 14 : isSm ? 15 : 24;

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative isolate w-full flex flex-col bg-evren-warm-white overflow-x-clip ${
        isCompactHero
          ? "min-h-[100dvh] max-h-[100dvh] overflow-y-auto"
          : "min-h-[100dvh] md:h-[100svh] md:min-h-[640px] lg:min-h-[680px]"
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

      {/* Layer 2 — site-width wrapper aligns glass panel to navbar */}
      <div
        ref={contentRef}
        className={`relative z-10 flex-1 flex flex-col site-container hero-fade-in min-h-0 ${
          isCompactHero
            ? "pt-[calc(4.75rem+env(safe-area-inset-top,0px))] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]"
            : "pt-[calc(5rem+env(safe-area-inset-top,0px))] sm:pt-[6.5rem] md:pt-[7.75rem] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-24 md:pb-32 lg:pb-36"
        }`}
      >
        {/* Glassmorphic hero panel — same horizontal footprint as the navbar */}
        <div
          className={`hero-glass-container hero-content-shell w-full flex-1 flex flex-col items-center justify-center min-h-0 group/hero ${
            isCompactHero
              ? "px-5 sm:px-8 md:px-12 py-6 sm:py-8"
              : "px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-14 lg:py-16"
          }`}
        >
          <div className="flex flex-col items-center text-center w-full mx-auto min-w-0">
            {/* Badge */}
            <div className={isCompactHero ? "mb-2 sm:mb-3" : "mb-4 sm:mb-7"}>
              <span className="block text-[9px] min-[375px]:text-[10px] sm:text-[11px] font-heading font-bold text-evren-navy/50 tracking-[0.06em] min-[375px]:tracking-[0.12em] sm:tracking-[0.25em] uppercase text-center leading-snug max-w-[28ch] min-[375px]:max-w-[32ch] sm:max-w-none mx-auto">
              AI Development · Automation · SaaS · QA
              </span>
            </div>

            {/* Headline — auto-scales to fill the glass panel width */}
            <h1 className="font-heading w-full min-w-0 overflow-visible flex flex-col gap-0.5 sm:gap-1">
              <HeroHeadlineLine
                maxSize={headlineLineOneMax}
                minSize={headlineLineOneMin}
                className="font-light text-evren-medium-gray/90 tracking-normal leading-[1.12] sm:leading-[1.2]"
              >
                From Concept to
              </HeroHeadlineLine>
              <HeroHeadlineLine
                maxSize={headlineLineTwoMax}
                minSize={headlineLineTwoMin}
                className="heading-liquid font-extrabold tracking-tight leading-[1.06] sm:leading-[1.1] md:leading-[1.12]"
              >
                Production-Ready AI.
              </HeroHeadlineLine>
            </h1>

            {/* Body copy */}
            <p
              className={`font-body text-evren-charcoal leading-relaxed text-pretty mx-auto ${
                isCompactHero
                  ? "mt-3 sm:mt-4 text-sm sm:text-base max-w-[40ch] sm:max-w-[46ch]"
                  : "mt-4 min-[375px]:mt-5 sm:mt-8 md:mt-10 text-[13px] min-[375px]:text-sm sm:text-base md:text-lg max-w-[32ch] min-[375px]:max-w-[34ch] sm:max-w-[42ch] md:max-w-[48ch]"
              }`}
              style={{ lineHeight: 1.65 }}
            >
              We help startups and businesses build AI-powered applications,
              automate complex workflows, and develop scalable SaaS platforms
              with expert QA built in from day one.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full ${
                isCompactHero
                  ? "mt-3 sm:mt-4 gap-2.5 sm:gap-3 max-w-[min(100%,22rem)] sm:max-w-none"
                  : "mt-4 min-[375px]:mt-5 sm:mt-8 md:mt-10 gap-3 sm:gap-4 max-w-[min(100%,20rem)] sm:max-w-none"
              }`}
            >
              <ArrowButton
                href="/connect"
                id="hero-cta-primary"
                ariaLabel="Book a free consultation with AI Advocate Holding"
                variant="primary"
                size={isSm ? "md" : isCompactHero ? "md" : "lg"}
                className="w-full sm:w-auto min-h-[44px] justify-between sm:justify-center text-[12px] min-[375px]:text-[13px] sm:text-base"
              >
                <span className="sm:hidden">Book Consultation</span>
                <span className="hidden sm:inline">Book a Free Consultation</span>
              </ArrowButton>

              <ArrowButton
                href="/approach"
                id="hero-cta-secondary"
                ariaLabel="See our approach"
                variant="outline"
                size={isSm ? "md" : isCompactHero ? "md" : "lg"}
                className="w-full sm:w-auto min-h-[44px] justify-between sm:justify-center text-[12px] min-[375px]:text-[13px] sm:text-base"
              >
                See Our Approach
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width centered watermark */}
      <div
        className={`hero-watermark-band pointer-events-none ${isCompactHero ? "hero-watermark-band--compact" : ""}`}
      >
        <HeroWatermark text="AI Advocate Holding" compact={isCompactHero} />
      </div>

      {/* Layer 3 — bottom section fade (above bg, below content) */}
      <div className="hero-bottom-fade pointer-events-none" />
    </section>
  );
}
