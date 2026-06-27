import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aiadvocateholding.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.aiadvocateholding.com/thinking",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.aiadvocateholding.com/thinking/openai-claude-api-integration-guide",
      lastModified: new Date("2026-06-20"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.aiadvocateholding.com/thinking/workflow-automation-guide",
      lastModified: new Date("2026-06-18"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.aiadvocateholding.com/thinking/how-to-build-ai-chatbot",
      lastModified: new Date("2026-06-15"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.aiadvocateholding.com/thinking/qa-automation-ai-development",
      lastModified: new Date("2026-06-10"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.aiadvocateholding.com/thinking/scalable-saas-platform-guide",
      lastModified: new Date("2026-06-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
