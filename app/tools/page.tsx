import type { Metadata } from "next";

import { DigitalToolkitSections } from "@/components/tools/digital-toolkit-sections";

export const metadata: Metadata = {
  title: "Tools · WriteLab",
  description:
    "Grammar assistance, vocabulary enhancement, analytics, and sentence-level helpers for English writing.",
};

export default function ToolsPage() {
  return <DigitalToolkitSections />;
}
