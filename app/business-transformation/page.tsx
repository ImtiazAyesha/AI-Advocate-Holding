import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BTHero from "@/components/sections/business-transformation/BTHero";
import BTContextualizer from "@/components/sections/business-transformation/BTContextualizer";
import BTServiceAreas from "@/components/sections/business-transformation/BTServiceAreas";
import BTBridge from "@/components/sections/business-transformation/BTBridge";
import BTWhoItsFor from "@/components/sections/business-transformation/BTWhoItsFor";
import BTCtaBanner from "@/components/sections/business-transformation/BTCtaBanner";

export const metadata: Metadata = {
  title: "Business Transformation - AI Advocate",
  description:
    "Strategic clarity before you build. AI Advocate's Business Transformation practice helps organizations rethink, realign, and roadmap before a single line of code is written.",
  keywords: [
    "business transformation",
    "digital strategy consulting",
    "technology roadmap",
    "process optimization",
    "organizational change management",
    "AI strategy",
    "digital product studio",
    "AI Advocate",
  ],
  openGraph: {
    title: "Business Transformation - AI Advocate",
    description:
      "Strategic clarity before you build. AI Advocate's Business Transformation practice helps organizations rethink, realign, and roadmap before a single line of code is written.",
    type: "website",
  },
};

export default function BusinessTransformationPage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <BTHero />
        <BTContextualizer />
        <BTServiceAreas />
        <BTBridge />
        <BTWhoItsFor />
        <BTCtaBanner />
      </main>
      <Footer hideCTA />
    </DeferredSmoothScroll>
  );
}
