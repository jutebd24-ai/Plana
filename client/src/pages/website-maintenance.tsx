import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Clock, AlertTriangle, CheckCircle2, TrendingUp, Monitor, Server, Database, Lock, Activity, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState, useEffect } from "react";

export default function WebsiteMaintenance() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [systemStatus, setSystemStatus] = useState("scanning");
  const controls = useAnimation();

  // System status cycle
  useEffect(() => {
    const statusCycle = ["scanning", "updating", "secure", "optimized"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % statusCycle.length;
      setSystemStatus(statusCycle[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maintenanceServices = [
    {
      icon: Shield,
      title: "Security Updates",
      description: "Regular security patches, vulnerability assessments, and malware protection",
      features: ["Security patches", "Malware scanning", "SSL monitoring", "Firewall management"],
      color: "from-red-500 to-pink-500",
      status: "critical"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, database tuning, and server performance monitoring",
      features: ["Speed optimization", "Database tuning", "CDN management", "Cache optimization"],
      color: "from-yellow-500 to-orange-500",
      status: "high"
    },
    {
      icon: Server,
      title: "Server Monitoring",
      description: "24/7 server monitoring, uptime tracking, and automated alerts",
      features: ["24/7 monitoring", "Uptime tracking", "Server alerts", "Resource monitoring"],
      color: "from-blue-500 to-cyan-500",
      status: "medium"
    },
    {
      icon: Database,
      title: "Backup Management",
      description: "Automated backups, restore testing, and disaster recovery planning",
      features: ["Automated backups", "Restore testing", "Cloud storage", "Recovery planning"],
      color: "from-green-500 to-emerald-500",
      status: "low"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Monitor, color: "text-green-500" },
    { number: "< 2min", label: "Response Time", icon: Clock, color: "text-blue-500" },
    { number: "24/7", label: "Monitoring", icon: Activity, color: "text-purple-500" },
    { number: "500+", label: "Sites Maintained", icon: CheckCircle2, color: "text-orange-500" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scanning": return "from-blue-500 to-cyan-500";
      case "updating": return "from-yellow-500 to-orange-500";
      case "secure": return "from-green-500 to-emerald-500";
      case "optimized": return "from-purple-500 to-pink-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "scanning": return "Scanning for issues...";
      case "updating": return "Applying updates...";
      case "secure": return "Security verified ✓";
      case "optimized": return "Performance optimized ✓";
      default: return "System ready";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section with System Monitor */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* System Status Monitor */}
            <motion.div
              className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-cyan-500/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${getStatusColor(systemStatus)}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-cyan-400 font-mono">System Status</span>
                </div>
                <span className="text-green-400 font-mono text-sm">{getStatusText(systemStatus)}</span>
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {["CPU Usage", "Memory", "Disk Space", "Network"].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 font-mono text-sm w-24">{metric}</span>
                    <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${getStatusColor(systemStatus)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 40 + 20}%` }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="text-green-400 font-mono text-sm">OK</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight text-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Website
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Maintenance
              </span>
              <br />
              <span className="text-4xl lg:text-5xl text-gray-600">& Support</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Keep your website secure, fast, and running smoothly with our comprehensive 
              maintenance services. We monitor, update, and optimize while you focus on your business.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Monitoring
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300">
                View Plans
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating System Icons */}
        {[Shield, Server, Database, Lock].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/20"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        ))}
      </section>

      {/* Services Section with Priority Cards */}
      <section ref={sectionRef} className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Maintenance <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive website maintenance services prioritized by importance and urgency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceServices.map((service, index) => {
              const Icon = service.icon;
              const priorityColors = {
                critical: "border-red-500 bg-red-500/10",
                high: "border-orange-500 bg-orange-500/10", 
                medium: "border-blue-500 bg-blue-500/10",
                low: "border-green-500 bg-green-500/10"
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className={`h-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 border-2 ${priorityColors[service.status as keyof typeof priorityColors]} group-hover:scale-105`}>
                    <CardContent className="p-6">
                      {/* Priority Indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} text-white rounded-lg`}
                          whileHover={{ 
                            rotate: [0, 15, -15, 0],
                            scale: 1.1 
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          service.status === 'critical' ? 'bg-red-500 text-white' :
                          service.status === 'high' ? 'bg-orange-500 text-white' :
                          service.status === 'medium' ? 'bg-blue-500 text-white' :
                          'bg-green-500 text-white'
                        }`}>
                          {service.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-xs text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                          >
                            <CheckCircle2 className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
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

      {/* CTA Section with Monitoring Dashboard */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h10M30 20h10M20 0v10M20 30v10" stroke="currentColor" strokeWidth="1"/>
                <circle cx="20" cy="20" r="3" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-500"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mock Dashboard */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-cyan-500/30 max-w-4xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">0.8s</div>
                  <div className="text-sm text-gray-400">Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">A+</div>
                  <div className="text-sm text-gray-400">Security</div>
                </div>
              </div>
              
              <motion.div
                className="w-full bg-gray-700 rounded-full h-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full w-full"></div>
              </motion.div>
              <div className="text-xs text-gray-400 mt-2 text-center">All systems operational</div>
            </motion.div>

            <h2 className="text-6xl font-bold mb-8 text-white">
              Your Website Deserves
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Expert Care
              </span>
            </h2>
            <p className="text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Don't wait for problems to occur. Start proactive maintenance today.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-16 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                <Wrench className="mr-4 w-8 h-8" />
                START MAINTENANCE
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