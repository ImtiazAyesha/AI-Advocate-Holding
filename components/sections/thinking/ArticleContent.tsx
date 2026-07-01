"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, type ReactNode } from "react";
import type { BlogPost, RelatedBlogPost } from "@/lib/blog/types";

export default function ArticleContent({
  article,
  relatedArticles,
  children,
  tableOfContents,
  readingTimeMinutes,
  heroImageSrc,
  heroImageAlt,
}: {
  article: {
    title: string;
    publishedAt?: string;
    author?: { name?: string };
    mainImage?: {
      asset?: { url?: string };
      alt?: string;
    };
  };
  relatedArticles: RelatedBlogPost[];
  children?: ReactNode;
  tableOfContents?: { text: string; id: string }[];
  readingTimeMinutes?: number;
  heroImageSrc?: string;
  heroImageAlt?: string;
}) {
  const [activeId, setActiveId] = useState<string>("");

  const pubDate = new Date(article.publishedAt || Date.now());
  const formattedDate = pubDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const heroUrl = article.mainImage?.asset?.url || heroImageSrc;
  const heroAlt = article.mainImage?.alt || heroImageAlt || article.title;
  const headings = tableOfContents ?? [];
  const computedReadingTime = readingTimeMinutes ?? 5;

  useEffect(() => {
    if (headings.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const firstVisibleEntry = visibleEntries.reduce((prev, current) => {
          return current.boundingClientRect.top < prev.boundingClientRect.top
            ? current
            : prev;
        });
        setActiveId(firstVisibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-10% 0px -75% 0px",
      threshold: 0,
    });

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#88C9B3] origin-left z-[100]"
        style={{ scaleX }}
      />

      <article className="pt-32 pb-16">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/thinking"
                className="inline-flex items-center gap-2 text-sm text-evren-medium-gray hover:text-evren-navy font-body transition-colors mb-8"
              >
                <ChevronLeft size={16} />
                Back
              </Link>

              <h1
                className="font-heading font-semibold text-evren-charcoal leading-[1.1] tracking-tight mb-8"
                style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
              >
                {article.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-evren-medium-gray font-body font-medium">
                <div className="flex items-center">
                  <span className="text-evren-medium-gray mr-1.5 text-[15px]">
                    By
                  </span>
                  <span className="text-evren-navy font-semibold text-[15px] whitespace-nowrap">
                    {article.author?.name || "AI Advocate Team"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-evren-medium-gray/80 whitespace-nowrap text-[15px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formattedDate}
                </div>

                <div className="w-[1px] h-3.5 bg-evren-medium-gray/30 mx-1" />

                <div className="flex items-center gap-1.5 text-evren-medium-gray/80 whitespace-nowrap text-[15px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{computedReadingTime} min read</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-3xl overflow-hidden bg-[#F2F2F2] border border-black/5"
            >
              {heroUrl && (
                <Image
                  src={heroUrl}
                  alt={heroAlt}
                  width={1200}
                  height={628}
                  className="w-full h-auto block"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 lg:gap-24 relative">
            <aside className="hidden lg:block relative">
              <div className="sticky top-32">
                <h4 className="text-xs font-bold tracking-widest text-[#88C9B3] uppercase mb-6 font-body">
                  ON THIS PAGE
                </h4>
                <div className="absolute left-[3px] top-10 bottom-0 w-[2px] bg-evren-light-gray/60 -z-10" />

                <ul className="space-y-1 font-body">
                  {headings.length > 0 ? (
                    headings.map((heading) => {
                      const isActive = activeId === heading.id;
                      return (
                        <li key={heading.id} className="relative">
                          {isActive && (
                            <motion.div
                              layoutId="active-indicator"
                              className="absolute left-0 top-2 bottom-2 w-1.5 rounded-full bg-evren-navy"
                            />
                          )}
                          <button
                            type="button"
                            className={`block w-full text-left py-2 pl-5 text-sm transition-all duration-300 ${
                              isActive
                                ? "text-evren-navy font-bold translate-x-1"
                                : "text-evren-medium-gray hover:text-evren-charcoal font-medium hover:translate-x-1"
                            }`}
                            onClick={() => {
                              document
                                .getElementById(heading.id)
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              setActiveId(heading.id);
                            }}
                          >
                            {heading.text}
                          </button>
                        </li>
                      );
                    })
                  ) : (
                    <li className="text-sm text-evren-medium-gray pl-4">
                      No sections listed.
                    </li>
                  )}
                </ul>
              </div>
            </aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-[800px]
                         [&_p]:font-body [&_p]:text-[17px] [&_p]:leading-[1.85] [&_p]:text-evren-charcoal/90 [&_p]:mb-8
                         [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-evren-charcoal [&_h2]:tracking-tight [&_h2]:text-3xl [&_h2]:mt-16 [&_h2]:mb-8
                         [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-evren-charcoal [&_h3]:text-xl [&_h3]:mt-10 [&_h3]:mb-4
                         [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_li]:text-[17px] [&_li]:text-evren-charcoal/90 [&_li]:leading-[1.8] [&_li]:mb-2
                         [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8
                         [&_a]:text-[#88C9B3] [&_a]:underline hover:[&_a]:text-[#6BA88E]
                         [&_strong]:text-evren-navy [&_strong]:font-bold"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section
          id="related-articles"
          className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 lg:gap-24">
            <div className="hidden lg:block" />
            <div>
              <h2 className="font-heading font-semibold text-evren-charcoal text-2xl tracking-tight mb-8">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((related) => {
                  const relatedDate = new Date(
                    related.publishedAt
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <Link
                      key={related.slug.current}
                      href={`/thinking/${related.slug.current}`}
                      className="group block p-6 bg-[#F2F2F2] rounded-3xl border border-black/5
                                 hover:border-black/10 transition-all duration-300"
                    >
                      <h3 className="font-heading font-semibold text-evren-charcoal text-lg leading-snug mb-3 group-hover:text-evren-navy transition-colors duration-300 line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium text-evren-medium-gray font-body">
                          {relatedDate}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
