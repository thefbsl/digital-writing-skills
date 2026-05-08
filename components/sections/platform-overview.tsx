"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Sparkles } from "lucide-react";

import { FadeInSection } from "@/components/sections/fade-in-section";

export function PlatformOverview() {
  return (
    <FadeInSection className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-medium text-primary">
            Why WriteLab exists
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A serious workspace for English writing—anchored in{" "}
            <span className="text-primary">clarity, structure, and momentum</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Learners move between guided practice, digital writing tools, and
            analytics that celebrate improvement without noise. The interface is
            calm on purpose so attention stays on craft, not clutter.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Sparkles,
              title: "Adaptive coaching",
              body: "Suggestions that respect your genre—academic, professional, or creative.",
            },
            {
              icon: Layers,
              title: "Structured practice",
              body: "Tasks build from thesis to paragraph so revision has direction.",
            },
            {
              icon: ShieldCheck,
              title: "Privacy-minded",
              body: "Drafting stays in your session; analytics are designed for insight, not surveillance.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              className="rounded-2xl border border-border/70 bg-card/60 p-5 shadow-lg backdrop-blur-xl"
            >
              <item.icon className="size-8 text-primary" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
