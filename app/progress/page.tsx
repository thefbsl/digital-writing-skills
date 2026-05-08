import type { Metadata } from "next";

import { AchievementsGrid } from "@/components/sections/achievements-grid";
import { ProgressCharts } from "@/components/sections/progress-charts";

export const metadata: Metadata = {
  title: "Progress · WriteLab",
  description:
    "Learning analytics, rhythm charts, streaks, and achievement milestones for your writing journey.",
};

export default function ProgressPage() {
  return (
    <div className="pb-20">
      <header className="border-b border-border/50 bg-muted/15 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-primary">Analytics</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold tracking-tight">
            Understand your writing trajectory
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Visualize consistency, compare skill lift indices, and unlock achievements
            that reward deliberate practice.
          </p>
        </div>
      </header>
      <div className="py-10">
        <ProgressCharts variant="page" />
      </div>
      <AchievementsGrid />
    </div>
  );
}
