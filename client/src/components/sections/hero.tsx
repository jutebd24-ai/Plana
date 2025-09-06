import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroBackground } from "@/components/hero/hero-background";
import { HeroTitle } from "@/components/hero/hero-title";
import { HeroActions } from "@/components/hero/hero-actions";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface HeroProps {}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <AnimatePresence>
        {!isVideoPlaying && (
          <motion.div 
            key="hero-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-16 sm:pt-20"
          >
            <div className="text-center">
              <HeroTitle isVisible={isVisible} />
              <HeroActions isVisible={isVisible} onShowreel={() => setIsVideoPlaying(true)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            key="video-player"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div className="relative w-full h-full max-w-6xl mx-auto px-4 flex items-center justify-center">
              
              {/* Close button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-3 z-30"
              >
                <motion.span 
                  className="text-white text-sm sm:text-lg tracking-wider font-light hidden sm:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Close Showreel
                </motion.span>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsVideoPlaying(false)}
                    className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300 rounded-full w-12 h-12"
                    data-testid="close-video"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Watch Showreel title */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 sm:top-8 left-4 sm:left-8 z-30"
              >
                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wider">
                  Watch Showreel
                </h3>
              </motion.div>

              {/* Video container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl mx-4 sm:mx-0"
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/EX3gxOdGcpI?autoplay=1&rel=0&modestbranding=1&controls=1"
                  title="PLAN A AGENCY SHOWREEL"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  data-testid="youtube-iframe"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-20 w-3 h-3 border border-white/30 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
