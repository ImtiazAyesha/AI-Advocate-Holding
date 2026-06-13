import type { TextFocusedCaseStudyContent } from "@/lib/case-studies/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyStrategic from "./CaseStudyStrategic";
import CaseStudyTestimonial from "./CaseStudyTestimonial";
import CaseStudyBlueprint from "./CaseStudyBlueprint";
import CaseStudyResults from "./CaseStudyResults";
import WorkCtaBanner from "@/components/sections/work/WorkCtaBanner";

export default function TextFocusedCaseStudyTemplate({
  content,
}: {
  content: TextFocusedCaseStudyContent;
}) {
  return (
    <article className="bg-evren-warm-white">
      <Navbar />
      <CaseStudyHero content={content} />
      <CaseStudyStrategic content={content} />
      <CaseStudyTestimonial content={content} />
      <CaseStudyBlueprint content={content} />
      <CaseStudyResults content={content} />
      <WorkCtaBanner />
      <Footer hideCTA />
    </article>
  );
}
