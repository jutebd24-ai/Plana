import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { AgencyIntro } from "@/components/sections/agency-intro";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { CaseStudiesShowcase } from "@/components/sections/case-studies-showcase";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { ScrollingBanner } from "@/components/ui/scrolling-banner";
import { TechnologyCarousel } from "@/components/sections/technology-carousel";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";

export default function Home() {
  const { isVisible } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />
        <AgencyIntro />
        <Portfolio />
        <Services />
        <TechnologyCarousel />
        <ScrollingBanner />
        <CaseStudiesShowcase />
        <CaseStudies />
        <Clients />
        <Contact />
      </main>

      <Footer />


      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        data-testid="scroll-to-top"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
