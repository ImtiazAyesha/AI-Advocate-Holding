import { cn } from "@/lib/utils";

interface CtaWatermarkProps {
  text: string;
  className?: string;
}

export default function CtaWatermark({ text, className }: CtaWatermarkProps) {
  const isLong = text.length > 12;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative z-0 flex items-end justify-center px-3 sm:px-6 pt-6 sm:pt-8",
        "pb-3 sm:pb-4 md:pb-5 pointer-events-none",
        className
      )}
    >
      <span
        className={cn(
          "font-heading font-extrabold leading-[0.88] tracking-tighter text-center",
          "text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] to-white/[0.03]",
          "select-none whitespace-nowrap max-w-full",
          isLong
            ? "text-[clamp(1.65rem,6.2vw,7rem)]"
            : "text-[clamp(2rem,9vw,9.25rem)]"
        )}
      >
        {text}
      </span>
    </div>
  );
}
