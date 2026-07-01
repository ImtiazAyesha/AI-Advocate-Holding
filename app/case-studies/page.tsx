import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkCaseStudies from "@/components/sections/work/WorkCaseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | AI Advocate",
  description:
    "Explore AI Advocate's case studies — production-ready AI systems, data platforms, and automation solutions delivering measurable business outcomes.",
  openGraph: {
    title: "Case Studies | AI Advocate",
    description:
      "Real AI systems. Measurable outcomes. See how we turn complex data into business results.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <WorkCaseStudies />
      </main>
      <Footer hideCTA />
    </DeferredSmoothScroll>
  );
}
