"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, LineChart, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const floating = [
  {
    title: "Grammar score",
    value: "92",
    sub: "+4 this week",
    icon: BookOpen,
    className: "left-[4%] top-[18%] max-sm:left-2 max-sm:top-[10%]",
    delay: 0,
  },
  {
    title: "Vocabulary",
    value: "A−",
    sub: "Academic tier",
    icon: Wand2,
    className: "right-[2%] top-[28%] max-sm:right-2 max-sm:top-[8%]",
    delay: 0.1,
  },
  {
    title: "Structure",
    value: "Strong",
    sub: "Intro → body → close",
    icon: LineChart,
    className: "bottom-[12%] left-[8%] max-sm:bottom-[4%] max-sm:left-2",
    delay: 0.2,
  },
];

export function HeroSection() {
  return (
    <FadeInSection
      id="top"
      className="relative scroll-mt-24 overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-primary" />
            AI-assisted learning for English writing
          </motion.div>

          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Improve your writing skills{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-[oklch(0.55_0.16_280)] bg-clip-text text-transparent">
              with digital tools
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Practice real tasks, see structured feedback, and build clarity—
            structure, tone, and vocabulary—in a calm workspace built for focus.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/practice"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className:
                    "h-12 rounded-full px-8 text-base shadow-lg shadow-primary/20",
                })
              )}
            >
              Start writing
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/practice"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-12 rounded-full border-border/80 bg-card/70 px-8 text-base backdrop-blur-sm",
                })
              )}
            >
              Browse exercises
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-3 text-center sm:flex sm:max-w-lg sm:gap-6 sm:text-left">
            {[
              ["3.2k+", "practice drafts"],
              ["48", "guided modules"],
              ["4.9", "learner rating"],
            ].map(([a, b], i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="rounded-2xl border border-border/60 bg-card/60 px-3 py-3 shadow-sm backdrop-blur-md sm:flex-1 sm:rounded-xl sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
              >
                <dt className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {b}
                </dt>
                <dd className="text-lg font-semibold tracking-tight sm:text-xl">
                  {a}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          {floating.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + card.delay, duration: 0.45 }}
              className={cn(
                "pointer-events-none absolute z-20 hidden w-44 rounded-2xl border border-border/70 bg-card/85 p-4 text-sm shadow-lg shadow-primary/5 backdrop-blur-xl sm:block",
                card.className
              )}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <card.icon className="size-4 text-primary" />
                <span>{card.title}</span>
              </div>
              <p className="mt-2 text-2xl font-semibold tracking-tight">
                {card.value}
              </p>
              <p className="text-xs text-muted-foreground">{card.sub}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[1.35rem] border border-border/70 bg-gradient-to-b from-card/95 to-muted/40 p-1 shadow-[0_24px_80px_-24px_oklch(0.45_0.12_264/0.35)] ring-1 ring-foreground/[0.04] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between rounded-t-[1.2rem] bg-muted/40 px-4 py-3">
              <div className="flex gap-2">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs text-muted-foreground">essay-draft.md</span>
              <span className="rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground ring-1 ring-border/80">
                Saved
              </span>
            </div>
            <div className="space-y-3 rounded-b-[1.2rem] bg-background/80 p-4 dark:bg-background/60">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Introduction</span>
                <span className="text-muted-foreground">Word count · 142</span>
              </div>
              <div className="h-px w-full bg-border/80" />
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">
                  Digital technologies reshape how we learn, collaborate, and
                  express ideas.
                </span>{" "}
                When used with intention, they can strengthen feedback loops and
                make revision visible—so improvement becomes a habit, not a
                sprint.
              </p>
              <div className="flex flex-wrap gap-2">
                {["thesis", "evidence", "cohesion"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.92_0.06_264/0.5),oklch(0.94_0.05_300/0.35),oklch(0.93_0.05_220/0.45))] opacity-70 blur-2xl"
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </FadeInSection>
  );
}
