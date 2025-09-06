import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Lock, Users, BarChart3, Layers, Zap, Code, Settings, Globe, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";

export default function CustomWebPortals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const [activeTab, setActiveTab] = useState("enterprise");
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const portalTypes = [
    {
      id: "enterprise",
      title: "Enterprise Portals",
      description: "Comprehensive business management systems",
      icon: Building2,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "customer",
      title: "Customer Portals", 
      description: "Self-service customer experience platforms",
      icon: Users,
      color: "from-green-600 to-green-800"
    },
    {
      id: "partner",
      title: "Partner Portals",
      description: "Collaboration and resource sharing platforms",
      icon: Globe,
      color: "from-purple-600 to-purple-800"
    }
  ];

  const features = [
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect with existing databases, APIs, and third-party services",
      tech: ["REST APIs", "GraphQL", "Database Sync", "Real-time Updates"]
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Enterprise-grade security with role-based access and encryption",
      tech: ["SSO Integration", "2FA", "RBAC", "Data Encryption"]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time analytics and reporting with customizable dashboards",
      tech: ["Custom Reports", "Data Visualization", "KPI Tracking", "Export Tools"]
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Scalable, modular design that grows with your business needs",
      tech: ["Microservices", "API-First", "Cloud Native", "Auto Scaling"]
    }
  ];

  const techStack = [
    { name: "React", progress: 95, color: "bg-blue-500" },
    { name: "Node.js", progress: 90, color: "bg-green-500" },
    { name: "PostgreSQL", progress: 85, color: "bg-purple-500" },
    { name: "AWS Cloud", progress: 88, color: "bg-orange-500" },
    { name: "Docker", progress: 92, color: "bg-cyan-500" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section with Code Animation */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated Code Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M8 0h4v4H8zM0 8h4v4H0zM16 8h4v4h-4zM24 0h4v4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            animate={{
              x: [0, 60],
              y: [0, 60]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Typing Animation for Title */}
            <motion.h1 className="text-6xl lg:text-8xl font-mono font-bold mb-8 leading-tight">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-blue-400"
              >
                CUSTOM WEB
              </motion.span>
              <br />
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-green-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
              >
                PORTALS
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              {'> Building secure, scalable web portals tailored to your business requirements'}
              <br />
              {'> Empowering users with intuitive interfaces and powerful functionality'}
            </motion.p>

            {/* Tech Stack Showcase */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3 + index * 0.1 }}
                >
                  <div className="text-sm font-mono text-gray-300 mb-2">{tech.name}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${tech.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.progress}%` }}
                      transition={{ delay: 3.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                  <div className="text-xs font-mono text-gray-400 mt-1">{tech.progress}%</div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.8 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-10 py-6 text-xl font-mono font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400/50">
                {'<START_PROJECT />'}
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-10 py-6 text-xl font-mono font-bold rounded-lg transition-all duration-300">
                {'<VIEW_DEMOS />'}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        {[Code, Database, Settings, Shield].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/30"
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + (index % 2) * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        ))}
      </section>

      {/* Portal Types Section with Tabs */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900 font-mono">
              {'<PORTAL_TYPES>'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
              // Choose the portal solution that fits your business needs
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portalTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-8 py-4 font-mono font-bold rounded-lg transition-all duration-300 ${
                  activeTab === type.id
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.title}
              </motion.button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-blue-200">
                    <CardContent className="p-8">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg mb-6"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 font-mono">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {feature.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-mono font-semibold"
                          >
                            {tech}
                          </span>
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

      {/* CTA Section with Terminal Animation */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal Window */}
            <motion.div
              className="bg-black rounded-lg p-8 mb-12 max-w-4xl mx-auto border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-sm font-mono">
                  portal-builder@plana-ae:~$
                </div>
              </div>
              
              <div className="text-left font-mono text-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-green-400">$</span> npm install custom-web-portal
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-gray-400 mt-2"
                >
                  ✓ Secure authentication system installed
                  <br />
                  ✓ Database integration configured  
                  <br />
                  ✓ Analytics dashboard ready
                  <br />
                  ✓ API endpoints generated
                  <br />
                  <span className="text-green-400">Portal ready for deployment!</span>
                </motion.div>
              </div>
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-bold font-mono mb-8">
              {'<READY_TO_BUILD />'}
            </h2>
            <p className="text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
              // Let's architect your custom web portal solution
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-16 py-8 text-2xl font-mono font-bold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/50">
                {'<REQUEST_QUOTE />'}
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

// Missing import fix
import { Building2 } from "lucide-react";