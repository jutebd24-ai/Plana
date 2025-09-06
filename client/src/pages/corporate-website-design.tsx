import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Building, Users, Globe, Shield, Zap, Trophy } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export default function CorporateWebsiteDesign() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const features = [
    {
      icon: Building,
      title: "Professional Design",
      description: "Corporate-level design that reflects your brand's professionalism and values"
    },
    {
      icon: Users,
      title: "User Experience Focus",
      description: "Intuitive navigation and user-friendly interfaces that convert visitors"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Built to international web standards with accessibility in mind"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-level security features to protect your business and customers"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and performance across all devices and browsers"
    },
    {
      icon: Trophy,
      title: "Award-Winning",
      description: "Our corporate websites have won multiple industry awards"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competitive landscape",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "Creating wireframes, mockups, and interactive prototypes for approval",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with clean code and modern technologies",
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing across devices before launching your new website",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')] bg-cover bg-center opacity-20" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Corporate
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Website Design
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Professional websites that represent your business with sophistication, 
              reliability, and cutting-edge design
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-6 h-6 border-2 border-purple-400 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Features Section with Grid Animation */}
      <section ref={sectionRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Why Choose Our <span className="text-blue-600">Corporate Design</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that your website is often the first impression customers have of your business.
              That's why we focus on creating websites that build trust and drive results.
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
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline Animation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures your corporate website exceeds expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-full text-2xl font-bold mb-6`}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Build Your Corporate Website?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Let's create a professional website that represents your business perfectly
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              REQUEST A QUOTATION
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}