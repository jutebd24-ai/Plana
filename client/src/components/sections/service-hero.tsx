import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function ServiceHero() {
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our client's needs and their customer experience stand at the heart of everything we do.
            All our digital marketing services seamlessly integrate creative, development and content
            best practices to deliver on your vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}