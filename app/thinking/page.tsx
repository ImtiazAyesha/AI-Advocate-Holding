import type { Metadata } from "next";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThinkingHero from "@/components/sections/thinking/ThinkingHero";
import ArticleGrid from "@/components/sections/thinking/ArticleGrid";
import { getPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title:
    "Thinking - AI Advocate Holding | AI Engineering Insights for CTOs & Product Leaders",
  description:
    "Open-sourced methodologies, engineering deep-dives, and strategic frameworks from the AI Advocate Holding studio. Written for CTOs and Product Leaders who ship.",
  openGraph: {
    title: "Thinking - AI Advocate Holding",
    description:
      "AI engineering insights, product strategy, and hard-won lessons from building AI systems in production.",
    type: "website",
  },
};

export const revalidate = 60;

export default async function ThinkingPage() {
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
