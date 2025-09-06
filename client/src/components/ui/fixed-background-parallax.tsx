import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FixedBackgroundParallaxProps {
  children: ReactNode;
  backgroundImage: string;
  height?: string;
  overlayOpacity?: number;
  className?: string;
}

export function FixedBackgroundParallax({
  children,
  backgroundImage,
  height = "100vh",
  overlayOpacity = 0.7,
  className = ""
}: FixedBackgroundParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create parallax effect - background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Fixed Background Layer */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          y: backgroundY,
          scale: 1.1 // Slight scale to prevent white edges during transform
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content Layer */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollTriggeredParallaxProps {
  children: ReactNode;
  backgroundImage: string;
  className?: string;
  offset?: number;
}

export function ScrollTriggeredParallax({
  children,
  backgroundImage,
  className = "",
  offset = 50
}: ScrollTriggeredParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background stays fixed while content moves
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.4) contrast(1.2)"
        }}
      />
      
      {/* Content with parallax motion */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center"
        style={{
          y: backgroundY,
          opacity: contentOpacity
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}