import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import { ISEEDOC_TELEHEALTH_CONTENT } from "./iseedoc-telehealth";
import { VERIFIEDX_CYBERSECURITY_CONTENT } from "./verifiedx-cybersecurity";
import { AI_CONSTRUCTION_SAFETY_CONTENT } from "./ai-construction-safety";
import { MARKETPULSE_FINANCIAL_AI_CONTENT } from "./marketpulse-financial-ai";
import { BILLCLEAR_LEGAL_TECH_CONTENT } from "./billclear-legal-tech";
import { INTELLIBOTS_AI_AGENT_PLATFORM_CONTENT } from "./intellibots-ai-agent-platform";
import { TRACKREC_SALES_HIRING_CONTENT } from "./trackrec-sales-hiring";
import { CONSTRUCTION_STAFF_AUGMENTATION_CONTENT } from "./construction-staff-augmentation";
import { EXECUTIVE_GENAI_INSIGHTS_CONTENT } from "./executive-genai-insights";
import { EVREN_RD_HUMAN_ANALYSIS_CONTENT } from "./evren-rd-human-analysis";

/** Register every text-focused case study here (slug → content). */
export const TEXT_FOCUSED_CASE_STUDIES: Record<string, TextFocusedCaseStudyContent> = {
  [ISEEDOC_TELEHEALTH_CONTENT.slug]: ISEEDOC_TELEHEALTH_CONTENT,
  [VERIFIEDX_CYBERSECURITY_CONTENT.slug]: VERIFIEDX_CYBERSECURITY_CONTENT,
  [AI_CONSTRUCTION_SAFETY_CONTENT.slug]: AI_CONSTRUCTION_SAFETY_CONTENT,
  [MARKETPULSE_FINANCIAL_AI_CONTENT.slug]: MARKETPULSE_FINANCIAL_AI_CONTENT,
  [BILLCLEAR_LEGAL_TECH_CONTENT.slug]: BILLCLEAR_LEGAL_TECH_CONTENT,
  [INTELLIBOTS_AI_AGENT_PLATFORM_CONTENT.slug]: INTELLIBOTS_AI_AGENT_PLATFORM_CONTENT,
  [TRACKREC_SALES_HIRING_CONTENT.slug]: TRACKREC_SALES_HIRING_CONTENT,
  [CONSTRUCTION_STAFF_AUGMENTATION_CONTENT.slug]:
    CONSTRUCTION_STAFF_AUGMENTATION_CONTENT,
  [EXECUTIVE_GENAI_INSIGHTS_CONTENT.slug]: EXECUTIVE_GENAI_INSIGHTS_CONTENT,
  [EVREN_RD_HUMAN_ANALYSIS_CONTENT.slug]: EVREN_RD_HUMAN_ANALYSIS_CONTENT,
};

export function getTextFocusedCaseStudy(
  slug: string
): TextFocusedCaseStudyContent | undefined {
  return TEXT_FOCUSED_CASE_STUDIES[slug];
}

export function getTextFocusedSlugs(): string[] {
  return Object.keys(TEXT_FOCUSED_CASE_STUDIES);
}

export function isTextFocusedSlug(slug: string): boolean {
  return slug in TEXT_FOCUSED_CASE_STUDIES;
}
