import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function ServiceGridTypography() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const services = [
    {
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars", 
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready.",
      cta: "Legacies Born",
      number: "01",
      font: "font-serif"
    },
    {
      title: "Brand Audit and Benchmarking",
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis.",
      cta: "Learn more", 
      number: "02",
      font: "font-mono"
    },
    {
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE",
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence.",
      cta: "Advertise right",
      number: "03", 
      font: "font-sans"
    },
    {
      title: "Web Design & Development",
      subtitle: "Own your online presence",
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand.",
      cta: "Explore our projects",
      number: "04",
      font: "font-serif"
    },
    {
      title: "Mobile Apps Design & Development", 
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers.",
      cta: "Take me there",
      number: "05",
      font: "font-mono"
    },
    {
      title: "Content Writing",
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts or persuasive copy.",
      cta: "Know the full story",
      number: "06",
      font: "font-sans"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Typography-focused Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center">
            <motion.h2 
              className="text-8xl lg:text-9xl font-black text-black/5 absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              SERVICES
            </motion.h2>
            
            <div className="relative z-10">
              <h2 className="text-6xl lg:text-8xl font-light text-black tracking-tight leading-none mb-4">
                What
              </h2>
              <h2 className="text-6xl lg:text-8xl font-black text-primary tracking-tight leading-none mb-4">
                WE
              </h2>
              <h2 className="text-6xl lg:text-8xl font-light text-black tracking-tight leading-none">
                Create
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Typography-based Service List */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group border-b border-gray-200 pb-16 last:border-b-0"
              data-testid={`service-typo-${index}`}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Large Number */}
                <div className="lg:col-span-2">
                  <motion.div
                    className="text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.number}
                  </motion.div>
                </div>

                {/* Service Content */}
                <div className="lg:col-span-7">
                  <motion.h3 
                    className={`text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight group-hover:text-primary transition-colors duration-300 ${service.font}`}
                    whileHover={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-primary font-semibold text-lg mb-6 tracking-wide uppercase"
                    initial={{ opacity: 0.7 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {service.subtitle}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-600 text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* CTA Section */}
                <div className="lg:col-span-3 flex justify-start lg:justify-end">
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
                      <div className="text-black font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.cta}
                      </div>
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="w-16 h-0.5 bg-black group-hover:bg-primary transition-colors duration-300 mr-3"></div>
                        <ArrowRight className="w-6 h-6 text-black group-hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}