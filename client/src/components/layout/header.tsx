import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/use-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Link } from "wouter";

export function Header() {
  const { scrollY } = useScrollPosition();
  const { t } = useLanguage();
  const isScrolled = scrollY > 50;
  
  const navigationItems = [
    { href: "/", label: t('nav.home'), isRoute: true },
    { href: "/about", label: t('nav.about'), isRoute: true },
    { href: "/portfolio", label: t('nav.portfolio'), isRoute: true },
    { href: "/services", label: t('nav.services'), isRoute: true },
    { href: "/contact", label: t('nav.contact'), isRoute: true },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <div className="flex items-center space-x-4">
            <Sidebar />
            <motion.div 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="https://plana.ae/web-assets/imgs/logo-sidebar.svg" 
                alt="Plan A" 
                className="h-6 sm:h-8 w-auto filter brightness-0 invert"
onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextEl) nextEl.style.display = 'block';
                }}
              />
              <span className="hidden">PLAN A</span>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigationItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.href} href={item.href}>
                    <motion.button
                      className="text-white hover:text-primary transition-colors text-sm font-medium relative group"
                      data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </motion.button>
                  </Link>
                ) : (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-white hover:text-primary transition-colors text-sm font-medium relative group"
                    data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                )
              ))}
            </nav>
            <LanguageSwitcher />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-primary text-black hover:bg-primary/90 font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="request-quote-button"
              >
                {t('contact.requestQuote')}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
