import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-scroll";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 letter-spacing-wide">Get in touch</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
            Ready to build your digital legacy? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            variants={slideInFromLeft}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a
                      href="tel:80075262"
                      className="text-foreground hover:text-primary transition-colors"
                      data-testid="contact-phone"
                    >
                      800 PLANA (75262)
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-sm">Mobile</p>
                    <a
                      href="tel:+971553068999"
                      className="text-foreground hover:text-primary transition-colors"
                      data-testid="contact-mobile"
                    >
                      +971 55 306 8999
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a
                      href="mailto:info@plana.ae"
                      className="text-foreground hover:text-primary transition-colors"
                      data-testid="contact-email"
                    >
                      info@plana.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground text-sm">Address</p>
                    <div className="text-foreground">
                      <p>Office 906, Le Solarium Bldg</p>
                      <p>Dubai Silicon Oasis, Dubai, UAE</p>
                      <p>P.O.Box: 233316 Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Locations</h4>
              <div className="flex space-x-6 text-muted-foreground">
                <span>DUBAI</span>
                <span>•</span>
                <span>RIYADH</span>
                <span>•</span>
                <span>LONDON</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <Card className="bg-card rounded-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Request a Quotation</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        {...register("name")}
                        placeholder="Full Name"
                        className="bg-input border-border"
                        data-testid="input-name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="Email Address"
                        className="bg-input border-border"
                        data-testid="input-email"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      {...register("company")}
                      placeholder="Company Name"
                      className="bg-input border-border"
                      data-testid="input-company"
                    />
                    {errors.company && (
                      <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      {...register("message")}
                      rows={6}
                      placeholder="Tell us about your project"
                      className="bg-input border-border resize-none"
                      data-testid="textarea-message"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    data-testid="submit-button"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
