import { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import LegalPageCtaBanner from "@/components/sections/legal/LegalPageCtaBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Advocate",
  description:
    "How AI Advocate collects, uses, and protects your personal information. A clear, human explanation of our data practices.",
  openGraph: {
    title: "Privacy Policy | AI Advocate",
    description:
      "How AI Advocate collects, uses, and protects your personal information.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <PrivacyPolicyContent />
        <LegalPageCtaBanner
          iconName="shield"
          eyebrow="AI Advocate · Privacy"
          headlineBefore="Questions about your"
          accentWord="data?"
          description="To exercise your choices, request data deletion, or report a concern, we're here to help. Replies are typically provided within 48 business hours."
          primaryHref="mailto:hello@aiadvocateholding.com"
          primaryLabel="Email Us"
          email="hello@aiadvocateholding.com"
          watermark="Privacy"
        />
      </main>
      <Footer hideCTA />
    </DeferredSmoothScroll>
  );
}