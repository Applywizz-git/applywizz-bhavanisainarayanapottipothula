import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Sai-Pottipothula" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sai-pottipothula/" },
  { name: "Email", icon: Mail, href: "mailto:saipottipothula@gmail.com" },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="group"
                aria-label={link.name}
              >
                <div className="p-3 rounded-full glass-card transition-all duration-300 group-hover:border-primary group-hover:glow-primary">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-muted-foreground text-sm flex items-center gap-2"
            >
              <span>© {currentYear}</span>
              <span className="text-foreground font-medium animate-pulse-glow inline-block px-2 py-0.5 rounded">
                Sai Pottipothula
              </span>
              <span>• Built with</span>
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground glow-primary z-50"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Social Sidebar (optional - visible on larger screens) */}
      <div className="hidden xl:flex fixed left-8 bottom-0 flex-col items-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: 5 }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
