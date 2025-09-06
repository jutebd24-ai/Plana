import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { Link } from "wouter";

export function AgencyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const titleWords = [
    { text: "Dubai's", delay: 0.1 },
    { text: "Top", delay: 0.2 },
    { text: "Digital", delay: 0.3 },
    { text: "Marketing", delay: 0.4 },
    { text: "Agency", delay: 0.5 },
  ];

  const subtitleWords = [
    { text: "for", delay: 0.6 },
    { text: "Innovative", delay: 0.7 },
    { text: "Solutions", delay: 0.8 },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 30,
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-40"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * 40,
            rotate: 360,
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-1 h-1 bg-primary rounded-full opacity-80"
          animate={{
            x: mousePosition.x * 60,
            y: mousePosition.y * -20,
            scale: [1, 2, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-8 h-8 border border-primary/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-orange-400/40 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left side - Image with animations */}
          <motion.div 
            className="relative order-2 lg:order-1"
            style={{ y: imageY }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="https://plana.ae/storage/paragraph_section/1/nsNhrjNysXoKsUl8yi2eLz3bai1fMXfxsiwFoLYV.png"
                  alt="Plan A Agency Team"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-orange-400/10" />
                
                {/* Floating elements on image */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">Award Winning</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-primary text-white rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-semibold">100+ Projects</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative elements around image */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-orange-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-orange-400 to-primary rounded-full opacity-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right side - Content with advanced animations */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            style={{ y: textY }}
          >
            {/* Animated subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-primary font-semibold text-lg tracking-wider uppercase">
                Plan A Beginning With Us
              </span>
            </motion.div>

            {/* Main animated title */}
            <div className="space-y-4">
              <motion.div className="overflow-hidden">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {titleWords.map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 100, opacity: 0 }}
                      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: word.delay,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground inline-block"
                      style={{ 
                        background: 'linear-gradient(135deg, #f97316, #ea580c, #dc2626)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: word.text === "Digital" || word.text === "Agency" ? 'transparent' : 'inherit'
                      }}
                    >
                      {word.text}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div className="overflow-hidden">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {subtitleWords.map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 100, opacity: 0 }}
                      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: word.delay,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
                      style={{ 
                        background: word.text === "Innovative" 
                          ? 'linear-gradient(135deg, #f97316, #ea580c)' 
                          : 'inherit',
                        WebkitBackgroundClip: word.text === "Innovative" ? 'text' : 'unset',
                        WebkitTextFillColor: word.text === "Innovative" ? 'transparent' : 'inherit'
                      }}
                    >
                      {word.text}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Animated description paragraphs */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We are a <span className="text-primary font-semibold">homegrown digital creative agency</span> in Dubai, 
                powering clients and brands of purpose to achieve their kind of success. Your goals create our milestones, 
                but the finish line we draw is always beyond.
              </p>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We approach everything with a <span className="text-primary font-semibold">multi-faceted attitude</span>, 
                armed with digital marketing professionals and award-winning creatives. Each member of our in-house team 
                owns the DNA of the 'renaissance human'.
              </p>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Our wide base of <span className="text-primary font-semibold">governmental and international clientele</span> and 
                our versatile portfolio is a testament to how we excel in branding, design and development for websites 
                and mobile apps, digital marketing and social media.
              </p>
            </motion.div>

            {/* Animated CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Meet Us
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              {[
                { number: "100+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="text-2xl lg:text-3xl font-bold text-primary mb-1"
                    animate={{ 
                      textShadow: ["0 0 0px #f97316", "0 0 20px #f97316", "0 0 0px #f97316"] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
}