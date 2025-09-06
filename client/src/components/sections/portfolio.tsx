import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, scaleOnHover, imageParallaxHover, revealScale, scrollRevealImage, complexImageHover, staggerGrid } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedLetterSpacing } from "@/components/ui/animated-text";
import { ScrollParallax } from "@/components/ui/scroll-parallax";
import { useImageReveal } from "@/hooks/use-scroll-animation";
import { Link } from "wouter";

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      image: "https://plana.ae/storage/project/49/XjYE6S3OxOTXm8i9C3FHiC0v4DeGJZTya7DyGFS5.jpg",
      category: "Activities Booking Platform", 
      title: "Absolute Advanture",
      description: "Complete digital transformation with booking system and mobile app integration",
      slug: "absolute-advanture",
    },
    {
      image: "https://plana.ae/storage/project/37/6eetDuFoyozpy4uqiJ85uHjdTF511w7iX3qiADpm.jpg",
      category: "Android App integrated with AVAYA phone system",
      title: "Strategic Mobile Application",
      description: "Enterprise mobile solution with advanced system integration",
      slug: "strategic-mobile-application",
    },
    {
      image: "https://plana.ae/storage/project/12/PfmXWI84pNwmFDv1LqpxTIHHJGUl1QY5YbKzzZMI.jpg",
      category: "Website and Mobile Apps",
      title: "Phoenix Tech Fund",
      description: "Comprehensive digital platform for tech investment and fund management", 
      slug: "phoenix-tech-fund",
    },
    {
      image: "https://plana.ae/storage/project/36/gwv0aQr9L952uv7NgQXR0i5hDUotkW9vaRlZuTWG.jpg",
      category: "Corporate Website Development",
      title: "Rabdan Academy",
      description: "Educational institution website with student portal and course management",
      slug: "rabdan-academy",
    },
    {
      image: "https://plana.ae/storage/project/43/5qBUyZ8uG0ul3sxFrvTSvpq9UhpmiRftSIx8afMa.jpg",
      category: "Waste Management Portal",
      title: "Marasi Portal", 
      description: "Smart waste manifest platform with integrated digital database",
      slug: "marasi-portal",
    },
    {
      image: "https://plana.ae/storage/project/44/TjIYfrzgC4AvhJBRs8WiJ8e2Nhi1CkNOt6u1fkOA.jpg",
      category: "E-commerce Website",
      title: "Yonboon Premium Collagen",
      description: "Premium health product e-commerce with advanced shopping features",
      slug: "yonboon-premium-collagen",
    },
    {
      image: "https://plana.ae/storage/project/53/GokB8X4xbBD9mRJ9VcPSjEoZj7ppkBnWSp2pxiRs.jpg",
      category: "Corporate Website Development",
      title: "Mira Aerospace",
      description: "Corporate website development for aerospace industry",
      slug: "mira-aerospace",
    },
    {
      image: "https://plana.ae/storage/project/38/m1mHnBEXF0XywIXViHnuKUD8XtcZ4y44hzsRcioC.jpg",
      category: "Sports Magento E-commerce Platform", 
      title: "ActiveMile",
      description: "E-commerce platform for sports equipment and accessories",
      slug: "activemile",
    },
    {
      image: "https://plana.ae/storage/project/65/yqCP1zUdrScbM1U36h7iBtuuOcn8rL1vjJ5uhklD.jpg",
      category: "Website Development",
      title: "Al Kabeer Group",
      description: "Corporate website development for food industry leader",
      slug: "al-kabeer-group",
    },
    {
      image: "https://plana.ae/storage/project/47/ugfYkwcQUsvNnumAHBf5eWEgKnl5Af4lta4u1XRV.jpg",
      category: "Branding and Corporate Website",
      title: "Storm Energy",
      description: "Complete brand identity and corporate website for energy trading company",
      slug: "storm-energy",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, projects.length - visibleProjects);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleProjects]);
  
  // Responsive visible projects
  useEffect(() => {
    const updateVisibleProjects = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProjects(3);
      } else if (window.innerWidth >= 768) {
        setVisibleProjects(2);
      } else {
        setVisibleProjects(1);
      }
    };
    
    updateVisibleProjects();
    window.addEventListener('resize', updateVisibleProjects);
    return () => window.removeEventListener('resize', updateVisibleProjects);
  }, []);
  
  const nextSlide = () => {
    setIsAutoPlaying(false);
    const maxIndex = Math.max(0, projects.length - visibleProjects);
    setCurrentIndex((prevIndex) => prevIndex >= maxIndex ? 0 : prevIndex + 1);
  };
  
  const prevSlide = () => {
    setIsAutoPlaying(false);
    const maxIndex = Math.max(0, projects.length - visibleProjects);
    setCurrentIndex((prevIndex) => prevIndex <= 0 ? maxIndex : prevIndex - 1);
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <AnimatedLetterSpacing 
            text="OUR WORK" 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8"
          />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Our client's needs and their customer experience stand at the heart of everything we do. 
            All our digital marketing services seamlessly integrate creative, development and content 
            best practices to deliver on your vision. There is no magic here, just years of experience, 
            solid market insight and an unwavering drive to create something that empowers your brand to 
            stand the test of time.
          </p>
        </motion.div>
        
        {/* Carousel Navigation */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="flex justify-end items-center mb-8 space-x-4"
        >
          <motion.button 
            onClick={prevSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white hover:text-primary transition-colors duration-300 group"
            data-testid="portfolio-prev"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium uppercase tracking-wider">Prev</span>
          </motion.button>
          <motion.button 
            onClick={nextSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white hover:text-primary transition-colors duration-300 group"
            data-testid="portfolio-next"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Next</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Animated Slider Portfolio */}
        <motion.div
          variants={staggerGrid}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative">
            <motion.div 
              className="flex"
              animate={{ 
                x: `-${(currentIndex * 100) / visibleProjects}%` 
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
              }}
              style={{ width: `${(projects.length * 100) / visibleProjects}%` }}
            >
              {projects.map((project, index) => {
                const { ref: imageRef, scale: imageScale, opacity: imageOpacity, y: imageY } = useImageReveal();
                
                return (
                  <motion.div 
                    key={index}
                    className="group cursor-pointer px-3"
                    style={{ width: `${100 / projects.length}%` }}
                    data-testid={`portfolio-item-${index}`}
                    variants={scrollRevealImage}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ScrollParallax offset={30} className="h-full">
                      <motion.div 
                        ref={imageRef}
                        className="relative overflow-hidden rounded-2xl shadow-2xl h-full"
                        variants={complexImageHover}
                        initial="initial"
                        whileHover="hover"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d"
                        }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-80 object-cover"
                          loading="lazy"
                          style={{
                            scale: imageScale,
                            opacity: imageOpacity,
                            y: imageY
                          }}
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Content overlay */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6"
                      initial={{ y: 0 }}
                      whileHover={{ 
                        y: -8,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }
                      }}
                    >
                      <motion.p 
                        className="text-primary text-sm font-medium mb-3 uppercase tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.category}
                      </motion.p>
                      <motion.h3 
                        className="text-white text-xl lg:text-2xl font-bold mb-3 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.description}
                      </motion.p>
                    </motion.div>
                    
                    {/* Hover action overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0, y: 20 }}
                          whileHover={{ 
                            scale: 1, 
                            opacity: 1, 
                            y: 0,
                            boxShadow: "0 10px 30px rgba(255, 107, 0, 0.3)",
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary text-black px-8 py-4 font-bold tracking-wider rounded-lg hover:bg-white transition-all duration-300"
                        >
                          VIEW PROJECT
                        </motion.button>
                      </Link>
                    </motion.div>
                      </motion.div>
                    </ScrollParallax>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Progress indicators */}
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            {Array.from({ length: Math.ceil(projects.length / visibleProjects) }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleProjects) === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`portfolio-indicator-${index}`}
              />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}