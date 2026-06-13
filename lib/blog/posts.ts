import { cache } from "react";
import { STATIC_BLOG_POSTS } from "@/lib/static-blog-posts";
import type { BlogPost, RelatedBlogPost } from "@/lib/blog/types";

function sortByPublishedAt(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export const getPosts = cache(async (): Promise<BlogPost[]> => {
  return sortByPublishedAt(STATIC_BLOG_POSTS);
});

export const getPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    return (
      STATIC_BLOG_POSTS.find((post) => post.slug.current === slug) ?? null
    );
  }
);

export const getRelatedPosts = cache(
  async (slug: string, categoryTitle?: string): Promise<RelatedBlogPost[]> => {
    if (!categoryTitle) return [];

    return sortByPublishedAt(
      STATIC_BLOG_POSTS.filter(
        (post) =>
          post.slug.current !== slug &&
          post.categories?.some((category) => category.title === categoryTitle)
      )
    ).map(({ title, slug, publishedAt }) => ({
      title,
      slug,
      publishedAt,
    }));
  }
);
