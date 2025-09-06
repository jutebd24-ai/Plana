import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClientsHero } from "@/components/sections/clients-hero";
import { ClientsGrid } from "@/components/sections/clients-grid";

export default function Clients() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        <ClientsHero />
        <ClientsGrid />
      </main>

      <Footer />
    </div>
  );
}