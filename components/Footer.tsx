"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Zap } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";
import CtaWatermark from "@/components/ui/CtaWatermark";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { SOCIAL_LINKS } from "@/lib/social-links";

// ═══════════════════════════════════════════════════════════════════════
//  FOOTER — Unique CTA Banner + Editorial Footer
// ═══════════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  // { label: "Business Transformation", href: "/business-transformation" },
];

const OFFICES = [
  { city: "18250 Marsh LN, Dallas, TX 75286" },
];

const SOCIALS = SOCIAL_LINKS;

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  
  const pathname = usePathname();
  const isArticlePage = pathname?.startsWith('/thinking/') && pathname !== '/thinking';
  const isAboutPage = pathname === '/about';

  return (
    <footer>
      {/* ─── Part A: Immersive Asymmetric CTA ─── */}
      {!hideCTA && (
        <div
          className={`relative z-10 mb-20 sm:mb-28 ${
            isAboutPage ? "pt-10 sm:pt-12 lg:pt-16" : ""
          }`}
        >
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20, duration: 0.9 }}
          className="w-full bg-evren-navy relative overflow-hidden"
        >
          {/* ── Decorative Background Elements ── */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Organic gradient mesh */}
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


          </div>

          {/* ── CTA Content — Asymmetric Split ── */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left column — Editorial headline */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              {/* Pre-headline badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-3.5 mb-8 self-start"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300">
                  <Zap size={16} className="text-evren-peach" strokeWidth={2.5} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-evren-peach/90 uppercase tracking-[0.2em] leading-tight mt-0.5">
                  {isArticlePage ? "FROM PROTOTYPE TO PRODUCTION" : "AI Development · Automation · SaaS · QA"}
                </span>
              </motion.div>

              {/* Main headline — editorial staggered */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading font-bold text-white tracking-tight"
              >
                {!isArticlePage && (
                  <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08]">
                    Ready to Build Your
                  </span>
                )}
                <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mt-1">
                  {isArticlePage ? "Building" : ""}{" "}
                  <span className="relative inline-block">
                    <span className="heading-highlight">{isArticlePage ? "something?" : "AI Product?"}</span>
                  </span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base md:text-lg text-white/50 font-body max-w-lg mt-6 leading-relaxed"
              >
                {isArticlePage
                  ? "We would love to hear about it. Let's discuss how AI Advocate Holding can accelerate your journey from prototype to production."
                  : "From AI development and workflow automation to SaaS platforms and QA we help you ship production-ready software that works from day one. Send us a message to discuss your project."}
              </motion.p>
            </div>

            {/* Right column — Action zone */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center p-5 sm:p-10 md:p-14 lg:p-16 lg:border-l border-white/[0.06] w-full max-w-full overflow-hidden">
              {/* Primary CTA — large, unmissable */}
              <div className="w-full max-w-[340px] sm:max-w-sm space-y-4 sm:space-y-5 mx-auto lg:mx-0">
                <ArrowButton
                  href="/connect"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between text-[13px] sm:text-[15px] md:text-base pr-1"
                >
                  <span className="hidden sm:inline">Book a Free Consultation</span>
                  <span className="inline sm:hidden">Book Consultation</span>
                </ArrowButton>

                {/* Secondary CTA */}
                <motion.a
                  href="mailto:hello@aiadvocateholding.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-2 sm:gap-4 w-full border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 font-heading font-semibold text-[13px] sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer transition-all duration-300"
                >
                  <span className="flex items-center gap-2 sm:gap-3 truncate pr-2">
                    <Mail size={16} className="text-evren-peach/70 shrink-0" />
                    <span className="truncate">hello@aiadvocateholding.com</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/40 group-hover:text-white/70 transition-colors shrink-0"
                  />
                </motion.a>
              </div>
            </div>
          </div>
          </div>

          <CtaWatermark text="AI Advocate Holding" />
        </motion.div>
        </div>
      )}

      {/* ─── Part B: Main Footer ─── */}
      <div className="bg-evren-warm-white border-t border-evren-navy/10 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="hero-glass-container px-10 pt-12 pb-8 md:px-14 md:pt-16 md:pb-10 lg:px-16 lg:pt-20 lg:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 mb-10 md:mb-12">
            {/* Col 1 — Brand */}
            <div className="md:col-span-2">
              <Link
                href="/"
                aria-label="AI Advocate Holding"
                className="flex items-center gap-3 md:gap-3.5 mb-3 transition-opacity duration-200 hover:opacity-80 w-fit"
              >
                <span className="relative block h-10 w-10 sm:h-11 sm:w-11 shrink-0">
                  <Image
                    src="/logo.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="44px"
                  />
                </span>
                <span
                  className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-evren-navy tracking-tight"
                  aria-hidden="true"
                >
                  AI Advocate Holding
                </span>
              </Link>
              <p className="text-evren-medium-gray font-body text-sm max-w-xs leading-relaxed">
                AI development, automation, and SaaS built production-ready with expert QA.
              </p>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h4 className="font-heading font-bold text-evren-navy mb-5 text-sm uppercase tracking-wider">
                Studio
              </h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-evren-charcoal/70 hover:text-evren-peach transition-colors text-sm font-body group flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3 — Location */}
            <div className="md:-ml-6">
              <h4 className="font-heading font-bold text-evren-navy mb-5 text-sm uppercase tracking-wider">
                Location
              </h4>
              <div className="flex flex-col gap-4">
                {OFFICES.map((office) => (
                  <span key={office.city} className="text-sm text-evren-charcoal font-body leading-snug">
                    {office.city}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 4 — Stay in the loop + Socials */}
            <div>
              <h4 className="font-heading font-bold text-evren-navy mb-5 text-sm uppercase tracking-wider">
                Stay in the loop
              </h4>
              <p className="text-sm text-evren-medium-gray font-body mb-4 leading-relaxed">
                Get insights on AI strategy and product innovation.
              </p>
              <a
                href="mailto:hello@aiadvocateholding.com"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-evren-navy hover:text-evren-peach transition-colors"
              >
                <Mail size={14} />
                hello@aiadvocateholding.com
              </a>

            </div>
          </div>

          {/* ─── Bottom Bar: Copyright + Socials ─── */}
          <div className="h-px bg-evren-medium-gray/15 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-evren-medium-gray/70 font-body">
              &copy; 2026 AI Advocate Holding. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex transition-opacity duration-200 opacity-50 hover:opacity-100"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-[20px] w-[20px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
