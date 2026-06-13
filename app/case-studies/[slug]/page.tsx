import TextFocusedCaseStudyTemplate from "@/components/sections/work/text-focused/TextFocusedCaseStudyTemplate";
import {
  getTextFocusedCaseStudy,
  getTextFocusedSlugs,
} from "@/content/case-studies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getTextFocusedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getTextFocusedCaseStudy(slug);

  if (!content) {
    return { title: "Case Study Not Found | AI Advocate Holding" };
  }

  return {
    title: `${content.client} - ${content.hero.headline} | AI Advocate Holding Case Study`,
    description: content.hero.subheadline,
    openGraph: {
      title: `${content.client} Case Study - ${content.hardMetric}`,
      description: content.hero.subheadline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getTextFocusedCaseStudy(slug);

  if (!content) {
    notFound();
  }

  return <TextFocusedCaseStudyTemplate content={content} />;
}
