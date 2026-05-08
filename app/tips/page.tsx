import type { Metadata } from "next";

import { TipsAccordion } from "@/components/sections/tips-accordion";
import { TipsArticlesGrid } from "@/components/sections/tips-articles-grid";

export const metadata: Metadata = {
  title: "Tips · WriteLab",
  description:
    "Grammar guidance, essay structure, academic vocabulary, linking words, and reading guides.",
};

export default function TipsPage() {
  return (
    <div className="pb-20">
      <header className="border-b border-border/50 bg-muted/15 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-primary">Learning library</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold tracking-tight">
            Sharper writing habits, step by step
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Browse condensed guides, expand reference topics, and pick up techniques you
            can use in the next drafting session.
          </p>
        </div>
      </header>
      <TipsArticlesGrid />
      <TipsAccordion />
    </div>
  );
}
