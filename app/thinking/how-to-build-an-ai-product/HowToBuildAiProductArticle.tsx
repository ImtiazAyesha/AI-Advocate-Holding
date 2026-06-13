"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import ArticleContent from "@/components/sections/thinking/ArticleContent";
import {
  ArticleBodyImage,
  ArticleH2,
  generateArticleHeadingId,
} from "./article-helpers";

const IMAGE_BASE = "/blog-images/how-to-build-an-ai-product";

const TABLE_OF_CONTENTS = [
  {
    text: "What Does It Take to Build an AI Product?",
    id: generateArticleHeadingId(
      "What Does It Take to Build an AI Product?"
    ),
  },
  {
    text: "Step 1: Define the Problem With Precision",
    id: generateArticleHeadingId("Step 1: Define the Problem With Precision"),
  },
  {
    text: "Step 2: Audit Your Data Before You Build",
    id: generateArticleHeadingId("Step 2: Audit Your Data Before You Build"),
  },
  {
    text: "Step 3: Choose Your AI Architecture Based on the Problem",
    id: generateArticleHeadingId(
      "Step 3: Choose Your AI Architecture Based on the Problem"
    ),
  },
  {
    text: "Step 4: Build With AI Native, Not AI Retrofitted",
    id: generateArticleHeadingId(
      "Step 4: Build With AI Native, Not AI Retrofitted"
    ),
  },
  {
    text: "Step 5: Scale With Your Team's Ownership in Mind",
    id: generateArticleHeadingId(
      "Step 5: Scale With Your Team's Ownership in Mind"
    ),
  },
  {
    text: "Here Is the Bottom Line",
    id: generateArticleHeadingId("Here Is the Bottom Line"),
  },
  {
    text: "Frequently Asked Questions",
    id: generateArticleHeadingId("Frequently Asked Questions"),
  },
];

type HowToBuildAiProductArticleProps = {
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

export default function HowToBuildAiProductArticle({
  article,
  relatedArticles,
}: HowToBuildAiProductArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={5}
      heroImageSrc={`${IMAGE_BASE}/hero-usa.webp`}
      heroImageAlt="5-step framework for building an AI product from discovery to scale, AI Advocate Holding"
    >
      <p>
        You have an AI idea. You have budget. You have a timeline. What you
        might not have is a clear answer to three questions: What exact
        decision will AI improve? What does success look like in a number you
        can measure? And what does it cost if the AI gets it wrong?
      </p>
      <p>
        Most AI products fail before a single line of code is written. Not
        because the technology does not work. Because teams skip the thinking
        that determines whether it should be built at all.
      </p>
      <p>
        Here is the five-step process we use at AI Advocate Holding across 50+ AI products
        delivered, to go from idea to working, intelligent product.
      </p>

      <ArticleH2>What Does It Take to Build an AI Product?</ArticleH2>

      <p>
        Building an AI product requires aligning four things before touching a
        line of code: a precisely defined problem, measurable success criteria,
        validated data, and an architecture that places intelligence at the
        foundation rather than bolting it on later. Skip any one of these and
        you will rebuild. Most teams do.
      </p>

      <ArticleH2>Step 1: Define the Problem With Precision</ArticleH2>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/comparison-usa.webp`}
        alt="Side-by-side comparison of vague versus precise AI product problem definitions"
      />

      <p>
        Start with a question that sounds simple but almost no one answers
        honestly. What exact decision or task will AI improve, and what does
        &quot;better&quot; look like as a number?
      </p>
      <p>
        &quot;Faster customer service&quot; is not a problem definition.
        &quot;Reduce first-response time from four hours to under 15 minutes
        for Tier 1 support tickets&quot; is. If your answer is vague, you are
        not ready to build.
      </p>
      <p>
        We have seen teams invest six months building before discovering their
        use case was solvable with a spreadsheet. That is not a technology
        failure. It is a scoping failure, and it happens before the first
        sprint.{" "}
        <Link href="/approach">
          See how we run product discovery
        </Link>
        .
      </p>

      <ArticleH2>Step 2: Audit Your Data Before You Build</ArticleH2>

      <p>
        AI needs data. More specifically, AI needs the right data, in usable
        condition, with sufficient volume for the use case.
      </p>
      <p>
        Here is what most guides do not tell you: data quality matters far more
        than data quantity. A Houston-based logistics company we worked with had
        18 months of shipment records in three different formats across two
        legacy systems. The AI architecture worked. The data integration took
        twice as long as expected.
      </p>
      <p>
        Do a data audit in discovery. Answer: What data exists? What is its
        quality? What is missing? Can it be anonymized for compliance under
        HIPAA or SOC 2 if required? A two-week data audit in the Discover phase
        prevents a four-month delay during Build.
      </p>

      <ArticleH2>
        Step 3: Choose Your AI Architecture Based on the Problem
      </ArticleH2>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/architecture-usa.webp`}
        alt="Decision framework for choosing between LLM and classical ML for AI products"
      />

      <p>
        This is where most teams make the costliest mistake. They choose a
        technology first and then design the product around it. Design the
        product first and let the problem determine the technology.
      </p>
      <p>
        For text-based products including chatbots, document processing, and
        intelligent search,{" "}
        <Link href="/approach">
          LLM integration using OpenAI GPT-4 or Anthropic Claude
        </Link>{" "}
        is typically the fastest, most capable starting point. You do not need
        to train a model from scratch for most text use cases.
      </p>
      <p>
        For structured data problems including demand forecasting, fraud
        detection, and predictive maintenance, classical machine learning with
        Python and Scikit-learn often outperforms deep learning at a fraction
        of the cost.{" "}
        <Link href="/approach">See our machine learning approach</Link>.
      </p>
      <p>
        Think of architecture selection like choosing an orbital trajectory. Get
        the angle right at launch and you expend almost no fuel staying on
        course. Choose wrong and every correction costs exponentially more. Not
        every AI product needs a large language model. Knowing the difference
        saves months.
      </p>

      <ArticleH2>Step 4: Build With AI Native, Not AI Retrofitted</ArticleH2>

      <p>
        This is the principle that separates AI products that deliver ROI from
        those that do not.
      </p>
      <p>
        When AI is designed into the product from the first sprint, it shapes the
        data model, the UX, the API structure, and the backend architecture.
        When it is added later, it fights every decision that came before it.
        According to McKinsey&apos;s 2024 State of AI Report, only 23% of AI
        initiatives deliver meaningful ROI. The products that succeed are almost
        always those where AI requirements were part of architecture from day
        one.
      </p>
      <p>
        AI is not a feature we add at the end. It is woven into our thinking
        from day one. Every sprint begins with AI requirements alongside feature
        requirements.{" "}
        <Link href="/work">See our AI agent development</Link>.
      </p>
      <p>
        That is not a philosophy. It is the difference between a product that
        works and one that spends its entire life fighting its own architecture.
      </p>

      <ArticleH2>Step 5: Scale With Your Team&apos;s Ownership in Mind</ArticleH2>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/stats-usa.webp`}
        alt="Key statistics on AI product development ROI, timelines, and investment"
      />

      <p>
        A product that launches and cannot be maintained by your team is a
        liability, not an asset.
      </p>
      <p>
        Model performance degrades when production data drifts from training
        data. User behavior evolves. Business requirements change. Your team
        needs to own those changes without calling anyone back.
      </p>
      <p>
        Our success is measured by your independence. When we complete an
        engagement, your team should own, evolve, and operate the product
        without calling us back. That means knowledge transfer sessions,
        technical documentation, runbooks, and capability development built
        into every project from the beginning.
      </p>
      <p>
        A Singapore-based e-commerce company we worked with launched a
        recommendation engine trained on 2 million product interactions using
        Python and AWS SageMaker. Their internal team was running independent
        model updates within 90 days of launch. That is the goal. Not dependency.
        Independence.{" "}
        <Link href="/work">See client outcomes</Link>.
      </p>

      <div className="bg-evren-peach-light text-evren-navy rounded-2xl p-6 md:p-8 my-10 font-body text-[15px] md:text-base leading-relaxed not-prose">
        <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3 !mb-3">
          YOU HAVE THE VISION. WE HAVE THE TEAM.
        </p>
        <p className="!mb-4">
          Book a free 30-minute discovery call and tell us what you are
          building.
        </p>
        <p className="!mb-0">
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 font-semibold underline hover:text-evren-peach"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </Link>
        </p>
      </div>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/team-usa.webp`}
        alt="Collaborative AI product development team, Discover Build Scale process"
      />

      <ArticleH2>Here Is the Bottom Line</ArticleH2>

      <p>
        Building an AI product is not complicated. But it requires doing the
        hard thinking before the first line of code: define the problem
        precisely, audit your data, choose architecture based on the problem
        and not the hype, build with AI native from sprint one, and plan for
        your team&apos;s independence before you launch.
      </p>
      <p>
        At AI Advocate Holding, we partner with businesses of every size to build
        intelligent, human-centered digital products that solve real problems and
        create lasting value. When we hand a product over, your team can own it,
        evolve it, and grow it without needing us in the room.
      </p>
      <p>
        Ready to build something intelligent?{" "}
        <Link href="/connect">Start here</Link>.
      </p>

      <div className="bg-evren-navy rounded-2xl p-8 md:p-10 my-12 not-prose relative overflow-hidden">
        <div
          className="absolute -top-[30%] -right-[15%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(136, 201, 179, 0.2) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <p className="font-heading font-bold text-xl md:text-2xl !text-white !mb-3 relative z-10">
          Have an idea? Let us talk.
        </p>
        <p className="font-body !text-white/70 text-[15px] md:text-base leading-relaxed !mb-6 relative z-10">
          Book a free consultation. Tell us what you are building and we will
          tell you honestly if we are the right team to build it with you.
        </p>
        <Link
          href="/connect"
          className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-evren-peach !text-evren-navy font-heading font-semibold text-sm hover:shadow-warm transition-shadow"
        >
          Book a Free Consultation
          <ArrowRight size={16} />
        </Link>
      </div>

      <ArticleH2>Frequently Asked Questions</ArticleH2>

      <HowToBuildAiProductFaqAccordion />
    </ArticleContent>
  );
}

const FAQ_ITEMS = [
  {
    question: "How long does it take to build an AI product?",
    answer:
      "Most AI products move from discovery to working MVP in 10 to 16 weeks when the use case is validated upfront and AI is integrated from sprint one. Skipping discovery typically adds two to four months of rework. A well-scoped AI product with a clear success metric can launch faster than founders expect when architecture decisions are made early.",
  },
  {
    question: "How much does it cost to build an AI product?",
    answer:
      "AI product development ranges from $50K for a focused, well-defined MVP to $200K or more for enterprise platforms with complex AI architecture. Main cost drivers are scope, data quality and complexity, compliance requirements like HIPAA or SOC 2, and whether AI infrastructure is built from scratch or integrated into existing systems.",
  },
  {
    question: "Do I need a large dataset to build an AI product?",
    answer:
      "Not always. Many AI products, especially those using LLM integration with OpenAI GPT-4 or Anthropic Claude via API, require minimal proprietary training data at launch. Data quality matters far more than volume for most use cases. A discovery phase data audit identifies what you have, what you need, and what can be addressed through fine-tuning or prompt engineering.",
  },
  {
    question: "Should I use GPT-4, Claude, or build a custom model?",
    answer:
      "For most text-based use cases, GPT-4 or Anthropic Claude via API is the faster, cheaper, and more capable starting point. Custom model training makes sense with highly specialized domains, unique proprietary data, or compliance requirements mandating on-premises deployment. A discovery sprint determines which path fits your specific product before development begins.",
  },
  {
    question: "What is the most common reason AI products fail to deliver ROI?",
    answer:
      "They skip discovery. Teams build before confirming the AI use case is solvable with available data, before defining measurable success metrics, and before designing compliance into architecture. According to Gartner, 30% of generative AI projects are abandoned after proof of concept. The technology almost never fails. The strategy does.",
  },
] as const;

function HowToBuildAiProductFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="not-prose space-y-3 my-8">
      {FAQ_ITEMS.map((item, index) => {
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
              <span className="text-[17px] leading-snug pr-2">
                {item.question}
              </span>
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
