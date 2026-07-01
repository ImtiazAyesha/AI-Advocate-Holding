import { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsOfServiceContent from "./TermsOfServiceContent";
import LegalPageCtaBanner from "@/components/sections/legal/LegalPageCtaBanner";

export const metadata: Metadata = {
  title: "Terms of Service | AI Advocate",
  description:
    "The ground rules for using the AI Advocate website and engaging us as your digital product studio. Clear, honest, and human.",
  openGraph: {
    title: "Terms of Service | AI Advocate",
    description:
      "The ground rules for using the AI Advocate website and our services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <TermsOfServiceContent />
        <LegalPageCtaBanner
          iconName="scale"
          eyebrow="AI Advocate · Legal"
          headlineBefore="Need legal"
          accentWord="clarity?"
          description="If you have questions or require official communication regarding these terms, send us a brief message and our team will get back to you."
          primaryHref="mailto:hello@aiadvocateholding.com"
          primaryLabel="Email Us"
          email="hello@aiadvocateholding.com"
          watermark="Legal"
        />
      </main>
      <Footer hideCTA />
    </DeferredSmoothScroll>
  );
}
