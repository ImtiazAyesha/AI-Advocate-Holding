import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MvpVsPocArticle from "./MvpVsPocArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "MVP vs POC: Why Every AI Product Needs Both",
  description:
    "MVP and POC serve different purposes. Learn why 70% of successful AI products run both, and the exact roadmap for validating your idea.",
  keywords: [
    "MVP",
    "POC",
    "AI product validation",
    "LLM proof of concept",
    "product development",
  ],
  openGraph: {
    title: "MVP vs POC: Why Every AI Product Needs Both",
    description:
      "MVP and POC serve different purposes. Learn why 70%...",
    url: "https://www.evrenai.com/thinking/mvp-vs-poc",
    type: "article",
    images: [
      {
        url: "https://www.evrenai.com/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-hero-usa.webp",
        width: 1200,
        height: 628,
        alt: "MVP vs POC comparison showing two validation phases for AI product development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP vs POC: Why Every AI Product Needs Both",
    images: [
      "https://www.evrenai.com/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-hero-usa.webp",
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.evrenai.com/thinking/mvp-vs-poc" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "MVP vs POC: Why Every AI Product Needs Both",
  description:
    "MVP and POC serve different purposes. Learn why 70% of successful AI products run both.",
  image:
    "https://www.evrenai.com/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-hero-usa.webp",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: {
    "@type": "Person",
    name: "Saqib",
    jobTitle: "CEO & Co-Founder",
    url: "https://www.evrenai.com",
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
  mainEntity: {
    "@type": "HowTo",
    name: "How to Choose Between MVP and POC for an AI Product",
    step: [
      {
        "@type": "HowToStep",
        name: "Identify Your Biggest Risk",
        text: "If risk is technical run a POC first. If risk is market-based run an MVP.",
      },
      {
        "@type": "HowToStep",
        name: "Run a POC When Technical Risk is High",
        text: "Spend 4-6 weeks ($10K-30K) proving one AI hypothesis with your actual data.",
      },
      {
        "@type": "HowToStep",
        name: "Run an MVP When Market Risk Dominates",
        text: "Skip POC when technical feasibility is proven. Build with real users.",
      },
      {
        "@type": "HowToStep",
        name: "Run Both Sequentially for High-Risk Products",
        text: "POC first (weeks 1-6), then MVP (months 2-8). Reduces rebuild rates by 60%.",
      },
    ],
  },
  mentions: [
    { "@type": "Thing", name: "Proof of Concept" },
    { "@type": "Thing", name: "Minimum Viable Product" },
    { "@type": "Thing", name: "OpenAI GPT-4" },
    { "@type": "Thing", name: "Anthropic Claude" },
    { "@type": "Thing", name: "LLM Product Development" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "FastAPI" },
    { "@type": "Thing", name: "AWS" },
    { "@type": "Thing", name: "AI Product Validation" },
    { "@type": "Thing", name: "Product Development" },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to build an MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most AI products move from discovery to working MVP in 10-16 weeks when validated upfront.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a POC cost for an AI product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A focused AI POC costs $10K-30K. An MVP costs $50K-200K+ depending on scope.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a large dataset to build an AI product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. LLM integration with GPT or Claude requires minimal proprietary data.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use GPT-4 or build a custom AI model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most text use cases GPT-4 or Claude via API is faster and cheaper.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most common reason AI products fail to deliver ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skipping validation. Gartner: 30% of generative AI POCs are abandoned after proof of concept.",
        },
      },
    ],
  },
};

export default async function MvpVsPocPage() {
  const article = (await getPostBySlug("mvp-vs-poc")) ?? {
    title: "MVP vs POC: Why Every AI Product Needs Both",
    publishedAt: "2026-04-14T00:00:00.000Z",
    author: { name: "Saqib" },
    categories: [],
    mainImage: {
      asset: {
        url: "/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-hero-usa.webp",
      },
      alt: "MVP vs POC comparison diagram showing two validation phases side by side with timelines for AI product development",
    },
  };

  const relatedArticles = await getRelatedPosts(
    "mvp-vs-poc",
    article.categories?.[0]?.title
  );

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script
          id="blog-schema-mvp-poc"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <MvpVsPocArticle
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
