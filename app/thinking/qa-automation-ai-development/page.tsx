import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QAAutomationArticle from "./QAAutomationArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "QA Automation in AI Product Development: Why It Matters",
  description: "Why QA automation is non-negotiable in AI product development. Covers Selenium, Cypress, API testing, and building a QA strategy that ships bug-free.",
  keywords: ["QA automation", "software testing", "Selenium", "Cypress", "API testing", "AI testing", "regression testing"],
  openGraph: {
    title: "QA Automation in AI Product Development: Why It Matters",
    description: "Why QA automation is non-negotiable in AI product development.",
    url: "https://www.aiadvocateholding.com/thinking/qa-automation-ai-development",
    type: "article",
    images: [{ url: "/blog-images/qa-automation-ai-development/hero.svg", width: 1200, height: 628 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aiadvocateholding.com/thinking/qa-automation-ai-development" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "QA Automation in AI Product Development: Why It Matters",
  description: "Why QA automation is non-negotiable in AI product development.",
  datePublished: "2026-06-10",
  author: { "@type": "Organization", name: "AI Advocate Team" },
  publisher: { "@type": "Organization", name: "AI Advocate Holding", url: "https://www.aiadvocateholding.com" },
};

export default async function QAAutomationPage() {
  const article = (await getPostBySlug("qa-automation-ai-development")) ?? {
    title: "QA Automation in AI Product Development: Why It Matters",
    publishedAt: "2026-06-10T00:00:00.000Z",
    author: { name: "AI Advocate Team" },
    categories: [{ title: "QA and Testing" }],
    mainImage: { asset: { url: "/blog-images/qa-automation-ai-development/hero.svg" }, alt: "QA automation test results panel" },
  };
  const relatedArticles = await getRelatedPosts("qa-automation-ai-development", article.categories?.[0]?.title);
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script id="blog-schema-qa" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <QAAutomationArticle article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
