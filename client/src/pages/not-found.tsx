import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Zap } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted text-foreground">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Animated 404 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-8"
              >
                <div className="relative">
                  <motion.h1 
                    className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-red-500 leading-none"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    404
                  </motion.h1>
                  
                  {/* Floating elements around 404 */}
                  <motion.div
                    className="absolute top-8 left-8 w-4 h-4 bg-primary rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute top-16 right-16 w-6 h-6 border-2 border-orange-400 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-20 left-1/4 w-3 h-3 bg-red-500 rotate-45"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [45, 225, 45],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Main content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6 mb-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-12 h-12 text-primary mr-4" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Oops! Page Not Found
                  </h2>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The page you're looking for seems to have taken a creative detour. 
                  Don't worry, even the best digital journeys have unexpected turns!
                </p>
                
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Let's get you back on track to discover our amazing digital marketing solutions.
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Link href="/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                    >
                      <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Back to Home
                    </Button>
                  </motion.div>
                </Link>
                
                <Link href="/portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 group w-full sm:w-auto"
                    >
                      <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Explore Our Work
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Popular links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-muted-foreground">
                  Or try these popular pages:
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { label: "Our Services", href: "/services" },
                    { label: "About Us", href: "/about" },
                    { label: "Case Studies", href: "/portfolio" },
                    { label: "Contact", href: "/contact" },
                  ].map((link, index) => (
                    <Link key={link.href} href={link.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ y: -2 }}
                        className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-lg transition-colors duration-200 text-muted-foreground hover:text-primary font-medium"
                      >
                        {link.label}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Creative bottom section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-orange-500/5 rounded-2xl border border-primary/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">PA</span>
                    </div>
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold mb-2">Need Help? We're Here!</h4>
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for? Our digital marketing experts are ready to help you navigate to success.
                </p>
                <Link href="/contact">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:bg-primary/10 font-semibold"
                  >
                    Get In Touch
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-tl from-orange-500/10 to-red-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  );
}