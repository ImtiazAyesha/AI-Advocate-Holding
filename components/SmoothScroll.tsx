"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<{ destroy: () => void; raf: (time: number) => void } | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let cancelled = false;
    let tickerCallback: ((time: number) => void) | null = null;
    const delayMs = 2000;

    const startLenis = async () => {
      const [{ default: Lenis }, gsapModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
      ]);
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (cancelled) return;

      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();
      window.dispatchEvent(new Event("lenis-ready"));
    };

    const timeoutId = window.setTimeout(() => {
      void startLenis();
    }, delayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);

      if (tickerCallback) {
        void import("gsap").then(({ default: gsap }) => {
          gsap.ticker.remove(tickerCallback!);
        });
      }

      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
