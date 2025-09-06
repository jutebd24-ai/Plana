import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function ServiceGridMinimalist() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const services = [
    {
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars",
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready.",
      cta: "Legacies Born"
    },
    {
      title: "Brand Audit and Benchmarking", 
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis.",
      cta: "Learn more"
    },
    {
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE",
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence.",
      cta: "Advertise right"
    },
    {
      title: "Web Design & Development",
      subtitle: "Own your online presence", 
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand.",
      cta: "Explore our projects"
    },
    {
      title: "Mobile Apps Design & Development",
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers.",
      cta: "Take me there"
    },
    {
      title: "Content Writing",
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts or persuasive copy.",
      cta: "Know the full story"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-light text-black mb-4 tracking-tight">
            What We Do
          </h2>
          <div className="w-12 h-px bg-primary mx-auto"></div>
        </motion.div>

        {/* Minimalist Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-gray-100"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border-b border-r border-gray-100 group cursor-pointer"
              data-testid={`service-minimal-${index}`}
            >
              <div className="p-12 h-full min-h-[400px] flex flex-col justify-between hover:bg-gray-50 transition-colors duration-500">
                {/* Service Number */}
                <div className="text-gray-300 text-sm font-mono mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-light text-black mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Minimal CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-black font-medium text-sm group-hover:text-primary transition-colors duration-300">
                    {service.cta}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}