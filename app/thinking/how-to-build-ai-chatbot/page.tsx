import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbotArticle from "./AIChatbotArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "How to Build an AI Chatbot for Your Business: A Practical Guide",
  description: "Step-by-step guide to building an AI chatbot using OpenAI or Claude API, React, and Node.js. Covers types, architecture, testing, and deployment.",
  keywords: ["AI chatbot", "build chatbot", "OpenAI chatbot", "Claude chatbot", "customer support bot", "chatbot development"],
  openGraph: {
    title: "How to Build an AI Chatbot for Your Business",
    description: "Step-by-step guide to building an AI chatbot using OpenAI or Claude API.",
    url: "https://www.aiadvocateholding.com/thinking/how-to-build-ai-chatbot",
    type: "article",
    images: [{ url: "/blog-images/how-to-build-ai-chatbot/hero.svg", width: 1200, height: 628 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aiadvocateholding.com/thinking/how-to-build-ai-chatbot" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Build an AI Chatbot for Your Business: A Practical Guide",
  description: "Step-by-step guide to building an AI chatbot using OpenAI or Claude API.",
  datePublished: "2026-06-15",
  author: { "@type": "Organization", name: "AI Advocate Team" },
  publisher: { "@type": "Organization", name: "AI Advocate", url: "https://www.aiadvocateholding.com" },
};

export default async function AIChatbotPage() {
  const article = (await getPostBySlug("how-to-build-ai-chatbot")) ?? {
    title: "How to Build an AI Chatbot for Your Business: A Practical Guide",
    publishedAt: "2026-06-15T00:00:00.000Z",
    author: { name: "AI Advocate Team" },
    categories: [{ title: "AI Development" }],
    mainImage: { asset: { url: "/blog-images/how-to-build-ai-chatbot/hero.svg" }, alt: "AI chatbot interface powered by GPT-4 and Claude" },
  };
  const relatedArticles = await getRelatedPosts("how-to-build-ai-chatbot", article.categories?.[0]?.title);
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script id="blog-schema-chatbot" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <AIChatbotArticle article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
