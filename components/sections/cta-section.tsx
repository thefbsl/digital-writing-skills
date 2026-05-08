"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <FadeInSection className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/12 via-card/80 to-primary/8 p-10 shadow-[0_24px_80px_-28px_oklch(0.45_0.14_264/0.4)] sm:p-14">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to build a steadier writing habit?
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              Open the practice studio with prompts, feedback panes, and
              progress cues—built for focus, not distraction.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/practice"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "h-12 rounded-full px-8 shadow-lg shadow-primary/25",
                })
              )}
            >
              Open practice studio
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-12 rounded-full border-border/80 bg-background/70 backdrop-blur-sm",
                })
              )}
            >
              Our mission
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
