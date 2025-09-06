import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function ClientsHero() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 letter-spacing-wide">
            Our <span className="text-primary">Clients</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A Partnership Based On Trust. We've worked with prominent clients from different 
            industries and have always developed every project with an attitude of partnership, 
            putting ourselves in our client's shoes and aiming for results that answer their needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}