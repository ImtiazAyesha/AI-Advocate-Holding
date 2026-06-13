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
      el.style.fontSize = `${maxSize}px`;
      let size = maxSize;
      const maxWidth = wrap.clientWidth;
      if (!maxWidth) return;

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
    <span ref={wrapRef} className="block w-full overflow-visible">
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

function HeroWatermark({ text }: { text: string }) {
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
      const minSize = 22;
      const maxSize = 200;

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
  }, [text]);

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

export default function Hero() {
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


  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate w-full h-[100svh] min-h-[640px] overflow-x-clip overflow-y-hidden bg-evren-warm-white flex flex-col"
    >
      {/* Layer 0 — subtle plus grid (below text) */}
      <div className="hero-deco-layer pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] min-h-[800px]"
        >
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
                    width="56"
                    height="56"
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
                      width="56"
                      height="56"
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

      {/* Layer 2 — all readable content */}
      <div
        ref={contentRef}
        className="hero-content-layer site-container hero-content-shell flex flex-col flex-1 min-h-0 pt-[7.25rem] sm:pt-[8.25rem] lg:pt-[8.75rem] pb-28 sm:pb-32 lg:pb-36 group/hero hero-fade-in"
      >
        <div className="relative flex-1 flex flex-col items-center justify-center min-h-0 pb-10 sm:pb-14 lg:pb-[7.5rem] xl:pb-32">
          <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto px-1 sm:px-0">
            {/* Badge */}
            <div className="mb-5 sm:mb-7">
              <span className="block text-[10px] sm:text-[11px] font-heading font-bold text-evren-navy/50 tracking-[0.1em] sm:tracking-[0.25em] uppercase text-center">
                The universe is always expanding. So are we.
              </span>
            </div>

            {/* Headline — auto-scales to fit width; line 2 uses dark liquid gradient */}
            <h1 className="font-heading w-full overflow-visible flex flex-col gap-1 sm:gap-1.5">
              <HeroHeadlineLine
                maxSize={54}
                minSize={18}
                className="font-light text-evren-medium-gray/90 tracking-normal leading-[1.2]"
              >
                Where Ideas Become
              </HeroHeadlineLine>
              <HeroHeadlineLine
                maxSize={128}
                minSize={28}
                className="heading-liquid font-extrabold tracking-tight"
              >
                Intelligent Products.
              </HeroHeadlineLine>
            </h1>

            {/* Body copy */}
            <p
              className="mt-8 sm:mt-10 font-body text-evren-charcoal text-sm sm:text-base md:text-lg leading-relaxed text-balance max-w-[42ch] sm:max-w-[48ch]"
              style={{ lineHeight: 1.75 }}
            >
              We build AI-powered digital products that grow with your vision.
              From first spark to global scale, we are your partner in turning
              ideas into products the world actually needs.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <ArrowButton
                href="/connect"
                id="hero-cta-primary"
                ariaLabel="Book a free consultation with AI Advocate Holding"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
              >
                Book a Free Consultation
              </ArrowButton>

              <ArrowButton
                href="/approach"
                id="hero-cta-secondary"
                ariaLabel="See our approach"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
              >
                See Our Approach
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width centered watermark */}
      <div className="hero-watermark-band pointer-events-none">
        <HeroWatermark text="AI Advocate Holding" />
      </div>

      {/* Layer 3 — bottom section fade (above bg, below content) */}
      <div className="hero-bottom-fade pointer-events-none" />
    </section>
  );
}
