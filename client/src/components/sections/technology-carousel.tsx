import { motion } from "framer-motion";
import { infiniteScroll, fadeInUp } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { AnimatedLetterSpacing } from "@/components/ui/animated-text";

const technologies = [
  {
    name: "React",
    icon: "https://plana.ae/storage/technology/14/4raTAByCNsq44rPrfR7seOmawOV9PikWAqLx7vhU.svg",
  },
  {
    name: "JavaScript",
    icon: "https://plana.ae/storage/technology/7/FubN5pDCOrVTXOen0Azd7R4TWnnAn4FzMxMzWqwh.svg",
  },
  {
    name: "Laravel",
    icon: "https://plana.ae/storage/technology/8/rew31pfbw3DmVNuhc3XA9Nv9T3YcsNzPqiEw5iG3.svg",
  },
  {
    name: "PHP",
    icon: "https://plana.ae/storage/technology/1/UOgQKLif0lbZYyua2r5rSkRZcfzFJVCJ0Hc7YR9F.svg",
  },
  {
    name: "MySQL",
    icon: "https://plana.ae/storage/technology/9/mE2ZdC4Al02j6vBtXoYUAhFGFMW338cfIkpsmeUa.svg",
  },
  {
    name: "HTML5",
    icon: "https://plana.ae/storage/technology/6/uAHvzicQv23qplnB7F22uXSXdtLHS5U1sSaTENVA.svg",
  },
  {
    name: "CSS3",
    icon: "https://plana.ae/storage/technology/5/ifHT3wvhUQ3B6JUu32MtbdHrb88JRUhfXxBKrax5.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://plana.ae/storage/technology/11/xxnLNjRH4I9byClsm2aZGi3AcFSvBTEmpD3EwL6f.svg",
  },
  {
    name: "Python",
    icon: "https://plana.ae/storage/technology/12/MHpdvEcaLdoGihAKvQGSDbRBrSpp7RVKPWXI430H.svg",
  },
  {
    name: "Angular",
    icon: "https://plana.ae/storage/technology/2/s2laJGdoBA8J9b4anvohEsLZmKRog7bKk8wH8JaP.svg",
  },
  {
    name: "Swift",
    icon: "https://plana.ae/storage/technology/21/Bd2p5vWYEh1bUxfAbm1l1iSwO0MJ0zYDrgyofaOt.svg",
  },
  {
    name: "Kotlin",
    icon: "https://plana.ae/storage/technology/19/j8RXOR8rRnqlzFuPM6sw5lewYLsVccetpZTu9MaY.svg",
  },
];

export function TechnologyCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  // Duplicate the technologies array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <AnimatedLetterSpacing 
            text="TECHNOLOGIES WE MASTER" 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
          />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We possess a wealth of expertise in highly innovative and state-of-the-art digital technology, 
            meticulously crafted to align seamlessly with your unique business vision and objectives.
          </p>
        </motion.div>

        {/* Infinite Scrolling Technology Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8 sm:space-x-12 lg:space-x-16"
              variants={infiniteScroll}
              animate="animate"
              style={{ width: "max-content" }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  data-testid={`tech-${tech.name}-${index}`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-center mt-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays to hide the loop */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
    </section>
  );
}