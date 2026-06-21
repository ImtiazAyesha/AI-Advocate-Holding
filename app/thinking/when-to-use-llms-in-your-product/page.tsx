import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhenToUseLlmsArticle from "./WhenToUseLlmsArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

const IMAGE_BASE =
  "https://www.evrenai.com/blog-images/when-to-use-llms-in-your-product";

export const metadata: Metadata = {
  title: "When to Use LLMs in Your Product: A Practical Decision Guide",
  description:
    "Not every product needs an LLM. Use this 4-question framework to decide when LLMs deliver ROI — and when they will cost you time and money.",
  keywords: [
    "when to use LLMs in your product",
    "LLM product development",
    "LLM integration services",
    "when to use generative AI in your product",
    "GPT-4 vs custom model",
    "LLM vs classical ML for business",
  ],
  alternates: {
    canonical:
      "https://www.evrenai.com/thinking/when-to-use-llms-in-your-product",
  },
  openGraph: {
    title: "When to Use LLMs in Your Product: A Practical Decision Guide",
    description:
      "Not every product needs an LLM. Use this 4-question framework to decide when LLMs deliver ROI.",
    url: "https://www.evrenai.com/thinking/when-to-use-llms-in-your-product",
    type: "article",
    images: [
      {
        url: `${IMAGE_BASE}/hero-usa.webp`,
        width: 1200,
        height: 628,
        alt: "Decision framework for when to use LLMs in your product, AI Advocate Holding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "When to Use LLMs in Your Product: A Practical Decision Guide",
    description:
      "Use this 4-question framework to decide when LLMs deliver ROI.",
    images: [`${IMAGE_BASE}/hero-usa.webp`],
  },
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "When to Use LLMs in Your Product: A Practical Decision Guide",
  description:
    "Not every product needs an LLM. Use this 4-question framework to decide when LLMs deliver ROI.",
  image: `${IMAGE_BASE}/hero-usa.webp`,
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
    "https://www.evrenai.com/thinking/when-to-use-llms-in-your-product",
  mainEntity: {
    "@type": "HowTo",
    name: "When to Use LLMs in Your Product",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Ask if the input is primarily text or unstructured content",
        text: "If yes, LLM architecture is likely correct. If no, evaluate classical ML first.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Ask if output needs to vary intelligently by context",
        text: "If the system must respond based on nuanced input, LLM is needed.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Assess whether edge-case cost is acceptable",
        text: "LLMs hallucinate. High-risk use cases require RAG and guardrails from sprint one.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Verify per-inference cost is sustainable at scale",
        text: "GPT-4 costs ~$0.03/1K tokens. Open-source models cost 60-80% less at scale.",
      },
    ],
  },
  mentions: [
    { "@type": "Thing", name: "OpenAI GPT-4" },
    { "@type": "Thing", name: "Anthropic Claude" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "AWS Lambda" },
    { "@type": "Thing", name: "Scikit-learn" },
    { "@type": "Thing", name: "Llama 3" },
    { "@type": "Thing", name: "Mistral" },
    { "@type": "Thing", name: "LangChain" },
    { "@type": "Thing", name: "Retrieval-Augmented Generation" },
    { "@type": "Thing", name: "HIPAA" },
    { "@type": "Thing", name: "SOC 2" },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the most common mistake when deciding to use an LLM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choosing the technology before defining the problem. A two-week discovery sprint prevents this almost entirely.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to integrate an LLM into a product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM integration typically adds $15K to $50K to development costs. Ongoing inference costs range from near-zero to $2K-$8K per month at scale using GPT-4.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need proprietary training data to use an LLM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not for most use cases. LLM API integration using GPT-4 or Claude requires minimal proprietary training data at launch.",
        },
      },
      {
        "@type": "Question",
        name: "How do I decide between GPT-4, Claude, and open-source models?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most production text use cases, start with GPT-4 or Claude via API. Open-source models make sense for on-premises compliance or inference cost constraints.",
        },
      },
      {
        "@type": "Question",
        name: "How will my team maintain an LLM-powered product after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your team can monitor API costs, manage prompt templates, and update retrieval pipelines, they can maintain most LLM integrations. Full team independence within 90 days is the goal.",
        },
      },
    ],
  },
};

export default async function WhenToUseLlmsPage() {
  const article = (await getPostBySlug("when-to-use-llms-in-your-product")) ?? {
    title: "When to Use LLMs in Your Product: A Practical Decision Guide",
    publishedAt: "2026-06-03T00:00:00.000Z",
    author: { name: "Saqib" },
    categories: [],
    mainImage: {
      asset: {
        url: "/blog-images/when-to-use-llms-in-your-product/hero-usa.webp",
      },
      alt: "Decision framework for when to use LLMs in your product — LLM vs classical ML, AI Advocate Holding",
    },
  };

  const relatedArticles = await getRelatedPosts(
    "when-to-use-llms-in-your-product",
    article.categories?.[0]?.title
  );

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script
          id="blog-schema-when-to-use-llms"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <WhenToUseLlmsArticle
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
