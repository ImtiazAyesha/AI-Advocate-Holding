import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";

/**
 * AI Advocate R&D — Human Activity Recognition — text-focused case study copy.
 */
export const EVREN_RD_HUMAN_ANALYSIS_CONTENT: TextFocusedCaseStudyContent = {
  slug: "evren-rd-human-analysis",
  client: "AI Advocate R&D",
  industry: "Deep Tech / Applied Research & Development",
  timeline: "18 Months",
  teamSize: "Internal R&D Team",
  hardMetric: "98.94% Accuracy",
  heroImage: "/case studies/case 10.webp",
  hero: {
    headline:
      "From Our R&D Lab to Published Research: Setting a New Benchmark in AI-Powered Human Analysis",
    accentWord: "Published",
    subheadline:
      "Standard Human Activity Recognition (HAR) systems face significant limitations in accuracy and adaptability. To solve this, our internal R&D team embarked on a project to push the boundaries of the field. The result was a novel two-stream deep learning architecture that fuses visual (RGB) and skeletal data, culminating in peer-reviewed research published in the acclaimed journal, Sensors. This work establishes a new state-of-the-art for understanding human actions with unparalleled nuance.",
    metadata: {
      industry: "Deep Tech / Applied Research & Development",
      coreChallenge: "Overcoming State-of-the-Art Limitations in HAR",
      solution: "Novel Two-Stream Network, Multimodal Fusion, (2+1)D CNNs",
    },
  },
  strategicImperative: {
    eyebrow: "The Challenge",
    titlePrefix:
      "The Strategic Imperative: Achieve Superior Accuracy by Fusing",
    accentWord: "Multimodal Data",
    points: [
      {
        heading: "Overcoming the Weaknesses of Single-Data Systems",
        description:
          "The challenge was to combine RGB video and skeletal data, leveraging both to create a more robust and accurate representation of human activity.",
      },
      {
        heading: "Efficiently Processing Spatiotemporal Video Data",
        description:
          "We needed an efficient method to process video data, capturing spatial features and temporal evolution without the high computational cost of traditional 3D-CNNs.",
      },
      {
        heading: "Extracting Meaningful Patterns from Skeletal Data",
        description:
          "The objective was to develop an LSTM network capable of understanding complex temporal dynamics in skeletal data, using features like joint angles and distances.",
      },
    ],
  },
  testimonial: {
    eyebrow: "Partner Voice",
    titlePrefix: "What a Technology Partner",
    accentWord: "Had to Say",
    label: "Partner Testimonial",
    quote:
      "In today's market, true innovation requires a partner who operates at the bleeding edge. AI Advocate's published research in Human Activity Recognition is a testament to their deep technical expertise. It is this commitment to fundamental R&D that gives us the confidence to partner with them on our most ambitious and complex AI initiatives.",
    title: "Chief AI Officer",
    company: "Fortune 500 Technology Partner",
  },
  technicalBlueprint: {
    eyebrow: "How We Built It",
    titlePrefix: "Our Blueprint for a",
    titleAccent: "State-of-the-Art Recognition Engine",
    points: [
      {
        heading: "Designed a Novel Two-Stream Fused Architecture",
        description:
          "Engineered a dual-pathway network, using (2+1)D CNN for RGB video and Bidirectional LSTM for skeletal data to capture motion dynamics.",
      },
      {
        heading: "Implemented Advanced Feature Engineering & Selection",
        description:
          "Engineered features based on distances and angles between 17 keypoints, and used Forward Feature Selection to enhance model efficiency and accuracy.",
      },
      {
        heading: "Developed a Probabilistic Fusion Mechanism",
        description:
          "Combined outputs from both streams using fusion techniques, improving prediction accuracy and reliability over individual streams.",
      },
      {
        heading: "Rigorously Validated Against Academic Benchmarks",
        description:
          "The model was tested on the UTD-MHAD dataset, surpassing existing state-of-the-art methods in academic benchmarking.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Measurable Impact",
    title: "The Transformational Outcome:",
    accentPhrase:
      "A New Performance Benchmark and a Foundation for Innovation",
    closingStatement:
      "These results demonstrate the transformative power of AI when implemented strategically and thoughtfully.",
    cards: [
      {
        title: "Achieved 98.94% Recognition Accuracy",
        description:
          "Our two-stream architecture reached 98.94% accuracy on the UTD-MHAD benchmark, surpassing previous state-of-the-art models.",
      },
      {
        title: "Authored a Peer-Reviewed Publication in Sensors",
        description:
          "The novelty of our methodology was validated by the publication of our research in a prestigious, international peer-reviewed journal.",
      },
      {
        title: "Created a Reusable Framework for Future Applications",
        description:
          "The R&D effort produced a robust framework that AI Advocate can now use to address real-world challenges in various industries.",
      },
      {
        title: "Cemented AI Advocate as a Leader in Applied AI Research",
        description:
          "This project highlights our commitment to advancing AI and solving industry challenges, solidifying AI Advocate's leadership in applied research.",
      },
    ],
  },
};
