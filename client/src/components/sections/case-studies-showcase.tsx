import { motion } from "framer-motion";
import { AnimatedLetterSpacing } from "@/components/ui/animated-text";
import { ScrollFade, ScrollParallax } from "@/components/ui/scroll-parallax";
import { fadeInUp, staggerGrid } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { Link } from "wouter";

const caseStudyProjects = [
  {
    id: "absolute-advanture",
    title: "Absolute Advanture",
    category: "Activities Booking Platform",
    image: "https://plana.ae/storage/project/49/XjYE6S3OxOTXm8i9C3FHiC0v4DeGJZTya7DyGFS5.jpg",
    href: "/projects/absolute-advanture"
  },
  {
    id: "strategic-mobile-app",
    title: "Strategic Mobile Application",
    category: "Android App integrated with AVAYA phone system",
    image: "https://plana.ae/storage/project/37/6eetDuFoyozpy4uqiJ85uHjdTF511w7iX3qiADpm.jpg",
    href: "/projects/strategic-mobile-application"
  },
  {
    id: "phoenix-tech-fund",
    title: "Phoenix Tech Fund",
    category: "Website and Mobile Apps",
    image: "https://plana.ae/storage/project/12/PfmXWI84pNwmFDv1LqpxTIHHJGUl1QY5YbKzzZMI.jpg",
    href: "/projects/phoenix-tech-fund"
  }
];

export function CaseStudiesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gray-900/20">
      <div className="container mx-auto">
        <ScrollFade>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="text-center mb-12 lg:mb-16"
          >
            <AnimatedLetterSpacing 
              text="Case Studies"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              We have empowered our flagship Projects with multifaceted technologies to fulfill the purpose for some of our most esteemed clients
            </motion.p>
          </motion.div>
        </ScrollFade>

        <motion.div
          variants={staggerGrid}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {caseStudyProjects.map((project, index) => (
            <ScrollFade key={project.id} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
                data-testid={`case-study-${project.id}`}
              >
                <Link href={project.href}>
                  <ScrollParallax offset={-50} className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <motion.div
                      className="relative transform-gpu"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5
                      }}
                      transition={{ 
                        duration: 0.6, 
                        ease: "easeOut",
                        type: "spring", 
                        stiffness: 100 
                      }}
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover"
                        loading="lazy"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500">
                        <motion.h3 
                          className="text-white text-xl lg:text-2xl font-bold mb-3 leading-tight"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-300 text-sm lg:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.category}
                        </motion.p>
                      </div>
                      
                      {/* Hover overlay with button */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="bg-primary text-black px-6 py-3 font-bold rounded-lg hover:bg-white transition-colors duration-300 shadow-xl"
                        >
                          VIEW CASE STUDY
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </ScrollParallax>
                </Link>
              </motion.div>
            </ScrollFade>
          ))}
        </motion.div>

        {/* CTA Button */}
        <ScrollFade>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12 lg:mt-16"
          >
            <Link href="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black hover:bg-white px-8 py-4 font-bold tracking-wider rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="view-all-case-studies"
              >
                VIEW ALL CASE STUDIES
              </motion.button>
            </Link>
          </motion.div>
        </ScrollFade>
      </div>
    </section>
  );
}