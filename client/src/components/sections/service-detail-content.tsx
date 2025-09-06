import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

interface ServiceDetailContentProps {
  service: {
    features: string[];
    process: { title: string; description: string }[];
  };
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Features Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            What's <span className="text-primary">Included</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Our <span className="text-primary">Process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                data-testid={`process-step-${index}`}
              >
                <Card className="bg-card h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center font-bold text-sm mr-3">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <Button
            className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="service-detail-cta"
          >
            REQUEST A QUOTATION
          </Button>
        </motion.div>
      </div>
    </section>
  );
}