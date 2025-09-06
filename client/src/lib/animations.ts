import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const textReveal: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

export const scaleOnHover: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const letterAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const floatingAnimation: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Letter-by-letter reveal animation (key feature from Plana website)
export const letterReveal: Variants = {
  initial: {
    opacity: 0,
    y: 100,
    rotateX: 90,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stagger animation for letter reveals
export const letterStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Parallax scroll animation
export const parallaxScroll: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -50,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Enhanced image hover effect with multiple transforms
export const imageParallaxHover: Variants = {
  initial: {
    scale: 1,
    y: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.1,
    y: -20,
    rotateY: 5,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Smooth reveal with scale and opacity
export const revealScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 60,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Technology carousel continuous scroll
export const infiniteScroll: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Advanced scroll animations for images
export const scrollRevealImage: Variants = {
  initial: {
    scale: 1.3,
    opacity: 0,
    y: 100,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Floating scroll effect for elements
export const floatOnScroll: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Complex image hover with multiple transforms
export const complexImageHover: Variants = {
  initial: {
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    z: 0,
  },
  hover: {
    scale: 1.05,
    rotateY: 8,
    rotateX: 5,
    z: 50,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Staggered grid animation
export const staggerGrid: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Text reveal with blur effect
export const blurTextReveal: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
    y: 50,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
