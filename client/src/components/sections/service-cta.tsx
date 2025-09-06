import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function ServiceCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-primary">Brand?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's work together to create something extraordinary that sets your brand apart 
            and drives meaningful results.
          </p>
          <Button
            className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="service-cta-button"
          >
            REQUEST A QUOTATION
          </Button>
        </motion.div>
      </div>
    </section>
  );
}