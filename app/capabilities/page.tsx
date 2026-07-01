import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApproachHero from "@/components/sections/approach/ApproachHero";
import MethodologySection from "@/components/sections/approach/MethodologySection";
import AINativeDifference from "@/components/sections/approach/AINativeDifference";
import EnterpriseStack from "@/components/sections/approach/EnterpriseStack";

export const metadata: Metadata = {
  title: "Capabilities | AI Advocate",
  description:
    "Explore AI Advocate's capabilities: AI Strategy & Advisory, Data Engineering, Machine Learning, Generative AI, AI Agents, AI Product Development, and MLOps.",
  keywords: [
    "AI strategy",
    "data engineering",
    "machine learning solutions",
    "generative AI",
    "AI agents",
    "workflow automation",
    "AI product development",
    "MLOps",
    "production-ready AI",
  ],
  openGraph: {
    title: "Capabilities | AI Advocate",
    description:
      "Applied AI, Data & Product Engineering — from strategy to production-ready systems.",
    type: "website",
  },
};

export default function CapabilitiesPage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <ApproachHero />
        <MethodologySection />
        <AINativeDifference />
        <EnterpriseStack />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
