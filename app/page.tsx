import dynamic from "next/dynamic";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

const Differentiators = dynamic(
  () => import("@/components/sections/Differentiators"),
  { loading: () => <div className="min-h-[360px]" aria-hidden="true" /> }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" aria-hidden="true" />,
});

const ProcessSnapshot = dynamic(
  () => import("@/components/sections/ProcessSnapshot"),
  { loading: () => <div className="min-h-[320px]" aria-hidden="true" /> }
);

const FeaturedWorkSection = dynamic(
  () => import("@/components/sections/FeaturedWorkSection"),
  { loading: () => <div className="min-h-[400px]" aria-hidden="true" /> }
);

const ClientTrust = dynamic(
  () => import("@/components/sections/ClientTrust"),
  { loading: () => <div className="min-h-[280px]" aria-hidden="true" /> }
);

export default function HomePage() {
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Differentiators />
        <ProcessSnapshot />
        <FeaturedWorkSection />
        <ClientTrust />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
