import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApproachHero from "@/components/sections/approach/ApproachHero";
import MethodologySection from "@/components/sections/approach/MethodologySection";
import AINativeDifference from "@/components/sections/approach/AINativeDifference";
import EnterpriseStack from "@/components/sections/approach/EnterpriseStack";

export const metadata: Metadata = {
  title: "Our Approach | AI Advocate Holding",
  description:
    "How AI Advocate Holding builds AI-powered applications, automates workflows, and ships scalable SaaS platforms with QA built in from day one.",
  keywords: [
    "AI development approach",
    "workflow automation",
    "SaaS development",
    "QA automation",
    "OpenAI integration",
    "Claude API",
    "n8n automation",
    "production-ready AI",
  ],
  openGraph: {
    title: "Our Approach | AI Advocate Holding",
    description:
      "How we build AI-powered products, automate workflows, and ship production-ready SaaS with expert QA.",
    type: "website",
  },
};

export default function ApproachPage() {
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
