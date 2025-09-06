import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function ServiceGridGlassmorphism() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const services = [
    {
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars",
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready.",
      cta: "Legacies Born",
      icon: "🎨"
    },
    {
      title: "Brand Audit and Benchmarking", 
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis.",
      cta: "Learn more",
      icon: "📊"
    },
    {
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE", 
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence.",
      cta: "Advertise right",
      icon: "📱"
    },
    {
      title: "Web Design & Development",
      subtitle: "Own your online presence",
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand.",
      cta: "Explore our projects",
      icon: "💻"
    },
    {
      title: "Mobile Apps Design & Development",
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers.",
      cta: "Take me there",
      icon: "📲"
    },
    {
      title: "Content Writing", 
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts or persuasive copy.",
      cta: "Know the full story",
      icon: "✍️"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #667eea 0%, #764ba2 100%)
        `
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Glassmorphism Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
            <Sparkle className="w-6 h-6 text-white mr-2" />
            <span className="text-white text-sm font-medium tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-300">Create</span>
          </h2>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto backdrop-blur-sm">
            Experience premium digital solutions through our glassmorphism approach
          </p>
        </motion.div>

        {/* Glassmorphism Cards Grid */}
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
              data-testid={`service-glass-${index}`}
            >
              <div className="relative">
                {/* Glass card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:bg-white/20 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 min-h-[400px] flex flex-col">
                  {/* Floating icon */}
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-blue-200 text-sm font-medium mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-white/70 text-sm mb-8 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Glass CTA button */}
                  <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <span>{service.cta}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}