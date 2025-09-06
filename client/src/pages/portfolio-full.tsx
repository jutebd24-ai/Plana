import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import { AnimatedLetterSpacing } from "@/components/ui/animated-text";
import { ScrollFade } from "@/components/ui/scroll-parallax";
import { fadeInUp, staggerGrid, complexImageHover } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";
import { Link } from "wouter";

// Complete portfolio data matching the reference website
const portfolioProjects = [
  {
    id: "rabdan-academy",
    title: "Rabdan Academy",
    category: "Corporate Website Development",
    sector: "Government",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/36/gwv0aQr9L952uv7NgQXR0i5hDUotkW9vaRlZuTWG.jpg"
  },
  {
    id: "marasi-portal", 
    title: "Marasi Portal",
    category: "Waste Management Portal",
    sector: "Government",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/43/5qBUyZ8uG0ul3sxFrvTSvpq9UhpmiRftSIx8afMa.jpg"
  },
  {
    id: "yonboon-premium-collagen",
    title: "Yonboon Premium Collagen", 
    category: "E-commerce Website",
    sector: "Health & Beauty",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/44/TjIYfrzgC4AvhJBRs8WiJ8e2Nhi1CkNOt6u1fkOA.jpg"
  },
  {
    id: "decorious-interior-design",
    title: "Decorious Interior Design",
    category: "Branding, Website and Mobile Apps", 
    sector: "Interior Design",
    service: "Mobile Apps Design & Development",
    image: "https://plana.ae/storage/project/52/OMK4HS83qx4aTgITReowhTRG9xXX4WBewOgNIrJW.jpg"
  },
  {
    id: "arab-reading-challenge",
    title: "EPG - Arab Reading Challenge",
    category: "Arab Reading Challenge Stamp Design",
    sector: "Government", 
    service: "Branding",
    image: "https://plana.ae/storage/project/17/BOx57ty0cfYsOeo2xxMiU2HwCWNvkYi00sDKRSDt.jpg"
  },
  {
    id: "by-shams-perfumes",
    title: "By Shams Perfumes",
    category: "Launching a Perfume Brand for The Artist Shams Al Kuwaitia",
    sector: "Fashion",
    service: "Branding", 
    image: "https://plana.ae/storage/project/73/0KTL8NaL7YiUMAkNu38v6Tj7GP36LN6Q6nIgHly7.jpg"
  },
  {
    id: "storm-energy",
    title: "Storm Energy",
    category: "Branding and Corporate Website",
    sector: "Oil & Gas",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/47/ugfYkwcQUsvNnumAHBf5eWEgKnl5Af4lta4u1XRV.jpg"
  },
  {
    id: "activemile",
    title: "ActiveMile", 
    category: "Sports Magento E-commerce Platform",
    sector: "Sports",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/38/m1mHnBEXF0XywIXViHnuKUD8XtcZ4y44hzsRcioC.jpg"
  },
  {
    id: "al-kabeer-group",
    title: "Al Kabeer Group",
    category: "Website Development", 
    sector: "FMCG",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/65/yqCP1zUdrScbM1U36h7iBtuuOcn8rL1vjJ5uhklD.jpg"
  },
  {
    id: "feathers-fashion",
    title: "Feathers Fashion",
    category: "High-end fashion e-commerce",
    sector: "Fashion",
    service: "Web Design & Development",
    image: "https://plana.ae/storage/project/66/QDLx7tuvv3YgHwhMuRRvQhSNl7vGdM8q5AhYBveB.jpg"
  }
];

const sectorFilters = [
  "All", "Automotive", "Crypto & Blockchain", "Diamond & Jewelry", "Education", 
  "Entertainment", "Fashion", "FMCG", "Government", "Health & Beauty", "Industrial",
  "Interior Design", "Investment", "Oil & Gas", "Real Estate", "Retail", "Security",
  "Service Provider", "Sports", "Technology", "Video Production"
];

const serviceFilters = [
  "All", "Brand Audit and Benchmarking", "Branding", "Content Writing", 
  "Digital Marketing", "Mobile Apps Design & Development", "Web Design & Development"
];

export default function PortfolioFull() {
  const { isVisible } = useScrollPosition();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [showSectorFilter, setShowSectorFilter] = useState(false);
  const [showServiceFilter, setShowServiceFilter] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter projects based on selected filters
  const filteredProjects = portfolioProjects.filter(project => {
    const sectorMatch = selectedSector === "All" || project.sector === selectedSector;
    const serviceMatch = selectedService === "All" || project.service === selectedService;
    return sectorMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 sm:px-6 lg:px-12 py-4 border-b border-gray-800"
        >
          <div className="container mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>-</span>
              <span className="text-white">Projects</span>
            </nav>
          </div>
        </motion.div>

        {/* Hero Section */}
        <section ref={heroRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ 
              backgroundImage: 'url(https://plana.ae/storage/pages/4/X1NgQtxQWJonm5O5WOW9D3WIoxAKatE2wRKy6ETn.png)' 
            }}
          />
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={isHeroVisible ? "animate" : "initial"}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-primary text-sm font-medium mb-4 uppercase tracking-wider"
              >
                Projects
              </motion.p>
              
              <AnimatedLetterSpacing 
                text="SNIPPETS FROM PROJECTS WE DELIVERED TO PROMINENT CLIENTS"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight"
              />
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-12 bg-gray-900/30 border-y border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Filter by Sector */}
              <div className="flex-1">
                <div className="relative">
                  <motion.button
                    onClick={() => setShowSectorFilter(!showSectorFilter)}
                    className="w-full flex items-center justify-between bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium">
                      Filter By Sector: <span className="text-primary">{selectedSector}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showSectorFilter ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {showSectorFilter && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl z-10 max-h-60 overflow-y-auto"
                      >
                        {sectorFilters.map((sector) => (
                          <motion.button
                            key={sector}
                            onClick={() => {
                              setSelectedSector(sector);
                              setShowSectorFilter(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                              selectedSector === sector ? 'text-primary bg-gray-700' : 'text-gray-300'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            {sector}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Filter by Service */}
              <div className="flex-1">
                <div className="relative">
                  <motion.button
                    onClick={() => setShowServiceFilter(!showServiceFilter)}
                    className="w-full flex items-center justify-between bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium">
                      Filter By Service: <span className="text-primary">{selectedService}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showServiceFilter ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {showServiceFilter && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl z-10"
                      >
                        {serviceFilters.map((service) => (
                          <motion.button
                            key={service}
                            onClick={() => {
                              setSelectedService(service);
                              setShowServiceFilter(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                              selectedService === service ? 'text-primary bg-gray-700' : 'text-gray-300'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            {service}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto">
            <motion.div
              variants={staggerGrid}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <ScrollFade key={project.id} direction={index % 2 === 0 ? "left" : "right"}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      data-testid={`portfolio-item-${project.id}`}
                    >
                      <Link href={`/projects/${project.id}`}>
                        <motion.div
                          variants={complexImageHover}
                          initial="initial"
                          whileHover="hover"
                          className="relative overflow-hidden rounded-2xl shadow-2xl"
                          style={{
                            perspective: "1000px",
                            transformStyle: "preserve-3d"
                          }}
                        >
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 lg:h-72 object-cover"
                            loading="lazy"
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                          
                          {/* Content overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                            <motion.h3 
                              className="text-white text-xl font-bold mb-2 leading-tight"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-300 text-sm leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {project.category}
                            </motion.p>
                          </div>
                          
                          {/* Hover action overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                          >
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="bg-primary text-black px-6 py-3 font-bold rounded-lg hover:bg-white transition-colors duration-300"
                            >
                              VIEW PROJECT
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </ScrollFade>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-lg">No projects found for the selected filters.</p>
                <Button
                  onClick={() => {
                    setSelectedSector("All");
                    setSelectedService("All");
                  }}
                  className="mt-4 bg-primary text-black hover:bg-white"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <ScrollFade>
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gray-900/30">
            <div className="container mx-auto text-center">
              <AnimatedLetterSpacing 
                text="READY TO GROW YOUR BRAND INTO A LEGACY?"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8"
              />
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12"
              >
                Let's make something great together
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button className="bg-primary text-black hover:bg-white">
                  Call Us
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                  Request a Quotation
                </Button>
                <Link href="/contact">
                  <Button variant="ghost" className="text-primary hover:bg-primary/10">
                    Send a Message
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </ScrollFade>
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