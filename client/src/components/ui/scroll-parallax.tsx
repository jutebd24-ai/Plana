import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ScrollParallax({ children, offset = 50, className = "" }: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollFade({ children, className = "", direction = "up" }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return { y: 100, opacity: 0 };
      case "down": return { y: -100, opacity: 0 };
      case "left": return { x: 100, opacity: 0 };
      case "right": return { x: -100, opacity: 0 };
      default: return { y: 100, opacity: 0 };
    }
  };

  const getAnimateTransform = () => {
    switch (direction) {
      case "up": return { y: 0, opacity: 1 };
      case "down": return { y: 0, opacity: 1 };
      case "left": return { x: 0, opacity: 1 };
      case "right": return { x: 0, opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const transform = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={ref} className={className}>
      <motion.div 
        initial={getInitialTransform()}
        whileInView={getAnimateTransform()}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}