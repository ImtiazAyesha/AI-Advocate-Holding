import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SaaSPlatformArticle from "./SaaSPlatformArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "How to Build a Scalable SaaS Platform with React and Node.js",
  description: "Architecture, stack decisions, and lessons for building a production-ready SaaS platform using React, Node.js, and PostgreSQL that scales with your growth.",
  keywords: ["SaaS platform", "build SaaS", "React", "Node.js", "SaaS architecture", "scalable web app", "SaaS development"],
  openGraph: {
    title: "How to Build a Scalable SaaS Platform with React and Node.js",
    description: "Architecture and lessons for building a production-ready SaaS platform.",
    url: "https://www.aiadvocateholding.com/thinking/scalable-saas-platform-guide",
    type: "article",
    images: [{ url: "/blog-images/scalable-saas-platform-guide/hero.svg", width: 1200, height: 628 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aiadvocateholding.com/thinking/scalable-saas-platform-guide" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Build a Scalable SaaS Platform with React and Node.js",
  description: "Architecture, stack decisions, and lessons for building a production-ready SaaS platform.",
  datePublished: "2026-06-05",
  author: { "@type": "Organization", name: "AI Advocate Team" },
  publisher: { "@type": "Organization", name: "AI Advocate Holding", url: "https://www.aiadvocateholding.com" },
};

export default async function SaaSPlatformPage() {
  const article = (await getPostBySlug("scalable-saas-platform-guide")) ?? {
    title: "How to Build a Scalable SaaS Platform with React and Node.js",
    publishedAt: "2026-06-05T00:00:00.000Z",
    author: { name: "AI Advocate Team" },
    categories: [{ title: "SaaS Development" }],
    mainImage: { asset: { url: "/blog-images/scalable-saas-platform-guide/hero.svg" }, alt: "Scalable SaaS platform architecture diagram" },
  };
  const relatedArticles = await getRelatedPosts("scalable-saas-platform-guide", article.categories?.[0]?.title);
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script id="blog-schema-saas" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <SaaSPlatformArticle article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
