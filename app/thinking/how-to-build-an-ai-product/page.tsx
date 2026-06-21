import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowToBuildAiProductArticle from "./HowToBuildAiProductArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "How to Build an AI Product: 5 Steps That Actually Work",
  description:
    "Building an AI product takes more than picking a model. Learn the 5-step process for real ROI, with timelines and LLM guidance.",
  keywords: [
    "how to build an AI product",
    "AI product development",
    "LLM product development",
    "build with Claude",
    "AI product roadmap",
    "AI software development",
  ],
  alternates: {
    canonical:
      "https://www.evrenai.com/thinking/how-to-build-an-ai-product",
  },
  openGraph: {
    title: "How to Build an AI Product: 5 Steps That Actually Work",
    description:
      "Learn the 5-step process that successful product teams use.",
    url: "https://www.evrenai.com/thinking/how-to-build-an-ai-product",
    type: "article",
    images: [
      {
        url: "https://www.evrenai.com/blog-images/how-to-build-an-ai-product/hero-usa.webp",
        width: 1200,
        height: 628,
        alt: "5-step framework for building an AI product, AI Advocate Holding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build an AI Product: 5 Steps That Actually Work",
    description: "Learn the 5-step process for real ROI.",
    images: [
      "https://www.evrenai.com/blog-images/how-to-build-an-ai-product/hero-usa.webp",
    ],
  },
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Build an AI Product: 5 Steps That Actually Work",
  description:
    "Building an AI product takes more than picking a model.",
  image:
    "https://www.evrenai.com/blog-images/how-to-build-an-ai-product/hero-usa.webp",
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  author: {
    "@type": "Person",
    name: "Saqib",
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
    "https://www.evrenai.com/thinking/how-to-build-an-ai-product",
  mainEntity: {
    "@type": "HowTo",
    name: "How to Build an AI Product",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Define the Problem With Precision",
        text: "What exact decision will AI improve, measured as a number?",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Audit Your Data Before You Build",
        text: "2-week data audit in discovery: quality, gaps, compliance.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Choose AI Architecture Based on the Problem",
        text: "Text: LLM via API. Structured data: classical ML with Python.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Build With AI Native From Sprint One",
        text: "AI shapes data model, UX, API, and backend from sprint one.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Scale With Your Team's Ownership in Mind",
        text: "Knowledge transfer and runbooks. Goal: team independence in 90 days.",
      },
    ],
  },
  mentions: [
    { "@type": "Thing", name: "OpenAI GPT-4" },
    { "@type": "Thing", name: "Anthropic Claude" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "AWS SageMaker" },
    { "@type": "Thing", name: "Scikit-learn" },
    { "@type": "Thing", name: "LLM Product Development" },
    { "@type": "Thing", name: "Machine Learning" },
    { "@type": "Thing", name: "HIPAA" },
    { "@type": "Thing", name: "SOC 2" },
    { "@type": "Thing", name: "LangChain" },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to build an AI product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10-16 weeks from discovery to MVP when validated upfront.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to build an AI product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$50K for a focused MVP to $200K+ for enterprise platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a large dataset to build an AI product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. LLM API requires minimal proprietary training data.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use GPT-4, Claude, or build a custom model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GPT-4 or Claude via API for most text use cases. Custom for specialized domains.",
        },
      },
      {
        "@type": "Question",
        name: "What is the most common reason AI products fail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skipping discovery. Gartner: 30% of AI POCs are abandoned.",
        },
      },
    ],
  },
};

export default async function HowToBuildAiProductPage() {
  const article = (await getPostBySlug("how-to-build-an-ai-product")) ?? {
    title: "How to Build an AI Product: 5 Steps That Actually Work",
    publishedAt: "2026-06-03T00:00:00.000Z",
    author: { name: "Saqib" },
    categories: [],
    mainImage: {
      asset: {
        url: "/blog-images/how-to-build-an-ai-product/hero-usa.webp",
      },
      alt: "5-step framework for building an AI product from discovery to scale, AI Advocate Holding",
    },
  };

  const relatedArticles = await getRelatedPosts(
    "how-to-build-an-ai-product",
    article.categories?.[0]?.title
  );

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script
          id="blog-schema-how-to-build-ai-product"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <HowToBuildAiProductArticle
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
