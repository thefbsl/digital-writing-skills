"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Amina Rahman",
    role: "Graduate researcher",
    quote:
      "The studio view made revision feel structured. I finally saw where my transitions were weak—not just typos.",
    initials: "AR",
    hue: "from-sky-400/90 to-primary",
  },
  {
    name: "James Lowell",
    role: "IELTS candidate",
    quote:
      "Practice tasks mirror real prompts. Learning analytics gave me a rhythm for timed writing without stress.",
    initials: "JL",
    hue: "from-violet-400/90 to-primary",
  },
  {
    name: "Elena Vásquez",
    role: "Community college instructor",
    quote:
      "Clean UI, zero clutter. I recommend it to students who need feedback habits, not more noise.",
    initials: "EV",
    hue: "from-indigo-400/90 to-primary",
  },
];

type TestimonialsSectionProps = {
  preview?: boolean;
};

export function TestimonialsSection({ preview = false }: TestimonialsSectionProps) {
  const items = preview ? testimonials.slice(0, 2) : testimonials;

  return (
    <FadeInSection
      id="stories"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Learners</p>
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by thoughtful writers
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Voices from students, candidates, and educators who value clarity-first
            learning.
          </p>
        </div>

        <ul
          className={cn(
            "mt-12 grid gap-6",
            items.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2"
          )}
        >
          {items.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="h-full border-border/60 bg-card/60 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <CardContent className="pt-8 pb-6">
                  <Quote className="size-9 text-primary/30" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-foreground">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground shadow-md",
                        `bg-gradient-to-br ${t.hue}`
                      )}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>

        {preview ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/about#stories"
              className={cn(buttonVariants({ variant: "outline", className: "rounded-full" }))}
            >
              More about our community
            </Link>
          </div>
        ) : null}
      </div>
    </FadeInSection>
  );
}
