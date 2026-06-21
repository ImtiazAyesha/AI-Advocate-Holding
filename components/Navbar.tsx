"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";
import { MotionLink } from "@/components/ui/MotionLink";

// ═══════════════════════════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
];

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.07,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

// ═══════════════════════════════════════════════════════════════════════
//  NAVBAR COMPONENT — Glassmorphic floating pill
// ═══════════════════════════════════════════════════════════════════════

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Centered floating pill navbar (matches site content width) ── */}
      <header
        id="global-navbar"
        className="fixed top-0 inset-x-0 z-50 site-container pt-4 sm:pt-5 pointer-events-none"
      >
        <div
          className={`navbar-glass pointer-events-auto flex w-full items-center justify-between rounded-full px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 transition-all duration-500 ${
            scrolled ? "navbar-glass-scrolled" : ""
          }`}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            id="navbar-logo"
            aria-label="AI Advocate Holding"
            className="relative z-50 group flex items-center gap-2.5 md:gap-3 shrink-0 transition-opacity duration-200 hover:opacity-80"
          >
            <span className="relative block h-9 w-9 sm:h-10 sm:w-10 shrink-0">
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-contain object-left"
                sizes="40px"
                priority
              />
            </span>
            <span
              className="hidden md:inline font-heading text-2xl font-bold tracking-tight text-evren-navy"
              aria-hidden="true"
            >
              AI Advocate Holding
            </span>
          </Link>

          {/* ── Desktop Navigation & CTA (Right) ── */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <nav id="desktop-nav" className="flex items-center">
              {/* Nav links pill — subtle inner container */}
              <div className="flex items-center gap-1 bg-evren-warm-gray/40 rounded-full px-1.5 py-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      id={`nav-link-${link.label.toLowerCase()}`}
                      className={`relative font-body text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full
                                   ${isActive 
                                     ? "bg-white text-evren-navy font-bold shadow-sm" 
                                     : "text-evren-charcoal hover:text-evren-navy hover:bg-evren-peach-light"
                                   }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <ArrowButton
              href="/connect"
              id="navbar-cta"
              variant="primary"
              size="sm"
            >
              Let&apos;s Talk
            </ArrowButton>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden relative z-50 p-2 text-evren-navy transition-colors 
                         hover:text-evren-navy-light rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-evren-warm-white/95 backdrop-blur-xl flex flex-col"
          >
            {/* Content — top & center aligned links */}
            <div className="flex-1 flex flex-col items-center justify-start px-8 pt-[120px] w-full max-w-sm mx-auto">
              <nav className="flex flex-col items-center w-full">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
                  return (
                    <MotionLink
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      custom={idx}
                      variants={mobileLinkVariants}
                      initial="hidden"
                      animate="visible"
                      className={`font-heading text-3xl tracking-tight py-5 w-full text-center border-b border-evren-light-gray/40 transition-colors duration-200 block
                                 ${isActive
                                   ? "font-extrabold text-evren-peach"
                                   : "font-bold text-evren-navy hover:text-evren-peach"}`}
                    >
                      {link.label}
                    </MotionLink>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-12 w-full">
                <ArrowButton
                  href="/connect"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between"
                >
                  Let&apos;s Talk
                </ArrowButton>
              </div>
            </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-evren-warm-gray to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
