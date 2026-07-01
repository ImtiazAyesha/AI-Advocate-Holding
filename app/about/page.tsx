import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import LeadershipSection from "@/components/sections/about/LeadershipSection";
import TeamModelSection from "@/components/sections/about/TeamModelSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";

export const metadata: Metadata = {
  title: "About Us | AI Advocate",
  description:
    "AI Advocate is an AI development and automation agency helping startups and businesses build AI-powered applications, automate workflows, and ship scalable SaaS platforms with expert QA.",
  keywords: [
    "AI Advocate",
    "AI development agency",
    "workflow automation",
    "SaaS development",
    "QA automation",
    "about AI Advocate",
    "AI company Dallas",
  ],
  openGraph: {
    title: "About Us | AI Advocate",
    description:
      "AI development, automation, and SaaS built production-ready with expert QA.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <AboutHero />
        <LeadershipSection />
        <TeamModelSection />
        <CoreValuesSection />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}

