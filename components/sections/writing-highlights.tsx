"use client";

import { motion } from "framer-motion";
import { BookOpen, PenLine, Target } from "lucide-react";
import Link from "next/link";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Target,
    title: "Clearer arguments",
    text: "Thesis-first planning, counterargument drills, and cohesion checks.",
  },
  {
    icon: BookOpen,
    title: "Academic tone",
    text: "Vocabulary tiers, signposting, and citation-friendly structure reminders.",
  },
  {
    icon: PenLine,
    title: "Visible growth",
    text: "Weekly rhythm and skill lift trends you can act on—not vanity metrics.",
  },
];

export function WritingHighlights() {
  return (
    <FadeInSection className="border-y border-border/50 bg-muted/20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">
              Writing improvement
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where learners actually get sharper
            </h2>
            <p className="mt-3 text-muted-foreground">
              Move from vague drafts to purpose-driven revision—with pathways for
              essays, emails, timed tests, and creative pieces.
            </p>
          </div>
          <Link
            href="/progress"
            className={cn(
              buttonVariants({ variant: "outline", className: "w-fit rounded-full" })
            )}
          >
            View progress analytics
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.li
              key={h.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * i }}
              className="rounded-2xl border border-border/60 bg-gradient-to-b from-card/90 to-card/50 p-6 shadow-lg backdrop-blur-xl"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <h.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {h.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
