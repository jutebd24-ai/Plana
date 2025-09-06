import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

interface SidebarProps {
  onNavigate?: (section: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const navigationItems = [
    { href: "/", label: "Home", hasSubmenu: false, isRoute: true },
    { href: "/about", label: "About Us", hasSubmenu: false, isRoute: true },
    { href: "/portfolio", label: "Portfolio", hasSubmenu: false, isRoute: true },
    { 
      href: "#services", 
      label: "Services", 
      hasSubmenu: true,
      submenu: [
        {
          title: "Web Design & Development",
          items: [
            { label: "Corporate Website Design", href: "/services/corporate-website-design" },
            { label: "E-commerce Development", href: "/services/ecommerce-development" },
            { label: "Multi-vendor Marketplace", href: "/services/multi-vendor-marketplace" },
            { label: "Custom Web Portals", href: "/services/custom-web-portals" },
            { label: "CMS Development", href: "/services/cms-development" },
            { label: "Landing Page Design", href: "/services/landing-page-design" },
            { label: "UI/UX Design", href: "/services/ui-ux-design" },
            { label: "Website Maintenance", href: "/services/website-maintenance" }
          ]
        },
        {
          title: "Digital Marketing",
          items: [
            { label: "SEO Services", href: "/services/seo-services" },
            { label: "Social Media Marketing", href: "/services/social-media-marketing" },
            { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
            { label: "Content Marketing", href: "/services/content-marketing" }
          ]
        },
        {
          title: "Mobile App Development",
          items: [
            { label: "iOS App Development", href: "/services/ios-app-development" },
            { label: "Android App Development", href: "/services/android-app-development" },
            { label: "Custom Mobile Apps", href: "/services/custom-mobile-apps" }
          ]
        },
        {
          title: "Brand & Creative",
          items: [
            { label: "Branding & Identity", href: "/services/branding-identity" },
            { label: "Brand Audit", href: "/services/brand-audit" },
            { label: "Content Writing", href: "/services/content-writing" }
          ]
        }
      ]
    },
    { href: "#case-studies", label: "Case Studies", hasSubmenu: false },
    { href: "/clients", label: "Clients", hasSubmenu: false, isRoute: true },
    { href: "/contact", label: "Contact", hasSubmenu: false, isRoute: true },
  ];

  const handleNavigation = (href: string, hasSubmenu: boolean = false) => {
    if (hasSubmenu) {
      setExpandedSection(expandedSection === href ? null : href);
      return;
    }
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
    onNavigate?.(href);
  };
  
  const handleServiceClick = (href: string) => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-primary transition-colors"
          data-testid="menu-toggle"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full h-full bg-black border-none p-0 shadow-2xl max-w-none fixed inset-0 z-50 overflow-y-auto sm:w-screen"
        data-testid="sidebar"
        style={{ touchAction: 'pan-y' }}
      >
        <div className="flex flex-col min-h-full relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(https://plana.ae/web-assets/imgs/about/menubg.webp)',
              filter: 'brightness(0.3)'
            }}
          />
          
          {/* Content Container */}
          <div className="relative z-10 flex flex-col min-h-full">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-between items-center p-8 pb-4"
            >
              <div className="text-2xl font-bold text-white tracking-wider">
                <img 
                  src="https://plana.ae/web-assets/imgs/logo-sidebar.svg" 
                  alt="Plan A" 
                  className="h-10 w-auto filter brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'block';
                  }}
                />
                <span className="hidden">PLAN A</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors"
                data-testid="close-sidebar"
              >
                <X className="h-6 w-6" />
              </Button>
            </motion.div>

            {/* Main Content - Responsive Layout */}
            <div className="flex flex-1 px-4 sm:px-8 pb-8 flex-col lg:flex-row">
              {/* Column 1: Get in touch */}
              <div className="flex-1 mb-8 lg:mb-0 lg:pr-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="text-primary font-semibold text-xl mb-6">Get in touch</h2>
                  
                  <div className="space-y-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <a
                          href="tel:80075262"
                          className="text-primary hover:underline text-base"
                          data-testid="phone-link"
                        >
                          800 PLANA (75262)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-gray-400">Mobile</p>
                        <a
                          href="tel:+971553068999"
                          className="text-primary hover:underline text-base"
                          data-testid="mobile-link"
                        >
                          +971 55 306 8999
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <a
                          href="mailto:info@plana.ae"
                          className="text-primary hover:underline text-base"
                          data-testid="email-link"
                        >
                          info@plana.ae
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-xs text-gray-400">Address</p>
                        <div className="text-gray-300 text-sm">
                          <p>Office 906, Le Solarium Bldg</p>
                          <p>Dubai Silicon Oasis, Dubai, UAE</p>
                          <p>P.O.Box: 233316 Dubai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="pt-4"
                  >
                    <Button 
                      className="bg-primary text-black hover:bg-primary/90 font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      REQUEST A QUOTATION
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Column 2: Menu */}
              <div className="flex-1 mb-8 lg:mb-0 lg:px-4 lg:border-l lg:border-r border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="text-primary font-semibold text-xl mb-6">Menu</h2>
                  
                  <nav className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <motion.div 
                        key={item.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        {item.isRoute ? (
                          <Link href={item.href}>
                            <button
                              onClick={() => setIsOpen(false)}
                              className="text-white hover:text-primary transition-all duration-300 block py-2 w-full text-left text-lg font-light hover:translate-x-2 transform relative group flex items-center justify-between"
                              data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                            >
                              <span className="relative z-10">{item.label}</span>
                              <div className="absolute left-0 top-0 w-0 h-full bg-primary/10 group-hover:w-full transition-all duration-300 -z-10" />
                            </button>
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => handleNavigation(item.href, item.hasSubmenu)}
                              className="text-white hover:text-primary transition-all duration-300 block py-2 w-full text-left text-lg font-light hover:translate-x-2 transform relative group flex items-center justify-between"
                              data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                            >
                              <span className="relative z-10">{item.label}</span>
                              {item.hasSubmenu && (
                                <motion.div
                                  animate={{ rotate: expandedSection === item.href ? 90 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </motion.div>
                              )}
                              <div className="absolute left-0 top-0 w-0 h-full bg-primary/10 group-hover:w-full transition-all duration-300 -z-10" />
                            </button>
                            
                            {/* Submenu */}
                            <AnimatePresence>
                              {item.hasSubmenu && expandedSection === item.href && item.submenu && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden ml-4 mt-2"
                                >
                                  <div className="space-y-3">
                                    {item.submenu.map((category, catIndex) => (
                                      <motion.div
                                        key={catIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: catIndex * 0.1 }}
                                        className="space-y-2"
                                      >
                                        <h4 className="text-primary text-sm font-semibold uppercase tracking-wide">
                                          {category.title}
                                        </h4>
                                        <div className="space-y-1 ml-2">
                                          {category.items.map((subItem, subIndex) => (
                                            <Link key={subIndex} href={subItem.href}>
                                              <motion.button
                                                onClick={() => handleServiceClick(subItem.href)}
                                                className="text-gray-300 hover:text-white text-sm block py-1 w-full text-left hover:translate-x-1 transition-all duration-200"
                                                whileHover={{ x: 4 }}
                                              >
                                                {subItem.label}
                                              </motion.button>
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              </div>

              {/* Column 3: Company Info */}
              <div className="flex-1 lg:pl-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-primary font-semibold text-xl mb-6">Company Info</h2>
                  
                  <div className="space-y-4">
                    <div className="text-white">
                      <p className="font-semibold mb-2 text-lg tracking-wider">LOCATIONS</p>
                      <p className="text-gray-300 text-base">DUBAI • RIYADH • LONDON</p>
                    </div>

                    <div className="text-gray-300 text-sm">
                      <p className="font-semibold mb-2 text-white">About Plan A</p>
                      <p className="leading-relaxed">
                        We are a homegrown digital creative agency in Dubai, powering clients and brands of purpose to achieve their kind of success. Your goals create our milestones, but the finish line we draw is always beyond.
                      </p>
                    </div>

                    <div className="text-gray-300 text-sm">
                      <p className="font-semibold mb-2 text-white">Follow Us</p>
                      <div className="space-y-1">
                        <a href="#" className="block hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="block hover:text-primary transition-colors">Instagram</a>
                        <a href="#" className="block hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="block hover:text-primary transition-colors">Facebook</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}