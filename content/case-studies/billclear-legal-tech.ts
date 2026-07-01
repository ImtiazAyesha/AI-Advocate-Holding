import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * BillClear Legal Tech — text-focused case study copy.
 */
export const BILLCLEAR_LEGAL_TECH_CONTENT: TextFocusedCaseStudyContent = {
  slug: "billclear-legal-tech",
  client: "BillClear AI",
  industry: "Legal Tech",
  timeline: "6 Months",
  teamSize: "4 Specialists",
  hardMetric: "15% Revenue Recovered",
  heroImage: "/case-study/Legal tech.png",
  hero: {
    headline:
      "Recovering Lost Revenue & Ensuring Billing Compliance for a Top-Tier Law Firm",
    accentWord: "Recovering Lost Revenue",
    subheadline:
      "A leading national law firm was facing a significant challenge: revenue leakage caused by vague, non-compliant, or incomplete timekeeper narratives that were being rejected by clients. They partnered with AI Advocate to build BillClear AI, a smart platform that uses a legal-specific AI engine to automatically analyze and improve billing narratives, ensuring every minute of work is accurately and compliantly captured.",
    metadata: {
      industry: "Legal Technology & Services",
      coreChallenge: "Revenue Leakage & Billing Compliance Risk",
      solution: "Custom-Trained NLP, Rule-Based Logic, Workflow Automation",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative: Protect Firm Revenue and",
    accentWord: "Client Trust",
    points: [
      {
        heading: "Eliminating Vague and Inconsistent Billing Entries",
        description:
          "The goal was to standardize time entries firm-wide, transforming vague descriptions into clear and defensible billing records.",
      },
      {
        heading: "Reducing the Administrative Burden of Manual Review",
        description:
          "Automating the review and correction of timesheets to free up high-value personnel for client work and strategy.",
      },
      {
        heading: "Enhancing Client Transparency and Confidence",
        description:
          "The system aimed to improve billing transparency and educate timekeepers on best practices to enhance input quality.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "Revenue leakage from billing is a silent killer of profitability. AI Advocate's BillClear platform has been a game-changer. It not only plugged the leaks in our revenue cycle but also gave our clients a new level of confidence in our operations. It is one of the best investments in operational technology we have ever made.",
    title: "Managing Partner",
    company: "National Law Firm",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for an",
    titleAccent: "Intelligent Billing & Compliance Engine",
    points: [
      {
        heading: "Developed a Legal-Specific AI Ruleset",
        description:
          "Collaborated with legal experts to create a comprehensive AI ruleset for analyzing billing narratives against compliance standards.",
      },
      {
        heading: "Engineered an Automated Narrative Analysis Pipeline",
        description:
          "Built a FastAPI-powered backend to process billing entries, flag non-compliant items, and provide real-time AI suggestions.",
      },
      {
        heading: "Designed an Intuitive, Educational User Interface",
        description:
          "Created a user-friendly web interface where staff can view flagged issues, compare changes, and improve future time entries.",
      },
      {
        heading: "Architected a Secure and Scalable Backend",
        description:
          "Containerized the platform with Docker and used PostgreSQL, ensuring security, confidentiality, and scalability for firm growth.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "Increased Profitability and Fortified Client Relationships",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "Recovered 15% of Previously Written-Down Revenue",
        description:
          "The platform identified and corrected vague or non-compliant time entries, recovering revenue that would have been lost, delivering a strong ROI.",
      },
      {
        title: "Reduced Manual Review Time by over 80%",
        description:
          "The automated platform saved thousands of hours, allowing partners and staff to focus on high-value, billable client work.",
      },
      {
        title: "Eliminated 100% of Non-Compliant Submissions",
        description:
          "The system ensured all billing submissions adhered to strict standards, reducing client disputes to zero.",
      },
      {
        title: "A New Standard for Billing Transparency & Trust",
        description:
          "The firm improved billing clarity and consistency, strengthening client trust and reinforcing its reputation as a modern, client-focused organization.",
      },
    ],
  },
};
