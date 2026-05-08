import type { Metadata } from "next";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Feedback · WriteLab",
  description:
    "Share structured feedback about your learning experience with the WriteLab team.",
};

export default function FeedbackPage() {
  return (
    <div className="pb-20">
      <FadeInSection className="border-b border-border/50 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-primary">Voice matters</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold">Tell us what helps</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This form is a UI placeholder—there is no backend. Use it to imagine how learners
            could flag confusing flows or celebrate features that worked.
          </p>
        </div>
      </FadeInSection>

      <form className="mx-auto max-w-2xl space-y-6 px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <label htmlFor="fb-note" className="text-sm font-medium">
            Your message
          </label>
          <textarea
            id="fb-note"
            rows={6}
            className="border-input bg-background ring-offset-background mt-2 flex min-h-[160px] w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="What part of your writing routine did WriteLab support best?"
          />
        </div>
        <Button type="button" className="rounded-full px-6">
          Submit (preview UI)
        </Button>
      </form>
    </div>
  );
}
