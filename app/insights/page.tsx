import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThinkingHero from "@/components/sections/thinking/ThinkingHero";
import ArticleGrid from "@/components/sections/thinking/ArticleGrid";
import { getPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Insights | AI Advocate",
  description:
    "AI engineering insights, product strategy, and hard-won lessons from building production-ready AI systems. Written for CTOs, founders, and product teams.",
  openGraph: {
    title: "Insights | AI Advocate",
    description:
      "Practical AI guides, technical deep-dives, and real-world lessons from building AI systems that deliver measurable business outcomes.",
    type: "website",
  },
};

export const revalidate = 60;

export default async function InsightsPage() {
  const initialPosts = await getPosts();

  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <ThinkingHero />
        <ArticleGrid initialPosts={initialPosts} />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
