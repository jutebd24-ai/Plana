import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ServiceDetailHeroProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${service.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl lg:text-2xl text-primary mb-6 font-semibold">
            {service.subtitle}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}