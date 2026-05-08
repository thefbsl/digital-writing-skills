import type { Metadata } from "next";

import { ExerciseCards } from "@/components/practice/exercise-cards";
import { FadeInSection } from "@/components/sections/fade-in-section";
import { WritingEditor } from "@/components/writing/writing-editor";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, PenLine, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice · WriteLab",
  description:
    "Writing exercises, prompts, and an on-page editor with structured feedback panels.",
};

const indicators = [
  { label: "Session focus", value: "Essay body", icon: PenLine },
  { label: "Goal clarity", value: "Strong", icon: Target },
  { label: "Revision depth", value: "Layer 2", icon: LineChart },
];

export default function PracticePage() {
  return (
    <div className="pb-20">
      <FadeInSection className="border-b border-border/50 bg-muted/20 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-primary">Practice studio</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Draft, revise, and sharpen your voice
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Combine structured prompts with an editor designed for clarity. Run analysis
            passes and track qualitative indicators alongside your session goals.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {indicators.map((row) => (
              <li key={row.label}>
                <Card className="border-border/60 bg-card/70 shadow-md backdrop-blur-md">
                  <CardContent className="flex items-center gap-4 p-5">
                    <row.icon className="size-8 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{row.label}</p>
                      <p className="font-semibold">{row.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6 lg:px-8">
        <WritingEditor />
        <ExerciseCards />
      </div>
    </div>
  );
}
