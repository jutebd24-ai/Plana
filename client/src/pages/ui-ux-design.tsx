import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Users, Eye, Smartphone, Monitor, Tablet, Figma, Layers, MousePointer, Heart, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef, useState } from "react";

export default function UIUXDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [activeStep, setActiveStep] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const designProcess = [
    {
      step: "01",
      title: "User Research",
      description: "Understanding user needs, behaviors, and pain points through research",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      deliverables: ["User Personas", "Journey Maps", "Research Reports", "User Interviews"]
    },
    {
      step: "02", 
      title: "Information Architecture",
      description: "Organizing content and features in a logical, user-friendly structure",
      icon: Layers,
      color: "from-purple-500 to-indigo-500",
      deliverables: ["Site Maps", "User Flows", "Wireframes", "Content Strategy"]
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Creating beautiful, accessible interfaces that align with your brand",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Design Systems", "High-fidelity Mockups", "Style Guides", "Component Library"]
    },
    {
      step: "04",
      title: "Prototyping & Testing",
      description: "Building interactive prototypes and validating designs with real users",
      icon: MousePointer,
      color: "from-green-500 to-emerald-500",
      deliverables: ["Interactive Prototypes", "Usability Testing", "Design Iterations", "Final Specifications"]
    }
  ];

  const services = [
    {
      icon: Eye,
      title: "User Experience Design",
      description: "Creating intuitive user experiences that delight and convert",
      features: ["User journey mapping", "Wireframing", "Usability testing", "Conversion optimization"]
    },
    {
      icon: Palette,
      title: "User Interface Design", 
      description: "Beautiful, modern interfaces that reflect your brand perfectly",
      features: ["Visual design", "Component systems", "Design tokens", "Accessibility compliance"]
    },
    {
      icon: Monitor,
      title: "Web Application Design",
      description: "Complex web application interfaces designed for productivity",
      features: ["Dashboard design", "Data visualization", "Responsive layouts", "Progressive web apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native mobile app designs optimized for touch interactions",
      features: ["iOS/Android design", "Touch interactions", "Mobile patterns", "App store optimization"]
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      
      {/* Hero Section with Interactive Design Elements */}
      <section 
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Floating Design Elements */}
        <div className="absolute inset-0">
          {/* Color Palette */}
          <motion.div
            className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-rose-400"
            style={{ x, y }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-32 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{ 
              x: useTransform(x, (value) => value * -0.5),
              y: useTransform(y, (value) => value * -0.5)
            }}
            animate={{
              rotate: [0, -90, -180]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 45, 90]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Typography Elements */}
          <motion.div
            className="absolute top-1/4 right-20 text-6xl font-bold text-purple-200 opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Aa
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Design Tools Icons */}
            <motion.div
              className="flex items-center justify-center space-x-6 mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Figma className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="w-4 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: -360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Palette className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <span className="text-white">UI/UX</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Design
              </span>
              <br />
              <span className="text-4xl lg:text-5xl text-gray-300">That Converts</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              User-centered design that combines beautiful aesthetics with intuitive functionality. 
              We create digital experiences that users love and businesses profit from.
            </motion.p>

            {/* Device Preview */}
            <motion.div
              className="flex items-end justify-center space-x-4 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.div
                className="w-8 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-6 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-sm"></div>
                <Smartphone className="absolute bottom-1 w-3 h-3 text-white" />
              </motion.div>
              
              <motion.div
                className="w-16 h-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-14 h-8 bg-gradient-to-b from-pink-400 to-purple-400 rounded-sm"></div>
                <Tablet className="absolute bottom-0.5 w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                className="w-24 h-14 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-22 h-12 bg-gradient-to-b from-purple-400 to-blue-400 rounded-sm"></div>
                <Monitor className="absolute bottom-0.5 w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Design Project
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services that cover every aspect of user experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-gray-50 to-purple-50 hover:shadow-xl transition-all duration-500 border-0 group-hover:scale-105">
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />

                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl mb-6 relative z-10"
                        whileHover={{ 
                          rotate: [0, 10, -10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{service.description}</p>

                      <div className="space-y-3 relative z-10">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-sm text-purple-700 font-semibold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <Star className="w-4 h-4 text-pink-500 mr-3 fill-current" />
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

      {/* Design Process Section */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Our Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every design decision is backed by user research and data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                  onHoverStart={() => setActiveStep(index)}
                >
                  <Card className="h-full bg-white hover:shadow-xl transition-all duration-500 border-0 group-hover:scale-105 relative overflow-hidden">
                    <CardContent className="p-8">
                      {/* Step Number */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-xl mb-6 text-2xl font-bold`}>
                        {step.step}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-purple-600 mb-3">Deliverables:</div>
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <motion.div
                            key={deliverableIndex}
                            className="flex items-center text-xs text-gray-500"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: activeStep === index ? 1 : 0.7, x: 0 }}
                            transition={{ delay: deliverableIndex * 0.05 }}
                          >
                            <Heart className="w-3 h-3 text-pink-400 mr-2 fill-current" />
                            {deliverable}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Connection Arrow */}
                    {index < designProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transform -translate-y-1/2">
                        <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-purple-400" />
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white relative overflow-hidden">
        {/* Design Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 30px 30px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-8">
              Ready to Create Amazing
              <br />
              User Experiences?
            </h2>
            <p className="text-2xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Let's design something beautiful that your users will love and your business will profit from
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-16 py-8 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300">
                <Palette className="mr-4 w-8 h-8" />
                START DESIGN PROJECT
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