import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const services = [
    "Branding & Creative Design",
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "Content Writing",
  ];

  const company = [
    "About Us",
    "Portfolio",
    "Case Studies",
    "Clients",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl font-bold text-card-foreground mb-6">
              PLAN A
            </div>
            <p className="text-muted-foreground mb-4">
              Building Digital and Creative Legacies for forward-thinking brands.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground text-xs sm:text-sm">
              <p>Office 906, Le Solarium Bldg</p>
              <p>Dubai Silicon Oasis, Dubai, UAE</p>
              <p>P.O.Box: 233316 Dubai</p>
              <p className="mt-4">
                <a
                  href="tel:80075262"
                  className="text-primary hover:underline"
                  data-testid="footer-phone"
                >
                  800 PLANA (75262)
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@plana.ae"
                  className="text-primary hover:underline"
                  data-testid="footer-email"
                >
                  info@plana.ae
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Plan A Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
