import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Zap, Eye, MousePointer, BarChart3, Rocket, Users, Heart, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState, useEffect } from "react";

export default function LandingPageDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [conversionRate, setConversionRate] = useState(2.3);
  const [activeElement, setActiveElement] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Conversion rate animation
  useEffect(() => {
    const interval = setInterval(() => {
      setConversionRate(prev => Math.min(prev + 0.1, 15.7));
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const landingPageElements = [
    {
      title: "Hero Section",
      description: "Compelling headlines that grab attention and communicate value instantly",
      icon: Target,
      position: { top: "10%", left: "50%" },
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Social Proof",
      description: "Customer testimonials, reviews, and trust badges that build credibility",
      icon: Users,
      position: { top: "25%", left: "20%" },
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Value Proposition",
      description: "Clear benefits and features that resonate with your target audience",
      icon: Star,
      position: { top: "40%", left: "80%" },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Call-to-Action",
      description: "Strategic CTAs that guide visitors toward conversion",
      icon: MousePointer,
      position: { top: "70%", left: "30%" },
      color: "from-green-500 to-emerald-500"
    }
  ];

  const conversionFeatures = [
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Every element designed to maximize conversions and reduce bounce rate",
      metrics: ["Up to 300% increase", "A/B tested elements", "Heatmap analysis", "User behavior tracking"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with Core Web Vitals compliance and fast loading",
      metrics: ["< 2s load time", "90+ PageSpeed score", "Optimized images", "Minimal code"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Eye,
      title: "Visual Hierarchy", 
      description: "Strategic design that guides user attention to key conversion points",
      metrics: ["Clear focal points", "Color psychology", "Typography hierarchy", "Visual flow"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Design",
      description: "Designs based on conversion data, user research, and industry best practices",
      metrics: ["Research-backed", "Industry benchmarks", "User testing", "Analytics integration"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      {/* Hero Section with Conversion Metrics */}
      <section 
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Interactive Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(239, 68, 68, 0.15), transparent 40%)`
            }}
          />

          {/* Floating Landing Page Elements */}
          {landingPageElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={index}
                className="absolute"
                style={element.position}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.7, 
                  scale: activeElement === index ? 1.2 : 1,
                  rotate: activeElement === index ? 0 : Math.random() * 360
                }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onHoverStart={() => setActiveElement(index)}
                onHoverEnd={() => setActiveElement(-1)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                {activeElement === index && (
                  <motion.div
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-xl w-64 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{element.title}</h4>
                    <p className="text-sm text-gray-600">{element.description}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Conversion Rate Counter */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-xl mb-8 inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    <motion.span
                      key={conversionRate}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {conversionRate.toFixed(1)}%
                    </motion.span>
                  </div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
                <div className="text-2xl">📈</div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <span className="text-gray-900">Landing Pages</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                That Convert
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              High-converting landing pages designed to turn visitors into customers. 
              Optimized for performance, mobile-ready, and built to achieve your marketing goals.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {[
                { icon: Target, label: "15x Higher Conversions", color: "text-red-500" },
                { icon: Zap, label: "2s Load Time", color: "text-yellow-500" },
                { icon: Heart, label: "Mobile Optimized", color: "text-pink-500" }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-8 h-8 ${benefit.color} mx-auto mb-2`} />
                    <div className="font-semibold text-gray-900">{benefit.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Rocket className="mr-3 w-6 h-6" />
                Launch High-Converting Page
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-12 py-6 text-xl font-semibold rounded-xl transition-all duration-300">
                View Examples
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conversion Features Section */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Maximum Conversions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element optimized to turn visitors into customers with proven conversion tactics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conversionFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-red-50 hover:shadow-2xl transition-all duration-500 border-0 group-hover:scale-105">
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Animated Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />

                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-xl mb-6 relative z-10`}
                        whileHover={{ 
                          rotate: [0, 360],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed relative z-10">{feature.description}</p>

                      <div className="space-y-2 relative z-10">
                        {feature.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            className="flex items-center text-xs text-red-600 font-semibold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: metricIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            {metric}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your marketing results with landing pages that actually convert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gray-300 rounded-lg h-64 mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="text-gray-500 text-lg">😞 Generic Landing Page</div>
                <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                  2.3% Conversion
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">Before</h3>
              <ul className="text-gray-500 space-y-2">
                <li>• Generic design</li>
                <li>• Weak call-to-actions</li>
                <li>• Slow loading times</li>
                <li>• No optimization</li>
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-lg h-64 mb-6 flex items-center justify-center relative overflow-hidden border-2 border-orange-200">
                <motion.div
                  className="text-orange-600 text-lg font-semibold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀 Optimized Landing Page
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm font-bold">
                  15.7% Conversion
                </div>
                <motion.div
                  className="absolute top-4 right-4 text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">After</h3>
              <ul className="text-orange-600 space-y-2 font-semibold">
                <li>• Conversion-optimized design</li>
                <li>• Strategic CTAs</li>
                <li>• Lightning fast</li>
                <li>• A/B tested elements</li>
              </ul>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-6xl font-bold mb-2">584%</div>
              <div className="text-xl">Average Conversion Increase</div>
              <div className="text-sm opacity-80 mt-2">Based on client results over 12 months</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px),
                radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 3px, transparent 3px)
              `,
              backgroundSize: '60px 60px, 40px 40px, 80px 80px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Target className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-6xl font-bold mb-8">
              Ready to Skyrocket
              <br />
              Your Conversions?
            </h2>
            <p className="text-2xl mb-12 text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Stop losing potential customers. Get a landing page that turns visitors into buyers.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-16 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300">
                <Rocket className="mr-4 w-8 h-8" />
                START YOUR PROJECT
                <ArrowRight className="ml-4 w-8 h-8" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}