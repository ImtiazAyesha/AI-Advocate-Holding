import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * TrackRec Sales Hiring — text-focused case study copy.
 */
export const TRACKREC_SALES_HIRING_CONTENT: TextFocusedCaseStudyContent = {
  slug: "trackrec-sales-hiring",
  client: "TrackRec",
  industry: "HR Tech / Sales Ops",
  timeline: "6 Months",
  teamSize: "5 Specialists",
  hardMetric: "25% Higher Quota Attainment",
  heroImage: "/case studies/case 7.webp",
  hero: {
    headline:
      "Improving Sales Quota Attainment by Hiring the Right Reps, Faster",
    accentWord: "Attainment",
    subheadline:
      "A premier sales recruitment agency recognized a costly inefficiency in the market: traditional hiring, based on resumes and interviews, was failing to consistently identify top-performing sales candidates. This led to high turnover and missed revenue targets for their clients. They partnered with AI Advocate Holding to build TrackRec, an AI-driven platform that moves beyond resumes to generate a data-backed 'Sales Fit Score,' revolutionizing how sales talent is assessed and placed.",
    metadata: {
      industry: "HR Technology / Sales & Recruitment",
      coreChallenge: "Inaccurate Candidate Vetting & High Cost of Bad Hires",
      solution:
        "Predictive AI Modeling, Custom Scoring Algorithms, Third-Party API Integration",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative: Replace Gut Feel with",
    accentWord: "Data-Driven Hiring",
    points: [
      {
        heading: "Moving Beyond Subjective Resume Reviews",
        description:
          "The goal was to create a data-driven system that evaluates candidates against key performance indicators, like deal size and industry experience, to predict sales success.",
      },
      {
        heading: "Creating a Customizable and Relevant 'Fit Score'",
        description:
          "The platform needed a customizable scoring system, allowing recruiters to adjust KPIs to match the specific needs of the role and business.",
      },
      {
        heading: "Enriching Candidate Profiles with Real-Time Data",
        description:
          "The system aimed to integrate with external data sources, like Apollo.io, to enrich profiles with up-to-date, industry-specific data for a comprehensive candidate view.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "TrackRec has fundamentally changed the way we operate. We are no longer just matching resumes to job descriptions, we are matching sales DNA to business needs. Our clients are seeing higher quota attainment from the candidates we place, and our own efficiency has skyrocketed. AI Advocate Holding understood our business problem perfectly.",
    title: "CEO",
    company: "Premier Sales Recruitment Agency",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for a",
    titleAccent: "Predictive Talent Assessment Engine",
    points: [
      {
        heading: "Engineered a Multi-Factor AI Scoring System",
        description:
          "Developed the AI-powered Sales Fit Score, blending machine learning models and OpenAI to generate a reliable score based on 11 key metrics.",
      },
      {
        heading: "Built a High-Performance, Scalable Backend",
        description:
          "Architected a microservices platform with FastAPI and Celery to handle large datasets and complex scoring, hosted on secure AWS infrastructure.",
      },
      {
        heading: "Integrated Third-Party APIs for Data Enrichment",
        description:
          "Integrated the Apollo.io API to enrich candidate profiles with external, industry-specific data, improving the AI's scoring accuracy.",
      },
      {
        heading: "Designed for Seamless Frontend Integration",
        description:
          "Designed TrackRec to easily integrate with existing recruiter systems, delivering a fast, modern, and SEO-friendly interface with Next.js and React.js.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "Higher Performing Teams, Built More Efficiently",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "25% Increase in First-Year Rep Quota Attainment",
        description:
          "Accurate candidate-role matching led to a significant increase in new hire performance, directly impacting revenue.",
      },
      {
        title: "50% Faster Time-to-Hire",
        description:
          "Streamlined recruitment reduced the hiring process by 50%, boosting operational efficiency and client satisfaction.",
      },
      {
        title: "Near-Elimination of Subjective Hiring Bias",
        description:
          "The data-driven Sales Fit Score removed unconscious bias, focusing purely on performance indicators for hiring decisions.",
      },
      {
        title: "A Flexible Platform for Any Sales Role",
        description:
          "The customizable scoring system adapts to any sales role, making the platform a core strategic asset for the agency.",
      },
    ],
  },
};
