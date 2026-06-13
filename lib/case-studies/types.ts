// ═══════════════════════════════════════════════════════════════════════
//  Text-focused case study content (one file per case study)
// ═══════════════════════════════════════════════════════════════════════

export interface CaseStudyPoint {
  heading: string;
  description: string;
}

export interface CaseStudyOutcomeCard {
  title: string;
  description: string;
}

export interface TextFocusedCaseStudyContent {
  slug: string;
  client: string;
  industry: string;
  timeline: string;
  teamSize: string;
  hardMetric: string;
  heroImage: string;
  hero: {
    headline: string;
    accentWord: string;
    subheadline: string;
    metadata: {
      industry: string;
      coreChallenge: string;
      solution: string;
    };
  };
  strategicImperative: {
    eyebrow: string;
    titlePrefix: string;
    accentWord: string;
    points: CaseStudyPoint[];
  };
  testimonial: {
    eyebrow: string;
    titlePrefix: string;
    accentWord: string;
    label?: string;
    quote: string;
    title: string;
    company: string;
  };
  technicalBlueprint: {
    eyebrow: string;
    titlePrefix: string;
    titleAccent: string;
    points: CaseStudyPoint[];
  };
  outcomes: {
    eyebrow: string;
    title: string;
    accentPhrase: string;
    closingStatement: string;
    cards: CaseStudyOutcomeCard[];
  };
}
