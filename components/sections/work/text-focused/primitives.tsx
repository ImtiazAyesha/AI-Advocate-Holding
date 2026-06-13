"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

export function MeshBackground() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="absolute -top-[10%] -left-[8%] w-[600px] h-[600px] rounded-full mesh-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(136, 201, 179, 0.28) 0%, rgba(136, 201, 179, 0.08) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[5%] -right-[5%] w-[500px] h-[500px] rounded-full mesh-blob-2"
        style={{
          background:
            "radial-gradient(circle, rgba(26, 36, 33, 0.07) 0%, transparent 65%)",
          filter: "blur(35px)",
        }}
        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </motion.div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
      {children}
    </span>
  );
}

export function AccentTitle({
  children,
  accent,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  accent: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={className}>
      {children}{" "}
      <span className="text-evren-peach">{accent}</span>
    </Tag>
  );
}

export function HeroAccentTitle({
  headline,
  accentWord,
}: {
  headline: string;
  accentWord: string;
}) {
  const parts = headline.split(accentWord);
  if (parts.length < 2) {
    return (
      <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-evren-navy leading-[1.12] tracking-tight">
        {headline}
      </h1>
    );
  }
  return (
    <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-evren-navy leading-[1.12] tracking-tight">
      {parts[0]}
      <span className="text-evren-peach">{accentWord}</span>
      {parts.slice(1).join(accentWord)}
    </h1>
  );
}

export function NumberedPointCard({
  index,
  heading,
  description,
  variant = "light",
}: {
  index: number;
  heading: string;
  description: string;
  variant?: "light" | "elevated";
}) {
  const num = String(index + 1).padStart(2, "0");
  const cardClass =
    variant === "elevated"
      ? "bg-white rounded-studio p-8 sm:p-9 shadow-warm border border-evren-light-gray/50 hover:shadow-warm-hover transition-shadow duration-[600ms]"
      : "bg-evren-warm-white rounded-studio p-8 sm:p-9 border border-evren-light-gray/40";

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className={cardClass}
    >
      <motion.div
        className="flex items-start gap-5"
        initial="rest"
        whileHover="hover"
      >
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.06 },
          }}
          className="flex-shrink-0 w-11 h-11 rounded-full bg-evren-peach-light flex items-center justify-center"
        >
          <span className="font-heading font-bold text-sm text-evren-navy">{num}</span>
        </motion.div>
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className="font-heading font-bold text-xl text-evren-navy leading-snug mb-3">
            {heading}
          </h3>
          <p className="font-body text-base text-evren-medium-gray leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
  innerClassName = "max-w-7xl mx-auto px-6 lg:px-8",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={className}>
      <motion.div className={innerClassName}>{children}</motion.div>
    </section>
  );
}
