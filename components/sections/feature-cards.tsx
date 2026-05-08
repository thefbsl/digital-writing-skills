"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookMarked,
  GraduationCap,
  Layers,
  LineChart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { FadeInSection } from "@/components/sections/fade-in-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FEATURE_ITEMS = [
  {
    title: "Grammar assistance",
    description:
      "Catch patterns in tense, agreement, and punctuation before they become habits.",
    icon: Sparkles,
  },
  {
    title: "Writing analytics",
    description:
      "See readability, variety, and pacing so revision targets real friction points.",
    icon: LineChart,
  },
  {
    title: "Academic vocabulary",
    description:
      "Build a bank of precise verbs and connectors suited to essays and reports.",
    icon: BookMarked,
  },
  {
    title: "Essay structure support",
    description:
      "Map introduction, development, and synthesis with guided scaffolding.",
    icon: Layers,
  },
  {
    title: "Interactive learning",
    description:
      "Short tasks with immediate feedback keep motivation high without noise.",
    icon: GraduationCap,
  },
  {
    title: "Progress tracking",
    description:
      "Weekly snapshots show momentum across skills—not just word count.",
    icon: BarChart3,
  },
] as const;

type FeatureCardsProps = {
  variant?: "full" | "preview";
};

export function FeatureCards({ variant = "full" }: FeatureCardsProps) {
  const items =
    variant === "preview" ? FEATURE_ITEMS.slice(0, 3) : [...FEATURE_ITEMS];

  return (
    <FadeInSection
      id="features"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Platform</p>
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to write with confidence
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            {variant === "preview"
              ? "A cohesive toolkit for learners—preview a few pillars, then explore the full workspace."
              : "A cohesive toolkit for learners—glass surfaces, calm motion, and clarity-first defaults."}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card
                className={cn(
                  "group h-full border-border/60 bg-card/55 shadow-lg backdrop-blur-xl transition-all duration-300",
                  "hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
                )}
              >
                <CardHeader>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-[1.03]">
                    <f.icon className="size-6" />
                  </span>
                  <CardTitle className="mt-4 text-lg">{f.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {f.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>

        {variant === "preview" ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/tools"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "rounded-full px-6",
                })
              )}
            >
              Explore all tools
            </Link>
          </motion.div>
        ) : null}
      </div>
    </FadeInSection>
  );
}
