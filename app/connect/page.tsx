import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectSection from "@/components/sections/connect/ConnectSection";

// ═══════════════════════════════════════════════════════════════════════
//  /connect — The Conversion Page
//  Where qualified leads become strategy calls.
// ═══════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  title: "Connect - AI Advocate Holding | Book a Strategy Call",
  description:
    "Start a conversation with the AI Advocate Holding studio. Book a strategy call or tell us about your AI product vision. Offices in Houston, TX and Dubai, UAE.",
  openGraph: {
    title: "Connect with AI Advocate Holding",
    description:
      "Book a strategy call or share your AI product vision with our team.",
    type: "website",
  },
};

export default function ConnectPage() {
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
