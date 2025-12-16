import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const techKeywords = ["React", "Spring Boot", "TypeScript", "AWS", "Docker", "Node.js"];

const HeroSection = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const keyword = techKeywords[currentKeyword];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < keyword.length) {
          setDisplayText(keyword.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(keyword.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentKeyword((prev) => (prev + 1) % techKeywords.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentKeyword]);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-hero-pattern z-10 opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4"
          >
            <span className="text-foreground">Sai </span>
            <span className="gradient-text glow-text">Pottipothula</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 h-16"
          >
            <p className="text-lg md:text-xl text-foreground/90">
              Building Scalable Web Apps with{" "}
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-typewriter-cursor">|</span>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(160 84% 39% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300"
            >
              <Eye size={20} />
              View Projects
              <motion.span
                className="inline-block"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={16} />
              </motion.span>
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(350 89% 60% / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 py-3 border border-secondary text-secondary rounded-lg font-semibold transition-all duration-300 hover:bg-secondary/10"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110" />

            {/* Profile image container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary relative z-10">
                <img
  src="/sai image.png"
  alt="Sai Pottipothula - Full-Stack Developer"
  className="w-full h-full object-cover"
  loading="eager"
/>

              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
