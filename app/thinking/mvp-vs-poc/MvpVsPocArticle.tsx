"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ArticleContent from "@/components/sections/thinking/ArticleContent";
import {
  ArticleBodyImage,
  ArticleH2,
  generateArticleHeadingId,
} from "./article-helpers";

const TABLE_OF_CONTENTS = [
  {
    text: "What is the Difference Between MVP and POC?",
    id: generateArticleHeadingId(
      "What is the Difference Between MVP and POC?"
    ),
  },
  {
    text: "When to Run a POC First",
    id: generateArticleHeadingId("When to Run a POC First"),
  },
  {
    text: "When to Go Straight to MVP",
    id: generateArticleHeadingId("When to Go Straight to MVP"),
  },
  {
    text: "The Sequence That Actually Works",
    id: generateArticleHeadingId("The Sequence That Actually Works"),
  },
  {
    text: "What Most Guides Don't Tell You",
    id: generateArticleHeadingId("What Most Guides Don't Tell You"),
  },
  {
    text: "Frequently Asked Questions",
    id: generateArticleHeadingId("Frequently Asked Questions"),
  },
];

type MvpVsPocArticleProps = {
  article: {
    title: string;
    publishedAt?: string;
    author?: { name?: string };
    categories?: { title: string }[];
    mainImage?: {
      asset?: { url?: string };
      alt?: string;
    };
  };
  relatedArticles: {
    title: string;
    slug: { current: string };
    publishedAt: string;
  }[];
};

export default function MvpVsPocArticle({
  article,
  relatedArticles,
}: MvpVsPocArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={11}
      heroImageSrc="/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-hero-usa.webp"
      heroImageAlt="MVP vs POC comparison diagram showing two validation phases side by side with timelines for AI product development"
    >
      <p>
        You have an AI idea. You&apos;re excited about it. But committing
        $150,000 to development without testing first is a risk most founders
        can&apos;t afford to take twice. That&apos;s where most teams get stuck:
        should you run a proof of concept, or jump straight to an MVP?
      </p>
      <p>
        Too many teams skip validation entirely. They build for eight months,
        launch to silence, and spend another four months rebuilding what they
        should have tested in week three. At AI Advocate Holding, we&apos;ve seen this
        pattern more times than we&apos;d like to count. The good news is
        it&apos;s avoidable. And it starts with understanding what a POC and
        MVP are actually for.
      </p>

      <ArticleH2>What is the Difference Between MVP and POC?</ArticleH2>

      <ArticleBodyImage
        src="/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-comparison.webp"
        alt="Side-by-side comparison of Proof of Concept and Minimum Viable Product showing timeline, cost, goal, and success metrics"
      />

      <p>
        A POC (Proof of Concept) is a time-limited, risk-mitigation experiment
        designed to answer one question: &apos;Is this technically feasible with
        our data?&apos; It runs 4-6 weeks, uses minimal resources, and proves
        or disproves a single assumption. An MVP (Minimum Viable Product) is a
        market-ready product designed to answer: &apos;Do customers actually want
        this?&apos; It runs 3-6 months, includes real users, and validates the
        business model, not just the technology.
      </p>
      <p>
        That&apos;s not a subtle distinction. It&apos;s the difference between a
        product that works and one that&apos;s permanently fighting its own
        architecture.
      </p>

      <ArticleH2>When to Run a POC First</ArticleH2>

      <p>
        Run a POC when your biggest risk is technical. That means you don&apos;t
        yet know if your AI approach will actually work with your specific data,
        your infrastructure, or your compliance constraints.
      </p>

      <h3>Signs you need a POC:</h3>
      <ul>
        <li>
          You&apos;re planning to use an LLM (GPT-4, Anthropic Claude) on
          proprietary or unstructured data
        </li>
        <li>
          Your use case requires a performance benchmark you haven&apos;t proven
          (95% accuracy, sub-200ms latency)
        </li>
        <li>
          You&apos;re uncertain whether to fine-tune a model or use prompt
          engineering at scale
        </li>
        <li>
          Regulatory requirements (HIPAA, SOC 2) may affect architecture
          decisions
        </li>
      </ul>

      <p>
        According to Gartner, 30% of generative AI projects are abandoned after
        proof of concept. That number isn&apos;t a failure of technology.
        It&apos;s a failure to ask the right question before committing to
        build.
      </p>
      <p>
        A Houston-based logistics company we worked with had 18 months of
        unstructured shipment data stored on AWS S3. They wanted a demand
        forecasting model. Before building anything, we ran a 5-week POC. The
        finding: their data quality issues would have caused the MVP to
        underperform by roughly 40%. We caught it in week five, not month nine.
      </p>

      <ArticleH2>When to Go Straight to MVP</ArticleH2>

      <p>
        Run an MVP when your biggest risk is market-based. Technical feasibility
        is already proven, or your use case doesn&apos;t require novel AI
        architecture. Your question isn&apos;t &apos;can we build this&apos; but
        &apos;will anyone pay for it.&apos;
      </p>
      <p>
        This is where most product leaders get stuck. They treat every AI product
        as technically uncertain when many are simply LLM integrations via API.
        For text-based products using OpenAI GPT or Anthropic Claude, the API
        call is not your risk. The business model is.
      </p>
      <p>
        An MVP includes real users, measures business metrics, and validates your
        assumptions about customer behaviour. Think of each sprint as a trajectory
        correction. You&apos;re not launching blindly into the universe;
        you&apos;re adjusting course with real signal at every stage.
      </p>

      <ArticleBodyImage
        src="/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-process-flow.webp"
        alt="Process flow diagram showing POC feasibility gate leading to MVP development then scaling phase for AI products"
      />

      <div className="bg-evren-peach-light text-evren-navy rounded-2xl p-6 md:p-8 my-10 font-body text-[15px] md:text-base leading-relaxed not-prose">
        <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3 !mb-3">
          AI Advocate Holding - INTELLIGENT BY DESIGN
        </p>
        <p className="!mb-4">
          AI is not a feature we add at the end. It is woven into our thinking
          from day one, shaping how we discover, build, and scale every product.
        </p>
        <p className="!mb-0">
          Building an AI product?{" "}
          <Link
            href="/connect"
            className="font-semibold underline hover:text-evren-peach"
          >
            Book a free consultation
          </Link>
        </p>
      </div>

      <ArticleH2>The Sequence That Actually Works</ArticleH2>

      <p>
        Not every AI product needs both. But many high-risk products benefit from
        running them sequentially. POC first to answer &apos;can we?&apos; and MVP
        second to answer &apos;should we and will anyone care?&apos;
      </p>
      <p>Here&apos;s what that looks like in practice:</p>

      <h3>Phase 1 - POC (Weeks 1-6, $10K-30K)</h3>
      <ul>
        <li>
          Define one hypothesis: &apos;GPT-4 can classify customer support tickets
          into 12 categories with 90%+ accuracy using our 6-month dataset&apos;
        </li>
        <li>
          Test with minimal infrastructure: Python, FastAPI, one developer, your
          actual data
        </li>
        <li>Pass/fail decision: Did we prove or disprove the hypothesis?</li>
      </ul>

      <h3>Phase 2 - MVP (Months 2-8, $50K-200K)</h3>
      <ul>
        <li>Design the user experience around a proven technical foundation</li>
        <li>
          Build with LLM integration (OpenAI GPT or Anthropic Claude) baked into
          the architecture from sprint one
        </li>
        <li>
          Release to a small user group, measure retention and task completion,
          not vanity metrics
        </li>
      </ul>

      <ArticleBodyImage
        src="/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-stats.webp"
        alt="Statistics infographic showing 30% of AI POCs abandoned (Gartner), 23% deliver ROI (McKinsey), 60% fewer rebuilds with POC-first approach"
      />

      <p>
        Our analysis of 50+ AI product launches shows teams that run a focused
        POC before MVP reduce rebuild rates by 60%. That&apos;s not philosophy.
        It&apos;s a repeatable pattern.
      </p>

      <ArticleH2>What Most Guides Don&apos;t Tell You</ArticleH2>

      <p>
        Not every AI product needs a large language model. And not every LLM use
        case needs a POC. Here&apos;s the honest version: if you&apos;re integrating
        Claude or GPT-4 via API for a well-understood task (summarisation,
        classification, drafting), you probably don&apos;t need six weeks of POC. You
        need a strong discovery sprint and a well-scoped MVP.
      </p>
      <p>
        A fintech team we worked with in London skipped a formal POC because their
        use case (AI-generated quarterly summaries from structured financial data)
        had been proven by three similar products in the market. We moved straight
        to MVP. The product launched in 14 weeks.
      </p>
      <p>
        The decision isn&apos;t about following a rule. It&apos;s about identifying
        your biggest risk and designing the shortest path to resolving it.
      </p>

      <ArticleBodyImage
        src="/blog-images/mvp-vs-poc/evrenai-mvp-vs-poc-llm-decision.webp"
        alt="Decision framework diagram showing when to use LLM API (GPT-4, Claude) versus custom model training for AI products"
      />

      <ArticleH2>Frequently Asked Questions</ArticleH2>

      <MvpVsPocFaqAccordion />

      <div className="bg-evren-warm-white rounded-2xl p-6 md:p-8 my-10 italic border border-evren-light-gray/40 not-prose">
        <p className="!mb-0">
          At AI Advocate Holding, we partner with businesses of every size to build intelligent,
          human-centered digital products that solve real problems and create lasting
          value. Our success is measured by your independence: when we hand a product
          over, your team can own it, evolve it, and grow it without needing to call us
          back. If you have an AI idea and want to know whether to start with a POC or
          MVP, let&apos;s talk.
        </p>
      </div>
    </ArticleContent>
  );
}

const MVP_FAQ_ITEMS = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most AI products move from discovery to working MVP in 10-16 weeks when the use case is validated upfront and AI is integrated from sprint one. Skipping discovery typically adds 2-4 months of rework. A well-scoped AI product with clear success metrics can launch faster than most founders expect when architecture decisions are made early.",
  },
  {
    question: "How much does a POC cost for an AI product?",
    answer:
      "A focused AI POC typically costs $10K-30K depending on data complexity and scope. An MVP runs $50K-200K+ depending on features, compliance requirements like HIPAA or SOC 2, and whether AI infrastructure is built from scratch or integrated into existing systems. POC is cheap insurance before committing to MVP budget.",
  },
  {
    question: "Do I need a large dataset to build an AI product?",
    answer:
      "Not always. Many AI products, especially those using LLM integration with OpenAI GPT or Anthropic Claude via API, require minimal proprietary training data at launch. Data quality matters far more than volume. A discovery phase data audit identifies what you have, what you need, and what can be addressed through fine-tuning or prompt engineering.",
  },
  {
    question: "Should I use GPT-4 or build a custom AI model?",
    answer:
      "For most text-based use cases, GPT-4 or Anthropic Claude via API is the faster, cheaper, and more capable starting point. Custom model training makes sense for highly specialised domains, unique proprietary data, or compliance requirements like HIPAA mandating on-premises deployment. A discovery sprint clarifies which path fits your product before development begins.",
  },
  {
    question: "What is the most common reason AI products fail to deliver ROI?",
    answer:
      "They skip validation. Teams build before confirming the AI use case is solvable with available data, before defining measurable success metrics, before designing compliance into architecture. According to Gartner, 30% of generative AI projects are abandoned after proof of concept. The technology almost never fails. The strategy does.",
  },
] as const;

function MvpVsPocFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="not-prose space-y-3 my-8">
      {MVP_FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="rounded-2xl border border-evren-light-gray/60 bg-white overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-heading font-semibold text-evren-charcoal hover:text-evren-navy transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-[17px] leading-snug pr-2">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 text-evren-medium-gray"
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 font-body text-[17px] leading-[1.85] text-evren-charcoal/90">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
