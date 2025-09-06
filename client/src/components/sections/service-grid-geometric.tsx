import { motion } from "framer-motion";
import { ArrowRight, Square, Triangle, Circle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function ServiceGridGeometric() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const services = [
    {
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars",
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready.",
      cta: "Legacies Born",
      shape: Triangle,
      color: "bg-red-500"
    },
    {
      title: "Brand Audit and Benchmarking", 
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis.",
      cta: "Learn more",
      shape: Circle,
      color: "bg-blue-500"
    },
    {
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE",
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence.",
      cta: "Advertise right",
      shape: Square,
      color: "bg-green-500"
    },
    {
      title: "Web Design & Development",
      subtitle: "Own your online presence",
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand.",
      cta: "Explore our projects", 
      shape: Triangle,
      color: "bg-purple-500"
    },
    {
      title: "Mobile Apps Design & Development",
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers.",
      cta: "Take me there",
      shape: Circle,
      color: "bg-yellow-500"
    },
    {
      title: "Content Writing", 
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts or persuasive copy.",
      cta: "Know the full story",
      shape: Square,
      color: "bg-pink-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rotate-45 opacity-10"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-500 opacity-10 clip-triangle"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-500 rotate-12 opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Geometric Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-primary rotate-45 mr-4"></div>
            <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter">
              WHAT WE DO
            </h2>
            <div className="w-12 h-12 bg-white rounded-full ml-4"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-20 h-1 bg-red-500"></div>
            <div className="w-20 h-1 bg-blue-500"></div>
            <div className="w-20 h-1 bg-green-500"></div>
          </div>
        </motion.div>

        {/* Geometric Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const ShapeIcon = service.shape;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                data-testid={`service-geometric-${index}`}
              >
                {/* Main Card */}
                <div className="relative bg-white text-black p-8 min-h-[400px] group-hover:scale-105 transition-all duration-500 overflow-hidden">
                  
                  {/* Geometric Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${service.color} transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Shape Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 ${service.color} text-white rounded-none`}
                    >
                      <ShapeIcon className="w-8 h-8" />
                    </motion.div>
                    
                    <div className="text-6xl font-black text-gray-100 group-hover:text-gray-300 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    
                    <div className={`w-full h-1 ${service.color} mb-4 group-hover:h-2 transition-all duration-300`}></div>
                    
                    <p className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-widest">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-8 leading-tight">
                      {service.description}
                    </p>

                    {/* Geometric CTA */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="flex-1"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="text-black font-black text-lg uppercase tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                          {service.cta}
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className={`p-3 ${service.color} text-white ml-4 cursor-pointer`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Geometric Accent Lines */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:h-4 transition-all duration-300"></div>
                </div>

                {/* Shadow Element */}
                <div className="absolute inset-0 bg-gray-900 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}