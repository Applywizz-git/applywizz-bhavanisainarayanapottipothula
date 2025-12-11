import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Users, Briefcase, Rocket, Database, Cloud, Server, Layout } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

const skills = [
  { name: "React & Next.js", level: 95, icon: Layout },
  { name: "Spring Boot & Java", level: 90, icon: Server },
  { name: "PostgreSQL & MongoDB", level: 85, icon: Database },
  { name: "AWS & Cloud Services", level: 80, icon: Cloud },
];

const highlightSkills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Rocket },
  { name: "PostgreSQL", icon: Database },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
};

const SkillBar = ({ name, level, icon: Icon }: { name: string; level: number; icon: typeof Code2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={18} className="text-primary" />
          <span className="text-foreground font-medium">{name}</span>
        </div>
        <span className="text-muted-foreground text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full skill-bar-shimmer group-hover:scale-y-150 transition-transform origin-bottom"
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-15 md:py-25 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text & Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer with expertise in building scalable, 
                high-performance web applications. With a strong foundation in both frontend 
                and backend technologies, I thrive on solving complex problems and delivering 
                exceptional user experiences.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed">
                My journey in software development has equipped me with deep knowledge of 
                modern frameworks, cloud infrastructure, and DevOps practices. I'm committed 
                to writing clean, maintainable code and staying current with emerging technologies 
                to deliver cutting-edge solutions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center glass-card p-4 rounded-xl card-hover"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Skills */}
          <div>
            {/* Skill Bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 mb-8"
            >
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </motion.div>

            {/* Mini Skill Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {highlightSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(160 84% 39% / 0.3)" }}
                  className="glass-card p-4 rounded-xl text-center cursor-pointer transition-all duration-300"
                >
                  <skill.icon size={24} className="mx-auto text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
