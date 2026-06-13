export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  badge?: string;
  publishedAt: string;
  mainImage?: {
    asset: { url: string; metadata?: { lqip?: string } };
    alt?: string;
  };
  author?: {
    name: string;
    image?: { asset: { url: string } };
  };
  categories?: { title: string; slug: { current: string } }[];
}

export type RelatedBlogPost = Pick<
  BlogPost,
  "title" | "slug" | "publishedAt"
>;
