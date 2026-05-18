import { FaqSection } from "@/components/faq";
import { FinalCtaSection, AboutSection, FeaturesSection, LineInfoSection, ProblemSection, ProjectExampleSection, SafetySection, TargetSection } from "@/components/sections";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MobileFixedCta } from "@/components/mobile-fixed-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <AboutSection />
        <FeaturesSection />
        <TargetSection />
        <LineInfoSection />
        <ProjectExampleSection />
        <SafetySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileFixedCta />
    </>
  );
}
