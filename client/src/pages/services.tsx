import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ServiceCTA } from "@/components/sections/service-cta";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        <ServiceHero />
        <ServiceGrid />
        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}