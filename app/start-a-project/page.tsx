import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectSection from "@/components/sections/connect/ConnectSection";

export const metadata: Metadata = {
  title: "Start a Project | AI Advocate",
  description:
    "Ready to build production-ready AI systems? Start a conversation with AI Advocate. Tell us about your project and we'll get back to you.",
  openGraph: {
    title: "Start a Project | AI Advocate",
    description:
      "Tell us about your AI project. We build production-ready AI systems that turn complex data into measurable business outcomes.",
    type: "website",
  },
};

export default function StartAProjectPage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <ConnectSection />
      </main>
      <Footer hideCTA />
    </DeferredSmoothScroll>
  );
}
