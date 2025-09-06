import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { Link } from "wouter";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const services = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Branding and Creative Design",
      subtitle: "Future-proof your legacy beyond predefined bars",
      description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready. We unleash our creative powers to innovate a comprehensive brand identity that can distinguish itself and leave a lasting impact in your customers' minds.",
      cta: "Legacies Born",
      link: "/services/branding-creative-design",
      imageFirst: true,
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Brand Audit and Benchmarking",
      subtitle: "Understand your brand position and outperform the competition",
      description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis. At the beginning of every project, we start by performing a brand audit, benchmarking yours against the competitors' to analyze your business strengths, opportunities, and areas of improvement based on statistical data and insight.",
      cta: "Learn more",
      link: "/services/brand-audit-benchmarking",
      imageFirst: false,
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Digital Marketing",
      subtitle: "Professional Digital Marketing Services in Dubai, UAE",
      description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence and drive conversions. Whether you're a small startup or a well-established entity, our results-driven approach will transform your digital footprint and help you compete in the digital landscape.",
      cta: "Advertise right",
      link: "/services/digital-marketing",
      imageFirst: true,
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Web Design & Development",
      subtitle: "Own your online presence",
      description: "Together, we aspire to transform your online HQ through responsive UI/UX design, bringing out the uniqueness of your brand and B2B/B2C services. Whether you wish to launch a corporate website, e-commerce store or a custom-built platform, the digital sky is the limit to what we can implement.",
      cta: "Explore our projects",
      link: "/services/corporate-website-design",
      imageFirst: false,
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Mobile Apps Design & Development",
      subtitle: "Mastery Tapping into Innovation",
      description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers who can bring your app to its best life. Together, we fine-tune your vision and optimize the user journey at every touchpoint for a joyfully intuitive experience.",
      cta: "Take me there",
      link: "/services/mobile-app-development",
      imageFirst: true,
    },
    {
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      title: "Content Writing",
      subtitle: "Harness the power of the written word",
      description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts, persuasive website copy, informative articles or a company profile, we arrive at a deep understanding of your industry and create content that resonates with your audience to drives conversions and reinforce your brand positioning.",
      cta: "Know the full story",
      link: "/services/content-writing",
      imageFirst: false,
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 letter-spacing-wide">What WE DO</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            Our client's needs and their customer experience stand at the heart of everything we do.
            All our digital marketing services seamlessly integrate creative, development and content
            best practices to deliver on your vision.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover}
              whileHover="hover"
              data-testid={`service-${index}`}
            >
              <Card className="bg-card rounded-lg overflow-hidden shadow-lg border-0 h-full">
                {service.imageFirst ? (
                  <>
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                      <p className="text-primary text-sm font-semibold mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Link href={service.link} className="text-primary font-semibold hover:underline flex items-center group">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                      <p className="text-primary text-sm font-semibold mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Link href={service.link} className="text-primary font-semibold hover:underline flex items-center group">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
