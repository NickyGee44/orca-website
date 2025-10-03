"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "./ui/ShimmerButton";

type HeroContent = {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({ content }: { content?: HeroContent }) {
  return (
    <section className="relative w-full py-24 sm:py-36 text-foreground overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/orca-logo-2-white.png"
      >
        <source src="/orca_hero_video%20-%20Made%20with%20Clipchamp.mp4" type="video/mp4" />
      </video>

      {/* Scrim to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55 dark:from-black/65 dark:via-black/45 dark:to-black/65" />

      <div className="relative mx-auto max-w-6xl px-6 grid gap-8 sm:grid-cols-2 items-center">
        <div>
          <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
        >
          {content?.title ?? "Best Freight Audit Company"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
        >
          {content?.subtitle ?? "Get full supply chain visibility to cut costs, optimize processes and maximize profits."}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
          className="mt-6 flex flex-col sm:flex-row gap-3"
        >
          {content?.primaryCta && (
            <Link href={content.primaryCta.href}>
              <ShimmerButton background="rgba(255,255,255,1)" className="text-black px-5 py-3 text-sm font-medium">{content.primaryCta.label}</ShimmerButton>
            </Link>
          )}
          <a href="#faq" className="rounded-full border border-foreground/20 px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/40">
            Read FAQ
          </a>
        </motion.div>
        </div>
        <div className="hidden sm:block" />
      </div>
    </section>
  );
}



