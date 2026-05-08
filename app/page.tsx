import { CTASection } from "@/components/sections/cta-section";
import { FeatureCards } from "@/components/sections/feature-cards";
import { HeroSection } from "@/components/sections/hero-section";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { ProgressCharts } from "@/components/sections/progress-charts";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WritingHighlights } from "@/components/sections/writing-highlights";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlatformOverview />
      <FeatureCards variant="preview" />
      <WritingHighlights />
      <ProgressCharts variant="home" />
      <CTASection />
      <TestimonialsSection preview />
    </>
  );
}
