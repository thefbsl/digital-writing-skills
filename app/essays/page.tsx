import type { Metadata } from "next";

import { FadeInSection } from "@/components/sections/fade-in-section";

export const metadata: Metadata = {
  title: "Essays · WriteLab",
  description:
    "Frameworks for academic, opinion, and timed essays—with planning scaffolds and revision checklists.",
};

export default function EssaysPage() {
  return (
    <div className="pb-20">
      <FadeInSection className="border-b border-border/50 bg-muted/20 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-primary">Essay lab</p>
          <h1 className="font-heading mt-2 text-4xl font-semibold">
            From prompt to polished argument
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Use these outlines as guardrails—each section signals what readers expect in
            academic and high-stakes writing.
          </p>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="font-heading text-xl font-semibold">Academic argument</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted-foreground">
            <li>Anchor with a contestable thesis and scope.</li>
            <li>Map key warrants—why your evidence actually matters.</li>
            <li>Dedicate paragraphs to synthesis, not isolated quotes.</li>
            <li>Close by extending the conversation (implication or limitation).</li>
          </ol>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold">Opinion & editorial voice</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Lead with a clear stance, layer reasons from strongest to supportive, and
            acknowledge one genuine tension before your closing punch. Readers trust
            writers who concede complexity while choosing a side.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold">Timed responses</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Budget time: rapid plan (thesis + two supports), draft without perfectionism,
            reserve minutes for cohesion passes—transitions first, then word-level polish.
          </p>
        </section>
      </div>
    </div>
  );
}
