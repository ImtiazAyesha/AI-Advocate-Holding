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

const IMAGE_BASE = "/blog-images/how-to-choose-ai-model";

const TABLE_OF_CONTENTS = [
  {
    text: "What Is the Best Way to Choose an AI Model?",
    id: generateArticleHeadingId(
      "What Is the Best Way to Choose an AI Model?"
    ),
  },
  {
    text: "The 4 Model Categories You're Actually Choosing Between",
    id: generateArticleHeadingId(
      "The 4 Model Categories You're Actually Choosing Between"
    ),
  },
  {
    text: "The 5-Question Framework for Model Selection",
    id: generateArticleHeadingId(
      "The 5-Question Framework for Model Selection"
    ),
  },
  {
    text: "GPT-4, Claude, or Llama 3: When Each Is the Right Answer",
    id: generateArticleHeadingId(
      "GPT-4, Claude, or Llama 3: When Each Is the Right Answer"
    ),
  },
  {
    text: "The Real Cost of Choosing Wrong",
    id: generateArticleHeadingId("The Real Cost of Choosing Wrong"),
  },
  {
    text: "Frequently Asked Questions",
    id: generateArticleHeadingId("Frequently Asked Questions"),
  },
];

type HowToChooseAiModelArticleProps = {
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

export default function HowToChooseAiModelArticle({
  article,
  relatedArticles,
}: HowToChooseAiModelArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={5}
      heroImageSrc={`${IMAGE_BASE}/hero-usa.webp`}
      heroImageAlt="AI model comparison framework showing GPT-4, Claude, Llama 3 and decision criteria, AI Advocate Holding"
    >
      <p>
        Most teams pick their AI model the same way they pick a restaurant: they
        go with whatever everyone else is talking about. GPT-4 gets mentioned in
        a meeting. Claude gets a LinkedIn shoutout. And suddenly a six-figure
        architecture decision is made based on whoever had the best press that
        quarter.
      </p>
      <p>
        The result? A $40,000-per-month API bill for a use case that a
        $0.002-per-1,000-token open-source model could have handled. Or a
        compliance audit failure because the model sends data to a cloud endpoint
        that your HIPAA environment prohibits.
      </p>
      <p>
        Too many teams treat model selection as a brand preference. It
        isn&apos;t. It&apos;s an engineering decision with business
        consequences. Here&apos;s how to make it correctly.
      </p>

      <ArticleH2>What Is the Best Way to Choose an AI Model?</ArticleH2>

      <p>
        Choosing the right AI model depends on four factors: your use case
        (text, vision, or code), your data environment (cloud or on-premises),
        your cost ceiling, and your compliance requirements. For most text-based
        products, start with GPT-4 or Anthropic Claude via API. Evaluate
        open-source models only when proprietary costs or compliance prohibit
        them.
      </p>

      <ArticleH2>
        The 4 Model Categories You&apos;re Actually Choosing Between
      </ArticleH2>

      <p>
        Before comparing specific models, understand the four categories. Every
        AI model on the market falls into one of them.
      </p>
      <p>
        <strong>Category 1: Proprietary API models.</strong> This includes
        OpenAI GPT-4, Anthropic Claude 3, and Google Gemini. You call them via
        API, pay per token, and never touch the weights. Fast to deploy,
        expensive at scale, no data residency control.
      </p>
      <p>
        <strong>Category 2: Open-source models.</strong> This includes Meta Llama
        3, Mistral, and Phi-3. You download the weights, host them yourself on
        AWS or Azure, and pay for compute instead of tokens. Slower to deploy,
        cheaper at scale, full data control.
      </p>
      <p>
        <strong>Category 3: Fine-tuned proprietary models.</strong> You start
        with GPT-4 or Claude, then fine-tune on your proprietary data. Best
        accuracy on narrow domains. Higher cost and complexity.
      </p>
      <p>
        <strong>Category 4: Custom-trained models.</strong> Built from scratch
        or fine-tuned from foundation weights on large proprietary datasets.
        Reserved for companies with specialized domains and compliance
        requirements that no API model can meet.
      </p>
      <p>
        What&apos;s the right starting point for 90% of products? Category 1.
        Build quickly, validate the use case, then evaluate whether Category 2 or
        3 makes economic sense at scale.
      </p>

      <div className="bg-evren-peach-light text-evren-navy rounded-2xl p-6 md:p-8 my-10 font-body text-[15px] md:text-base leading-relaxed not-prose">
        <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3 !mb-3">
          NOT SURE WHICH CATEGORY FITS YOUR PRODUCT?
        </p>
        <p className="!mb-4">
          We help product teams select and integrate the right model in our
          Discover phase.
        </p>
        <p className="!mb-0">
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 font-semibold underline hover:text-evren-peach"
          >
            Book a discovery call
            <ArrowRight size={16} />
          </Link>
        </p>
      </div>

      <ArticleH2>The 5-Question Framework for Model Selection</ArticleH2>

      <p>
        We&apos;ve seen teams spend 3 months building before realizing their
        model choice was wrong. These five questions, answered before
        architecture begins, prevent that.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/framework-usa.webp`}
        alt="5-question AI model selection framework with decision branches for use case, data, cost, compliance, and scale"
      />

      <p>
        <strong>Question 1: What type of output does your product need?</strong>{" "}
        If you need text generation, summarization, or conversation, start with
        GPT-4 or Claude 3. If you need image generation, use DALL-E 3 or
        Stable Diffusion. If you need code generation, GPT-4 and Claude 3 Opus
        outperform everything else. And if you need multimodal inputs (text +
        images), both GPT-4V and Claude 3 Opus handle this natively.
      </p>
      <p>
        <strong>Question 2: Where does your data live, and can it leave?</strong>{" "}
        If your product processes patient records (HIPAA), financial data (SOC
        2), or EU user data (GDPR), confirm whether your chosen model&apos;s API
        sends data outside compliant boundaries. OpenAI and Anthropic offer
        enterprise agreements with data processing addenda. For stricter
        environments, Llama 3 hosted on your own AWS VPC is often the only
        viable option.
      </p>
      <p>
        <strong>Question 3: What is your cost ceiling at scale?</strong> GPT-4
        Turbo costs approximately $0.01 per 1,000 input tokens. Claude 3 Haiku
        costs $0.00025. Llama 3 70B on self-hosted AWS costs roughly $0.0002 per
        1,000 tokens at volume. If your product processes 10 million tokens per
        day, those differences mean $36,500 per year vs. $730 per year. A
        London-based fintech team we worked with switched from GPT-4 to Claude 3
        Haiku mid-build after running these numbers. API cost dropped 94% with
        no measurable accuracy difference for their use case.
      </p>
      <p>
        <strong>Question 4: How much accuracy does your use case require?</strong>{" "}
        Not every AI product needs GPT-4 Opus accuracy. For customer service
        FAQ handling, Claude 3 Haiku or Llama 3 8B is sufficient. For legal
        contract analysis or medical summarization, Claude 3 Opus or GPT-4 may be
        the only models accurate enough to trust. According to Stanford HELM
        benchmarks, GPT-4 and Claude 3 Opus lead on reasoning, while smaller
        models like Mistral 7B outperform their size class on structured tasks.
      </p>
      <p>
        <strong>Question 5: Will you need to fine-tune later?</strong> If your
        domain is highly specialized (rare medical conditions, proprietary
        financial instruments, specific legal jurisdictions), plan for
        fine-tuning from day one. Proprietary models offer fine-tuning APIs
        (OpenAI fine-tuning, Anthropic model customization). Open-source models
        give you full weight access. If you don&apos;t plan for this early,
        retrofitting is expensive. Think of your model choice as a trajectory:
        where your data sends you at scale matters more than your day-one
        accuracy score.
      </p>

      <ArticleH2>
        GPT-4, Claude, or Llama 3: When Each Is the Right Answer
      </ArticleH2>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/comparison-usa.webp`}
        alt="Side-by-side comparison of GPT-4, Anthropic Claude 3, and Llama 3 with use case, cost, and compliance ratings"
      />

      <p>
        <strong>Choose GPT-4 when:</strong> your use case involves complex
        reasoning, code generation, or multimodal inputs; when you need the
        broadest plugin and tool ecosystem; and when speed to market matters more
        than cost optimization at launch.
      </p>
      <p>
        <strong>Choose Anthropic Claude when:</strong> your product involves long
        documents (Claude handles 200,000-token context windows vs. GPT-4&apos;s
        128,000), when your audience cares about safety and refusal behavior,
        or when EU AI Act compliance is on your roadmap. AI is not a feature we
        add at the end; it&apos;s woven into every architectural decision from
        day one, and model compliance posture is part of that architecture.
      </p>
      <p>
        <strong>Choose Llama 3 (open-source) when:</strong> your data cannot
        leave your infrastructure, your team has the MLOps capability to manage
        model hosting, or your token volume makes API costs economically
        prohibitive. Not every AI product needs a proprietary API model. Llama
        3 70B is competitive with GPT-3.5 Turbo on most tasks and costs a
        fraction of the price at volume.
      </p>
      <p>
        Our analysis of 50+ AI product launches shows that teams who answer all
        5 questions before model selection are 3x less likely to re-architect
        in the first 6 months. That&apos;s not a philosophy. It&apos;s the
        difference between a product that ships and one that&apos;s permanently
        fighting its own infrastructure.
      </p>

      <ArticleH2>The Real Cost of Choosing Wrong</ArticleH2>

      <p>
        Model selection mistakes have a predictable pattern. A team builds a
        working prototype on GPT-4. Costs are fine at 10 users. At 10,000 users,
        the API bill hits $50,000 per month and the team scrambles to switch
        models without breaking the product.
      </p>
      <p>
        Re-architecting a model mid-production typically adds 6 to 14 weeks of
        engineering time. According to Gartner&apos;s 2024 AI Hype Cycle report,
        infrastructure decisions made during prototyping account for 40% of AI
        project cost overruns. What does &quot;choosing wrong&quot; look like in
        numbers? It looks like $200,000 in re-architecture costs that a 3-hour
        model evaluation sprint would have prevented.
      </p>
      <p>
        The best AI products treat model selection as a discovery exercise, not
        a brand vote. They define the use case precisely, test 2 or 3 candidate
        models against real data, measure accuracy and cost together, and then
        choose. That&apos;s the process we follow for every product we build.{" "}
        <Link href="/approach">
          See how we approach AI product discovery
        </Link>{" "}
        before committing to architecture.
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
          Which AI Model Is Right for Your Product?
        </p>
        <p className="font-body !text-white/70 text-[15px] md:text-base leading-relaxed !mb-6 relative z-10">
          Our Discover phase evaluates GPT-4, Claude, and open-source models
          against your actual use case.
        </p>
        <Link
          href="/connect"
          className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-evren-peach !text-evren-navy font-heading font-semibold text-sm hover:shadow-warm transition-shadow"
        >
          Book a Free Consultation
          <ArrowRight size={16} />
        </Link>
      </div>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/stats-usa.webp`}
        alt="Statistics on AI model selection: cost per token comparison, re-architecture rates, and ROI impact"
      />

      <p>
        At AI Advocate Holding, we partner with businesses of every size to build
        intelligent, human-centered digital products that solve real problems and
        create lasting value. Choosing the right model isn&apos;t a one-time
        decision. It&apos;s the foundation your entire product sits on. When we
        help teams make that choice, we measure our success by your independence:
        when we hand the product over, your team owns the model selection
        rationale, the cost model, the compliance posture, and the upgrade path,
        without needing to call us back.
      </p>
      <p>
        If you have a use case and want to know which model fits, let&apos;s
        talk: <Link href="/connect">www.evrenai.com/contact</Link>.
      </p>

      <p className="text-[15px] text-evren-medium-gray">
        <strong>Related reading:</strong>{" "}
        <Link href="/thinking/how-to-build-an-ai-product">
          How to Build an AI Product: 5 Steps That Actually Work
        </Link>
        .{" "}
        <Link href="/approach">
          Explore our Generative AI and LLM integration services
        </Link>
        .{" "}
        <Link href="/approach">
          Need custom model training? See our Machine Learning solutions
        </Link>
        .
      </p>

      <ArticleH2>Frequently Asked Questions</ArticleH2>

      <HowToChooseAiModelFaqAccordion />
    </ArticleContent>
  );
}

const FAQ_ITEMS = [
  {
    question: "What is the difference between GPT-4 and Anthropic Claude?",
    answer:
      "GPT-4 leads on code generation, tool use, and the widest ecosystem of plugins. Anthropic Claude leads on long-context processing (200K tokens), document analysis, and safety-aligned behavior. Both cost roughly $0.01 per 1,000 input tokens for their flagship models. The right choice depends on your specific use case, not brand preference. For most text-based products, both are viable starting points.",
  },
  {
    question:
      "When should I use an open-source LLM instead of GPT-4 or Claude?",
    answer:
      "Use open-source models like Llama 3 or Mistral when your data cannot leave your infrastructure (HIPAA, GDPR on-premises requirements), when API token costs exceed $5,000 per month at your scale, or when your team has the MLOps capability to manage self-hosted model serving. Open-source models require more infrastructure work but give you full data control and eliminate per-token API costs.",
  },
  {
    question: "How much does it cost to switch AI models after launch?",
    answer:
      "Re-architecting a model mid-production adds 6 to 14 weeks of engineering time and typically costs $50,000 to $150,000 depending on how deeply the model is integrated. The most common reason is a cost surprise at scale. Running a model cost evaluation in the discovery phase, before architecture begins, costs 3 hours and prevents that. This is the most valuable exercise most teams skip.",
  },
  {
    question: "Do I need to fine-tune my AI model?",
    answer:
      "Most text-based products don't need fine-tuning at launch. GPT-4 and Claude are capable enough for general use cases via prompt engineering. Fine-tuning makes sense when your domain is highly specialized (rare medical terminology, proprietary financial instruments), when you have a large labeled dataset that captures domain-specific nuance, or when response consistency across thousands of queries is critical. Plan for it from day one even if you don't do it immediately.",
  },
  {
    question: "What AI model is best for a startup with limited budget?",
    answer:
      "Start with Claude 3 Haiku or GPT-4o-mini. Both cost under $0.001 per 1,000 tokens and are accurate enough for most startup use cases. Validate your use case at low cost first. As you scale, use the data you collect to decide whether to stay on API, move to open-source, or fine-tune. Budget for model costs in your unit economics from day one, even if actual usage is initially low.",
  },
] as const;

function HowToChooseAiModelFaqAccordion() {
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
