"use client";

import ArticleContent from "@/components/sections/thinking/ArticleContent";
import { ArticleH2, generateArticleHeadingId } from "./article-helpers";

const TABLE_OF_CONTENTS = [
  { text: "Choosing Your Tech Stack", id: generateArticleHeadingId("Choosing Your Tech Stack") },
  { text: "Frontend Architecture with React", id: generateArticleHeadingId("Frontend Architecture with React") },
  { text: "Backend Architecture with Node.js", id: generateArticleHeadingId("Backend Architecture with Node.js") },
  { text: "Database Design for Scale", id: generateArticleHeadingId("Database Design for Scale") },
  { text: "API Design and Security", id: generateArticleHeadingId("API Design and Security") },
  { text: "Performance and Monitoring", id: generateArticleHeadingId("Performance and Monitoring") },
  { text: "Common Mistakes That Kill SaaS Products", id: generateArticleHeadingId("Common Mistakes That Kill SaaS Products") },
  { text: "Frequently Asked Questions", id: generateArticleHeadingId("Frequently Asked Questions") },
];

type Props = {
  article: { title: string; publishedAt?: string; author?: { name?: string }; categories?: { title: string }[]; mainImage?: { asset?: { url?: string }; alt?: string } };
  relatedArticles: { title: string; slug: { current: string }; publishedAt: string }[];
};

export default function SaaSPlatformArticle({ article, relatedArticles }: Props) {
  return (
    <ArticleContent article={article} relatedArticles={relatedArticles} tableOfContents={TABLE_OF_CONTENTS} readingTimeMinutes={11} heroImageSrc="/blog-images/scalable-saas-platform-guide/hero.svg" heroImageAlt="Scalable SaaS platform architecture diagram showing React, Node.js, and PostgreSQL layers">
      <p>
        Most SaaS products are built to launch. Few are built to scale. The architecture decisions made in the first three months determine whether your product handles 100 users or 100,000 users without a full rewrite. The cost of getting this wrong is not just technical debt. It is months of engineering work rebuilding systems that should have been designed correctly from the start.
      </p>
      <p>
        This guide covers the stack choices, architectural patterns, and hard lessons that separate SaaS products built to grow from products that collapse under their own success.
      </p>

      <ArticleH2>Choosing Your Tech Stack</ArticleH2>
      <p>
        For most SaaS products, the stack that ships fastest and scales furthest is React on the frontend, Node.js or Python on the backend, and PostgreSQL as the primary database. This is not the only combination that works. But it is the one with the largest talent pool, the most mature tooling, and the most proven track record at scale.
      </p>
      <p>
        React with Next.js gives you server-side rendering for SEO-sensitive pages, static generation for high-performance marketing pages, and a single framework for both the application and the public site. It is the default choice for SaaS frontends in 2026.
      </p>
      <p>
        Node.js handles API logic, authentication, background jobs, and integrations. If your product has significant data processing requirements or machine learning components, Python alongside Node.js is common. Use Node.js for the API layer and Python for data pipelines and ML.
      </p>
      <p>
        PostgreSQL handles relational data with ACID compliance, full-text search, JSON columns for semi-structured data, and row-level security for multi-tenant access control. It scales to hundreds of millions of rows without requiring a different database system.
      </p>

      <ArticleH2>Frontend Architecture with React</ArticleH2>
      <p>
        Structure your React application around features, not file types. Grouping components by feature (auth, dashboard, billing, settings) is easier to navigate than grouping by type (components, hooks, utils). When a feature grows, everything related to it is in one place.
      </p>
      <p>
        Use React Query or SWR for server state management. These libraries handle caching, background refetching, and optimistic updates. They eliminate the majority of the custom state management code teams write for data fetching. Reserve Redux or Zustand for client-only application state that does not come from the server.
      </p>
      <p>
        Implement code splitting from the start. Bundle every route separately so users only download the code for the page they are visiting. This keeps initial load times fast as the application grows. Next.js handles this automatically at the route level.
      </p>
      <p>
        Design your component library before building features. A consistent set of base components (Button, Input, Modal, Card, Table) shared across the application prevents the visual inconsistency that accumulates when every engineer builds their own components from scratch.
      </p>

      <ArticleH2>Backend Architecture with Node.js</ArticleH2>
      <p>
        Structure your backend around a layered architecture: routes handle HTTP concerns, controllers contain business logic, services handle domain operations, and data access objects handle database queries. This separation keeps each layer testable in isolation and makes the codebase easier to navigate as it grows.
      </p>
      <p>
        Use a job queue (Bull or BullMQ with Redis) for any operation that takes more than a second: sending emails, generating reports, processing uploads, calling external APIs, and running AI requests. Move these to background jobs and return immediately to the client. This keeps your API responsive and prevents timeouts.
      </p>
      <p>
        Implement multi-tenancy from day one if you are building a B2B SaaS. The two common patterns are a separate database per tenant (strong isolation, higher cost) and a shared database with a tenant ID column on every table (cost-effective, requires careful query discipline). Row-level security in PostgreSQL enforces tenant isolation at the database level, which is the safest approach.
      </p>

      <ArticleH2>Database Design for Scale</ArticleH2>
      <p>
        Design your schema with indexes before you need them rather than after. Queries on unindexed columns are fine with 10,000 rows. They break at 10 million. Add indexes on every foreign key column, every column used in WHERE clauses, and every column used in ORDER BY operations.
      </p>
      <p>
        Use connection pooling with PgBouncer or your ORM's built-in pooling. Node.js applications can create hundreds of short-lived connections under load. Databases have hard limits on concurrent connections. Pooling prevents connection exhaustion.
      </p>
      <p>
        Implement soft deletes (an is_deleted flag or deleted_at timestamp) rather than hard deletes. You will need to recover deleted records more often than you expect. Hard deletes are permanent and frequently result in support escalations that require database-level recovery.
      </p>
      <p>
        Cache expensive queries with Redis. Read-heavy data that changes infrequently (user permissions, product configuration, plan limits) should be cached and invalidated on change rather than queried on every request.
      </p>

      <ArticleH2>API Design and Security</ArticleH2>
      <p>
        Design your API around resources and use consistent URL patterns. Use versioning (/api/v1/) from the start so you can introduce breaking changes in future versions without affecting existing clients. Document every endpoint with input schemas and error responses.
      </p>
      <p>
        Implement rate limiting on every public endpoint. Unbounded API endpoints are an attack vector and a billing risk when connected to AI APIs. Use a per-user rate limit for authenticated endpoints and a per-IP limit for public endpoints.
      </p>
      <p>
        Validate all input at the API boundary. Never trust data from the client, even from authenticated users. Use a schema validation library (Zod or Joi) on every request body and query parameter. Validation failures should return clear error messages with the specific field that failed.
      </p>
      <p>
        Use short-lived access tokens (JWTs with a 15-minute expiry) and longer-lived refresh tokens. Store refresh tokens in HTTP-only cookies, not localStorage. This prevents the most common token theft vectors while keeping the user experience seamless.
      </p>

      <ArticleH2>Performance and Monitoring</ArticleH2>
      <p>
        Set up application performance monitoring before you launch. Tools like Datadog, New Relic, or the open-source Prometheus and Grafana stack give you request latency, error rates, and throughput metrics. You cannot improve what you cannot measure, and you cannot debug production incidents without this data.
      </p>
      <p>
        Implement structured logging with a consistent format. Every log entry should include a timestamp, request ID, user ID (where available), and the event being logged. Structured JSON logs are easier to query in log aggregation systems than unformatted text strings.
      </p>
      <p>
        Set up alerting for the metrics that matter most: API error rate above one percent, p95 latency above 500ms, job queue depth above a threshold, and database connection pool exhaustion. Alerts should reach the on-call engineer before users report the problem.
      </p>

      <ArticleH2>Common Mistakes That Kill SaaS Products</ArticleH2>
      <p>
        Building too much before launching. Every week of development before your first paying customer is a week of building something users may not want. Ship the smallest version that demonstrates your core value and use real usage data to guide what you build next.
      </p>
      <p>
        Ignoring multi-tenancy until it is painful to add. Adding tenant isolation to an existing application requires touching every database query, every API endpoint, and every permission check. Build it in from the start and it is a three-hour architectural decision. Retrofit it later and it is a three-month engineering project.
      </p>
      <p>
        Skipping QA automation. Teams that skip automated testing ship faster at first and slower over time. As the codebase grows, manual testing takes longer, regressions multiply, and deploys become stressful events rather than routine operations.
      </p>
      <p>
        Under-investing in observability. Teams that cannot see what their application is doing in production cannot reliably improve it. Logging, metrics, and tracing are not optional features. They are the foundation that makes everything else maintainable.
      </p>

      <ArticleH2>Frequently Asked Questions</ArticleH2>
      <p><strong>How long does it take to build a SaaS platform?</strong><br />A production-ready SaaS with authentication, billing, core features, and basic admin takes 3 to 6 months with a small team. The timeline depends heavily on feature scope and the experience level of the team.</p>
      <p><strong>Should I build a monolith or microservices?</strong><br />Start with a monolith. Microservices add operational complexity that is not worth the cost until you have strong scaling requirements or multiple independent teams. Most successful SaaS products operate as monoliths for years before splitting services.</p>
      <p><strong>What is the best way to handle authentication?</strong><br />Use an established authentication library or service (NextAuth, Auth0, or Clerk) rather than building your own. Authentication is where security bugs are most costly and most common. The investment in a proven solution pays for itself quickly.</p>
      <p><strong>How do I handle payments in a SaaS product?</strong><br />Stripe is the standard choice. It handles subscription billing, invoicing, tax collection, and payment methods. Integrate Stripe Billing rather than building your own subscription logic. The API is well-documented and the developer experience is excellent.</p>
      <p><strong>How much does it cost to run a SaaS platform?</strong><br />Infrastructure costs for a small SaaS with moderate traffic typically run $200 to $1,000 per month on a managed platform like AWS, GCP, or Heroku. Costs scale with usage but scale predictably when the architecture is designed correctly.</p>
    </ArticleContent>
  );
}
