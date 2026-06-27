"use client";

import ArticleContent from "@/components/sections/thinking/ArticleContent";
import { ArticleH2, generateArticleHeadingId } from "./article-helpers";

const TABLE_OF_CONTENTS = [
  { text: "Types of AI Chatbots", id: generateArticleHeadingId("Types of AI Chatbots") },
  { text: "Choosing Your AI Model", id: generateArticleHeadingId("Choosing Your AI Model") },
  { text: "The Tech Stack", id: generateArticleHeadingId("The Tech Stack") },
  { text: "Building the Chatbot Step by Step", id: generateArticleHeadingId("Building the Chatbot Step by Step") },
  { text: "Testing and Quality Assurance", id: generateArticleHeadingId("Testing and Quality Assurance") },
  { text: "Deployment and Monitoring", id: generateArticleHeadingId("Deployment and Monitoring") },
  { text: "Frequently Asked Questions", id: generateArticleHeadingId("Frequently Asked Questions") },
];

type Props = {
  article: { title: string; publishedAt?: string; author?: { name?: string }; categories?: { title: string }[]; mainImage?: { asset?: { url?: string }; alt?: string } };
  relatedArticles: { title: string; slug: { current: string }; publishedAt: string }[];
};

export default function AIChatbotArticle({ article, relatedArticles }: Props) {
  return (
    <ArticleContent article={article} relatedArticles={relatedArticles} tableOfContents={TABLE_OF_CONTENTS} readingTimeMinutes={10} heroImageSrc="/blog-images/how-to-build-ai-chatbot/hero.svg" heroImageAlt="AI chatbot interface showing conversation powered by GPT-4 and Claude">
      <p>
        AI chatbots have moved well past scripted decision trees. Powered by GPT-4 and Claude 3, today's chatbots handle open-ended questions, understand context across a conversation, resolve support tickets, and operate around the clock without fatigue. For businesses, the case is straightforward: reduce support cost, improve response time, and scale customer service without scaling headcount.
      </p>
      <p>
        Building one that actually works in production requires more than wrapping an API call in a chat UI. This guide walks through the decisions, architecture, and implementation steps that separate a working demo from a reliable business tool.
      </p>

      <ArticleH2>Types of AI Chatbots</ArticleH2>
      <p>
        Customer support chatbots answer product questions, resolve common issues, and escalate complex cases to human agents. They reduce ticket volume by handling the 60 to 80 percent of queries that follow predictable patterns.
      </p>
      <p>
        Internal assistant chatbots serve your team rather than your customers. They answer questions about company policies, search internal documentation, generate reports, and help employees complete tasks faster. These are often easier to build because you control the data and user base.
      </p>
      <p>
        Sales assistant chatbots engage website visitors, qualify leads, answer product questions, and schedule demos. They operate 24 hours a day and capture opportunities that would otherwise bounce when no human is available.
      </p>
      <p>
        Specialized domain chatbots are trained or prompted to handle a specific field: legal queries, medical information (with appropriate disclaimers), financial guidance, or technical support for a specific software product. These require more careful prompt engineering and validation.
      </p>

      <ArticleH2>Choosing Your AI Model</ArticleH2>
      <p>
        For most chatbot use cases, start with GPT-4o from OpenAI. It is fast, cost-effective, handles multi-turn conversations well, and has strong instruction-following capability. It performs reliably across customer support, sales, and general assistant use cases.
      </p>
      <p>
        Choose Claude from Anthropic when your chatbot needs to handle long conversations with complex context, when the output tone needs to be carefully controlled, or when you are building in a regulated domain where safety and measured responses matter. Claude tends to produce more conservative, careful output which is the right tradeoff for some applications.
      </p>
      <p>
        For most teams, running both models with a fallback mechanism is the production-ready approach. If OpenAI is unavailable, requests fall back to Claude. This adds resilience without significant complexity.
      </p>

      <ArticleH2>The Tech Stack</ArticleH2>
      <p>
        Frontend: React with a WebSocket or Server-Sent Events connection for real-time streaming. A basic chat UI needs an input field, a message list, and a loading indicator. Keep the UI simple at first. Complexity should live in the backend.
      </p>
      <p>
        Backend: Node.js or Python handles the API calls, conversation history, and business logic. Node.js with Express is the standard choice for teams already working in JavaScript. Python with FastAPI is preferred when integrating with ML pipelines or data science workflows.
      </p>
      <p>
        Conversation storage: Store conversation history in your database (PostgreSQL works well). Each message needs a session ID, a role (user or assistant), content, and a timestamp. Retrieve the last 10 to 20 messages when building the context for each new API call.
      </p>
      <p>
        Context and retrieval: If your chatbot needs to answer questions about your specific data, implement a retrieval-augmented generation layer. Embed your documents, store them in a vector database like Pinecone or pgvector, and retrieve relevant chunks at query time to include in the prompt.
      </p>

      <ArticleH2>Building the Chatbot Step by Step</ArticleH2>
      <p>
        Start with the system prompt. This is the most important piece of the entire chatbot. A well-crafted system prompt defines the persona, sets behavioral boundaries, specifies what the bot should and should not discuss, and provides context about your business. Spend real time on this before writing any other code.
      </p>
      <p>
        Build the API route next. Create a POST endpoint that accepts a user message and session ID, retrieves conversation history from your database, appends the new message, calls the AI API with the full conversation context, saves the response to the database, and returns it to the frontend.
      </p>
      <p>
        Add streaming. Return the AI response token-by-token using Server-Sent Events or WebSockets. This makes the chatbot feel responsive even when the full response takes several seconds to generate.
      </p>
      <p>
        Implement session management. Each conversation should have a unique session ID, an expiration policy, and a maximum message limit per session to control costs and prevent abuse.
      </p>

      <ArticleH2>Testing and Quality Assurance</ArticleH2>
      <p>
        Test your chatbot with the full range of queries it will face in production, including edge cases and adversarial inputs. What happens when a user asks something completely off-topic? What if they try to get the bot to say something inappropriate? Does the bot correctly escalate to a human when it cannot help?
      </p>
      <p>
        Write automated tests that verify the API integration returns correctly structured responses. Test conversation continuity across multi-turn exchanges. Verify that context is correctly maintained and that the bot references earlier parts of the conversation appropriately.
      </p>
      <p>
        Set up output monitoring to flag responses that fall below a quality threshold. This can be as simple as logging all conversations and reviewing a sample daily, or as sophisticated as using a second AI call to evaluate each response before it is sent to the user.
      </p>

      <ArticleH2>Deployment and Monitoring</ArticleH2>
      <p>
        Deploy the backend as a containerized service so it can be scaled horizontally when demand grows. Use environment variables for all API keys. Set up health checks and automated restarts.
      </p>
      <p>
        Monitor token usage daily. AI API costs scale directly with usage and an unexpected traffic spike will show up on your bill before it shows up on your radar. Set hard spending limits in your API dashboard.
      </p>
      <p>
        Track response latency and error rates as core business metrics. A chatbot with high error rates or slow responses hurts user trust quickly. Set alerts for latency above two seconds and error rates above one percent.
      </p>
      <p>
        Collect user feedback. A simple thumbs up or thumbs down on each response gives you labeled data to improve your system prompt over time and identify categories of questions where the bot consistently underperforms.
      </p>

      <ArticleH2>Frequently Asked Questions</ArticleH2>
      <p><strong>How long does it take to build an AI chatbot?</strong><br />A basic chatbot with a custom system prompt and chat UI takes 1 to 2 weeks to build. A production-ready chatbot with retrieval, session management, monitoring, and testing takes 4 to 8 weeks.</p>
      <p><strong>How much does running an AI chatbot cost?</strong><br />Costs depend on conversation volume and message length. A chatbot handling 1,000 conversations per day with GPT-4o costs roughly $50 to $200 per month in API fees at typical message lengths.</p>
      <p><strong>Do I need a large amount of data to build a chatbot?</strong><br />No. API-based chatbots use the foundation model's general knowledge plus whatever context you provide in the prompt. For domain-specific knowledge, you add a retrieval layer rather than training a new model.</p>
      <p><strong>Can the chatbot handle multiple languages?</strong><br />Yes. GPT-4o and Claude both handle multilingual conversations well without any additional configuration. Specify in your system prompt which languages the bot should respond in.</p>
    </ArticleContent>
  );
}
