// ═══════════════════════════════════════════════════════════════════════
//  WORK PAGE — Case study listing cards
//  Full page copy lives in content/case-studies/*.ts
// ═══════════════════════════════════════════════════════════════════════

import { AI_CONSTRUCTION_SAFETY_CONTENT } from "@/content/case-studies/ai-construction-safety";
import { BILLCLEAR_LEGAL_TECH_CONTENT } from "@/content/case-studies/billclear-legal-tech";
import { CONSTRUCTION_STAFF_AUGMENTATION_CONTENT } from "@/content/case-studies/construction-staff-augmentation";
import { EVREN_RD_HUMAN_ANALYSIS_CONTENT } from "@/content/case-studies/evren-rd-human-analysis";
import { EXECUTIVE_GENAI_INSIGHTS_CONTENT } from "@/content/case-studies/executive-genai-insights";
import { INTELLIBOTS_AI_AGENT_PLATFORM_CONTENT } from "@/content/case-studies/intellibots-ai-agent-platform";
import { MARKETPULSE_FINANCIAL_AI_CONTENT } from "@/content/case-studies/marketpulse-financial-ai";
import { TRACKREC_SALES_HIRING_CONTENT } from "@/content/case-studies/trackrec-sales-hiring";

const CONSTRUCTION = AI_CONSTRUCTION_SAFETY_CONTENT;
const MARKETPULSE = MARKETPULSE_FINANCIAL_AI_CONTENT;
const BILLCLEAR = BILLCLEAR_LEGAL_TECH_CONTENT;
const INTELLIBOTS = INTELLIBOTS_AI_AGENT_PLATFORM_CONTENT;
const TRACKREC = TRACKREC_SALES_HIRING_CONTENT;
const STAFF_AUG = CONSTRUCTION_STAFF_AUGMENTATION_CONTENT;
const GENAI_INSIGHTS = EXECUTIVE_GENAI_INSIGHTS_CONTENT;
const EVREN_RD = EVREN_RD_HUMAN_ANALYSIS_CONTENT;

export interface CaseStudyCard {
  metric: string;
  metricLabel: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export const WORK_CASE_STUDIES: CaseStudyCard[] = [
  {
    metric: "90%",
    metricLabel: "Faster Report Analysis",
    client:
      "Revolutionizing Healthcare Access: An AI-Powered Virtual Consultation Platform",
    description:
      "Global telehealth innovator iSeedoc partnered with AI Advocate Holding to architect an end-to-end, HIPAA-compliant telehealth platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent, accessible, and secure healthcare.",
    tags: ["Healthcare"],
    image: "/case studies/case 1.webp",
    href: "/case-studies/iseedoc-telehealth",
  },
  {
    metric: "$7.5M+",
    metricLabel: "Annual Losses Prevented",
    client:
      "Mitigating Multi-Million Dollar Cyber Risk with Proactive AI Threat Detection",
    description:
      "For a high-growth FinTech, we deployed a real-time LLM-based detection engine that analyzes and neutralizes sophisticated phishing attacks before they breach enterprise security.",
    tags: ["Cybersecurity"],
    image: "/case studies/case 2.webp",
    href: "/case-studies/verifiedx-cybersecurity",
  },
  {
    metric: "40%",
    metricLabel: "Reduction in On-Site Incidents",
    client: CONSTRUCTION.hero.headline,
    description: CONSTRUCTION.hero.subheadline,
    tags: ["Construction & Real Estate"],
    image: "/case studies/case 3.webp",
    href: "/case-studies/ai-construction-safety",
  },
  {
    metric: "< 90s",
    metricLabel: "Audio to Actionable Insight",
    client: MARKETPULSE.hero.headline,
    description: MARKETPULSE.hero.subheadline,
    tags: ["Finance & Investing"],
    image: "/case studies/case 4.webp",
    href: "/case-studies/marketpulse-financial-ai",
  },
  {
    metric: "15%",
    metricLabel: "Revenue Recovered",
    client: BILLCLEAR.hero.headline,
    description: BILLCLEAR.hero.subheadline,
    tags: ["Legal Tech"],
    image: "/case studies/case 5.webp",
    href: "/case-studies/billclear-legal-tech",
  },
  {
    metric: "70%",
    metricLabel: "Fewer Repetitive Support Queries",
    client: INTELLIBOTS.hero.headline,
    description: INTELLIBOTS.hero.subheadline,
    tags: ["Autonomous Agents"],
    image: "/case studies/case 6.webp",
    href: "/case-studies/intellibots-ai-agent-platform",
  },
  {
    metric: "25%",
    metricLabel: "Higher First-Year Quota Attainment",
    client: TRACKREC.hero.headline,
    description: TRACKREC.hero.subheadline,
    tags: ["HR Tech / Sales Ops"],
    image: "/case studies/case 7.webp",
    href: "/case-studies/trackrec-sales-hiring",
  },
  {
    metric: "9",
    metricLabel: "Months Accelerated",
    client: STAFF_AUG.hero.headline,
    description: STAFF_AUG.hero.subheadline,
    tags: ["AI Staff Augmentation"],
    image: "/case studies/case 8.webp",
    href: "/case-studies/construction-staff-augmentation",
  },
  {
    metric: "Instant",
    metricLabel: "Executive Insights",
    client: GENAI_INSIGHTS.hero.headline,
    description: GENAI_INSIGHTS.hero.subheadline,
    tags: ["Generative AI"],
    image: "/case studies/case 9.jpg",
    href: "/case-studies/executive-genai-insights",
  },
  {
    metric: "98.94%",
    metricLabel: "Recognition Accuracy",
    client: EVREN_RD.hero.headline,
    description: EVREN_RD.hero.subheadline,
    tags: ["Deep Tech / R&D"],
    image: "/case studies/case 10.webp",
    href: "/case-studies/evren-rd-human-analysis",
  },
];

export const WORK_CASE_STUDIES_PER_PAGE = 6;
