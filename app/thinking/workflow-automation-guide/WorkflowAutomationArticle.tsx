"use client";

import ArticleContent from "@/components/sections/thinking/ArticleContent";
import { ArticleH2, generateArticleHeadingId } from "./article-helpers";

const TABLE_OF_CONTENTS = [
  { text: "What Is Workflow Automation", id: generateArticleHeadingId("What Is Workflow Automation") },
  { text: "n8n vs Zapier vs Make: Head-to-Head", id: generateArticleHeadingId("n8n vs Zapier vs Make: Head-to-Head") },
  { text: "When to Use n8n", id: generateArticleHeadingId("When to Use n8n") },
  { text: "When to Use Zapier", id: generateArticleHeadingId("When to Use Zapier") },
  { text: "When to Use Make", id: generateArticleHeadingId("When to Use Make") },
  { text: "Real Business Use Cases", id: generateArticleHeadingId("Real Business Use Cases") },
  { text: "Common Mistakes to Avoid", id: generateArticleHeadingId("Common Mistakes to Avoid") },
  { text: "Frequently Asked Questions", id: generateArticleHeadingId("Frequently Asked Questions") },
];

type Props = {
  article: { title: string; publishedAt?: string; author?: { name?: string }; categories?: { title: string }[]; mainImage?: { asset?: { url?: string }; alt?: string } };
  relatedArticles: { title: string; slug: { current: string }; publishedAt: string }[];
};

export default function WorkflowAutomationArticle({ article, relatedArticles }: Props) {
  return (
    <ArticleContent article={article} relatedArticles={relatedArticles} tableOfContents={TABLE_OF_CONTENTS} readingTimeMinutes={8} heroImageSrc="/blog-images/workflow-automation-guide/hero.svg" heroImageAlt="Workflow automation tools comparison showing n8n, Zapier and Make">
      <p>
        Manual work is the most expensive kind of work. When your team spends hours copying data between apps, sending follow-up emails by hand, or updating spreadsheets after every sale, you are paying human attention for tasks a machine can handle in seconds. Workflow automation tools solve this problem without requiring custom code.
      </p>
      <p>
        Three tools dominate this space: n8n, Zapier, and Make. Each one works well for a different type of business. This guide helps you choose the right one.
      </p>

      <ArticleH2>What Is Workflow Automation</ArticleH2>
      <p>
        Workflow automation connects your applications and runs tasks automatically when a trigger event occurs. A trigger could be a new row in a spreadsheet, a form submission, a payment received, or a new lead in your CRM. The automation then executes one or more actions: sending an email, creating a task, updating a database, or calling an API.
      </p>
      <p>
        The value is in eliminating the human steps in between. A sales rep submits a new deal and the CRM updates, a Slack message goes out, an invoice is created, and a follow-up email is scheduled. All of that happens in seconds without anyone touching it.
      </p>

      <ArticleH2>n8n vs Zapier vs Make: Head-to-Head</ArticleH2>
      <p>
        <strong>n8n</strong> is an open-source automation tool you can self-host. It supports over 400 integrations, allows custom JavaScript in nodes, and handles complex multi-branch workflows. Because it is self-hosted, your data never leaves your infrastructure. Pricing is based on executions and is significantly cheaper than Zapier for high-volume workloads.
      </p>
      <p>
        <strong>Zapier</strong> is the most widely used automation platform. It has the largest app library (6,000 integrations), the easiest setup experience, and reliable customer support. It is the right choice for non-technical teams who need to get automations running quickly without any infrastructure management.
      </p>
      <p>
        <strong>Make</strong> (formerly Integromat) sits between n8n and Zapier. It offers a visual canvas for building complex scenarios, strong data transformation tools, and competitive pricing. It supports over 1,000 integrations and handles conditional logic and iterators better than Zapier.
      </p>

      <ArticleH2>When to Use n8n</ArticleH2>
      <p>
        Choose n8n when data privacy is a requirement and you cannot allow your business data to pass through third-party cloud infrastructure. n8n runs on your own server, which means your customer data, financial records, and internal processes stay entirely within your control.
      </p>
      <p>
        n8n is also the right choice when you need custom logic that goes beyond what visual tools support. You can write JavaScript directly inside n8n nodes, call any HTTP endpoint, and build automation that behaves like a lightweight backend. Development teams who want full control without building a separate integration service should start with n8n.
      </p>

      <ArticleH2>When to Use Zapier</ArticleH2>
      <p>
        Zapier is the right choice when speed of setup is the priority. If you need an automation running today and your team is not technical, Zapier will have it done in under an hour. The interface is simple, the documentation is excellent, and the app library covers virtually every SaaS tool on the market.
      </p>
      <p>
        Zapier works best for straightforward linear workflows: trigger, one or two actions, done. It handles multi-step zaps well but becomes expensive at scale, as pricing is based on the number of tasks executed per month.
      </p>

      <ArticleH2>When to Use Make</ArticleH2>
      <p>
        Make is the right choice when your workflow involves multiple data paths, conditional branches, or iteration over lists. The visual canvas makes complex scenario logic easier to understand and maintain than Zapier's linear step view.
      </p>
      <p>
        Make is also significantly more affordable than Zapier at medium and high volumes. If you are building automations that process thousands of records per day, Make's pricing model scales more favorably.
      </p>

      <ArticleH2>Real Business Use Cases</ArticleH2>
      <p>
        Lead routing: When a new form submission comes in, score it, assign it to the right sales rep based on location or deal size, create a CRM record, and send a personalized welcome email. This workflow runs in seconds instead of requiring a human to check the inbox and manually route leads.
      </p>
      <p>
        Invoice and payment processing: When a payment is received, generate an invoice, update the accounting system, notify the customer, and log the transaction in a spreadsheet. No manual data entry.
      </p>
      <p>
        AI-enhanced workflows: Connect your automation tool to OpenAI or Claude API. When a new customer support ticket comes in, generate a draft response using the AI, send it to the support agent for review, and log the resolution time. The agent reviews rather than writes, cutting handle time by 60 percent or more.
      </p>

      <ArticleH2>Common Mistakes to Avoid</ArticleH2>
      <p>
        Do not automate a broken process. If your manual workflow has errors, automating it will produce those same errors faster and at higher volume. Fix the process logic before automating it.
      </p>
      <p>
        Do not skip error handling. Every automation should have a failure path: what happens when the API call fails, when the data format is unexpected, or when a downstream app is unavailable. Without error handling, failed automations go unnoticed.
      </p>
      <p>
        Start with one workflow and verify it completely before building more. Teams that try to automate everything at once end up with a tangle of interdependent workflows that are impossible to debug.
      </p>

      <ArticleH2>Frequently Asked Questions</ArticleH2>
      <p><strong>How much does Zapier cost?</strong><br />Zapier's free plan covers 100 tasks per month. Paid plans start at $19.99 per month for 750 tasks. High-volume plans run $69 to $799 per month depending on task count.</p>
      <p><strong>Is n8n free?</strong><br />n8n is open-source and free to self-host. A cloud-hosted plan starts at $24 per month. Self-hosting requires a server and basic DevOps knowledge.</p>
      <p><strong>Can these tools connect to AI APIs?</strong><br />Yes. All three support HTTP request nodes or dedicated OpenAI integrations that allow you to call AI APIs as part of any workflow.</p>
      <p><strong>How long does it take to build an automation?</strong><br />Simple automations take 30 minutes to 2 hours. Complex multi-branch workflows with error handling take 1 to 3 days to build and test properly.</p>
    </ArticleContent>
  );
}
