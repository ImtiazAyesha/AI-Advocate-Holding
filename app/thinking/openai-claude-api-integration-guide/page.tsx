import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OpenAIClaudeArticle from "./OpenAIClaudeArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "How to Integrate OpenAI and Claude API into Your Product",
  description: "A practical guide to integrating OpenAI and Claude API into your SaaS or web app, with patterns, code structure, and production tips.",
  keywords: ["OpenAI API", "Claude API", "Anthropic", "AI integration", "SaaS AI", "GPT-4", "API integration"],
  openGraph: {
    title: "How to Integrate OpenAI and Claude API into Your Product",
    description: "A practical guide to integrating OpenAI and Claude API into your product.",
    url: "https://www.aiadvocateholding.com/thinking/openai-claude-api-integration-guide",
    type: "article",
    images: [{ url: "/blog-images/openai-claude-api-integration-guide/hero.svg", width: 1200, height: 628 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aiadvocateholding.com/thinking/openai-claude-api-integration-guide" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Integrate OpenAI and Claude API into Your Product",
  description: "A practical guide to integrating OpenAI and Claude API into your SaaS or web app.",
  datePublished: "2026-06-20",
  author: { "@type": "Organization", name: "AI Advocate Team" },
  publisher: { "@type": "Organization", name: "AI Advocate", url: "https://www.aiadvocateholding.com" },
};

export default async function OpenAIClaudePage() {
  const article = (await getPostBySlug("openai-claude-api-integration-guide")) ?? {
    title: "How to Integrate OpenAI and Claude API into Your Product",
    publishedAt: "2026-06-20T00:00:00.000Z",
    author: { name: "AI Advocate Team" },
    categories: [{ title: "AI Development" }],
    mainImage: { asset: { url: "/blog-images/openai-claude-api-integration-guide/hero.svg" }, alt: "OpenAI and Claude API integration guide" },
  };
  const relatedArticles = await getRelatedPosts("openai-claude-api-integration-guide", article.categories?.[0]?.title);
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script id="blog-schema-api" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <OpenAIClaudeArticle article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
