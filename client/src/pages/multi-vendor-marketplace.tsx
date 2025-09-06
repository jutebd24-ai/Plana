import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Users, DollarSign, BarChart3, Shield, Smartphone, Globe, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";

export default function MultiVendorMarketplace() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const features = [
    {
      icon: Users,
      title: "Vendor Management",
      description: "Complete vendor dashboard with onboarding, profile management, and performance analytics",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingCart,
      title: "Product Catalog",
      description: "Advanced product management with categories, variants, inventory tracking, and bulk operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Commission System",
      description: "Flexible commission structures with automated payouts and detailed financial reporting",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Real-time marketplace analytics with vendor performance metrics and sales reporting",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Built-in fraud prevention, secure payments, and trust & safety systems",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Responsive design with PWA capabilities for seamless mobile marketplace experience",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Marketplaces Built", icon: Globe },
    { number: "2M+", label: "Daily Transactions", icon: Zap },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section with Interactive Background */}
      <section 
        className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(600px circle at ${useTransform(mouseX, [0, 1000], [0, 100])}% ${useTransform(mouseY, [0, 1000], [0, 100])}%, rgba(120, 119, 198, 0.3), transparent 40%)`
            }}
          />
          
          {/* Floating Network Nodes */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl lg:text-9xl font-black mb-8 leading-tight text-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              MULTI-VENDOR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                MARKETPLACE
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Build powerful e-commerce marketplaces that connect thousands of vendors with millions of customers. 
              Scalable, secure, and profitable.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                BUILD YOUR MARKETPLACE
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-10 py-6 text-xl font-bold rounded-xl transition-all duration-300">
                SEE LIVE DEMO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white">
              MARKETPLACE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                FEATURES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to launch and scale a successful multi-vendor marketplace
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-700/50 transition-all duration-500 backdrop-blur-sm">
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Gradient Overlay on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredFeature === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-xl mb-6 relative z-10`}
                        whileHover={{ 
                          rotate: [0, 10, -10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed relative z-10">{feature.description}</p>

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 border-2 border-transparent rounded-lg"
                        animate={{
                          borderColor: hoveredFeature === index ? "rgba(168, 85, 247, 0.5)" : "transparent"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Particles */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-8xl font-black mb-8 text-white">
              READY TO LAUNCH?
            </h2>
            <p className="text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of successful marketplace owners who chose our platform
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-16 py-8 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                START YOUR MARKETPLACE
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