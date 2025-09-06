import { useParams } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, ExternalLink, ArrowLeft } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import { AnimatedText, AnimatedLetterSpacing } from "@/components/ui/animated-text";
import { ScrollParallax, ScrollFade } from "@/components/ui/scroll-parallax";
import { fadeInUp, revealScale, imageParallaxHover } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { Link } from "wouter";

// Comprehensive project data with all portfolio projects
const projectData = {
  "rabdan-academy": {
    title: "Rabdan Academy",
    category: "Government",
    location: "UAE",
    description: "Corporate Website Development for Rabdan Academy, a leading governmental educational institution in the UAE. The project involved creating a comprehensive digital platform that showcases the academy's programs, faculty, and achievements while maintaining the highest standards of accessibility and user experience.",
    website: "https://www.ra.ac.ae/",
    heroImage: "https://plana.ae/storage/project/36/gwv0aQr9L952uv7NgQXR0i5hDUotkW9vaRlZuTWG.jpg",
    scopeOfWork: [
      "Corporate Website Development",
      "UI/UX Design",
      "Content Management System",
      "Responsive Design",
      "Arabic & English Content",
      "SEO Optimization",
      "Performance Optimization"
    ],
    images: [
      "https://plana.ae/storage/project/36/gwv0aQr9L952uv7NgQXR0i5hDUotkW9vaRlZuTWG.jpg",
      "https://plana.ae/storage/project/36/rabdan-website-1.jpg",
      "https://plana.ae/storage/project/36/rabdan-website-2.jpg",
      "https://plana.ae/storage/project/36/rabdan-mobile-view.jpg"
    ]
  },
  "marasi-portal": {
    title: "Marasi Portal",
    category: "Government",
    location: "UAE",
    description: "Waste Management Portal development for Marasi, providing a comprehensive digital solution for waste management operations. The portal streamlines waste collection, tracking, and management processes with an intuitive interface and robust backend system.",
    website: "https://www.marasi.ae/",
    heroImage: "https://plana.ae/storage/project/43/5qBUyZ8uG0ul3sxFrvTSvpq9UhpmiRftSIx8afMa.jpg",
    scopeOfWork: [
      "Web Portal Development",
      "Database Design",
      "User Management System",
      "Reporting Dashboard",
      "API Integration",
      "Security Implementation",
      "Mobile Optimization"
    ],
    images: [
      "https://plana.ae/storage/project/43/5qBUyZ8uG0ul3sxFrvTSvpq9UhpmiRftSIx8afMa.jpg",
      "https://plana.ae/storage/project/43/marasi-dashboard.jpg",
      "https://plana.ae/storage/project/43/marasi-portal-1.jpg"
    ]
  },
  "yonboon-premium-collagen": {
    title: "Yonboon Premium Collagen",
    category: "Health & Beauty",
    location: "UAE",
    description: "E-commerce Website development for Yonboon Premium Collagen, a premium health and beauty brand. The project included creating a sophisticated online store with advanced product catalog, secure payment integration, and customer management system.",
    website: "https://www.yonboon.com/",
    heroImage: "https://plana.ae/storage/project/44/TjIYfrzgC4AvhJBRs8WiJ8e2Nhi1CkNOt6u1fkOA.jpg",
    scopeOfWork: [
      "E-commerce Development",
      "Product Catalog Management",
      "Payment Gateway Integration",
      "Inventory Management",
      "Customer Portal",
      "SEO & Digital Marketing",
      "Brand Identity Design"
    ],
    images: [
      "https://plana.ae/storage/project/44/TjIYfrzgC4AvhJBRs8WiJ8e2Nhi1CkNOt6u1fkOA.jpg",
      "https://plana.ae/storage/project/44/yonboon-ecommerce.jpg",
      "https://plana.ae/storage/project/44/yonboon-products.jpg"
    ]
  },
  "decorious-interior-design": {
    title: "Decorious Interior Design",
    category: "Interior Design",
    location: "UAE",
    description: "Comprehensive branding, website and mobile app development for Decorious Interior Design. The project encompassed complete brand identity creation, responsive website development, and custom mobile applications for both iOS and Android platforms.",
    website: "https://www.decorious.com/",
    heroImage: "https://plana.ae/storage/project/52/OMK4HS83qx4aTgITReowhTRG9xXX4WBewOgNIrJW.jpg",
    scopeOfWork: [
      "Brand Identity Design",
      "Website Development",
      "Mobile App Development",
      "Portfolio Management System",
      "Client Portal",
      "Project Management Tools",
      "Digital Marketing Strategy"
    ],
    images: [
      "https://plana.ae/storage/project/52/OMK4HS83qx4aTgITReowhTRG9xXX4WBewOgNIrJW.jpg",
      "https://plana.ae/storage/project/52/decorious-branding.jpg",
      "https://plana.ae/storage/project/52/decorious-mobile-app.jpg"
    ]
  },
  "storm-energy": {
    title: "Storm Energy",
    category: "Oil & Gas",
    location: "Africa",
    description: "Established in Switzerland in 2013, Storm Energy S.A. has blossomed into a foremost oil trading company in Africa, offering a plethora of petroleum products, including Gasoil, Gasoline, Ethanol, Bitumen, and LPG, while providing extensive supply chain support to our customers. Plan A has proudly developed a new brand identity and online corporate website.",
    website: "https://www.stormenergy.co/",
    heroImage: "https://plana.ae/storage/project/47/AA6hnc43meEOy8D5ePVOD2F20o9WE3Iv2bx4ve7z.svg",
    scopeOfWork: [
      "Arabic Copywriting",
      "English Copywriting", 
      "Presentation",
      "Web Development",
      "Brand Identity",
      "Brand Guideline",
      "Brand Collateral",
      "Logo Design",
      "UI/UX Design"
    ],
    images: [
      "https://plana.ae/storage/project/47/D2csoxPrnYThGN1Rk2ibkRw4DoWMz86UI4UVNd6Y.jpg",
      "https://plana.ae/storage/project/47/n9ZycnW0EytQl4kTKsnVDD4SBQoxtaCged9p4oUh.jpg",
      "https://plana.ae/storage/project/47/Xo4Q0qYyQQERTXfKfXELsXtrnQhvIMyNwuT7gc0h.jpg",
      "https://plana.ae/storage/project/47/Ok9AiCPIjIBMYbeZvg0Kg23p2g57pzGhKjA9tleS.jpg",
      "https://plana.ae/storage/project/47/nFAPEDd6dGIhCZH9mRxYjOu8f4Y2EGVMql7ZeEbQ.jpg",
      "https://plana.ae/storage/project/47/UBurr8EQ3fW9SUJez0J1DWk1xnucchekGPjIjRQd.jpg"
    ]
  },
  "activemile": {
    title: "ActiveMile",
    category: "Sports",
    location: "UAE",
    description: "Sports Magento E-commerce Platform development for ActiveMile, a comprehensive sports and fitness equipment retailer. The project involved creating a robust e-commerce solution with advanced product filtering, customer management, and integrated payment systems.",
    website: "https://www.activemile.com/",
    heroImage: "https://plana.ae/storage/project/38/m1mHnBEXF0XywIXViHnuKUD8XtcZ4y44hzsRcioC.jpg",
    scopeOfWork: [
      "Magento E-commerce Development",
      "Product Catalog Management",
      "Payment Integration",
      "Inventory Management",
      "Customer Portal",
      "Mobile Optimization",
      "SEO Implementation"
    ],
    images: [
      "https://plana.ae/storage/project/38/m1mHnBEXF0XywIXViHnuKUD8XtcZ4y44hzsRcioC.jpg",
      "https://plana.ae/storage/project/38/activemile-products.jpg",
      "https://plana.ae/storage/project/38/activemile-checkout.jpg"
    ]
  },
  "absolute-advanture": {
    title: "Absolute Advanture",
    category: "Entertainment",
    location: "UAE",
    description: "Activities Booking Platform development for Absolute Advanture, providing comprehensive adventure and activity booking solutions. The platform includes real-time booking, payment processing, activity management, and customer engagement features.",
    website: "https://www.absoluteadvanture.com/",
    heroImage: "https://plana.ae/storage/project/49/XjYE6S3OxOTXm8i9C3FHiC0v4DeGJZTya7DyGFS5.jpg",
    scopeOfWork: [
      "Booking Platform Development",
      "Real-time Availability System",
      "Payment Gateway Integration",
      "Activity Management Portal",
      "Customer Management System",
      "Mobile App Development",
      "API Integration"
    ],
    images: [
      "https://plana.ae/storage/project/49/XjYE6S3OxOTXm8i9C3FHiC0v4DeGJZTya7DyGFS5.jpg",
      "https://plana.ae/storage/project/49/absolute-booking.jpg",
      "https://plana.ae/storage/project/49/absolute-activities.jpg"
    ]
  },
  "strategic-mobile-application": {
    title: "Strategic Mobile Application",
    category: "Government",
    location: "UAE",
    description: "Android App integrated with AVAYA phone system for Abu Dhabi Pension Fund. This strategic mobile application provides seamless communication and data management capabilities for government operations with high-security standards and robust performance.",
    website: "https://www.adpf.ae/",
    heroImage: "https://plana.ae/storage/project/37/6eetDuFoyozpy4uqiJ85uHjdTF511w7iX3qiADpm.jpg",
    scopeOfWork: [
      "Android App Development",
      "AVAYA Integration",
      "Security Implementation",
      "Data Management System",
      "User Authentication",
      "Performance Optimization",
      "Government Compliance"
    ],
    images: [
      "https://plana.ae/storage/project/37/6eetDuFoyozpy4uqiJ85uHjdTF511w7iX3qiADpm.jpg",
      "https://plana.ae/storage/project/37/strategic-app-interface.jpg",
      "https://plana.ae/storage/project/37/strategic-app-features.jpg"
    ]
  },
  "phoenix-tech-fund": {
    title: "Phoenix Tech Fund",
    category: "Investment",
    location: "UAE",
    description: "Website and Mobile Apps development for Phoenix Tech Fund, a leading investment and technology company. The project included creating a sophisticated web platform and mobile applications for investment management and client services.",
    website: "https://www.phoenixtechfund.com/",
    heroImage: "https://plana.ae/storage/project/12/PfmXWI84pNwmFDv1LqpxTIHHJGUl1QY5YbKzzZMI.jpg",
    scopeOfWork: [
      "Website Development",
      "Mobile App Development",
      "Investment Portal",
      "Client Management System",
      "Financial Data Integration",
      "Security Implementation",
      "Performance Analytics"
    ],
    images: [
      "https://plana.ae/storage/project/12/PfmXWI84pNwmFDv1LqpxTIHHJGUl1QY5YbKzzZMI.jpg",
      "https://plana.ae/storage/project/12/phoenix-investment-portal.jpg",
      "https://plana.ae/storage/project/12/phoenix-mobile-app.jpg"
    ]
  },
  "mira-aerospace": {
    title: "Mira Aerospace",
    category: "Aerospace",
    location: "UAE",
    description: "Corporate website development for Mira Aerospace, a leading company in the aerospace industry. The project focused on creating a professional digital presence that showcases their expertise in aerospace technology and services.",
    website: "https://www.miraaerospace.com/",
    heroImage: "https://plana.ae/storage/project/53/GokB8X4xbBD9mRJ9VcPSjEoZj7ppkBnWSp2pxiRs.jpg",
    scopeOfWork: [
      "Corporate Website Development",
      "Brand Identity Design",
      "Content Management System",
      "Technical Documentation Portal",
      "SEO Optimization",
      "Mobile Optimization",
      "Performance Enhancement"
    ],
    images: [
      "https://plana.ae/storage/project/53/GokB8X4xbBD9mRJ9VcPSjEoZj7ppkBnWSp2pxiRs.jpg",
      "https://plana.ae/storage/project/53/mira-aerospace-services.jpg",
      "https://plana.ae/storage/project/53/mira-aerospace-about.jpg"
    ]
  },
  "al-kabeer-group": {
    title: "Al Kabeer Group",
    category: "FMCG",
    location: "UAE",
    description: "Website Development for Al Kabeer Group, one of the leading food manufacturing companies in the Middle East. The project involved creating a comprehensive corporate website showcasing their diverse product portfolio and business operations.",
    website: "https://www.alkabeergroup.com/",
    heroImage: "https://plana.ae/storage/project/65/yqCP1zUdrScbM1U36h7iBtuuOcn8rL1vjJ5uhklD.jpg",
    scopeOfWork: [
      "Website Development",
      "Product Catalog Management",
      "Corporate Information Portal",
      "Multi-language Support",
      "SEO Implementation",
      "Mobile Optimization",
      "Content Management"
    ],
    images: [
      "https://plana.ae/storage/project/65/yqCP1zUdrScbM1U36h7iBtuuOcn8rL1vjJ5uhklD.jpg",
      "https://plana.ae/storage/project/65/alkabeer-products.jpg",
      "https://plana.ae/storage/project/65/alkabeer-company.jpg"
    ]
  },
  "feathers-fashion": {
    title: "Feathers Fashion",
    category: "Fashion",
    location: "UAE",
    description: "High-end fashion e-commerce platform for Feathers Fashion, featuring luxury clothing and accessories. The project included creating a sophisticated online boutique with premium user experience and advanced e-commerce functionality.",
    website: "https://www.feathersfashion.com/",
    heroImage: "https://plana.ae/storage/project/32/feathers-fashion-hero.jpg",
    scopeOfWork: [
      "E-commerce Development",
      "Luxury Brand Design",
      "Product Photography",
      "Payment Integration",
      "Inventory Management",
      "Mobile Optimization",
      "SEO & Marketing"
    ],
    images: [
      "https://plana.ae/storage/project/32/feathers-fashion-hero.jpg",
      "https://plana.ae/storage/project/32/feathers-collection.jpg",
      "https://plana.ae/storage/project/32/feathers-shopping.jpg"
    ]
  },
  "arab-reading-challenge": {
    title: "EPG - Arab Reading Challenge",
    category: "Government",
    location: "UAE",
    description: "Brand design for the Arab Reading Challenge, a prestigious government initiative to promote reading culture across the Arab world. The project involved creating distinctive stamp designs and promotional materials.",
    website: "https://www.arabreadingchallenge.com/",
    heroImage: "https://plana.ae/storage/project/17/BOx57ty0cfYsOeo2xxMiU2HwCWNvkYi00sDKRSDt.jpg",
    scopeOfWork: [
      "Stamp Design",
      "Brand Identity",
      "Promotional Materials",
      "Print Design",
      "Digital Assets",
      "Brand Guidelines",
      "Campaign Materials"
    ],
    images: [
      "https://plana.ae/storage/project/17/BOx57ty0cfYsOeo2xxMiU2HwCWNvkYi00sDKRSDt.jpg",
      "https://plana.ae/storage/project/17/arab-reading-stamps.jpg",
      "https://plana.ae/storage/project/17/arab-reading-materials.jpg"
    ]
  },
  "by-shams-perfumes": {
    title: "By Shams Perfumes",
    category: "Fashion",
    location: "UAE",
    description: "Launching a Perfume Brand for The Artist Shams Al Kuwaitia. Complete brand identity development and marketing strategy for a luxury perfume line, featuring elegant packaging and sophisticated brand positioning.",
    website: "https://www.byshams.com/",
    heroImage: "https://plana.ae/storage/project/73/0KTL8NaL7YiUMAkNu38v6Tj7GP36LN6Q6nIgHly7.jpg",
    scopeOfWork: [
      "Brand Identity Design",
      "Perfume Packaging",
      "Marketing Strategy",
      "Product Photography",
      "Brand Guidelines",
      "Digital Marketing",
      "Launch Campaign"
    ],
    images: [
      "https://plana.ae/storage/project/73/0KTL8NaL7YiUMAkNu38v6Tj7GP36LN6Q6nIgHly7.jpg",
      "https://plana.ae/storage/project/73/shams-perfume-bottles.jpg",
      "https://plana.ae/storage/project/73/shams-brand-identity.jpg"
    ]
  }
};

export default function ProjectDetail() {
  const { project: projectSlug } = useParams();
  const { isVisible } = useScrollPosition();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get project data
  const project = projectData[projectSlug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Link href="/portfolio">
                <Button className="bg-primary text-black hover:bg-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Link href="/portfolio" className="hover:text-white transition-colors">Projects</Link>
              <span>-</span>
              <span className="text-white">{project.title}</span>
            </nav>
          </div>
        </motion.div>

        {/* Project Hero Section */}
        <section ref={heroRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate={isHeroVisible ? "animate" : "initial"}
              >
                <AnimatedLetterSpacing 
                  text={project.title}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
                />
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    <span className="text-primary text-sm font-medium">Client:</span>
                    <span className="text-white ml-2">{project.title}</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    <span className="text-primary text-sm font-medium">Location:</span>
                    <span className="text-white ml-2">{project.location}</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    <span className="text-primary text-sm font-medium">Sector:</span>
                    <span className="text-white ml-2">{project.category}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>

                {project.website && (
                  <Button 
                    className="bg-primary text-black hover:bg-white group"
                    onClick={() => window.open(project.website, '_blank')}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </motion.div>

              <ScrollParallax offset={30}>
                <motion.div
                  variants={revealScale}
                  initial="initial"
                  animate={isHeroVisible ? "animate" : "initial"}
                  className="relative"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-auto max-w-md mx-auto"
                  />
                </motion.div>
              </ScrollParallax>
            </div>
          </div>
        </section>

        {/* Scope of Work Section */}
        <ScrollFade>
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gray-900/30">
            <div className="container mx-auto">
              <AnimatedLetterSpacing 
                text="SCOPE OF WORK"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12"
              />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {project.scopeOfWork.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFade>

        {/* Project Gallery */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid gap-8">
              {project.images.map((image, index) => (
                <ScrollFade key={index} direction={index % 2 === 0 ? "left" : "right"}>
                  <motion.div
                    variants={imageParallaxHover}
                    initial="initial"
                    whileHover="hover"
                    className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        <ScrollFade>
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gray-900/30">
            <div className="container mx-auto text-center">
              <AnimatedLetterSpacing 
                text="READY TO GROW YOUR BRAND INTO A LEGACY?"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8"
              />
              
              <AnimatedText 
                text="Let's make something great together"
                className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </div>
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