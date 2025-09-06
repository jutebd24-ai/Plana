import { useRoute } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceDetailHero } from "@/components/sections/service-detail-hero";
import { ServiceDetailContent } from "@/components/sections/service-detail-content";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; description: string }[];
}> = {
  "corporate-website-design": {
    title: "Corporate Website Design Services",
    subtitle: "Professional websites that represent your business",
    description: "Each corporate website is custom-designed and built by our expert web developers to meet your business's needs and objectives. Our corporate website design services are all about the websites that deliver results!",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Custom responsive design",
      "Professional branding integration",
      "SEO-optimized structure",
      "Content management system",
      "Mobile-first approach",
      "Performance optimization"
    ],
    process: [
      { title: "Discovery", description: "Understanding your business goals and requirements" },
      { title: "Planning", description: "Creating wireframes and site architecture" },
      { title: "Design", description: "Crafting beautiful, user-friendly interfaces" },
      { title: "Development", description: "Building robust, scalable websites" },
      { title: "Testing", description: "Ensuring quality across all devices" },
      { title: "Launch", description: "Going live with ongoing support" }
    ]
  },
  "ecommerce-development": {
    title: "E-commerce Website Development",
    subtitle: "Build your online store with expert e-commerce solutions",
    description: "Our e-commerce developers build online stores to help grow your business & boost your online presence. We specialize in Magento, BigCommerce, Shopify & custom shopping cart development services.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Multi-platform expertise (Magento, Shopify, BigCommerce)",
      "Custom shopping cart development",
      "Payment gateway integration",
      "Inventory management systems",
      "Mobile commerce optimization",
      "Advanced analytics and reporting"
    ],
    process: [
      { title: "Strategy", description: "E-commerce strategy and platform selection" },
      { title: "Design", description: "User experience and conversion optimization" },
      { title: "Development", description: "Custom e-commerce functionality" },
      { title: "Integration", description: "Payment and shipping integrations" },
      { title: "Testing", description: "Comprehensive quality assurance" },
      { title: "Launch", description: "Go live with ongoing maintenance" }
    ]
  },
  "multi-vendor-marketplace": {
    title: "Multi-vendor Marketplace Development",
    subtitle: "Build scalable marketplace platforms",
    description: "Create powerful multi-vendor marketplaces that connect buyers and sellers. Our marketplace solutions include vendor management, commission systems, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Vendor dashboard and management",
      "Commission and payment systems",
      "Product catalog management",
      "Order and inventory tracking",
      "Review and rating systems",
      "Mobile-responsive design"
    ],
    process: [
      { title: "Planning", description: "Marketplace architecture and feature planning" },
      { title: "Development", description: "Multi-vendor platform development" },
      { title: "Integration", description: "Payment and vendor system integration" },
      { title: "Testing", description: "Comprehensive marketplace testing" },
      { title: "Launch", description: "Platform launch and vendor onboarding" },
      { title: "Support", description: "Ongoing maintenance and feature updates" }
    ]
  },
  "custom-web-portals": {
    title: "Custom Web Portal Development",
    subtitle: "Tailored web portals for your business needs",
    description: "Develop custom web portals that streamline business processes and improve user engagement. Our portals are built with security, scalability, and user experience in mind.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "User authentication and authorization",
      "Role-based access control",
      "Custom dashboard design",
      "Data visualization tools",
      "API integrations",
      "Mobile-friendly interface"
    ],
    process: [
      { title: "Analysis", description: "Understanding portal requirements and user needs" },
      { title: "Design", description: "Creating intuitive portal interface" },
      { title: "Development", description: "Building secure and scalable portals" },
      { title: "Integration", description: "Connecting with existing systems" },
      { title: "Testing", description: "Security and performance testing" },
      { title: "Deployment", description: "Portal launch and user training" }
    ]
  },
  "cms-development": {
    title: "Content Management System Development",
    subtitle: "Custom CMS solutions for easy content management",
    description: "Build powerful content management systems that give you complete control over your website content. Our CMS solutions are user-friendly and feature-rich.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Intuitive content editor",
      "Media management system",
      "User permissions and roles",
      "SEO optimization tools",
      "Custom content types",
      "Responsive templates"
    ],
    process: [
      { title: "Requirements", description: "Understanding content management needs" },
      { title: "Architecture", description: "Designing CMS structure and features" },
      { title: "Development", description: "Building custom CMS functionality" },
      { title: "Customization", description: "Tailoring interface and workflows" },
      { title: "Testing", description: "User testing and quality assurance" },
      { title: "Training", description: "User training and documentation" }
    ]
  },
  "landing-page-design": {
    title: "Landing Page Design & Development",
    subtitle: "High-converting landing pages that drive results",
    description: "Create compelling landing pages that convert visitors into customers. Our landing pages are optimized for conversions and designed to achieve your marketing goals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Conversion-focused design",
      "A/B testing integration",
      "Mobile optimization",
      "Fast loading speeds",
      "Analytics integration",
      "Lead capture forms"
    ],
    process: [
      { title: "Strategy", description: "Conversion strategy and goal setting" },
      { title: "Design", description: "Creating high-converting layouts" },
      { title: "Development", description: "Building responsive landing pages" },
      { title: "Optimization", description: "Performance and conversion optimization" },
      { title: "Testing", description: "A/B testing and refinement" },
      { title: "Launch", description: "Campaign launch and monitoring" }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design Services",
    subtitle: "User-centered design that enhances user experience",
    description: "Create intuitive and engaging user interfaces that delight users and drive business results. Our UI/UX design services focus on usability and conversion optimization.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Responsive design systems",
      "Accessibility compliance"
    ],
    process: [
      { title: "Research", description: "User research and competitor analysis" },
      { title: "Strategy", description: "UX strategy and information architecture" },
      { title: "Design", description: "Visual design and prototyping" },
      { title: "Testing", description: "Usability testing and validation" },
      { title: "Refinement", description: "Design iteration and improvement" },
      { title: "Handoff", description: "Development handoff and support" }
    ]
  },
  "website-maintenance": {
    title: "Website Maintenance Services",
    subtitle: "Keep your website secure, updated, and performing optimally",
    description: "Comprehensive website maintenance services to ensure your site stays secure, fast, and up-to-date. We handle all technical aspects so you can focus on your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates and changes",
      "Backup management",
      "Bug fixes and troubleshooting",
      "Analytics and reporting"
    ],
    process: [
      { title: "Assessment", description: "Website audit and maintenance planning" },
      { title: "Setup", description: "Monitoring and backup system setup" },
      { title: "Maintenance", description: "Regular updates and security patches" },
      { title: "Monitoring", description: "Performance and security monitoring" },
      { title: "Reporting", description: "Monthly maintenance reports" },
      { title: "Support", description: "Ongoing technical support" }
    ]
  },
  "seo-services": {
    title: "SEO Services",
    subtitle: "Improve your search engine rankings and organic traffic",
    description: "Comprehensive SEO services to boost your website's visibility in search engines. Our proven strategies help you rank higher and attract more qualified traffic.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO audits",
      "Link building campaigns",
      "Content optimization",
      "Local SEO services"
    ],
    process: [
      { title: "Audit", description: "Comprehensive SEO audit and analysis" },
      { title: "Strategy", description: "SEO strategy and keyword research" },
      { title: "Optimization", description: "On-page and technical optimization" },
      { title: "Content", description: "Content creation and optimization" },
      { title: "Link Building", description: "Authority building and link acquisition" },
      { title: "Monitoring", description: "Performance tracking and reporting" }
    ]
  },
  "branding-creative-design": {
    title: "Branding and Creative Design",
    subtitle: "Future-proof your legacy beyond predefined bars",
    description: "You might require a full 360° identity creation or just a brand facelift, and we'd forge either of these two journeys with you focusing on getting your brand future-ready. We unleash our creative powers to innovate a comprehensive brand identity that can distinguish itself and leave a lasting impact in your customers' minds.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Brand identity development",
      "Logo design and branding",
      "Visual identity systems",
      "Brand guidelines creation",
      "Marketing collateral design",
      "Brand strategy consulting"
    ],
    process: [
      { title: "Discovery", description: "Understanding your brand vision and market positioning" },
      { title: "Research", description: "Market analysis and competitor research" },
      { title: "Strategy", description: "Brand strategy and positioning development" },
      { title: "Design", description: "Visual identity and logo creation" },
      { title: "Guidelines", description: "Brand guidelines and asset creation" },
      { title: "Launch", description: "Brand launch and implementation support" }
    ]
  },
  "brand-audit-benchmarking": {
    title: "Brand Audit and Benchmarking",
    subtitle: "Understand your brand position and outperform the competition",
    description: "For your brand to reach its set goals, we carefully work on your brand's positioning based on solid research and careful analysis. At the beginning of every project, we start by performing a brand audit, benchmarking yours against the competitors' to analyze your business strengths, opportunities, and areas of improvement based on statistical data and insight.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Comprehensive brand audit",
      "Competitor analysis",
      "Market positioning assessment",
      "Brand performance metrics",
      "SWOT analysis",
      "Strategic recommendations"
    ],
    process: [
      { title: "Audit", description: "Comprehensive brand and market audit" },
      { title: "Analysis", description: "Competitor and market analysis" },
      { title: "Assessment", description: "Brand performance assessment" },
      { title: "Benchmarking", description: "Competitive benchmarking analysis" },
      { title: "Strategy", description: "Strategic improvement recommendations" },
      { title: "Implementation", description: "Action plan development and support" }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Professional Digital Marketing Services in Dubai, UAE",
    description: "From SEO and social media campaigns to content marketing and pay-per-click advertising, we aim to boost your online presence and drive conversions. Whether you're a small startup or a well-established entity, our results-driven approach will transform your digital footprint and help you compete in the digital landscape.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "SEO and content marketing",
      "Social media management",
      "Pay-per-click advertising",
      "Email marketing campaigns",
      "Analytics and reporting",
      "Conversion optimization"
    ],
    process: [
      { title: "Strategy", description: "Digital marketing strategy development" },
      { title: "Planning", description: "Campaign planning and content strategy" },
      { title: "Execution", description: "Multi-channel campaign execution" },
      { title: "Optimization", description: "Performance optimization and A/B testing" },
      { title: "Monitoring", description: "Analytics tracking and monitoring" },
      { title: "Reporting", description: "Performance reporting and insights" }
    ]
  },
  "mobile-app-development": {
    title: "Mobile Apps Design & Development",
    subtitle: "Mastery Tapping into Innovation",
    description: "We offer premium native app development for iOS, Android. Our team features seasoned award-winning developers who can bring your app to its best life. Together, we fine-tune your vision and optimize the user journey at every touchpoint for a joyfully intuitive experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Backend integration",
      "Maintenance and updates"
    ],
    process: [
      { title: "Planning", description: "App concept and feature planning" },
      { title: "Design", description: "UI/UX design and prototyping" },
      { title: "Development", description: "Native app development" },
      { title: "Testing", description: "Quality assurance and device testing" },
      { title: "Deployment", description: "App store submission and launch" },
      { title: "Support", description: "Ongoing maintenance and updates" }
    ]
  },
  "content-writing": {
    title: "Content Writing",
    subtitle: "Harness the power of the written word",
    description: "Elevate your brand's narrative with words that have the power to transform. Whether it's engaging blog posts, persuasive website copy, informative articles or a company profile, we arrive at a deep understanding of your industry and create content that resonates with your audience to drives conversions and reinforce your brand positioning.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Website copy and content",
      "Blog posts and articles",
      "Marketing copy and campaigns",
      "SEO content optimization",
      "Social media content",
      "Company profiles and brochures"
    ],
    process: [
      { title: "Brief", description: "Understanding content requirements and goals" },
      { title: "Research", description: "Industry research and competitor analysis" },
      { title: "Strategy", description: "Content strategy and tone development" },
      { title: "Writing", description: "Content creation and copywriting" },
      { title: "Review", description: "Content review and optimization" },
      { title: "Delivery", description: "Final content delivery and revisions" }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    subtitle: "Build your brand presence across social platforms",
    description: "Strategic social media marketing to grow your audience, increase engagement, and drive business results. We manage your social presence across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management",
      "Paid social advertising",
      "Influencer partnerships",
      "Analytics and reporting"
    ],
    process: [
      { title: "Strategy", description: "Social media strategy and platform selection" },
      { title: "Content", description: "Content planning and creation" },
      { title: "Management", description: "Daily posting and community engagement" },
      { title: "Advertising", description: "Paid social media campaigns" },
      { title: "Analysis", description: "Performance analysis and optimization" },
      { title: "Growth", description: "Audience growth and engagement improvement" }
    ]
  },
  "google-ads-ppc": {
    title: "Google Ads & PPC Management",
    subtitle: "Drive immediate traffic with targeted paid advertising",
    description: "Professional Google Ads and PPC management to maximize your advertising ROI. Our certified experts create and optimize campaigns that deliver measurable results.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Google Ads campaign setup",
      "Keyword research and bidding",
      "Ad copy creation and testing",
      "Landing page optimization",
      "Conversion tracking",
      "ROI analysis and reporting"
    ],
    process: [
      { title: "Research", description: "Market and keyword research" },
      { title: "Setup", description: "Campaign setup and structure" },
      { title: "Launch", description: "Campaign launch and monitoring" },
      { title: "Optimization", description: "Bid and ad optimization" },
      { title: "Testing", description: "A/B testing and refinement" },
      { title: "Reporting", description: "Performance reporting and analysis" }
    ]
  },
  "content-marketing": {
    title: "Content Marketing Services",
    subtitle: "Engage your audience with valuable, relevant content",
    description: "Strategic content marketing to build brand authority, engage your audience, and drive conversions. We create content that resonates with your target market.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Content strategy development",
      "Blog writing and management",
      "Video content creation",
      "Infographic design",
      "Email marketing campaigns",
      "Content distribution strategy"
    ],
    process: [
      { title: "Strategy", description: "Content strategy and editorial planning" },
      { title: "Creation", description: "High-quality content creation" },
      { title: "Distribution", description: "Multi-channel content distribution" },
      { title: "Promotion", description: "Content promotion and amplification" },
      { title: "Analysis", description: "Performance analysis and optimization" },
      { title: "Refinement", description: "Strategy refinement and improvement" }
    ]
  },
  "ios-app-development": {
    title: "iOS App Development",
    subtitle: "Native iOS applications for iPhone and iPad",
    description: "Professional iOS app development using Swift and the latest iOS technologies. We create high-performance native apps that deliver exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Native Swift development",
      "iOS design guidelines compliance",
      "App Store optimization",
      "Integration with iOS features",
      "Performance optimization",
      "Ongoing support and updates"
    ],
    process: [
      { title: "Planning", description: "App concept and feature planning" },
      { title: "Design", description: "iOS-specific UI/UX design" },
      { title: "Development", description: "Native iOS development with Swift" },
      { title: "Testing", description: "Device testing and quality assurance" },
      { title: "Submission", description: "App Store submission and approval" },
      { title: "Maintenance", description: "Ongoing updates and support" }
    ]
  },
  "android-app-development": {
    title: "Android App Development",
    subtitle: "Native Android applications for all Android devices",
    description: "Expert Android app development using Kotlin and Java. We build scalable, high-performance Android apps that work seamlessly across all Android devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Native Kotlin/Java development",
      "Material Design implementation",
      "Google Play Store optimization",
      "Android API integrations",
      "Cross-device compatibility",
      "Performance monitoring"
    ],
    process: [
      { title: "Concept", description: "App ideation and requirements analysis" },
      { title: "Design", description: "Material Design UI/UX creation" },
      { title: "Development", description: "Native Android development" },
      { title: "Testing", description: "Comprehensive device testing" },
      { title: "Launch", description: "Google Play Store launch" },
      { title: "Support", description: "Ongoing maintenance and updates" }
    ]
  },
  "custom-mobile-apps": {
    title: "Custom Mobile App Development",
    subtitle: "Tailored mobile solutions for unique business needs",
    description: "Custom mobile app development services for unique business requirements. We build cross-platform and native apps that solve specific business challenges.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Cross-platform development",
      "Custom functionality design",
      "API integration and development",
      "Offline capability",
      "Cloud synchronization",
      "Enterprise security features"
    ],
    process: [
      { title: "Discovery", description: "Business requirements and user research" },
      { title: "Architecture", description: "Technical architecture and platform selection" },
      { title: "Development", description: "Custom app development and testing" },
      { title: "Integration", description: "System integration and API development" },
      { title: "Testing", description: "Comprehensive testing and QA" },
      { title: "Deployment", description: "App deployment and user training" }
    ]
  },
  "branding-identity": {
    title: "Branding & Identity Design",
    subtitle: "Create a memorable brand that stands out",
    description: "Comprehensive branding and identity design services to establish a strong, memorable brand presence. We create visual identities that connect with your audience.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Logo design and development",
      "Brand guidelines creation",
      "Color palette and typography",
      "Business card and stationery",
      "Brand application design",
      "Digital asset creation"
    ],
    process: [
      { title: "Discovery", description: "Brand strategy and market research" },
      { title: "Concept", description: "Creative concept development" },
      { title: "Design", description: "Logo and visual identity design" },
      { title: "Refinement", description: "Design refinement and finalization" },
      { title: "Guidelines", description: "Brand guidelines documentation" },
      { title: "Application", description: "Brand application across touchpoints" }
    ]
  },
  "brand-audit": {
    title: "Brand Audit Services",
    subtitle: "Evaluate and improve your brand performance",
    description: "Comprehensive brand audits to evaluate your current brand performance and identify opportunities for improvement. Get actionable insights to strengthen your brand.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    features: [
      "Brand perception analysis",
      "Competitor brand analysis",
      "Visual identity assessment",
      "Brand messaging evaluation",
      "Market positioning review",
      "Actionable recommendations"
    ],
    process: [
      { title: "Assessment", description: "Current brand performance evaluation" },
      { title: "Research", description: "Market and competitor research" },
      { title: "Analysis", description: "Brand perception and positioning analysis" },
      { title: "Insights", description: "Key insights and opportunity identification" },
      { title: "Recommendations", description: "Strategic recommendations development" },
      { title: "Roadmap", description: "Brand improvement roadmap creation" }
    ]
  }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:service");
  const serviceKey = params?.service;
  const service = serviceKey ? serviceData[serviceKey] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        <ServiceDetailHero service={service} />
        <ServiceDetailContent service={service} />
      </main>

      <Footer />
    </div>
  );
}