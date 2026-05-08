"use client";

import { motion } from "framer-motion";
import { Clock, FileText, Lightbulb } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "How thesis statements anchor academic essays",
    excerpt:
      "A strong promise in the opening paragraph gives readers a map—and gives you a filter for every paragraph that follows.",
    read: "8 min",
    icon: FileText,
  },
  {
    title: "Cohesion without repetition",
    excerpt:
      "Use echo words sparingly; rely on pronouns, synonyms, and logical connectors to stitch ideas together.",
    read: "6 min",
    icon: Lightbulb,
  },
  {
    title: "Timed writing: pacing under pressure",
    excerpt:
      "Split the clock: plan, draft, revise. Even two minutes of planning prevents costly structural drift.",
    read: "5 min",
    icon: Clock,
  },
];

export function TipsArticlesGrid() {
  return (
    <section className="border-t border-border/50 bg-muted/15 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Guides</p>
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Deepen your craft
          </h2>
          <p className="mt-3 text-muted-foreground">
            Article-style outlines you can apply immediately—optimized for readability
            on any screen.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <Card className="group h-full border-border/60 bg-card/70 shadow-lg backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/25">
                <CardContent className="p-6">
                  <a.icon className="size-9 text-primary" />
                  <h3 className="mt-4 font-semibold leading-snug group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-medium text-muted-foreground">
                    Reading time · {a.read}
                  </p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
