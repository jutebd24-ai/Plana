import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Edit3, Image, Users, Search, Palette, Zap, FileText, Layout, Settings, Monitor, Smartphone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";

export default function CMSDevelopment() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const features = [
    {
      icon: Edit3,
      title: "Intuitive Content Editor",
      description: "WYSIWYG editor with drag-and-drop functionality, real-time preview, and collaborative editing",
      benefits: ["Rich text editing", "Media embedding", "Version control", "Auto-save functionality"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Image,
      title: "Advanced Media Management",
      description: "Powerful media library with automatic optimization, CDN integration, and smart categorization",
      benefits: ["Auto image optimization", "Cloud storage", "Bulk operations", "Smart tagging"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description: "Role-based permissions, workflow management, and real-time collaboration tools",
      benefits: ["Custom user roles", "Approval workflows", "Activity tracking", "Team comments"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Search,
      title: "Built-in SEO Tools",
      description: "Comprehensive SEO optimization with meta management, sitemap generation, and analytics",
      benefits: ["Meta tag management", "XML sitemaps", "SEO scoring", "Analytics integration"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Theme Customization",
      description: "Flexible theme system with live preview, custom CSS support, and responsive design",
      benefits: ["Live theme editor", "Custom CSS", "Responsive preview", "Template library"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightning-fast loading with caching, CDN integration, and optimized database queries",
      benefits: ["Smart caching", "CDN integration", "Database optimization", "Core Web Vitals"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const cmsTypes = [
    {
      title: "Headless CMS",
      description: "API-first content management for modern applications",
      icon: Monitor,
      use_cases: ["Mobile apps", "Multi-channel", "Developer-friendly", "Scalable architecture"]
    },
    {
      title: "Traditional CMS", 
      description: "Full-featured content management with built-in frontend",
      icon: Layout,
      use_cases: ["Websites", "Blogs", "Easy management", "Quick setup"]
    },
    {
      title: "Hybrid CMS",
      description: "Best of both worlds with flexible content delivery",
      icon: Settings,
      use_cases: ["Enterprise", "Multi-site", "Future-proof", "Flexible deployment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section with Content Blocks Animation */}
      <section 
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Content Blocks Background */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg opacity-20"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 360],
                scale: [1, Math.random() * 0.5 + 0.75]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none"
          style={{
            x: useTransform(mouseX, [0, 1000], [-100, 100]),
            y: useTransform(mouseY, [0, 1000], [-100, 100]),
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8"
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
              <FileText className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Content Management
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Made Simple
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Custom CMS solutions that empower your team to create, manage, and publish content 
              with ease. Built for performance, scalability, and user experience.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Build Your CMS
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300">
                See Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CMS Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Choose Your <span className="text-blue-600">CMS Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different approaches for different needs - we build the perfect CMS for your use case
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cmsTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-2xl transition-all duration-500 border-0 group-hover:scale-105">
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />

                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl mb-6 relative z-10"
                        whileHover={{ 
                          rotate: [0, 15, -15, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{type.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{type.description}</p>

                      <div className="space-y-2 relative z-10">
                        {type.use_cases.map((useCase, useIndex) => (
                          <motion.div
                            key={useIndex}
                            className="flex items-center text-sm text-blue-700 font-semibold"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: hoveredCard === index ? 1 : 0.7,
                              x: hoveredCard === index ? 0 : -20
                            }}
                            transition={{ delay: useIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {useCase}
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

      {/* Features Showcase Section */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Powerful <span className="text-purple-600">Features</span> Built-In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every CMS we build comes with enterprise-grade features designed to scale with your business
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
                  className="group"
                  onHoverStart={() => setActiveFeature(index)}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 border-0 group-hover:scale-105">
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

                      {/* Benefits List with Stagger Animation */}
                      <AnimatePresence>
                        {activeFeature === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2"
                          >
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <motion.div
                                key={benefitIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: benefitIndex * 0.1 }}
                                className="flex items-center text-sm text-blue-700 font-semibold"
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {benefit}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Content Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Floating Content Elements */}
        <div className="absolute inset-0">
          {[FileText, Image, Users, Settings].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-white/10"
              style={{
                left: `${10 + index * 25}%`,
                top: `${20 + (index % 2) * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-16 h-16" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center space-x-4 mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Monitor className="w-12 h-12 text-blue-400" />
              <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <Smartphone className="w-8 h-8 text-purple-400" />
            </motion.div>

            <h2 className="text-6xl font-bold mb-8">
              Ready to Transform Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Content Management?
              </span>
            </h2>
            <p className="text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let's build a CMS that grows with your business and empowers your team
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-16 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                START YOUR CMS PROJECT
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