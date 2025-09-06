import { useParams } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, ExternalLink, ArrowLeft } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll";
import { AnimatedText, AnimatedLetterSpacing } from "@/components/ui/animated-text";
import { ScrollParallax, ScrollFade } from "@/components/ui/scroll-parallax";
import { fadeInUp, revealScale, imageParallaxHover, staggerGrid, blurTextReveal } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { Link } from "wouter";
import { TechnologyCarousel } from "@/components/sections/technology-carousel";

// Service data structure matching the reference website
const serviceData = {
  "content-copywriting-services": {
    title: "Content & Copywriting Services",
    subtitle: "Harness the power of the written word",
    heroImage: "https://plana.ae/storage/service/53/bAnKDTxNVVOCbkbiG1AN2KbrSXBN24TeXJAi8GOC.jpg",
    description: "We deliver customized solutions designed to suit your business needs. We have a straightforward and concise approach to creating a distinct identity that will separate you from your competition.",
    services: [
      {
        icon: "https://plana.ae/storage/service/54/NmnZN7ve4Vi9AhFJfkV4ydeGRg5cxBmUeMO9iVH8.svg",
        title: "Brand Content Creation",
        subtitle: "Brand Storytelling Agency",
        description: "Whether your business is B2C or B2B, the development and maintenance of a consistent brand voice across all aspects of your digital marketing strategy is critical to building long-lasting relationships that maximize customer service life. That's why we focus on brand content creation for maximum outcome."
      },
      {
        icon: "https://plana.ae/storage/service/55/l4TIxG1c7amj68y9QFbWXI1cntZI9R8oB3EFsbJJ.svg",
        title: "Arabic Content Writing/Translation", 
        subtitle: "Arabic Copy Writing Services",
        description: "We produce content for ad campaigns, websites, brochures, manuals, flyers, catalogues, press releases and magazines in English and Arabic. Plan A delivers unique and memorable content to make the brief come alive."
      },
      {
        icon: "https://plana.ae/storage/service/56/YadyS26XcyHPulPa9UmoMVdXzJvQHd9uz9c7v8Xf.svg",
        title: "Blogs Writing",
        subtitle: "High Quality Article Writing Service", 
        description: "Our proven methods of creating content at Plan A is easy but powerful: writing to engage your target audience and optimising content. Our copywriters are skilled in working with subject matter experts to show original leadership skills."
      }
    ],
    sections: [
      {
        title: "Importance of Professional Copywriting Services",
        content: "Are you looking to enhance the online presence of your business? You know what you need; quality content or professional copywriting services. Hiring an in-house copywriter can prove too much of a hassle, and hiring a freelance content writer can prove incredibly costly.",
        image: "https://plana.ae/storage/paragraph/31/OWB8PT7cINbmfYEUsQPXFU4ONMH3DiYOzAxappVW.jpg"
      },
      {
        title: "Why Your Business Need Brand Content Creation",
        content: "Your brand is the essence of your business and the key to connecting with your customers. But that's not just about style and design. It's about making your brand material. If you are looking for content copywriting services in Dubai, look no further!",
        image: "https://plana.ae/storage/paragraph/32/sPeCkJf8brcc7sR2PKrAUQ1CMZzEcMXvUw78GPA1.jpg"
      }
    ]
  },
  "mobile-applications": {
    title: "Mobile Apps Design & Development",
    subtitle: "Leading Mobile App Development Company in Dubai",
    heroImage: "https://plana.ae/storage/service/3/Jcz0y3amIupevKIdjK24civ8l6Ho9leN1RGA3x7v.jpg",
    description: "Plan A is a premier mobile app development company in Dubai, specializing in customized mobile applications and games for startups and enterprises. We deliver high-performance, feature-packed applications that create enjoyable user experiences and drive business growth.",
    services: [
      {
        icon: "https://plana.ae/storage/service/23/4r5EqxskrXoMduKAXjJxr1LJZUI9OW6L44YN0XcJ.svg",
        title: "iOS App Development",
        subtitle: "Native Swift & React Native Development",
        description: "Native Swift programming and React Native development. Custom iPhone/iPad applications with superior performance and cross-platform compatibility for maximum reach."
      },
      {
        icon: "https://plana.ae/storage/service/24/IY0213xvHtRkNKRYB8u3TzLZkDvp0Xu0XDif2mSP.svg",
        title: "Android App Development",
        subtitle: "Native Java & Kotlin Programming",
        description: "Native Java and Kotlin programming expertise. Versatile, user-friendly, and scalable Android applications with full-stack development capabilities."
      },
      {
        icon: "https://plana.ae/storage/service/25/CheUNAhNcfieM4kqZAjcxjjl7bxYEnWVlpQPkhb9.svg",
        title: "Cross-Platform Development",
        subtitle: "Cloud-Connected Applications",
        description: "Cloud-connected applications for iOS and Android with popular framework implementation for broader audience penetration and cost-effective solutions."
      },
      {
        icon: "https://plana.ae/storage/service/26/vr-ar-development.svg",
        title: "VR & AR Development",
        subtitle: "Virtual & Augmented Reality Solutions",
        description: "Custom VR solutions for entertainment, healthcare, real estate, education. Interactive AR experiences for retail, jewelry, furniture, and other industries."
      }
    ],
    sections: [
      {
        title: "Why Choose Plan A for Mobile App Development",
        content: "Our experienced team combines cutting-edge technology with creative design to deliver mobile applications that not only meet your business objectives but exceed user expectations. We follow agile development methodologies ensuring transparency and quality throughout the development process.",
        image: "https://plana.ae/storage/paragraph/33/mobile-development-process.jpg"
      },
      {
        title: "Our Development Process",
        content: "From concept to deployment, we follow a systematic approach: Discovery & Strategy, Design & Planning, Agile Development, Comprehensive Testing, Professional Launch, and Ongoing Support. Our local expertise combined with international standards ensures world-class mobile applications.",
        image: "https://plana.ae/storage/paragraph/34/mobile-app-strategy.jpg"
      }
    ]
  },
  "website-design-development": {
    title: "Web Design & Development",
    subtitle: "Professional Web Design Company in Dubai",
    heroImage: "https://plana.ae/storage/service/2/LaVNuWrmm1vWCNOHBBPW2IXcIYWKHaFTlQTWh597.jpg",
    description: "Plan A offers comprehensive website design and development services, creating responsive, user-friendly websites that drive results and enhance your digital presence. We combine global best practices with local insights to deliver exceptional web solutions.",
    services: [
      {
        icon: "https://plana.ae/storage/service/15/hki2G0vYBmQ7KDT4VIAMXAoowGfSwDaBKpBDT8Ge.svg",
        title: "Corporate Website Design",
        subtitle: "Custom-Designed Corporate Solutions",
        description: "Custom-designed websites tailored to business needs and objectives. Professional, branded solutions that differentiate from competitors with mobile-responsive design and cross-browser compatibility."
      },
      {
        icon: "https://plana.ae/storage/service/16/drA305qNQFEAeRQgEEQx35OvmjF0jcDNZ2dZPcov.svg",
        title: "E-commerce Development",
        subtitle: "Complete Online Store Solutions",
        description: "Specialized in Magento, BigCommerce, Shopify development. Custom shopping cart solutions, multi-vendor marketplace development, and complete online store setup with inventory management."
      },
      {
        icon: "https://plana.ae/storage/service/17/cms-development.svg",
        title: "Content Management Systems",
        subtitle: "Custom CMS Development",
        description: "Custom CMS development with client access for content updates. Modern usability standards and cutting-edge design with user-friendly interfaces for easy content management."
      },
      {
        icon: "https://plana.ae/storage/service/18/ui-ux-design.svg",
        title: "UI/UX Development",
        subtitle: "Responsive Design & User Experience",
        description: "Latest wireframe and design tools implementation. Responsive design for all devices with professional interfaces for web, dashboards, Android, iOS applications and mobile-first approach."
      }
    ],
    sections: [
      {
        title: "Our Technical Expertise",
        content: "We utilize cutting-edge programming languages including HTML, CSS, JavaScript, PHP, MySQL with frameworks like Laravel, jQuery, Ajax. Our development is powered by Apache servers and Git version control, ensuring robust and scalable solutions.",
        image: "https://plana.ae/storage/paragraph/35/web-development-tech.jpg"
      },
      {
        title: "Why Choose Plan A for Web Development",
        content: "As a homegrown Dubai agency with deep regional knowledge, we combine international standards with local insights. Our full-service approach covers everything from concept to maintenance, working as your business partner for long-term success.",
        image: "https://plana.ae/storage/paragraph/36/web-design-process.jpg"
      }
    ]
  }
};

export default function ServiceDetailFull() {
  const { service: serviceSlug } = useParams();
  const { isVisible } = useScrollPosition();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get service data
  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <Button className="bg-primary text-black hover:bg-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
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
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>-</span>
              <span className="text-white">{service.title}</span>
            </nav>
          </div>
        </motion.div>

        {/* Service Hero Section */}
        <section ref={heroRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate={isHeroVisible ? "animate" : "initial"}
              >
                <motion.p
                  variants={blurTextReveal}
                  className="text-primary text-sm font-medium mb-4 uppercase tracking-wider"
                >
                  Our Service
                </motion.p>
                
                <AnimatedLetterSpacing 
                  text={service.subtitle}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </motion.div>

              <ScrollParallax offset={50}>
                <motion.div
                  variants={revealScale}
                  initial="initial"
                  animate={isHeroVisible ? "animate" : "initial"}
                  className="relative"
                >
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </ScrollParallax>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <ScrollFade>
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gray-900/30">
            <div className="container mx-auto">
              <AnimatedLetterSpacing 
                text={`SERVICES OFFERED BY ${service.title.split(' ')[0].toUpperCase()}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12"
              />
              
              <motion.div
                variants={staggerGrid}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {service.services.map((serviceItem, index) => (
                  <motion.div
                    key={index}
                    variants={revealScale}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="text-center mb-6">
                      <img
                        src={serviceItem.icon}
                        alt={serviceItem.title}
                        className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-xl font-bold text-primary mb-2">{serviceItem.title}</h3>
                      <h4 className="text-lg font-semibold text-white mb-4">{serviceItem.subtitle}</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {serviceItem.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollFade>

        {/* Technology Section */}
        <TechnologyCarousel />

        {/* Content Sections */}
        {service.sections.map((section, index) => (
          <ScrollFade key={index} direction={index % 2 === 0 ? "left" : "right"}>
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
              <div className="container mx-auto">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div
                    variants={imageParallaxHover}
                    initial="initial"
                    whileHover="hover"
                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  
                  <div>
                    <AnimatedLetterSpacing 
                      text={section.title}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                    />
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-300 leading-relaxed"
                    >
                      {section.content}
                    </motion.p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFade>
        ))}

        {/* CTA Section */}
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