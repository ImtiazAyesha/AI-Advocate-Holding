import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * iSeedoc Telehealth — text-focused case study copy.
 * Add new case studies as sibling files and register in ./index.ts
 */
export const ISEEDOC_TELEHEALTH_CONTENT: TextFocusedCaseStudyContent = {
  slug: "iseedoc-telehealth",
  client: "iSeedoc",
  industry: "Healthcare",
  timeline: "8 Months",
  teamSize: "6 Specialists",
  hardMetric: "90% Faster Reports",
  heroImage: "/case studies/case 1.webp",
  hero: {
    headline:
      "Revolutionizing Healthcare Access: An AI-Powered Virtual Consultation Platform",
    accentWord: "Access",
    subheadline:
      "In today's complex healthcare landscape, virtual consultation platforms must balance patient access with provider efficiency. iSeedoc partnered with AI Advocate Holding to architect an end-to-end, HIPAA-compliant platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent, accessible, and secure healthcare.",
    metadata: {
      industry: "Healthcare & Telemedicine",
      coreChallenge: "Scaling Care Delivery & Ensuring HIPAA Compliance",
      solution:
        "Autonomous AI Agents, Secure Backend Architecture, Real-Time Communications",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix:
      "The Strategic Imperative: Engineer a Secure, Scalable, and Intelligent Care",
    accentWord: "Ecosystem",
    points: [
      {
        heading: "Fortifying Patient Data Security & Compliance",
        description:
          "The goal was to build a system with bank-grade security, ensuring HIPAA compliance and role-based access control to protect sensitive patient health information.",
      },
      {
        heading: "Automating Clinical & Administrative Workflows",
        description:
          "iSeedoc aimed to automate processes like appointment scheduling, medical report analysis, and follow-up notifications, allowing providers to focus more on patients.",
      },
      {
        heading: "Enabling Seamless Patient-Doctor Communication",
        description:
          "The platform needed a reliable, low-latency communication service for real-time chat and notifications, ensuring a seamless experience for patients and doctors.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Client Voice",
    titlePrefix: "What iSeedoc Leadership",
    accentWord: "Had to Say",
    label: "Client Testimonial",
    quote:
      "AI Advocate Holding delivered more than a backend, they delivered a strategic foundation for our entire business. Their expertise in secure, scalable architecture and their intelligent integration of AI has allowed us to operate with a level of efficiency and compliance we didn't think possible. They are true partners in innovation.",
    title: "Chief Technology Officer",
    company: "iSeedoc.com",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for an",
    titleAccent: "Enterprise-Grade Telehealth Backend",
    points: [
      {
        heading: "Architected a Secure, Role-Based Authentication Core",
        description:
          "We implemented a JWT-based authentication engine with role-based access (Patient, Doctor, Admin) to ensure strict data control and auditability.",
      },
      {
        heading: "Engineered a Scalable, Asynchronous Task Infrastructure",
        description:
          "Using FastAPI's background processing, we designed a non-blocking architecture to handle tasks like email notifications and AI report generation, keeping the platform responsive under load.",
      },
      {
        heading: "Integrated AI for Intelligent Document Processing",
        description:
          "We leveraged GPT-4 to automate medical report analysis, extracting insights from various file formats and generating structured PDF summaries, saving manual effort.",
      },
      {
        heading: "Deployed a Resilient, Real-Time Communication Service",
        description:
          "We built a WebSocket-based chat and notification system with automatic reconnection and user-specific tracking, ensuring reliable live consultations.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase: "A New Paradigm in Efficiency, Security, and Care Delivery",
    closingStatement:
      "By delivering this intelligent, secure platform, AI Advocate Holding provided iSeedoc with more than software—we delivered the foundational technology to scale their mission of making specialist healthcare accessible globally.",
    cards: [
      {
        title: "Achieved End-to-End HIPAA-Compliant Automation",
        description:
          "We delivered a fully automated, HIPAA-compliant workflow, reducing administrative overhead and minimizing human error in handling sensitive data.",
      },
      {
        title: "Reduced Report Analysis Time by 90%",
        description:
          "The AI-powered engine transformed a multi-hour process into minutes, enabling faster review of insights and more timely care delivery.",
      },
      {
        title: "Enabled Scalable, Conflict-Free Scheduling",
        description:
          "Integration with Google Calendar and dynamic slot-checking eliminated conflicts and automated scheduling, supporting iSeedoc's growing provider and patient base.",
      },
      {
        title: "A Future-Proof Platform for Enterprise Integration",
        description:
          "Built with OAuth2 compliance and a comprehensive API, the platform is ready for future integrations with EMR/EHR systems, ensuring long-term strategic value.",
      },
    ],
  },
};
