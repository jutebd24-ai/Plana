import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import { AnimatedLetterSpacing } from "@/components/ui/animated-text";
import { ScrollFade } from "@/components/ui/scroll-parallax";
import { fadeInUp, imageParallaxHover } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { Link } from "wouter";

const caseStudies = [
  {
    id: "mbrhe-exchange-grants-service",
    title: "The Exchange Grants Service development",
    category: "Government",
    image: "https://plana.ae/storage/cases/1/gDFzpvDG9n0a7opbr9jhhKYcGM6c3Mn2DJixeDbr.jpg",
    description: "Complete development of exchange grants service platform for government operations"
  },
  {
    id: "marasi-ships-waste-management-portal",
    title: "Marasi ships waste management portal",
    category: "Government", 
    image: "https://plana.ae/storage/cases/2/PcWgQGvlzGLqZzk6JlzUOUXGjfdMtCDvPerNyUBW.jpg",
    description: "Comprehensive waste management portal for maritime operations"
  },
  {
    id: "dmi-and-17-sub-brands-audits",
    title: "Dubai Media Inc. and 17 Sub-brands audits",
    category: "Media",
    image: "https://plana.ae/storage/cases/3/Le5hvUDqnaSceTWppDjGTN6jEjT2x4HW6ey2Bv0l.jpg",
    description: "Comprehensive brand audit and strategy for Dubai Media Inc. and subsidiaries"
  },
  {
    id: "yonboon-collagen-brand-lanuch",
    title: "Yonboon collagen brand lanuch",
    category: "FMCG",
    image: "https://plana.ae/storage/cases/4/0oJtz7Fd6E8aRQYYL3rAZCgwQaPDOqsFopiI7n7Z.jpg",
    description: "Complete brand launch strategy for premium collagen products"
  },
  {
    id: "brand-audit-and-rebranding",
    title: "Brand audit and rebranding",
    category: "Technology",
    image: "https://plana.ae/storage/cases/5/ZFSabwwJOGrYPU1rZ5116tGBfIxTtKXdWC10a8oW.jpg",
    description: "Comprehensive brand audit and complete rebranding strategy"
  }
];

export default function CaseStudiesPage() {
  const { isVisible } = useScrollPosition();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              <span className="text-white">Case Studies</span>
            </nav>
          </div>
        </motion.div>

        {/* Case Studies Hero Section */}
        <section ref={heroRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={isHeroVisible ? "animate" : "initial"}
            >
              <AnimatedLetterSpacing 
                text="CASE STUDIES"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-300"
              >
                Journey Through The Art of <span className="text-primary">Problem Solving</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                We offer premium app development for iOS, Android and hybrid systems. 
                Our team features seasoned award-winning developers who can bring your app or game to its best life.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <ScrollFade key={study.id} direction={index % 2 === 0 ? "left" : "right"}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    data-testid={`case-study-${study.id}`}
                  >
                    <Link href={`/case-studies/${study.id}`}>
                      <motion.div
                        variants={imageParallaxHover}
                        initial="initial"
                        whileHover="hover"
                        className="relative overflow-hidden rounded-2xl shadow-2xl mb-6"
                      >
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-64 lg:h-72 object-cover"
                          loading="lazy"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-black text-xs font-medium px-3 py-1 rounded-full">
                            {study.category}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="bg-primary text-black px-6 py-3 font-bold rounded-lg"
                          >
                            READ MORE
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <div className="space-y-3">
                        <h3 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {study.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {study.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </ScrollFade>
              ))}
            </div>
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