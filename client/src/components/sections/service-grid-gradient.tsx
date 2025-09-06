import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function ServiceGridGradient() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const services = [
    {
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars",
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready.",
      cta: "Legacies Born",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      title: "Brand Audit and Benchmarking", 
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis.",
      cta: "Learn more",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE", 
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence.",
      cta: "Advertise right",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      title: "Web Design & Development",
      subtitle: "Own your online presence",
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand.",
      cta: "Explore our projects", 
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      title: "Mobile Apps Design & Development",
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers.",
      cta: "Take me there",
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      title: "Content Writing", 
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts or persuasive copy.",
      cta: "Know the full story",
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Gradient Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-6">
            What We Create
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of digital innovation with our cutting-edge solutions
          </p>
        </motion.div>

        {/* Gradient Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
              data-testid={`service-gradient-${index}`}
            >
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:from-white/20 group-hover:via-white/30 group-hover:to-white/20 transition-all duration-700">
                <div className={`relative bg-gradient-to-br ${service.gradient} p-[1px] rounded-2xl`}>
                  <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 h-full min-h-[380px] flex flex-col">
                    {/* Floating gradient orb */}
                    <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700`}></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                        {service.title}
                      </h3>
                      
                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} text-sm font-semibold mb-4`}>
                        {service.subtitle}
                      </p>
                      
                      <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* Gradient CTA */}
                      <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 cursor-pointer`}>
                        <span>{service.cta}</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}