import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { KanbanSection } from "@/components/sections/KanbanSection";
import { Navigation } from "@/components/sections/Navigation";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ReportsSection } from "@/components/sections/ReportsSection";
import { SolutionOverviewSection } from "@/components/sections/SolutionOverviewSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { WhoUsesSection } from "@/components/sections/WhoUsesSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustedBySection />
        <PainPointsSection />
        <SolutionOverviewSection />
        <FeaturesSection />
        <KanbanSection />
        <WhoUsesSection />
        <ReportsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
