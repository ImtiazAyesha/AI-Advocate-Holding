import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkCaseStudies from "@/components/sections/work/WorkCaseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Real Products, Measurable Impact | AI Advocate Holding",
  description:
    "Explore the portfolio of AI-powered enterprise products built by AI Advocate Holding. From healthcare intelligence to fintech compliance engines see the ROI we deliver.",
  openGraph: {
    title: "Our Work - Real Products, Measurable Impact | AI Advocate Holding",
    description:
      "Explore the portfolio of AI-powered enterprise products built by AI Advocate Holding.",
    type: "website",
  },
};

export default function WorkPage() {
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
