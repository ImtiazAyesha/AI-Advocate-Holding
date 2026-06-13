import type { BlogPost } from "@/lib/blog/types";

/**
 * Code-first blog posts with dedicated routes under /app/thinking/{slug}/.
 */
export const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    _id: "post-build-vs-buy-ai-cto-decision-framework",
    title: "Build vs Buy AI: The 2026 CTO Decision Framework",
    slug: { current: "build-vs-buy-ai-cto-decision-framework" },
    excerpt:
      "Build or buy AI? Learn the 4 factors CTOs use in 2026, with real cost data and a decision framework built on 50+ AI product launches.",
    publishedAt: "2026-06-05T00:00:00.000Z",
    mainImage: {
      asset: {
        url: "/blog-images/build-vs-buy-ai-cto-decision-framework/hero-usa.webp",
      },
      alt: "Build vs buy AI decision framework for CTOs in 2026, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "AI Strategy", slug: { current: "ai-strategy" } },
    ],
  },
  {
    _id: "post-ai-process-automation-roi",
    title: "AI Process Automation ROI: The Numbers Your Business Is Missing",
    slug: { current: "ai-process-automation-roi" },
    excerpt:
      "Most businesses measure AI process automation ROI wrong. Discover the 6 metrics that reveal true returns and the 3-step framework to calculate yours.",
    publishedAt: "2026-06-05T00:00:00.000Z",
    mainImage: {
      asset: {
        url: "/blog-images/ai-process-automation-roi/hero-usa.webp",
      },
      alt: "AI process automation ROI framework showing 6 value metrics, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "AI Strategy", slug: { current: "ai-strategy" } },
    ],
  },
  {
    _id: "post-autonomous-ai-agents-enterprise",
    title: "Autonomous AI Agents for Enterprise: Pilot to Production",
    slug: { current: "autonomous-ai-agents-enterprise" },
    excerpt:
      "Most enterprise AI agent pilots stall before production. The 4-phase framework that moves autonomous agents from demo to full deployment at scale.",
    publishedAt: "2026-06-04T00:00:00.000Z",
    mainImage: {
      asset: {
        url: "/blog-images/autonomous-ai-agents-enterprise/hero-usa.webp",
      },
      alt: "4-phase framework for autonomous AI agent deployment from pilot to enterprise production, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "AI Strategy", slug: { current: "ai-strategy" } },
    ],
  },
  {
    _id: "post-how-to-choose-ai-model",
    title: "How to Choose the Right AI Model for Your Product",
    slug: { current: "how-to-choose-ai-model" },
    excerpt:
      "Choosing the right AI model can make or break your product. Compare GPT-4, Claude, Llama 3, and custom models with this 5-question decision framework.",
    publishedAt: "2026-06-04T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/how-to-choose-ai-model/hero-usa.webp" },
      alt: "AI model comparison framework showing GPT-4, Claude, Llama 3 and decision criteria, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "AI Strategy", slug: { current: "ai-strategy" } },
    ],
  },
  {
    _id: "post-ai-in-product-development-lifecycle",
    title: "AI in Product Development Lifecycle: 5 Phases That Matter",
    slug: { current: "ai-in-product-development-lifecycle" },
    excerpt:
      "AI changes every phase of product development. Learn how 5 lifecycle stages get smarter with AI, timelines, team setup, and LLM guidance.",
    publishedAt: "2026-06-04T00:00:00.000Z",
    mainImage: {
      asset: {
        url: "/blog-images/ai-in-product-development-lifecycle/hero-usa.webp",
      },
      alt: "5-phase AI product development lifecycle from discovery to scale, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "Product Development", slug: { current: "product-development" } },
    ],
  },
  {
    _id: "post-when-to-use-llms-in-your-product",
    title: "When to Use LLMs in Your Product: A Practical Decision Guide",
    slug: { current: "when-to-use-llms-in-your-product" },
    excerpt:
      "Not every product needs an LLM. Use this 4-question framework to decide when LLMs deliver ROI — and when they will cost you time and money.",
    publishedAt: "2026-06-03T00:00:00.000Z",
    mainImage: {
      asset: {
        url: "/blog-images/when-to-use-llms-in-your-product/hero-usa.webp",
      },
      alt: "Decision framework for when to use LLMs in your product — LLM vs classical ML, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "AI Strategy", slug: { current: "ai-strategy" } },
    ],
  },
  {
    _id: "post-how-to-build-an-ai-product",
    title: "How to Build an AI Product: 5 Steps That Actually Work",
    slug: { current: "how-to-build-an-ai-product" },
    excerpt:
      "Building an AI product takes more than picking a model. Learn the 5-step process for real ROI, with timelines, costs and LLM guidance.",
    publishedAt: "2026-06-03T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/how-to-build-an-ai-product/hero-usa.webp" },
      alt: "5-step framework for building an AI product from discovery to scale, AI Advocate Holding",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "Product Development", slug: { current: "product-development" } },
    ],
  },
  {
    _id: "post-mvp-vs-poc",
    title: "MVP vs POC: Why Every AI Product Needs Both",
    slug: { current: "mvp-vs-poc" },
    excerpt:
      "MVP and POC serve different purposes. Learn why 70% of successful AI products run both, and the exact roadmap for validating your idea before committing budget.",
    publishedAt: "2026-04-14T00:00:00.000Z",
    mainImage: {
      asset: {
        url: "/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-hero-usa.webp",
      },
      alt: "MVP vs POC comparison diagram showing two validation phases side by side with timelines for AI product development",
    },
    author: { name: "Moazzam Ali" },
    categories: [
      { title: "Product Development", slug: { current: "product-development" } },
    ],
  },
];
