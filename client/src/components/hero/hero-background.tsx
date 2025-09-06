import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Main background image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://plana.ae/web-assets/imgs/about/menubg.webp')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
        
        {/* Hero slider background image overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://plana.ae/storage/sliders/images/10/oW3twLqAOekPLDsL3ov7gJOS9k4YQnDIO8gaPDUk.webp" 
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Animated particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
}