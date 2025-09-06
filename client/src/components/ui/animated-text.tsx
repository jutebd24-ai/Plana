import { motion } from "framer-motion";
import { letterReveal, letterStagger } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(textRef);

  const letters = text.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={letterReveal}
      className="inline-block"
      style={{ transformOrigin: "center bottom" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <div ref={textRef} className={className}>
      <motion.div
        variants={letterStagger}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        transition={{ delay }}
        className="inline-block"
      >
        {letters}
      </motion.div>
    </div>
  );
}

interface AnimatedLetterSpacingProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedLetterSpacing({ text, className = "", delay = 0 }: AnimatedLetterSpacingProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(textRef);

  const letters = text.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={letterReveal}
      className="inline-block"
      style={{ 
        transformOrigin: "center bottom",
        letterSpacing: "0.1em" 
      }}
    >
      {char === " " ? "\u00A0\u00A0\u00A0" : char}
    </motion.span>
  ));

  return (
    <div ref={textRef} className={className}>
      <motion.div
        variants={letterStagger}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        transition={{ delay }}
        className="inline-block"
      >
        {letters}
      </motion.div>
    </div>
  );
}