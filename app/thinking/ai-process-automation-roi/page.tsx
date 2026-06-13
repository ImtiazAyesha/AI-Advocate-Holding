import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiProcessAutomationRoiArticle from "./AiProcessAutomationRoiArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

const IMAGE_BASE =
  "https://www.evrenai.com/blog-images/ai-process-automation-roi";

export const metadata: Metadata = {
  title: "AI Process Automation ROI: The Numbers Your Business Is Missing",
  description:
    "Most businesses measure AI process automation ROI wrong. Discover the 6 metrics that reveal true returns and the 3-step framework to calculate yours.",
  keywords: [
    "AI process automation ROI",
    "AI automation ROI",
    "ROI of AI automation",
    "AI automation business case",
    "cost savings from AI automation",
    "measure AI ROI",
    "LLM process automation",
    "intelligent process automation metrics",
  ],
  alternates: {
    canonical:
      "https://www.evrenai.com/thinking/ai-process-automation-roi",
  },
  openGraph: {
    title: "AI Process Automation ROI: The Numbers Your Business Is Missing",
    description:
      "Most businesses measure AI process automation ROI wrong.",
    url: "https://www.evrenai.com/thinking/ai-process-automation-roi",
    type: "article",
    authors: ["https://www.evrenai.com"],
    images: [
      {
        url: `${IMAGE_BASE}/hero-usa.webp`,
        width: 1200,
        height: 628,
        alt: "AI process automation ROI framework showing 6 value metrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Process Automation ROI: The Numbers Your Business Is Missing",
    images: [`${IMAGE_BASE}/hero-usa.webp`],
  },
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "AI Process Automation ROI: The Numbers Your Business Is Missing",
  description:
    "Most businesses measure AI process automation ROI wrong. Discover the 6 metrics that reveal true returns and the 3-step framework to calculate yours.",
  image: `${IMAGE_BASE}/hero-usa.webp`,
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
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
    "https://www.evrenai.com/thinking/ai-process-automation-roi",
  mainEntity: {
    "@type": "HowTo",
    name: "How to Calculate AI Process Automation ROI: 3-Step Framework",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Step 1: Map Your Process Baseline",
        text: "Document current state: time per transaction, error rate, volume, headcount, compliance overhead.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Step 2: Identify All Six ROI Categories",
        text: "Map which of 6 categories apply and assign conservative dollar estimates for each.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Step 3: Build a 12-Month Model",
        text: "Include all costs: discovery, development, LLM API, integration, training, monitoring + 30-40% buffer.",
      },
    ],
  },
  mentions: [
    { "@type": "Thing", name: "AI Process Automation" },
    { "@type": "Thing", name: "Return on Investment" },
    { "@type": "Thing", name: "Anthropic Claude" },
    { "@type": "Thing", name: "OpenAI GPT-4" },
    { "@type": "Thing", name: "LangChain" },
    { "@type": "Thing", name: "FastAPI" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "AWS" },
    { "@type": "Thing", name: "HIPAA" },
    { "@type": "Thing", name: "SOC 2" },
    { "@type": "Thing", name: "LLM Workflow Automation" },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a realistic ROI for AI process automation in Year 1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "200-500% for focused workflows. 150-300% enterprise. Payback within 12-18 months.",
        },
      },
      {
        "@type": "Question",
        name: "How long does AI process automation take to implement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10-16 weeks discovery to production. HIPAA/SOC 2 adds 2-4 weeks. Skip discovery adds 3-5 months rework.",
        },
      },
      {
        "@type": "Question",
        name: "What processes are best for AI automation ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Document processing, invoice management, demand forecasting, compliance reporting, quality control.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between RPA and AI process automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RPA follows fixed rules on structured data. AI automation handles unstructured inputs via LLMs like Claude or GPT-4.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate error costs in my current process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiply daily error volume by cost per error (rework + customer impact + compliance penalties). Usually 2-3x higher than expected.",
        },
      },
    ],
  },
};

export default async function AiProcessAutomationRoiPage() {
  const article = (await getPostBySlug("ai-process-automation-roi")) ?? {
    title: "AI Process Automation ROI: The Numbers Your Business Is Missing",
    publishedAt: "2026-06-05T00:00:00.000Z",
    author: { name: "Moazzam Ali" },
    categories: [],
    mainImage: {
      asset: {
        url: "/blog-images/ai-process-automation-roi/hero-usa.webp",
      },
      alt: "AI process automation ROI framework showing 6 value metrics, AI Advocate Holding",
    },
  };

  const relatedArticles = await getRelatedPosts(
    "ai-process-automation-roi",
    article.categories?.[0]?.title
  );

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script
          id="blog-schema-ai-process-automation-roi"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <AiProcessAutomationRoiArticle
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
