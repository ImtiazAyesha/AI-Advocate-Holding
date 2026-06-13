import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiProductDevLifecycleArticle from "./AiProductDevLifecycleArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

const IMAGE_BASE =
  "https://www.evrenai.com/blog-images/ai-in-product-development-lifecycle";

export const metadata: Metadata = {
  title: "AI in Product Development Lifecycle: 5 Phases That Matter",
  description:
    "AI changes every phase of product development. Learn how 5 lifecycle stages get smarter with AI, timelines, team setup, and LLM guidance.",
  keywords: [
    "AI in product development lifecycle",
    "AI product development process",
    "AI software development lifecycle",
    "LLM product development lifecycle",
    "AI in agile development",
    "machine learning product development",
  ],
  alternates: {
    canonical:
      "https://www.evrenai.com/thinking/ai-in-product-development-lifecycle",
  },
  openGraph: {
    title: "AI in Product Development Lifecycle: 5 Phases That Matter",
    description:
      "Learn how 5 lifecycle stages get smarter with AI.",
    url: "https://www.evrenai.com/thinking/ai-in-product-development-lifecycle",
    type: "article",
    images: [
      {
        url: `${IMAGE_BASE}/hero-usa.webp`,
        width: 1200,
        height: 628,
        alt: "5-phase AI product development lifecycle, AI Advocate Holding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Product Development Lifecycle: 5 Phases That Matter",
    description: "Learn how 5 lifecycle stages get smarter with AI.",
    images: [`${IMAGE_BASE}/hero-usa.webp`],
  },
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "AI in Product Development Lifecycle: 5 Phases That Matter",
  description:
    "AI changes every phase of product development. Learn how 5 lifecycle stages get smarter with AI, timelines, team setup, and LLM guidance.",
  image: `${IMAGE_BASE}/hero-usa.webp`,
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  author: {
    "@type": "Person",
    name: "Moazzam Ali",
    jobTitle: "CEO & Co-Founder",
    worksFor: { "@type": "Organization", name: "AI Advocate Holding" },
  },
  publisher: {
    "@type": "Organization",
    name: "AI Advocate Holding",
    url: "https://www.evrenai.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.evrenai.com/logo.png",
    },
  },
  mainEntityOfPage:
    "https://www.evrenai.com/thinking/ai-in-product-development-lifecycle",
  mainEntity: {
    "@type": "HowTo",
    name: "How AI Transforms Every Phase of Product Development",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Phase 1: Discovery and Planning",
        text: "AI accelerates user research synthesis and validates AI use case feasibility.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Phase 2: Design and Architecture",
        text: "Design UX and data models around AI outputs from day one.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Phase 3: Development and Testing",
        text: "Integrate AI evaluation frameworks alongside unit tests from sprint one.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Phase 4: Launch and Iteration",
        text: "Use AI to personalize onboarding and deflect Tier 1 support volume.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Phase 5: Scale and Optimization",
        text: "Transfer AI infrastructure ownership fully to your team within 90 days.",
      },
    ],
  },
  mentions: [
    { "@type": "Thing", name: "OpenAI GPT-4" },
    { "@type": "Thing", name: "Anthropic Claude" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "LangChain" },
    { "@type": "Thing", name: "AWS SageMaker" },
    { "@type": "Thing", name: "Scikit-learn" },
    { "@type": "Thing", name: "SDLC" },
    { "@type": "Thing", name: "LLM Product Development" },
    { "@type": "Thing", name: "HIPAA" },
    { "@type": "Thing", name: "SOC 2" },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does AI change the product development timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI-native products move from discovery to MVP in 10-16 weeks. Retrofitted AI adds 2-4 months of rework.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a data science team to embed AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at the start. Most MVPs use GPT-4 or Claude via API with minimal data science expertise.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most common mistake when adding AI to an existing product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retrofitting architecture. Teams add AI to a product designed for deterministic logic, requiring 2-4 months of rework.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use GPT-4 or Claude for product development lifecycle tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both are strong starting points. Claude excels at structured outputs and document analysis. GPT-4 is strong for code generation and multi-step reasoning.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure AI performance across the product lifecycle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Define AI success metrics in phase one. Use accuracy for classification, BLEU or ROUGE for generation, and business KPIs for product outcomes.",
        },
      },
    ],
  },
};

export default async function AiProductDevLifecyclePage() {
  const article =
    (await getPostBySlug("ai-in-product-development-lifecycle")) ?? {
      title: "AI in Product Development Lifecycle: 5 Phases That Matter",
      publishedAt: "2026-06-04T00:00:00.000Z",
      author: { name: "Moazzam Ali" },
      categories: [],
      mainImage: {
        asset: {
          url: "/blog-images/ai-in-product-development-lifecycle/hero-usa.webp",
        },
        alt: "5-phase AI product development lifecycle from discovery to scale, AI Advocate Holding",
      },
    };

  const relatedArticles = await getRelatedPosts(
    "ai-in-product-development-lifecycle",
    article.categories?.[0]?.title
  );

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script
          id="blog-schema-ai-product-dev-lifecycle"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <AiProductDevLifecycleArticle
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
