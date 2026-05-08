import type { Metadata } from "next";

import { AcademicContributors } from "@/components/sections/academic-contributors";
import { FadeInSection } from "@/components/sections/fade-in-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata: Metadata = {
  title: "About · WriteLab",
  description:
    "Why WriteLab exists, how digital tools elevate writing skills, and our approach to modern, learner-centered education.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <FadeInSection className="border-b border-border/50 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-primary">About WriteLab</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Writing improvement, designed for how people learn today
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            WriteLab brings digital writing tools, structured practice, and analytics into
            one calm workspace. Our purpose is straightforward: make feedback legible,
            revision habitual, and progress visible—without turning learning into
            performance theater.
          </p>
        </div>
      </FadeInSection>

      <article className="mx-auto flex max-w-3xl flex-col gap-10 px-4 pb-14 pt-16 sm:px-6 lg:gap-11 lg:px-8">
        <section>
          <h2 className="font-heading text-2xl font-semibold">
            Why digital tools matter for writing skills
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Strong writers iterate. Digital environments can surface patterns—repeated
            vague verbs, lost transitions, uneven rhythm—that are hard to see when you
            read only once. The right tooling does not replace thinking; it makes
            improvement cycles shorter and more informed.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold">
            Educational benefits we optimize for
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-muted-foreground">
            <li>Clear learning intentions for every task (genre, audience, constraints).</li>
            <li>Feedback that names actionable next steps—not only error flags.</li>
            <li>Analytics that reward consistency and depth, not word-count vanity.</li>
            <li>Accessibility: readable layouts, calm motion, keyboard-friendly controls.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold">
            Modern learning approaches
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We blend deliberate practice with guided scaffolding: predictable rituals—
            plan, draft, analyze, revise—so skill growth compounds. Short sessions with
            a visible ladder of skills outperform sporadic cramming, especially for
            language learners balancing many commitments.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold">
            AI-assisted environments, used responsibly
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            WriteLab is built around the idea that assistance should be{" "}
            <span className="font-medium text-foreground">transparent</span>: learners see
            why a suggestion appears, retain authorship of ideas, and learn the underlying
            move—whether tightening a thesis or improving cohesion. The platform mirrors
            how leading programs pair instructor judgment with scalable guidance—without
            replacing the writer’s voice.
          </p>
        </section>

        <AcademicContributors />
      </article>

      <TestimonialsSection />
    </div>
  );
}
