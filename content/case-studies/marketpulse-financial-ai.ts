import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * MarketPulse Financial AI — text-focused case study copy.
 */
export const MARKETPULSE_FINANCIAL_AI_CONTENT: TextFocusedCaseStudyContent = {
  slug: "marketpulse-financial-ai",
  client: "MarketPulse Live",
  industry: "Finance & Investing",
  timeline: "7 Months",
  teamSize: "6 Specialists",
  hardMetric: "< 90 Seconds to Insight",
  heroImage: "/case-study/Finance.png",
  hero: {
    headline:
      "Delivering Actionable Market Alpha with Real-Time Earnings Call Intelligence",
    accentWord: "Alpha",
    subheadline:
      "In the world of finance, information latency is the difference between profit and loss. A leading financial advisory firm needed to equip its strategists and investors with an immediate information edge during the volatile earnings season. They partnered with AI Advocate to build MarketPulse Live, a real-time analysis platform that ingests, transcribes, and summarizes earnings calls the moment they happen, turning unstructured audio into actionable market intelligence.",
    metadata: {
      industry: "Financial Services & Investment Tech",
      coreChallenge: "Information Latency & Inefficient Data Analysis",
      solution:
        "Real-Time Transcription, AI-Powered Summarization, NLP Sentiment Analysis",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative: Achieve an",
    accentWord: "Unfair Information Advantage",
    points: [
      {
        heading: "Eliminating the Delay Between Call and Insight",
        description:
          "The goal was to create a system that could process live earnings call audio and provide summaries, key takeaways, and sentiment analysis in near real-time.",
      },
      {
        heading: "Analyzing Nuance and Sentiment at Scale",
        description:
          "The firm aimed to deploy NLP models that could detect shifts in tone and sentiment, providing qualitative insights beyond simple transcription.",
      },
      {
        heading: "Building a Scalable, High-Availability Platform",
        description:
          "The platform needed to handle concurrent data streams from multiple calls, ensuring reliable insights for hundreds of users during peak market hours.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "In our business, speed is everything. AI Advocate delivered a platform that has fundamentally changed how we operate during earnings season. We are no longer reacting to the market, we are anticipating it. Their ability to translate a complex architectural vision into a high-performance, real-world tool has been exceptional.",
    title: "Chief Investment Officer",
    company: "Financial Advisory Firm",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for a",
    titleAccent: "Real-Time Intelligence Engine",
    points: [
      {
        heading: "Architected a Cloud-Native Microservices Platform",
        description:
          "Designed a fully containerized, microservices-based architecture on Google Cloud Run, ensuring scalability and high availability with no single points of failure.",
      },
      {
        heading: "Deployed a Low-Latency Transcription and NLP Pipeline",
        description:
          "Integrated OpenAI Whisper and custom NLP models for real-time transcription and processing of live audio streams, extracting key insights and sentiment.",
      },
      {
        heading: "Engineered a Dynamic, Real-Time Frontend",
        description:
          "Developed a responsive dashboard with Next.js to visualize real-time stock changes, sentiment, and AI-generated summaries, updated via WebSockets.",
      },
      {
        heading: "Implemented a Resilient, API-First Design",
        description:
          "Built the system with an API-first approach, ensuring seamless communication between microservices and enabling future integration with proprietary trading algorithms.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "Faster Insights, Smarter Decisions, and a Clear Market Edge",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "From Live Audio to Actionable Insight in < 90 Seconds",
        description:
          "The platform reduced the information-to-insight cycle from hours to under 90 seconds, offering a speed advantage during critical market events.",
      },
      {
        title: "Unlocked Qualitative Insights with Sentiment Analysis",
        description:
          "Real-time sentiment tracking during Q&A sessions provided leading indicators for market reactions beyond raw data.",
      },
      {
        title: "Enabled Monitoring of 10+ Concurrent Earnings Calls",
        description:
          "The scalable platform allowed analysts to monitor over ten simultaneous earnings calls, increasing market coverage significantly.",
      },
      {
        title: "A Platform for Compounding Information Advantage",
        description:
          "The platform serves as a foundation for future AI-driven forecasting and anomaly detection, ensuring a growing information edge.",
      },
    ],
  },
};
