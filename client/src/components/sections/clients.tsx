import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";

export function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const clients = [
    {
      name: "Government of Dubai",
      logo: "https://plana.ae/storage/client/1/5ZJtrdlwYwe7use32JRatGdFXPQJFBHHjpMCyZXc.svg"
    },
    {
      name: "Digital Dubai",
      logo: "https://plana.ae/storage/client/110/xl0jgPS328Wr0aemjNORVTZIQFc57C3oOcGXQ7xz.svg"
    },
    {
      name: "Dubai Investment Park",
      logo: "https://plana.ae/storage/client/111/boHuaZFsYN0pXztGKuTbnR7VcxtSJ1DIU44QVbeo.svg"
    },
    {
      name: "Department of Digital Ajman",
      logo: "https://plana.ae/storage/client/54/ENAiTvjHqW1pKk2fbl5yBXcofIOTTO43rAaDxHfu.svg"
    },
    {
      name: "Rabdan Academy",
      logo: "https://plana.ae/storage/client/112/G4bfrKZLpIQl337XJ3b6j8dCoUyjsgzYKdaqaqsr.svg"
    },
    {
      name: "Bee'ah",
      logo: "https://plana.ae/storage/client/7/Beeah.png"
    },
    {
      name: "MBRHE",
      logo: "https://plana.ae/storage/client/52/gdt5H4jLqG7Sjk1g5r6pROdnEcArrQBHEioArZIW.svg"
    },
    {
      name: "DoF",
      logo: "https://plana.ae/storage/client/115/O9eW8dDus62PpOZSBvAcbG92QCMbUObvZO6BYhVt.svg"
    },
    {
      name: "twofour54",
      logo: "https://plana.ae/storage/client/12/kXXmwiK8ZaIrjEnJ5MhOJKMwUfCsbRRudKGs53hO.svg"
    },
    {
      name: "Al Majid Property",
      logo: "https://plana.ae/storage/client/15/gD2mlFsVZhFHr320D5zYHY9O9ZrzlF60vhYQlt18.png"
    },
    {
      name: "HEG",
      logo: "https://plana.ae/storage/client/114/z742Tp2iRMJOPJRUf67tAsdgOIHKishmMR0ngDTN.svg"
    },
    {
      name: "Crunchos",
      logo: "https://plana.ae/storage/client/109/8ZJSeyyxJ7NdLGuy0WkH1JshbQHp2zqrR2qNAbg2.svg"
    },
  ];

  return (
    <section ref={sectionRef} id="clients" className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">A Partnership Based On Trust</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We've worked with prominent clients from different industries and have always developed
            every project with an attitude of partnership, putting ourselves in our client's shoes
            and aiming for results that answer their needs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-transparent p-4 flex items-center justify-center h-20 lg:h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              data-testid={`client-${index}`}
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = client.name;
                  fallback.className = 'text-card-foreground font-bold text-sm';
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            data-testid="view-all-clients"
          >
            View All Clients
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
