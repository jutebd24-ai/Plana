import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface HeroActionsProps {
  isVisible: boolean;
  onShowreel: () => void;
}

export function HeroActions({ isVisible, onShowreel }: HeroActionsProps) {

  return (
    <>
      {/* Main actions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 2.2, ease: "backOut" }}
        className="flex flex-col items-center space-y-8"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(255, 107, 53, 0.5)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onShowreel}
            className="bg-transparent border border-white text-white px-8 py-4 rounded-none text-sm font-normal hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
            data-testid="showreel-button"
          >
            <Play className="mr-3 h-4 w-4" />
            Showreel
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          className="flex flex-col items-center text-gray-400 mt-16"
        >
          <motion.span 
            className="mb-4 text-sm tracking-wider font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <img 
              src="https://plana.ae/web-assets/imgs/essential-img/scrolldown.svg" 
              alt="Scroll down" 
              className="w-6 h-6"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}