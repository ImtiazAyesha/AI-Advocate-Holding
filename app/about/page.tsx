import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import LeadershipSection from "@/components/sections/about/LeadershipSection";
import TeamModelSection from "@/components/sections/about/TeamModelSection";
import GlobalPresenceSection from "@/components/sections/about/GlobalPresenceSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";

export const metadata: Metadata = {
  title: "About Us - The People Behind AI Advocate Holding | AI Advocate Holding",
  description:
    "Meet the 50+ experts behind AI Advocate Holding. Three founders, two continents, one mission: building AI-powered products that feel effortlessly human. Learn about our leadership, our values, and our global presence.",
  keywords: [
    "AI Advocate Holding team",
    "AI consulting leadership",
    "enterprise AI experts",
    "AI agency founders",
    "about AI Advocate Holding",
    "AI company culture",
    "global AI team",
  ],
  openGraph: {
    title: "About Us - The People Behind AI Advocate Holding",
    description:
      "Meet the 50+ experts behind AI Advocate Holding. Three founders, two continents, one mission.",
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
        <GlobalPresenceSection />
        <CoreValuesSection />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}

