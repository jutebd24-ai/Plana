import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceGridMinimalist } from "@/components/sections/service-grid-minimalist";
import { ServiceGridGradient } from "@/components/sections/service-grid-gradient";
import { ServiceGridGlassmorphism } from "@/components/sections/service-grid-glassmorphism";
import { ServiceGridTypography } from "@/components/sections/service-grid-typography";
import { ServiceGridGeometric } from "@/components/sections/service-grid-geometric";
import { ServiceGridInteractive } from "@/components/sections/service-grid-interactive";
import { motion } from "framer-motion";
import { useState } from "react";

const styles = [
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Clean, simple, and focused on content with plenty of white space",
    component: ServiceGridMinimalist
  },
  {
    id: "gradient", 
    name: "Gradient Modern",
    description: "Vibrant gradients with glassmorphism effects and modern aesthetics",
    component: ServiceGridGradient
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description: "Frosted glass effects with transparency and beautiful blurs",
    component: ServiceGridGlassmorphism
  },
  {
    id: "typography",
    name: "Typography Focused",
    description: "Large, bold typography with different font treatments and layouts",
    component: ServiceGridTypography
  },
  {
    id: "geometric",
    name: "Geometric/Brutalist",
    description: "Bold shapes, high contrast, and geometric design elements",
    component: ServiceGridGeometric
  },
  {
    id: "interactive",
    name: "Interactive/Animated",
    description: "Motion-rich with hover effects, particles, and 3D interactions",
    component: ServiceGridInteractive
  }
];

export default function StyleShowcase() {
  const [activeStyle, setActiveStyle] = useState("minimalist");
  
  const ActiveComponent = styles.find(s => s.id === activeStyle)?.component || ServiceGridMinimalist;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Style Selector */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-card-foreground mb-4">
                Different Style <span className="text-primary">Approaches</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore various design styles and approaches for presenting services. Each style offers a unique aesthetic and user experience.
              </p>
            </motion.div>

            {/* Style Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {styles.map((style) => (
                <motion.button
                  key={style.id}
                  onClick={() => setActiveStyle(style.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeStyle === style.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`style-${style.id}`}
                >
                  {style.name}
                </motion.button>
              ))}
            </div>

            {/* Style Description */}
            <motion.div
              key={activeStyle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-muted-foreground max-w-xl mx-auto">
                {styles.find(s => s.id === activeStyle)?.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Active Style Component */}
        <motion.div
          key={activeStyle}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ActiveComponent />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}