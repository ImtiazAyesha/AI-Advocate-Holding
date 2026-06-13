"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import {
  WORK_CASE_STUDIES,
  WORK_CASE_STUDIES_PER_PAGE,
  type CaseStudyCard,
} from "@/lib/case-studies-data";

const CARDS_PER_PAGE = WORK_CASE_STUDIES_PER_PAGE;

// ═══════════════════════════════════════════════════════════════════════
//  FEATURED CARD
// ═══════════════════════════════════════════════════════════════════════

function FeaturedCaseStudy({ study }: { study: CaseStudyCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full"
    >
      <Link
        href={study.href}
        className="group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 bg-evren-navy rounded-3xl border border-dashed border-white/15 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-evren-navy/20"
      >
        <motion.div
          className="flex flex-col justify-between flex-1 min-w-0 gap-6"
          whileHover={{ x: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <div>
            <span className="inline-block text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-evren-peach border border-evren-peach/40 rounded-full px-3 py-1 mb-4">
              Featured
            </span>
            <h2 className="font-heading font-bold text-lg sm:text-xl lg:text-[1.35rem] text-white leading-snug mb-3 line-clamp-3">
              {study.client}
            </h2>
            <p className="font-body text-sm text-white/55 leading-relaxed line-clamp-2">
              {study.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 w-fit bg-evren-peach text-evren-navy text-sm font-heading font-bold px-5 py-2.5 rounded-full transition-colors duration-300 group-hover:bg-white">
            Read
            <ChevronRight size={16} strokeWidth={2.5} />
          </span>
        </motion.div>

        <motion.div
          className="relative flex-shrink-0 w-full max-w-[280px] sm:w-[180px] lg:w-[200px] aspect-[4/5] rounded-2xl overflow-hidden mx-auto sm:mx-0"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <Image
            src={study.image}
            alt={`${study.tags[0]} case study`}
            fill
            sizes="200px"
            className="object-cover"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  GRID CARD
// ═══════════════════════════════════════════════════════════════════════

function CaseStudyCardComponent({
  study,
  index,
}: {
  study: CaseStudyCard;
  index: number;
}) {
  const primaryTag = study.tags[0] ?? "Case Study";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="flex"
    >
      <Link
        href={study.href}
        className="relative flex flex-col bg-white rounded-2xl border border-evren-light-gray/60 overflow-hidden w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      >
        <motion.div
          className="relative h-[220px] sm:h-[240px] w-full bg-[#F2F2F2] overflow-hidden flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <Image
            src={study.image}
            alt={`${primaryTag} case study preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-evren-navy/90 to-evren-peach/90 flex flex-col items-center justify-center text-center p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <span className="text-4xl sm:text-5xl font-heading font-bold text-white mb-1">
              {study.metric}
            </span>
            <span className="text-sm font-body text-white/90">{study.metricLabel}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="p-6 flex flex-col flex-1"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="text-xs font-bold tracking-wider text-evren-peach uppercase font-body">
              {primaryTag}
            </span>
            <span className="text-xs text-evren-medium-gray font-body font-medium">
              {study.metric} {study.metricLabel}
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg sm:text-xl text-evren-charcoal leading-snug mb-3 group-hover:text-evren-navy transition-colors duration-300">
            {study.client}
          </h3>

          <p className="font-body text-sm text-evren-medium-gray leading-relaxed line-clamp-2">
            {study.description}
          </p>
        </motion.div>
      </Link>
    </motion.article>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PAGINATION
// ═══════════════════════════════════════════════════════════════════════

function CaseStudiesPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-12 lg:mt-14"
      aria-label="Case studies pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-evren-light-gray text-evren-charcoal disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white hover:border-evren-navy/20 hover:shadow-sm transition-all duration-200"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>

      <motion.div layout className="flex items-center gap-1 mx-1 sm:mx-2">
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1;
          const isActive = currentPage === pageNumber;
          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              aria-label={`Page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
              className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-evren-navy text-white shadow-md shadow-evren-navy/25"
                  : "text-evren-charcoal hover:bg-white border border-transparent hover:border-evren-light-gray"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </motion.div>

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-evren-light-gray text-evren-charcoal disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white hover:border-evren-navy/20 hover:shadow-sm transition-all duration-200"
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN SECTION
// ═══════════════════════════════════════════════════════════════════════

const PAGE_DESCRIPTION =
  "Explore the portfolio of AI-powered enterprise products built by AI Advocate Holding. From healthcare intelligence to fintech compliance engines see the ROI we deliver.";

export default function WorkCaseStudies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredStudy = WORK_CASE_STUDIES[0];

  const filteredStudies = useMemo(() => {
    const gridStudies = WORK_CASE_STUDIES.slice(1);
    const query = searchQuery.trim().toLowerCase();
    if (!query) return gridStudies;

    return gridStudies.filter((study) => {
      const haystack = [
        study.client,
        study.description,
        study.metric,
        study.metricLabel,
        ...study.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudies.length / CARDS_PER_PAGE)
  );

  const paginatedStudies = useMemo(() => {
    const start = (currentPage - 1) * CARDS_PER_PAGE;
    return filteredStudies.slice(start, start + CARDS_PER_PAGE);
  }, [filteredStudies, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById("work-case-studies-grid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="work-case-studies"
      className="relative w-full bg-evren-warm-white overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24"
    >
      <motion.div
        className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ── Header: title + featured ─── */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-evren-medium-gray font-body hover:text-evren-navy transition-colors duration-200 mb-6"
            >
              <ArrowLeft size={14} strokeWidth={2} />
              Home
            </Link> */}

            <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-3 block">
              Our Case Studies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-evren-navy font-heading font-bold leading-[1.1] mb-5">
              Real Products.
              <br />
              Measurable Impact.
            </h1>
            <p className="font-body text-evren-charcoal text-base md:text-lg leading-relaxed max-w-lg">
              {PAGE_DESCRIPTION}
            </p>
          </motion.div>

          <FeaturedCaseStudy study={featuredStudy} />
        </motion.div>

        {/* ── Search ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-10 lg:mb-12"
        >
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-evren-medium-gray pointer-events-none"
            strokeWidth={2}
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search case studies..."
            className="w-full pl-12 pr-5 py-3.5 sm:py-4 rounded-full bg-[#EBEBEB] border border-transparent text-evren-charcoal font-body text-sm sm:text-base placeholder:text-evren-medium-gray/70 focus:outline-none focus:ring-2 focus:ring-evren-peach/40 focus:bg-white transition-all duration-200"
            aria-label="Search case studies"
          />
        </motion.div>

        {/* ── Case study grid ─── */}
        <motion.div
          id="work-case-studies-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <AnimatePresence mode="wait">
            {filteredStudies.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-white rounded-3xl border border-dashed border-evren-light-gray"
              >
                <p className="text-evren-medium-gray font-body md:text-lg">
                  No case studies match your search. Try a different keyword.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`page-${currentPage}-${searchQuery}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginatedStudies.map((study, i) => (
                  <CaseStudyCardComponent
                    key={`${study.href}-${currentPage}`}
                    study={study}
                    index={i}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <CaseStudiesPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
