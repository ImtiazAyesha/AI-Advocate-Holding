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

const IMAGE_BASE =
  "/blog-images/build-vs-buy-ai-cto-decision-framework";

const TABLE_OF_CONTENTS = [
  {
    text: "What Is the Difference Between Building and Buying AI?",
    id: generateArticleHeadingId(
      "What Is the Difference Between Building and Buying AI?"
    ),
  },
  {
    text: "The 4 Factors That Decide Every Build vs Buy Choice",
    id: generateArticleHeadingId(
      "The 4 Factors That Decide Every Build vs Buy Choice"
    ),
  },
  {
    text: "When Building Custom AI Makes Sense",
    id: generateArticleHeadingId("When Building Custom AI Makes Sense"),
  },
  {
    text: "When Buying AI Wins",
    id: generateArticleHeadingId("When Buying AI Wins"),
  },
  {
    text: "The LLM Exception Most CTOs Miss",
    id: generateArticleHeadingId("The LLM Exception Most CTOs Miss"),
  },
  {
    text: "A Decision Framework Your Team Can Use This Quarter",
    id: generateArticleHeadingId(
      "A Decision Framework Your Team Can Use This Quarter"
    ),
  },
  {
    text: "Frequently Asked Questions",
    id: generateArticleHeadingId("Frequently Asked Questions"),
  },
];

type BuildVsBuyAiArticleProps = {
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

export default function BuildVsBuyAiArticle({
  article,
  relatedArticles,
}: BuildVsBuyAiArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={5}
      heroImageSrc={`${IMAGE_BASE}/hero-usa.webp`}
      heroImageAlt="Build vs buy AI decision framework showing branching choice between custom AI and vendor APIs, 2026 CTO guide by AI Advocate Holding"
    >
      <p>
        Your board just approved the AI budget. Your engineers are ready. But
        before you commit $300K to development, one question will determine
        whether this project succeeds or becomes a six-figure lesson in avoidable
        mistakes: should you build this AI capability yourself, or buy it?
      </p>
      <p>
        Too many teams treat this as a philosophical debate. It isn&apos;t.
        It&apos;s a four-variable calculation, and the answer changes
        dramatically depending on your data, your timeline, and where your
        competitive advantage actually lives.
      </p>

      <ArticleH2>
        What Is the Difference Between Building and Buying AI?
      </ArticleH2>

      <p>
        Building AI means developing custom models, pipelines, or products using
        your own engineering team, proprietary data, and infrastructure. Buying
        AI means licensing a vendor platform, SaaS solution, or LLM API from
        providers like OpenAI, Anthropic, or Google. In 2026, most effective AI
        strategies combine both: buy foundational LLM capability and build your
        differentiated product logic on top.
      </p>
      <p>
        The line between the two has blurred significantly. Using Anthropic Claude
        or GPT-4 via API isn&apos;t buying a finished product. It&apos;s leasing
        raw intelligence and building your application layer on top.
        Understanding that distinction changes the whole framework.{" "}
        <Link href="/approach">
          See our generative AI integration services
        </Link>
        .
      </p>

      <ArticleH2>
        The 4 Factors That Decide Every Build vs Buy Choice
      </ArticleH2>

      <p>
        Most teams answer this question emotionally. CTOs with strong engineering
        cultures default to building. CFOs with tight budgets default to buying.
        Neither is right without examining four specific variables.
      </p>
      <p>
        The first is differentiation. Does AI create competitive advantage
        specific to your business? If every competitor can license the same SaaS
        tool and achieve the same result, building a custom solution won&apos;t
        create a moat. What does &quot;better&quot; look like in a number you
        can measure?
      </p>
      <p>
        The second is data. Do you own proprietary training data that makes your
        model meaningfully more accurate than a vendor&apos;s? A Houston-based
        logistics company we worked with had 6 years of route and delay data
        using Python and AWS. Their demand forecasting model outperformed every
        off-the-shelf API by 41%. That kind of proprietary data justifies
        building.
      </p>
      <p>
        The third is timeline. According to Gartner, 67% of enterprise AI
        initiatives are delayed by more than 6 months. Building custom takes
        10-24 months from discovery to production. Buying a vendor solution or
        deploying an LLM API product can be live in 4-12 weeks. What does your
        market window actually allow?
      </p>
      <p>
        The fourth is budget. Custom AI builds cost $150K-$800K upfront with
        ongoing maintenance costs. SaaS licensing runs $50K-$500K per year.
        Neither number tells the whole story without calculating total cost of
        ownership over 3 years, vendor lock-in exposure, and the cost of features
        you&apos;ll eventually need to build anyway.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/factors-usa.webp`}
        alt="Infographic showing the 4 factors in the build vs buy AI decision: differentiation, data, timeline, and budget"
      />

      <ArticleH2>When Building Custom AI Makes Sense</ArticleH2>

      <p>
        Not every AI product needs to be built from scratch. But three scenarios
        consistently justify custom development, and confusing them with anything
        less is expensive.
      </p>
      <p>
        First: you have proprietary data that gives your model capabilities no
        vendor can replicate. Second: your use case requires specialized accuracy
        that no off-the-shelf tool achieves within 70% of what you need. Third:
        compliance requirements like HIPAA, FedRAMP, or SOC 2 Type II mandate
        on-premises deployment and complete data control.
      </p>

      <div className="bg-evren-peach-light text-evren-navy rounded-2xl p-6 md:p-8 my-10 font-body text-[15px] md:text-base leading-relaxed not-prose">
        <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3 !mb-3">
          Not sure if your use case justifies a custom build?
        </p>
        <p className="!mb-4">
          Our Discover phase gives you a clear answer in 4 weeks: data audit,
          architecture recommendation, and build vs buy verdict with cost and
          timeline attached.
        </p>
        <p className="!mb-0">
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 font-semibold underline hover:text-evren-peach"
          >
            See our product development process
            <ArrowRight size={16} />
          </Link>
        </p>
      </div>

      <p>
        We&apos;ve seen teams spend $400K building what should have been a $60K
        API integration. AI is not a competitive advantage just because you built
        it yourself. The advantage comes from what makes your version uniquely
        better than anything a competitor can buy.
      </p>
      <p>
        Think of your AI architecture as a constellation. The LLM is the
        brightest star, already burning. Your proprietary data, fine-tuning logic,
        and product layer are the stars in orbit around it. That is exactly where
        your competitive edge lives.
      </p>

      <ArticleH2>When Buying AI Wins</ArticleH2>

      <p>
        Buying wins in more scenarios than most technical teams want to admit.
        Here is the honest question: does building give you a real edge, or does
        it just feel better because your team wrote the code?
      </p>
      <p>
        OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Google Gemini 1.5 have
        solved general text reasoning, summarization, classification, and code
        generation with capabilities that would take a team of 8 ML engineers 18
        months to replicate. According to McKinsey&apos;s 2024 AI State Report,
        companies that buy AI capabilities and customize via prompt engineering
        reach ROI 2.3x faster than teams building from scratch.
      </p>
      <p>
        If AI is a feature in your product, not the product itself, buying is
        almost always faster and cheaper. The test is not &quot;Can we build
        this?&quot; It&apos;s &quot;Does building this give us a 10x advantage
        worth the 18-month wait?&quot;{" "}
        <Link href="/approach">
          Explore our generative AI integration services
        </Link>
        .
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/matrix-usa.webp`}
        alt="2x2 decision matrix for build vs buy AI showing quadrants: Buy SaaS, API-First Hybrid, Buy and Customize, and Build Custom"
      />

      <ArticleH2>The LLM Exception Most CTOs Miss</ArticleH2>

      <p>
        Here is what most build vs buy frameworks written before 2024 completely
        missed: the emergence of LLM APIs created a third option that sits
        between buying a SaaS product and building a custom model from scratch.
      </p>
      <p>
        API-first LLM integration is not buying a finished product. You&apos;re
        accessing raw intelligence via API from Anthropic or OpenAI, then
        building your product logic, retrieval-augmented generation pipelines,
        and orchestration layer on top with LangChain and your own
        infrastructure. That is building a product. The foundation just happens
        to be Claude 3.5 or GPT-4 instead of a model you trained yourself.
      </p>
      <p>
        A London fintech CTO we consulted with spent four months evaluating
        whether to fine-tune their own LLM for financial document analysis. The
        answer was no. Anthropic Claude via API with a RAG layer solved 94% of
        their use cases at one-eighth the cost of fine-tuning. They redirected
        the saved budget to ship their product three months earlier.{" "}
        <Link href="/work">Explore autonomous AI agent development</Link>.
      </p>

      <ArticleH2>
        A Decision Framework Your Team Can Use This Quarter
      </ArticleH2>

      <p>
        Run these four questions before your next AI budget conversation.
        Require specific answers, not generalities. Vague answers mean you are
        not ready to decide.
      </p>
      <p>
        <strong>Question 1:</strong> Does our competitive advantage depend on AI
        being better than anything a competitor can buy? If yes, build or
        fine-tune. If no, buy.
      </p>
      <p>
        <strong>Question 2:</strong> Do we own unique training data that makes
        our model meaningfully more accurate? If yes, consider building. If no,
        start with an LLM API first.
      </p>
      <p>
        <strong>Question 3:</strong> Can we reach market 60% faster with a
        bought or API-first solution? If yes, buy first. Validate market
        assumptions. Build custom later when they are proven.
      </p>
      <p>
        <strong>Question 4:</strong> Do compliance requirements mandate data
        sovereignty? If yes, build on-premises or in your own cloud. No shortcut
        exists for this one.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/costs-usa.webp`}
        alt="Bar chart comparing 3-year total cost of ownership for SaaS, API-First Hybrid, and Custom Build AI approaches"
      />

      <div className="bg-evren-peach-light text-evren-navy rounded-2xl p-6 md:p-8 my-10 font-body text-[15px] md:text-base leading-relaxed not-prose border-l-4 border-evren-navy">
        <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3 !mb-3">
          Have a Build vs Buy Decision to Make?
        </p>
        <p className="!mb-4">
          We run this framework for free in an initial consultation. You leave
          with a clear recommendation, cost range, and timeline, backed by 50+
          AI product launches.
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

      <p>
        At AI Advocate Holding, we partner with businesses of every size to build
        intelligent, human-centered products that solve real problems and create
        lasting value. We&apos;ve applied this exact framework across 50+ AI
        product launches. Our success is measured by your independence: when we
        hand over a product, your team owns it, evolves it, and grows it without
        needing to call us back. If you need a third-party perspective on your
        build vs buy decision, let&apos;s talk:{" "}
        <Link href="/connect">www.evrenai.com/contact</Link>.{" "}
        <Link href="/work">See proven AI outcomes</Link>.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/checklist-usa.webp`}
        alt="Checklist visual showing the 4 build vs buy AI questions CTOs should answer before committing to an AI development budget"
      />

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
          Ready to make your build vs buy decision?
        </p>
        <p className="font-body !text-white/70 text-[15px] md:text-base leading-relaxed !mb-6 relative z-10">
          Get a clear recommendation, cost range, and timeline backed by 50+
          AI product launches.
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

      <BuildVsBuyAiFaqAccordion />
    </ArticleContent>
  );
}

const FAQ_ITEMS = [
  {
    question: "How much does it cost to build AI in-house?",
    answer:
      "Custom AI development ranges from $150K for a focused MVP to $800K or more for enterprise-grade systems with complex architecture and compliance requirements. Cost drivers include data quality, team size, compliance scope (HIPAA, SOC 2 Type II), and whether you are building from scratch or integrating with LLM APIs. A Discover phase typically costs $15K-$25K and defines exact scope before full build begins.",
  },
  {
    question: "What are the risks of buying AI from a vendor?",
    answer:
      "Three main risks: vendor lock-in after you are deeply integrated and pricing power shifts, feature misalignment when their roadmap diverges from your product needs, and data security exposure when customer data leaves your environment. Mitigation: choose vendors with clean API abstraction layers, audit contracts for data handling clauses, and always maintain the ability to switch foundation models without rebuilding your full application layer.",
  },
  {
    question:
      "Can I use OpenAI or Anthropic Claude and still build a proprietary product?",
    answer:
      "Yes. Using GPT-4 or Claude via API is fundamentally different from buying a finished SaaS product. You are accessing raw LLM capability and building your own product logic, RAG pipelines, and application layer on top. Most enterprise AI products in 2026 use this hybrid model: LLM API as foundation, proprietary orchestration and data as the differentiation. That is building, not buying.",
  },
  {
    question:
      "How long does it take to build custom AI vs deploying a vendor solution?",
    answer:
      "Custom AI development: 10-24 months from discovery to production depending on scope and compliance requirements. Vendor SaaS solution deployment: 4-12 weeks. API-integrated LLM product: 8-16 weeks from discovery to launch when architecture is scoped upfront. A well-defined AI MVP using LLM APIs can go live in 10-16 weeks when the Discover phase is included. Timeline is the strongest practical argument for the API-first approach for most use cases.",
  },
  {
    question:
      "What is the most common mistake CTOs make in the build vs buy decision?",
    answer:
      "Deciding based on technical capability instead of strategic fit. Most engineering teams can build almost anything given enough time and budget. The question is whether building creates competitive advantage worth the timeline and cost. Teams that skip the differentiation question spend $400K on custom builds that a $60K per year vendor solution would have solved equally well for their specific use case.",
  },
] as const;

function BuildVsBuyAiFaqAccordion() {
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
