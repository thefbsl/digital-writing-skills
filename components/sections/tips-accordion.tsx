"use client";

import { motion } from "framer-motion";

import { FadeInSection } from "@/components/sections/fade-in-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const TIPS_TOPICS = [
  {
    title: "Grammar essentials",
    items: [
      "Match tense to your time frame—avoid drifting between past and present without a reason.",
      "Check subject–verb agreement when subjects are long or separated by clauses.",
    ],
  },
  {
    title: "Essay structure",
    items: [
      "Open with a thesis that forecasts your sections; readers should know your promise.",
      "Use one idea per paragraph and end with a sentence that pivots forward.",
    ],
  },
  {
    title: "Academic vocabulary",
    items: [
      "Prefer precise verbs: analyze, synthesize, clarify rather than vague “show” or “talk about.”",
      "Collocations matter—note “conduct research,” “draw a conclusion,” “raise a question.”",
    ],
  },
  {
    title: "Linking words",
    items: [
      "Contrast: however, nevertheless, on the other hand.",
      "Cause: therefore, consequently, as a result; Addition: furthermore, moreover.",
    ],
  },
  {
    title: "Common mistakes",
    items: [
      "Comma splices—two full sentences need more than a comma between them.",
      "Over-coordination: strings of “and” hide hierarchy; use subordination for nuance.",
    ],
  },
] as const;

export function TipsAccordion() {
  return (
    <FadeInSection className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-primary">Quick reference</p>
            <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Practical tips you can use today
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              Expand a topic for reminders—short, scannable notes for real drafting
              sessions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/60 to-muted/30 p-6 shadow-lg backdrop-blur-xl"
            >
              <p className="text-sm font-medium text-foreground">
                Revision habit
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Read aloud once for flow, scan once for patterns, then fix meaning before
                micro-edits. Small loops beat marathon sessions.
              </p>
            </motion.div>
          </div>

          <Card className="border-border/70 bg-card/65 shadow-xl backdrop-blur-xl">
            <CardContent className="pt-6">
              <Accordion defaultValue={["grammar-essentials"]}>
                {TIPS_TOPICS.map((section, i) => (
                  <AccordionItem
                    key={section.title}
                    value={section.title.toLowerCase().replace(/\s+/g, "-")}
                    className="border-border/60"
                  >
                    <AccordionTrigger className="px-1 text-left text-base hover:no-underline">
                      <span className="font-medium">{section.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-4">
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.04 * i }}
                        className="space-y-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span
                              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </FadeInSection>
  );
}
