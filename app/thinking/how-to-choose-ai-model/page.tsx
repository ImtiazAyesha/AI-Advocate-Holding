import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowToChooseAiModelArticle from "./HowToChooseAiModelArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

const IMAGE_BASE =
  "https://www.evrenai.com/blog-images/how-to-choose-ai-model";

export const metadata: Metadata = {
  title: "How to Choose the Right AI Model for Your Product",
  description:
    "Choosing the right AI model can make or break your product. Compare GPT-4, Claude, Llama 3, and custom models with this 5-question decision framework.",
  keywords: [
    "how to choose the right AI model",
    "GPT-4 vs Claude",
    "AI model comparison",
    "LLM model selection guide",
    "open-source LLM vs proprietary",
    "AI product development",
  ],
  alternates: {
    canonical: "https://www.evrenai.com/thinking/how-to-choose-ai-model",
  },
  openGraph: {
    title: "How to Choose the Right AI Model for Your Product",
    description:
      "Compare GPT-4, Claude, Llama 3 with a 5-question decision framework.",
    url: "https://www.evrenai.com/thinking/how-to-choose-ai-model",
    type: "article",
    images: [
      {
        url: `${IMAGE_BASE}/hero-usa.webp`,
        width: 1200,
        height: 628,
        alt: "AI model comparison framework showing GPT-4, Claude, Llama 3 and decision criteria, AI Advocate Holding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose the Right AI Model for Your Product",
    description: "Compare GPT-4, Claude, Llama 3 with a 5-question framework.",
    images: [`${IMAGE_BASE}/hero-usa.webp`],
  },
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose the Right AI Model for Your Product",
  description:
    "Choosing the right AI model can make or break your product. Compare GPT-4, Claude, Llama 3, and custom models with this 5-question decision framework.",
  image: `${IMAGE_BASE}/hero-usa.webp`,
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  author: {
    "@type": "Person",
    name: "Moazzam Ali",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.evrenai.com/thinking/how-to-choose-ai-model",
  },
  mainEntity: {
    "@type": "HowTo",
    name: "How to Choose the Right AI Model for Your Product",
    step: [
      {
        "@type": "HowToStep",
        name: "Understand the 4 model categories",
        text: "Every AI model falls into one of four categories: proprietary API (GPT-4, Claude), open-source (Llama 3, Mistral), fine-tuned proprietary, or custom-trained. Start with Category 1 for 90% of products.",
      },
      {
        "@type": "HowToStep",
        name: "Answer the 5-question decision framework",
        text: "Ask: What output type? Where does data live? What is cost ceiling at scale? How much accuracy is needed? Will you fine-tune later?",
      },
      {
        "@type": "HowToStep",
        name: "Select GPT-4, Claude, or Llama based on use case",
        text: "GPT-4: complex reasoning, code, multimodal. Claude: long documents, safety, EU AI Act. Llama 3: data cannot leave your infrastructure.",
      },
      {
        "@type": "HowToStep",
        name: "Evaluate re-architecture risk before committing",
        text: "Run a 3-hour cost-at-scale model evaluation before architecture. Teams that skip this are 3x more likely to re-architect in the first 6 months.",
      },
    ],
  },
  mentions: [
    { "@type": "Thing", name: "OpenAI GPT-4" },
    { "@type": "Thing", name: "Anthropic Claude" },
    { "@type": "Thing", name: "Llama 3" },
    { "@type": "Thing", name: "Mistral" },
    { "@type": "Thing", name: "Large Language Model" },
    { "@type": "Thing", name: "LLM Fine-tuning" },
    { "@type": "Thing", name: "Retrieval-Augmented Generation" },
    { "@type": "Thing", name: "HIPAA" },
    { "@type": "Thing", name: "GDPR" },
    { "@type": "Thing", name: "EU AI Act" },
    { "@type": "Thing", name: "AWS" },
    { "@type": "Thing", name: "Azure" },
    { "@type": "Thing", name: "Python" },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between GPT-4 and Anthropic Claude?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GPT-4 leads on code generation and tool use. Claude leads on long-context processing (200K tokens) and document analysis. Both cost ~$0.01 per 1K input tokens for flagship models.",
        },
      },
      {
        "@type": "Question",
        name: "When should I use an open-source LLM instead of GPT-4 or Claude?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use Llama 3 or Mistral when data cannot leave your infrastructure, API costs exceed $5K/month at scale, or your team can manage self-hosted model serving.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to switch AI models after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Re-architecting mid-production adds 6-14 weeks and $50K-$150K. A model cost evaluation before architecture costs 3 hours and prevents this entirely.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to fine-tune my AI model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most products do not need fine-tuning at launch. Fine-tuning makes sense for highly specialized domains, large labeled proprietary datasets, or when response consistency is critical.",
        },
      },
      {
        "@type": "Question",
        name: "What AI model is best for a startup with limited budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with Claude 3 Haiku or GPT-4o-mini. Both cost under $0.001 per 1K tokens and are accurate enough for most startup use cases.",
        },
      },
    ],
  },
};

export default async function HowToChooseAiModelPage() {
  const article = (await getPostBySlug("how-to-choose-ai-model")) ?? {
    title: "How to Choose the Right AI Model for Your Product",
    publishedAt: "2026-06-04T00:00:00.000Z",
    author: { name: "Moazzam Ali" },
    categories: [],
    mainImage: {
      asset: { url: "/blog-images/how-to-choose-ai-model/hero-usa.webp" },
      alt: "AI model comparison framework showing GPT-4, Claude, Llama 3 and decision criteria, AI Advocate Holding",
    },
  };

  const relatedArticles = await getRelatedPosts(
    "how-to-choose-ai-model",
    article.categories?.[0]?.title
  );

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script
          id="blog-schema-choose-ai-model"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <HowToChooseAiModelArticle
          article={article}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
