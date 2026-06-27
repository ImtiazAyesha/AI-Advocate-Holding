import { type Metadata } from "next";
import Script from "next/script";
import DeferredSmoothScroll from "@/components/DeferredSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkflowAutomationArticle from "./WorkflowAutomationArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Workflow Automation with n8n, Zapier, and Make: Which Tool Fits Your Business",
  description: "Compare n8n, Zapier, and Make for workflow automation. Learn which tool fits your business size, budget, and technical requirements.",
  keywords: ["workflow automation", "n8n", "Zapier", "Make", "automation tools", "business automation", "no-code automation"],
  openGraph: {
    title: "Workflow Automation with n8n, Zapier, and Make",
    description: "Compare n8n, Zapier, and Make for workflow automation.",
    url: "https://www.aiadvocateholding.com/thinking/workflow-automation-guide",
    type: "article",
    images: [{ url: "/blog-images/workflow-automation-guide/hero.svg", width: 1200, height: 628 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aiadvocateholding.com/thinking/workflow-automation-guide" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Workflow Automation with n8n, Zapier, and Make: Which Tool Fits Your Business",
  description: "Compare n8n, Zapier, and Make for workflow automation.",
  datePublished: "2026-06-18",
  author: { "@type": "Organization", name: "AI Advocate Team" },
  publisher: { "@type": "Organization", name: "AI Advocate Holding", url: "https://www.aiadvocateholding.com" },
};

export default async function WorkflowAutomationPage() {
  const article = (await getPostBySlug("workflow-automation-guide")) ?? {
    title: "Workflow Automation with n8n, Zapier, and Make: Which Tool Fits Your Business",
    publishedAt: "2026-06-18T00:00:00.000Z",
    author: { name: "AI Advocate Team" },
    categories: [{ title: "Automation" }],
    mainImage: { asset: { url: "/blog-images/workflow-automation-guide/hero.svg" }, alt: "Workflow automation tools comparison" },
  };
  const relatedArticles = await getRelatedPosts("workflow-automation-guide", article.categories?.[0]?.title);
  return (
    <DeferredSmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <Script id="blog-schema-workflow" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <WorkflowAutomationArticle article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </DeferredSmoothScroll>
  );
}
