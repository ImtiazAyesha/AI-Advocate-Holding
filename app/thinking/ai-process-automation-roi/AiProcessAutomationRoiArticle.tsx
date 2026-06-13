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

const IMAGE_BASE = "/blog-images/ai-process-automation-roi";

const TABLE_OF_CONTENTS = [
  {
    text: "What Is ROI for AI Process Automation?",
    id: generateArticleHeadingId("What Is ROI for AI Process Automation?"),
  },
  {
    text: "The 6 ROI Metrics Most Businesses Miss",
    id: generateArticleHeadingId("The 6 ROI Metrics Most Businesses Miss"),
  },
  {
    text: "A Real ROI Calculation: What the Full Picture Looks Like",
    id: generateArticleHeadingId(
      "A Real ROI Calculation: What the Full Picture Looks Like"
    ),
  },
  {
    text: "When AI Process Automation Doesn't Deliver ROI",
    id: generateArticleHeadingId(
      "When AI Process Automation Doesn't Deliver ROI"
    ),
  },
  {
    text: "3 Steps to Build Your AI Automation ROI Business Case",
    id: generateArticleHeadingId(
      "3 Steps to Build Your AI Automation ROI Business Case"
    ),
  },
  {
    text: "Frequently Asked Questions",
    id: generateArticleHeadingId("Frequently Asked Questions"),
  },
];

type AiProcessAutomationRoiArticleProps = {
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

export default function AiProcessAutomationRoiArticle({
  article,
  relatedArticles,
}: AiProcessAutomationRoiArticleProps) {
  return (
    <ArticleContent
      article={article}
      relatedArticles={relatedArticles}
      tableOfContents={TABLE_OF_CONTENTS}
      readingTimeMinutes={5}
      heroImageSrc={`${IMAGE_BASE}/hero-usa.webp`}
      heroImageAlt="AI process automation ROI framework showing 6 value metrics, AI Advocate Holding"
    >
      <p>
        Your finance team approved the AI automation pilot. Your operations team
        ran it for 90 days. Now someone in the boardroom is asking what you
        actually got for that investment.
      </p>
      <p>
        Most teams answer with one number: labor hours saved. That&apos;s not
        wrong. It&apos;s just incomplete. And it&apos;s why 67% of executives
        surveyed by McKinsey report that AI investments have underdelivered
        expectations.
      </p>
      <p>
        The technology isn&apos;t failing them. Their measurement is.
      </p>

      <ArticleH2>What Is ROI for AI Process Automation?</ArticleH2>

      <p>
        AI process automation ROI is the measurable financial return generated
        when intelligent systems replace or augment manual workflows. It combines
        direct savings (labor costs, error rates, processing time) with indirect
        gains (faster decisions, higher throughput, reduced rework). Most
        businesses undercount ROI because they measure only labor savings and
        miss the indirect value drivers that account for 60% of total return.
      </p>

      <ArticleH2>The 6 ROI Metrics Most Businesses Miss</ArticleH2>

      <p>
        Labor cost reduction is obvious. Everybody counts it. But according to
        Gartner&apos;s 2024 Intelligent Process Automation Survey, companies
        that measure only labor savings capture just 35-40% of total AI
        automation value. You&apos;re leaving 60% of your ROI story on the table.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/six-metrics-comparison.webp`}
        alt="Six ROI metrics for AI process automation: error reduction, cycle time, throughput, compliance, redeployment, decision quality"
      />

      <h3>1. Error Cost Reduction</h3>
      <p>
        Manual data entry carries error rates of 4-8% in high-volume workflows,
        per IBM&apos;s 2023 Process Mining Report. Each error has downstream
        cost: rework, customer impact, compliance exposure. A Houston-based
        fintech company using Python and AWS reduced invoice processing errors
        by 91% after deploying AI document extraction. The annual rework cost
        they eliminated was $340,000. None of that appeared in their original
        ROI model.
      </p>

      <h3>2. Cycle Time Compression</h3>
      <p>
        When a process that took 72 hours completes in 4, that&apos;s not just
        faster. It&apos;s revenue unlocked sooner, customer satisfaction
        improved, and working capital freed. Speed has a dollar value. Most
        finance teams don&apos;t know how to assign it, but that doesn&apos;t
        make it imaginary.
      </p>

      <h3>3. Throughput Scalability</h3>
      <p>
        Manual processes scale linearly with headcount. Automated processes scale
        with compute. A system processing 10,000 records today handles 100,000
        with no additional labor cost. That scalability ceiling is worth
        quantifying before peak season tests it. Always Expanding is how we think
        about this: the ceiling keeps moving.
      </p>

      <h3>4. Compliance Cost Reduction</h3>
      <p>
        In regulated industries, automated audit trails and consistent process
        execution reduce compliance labor by 40-70%, per Deloitte&apos;s 2024
        Automation in Regulated Industries report. We&apos;ve seen healthcare
        teams using LangChain and FastAPI cut compliance preparation time from 3
        weeks to 4 days.
      </p>
      <p>
        <Link href="/business-transformation">
          See our AI Process Automation services
        </Link>
        .
      </p>

      <h3>5. Employee Redeployment Value</h3>
      <p>
        When people stop doing repetitive tasks, they don&apos;t disappear from
        payroll. They either do more valuable work, or they don&apos;t. Companies
        that plan the redeployment strategy before automating capture
        significantly more value than those who treat it as an HR afterthought.
        Not every team gets this right the first time.
      </p>

      <h3>6. Decision Quality Improvement</h3>
      <p>
        AI systems catch patterns humans miss in high-volume structured data. An
        e-commerce company we worked with reduced overstock inventory by 28%
        after deploying demand forecasting automation built with Python and
        AWS. That&apos;s $1.2M in freed working capital, not from cutting
        headcount but from better decisions.
      </p>

      <ArticleH2>
        A Real ROI Calculation: What the Full Picture Looks Like
      </ArticleH2>

      <p>
        Think of AI automation ROI like orbital mechanics. There are visible
        forces you can calculate from the ground, and invisible forces that only
        become apparent when you map the complete trajectory. Most businesses
        plot only the visible ones and wonder why the mission underperforms.
      </p>
      <p>
        Here&apos;s a real 12-month ROI model from a mid-market logistics
        company. The structure mirrors work we did with a Singapore-based
        operations team facing identical data volume challenges, where data
        standards differed but the architecture principle held perfectly.
      </p>

      <div className="not-prose my-10 overflow-x-auto rounded-2xl border border-evren-light-gray/60">
        <table className="w-full min-w-[480px] text-left font-body text-[15px] md:text-base">
          <thead>
            <tr className="bg-evren-navy text-white">
              <th className="px-5 py-4 font-heading font-semibold">
                12-Month ROI Model Category
              </th>
              <th className="px-5 py-4 font-heading font-semibold text-right">
                Annual Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-evren-light-gray/40 bg-white">
            <tr>
              <td className="px-5 py-4 text-evren-charcoal">
                Labor hours saved (equivalent 30 FTE)
              </td>
              <td className="px-5 py-4 text-right font-semibold text-evren-charcoal">
                $1,200,000
              </td>
            </tr>
            <tr className="bg-evren-warm-white/60">
              <td className="px-5 py-4 text-evren-charcoal">
                Error correction costs eliminated
              </td>
              <td className="px-5 py-4 text-right font-semibold text-evren-charcoal">
                $340,000
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-evren-charcoal">
                Cycle time improvement (revenue unlocked faster)
              </td>
              <td className="px-5 py-4 text-right font-semibold text-evren-charcoal">
                $220,000
              </td>
            </tr>
            <tr className="bg-evren-warm-white/60">
              <td className="px-5 py-4 text-evren-charcoal">
                Throughput increase (40% volume growth, zero new headcount)
              </td>
              <td className="px-5 py-4 text-right font-semibold text-evren-charcoal">
                $480,000
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-evren-charcoal">
                Compliance preparation time reduced
              </td>
              <td className="px-5 py-4 text-right font-semibold text-evren-charcoal">
                $160,000
              </td>
            </tr>
            <tr className="bg-evren-peach-light/40">
              <td className="px-5 py-4 font-heading font-bold text-evren-navy">
                Total Annual Value
              </td>
              <td className="px-5 py-4 text-right font-heading font-bold text-evren-navy">
                $2,400,000
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-evren-charcoal">
                Implementation Cost
              </td>
              <td className="px-5 py-4 text-right font-semibold text-evren-charcoal">
                $280,000
              </td>
            </tr>
            <tr className="bg-evren-navy/5">
              <td className="px-5 py-4 font-heading font-bold text-evren-navy">
                Year 1 ROI
              </td>
              <td className="px-5 py-4 text-right font-heading font-bold text-evren-navy">
                757%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Measuring only labor savings would have shown $1.2M return on $280K
        investment. The complete picture is 2.4x better. That difference is the
        business case for measuring correctly.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/roi-calculation-table.webp`}
        alt="12-month AI process automation ROI calculation table showing labor savings, error costs, throughput, and 757% Year 1 ROI"
      />

      <div className="bg-evren-peach-light text-evren-navy rounded-2xl p-6 md:p-8 my-10 font-body text-[15px] md:text-base leading-relaxed not-prose border-l-4 border-evren-navy">
        <p className="font-heading font-bold text-sm uppercase tracking-wider mb-3 !mb-3">
          Want a custom ROI estimate for your process?
        </p>
        <p className="!mb-4">
          We map your current process baseline and build a 12-month ROI model
          specific to your industry, workflow volume, and compliance
          requirements. No generalities.
        </p>
        <p className="!mb-0">
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 font-semibold underline hover:text-evren-peach"
          >
            Book a Free ROI Assessment
            <ArrowRight size={16} />
          </Link>
        </p>
      </div>

      <ArticleH2>When AI Process Automation Doesn&apos;t Deliver ROI</ArticleH2>

      <p>
        Here&apos;s what most guides don&apos;t tell you: AI process automation
        has one non-negotiable prerequisite. Your process needs to be measurable
        before it&apos;s automatable.
      </p>
      <p>
        We&apos;ve seen teams invest $150,000 automating a process that was
        never documented consistently. The AI system learned the chaos, not the
        process. That&apos;s not an AI failure. It&apos;s a process discovery
        failure wearing an AI mask.
      </p>
      <p>
        Before committing any automation budget, answer three questions with
        specifics. What exact task will AI perform? What does success look like
        in a number measurable today? What&apos;s the cost when the system makes
        an error? If any answer is vague, you&apos;re not ready to build. AI is
        intelligent by design at AI Advocate Holding. That means clarity before code. Every
        build begins with empathy for the problem.
      </p>
      <p>
        <Link href="/approach">See our product development process</Link>.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/process-prerequisites.webp`}
        alt="AI process automation prerequisites checklist: documented process, measurable success metrics, error cost baseline"
      />

      <ArticleH2>
        3 Steps to Build Your AI Automation ROI Business Case
      </ArticleH2>

      <p>
        Before committing any automation budget, answer three questions with
        specifics, not generalities. What exact task will AI perform? What does
        success look like in a measurable number today? What&apos;s the cost
        when the system makes an error?
      </p>

      <h3>Step 1: Map Your Process Baseline</h3>
      <p>
        Document current state: time per transaction, error rate, daily volume,
        headcount assigned, and compliance overhead hours per week. You need
        today&apos;s numbers to credibly claim tomorrow&apos;s savings. No
        baseline means no ROI proof.
      </p>

      <h3>Step 2: Identify Which ROI Categories Apply</h3>
      <p>
        Not every category fits every use case. An internal HR workflow has a
        different ROI profile than a customer-facing document processing system.
        Map which of the six categories apply, then assign conservative
        estimates using real inputs.
      </p>

      <h3>Step 3: Build a 12-Month Model with Full Costs</h3>
      <p>
        Include everything: discovery and scoping, development, LLM API usage
        if using Claude or GPT-4 via API, integration work, team training, and
        ongoing monitoring fees. Most teams underestimate ongoing costs by
        30-40%. Build that buffer in from the start.
      </p>
      <p>
        <Link href="/work">See proven results</Link>.
      </p>

      <p>
        We partner with businesses of every size to build intelligent,
        human-centered digital products that solve real problems and create
        lasting value. Our success is measured by your independence: when the
        automation is live, your team can own it, monitor it, and expand it
        without depending on us. If you want a specific ROI estimate for your
        process, let&apos;s talk:{" "}
        <Link href="/connect">www.evrenai.com/contact</Link>.
      </p>

      <ArticleBodyImage
        src={`${IMAGE_BASE}/stats-callout.webp`}
        alt="AI process automation ROI statistics: 757% Year 1 ROI, 6 metrics framework, 12-18 month payback benchmark"
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
          Ready to calculate your automation ROI?
        </p>
        <p className="font-body !text-white/70 text-[15px] md:text-base leading-relaxed !mb-6 relative z-10">
          Our team builds the business case, scopes the implementation, and
          delivers automation your team fully owns.
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

      <AiProcessAutomationRoiFaqAccordion />
    </ArticleContent>
  );
}

const FAQ_ITEMS = [
  {
    question: "What is a realistic ROI for AI process automation in Year 1?",
    answer:
      "Strong Year 1 ROI for AI process automation ranges from 200-500% for focused, well-scoped workflows. Enterprise-wide deployments typically show 150-300% in Year 1 with returns accelerating in Years 2-3. The standard benchmark for a sound business case is recovering full implementation costs within 12-18 months. Single-process automation almost always hits payback in under 12 months.",
  },
  {
    question: "How long does AI process automation take to implement?",
    answer:
      "Most focused AI process automation projects go from discovery to production in 10-16 weeks. Scope, data quality, integration complexity, and compliance requirements like HIPAA or SOC 2 affect timeline. Discovery alone takes 2-3 weeks for complex regulated processes. Teams that skip discovery typically add 3-5 months of rework after their first automation falls short of expected performance.",
  },
  {
    question: "What processes are best suited for AI automation ROI?",
    answer:
      "High-volume, data-intensive processes with clear input/output definitions deliver the strongest ROI: document processing, invoice management, customer request routing, demand forecasting, compliance reporting, and quality control. Processes with measurable error rates and documented business rules automate most reliably. Unstructured workflows with no documented baseline produce inconsistent results.",
  },
  {
    question: "What is the difference between RPA and AI process automation?",
    answer:
      "Robotic Process Automation follows fixed rules on structured data. AI process automation handles unstructured inputs like documents, emails, and images, makes context-sensitive judgments, and improves over time. For text-heavy workflows, LLM integration using Claude or GPT-4 via API outperforms traditional RPA with far less rules-maintenance overhead and significantly better handling of edge cases.",
  },
  {
    question: "How do I calculate the cost of errors in my current process?",
    answer:
      "Start with your current error rate (typically 4-8% for data-intensive workflows). Multiply by daily error volume, then assign cost per error: rework time at loaded labor rate, customer impact value, and compliance penalty exposure. Most teams discover their error cost is 2-3x higher than expected. That number belongs in your ROI model from day one, not discovered after automation is live.",
  },
] as const;

function AiProcessAutomationRoiFaqAccordion() {
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
