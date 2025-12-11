// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Building2, Calendar, MapPin } from "lucide-react";

// const experiences = [
//   {
//     id: 1,
//     role: "Full-Stack Developer",
//     company: "Tech Solutions Inc.",
//     location: "San Francisco, CA",
//     period: "2023 - Present",
//     description: "Leading development of enterprise-grade web applications using React, Spring Boot, and AWS. Implemented microservices architecture serving 100K+ users.",
//     achievements: [
//       "Reduced API response time by 40% through optimization",
//       "Led migration of legacy systems to cloud-native architecture",
//       "Mentored junior developers and conducted code reviews",
//     ],
//     techStack: ["React", "Spring Boot", "AWS", "Docker", "PostgreSQL"],
//   },
//   {
//     id: 2,
//     role: "Software Developer",
//     company: "Digital Innovations Ltd.",
//     location: "Austin, TX",
//     period: "2022 - 2023",
//     description: "Developed and maintained full-stack applications with focus on performance and scalability. Collaborated with cross-functional teams to deliver features.",
//     achievements: [
//       "Built real-time dashboard reducing report generation by 60%",
//       "Implemented CI/CD pipelines using GitHub Actions",
//       "Developed RESTful APIs handling 50K+ daily requests",
//     ],
//     techStack: ["React", "Node.js", "TypeScript", "MongoDB", "Kubernetes"],
//   },
//   {
//     id: 3,
//     role: "Junior Developer",
//     company: "StartUp Ventures",
//     location: "Remote",
//     period: "2021 - 2022",
//     description: "Started career building web applications and learning best practices. Contributed to frontend and backend development across multiple projects.",
//     achievements: [
//       "Developed customer-facing features used by 10K+ users",
//       "Improved test coverage from 45% to 85%",
//       "Created reusable component library adopted team-wide",
//     ],
//     techStack: ["React", "JavaScript", "Node.js", "MySQL", "Git"],
//   },
// ];

// const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });
//   const isLeft = index % 2 === 0;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//       animate={isInView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className={`relative flex items-center ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}
//     >
//       {/* Timeline dot */}
//       <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={isInView ? { scale: 1 } : {}}
//           transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
//           className="w-4 h-4 rounded-full bg-primary glow-primary"
//         />
//       </div>

//       {/* Empty space for alternating layout */}
//       <div className="hidden lg:block lg:w-1/2" />

//       {/* Card */}
//       <div className="w-full lg:w-1/2">
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="glass-card p-6 rounded-2xl card-hover"
//         >
//           {/* Header */}
//           <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
//             <div>
//               <h3 className="text-xl font-display font-bold text-foreground mb-1">
//                 {experience.role}
//               </h3>
//               <div className="flex items-center gap-2 text-primary">
//                 <Building2 size={16} />
//                 <span className="font-medium">{experience.company}</span>
//               </div>
//             </div>
//             <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground text-sm">
//               <div className="flex items-center gap-1">
//                 <Calendar size={14} />
//                 <span>{experience.period}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <MapPin size={14} />
//                 <span>{experience.location}</span>
//               </div>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-foreground/80 mb-4">{experience.description}</p>

//           {/* Achievements */}
//           <ul className="space-y-2 mb-4">
//             {experience.achievements.map((achievement, i) => (
//               <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm">
//                 <span className="text-primary mt-1">▹</span>
//                 {achievement}
//               </li>
//             ))}
//           </ul>

//           {/* Tech Stack */}
//           <div className="flex flex-wrap gap-2">
//             {experience.techStack.map((tech) => (
//               <motion.span
//                 key={tech}
//                 whileHover={{ scale: 1.1, boxShadow: "0 0 15px hsl(160 84% 39% / 0.3)" }}
//                 className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 cursor-default"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const ExperienceSection = () => {
//   const containerRef = useRef<HTMLElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="experience"
//       ref={containerRef}
//       className="py-20 md:py-32 relative overflow-hidden"
//     >
//       {/* Background decoration */}
//       <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//             Work <span className="gradient-text">Experience</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             A journey through my professional career and accomplishments
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Vertical line */}
//           <div className="hidden lg:block timeline-line" />

//           {/* Experience cards */}
//           <div className="space-y-12 lg:space-y-16">
//             {experiences.map((experience, index) => (
//               <ExperienceCard
//                 key={experience.id}
//                 experience={experience}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;




import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Aramark",
    location: "USA",
    period: "Jan 2024 - Apr 2025",
    description: "Built full-stack dining features using React Hooks, Spring Boot REST APIs, enabling real-time menu updates supporting 5,000+ daily student interactions.",
    achievements: [
      "Improved UI performance by refining React lifecycles, reducing re-renders, adding dynamic imports which lowered page load time from 3.1s to 1.9s.",
      "Enhanced backend stability by optimizing controllers, DTO validation flows, error paths, reducing recurring API issues by 28% on high-traffic dashboards.",
      "Boosted data retrieval speed by ~40% through PostgreSQL indexing, optimized JOIN operations, database tuning for faster menu inventory responses.",
      "Secured privileged features using Spring Security with JWT-based access rules, preventing unauthorized actions and strengthening application-level security.",
      "Automated CI/CD with Docker and GitHub Actions pipelines, enabling faster builds, reliable deployments, and improving release stability by 40%.",
    ],
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    id: 2,
    role: "Associate Software Engineer",
    company: "BNP Paribas",
    location: "India",
    period: "Jun 2023 - Nov 2023",
    description: "Designed Spring Boot microservices with modular layers and stable contracts, enabling scalable enhancements in global treasury workflows.",
    achievements: [
      "Enhanced PostgreSQL queries with selective indexing to reduce settlement processing latency and response delays by 35%.",
      "Increased trade throughput by 40% through Java concurrency patterns, optimized thread pools, and improved parallel execution.",
      "Configured AWS S3 with IAM access controls and automated retention rules ensuring compliant financial document governance.",
      "Strengthened platform security and reliability by refining JWT authorization, input validation, structured exception handling, reducing API failures 25%.",
      "Streamlined CI/CD using Jenkins and GitHub Actions pipelines, reducing release turnaround 20% and improving deployment predictability.",
    ],
    techStack: ["Spring Boot", "PostgreSQL", "AWS", "Jenkins", "GitHub Actions"],
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "HighRadius",
    location: "India",
    period: "Jan 2022 - Apr 2022",
    description: "Crafted React-based billing dashboards using component-driven UI patterns, improving responsiveness and helping operations teams interpret financial data efficiently.",
    achievements: [
      "Developed shared component library standardizing UI elements, enabling designers and engineers to deliver new screens 30% faster with consistency.",
      "Transformed analytics reliability by designing Redux Toolkit slices with caching logic, reducing repetitive API calls 40% and stabilizing state transitions.",
      "Accelerated experience on large datasets using lazy loading and optimized rendering, reducing initial page load time from 3.2s to 2.1s.",
      "Implemented responsive UI using utility-first styling, improving layout accuracy and reducing design revision cycles by 25%.",
    ],
    techStack: ["React", "Redux Toolkit", "JavaScript", "PostgreSQL"],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}
    >
      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-4 h-4 rounded-full bg-primary glow-primary"
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Card */}
      <div className="w-full lg:w-1/2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 rounded-2xl card-hover"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-primary">
                <Building2 size={16} />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/80 mb-4">{experience.description}</p>

          {/* Achievements */}
          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm">
                <span className="text-primary mt-1">▹</span>
                {achievement}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px hsl(160 84% 39% / 0.3)" }}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career and accomplishments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block timeline-line" />

          {/* Experience cards */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
