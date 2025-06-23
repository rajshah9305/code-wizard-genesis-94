
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { KeyFeaturesSection } from "@/components/sections/KeyFeaturesSection";
import { InteractivePlayground } from "@/components/playground/InteractivePlayground";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ShowcaseGallery } from "@/components/showcase/ShowcaseGallery";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { SecondaryCtaSection } from "@/components/sections/SecondaryCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Navigation } from "@/components/layout/Navigation";
import { CommandPalette } from "@/components/ui/command-palette";

const Index = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] via-white to-[#E0E6EF] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF8066]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#7ACC88]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#0F4C5C]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <Navigation onCommandToggle={() => setIsCommandOpen(true)} />
      
      {/* 1. Hero Section & Primary CTA */}
      <HeroSection />

      {/* 2. Problem/Solution Overview */}
      <ProblemSolutionSection />

      {/* 3. Key Features */}
      <KeyFeaturesSection />

      {/* 4. How It Works / Interactive Demo */}
      <InteractivePlayground />

      {/* 5. Examples / Use Cases */}
      <UseCasesSection />

      {/* 6. App Gallery / Integrations */}
      <ShowcaseGallery />

      {/* 7. Success Stories / Testimonials */}
      <TestimonialsSection />

      {/* 8. The Studio */}
      <StudioSection />

      {/* 9. Pricing Plans */}
      <PricingSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Secondary CTA */}
      <SecondaryCtaSection />

      {/* 12. Footer */}
      <FooterSection />

      <CommandPalette open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </div>
  );
};

export default Index;
