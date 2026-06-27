"use client";

import { useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";

interface CtaWatermarkProps {
  text: string;
  className?: string;
}

export default function CtaWatermark({ text, className }: CtaWatermarkProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const el = textRef.current;
    if (!wrap || !el) return;

    const fit = () => {
      el.style.fontSize = "";
      const maxWidth = wrap.clientWidth;
      if (!maxWidth) return;

      let size = parseFloat(getComputedStyle(el).fontSize) || 48;
      const minSize = 16;
      const maxSize = 600;

      el.style.whiteSpace = "nowrap";

      while (el.scrollWidth < maxWidth * 0.998 && size < maxSize) {
        size += 2;
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
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={cn(
        "relative z-0 w-full overflow-visible px-0 pt-6 sm:pt-8",
        "pb-3 sm:pb-4 md:pb-5 pointer-events-none",
        className
      )}
    >
      <span
        ref={textRef}
        className={cn(
          "block font-heading font-extrabold leading-[0.88] tracking-tighter text-center mx-auto",
          "text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] to-white/[0.03]",
          "select-none whitespace-nowrap"
        )}
        style={{ width: "max-content", maxWidth: "100%" }}
      >
        {text}
      </span>
    </div>
  );
}
