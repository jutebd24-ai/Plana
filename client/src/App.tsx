import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Portfolio from "@/pages/portfolio";
import PortfolioFull from "@/pages/portfolio-full";
import Services from "@/pages/services";
import Clients from "@/pages/clients";
import Contact from "@/pages/contact";
import ServiceDetail from "@/pages/service-detail";
import ServiceDetailFull from "@/pages/service-detail-full";
import StyleShowcase from "@/pages/style-showcase";
import CorporateWebsiteDesign from "@/pages/corporate-website-design";
import MultiVendorMarketplace from "@/pages/multi-vendor-marketplace";
import CustomWebPortals from "@/pages/custom-web-portals";
import CMSDevelopment from "@/pages/cms-development";
import WebsiteMaintenance from "@/pages/website-maintenance";
import UIUXDesign from "@/pages/ui-ux-design";
import LandingPageDesign from "@/pages/landing-page-design";
import EcommerceDevelopment from "@/pages/ecommerce-development";
import CaseStudiesPage from "@/pages/case-studies";
import ProjectDetail from "@/pages/project-detail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={PortfolioFull} />
      <Route path="/services" component={Services} />
      <Route path="/services/content-copywriting-services" component={ServiceDetailFull} />
      <Route path="/services/mobile-applications" component={ServiceDetailFull} />
      <Route path="/services/website-design-development" component={ServiceDetailFull} />
      <Route path="/services/corporate-website-design" component={CorporateWebsiteDesign} />
      <Route path="/services/multi-vendor-marketplace" component={MultiVendorMarketplace} />
      <Route path="/services/custom-web-portals" component={CustomWebPortals} />
      <Route path="/services/cms-development" component={CMSDevelopment} />
      <Route path="/services/website-maintenance" component={WebsiteMaintenance} />
      <Route path="/services/ui-ux-design" component={UIUXDesign} />
      <Route path="/services/landing-page-design" component={LandingPageDesign} />
      <Route path="/services/ecommerce-development" component={EcommerceDevelopment} />
      <Route path="/services/:service" component={ServiceDetail} />
      <Route path="/style-showcase" component={StyleShowcase} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/case-studies/:project" component={ProjectDetail} />
      <Route path="/projects/:project" component={ProjectDetail} />
      <Route path="/clients" component={Clients} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </LanguageProvider>
  );
}

export default App;
