import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * VerifiedX Cybersecurity — text-focused case study copy.
 */
export const VERIFIEDX_CYBERSECURITY_CONTENT: TextFocusedCaseStudyContent = {
  slug: "verifiedx-cybersecurity",
  client: "VerifiedX",
  industry: "FinTech / Cybersecurity",
  timeline: "6 Months",
  teamSize: "5 Specialists",
  hardMetric: "$7.5M+ Losses Prevented",
  heroImage: "/case studies/case 2.webp",
  hero: {
    headline:
      "Mitigating Multi-Million Dollar Cyber Risk with Proactive AI Threat Detection",
    accentWord: "Dollar",
    subheadline:
      "In today's threat landscape, reactive cybersecurity is a recipe for financial and reputational disaster. VerifiedX, a high-growth FinTech platform, required an ironclad defense against sophisticated, AI-driven phishing attacks that traditional filters were missing. They partnered with AI Advocate Holding to build a proactive threat neutralization engine that leverages state-of-the-art LLMs to identify and stop attacks before they can impact the enterprise.",
    metadata: {
      industry: "Cybersecurity / Financial Technology",
      coreChallenge:
        "Inadequate Defense Against Advanced Phishing & Financial Loss Risk",
      solution:
        "State-of-the-Art LLMs, Machine Learning, Anomaly Detection",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative:",
    accentWord: "Fortify the Enterprise Against Evolving Digital Threats",
    points: [
      {
        heading: "Outpacing AI-Driven Phishing Attacks",
        description:
          "Cybercriminals were using generative AI to scale personalized phishing attacks, rendering rule-based systems ineffective and increasing risks.",
      },
      {
        heading: "Providing Real-Time, Cross-Channel Protection",
        description:
          "The challenge was to create a unified, real-time defense system that analyzes links, messages, and content across all digital channels.",
      },
      {
        heading: "Ensuring Scalability and Performance Under Load",
        description:
          "The solution needed to handle millions of real-time analysis requests on a scalable infrastructure without sacrificing performance.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What VerifiedX Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "The threat landscape is relentless. AI Advocate Holding didn't just sell us a product, they partnered with us to build a strategic defense. Their AI engine has become our first and most effective line of protection, delivering a level of security and a quantifiable ROI that far exceeded our expectations.",
    title: "Chief Information Security Officer (CISO)",
    company: "VerifiedX",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for a",
    titleAccent: "Proactive, Intelligent Defense",
    points: [
      {
        heading: "Deployed State-of-the-Art LLMs for Contextual Analysis",
        description:
          "Implemented leading LLMs trained on phishing data to move from pattern-matching to understanding deceptive content.",
      },
      {
        heading: "Engineered a Real-Time, High-Performance Backend",
        description:
          "Built a scalable backend using FastAPI to handle real-time analysis of links and messages without compromising performance.",
      },
      {
        heading: "Designed for Continuous Learning and Adaptation",
        description:
          "Created a system that continuously updates itself with new data to adapt to emerging phishing threats.",
      },
      {
        heading: "Architected a Scalable, Cross-Platform Solution",
        description:
          "Containerized the solution for cloud deployment, delivering consistent security across both browser and mobile platforms.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "Fortified Security and Quantifiable Risk Reduction",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: ">$7.5M in Estimated Annual Losses Prevented",
        description:
          "The AI platform proactively neutralized threats, preventing financial losses from phishing attacks and ensuring significant ROI.",
      },
      {
        title: "99.7% Threat Detection Accuracy",
        description:
          "Achieved near-perfect accuracy in detecting and blocking threats, minimizing exposure to breaches.",
      },
      {
        title: "Real-Time Protection Across All Digital Channels",
        description:
          "Provided VerifiedX with unified, real-time defense across their entire digital ecosystem.",
      },
      {
        title: "A Scalable Foundation for Future Security",
        description:
          "Robust, containerized architecture offers flexibility to adapt and scale as the business grows and new threats emerge.",
      },
    ],
  },
};
