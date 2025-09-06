import { motion } from "framer-motion";

interface HeroTitleProps {
  isVisible: boolean;
}

export function HeroTitle({ isVisible }: HeroTitleProps) {
  const buildingLetters = "Building".split("");
  const digitalLetters = "Digital".split("");
  const creativeLetters = "Creative".split("");
  const legaciesLetters = "Legacies".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8 relative"
    >
      {/* Decorative shape from reference */}
      <motion.div 
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={isVisible ? { opacity: 0.8, scale: 1, rotate: 15 } : { opacity: 0, scale: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute top-8 right-16 w-20 h-20 lg:w-32 lg:h-32"
      >
        <img 
          src="https://plana.ae/web-assets/imgs/shape/23.svg" 
          alt="" 
          className="w-full h-full"
        />
      </motion.div>
      
      <div className="text-center">
        {/* Building with letter spacing */}
        <motion.div className="relative mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-6">
            {buildingLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -90 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.1, 
                  ease: [0.6, 0.05, 0.01, 0.9] 
                }}
                className="inline-block transform-gpu"
                style={{ transformOrigin: "center bottom" }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        
        {/* Digital with bold styling and wide spacing */}
        <motion.div className="relative mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex justify-center items-center space-x-3 md:space-x-6 lg:space-x-8">
            {digitalLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.3, y: 50 }}
                transition={{ 
                  duration: 1, 
                  delay: 1 + index * 0.1, 
                  ease: [0.6, 0.05, 0.01, 0.9] 
                }}
                className="inline-block text-white font-black transform-gpu"
              >
                <strong>{letter}</strong>
              </motion.span>
            ))}
          </h2>
        </motion.div>
        
        {/* "and" connector */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">and</span>
        </motion.div>
        
        {/* Creative with bold styling and wide spacing */}
        <motion.div className="relative mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex justify-center items-center space-x-3 md:space-x-6 lg:space-x-8">
            {creativeLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 90 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.2 + index * 0.1, 
                  ease: [0.6, 0.05, 0.01, 0.9] 
                }}
                className="inline-block text-white font-black transform-gpu"
                style={{ transformOrigin: "center center" }}
              >
                <strong>{letter}</strong>
              </motion.span>
            ))}
          </h2>
        </motion.div>
        
        {/* Legacies with letter spacing */}
        <motion.div className="relative">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white flex justify-center items-center space-x-2 md:space-x-3 lg:space-x-4">
            {legaciesLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 3 + index * 0.08, 
                  ease: "backOut" 
                }}
                className="inline-block transform-gpu"
              >
                {letter}
              </motion.span>
            ))}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
}