import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Zap, Sparkles, Play } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";

export function ServiceGridInteractive() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars",
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready.",
      cta: "Legacies Born",
      color: "from-pink-500 to-rose-500",
      icon: Sparkles
    },
    {
      title: "Brand Audit and Benchmarking", 
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis.",
      cta: "Learn more",
      color: "from-blue-500 to-cyan-500",
      icon: Zap
    },
    {
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE",
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence.",
      cta: "Advertise right",
      color: "from-orange-500 to-red-500",
      icon: Play
    },
    {
      title: "Web Design & Development",
      subtitle: "Own your online presence",
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand.",
      cta: "Explore our projects", 
      color: "from-green-500 to-emerald-500",
      icon: Sparkles
    },
    {
      title: "Mobile Apps Design & Development",
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers.",
      cta: "Take me there",
      color: "from-purple-500 to-violet-500",
      icon: Zap
    },
    {
      title: "Content Writing", 
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts or persuasive copy.",
      cta: "Know the full story",
      color: "from-yellow-500 to-orange-500",
      icon: Play
    }
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]));
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]));
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const Icon = service.icon;

    return (
      <motion.div
        key={index}
        variants={fadeInUp}
        className="perspective-1000"
        data-testid={`service-interactive-${index}`}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => {
            setHoveredIndex(null);
            mouseX.set(0);
            mouseY.set(0);
          }}
          className="relative group cursor-pointer"
        >
          {/* Main Card */}
          <motion.div
            className="bg-gray-900 rounded-3xl p-8 min-h-[420px] flex flex-col relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated Background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              initial={{ scale: 0 }}
              animate={{ 
                scale: hoveredIndex === index ? 1.2 : 0,
                rotate: hoveredIndex === index ? 180 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-40"
                  initial={{ 
                    x: Math.random() * 300,
                    y: Math.random() * 400,
                    scale: 0 
                  }}
                  animate={hoveredIndex === index ? {
                    x: Math.random() * 300,
                    y: Math.random() * 400,
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  } : {}}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Animated Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}
                animate={{
                  scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  rotate: hoveredIndex === index ? [0, 180, 360] : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold text-white mb-4 leading-tight"
                animate={{
                  x: hoveredIndex === index ? [0, 10, 0] : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} text-sm font-semibold mb-4`}
                animate={{
                  opacity: hoveredIndex === index ? [1, 0.7, 1] : 1,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {service.subtitle}
              </motion.p>
              
              <motion.p 
                className="text-gray-400 text-sm mb-8 leading-relaxed flex-1"
                animate={{
                  y: hoveredIndex === index ? [0, -5, 0] : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {service.description}
              </motion.p>

              {/* Interactive CTA */}
              <motion.div
                className="flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="text-white font-semibold text-lg"
                  animate={{
                    color: hoveredIndex === index ? "#ffffff" : "#9ca3af",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.cta}
                </motion.span>
                
                <motion.div
                  className={`p-3 bg-gradient-to-r ${service.color} rounded-full`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    rotate: hoveredIndex === index ? [0, 90, 0] : 0,
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
            </div>

            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 blur-3xl -z-10`}
              animate={{
                opacity: hoveredIndex === index ? 0.2 : 0,
                scale: hoveredIndex === index ? 1.5 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0, 100, 200, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          background: hoveredIndex !== null 
            ? `radial-gradient(circle at 50% 50%, rgba(${hoveredIndex * 50}, 100, 200, 0.15) 0%, transparent 70%)`
            : `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)`
        }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Interactive Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            animate={{
              scale: hoveredIndex !== null ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-5xl lg:text-7xl font-bold text-white">
              Interactive <span className="text-primary">Services</span>
            </h2>
            <Sparkles className="w-8 h-8 text-primary ml-4" />
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            animate={{
              opacity: hoveredIndex !== null ? 0.7 : 1,
            }}
          >
            Hover over each service to experience our interactive approach
          </motion.p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}