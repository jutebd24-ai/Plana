import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Brand audit and rebranding",
      description: "EDC is a semi-government company operating under Emirates Post Group that offers top-notch solutions and services to organizations in the Middle East Region across many sectors. We worked closely with the management to transform their brand positioning from a document management center to a digital transformation solutions provider in the Middle East.",
      imageLeft: true,
    },
    {
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "The Exchange Grants Service development",
      description: "The Exchange grants service an electronic marketplace Developed and launched as part of Emarati platform inside the Dubai Now App, where grant holders can list their grants on the open market to buy, sell or exchange grants.",
      imageLeft: false,
    },
    {
      image: "https://pixabay.com/get/g237a39636b15e3e37172757119308c7a2624d4b7d0b28fbf9bffda5bd0495476526b1a659660025c3e597357f9364e534d8d88c02461fde08a6c53282420a2ac_1280.jpg",
      title: "Marasi ships waste management portal",
      description: "MARASI is an unprecedented implementation of an online waste manifest platform in Sharjah that would utilize smart technology to cut back on paperwork and create an integrated digital waste manifest database to improve visibility & decision making.",
      imageLeft: true,
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 letter-spacing-wide">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We have empowered our flagship Projects with multifaceted technologies to fulfill the
            purpose for some of our most esteemed clients
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                !study.imageLeft ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`case-study-${index}`}
            >
              <motion.div
                variants={study.imageLeft ? slideInFromLeft : slideInFromRight}
                initial="initial"
                animate={isVisible ? "animate" : "initial"}
                className={study.imageLeft ? "" : "lg:order-2"}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={study.imageLeft ? slideInFromRight : slideInFromLeft}
                initial="initial"
                animate={isVisible ? "animate" : "initial"}
                className={study.imageLeft ? "" : "lg:order-1"}
              >
                <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>
                <Button
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid={`discover-${index}`}
                >
                  Discover
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
