import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * AI Construction Safety — text-focused case study copy.
 */
export const AI_CONSTRUCTION_SAFETY_CONTENT: TextFocusedCaseStudyContent = {
  slug: "ai-construction-safety",
  client: "National Construction Firm",
  industry: "Construction & Real Estate",
  timeline: "5 Months",
  teamSize: "5 Specialists",
  hardMetric: "40% Fewer Incidents",
  heroImage: "/case-study/Construction.png",
  hero: {
    headline:
      "Slashing On-Site Incidents with AI-Powered Safety & Compliance Monitoring",
    accentWord: "On-Site",
    subheadline:
      "For a leading national construction firm, ensuring worker safety and maintaining OSHA compliance across multiple active job sites was a mission-critical, yet resource-intensive challenge. Traditional oversight was prone to human error. They partnered with AI Advocate to deploy a real-time, AI-powered computer vision system that autonomously identifies and flags safety hazards, preventing accidents before they happen.",
    metadata: {
      industry: "Construction & Real Estate",
      coreChallenge: "Job Site Safety, Risk Mitigation & OSHA Compliance",
      solution: "Edge AI, Computer Vision, Real-Time Alerting",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix: "The Strategic Imperative: Proactively Eliminate",
    accentWord: "Job Site Risk",
    points: [
      {
        heading: "Preventing Catastrophic Falls & Injuries",
        description:
          "The goal was to prevent fatal injuries by detecting hazards like workers near unprotected edges and those not wearing safety helmets (PPE).",
      },
      {
        heading: "Overcoming the Limitations of Manual Oversight",
        description:
          "The objective was to create a digital safety supervisor to monitor multiple locations simultaneously, eliminating human blind spots and delays.",
      },
      {
        heading: "Enabling Immediate, Actionable Intervention",
        description:
          "The system needed to deliver instant alerts to supervisors, enabling immediate intervention to prevent incidents from escalating.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "Safety is our number one priority, and AI Advocate has given us a powerful new tool to uphold that commitment. Their AI system is our tireless eye in the sky, identifying risks we might have missed. The reduction in incidents and the peace of mind it provides are invaluable to our operations.",
    title: "Head of Operations",
    company: "Major National Construction Firm",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for an",
    titleAccent: "Autonomous Digital Safety Supervisor",
    points: [
      {
        heading: "Deployed High-Performance Edge AI",
        description:
          "We deployed NVIDIA Jetson Xavier devices on-site for low-latency, real-time processing without cloud reliance, ensuring instant analysis in remote areas.",
      },
      {
        heading: "Custom-Trained Models on Real-World Site Data",
        description:
          "We developed a highly accurate YOLOv4 model, custom-trained on 10,000+ images from construction sites, ensuring reliability in diverse conditions.",
      },
      {
        heading: "Engineered a Real-Time Alerting System",
        description:
          "We built a configurable alert system that instantly notifies site supervisors with visual evidence upon detecting hazards, ensuring rapid response.",
      },
      {
        heading: "Designed for Scalable, Multi-Camera Deployment",
        description:
          "The system, powered by NVIDIA DeepStream, processes multiple video streams simultaneously, enabling easy expansion across job sites and cameras.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "A Safer Workplace and a Stronger Bottom Line",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "40% Reduction in Reported Safety Incidents",
        description:
          "Within the first six months of deployment, the client reported a 40% drop in on-site safety incidents and near-misses in the monitored zones, directly protecting their workforce.",
      },
      {
        title: "Fortified OSHA Compliance & Reduced Premiums",
        description:
          "The system provides a continuous, automated audit trail for PPE and safety compliance, significantly strengthening their legal and regulatory position and leading to more favorable insurance premiums.",
      },
      {
        title: "91% Accuracy in Detecting Unprotected Edges",
        description:
          "The AI models achieved exceptional accuracy in identifying the most critical fall risks, allowing for immediate remediation of hazardous areas before an accident could occur.",
      },
      {
        title: "Achieved 24/7 Proactive Hazard Monitoring",
        description:
          "The firm moved from a reactive, manual safety process to a proactive, automated system that provides constant oversight, ensuring a higher standard of safety across all projects.",
      },
    ],
  },
};
