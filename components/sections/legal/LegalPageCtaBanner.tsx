"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Scale, Shield } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

const ICONS = {
  shield: Shield,
  scale: Scale,
} as const;

export type LegalPageCtaIcon = keyof typeof ICONS;

export interface LegalPageCtaBannerProps {
  iconName: LegalPageCtaIcon;
  eyebrow: string;
  headlineBefore: string;
  accentWord: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  email: string;
  watermark: string;
}

function WavyUnderline({ isInView }: { isInView: boolean }) {
  return (
    <svg
      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px] text-evren-peach pointer-events-none z-0"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.g
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-64 0"
          to="0 0"
          dur="3s"
          repeatCount="indefinite"
        />
        <path
          d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}

export default function LegalPageCtaBanner({
  iconName,
  eyebrow,
  headlineBefore,
  accentWord,
  description,
  primaryHref,
  primaryLabel,
  email,
  watermark,
}: LegalPageCtaBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = ICONS[iconName];

  return (
    <section className="bg-evren-warm-white py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          ref={ref}
          initial={{ scale: 0.94, opacity: 0, y: 40 }}
          animate={isInView ? { scale: 1, opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20, duration: 0.9 }}
          className="bg-evren-navy rounded-[32px] relative overflow-hidden shadow-warm-hover w-full"
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute -top-[30%] -right-[15%] w-[600px] h-[600px] rounded-full mesh-blob opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(136, 201, 179, 0.25) 0%, rgba(136, 201, 179, 0.06) 50%, transparent 75%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute -bottom-[40%] -left-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2 opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(78, 124, 110, 0.2) 0%, transparent 65%)",
                filter: "blur(50px)",
              }}
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[18%] md:translate-y-[15%] w-full text-center flex justify-center pointer-events-none z-0">
              <span className="font-heading font-extrabold text-[18vw] sm:text-[16vw] md:text-[15vw] lg:text-[16rem] xl:text-[19rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.1] to-transparent select-none whitespace-nowrap">
                {watermark}
              </span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 pb-14 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-5 self-start"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-evren-peach" strokeWidth={2.5} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-evren-peach/90 uppercase tracking-[0.2em] leading-tight mt-0.5">
                  {eyebrow}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading font-bold text-white tracking-tight text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.08]"
              >
                <span className="whitespace-nowrap">
                  {headlineBefore}{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">{accentWord}</span>
                    <WavyUnderline isInView={isInView} />
                  </span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-sm md:text-base text-white/50 font-body max-w-lg mt-4 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center p-5 sm:p-6 md:p-8 lg:p-10 lg:border-l border-white/[0.06] w-full max-w-full overflow-hidden">
              <div className="w-full max-w-[340px] sm:max-w-sm space-y-3 sm:space-y-4 mx-auto lg:mx-0">
                <ArrowButton
                  href={primaryHref}
                  variant="primary"
                  size="lg"
                  className="w-full justify-between text-[13px] sm:text-[15px] md:text-base pr-1"
                >
                  {primaryLabel}
                </ArrowButton>

                <motion.a
                  href={`mailto:${email}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-2 sm:gap-4 w-full border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 font-heading font-semibold text-[13px] sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer transition-all duration-300"
                >
                  <span className="flex items-center gap-2 sm:gap-3 truncate pr-2">
                    <Mail size={16} className="text-evren-peach/70 shrink-0" />
                    <span className="truncate">{email}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/40 group-hover:text-white/70 transition-colors shrink-0"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
