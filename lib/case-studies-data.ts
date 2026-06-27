// ═══════════════════════════════════════════════════════════════════════
//  WORK PAGE — Case study listing cards
//  Full page copy lives in content/case-studies/*.ts
// ═══════════════════════════════════════════════════════════════════════

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
    client: "AI-Powered Telehealth Platform for iSeedoc",
    description:
      "We built a HIPAA-compliant telehealth platform for iSeedoc that automates patient intake, routes consultations via AI triage, and surfaces clinical summaries in real time. Patients get faster care. Clinicians spend less time on admin.",
    tags: ["Healthcare"],
    image: "/case-study-images/iseedoc-telehealth/hero.svg",
    href: "/case-studies/iseedoc-telehealth",
  },
  {
    metric: "$7.5M+",
    metricLabel: "Annual Losses Prevented",
    client: "Proactive AI Threat Detection for VerifiedX",
    description:
      "We deployed an LLM-based threat detection engine for VerifiedX that identifies and neutralizes phishing campaigns, credential attacks, and anomalous access patterns before they reach end users. Built on Claude API with real-time alerting and audit logs.",
    tags: ["Cybersecurity"],
    image: "/case-study-images/verifiedx-cybersecurity/hero.svg",
    href: "/case-studies/verifiedx-cybersecurity",
  },
  {
    metric: "40%",
    metricLabel: "Reduction in On-Site Incidents",
    client: "Real-Time Construction Safety Monitoring",
    description:
      "We integrated computer vision and AI alert pipelines across active construction sites, providing project managers with live safety scoring, PPE compliance tracking, and automated incident reporting. Forty percent fewer on-site incidents in the first quarter.",
    tags: ["Construction"],
    image: "/case-study-images/ai-construction-safety/hero.svg",
    href: "/case-studies/ai-construction-safety",
  },
  {
    metric: "< 90s",
    metricLabel: "Earnings Call to Actionable Insight",
    client: "Earnings Intelligence Platform for MarketPulse",
    description:
      "We built a financial intelligence platform for MarketPulse that transcribes earnings calls, extracts key signals using Claude API, and delivers structured summaries to analysts in under 90 seconds. What used to take hours now takes less than two minutes.",
    tags: ["Finance"],
    image: "/case-study-images/marketpulse-financial-ai/hero.svg",
    href: "/case-studies/marketpulse-financial-ai",
  },
  {
    metric: "15%",
    metricLabel: "Revenue Recovered",
    client: "AI Billing Recovery System for BillClear",
    description:
      "BillClear needed a way to catch underbilled and unbilled legal work before invoices were finalized. We built an AI audit layer that cross-references time entries, matter descriptions, and rate cards to surface discrepancies automatically. Recovery rate improved by 15% within two months.",
    tags: ["Legal Tech"],
    image: "/case-study-images/billclear-legal-tech/hero.svg",
    href: "/case-studies/billclear-legal-tech",
  },
  {
    metric: "70%",
    metricLabel: "Fewer Repetitive Support Queries",
    client: "Multi-Agent Support Automation for InteliBots",
    description:
      "We designed and deployed a multi-agent platform for InteliBots that routes, classifies, and resolves tier-1 support tickets without human involvement. Agents triage requests, pull from a live knowledge base, and escalate only what truly needs a human. Support volume handled autonomously rose to 70%.",
    tags: ["Autonomous Agents"],
    image: "/case-study-images/intellibots-ai-agent-platform/hero.svg",
    href: "/case-studies/intellibots-ai-agent-platform",
  },
];

export const WORK_CASE_STUDIES_PER_PAGE = 6;
