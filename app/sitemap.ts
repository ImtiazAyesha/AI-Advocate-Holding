import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.evrenai.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.evrenai.com/thinking",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.evrenai.com/thinking/build-vs-buy-ai-cto-decision-framework",
      lastModified: new Date("2026-06-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/ai-process-automation-roi",
      lastModified: new Date("2026-06-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/autonomous-ai-agents-enterprise",
      lastModified: new Date("2026-06-04"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/mvp-vs-poc",
      lastModified: new Date("2026-06-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/how-to-build-an-ai-product",
      lastModified: new Date("2026-06-03"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/when-to-use-llms-in-your-product",
      lastModified: new Date("2026-06-03"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/ai-in-product-development-lifecycle",
      lastModified: new Date("2026-06-04"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.evrenai.com/thinking/how-to-choose-ai-model",
      lastModified: new Date("2026-06-04"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
