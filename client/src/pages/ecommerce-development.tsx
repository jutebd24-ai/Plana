import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, CreditCard, Package, TrendingUp, Shield, Smartphone, Globe, Users, Star, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";

export default function EcommerceDevelopment() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [activeFeature, setActiveFeature] = useState(0);

  const ecommerceFeatures = [
    {
      icon: ShoppingCart,
      title: "Advanced Shopping Cart",
      description: "Feature-rich shopping cart with wishlist, compare, and quick checkout functionality",
      benefits: ["Abandoned cart recovery", "Guest checkout", "Multiple payment options", "Tax calculations"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple gateway support and fraud protection",
      benefits: ["Stripe, PayPal, Square", "Cryptocurrency support", "Subscription billing", "Refund management"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking with automated stock alerts and supplier integration",
      benefits: ["Multi-location inventory", "Low stock alerts", "Supplier management", "Batch tracking"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Comprehensive sales analytics and business intelligence dashboards",
      benefits: ["Sales reporting", "Customer insights", "Product performance", "Revenue forecasting"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Complete CRM with customer profiles, order history, and loyalty programs",
      benefits: ["Customer profiles", "Order tracking", "Loyalty rewards", "Support tickets"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Mobile-optimized shopping experience with PWA capabilities",
      benefits: ["Responsive design", "Touch-friendly UI", "Mobile payments", "Push notifications"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "Complete e-commerce platform with hosting and built-in features",
      logo: "🛍️",
      features: ["Hosted solution", "App ecosystem", "Built-in payments", "Global CDN"]
    },
    {
      name: "WooCommerce", 
      description: "Flexible WordPress-based e-commerce with extensive customization",
      logo: "🌐",
      features: ["WordPress integration", "Highly customizable", "Large plugin library", "SEO optimized"]
    },
    {
      name: "Magento",
      description: "Enterprise-level e-commerce with advanced B2B and B2C capabilities",
      logo: "🏢",
      features: ["Enterprise features", "Multi-store support", "Advanced B2B", "High performance"]
    },
    {
      name: "Custom Build",
      description: "Fully custom e-commerce solution tailored to your specific needs",
      logo: "⚡",
      features: ["Complete control", "Unique features", "Perfect fit", "Scalable architecture"]
    }
  ];

  const stats = [
    { number: "300+", label: "E-commerce Sites Built", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "$50M+", label: "Revenue Generated", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section with Shopping Elements */}
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')] bg-cover bg-center opacity-10" />
        </motion.div>
        
        {/* Floating E-commerce Icons */}
        {[ShoppingCart, CreditCard, Package, TrendingUp].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/30"
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + (index % 2) * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-16 h-16" />
          </motion.div>
        ))}

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-8"
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
              <ShoppingCart className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <span className="text-white">E-commerce</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Development
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Build powerful online stores that drive sales and grow your business. 
              From simple shops to complex marketplaces, we create e-commerce solutions that convert.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
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
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Store
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300">
                View Examples
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Choose Your <span className="text-green-600">Platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major e-commerce platforms to find the perfect fit for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-500 border-0 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{platform.logo}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{platform.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>
                    
                    <div className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-sm text-green-600 font-semibold">
                          <Zap className="w-3 h-3 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Powerful <span className="text-blue-600">E-commerce Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful online business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                  onHoverStart={() => setActiveFeature(index)}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl transition-all duration-500 border-0 group-hover:scale-105">
                    <CardContent className="p-8">
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-xl mb-6`}
                        whileHover={{ 
                          rotate: [0, 10, -10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                      <div className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            className="flex items-center text-sm text-blue-700 font-semibold"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: activeFeature === index ? 1 : 0.7,
                              x: 0
                            }}
                            transition={{ delay: benefitIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {benefit}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 text-white relative overflow-hidden">
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
              <ShoppingCart className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-6xl font-bold mb-8">
              Ready to Launch
              <br />
              Your Online Store?
            </h2>
            <p className="text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Let's build an e-commerce platform that drives sales and grows your business
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-16 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300">
                <Package className="mr-4 w-8 h-8" />
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