import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * Executive GenAI / Brain AI — text-focused case study copy.
 */
export const EXECUTIVE_GENAI_INSIGHTS_CONTENT: TextFocusedCaseStudyContent = {
  slug: "executive-genai-insights",
  client: "Enterprise Client",
  industry: "Enterprise Software / Business Intelligence",
  timeline: "6 Months",
  teamSize: "6 Specialists",
  hardMetric: "Days → Seconds",
  heroImage: "/case studies/case 9.jpg",
  hero: {
    headline:
      "Unlocking C-Suite Insights: The End of 'I will Have to Ask the Data Team'",
    accentWord: "C-Suite",
    subheadline:
      "For most enterprises, critical business data remains locked away, accessible only to the handful of technical analysts who can write complex SQL. This creates a significant bottleneck, slowing down decision-making. We partnered with a forward-thinking enterprise client to build Brain AI, a state-of-the-art platform that allows any user from an analyst to the CEO to have a natural language conversation with their live databases and get instant, accurate answers.",
    metadata: {
      industry: "Enterprise Software / Business Intelligence",
      coreChallenge:
        "Data Accessibility Bottlenecks & Slow Decision-Making",
      solution: "Generative AI, Natural Language to SQL, Vector Search",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative: Move at the Speed of",
    accentWord: "Curiosity",
    points: [
      {
        heading: "Translating Ambiguous English into Precise SQL",
        description:
          "The challenge was converting nuanced, context-dependent human language into accurate, executable SQL queries without error.",
      },
      {
        heading: "Understanding Complex, Custom Database Schemas",
        description:
          "The system had to intelligently understand each client's unique database structure to generate relevant queries.",
      },
      {
        heading: "Delivering Trustworthy, Interpretable Results",
        description:
          "The platform needed to present data in human-readable formats—clear summaries, charts, and dashboards—to ensure results were understandable for non-technical users.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What Their Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "Brain AI has fundamentally changed our relationship with our own data. Our teams can now ask critical business questions and get answers instantly, without needing to file a ticket with the analytics team. The velocity this has unlocked is a true competitive advantage. AI Advocate Holding delivered on a vision we thought was years away.",
    title: "Chief Data Officer",
    company: "Enterprise Client",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for a",
    titleAccent: "Conversational Data Scientist",
    points: [
      {
        heading: "Engineered an Intelligent Query Interpretation Engine",
        description:
          "Used LLMs to interpret user intent, retrieving relevant database schema and documentation through a Vector Store (Elasticsearch) before generating the query.",
      },
      {
        heading: "Built a Dynamic, Validated SQL Generation Pipeline",
        description:
          "The system generates accurate SQL queries with a validation step to ensure syntactical and logical correctness before execution.",
      },
      {
        heading: "Created an LLM-Powered Response & Visualization Layer",
        description:
          "Translated raw data into actionable formats—concise summaries, tables, or visual charts using LLMs for immediate insights.",
      },
      {
        heading: "Designed a Pluggable, Multi-Database Architecture",
        description:
          "The platform is containerized with Docker and supports secure, seamless connections to a wide range of SQL databases, offering versatility for any enterprise.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "Data-Driven Decisions, Radically Accelerated",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "Reduced Time-to-Insight from Days to Seconds",
        description:
          "Business users can now get instant, self-serve answers, accelerating strategic and operational decision-making.",
      },
      {
        title: "Eliminated the Data Analyst as a Bottleneck",
        description:
          "The platform freed data analysts from repetitive questions, enabling them to focus on complex, high-value strategic projects.",
      },
      {
        title: "100% Democratization of Data Access",
        description:
          "Empowered non-technical users across the organization to directly query company data, fostering a more data-literate culture.",
      },
      {
        title: "A Foundation for Proactive Business Intelligence",
        description:
          "The platform now enables future enterprise applications, including proactive alerting, advanced visualizations, and integration with BI tools.",
      },
    ],
  },
};
