import type { Metadata } from "next";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources · WriteLab",
  description:
    "Curated reference sheets, downloadable-style summaries, and extension reading for writers.",
};

const items = [
  {
    title: "Connector bank",
    detail: "Contrast, cause, concession, and emphasis—organized by rhetorical job.",
  },
  {
    title: "Tone ladder",
    detail: "Move from informal → neutral → formal without sounding stiff.",
  },
  {
    title: "Revision macro checklist",
    detail: "Thesis fit, paragraph unity, citation hygiene, then micro edits.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pb-20">
      <FadeInSection className="border-b border-border/50 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-primary">Library</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold">Resource shelf</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Quick-reference artifacts you can pair with lessons on the Tips page or
            sessions in Practice.
          </p>
        </div>
      </FadeInSection>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border-border/60 bg-card/70 shadow-lg backdrop-blur-xl"
          >
            <CardContent className="p-6">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
