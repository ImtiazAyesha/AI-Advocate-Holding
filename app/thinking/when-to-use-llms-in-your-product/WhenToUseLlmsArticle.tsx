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

const IMAGE_BASE = "/blog-images/when-to-use-llms-in-your-product";

const TABLE_OF_CONTENTS = [
  {
    text: "What Signals That a Product Problem Needs an LLM?",
    id: generateArticleHeadingId(
      "What Signals That a Product Problem Needs an LLM?"
    ),
  },
  {
    text: "The Four Questions That Decide",
    id: generateArticleHeadingId("The Four Questions That Decide"),
  },
  {
    text: "LLM Use Cases That Consistently Deliver ROI",
    id: generateArticleHeadingId(
      "LLM Use Cases That Consistently Deliver ROI"
    ),
  },
  {
    text: "When Classical ML Outperforms an LLM",
    id: generateArticleHeadingId("When Classical ML Outperforms an LLM"),
  },
  {
    text: "Which Model: GPT-4, Claude, or Open-Source?",
    id: generateArticleHeadingId(
      "Which Model: GPT-4, Claude, or Open-Source?"
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

type WhenToUseLlmsArticleProps = {
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

export default function WhenToUseLlmsArticle({
  article,
  relatedArticles,
}: WhenToUseLlmsArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={5}
      heroImageSrc={`${IMAGE_BASE}/hero-usa.webp`}
      heroImageAlt="Decision framework for when to use LLMs in your product — LLM vs classical ML, AI Advocate Holding"
    >
      <p>
        You have budget for AI. Your team is ready to build. What no one has
        answered yet is the question that will determine everything: does your
        specific problem actually require a large language model?
      </p>
      <p>
        Get this wrong in either direction and the cost is significant. We have
        seen teams spend four months integrating GPT-4 into products where a
        decision tree would have performed better. We have also seen teams avoid
        LLMs entirely for text problems that genuinely needed them, ship
        something fragile, and rebuild at twice the original cost.
      </p>
      <p>
        Here is the four-question framework we use at AI Advocate Holding before
        recommending a single line of LLM code.
      </p>

      <ArticleH2>What Signals That a Product Problem Needs an LLM?</ArticleH2>

      <p>
        A product problem genuinely needs an LLM when the core value your users
        expect requires understanding, generating, or transforming natural
        language in ways that rules or structured data models cannot replicate.
        If the output must handle variation, reason across unstructured text, or
        respond contextually to free-form input, an LLM is your architecture. If
        the value is a number, a category, or a rule-based decision, a lighter
        model will outperform it.
      </p>

      <ArticleH2>The Four Questions That Decide</ArticleH2>

      <p>
        Before recommending LLM architecture to any client, we work through four
        questions in order. Each one can eliminate the need for an LLM entirely.
        Most problems only need to fail one question to change the answer.
      </p>
      <p>
        <strong>Question one:</strong> Is the input primarily text,
        conversation, or unstructured content? Chatbots, document analyzers,
        contract reviewers, and content generators belong here. Fraud scoring,
        demand forecasting, and inventory optimization do not. If yes to text:{" "}
        <Link href="/approach">explore LLM integration</Link>. If no: evaluate
        classical ML before committing.
      </p>
      <p>
        <strong>Question two:</strong> Does the output need to vary
        intelligently based on context? A customer support bot responding
        differently to an enterprise SLA breach versus a routine billing question
        needs an LLM. A model returning a churn probability score does not. If
        the answer is the same every time given the same input type, an LLM is
        likely overkill.
      </p>
      <p>
        <strong>Question three:</strong> Is the edge-case cost acceptable for
        this use case? LLMs produce unexpected outputs. In a creative writing
        tool, an off-answer is a minor inconvenience. In a medical
        documentation system, it is a compliance event. If your use case cannot
        tolerate unpredictable outputs, design retrieval-augmented generation and
        guardrails from sprint one, not as a patch later.{" "}
        <Link href="/approach">See how we approach discovery</Link>.
      </p>
      <p>
        <strong>Question four:</strong> Is the per-inference cost sustainable
        at projected scale? GPT-4 via API costs approximately $0.03 per 1,000
        tokens. At 10,000 daily queries, that compounds quickly. If unit
        economics do not hold at projected scale, open-source models like Llama
        3 or Mistral running on your own infrastructure can deliver comparable
        quality at 60 to 80 percent lower cost. A discovery sprint answers this
        before a dollar of development is committed.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/framework-usa.webp`}
        alt="Four-question LLM decision framework for product development, AI Advocate Holding"
      />

      <ArticleH2>LLM Use Cases That Consistently Deliver ROI</ArticleH2>

      <p>
        Across 50+ AI products delivered, six use cases generate consistently
        strong returns when LLM architecture is applied correctly.
      </p>
      <p>
        <strong>Intelligent document processing:</strong> extracting,
        summarizing, and routing information from contracts, invoices, and
        patient records. A London-based fintech company we worked with used
        Anthropic Claude to cut contract review time from four hours to 11
        minutes per document, using Python and AWS Lambda. That is not
        incremental improvement. That is a different product category entirely.{" "}
        <Link href="/work">See our AI process automation work</Link>.
      </p>
      <p>
        <strong>Customer support intelligence</strong> — triage, auto-response,
        and smart escalation routing at scale. <strong>Conversational AI</strong>{" "}
        for internal tools: employee-facing search, knowledge management, and HR
        assistants that understand natural language queries.{" "}
        <strong>Content generation at scale:</strong> product descriptions,
        localized marketing copy, structured report drafts.{" "}
        <strong>Code assistant tooling</strong> for internal developer
        productivity. <strong>AI agent workflows</strong> for multi-step
        enterprise back-office automation.
      </p>
      <p>
        These use cases share one defining characteristic: the value delivered is
        impossible without natural language understanding. That is the reliable
        signal. <Link href="/work">See client outcomes</Link>.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/usecases-usa.webp`}
        alt="LLM versus classical ML use case comparison grid for AI product development"
      />

      <ArticleH2>When Classical ML Outperforms an LLM</ArticleH2>

      <p>
        Here is what most LLM guides will not say directly: for structured data
        problems, classical machine learning with Python and Scikit-learn
        outperforms LLMs on accuracy, latency, and cost. Often by a significant
        margin.
      </p>
      <p>
        Demand forecasting, fraud detection, recommendation engines, risk
        scoring, predictive maintenance, and churn prediction all operate on
        structured, labeled datasets. Adding an LLM to these architectures
        introduces latency, unpredictability, and cost to problems that gradient
        boosting or logistic regression solve cleanly and reliably. Not every AI
        product needs a large language model. Knowing the difference is the skill
        that matters.
      </p>
      <p>
        Think of architecture selection like choosing an orbital trajectory. Get
        the angle right at launch and the flight path corrects itself naturally.
        Choose the wrong path and every adjustment compounds the cost of getting
        back on course.{" "}
        <Link href="/approach">See our machine learning approach</Link>.
      </p>

      <ArticleH2>Which Model: GPT-4, Claude, or Open-Source?</ArticleH2>

      <p>
        Once you have confirmed an LLM is the right architecture, the next
        question is which model. For most production text use cases, GPT-4
        (OpenAI) and Claude (Anthropic) via API are the fastest and most capable
        starting points.
      </p>
      <p>
        GPT-4 has broader third-party integrations and the longest enterprise
        production track record. Claude has a stronger context window for
        long-document tasks and more predictable behavior on complex multi-step
        instruction-following. Both are genuinely excellent. The real choice is
        driven by use case, not preference.
      </p>
      <p>
        Open-source models — Llama 3, Mistral, Mixtral — make sense when
        compliance requires on-premises deployment, when proprietary domain data
        warrants fine-tuning, or when inference cost at projected scale makes
        hosted APIs economically unsustainable. Most teams should start with
        GPT-4 or Claude and migrate if constraints require it. Starting with
        custom fine-tuning from scratch adds four to six months to most roadmaps
        without proportional benefit at the start.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/models-usa.webp`}
        alt="GPT-4 versus Claude versus open-source LLM selection guide for product teams, AI Advocate Holding"
      />

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
        alt="Collaborative AI product architecture decision team, AI Advocate Holding Discover Build Scale process"
      />

      <ArticleH2>Here Is the Bottom Line</ArticleH2>

      <p>
        Deciding whether your product needs an LLM is not a technology question.
        It is a product question. Work through the four questions before
        committing architecture: Is the input primarily text? Does the output
        need contextual variation? Is the edge-case cost acceptable? Is the
        inference cost sustainable? Answer those honestly and the right
        architecture becomes clear.
      </p>
      <p>
        At AI Advocate Holding, we partner with businesses of every size to build
        intelligent, human-centered digital products that solve real problems and
        create lasting value. AI is not a feature we add at the end. It is woven
        into our thinking from day one. When we hand a product over, your team can
        own it, evolve it, and grow it without needing us in the room.
      </p>
      <p>
        Ready to decide if your product needs an LLM?{" "}
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
          tell you honestly if an LLM is the right architecture — or if something
          simpler will deliver better results.
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

      <WhenToUseLlmsFaqAccordion />
    </ArticleContent>
  );
}

const FAQ_ITEMS = [
  {
    question: "What is the most common mistake when deciding to use an LLM?",
    answer:
      "Choosing the technology before defining the problem. The right sequence: define the problem with a measurable outcome, assess your data, then evaluate architecture options. An LLM solving the wrong problem precisely is still solving the wrong problem. A two-week discovery sprint prevents this almost entirely.",
  },
  {
    question: "How much does it cost to integrate an LLM into a product?",
    answer:
      "LLM integration typically adds $15K to $50K to development costs depending on context management complexity, retrieval architecture, and compliance requirements. Ongoing inference costs range from near-zero for small volumes to $2K to $8K per month at scale using GPT-4. Open-source models on AWS or GCP typically cost 60 to 80 percent less per inference than hosted API pricing.",
  },
  {
    question: "Do I need proprietary training data to use an LLM?",
    answer:
      "Not for most use cases. LLM API integration using OpenAI GPT-4 or Anthropic Claude requires minimal proprietary training data at launch. You provide context via prompt engineering or retrieval-augmented generation. Fine-tuning with your own data makes sense when domain-specific precision is critical at scale or when you want to reduce prompt token costs over time.",
  },
  {
    question: "How do I decide between GPT-4, Claude, and open-source models?",
    answer:
      "For most production text use cases, start with GPT-4 or Anthropic Claude via API. GPT-4 suits broad integrations. Claude excels at long-document analysis and complex instruction-following. Open-source models like Llama 3 or Mistral make sense for on-premises compliance requirements, unique domain data, or when inference cost at scale is a constraint. A discovery sprint determines which path fits before development commits.",
  },
  {
    question: "How will my team maintain an LLM-powered product after launch?",
    answer:
      "If your team can monitor API costs, manage prompt templates, and update retrieval pipelines, they can maintain most LLM integrations. At AI Advocate Holding, knowledge transfer sessions, technical documentation, and runbooks are built into every engagement from day one. The goal is full team independence within 90 days of launch. Dependency is not an outcome we design toward.",
  },
] as const;

function WhenToUseLlmsFaqAccordion() {
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
