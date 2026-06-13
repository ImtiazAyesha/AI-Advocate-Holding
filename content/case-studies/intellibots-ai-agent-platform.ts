import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * IntelliBots AI Agent Platform — text-focused case study copy.
 */
export const INTELLIBOTS_AI_AGENT_PLATFORM_CONTENT: TextFocusedCaseStudyContent = {
  slug: "intellibots-ai-agent-platform",
  client: "IntelliBots",
  industry: "Enterprise Software & Logistics",
  timeline: "8 Months",
  teamSize: "6 Specialists",
  hardMetric: "70% Fewer Support Queries",
  heroImage: "/case studies/case 6.webp",
  hero: {
    headline:
      "From Chatbot to Command Center: Empowering Enterprise with an AI Agent Deployment Platform",
    accentWord: "Center",
    subheadline:
      "A global logistics enterprise needed to move beyond simple, single-purpose chatbots. Their goal was to empower their internal teams to create, manage, and deploy multiple, sophisticated AI assistants for various use cases from internal IT support to customer service without a massive development overhead for each new bot. They partnered with AI Advocate Holding to build IntelliBots, a centralized platform for deploying and managing autonomous, RAG-powered AI agents at scale.",
    metadata: {
      industry: "Enterprise Software & Logistics",
      coreChallenge:
        "Inability to Scale Conversational AI & High Development Costs",
      solution:
        "AI Agent Platform, Multi-Tenancy Architecture, Retrieval-Augmented Generation (RAG)",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative: Democratize AI Creation,",
    accentWord: "Centralize Control",
    points: [
      {
        heading: "Enabling Non-Developers to Build and Manage AI Agents",
        description:
          "The goal was to create a user-friendly admin interface, allowing business users to easily build and manage AI agents with secure knowledge bases.",
      },
      {
        heading: "Ensuring High Accuracy and Domain-Specific Expertise",
        description:
          "The system needed to provide context-aware, accurate responses grounded in verified internal documentation, preventing AI 'hallucinations.'",
      },
      {
        heading: "Facilitating Seamless and Secure Embedding",
        description:
          "The platform had to offer an easy, secure way for clients to embed AI agents into their websites and internal apps, requiring a scalable backend and simple frontend.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "IntelliBots has transformed our approach to internal AI. Instead of commissioning one-off projects, we now have a platform that empowers our own teams to build the solutions they need. AI Advocate Holding delivered a scalable, secure, and remarkably intuitive system that is driving efficiency across our entire organization.",
    title: "Chief Digital Officer",
    company: "Global Logistics Enterprise",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for a",
    titleAccent: "Scalable AI Agent Factory",
    points: [
      {
        heading: "Architected a Modular, Multi-Tenant Platform Core",
        description:
          "Built a robust backend using FastAPI to manage multiple isolated chatbot instances, ensuring data security and segregation across bots.",
      },
      {
        heading: "Implemented a Powerful RAG and Indexing Engine",
        description:
          "Integrated RAG with Elasticsearch to create a searchable knowledge base from documents and live websites, grounding AI responses in factual data.",
      },
      {
        heading: "Designed a User-Centric Admin and Client Interface",
        description:
          "Created two interfaces using Next.js: an admin dashboard for managing bots and a responsive chat UI that's easy to embed in web apps.",
      },
      {
        heading: "Engineered for Scalability and High Availability",
        description:
          "Containerized the platform and hosted on AWS with load balancing and autoscaling to ensure performance and reliability as bot usage grows.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase:
      "Rapid Deployment, Reduced Costs, and Enterprise-Wide AI Adoption",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "Reduced New AI Agent Deployment Time from Months to Hours",
        description:
          "The platform enabled self-service for business units, reducing deployment time and developer resources needed for new AI agents.",
      },
      {
        title: "70% Reduction in Repetitive Internal Support Queries",
        description:
          "The first AI agent for the IT help desk automated common queries, allowing the IT team to focus on more complex issues.",
      },
      {
        title: "Ensured 100% Verifiable, Source-Based Responses",
        description:
          "The RAG architecture prevented AI errors by ensuring all responses were based on the client's own knowledge documents, building trust.",
      },
      {
        title: "A Centralized Platform for AI Governance & Strategy",
        description:
          "The client now has a unified platform to manage AI strategy, monitor performance, and ensure quality and security across all agents.",
      },
    ],
  },
};
