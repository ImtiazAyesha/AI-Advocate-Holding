import type { BlogPost } from "@/lib/blog/types";

export const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    _id: "post-openai-claude-api-integration-guide",
    title: "How to Integrate OpenAI and Claude API into Your Product",
    slug: { current: "openai-claude-api-integration-guide" },
    excerpt: "A practical guide to integrating OpenAI and Claude API into your SaaS or web app, with patterns, code structure, and production tips.",
    publishedAt: "2026-06-20T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/openai-claude-api-integration-guide/hero.svg" },
      alt: "OpenAI and Claude API integration guide showing product to API to AI model flow",
    },
    author: { name: "AI Advocate Team" },
    categories: [{ title: "AI Development", slug: { current: "ai-development" } }],
  },
  {
    _id: "post-workflow-automation-guide",
    title: "Workflow Automation with n8n, Zapier, and Make: Which Tool Fits Your Business",
    slug: { current: "workflow-automation-guide" },
    excerpt: "Compare n8n, Zapier, and Make for workflow automation. Learn which tool fits your business size, budget, and technical requirements.",
    publishedAt: "2026-06-18T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/workflow-automation-guide/hero.svg" },
      alt: "Workflow automation tools comparison showing n8n, Zapier and Make with automation flow diagram",
    },
    author: { name: "AI Advocate Team" },
    categories: [{ title: "Automation", slug: { current: "automation" } }],
  },
  {
    _id: "post-how-to-build-ai-chatbot",
    title: "How to Build an AI Chatbot for Your Business: A Practical Guide",
    slug: { current: "how-to-build-ai-chatbot" },
    excerpt: "Step-by-step guide to building an AI chatbot using OpenAI or Claude API, React, and Node.js. Covers types, architecture, testing, and deployment.",
    publishedAt: "2026-06-15T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/how-to-build-ai-chatbot/hero.svg" },
      alt: "AI chatbot interface mockup showing conversation powered by GPT-4 and Claude",
    },
    author: { name: "AI Advocate Team" },
    categories: [{ title: "AI Development", slug: { current: "ai-development" } }],
  },
  {
    _id: "post-qa-automation-ai-development",
    title: "QA Automation in AI Product Development: Why It Matters",
    slug: { current: "qa-automation-ai-development" },
    excerpt: "Why QA automation is non-negotiable in AI product development. Covers Selenium, Cypress, API testing, and building a QA strategy that ships bug-free.",
    publishedAt: "2026-06-10T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/qa-automation-ai-development/hero.svg" },
      alt: "QA automation test results panel showing Selenium, Cypress, and API testing tools",
    },
    author: { name: "AI Advocate Team" },
    categories: [{ title: "QA and Testing", slug: { current: "qa-and-testing" } }],
  },
  {
    _id: "post-scalable-saas-platform-guide",
    title: "How to Build a Scalable SaaS Platform with React and Node.js",
    slug: { current: "scalable-saas-platform-guide" },
    excerpt: "Architecture, stack decisions, and lessons for building a production-ready SaaS platform using React, Node.js, and PostgreSQL that scales with your growth.",
    publishedAt: "2026-06-05T00:00:00.000Z",
    mainImage: {
      asset: { url: "/blog-images/scalable-saas-platform-guide/hero.svg" },
      alt: "Scalable SaaS platform architecture diagram showing React, Node.js, and PostgreSQL layers",
    },
    author: { name: "AI Advocate Team" },
    categories: [{ title: "SaaS Development", slug: { current: "saas-development" } }],
  },
];
