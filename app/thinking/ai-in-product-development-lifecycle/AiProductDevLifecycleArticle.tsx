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

const IMAGE_BASE = "/blog-images/ai-in-product-development-lifecycle";

const TABLE_OF_CONTENTS = [
  {
    text: "What Role Does AI Play in the Product Development Lifecycle?",
    id: generateArticleHeadingId(
      "What Role Does AI Play in the Product Development Lifecycle?"
    ),
  },
  {
    text: "Phase 1: Discovery and Planning",
    id: generateArticleHeadingId("Phase 1: Discovery and Planning"),
  },
  {
    text: "Phase 2: Design and Architecture",
    id: generateArticleHeadingId("Phase 2: Design and Architecture"),
  },
  {
    text: "Phase 3: Development and Testing",
    id: generateArticleHeadingId("Phase 3: Development and Testing"),
  },
  {
    text: "Phase 4: Launch and Iteration",
    id: generateArticleHeadingId("Phase 4: Launch and Iteration"),
  },
  {
    text: "Phase 5: Scale and Optimization",
    id: generateArticleHeadingId("Phase 5: Scale and Optimization"),
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

type AiProductDevLifecycleArticleProps = {
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

export default function AiProductDevLifecycleArticle({
  article,
  relatedArticles,
}: AiProductDevLifecycleArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={5}
      heroImageSrc={`${IMAGE_BASE}/hero-usa.webp`}
      heroImageAlt="5-phase AI product development lifecycle from discovery to scale, AI Advocate Holding"
    >
      <p>
        Most companies add AI to their product after launch. They build the
        product, ship it, and then someone asks in Q3: &quot;Can we add an AI
        feature?&quot; That question costs six months and two architecture
        rewrites.
      </p>
      <p>
        AI embedded into the product development lifecycle from phase one is not
        the same product. It is a fundamentally different product, built faster,
        with fewer defects, better adoption, and a foundation for scale that
        compounds over time. The difference is not incremental. It is structural.
      </p>
      <p>
        Here is what changes at each of the five lifecycle phases when AI is part
        of the process from day one.
      </p>

      <ArticleH2>
        What Role Does AI Play in the Product Development Lifecycle?
      </ArticleH2>

      <p>
        AI transforms every phase of the product development lifecycle: in
        discovery it surfaces user patterns your team would miss; in design it
        stress-tests architecture before a line of code is written; in
        development it catches defects earlier; in launch it predicts where
        users drop off; and in scale it keeps the product improving without
        proportional headcount growth.
      </p>

      <ArticleH2>Phase 1: Discovery and Planning</ArticleH2>

      <p>
        Discovery is where most AI products fail before they start. Not because
        the idea is bad. Because teams skip the two questions that determine
        everything: what exact decision will AI improve, measured as a number?
        And what does the data actually look like before anyone writes a line of
        code?
      </p>
      <p>
        AI changes discovery by making pattern recognition faster. A
        Singapore-based e-commerce company we worked with had 14 months of
        unstructured customer feedback across three channels. Without
        AI-assisted synthesis, that analysis would take six weeks. With a
        Claude-powered processing pipeline using Python and LangChain, it took
        four days.{" "}
        <Link href="/approach">See our generative AI capabilities</Link>.
      </p>
      <p>
        Define your AI use case before defining your product architecture. The
        question is not &quot;what can we build?&quot; The question is &quot;what
        exact decision will AI improve, and what does better look like as a
        number you can track from week one?&quot;
      </p>

      <ArticleH2>Phase 2: Design and Architecture</ArticleH2>

      <p>
        Design is where AI-native products diverge from products that get AI
        bolted on later. When AI shapes the design phase, the data model reflects
        AI requirements from the start. UX is designed around AI outputs, not
        retrofitted around them. API structure accounts for inference latency and
        probabilistic responses from the beginning.
      </p>
      <p>
        We have seen teams add five months to launch timelines because their
        frontend was designed for deterministic logic and AI introduced
        probabilistic outputs. The interface needed a complete rethink. That five
        months was not a development problem. It was a design problem that should
        have been solved in wireframes.
      </p>
      <p>
        AI is not a feature we add at the end. It is woven into our thinking
        from day one. AI-native design means asking in Figma: how does this
        screen behave when the model is 94% confident versus 61%? Those
        questions belong in wireframes, not in the post-launch bug queue.{" "}
        <Link href="/approach">See how we approach product architecture</Link>.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/comparison-usa.webp`}
        alt="Side-by-side comparison of traditional versus AI-native product development lifecycle"
      />

      <ArticleH2>Phase 3: Development and Testing</ArticleH2>

      <p>
        AI changes development in two ways. The first is familiar: AI-assisted
        coding tools reduce boilerplate and surface syntax errors faster. The
        second is less obvious, and more important: AI models require
        fundamentally different testing protocols than deterministic code.
      </p>
      <p>
        Unit tests pass or fail. AI outputs are evaluated. That distinction
        reshapes your QA process entirely. For LLM-powered features using OpenAI
        GPT-4 or Anthropic Claude via API, evaluation frameworks replace
        traditional test suites. You write test sets that measure accuracy,
        relevance, and safety, not just &quot;does this function return the
        expected value.&quot; Not every AI product needs a custom model, but
        every AI product needs an evaluation strategy from sprint one.{" "}
        <Link href="/approach">Explore our AI model evaluation approach</Link>.
      </p>
      <p>
        According to McKinsey&apos;s 2024 State of AI Report, teams that
        integrate AI testing protocols from the first sprint reduce post-launch
        defects related to AI behavior by 40% compared to teams that test AI
        features in isolation at the end of the project. Think of your evaluation
        suite as orbital trajectory calculations. You program the flight path at
        launch, not mid-transit.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/framework-usa.webp`}
        alt="AI role at each phase of product development lifecycle decision framework, AI Advocate Holding"
      />

      <ArticleH2>Phase 4: Launch and Iteration</ArticleH2>

      <p>
        Most products launch and measure what happened. AI-native products launch
        and predict what will happen next. Technology serves people. That
        principle shapes everything about how we design the launch phase,
        starting with who sees what and when.
      </p>
      <p>
        At launch, AI changes three things: onboarding (AI personalizes the
        first-run experience based on early input signals), feature adoption (AI
        surfaces the right capability to the right user at the right moment), and
        support (AI handles Tier 1 questions before they reach a human agent).
      </p>
      <p>
        A Houston-based fintech platform we launched used Python and AWS to
        instrument the onboarding flow with a real-time recommendation engine
        that adapted to user behavior from day one. Within 60 days of launch,
        Tier 1 support volume dropped 38%. That is not a feature. That is a
        different product entirely.{" "}
        <Link href="/work">See client outcomes</Link>.
      </p>

      <ArticleH2>Phase 5: Scale and Optimization</ArticleH2>

      <p>
        Scale is where AI-native products create compounding advantages over
        products where AI was retrofitted. Every user interaction becomes
        training signal. Every model update improves outcomes without new code.
        Every new data source amplifies what the product already does well.
      </p>
      <p>
        Our success is measured by your independence. When we complete a product
        engagement, your team should be able to run model updates, evaluate new
        data sources, and push improvements without calling us back. That means
        AI infrastructure that is documented, observable, and owned by your
        team from day one, built into every phase of the lifecycle, not handed
        over at the finish line.
      </p>
      <p>
        According to Gartner&apos;s 2024 AI investment analysis, AI-native
        products see a 2.3x improvement in feature velocity in year two versus
        year one, as training data accumulates and models sharpen on real usage.
        Products where AI was retrofitted see no equivalent compounding effect.
        That gap grows every year. It starts in phase one.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/stats-usa.webp`}
        alt="AI product development statistics: 10-16 week timeline, 40% fewer defects, 2.3x velocity improvement"
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
        alt="Collaborative AI product development team working through Discover Build Scale lifecycle, AI Advocate Holding"
      />

      <ArticleH2>Here Is the Bottom Line</ArticleH2>

      <p>
        AI in the product development lifecycle is not about adding intelligence
        to an existing process. It is about redesigning the process around
        intelligence from the start. Discovery becomes more precise.
        Architecture becomes more resilient. Testing becomes more meaningful.
        Launch becomes more personal. Scale becomes compounding.
      </p>
      <p>
        At AI Advocate Holding, we partner with teams of every size to build intelligent,
        human-centered digital products that solve real problems and create
        lasting value. Our success is measured by your independence: when we
        hand a product over, your team can own it, evolve it, and grow it
        without needing us in the room.
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

      <AiProductDevLifecycleFaqAccordion />
    </ArticleContent>
  );
}

const FAQ_ITEMS = [
  {
    question: "How does AI change the product development timeline?",
    answer:
      "AI-native products move from discovery to working MVP in 10 to 16 weeks. Products where AI is added post-launch typically require two to four months of architectural rework that could have been avoided. The upfront investment in AI-native architecture pays back immediately in reduced rework cycles, faster iteration, and a product that compounds in capability rather than accumulating technical debt over time.",
  },
  {
    question:
      "Do I need a data science team to embed AI in my product lifecycle?",
    answer:
      "Not at the start. Most MVPs use LLM APIs like OpenAI GPT-4 or Anthropic Claude, which require minimal data science expertise to integrate via API. Data scientists become necessary when you move to custom model training or accumulate enough proprietary data to fine-tune for your domain. A two-week discovery sprint clarifies exactly when that threshold applies to your specific product and data situation.",
  },
  {
    question:
      "What is the most common mistake when adding AI to an existing product?",
    answer:
      "Retrofitting architecture. Teams add AI to a product designed for deterministic logic. The data model was never designed for AI inputs. The UX was never designed for probabilistic outputs. The API was never designed for inference latency. Result: two to four months of rework that a proper AI-native discovery phase would have prevented entirely. Every time. Not sometimes.",
  },
  {
    question:
      "Should I use GPT-4 or Claude for product development lifecycle tasks?",
    answer:
      "Both are strong starting points for text-based product features. Anthropic Claude performs well for structured outputs, document analysis, and tasks requiring consistent output format. GPT-4 is strong for code generation and multi-step reasoning. The right choice depends on your specific use case, data privacy requirements, and cost profile. A discovery sprint with a data audit determines the right model before any development budget is committed.",
  },
  {
    question: "How do you measure AI performance across the product lifecycle?",
    answer:
      "Define AI success metrics in phase one. Use accuracy and precision for classification tasks, BLEU or ROUGE for generation tasks, and business KPIs like support deflection or conversion lift for product outcomes. According to Gartner, 30% of AI POCs are abandoned because success was never defined upfront. That failure starts at phase one and compounds through every subsequent phase.",
  },
] as const;

function AiProductDevLifecycleFaqAccordion() {
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
