import Image from "next/image";

export function generateArticleHeadingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function ArticleH2({
  children,
  id,
}: {
  children: string;
  id?: string;
}) {
  const headingId = id ?? generateArticleHeadingId(children);
  return (
    <h2 id={headingId} className="scroll-mt-24">
      {children}
    </h2>
  );
}

export function ArticleBodyImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="my-12 relative w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={628}
        quality={80}
        priority={priority}
        unoptimized
        className="w-full h-auto block"
      />
    </div>
  );
}
