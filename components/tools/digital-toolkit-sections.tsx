"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  BookOpen,
  Languages,
  LineChart,
  Quote,
  SpellCheck,
  Wand2,
} from "lucide-react";

import { FadeInSection } from "@/components/sections/fade-in-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const grammar = [
  {
    title: "Agreement checker mindset",
    body: "Track every subject across long clauses—especially after “that,” “which,” or appositive phrases.",
    badge: "Mechanics",
  },
  {
    title: "Punctuation that clarifies",
    body: "Semicolons link independent ideas; em dashes add emphasis—choose one voice per paragraph.",
    badge: "Clarity",
  },
];

const vocabulary = [
  { word: "articulate", alt: "say, talk about" },
  { word: "synthesize", alt: "combine, integrate" },
  { word: "consequently", alt: "so, therefore" },
];

const analytics = [
  { label: "Sentence length variance", value: "Healthy spread", hint: "Avoiding monotone rhythm" },
  { label: "Lexical diversity", value: "Upper band", hint: "Within academic register" },
];

export function DigitalToolkitSections() {
  return (
    <>
      <FadeInSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-primary">Writing toolkit</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold tracking-tight">
            Digital tools for stronger drafts
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore grammar assistance, vocabulary builders, and analytics blocks built
            for revision—not vanity metrics. All interactions here are frontend-only and
            designed to mirror product-grade layouts.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {grammar.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <Card className="h-full border-border/60 bg-card/70 shadow-xl backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {g.badge}
                    </span>
                    <SpellCheck className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{g.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {g.body}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-xl border border-dashed border-primary/25 bg-primary/5 p-4 text-sm text-muted-foreground">
                    Placeholder insight panel—would highlight tense shifts or comma splices
                    in a connected editor session.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="border-y border-border/50 bg-muted/15 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-primary">Vocabulary lift</p>
              <h2 className="font-heading mt-1 text-3xl font-semibold">
                Academic alternatives
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Swap conversational phrasing for precise academic verbs and connectors.
              </p>
            </div>
            <Languages className="size-12 text-primary/40" aria-hidden />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {vocabulary.map((v, i) => (
              <motion.div
                key={v.word}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-md backdrop-blur-md"
              >
                <p className="font-mono text-base font-semibold text-primary">{v.word}</p>
                <p className="mt-2 text-xs text-muted-foreground">Instead of: {v.alt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-start gap-3">
            <LineChart className="mt-1 size-7 text-primary" />
            <div>
              <h2 className="font-heading text-3xl font-semibold">Writing analytics</h2>
              <p className="mt-2 text-muted-foreground">
                Snapshot cards translate complex signals into actions—tone stability,
                cadence, and register.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {analytics.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/90 to-primary/5 p-6 shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {a.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{a.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{a.hint}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="border-t border-border/50 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/60 bg-card/70 shadow-xl backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary">
                    <Wand2 className="size-5" />
                    <span className="text-sm font-semibold">Sentence refinement</span>
                  </div>
                  <CardTitle className="text-base">Before / after</CardTitle>
                  <CardDescription>
                    Tighten nominalizations and highlight strong verbs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed">
                  <p className="rounded-lg bg-muted/50 p-3 text-muted-foreground">
                    “The research conducted by the team showed an important effect.”
                  </p>
                  <p className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    “The team’s research revealed a significant effect.”
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              <Card className="border-border/60 bg-card/70 shadow-xl backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary">
                    <Quote className="size-5" />
                    <span className="text-sm font-semibold">Citation tone</span>
                  </div>
                  <CardTitle className="text-base">Evidence sandwich</CardTitle>
                  <CardDescription>
                    Introduce sources, present findings, interpret significance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Introduce:</span> “Chen
                    (2022) argues that access shapes participation.”
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Interpret:</span> “That
                    matters for equity because…”
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Widget
              icon={BookOpen}
              title="Register reminders"
              text="Shift between formal and neutral registers depending on audience—never mix within the same paragraph without intent."
            />
            <Widget
              icon={SpellCheck}
              title="Consistency sweep"
              text="Headers, terminology, and citation style should align across sections before final polish."
            />
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

function Widget({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-muted/30 p-5 shadow-md backdrop-blur-md"
      )}
    >
      <Icon className="size-6 text-primary" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
