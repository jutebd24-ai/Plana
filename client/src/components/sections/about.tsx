import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern creative workspace"
              className="rounded-lg shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                Dubai's Top Digital Marketing Agency for{" "}
                <span className="text-primary">Innovative Solutions</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  We are a homegrown digital creative agency in Dubai, powering clients and brands of purpose to achieve their kind of success. Your goals create our milestones, but the finish line we draw is always beyond.
                </p>

                <p>
                  We approach everything with a multi-faceted attitude, armed with digital marketing professionals and award-winning creatives. Each member of our in-house team owns the DNA of the 'renaissance human' and this creates all the difference for your brand.
                </p>

                <p>
                  Our wide base of governmental and international clientele and our versatile portfolio is a testament to how we excel in branding, design and development for websites and mobile apps, digital marketing and social media.
                </p>
              </div>
            </div>

            <Button
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 w-full sm:w-auto"
              data-testid="meet-us-button"
            >
              Meet Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
