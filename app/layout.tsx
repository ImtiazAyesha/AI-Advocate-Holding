import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: "AI Advocate Holding - Enterprise AI Consulting & Automation",
  description:
    "Stop experimenting with AI. Start driving measurable enterprise ROI. AI Advocate Holding delivers custom AI strategy, automation, and integration for growth-focused businesses.",
  keywords: [
    "AI consulting",
    "enterprise AI",
    "AI automation",
    "AI ROI",
    "business intelligence",
    "AI integration",
  ],
  openGraph: {
    title: "AI Advocate Holding - Enterprise AI Consulting & Automation",
    description:
      "Stop experimenting with AI. Start driving measurable enterprise ROI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", inter.variable, plusJakarta.variable)}
    >
      <body className="antialiased bg-evren-warm-white text-evren-charcoal font-body">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
