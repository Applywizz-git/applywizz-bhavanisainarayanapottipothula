// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", level: 95 },
//       { name: "Next.js", level: 90 },
//       { name: "TypeScript", level: 92 },
//       { name: "Tailwind CSS", level: 95 },
//       { name: "JavaScript", level: 95 },
//       { name: "HTML5/CSS3", level: 98 },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Spring Boot", level: 90 },
//       { name: "Java", level: 88 },
//       { name: "Node.js", level: 85 },
//       { name: "Python", level: 80 },
//       { name: "REST APIs", level: 92 },
//       { name: "GraphQL", level: 75 },
//     ],
//   },
//   {
//     title: "DevOps & Cloud",
//     skills: [
//       { name: "AWS", level: 85 },
//       { name: "Docker", level: 88 },
//       { name: "Kubernetes", level: 78 },
//       { name: "CI/CD", level: 85 },
//       { name: "Terraform", level: 70 },
//       { name: "Linux", level: 82 },
//     ],
//   },
//   {
//     title: "Tools & Databases",
//     skills: [
//       { name: "PostgreSQL", level: 88 },
//       { name: "MongoDB", level: 82 },
//       { name: "Git", level: 95 },
//       { name: "Redis", level: 75 },
//       { name: "Jira", level: 85 },
//       { name: "Figma", level: 70 },
//     ],
//   },
// ];

// const ProgressRing = ({ level, size = 60 }: { level: number; size?: number }) => {
//   const ref = useRef<SVGSVGElement>(null);
//   const isInView = useInView(ref, { once: true });
//   const radius = (size - 8) / 2;
//   const circumference = radius * 2 * Math.PI;
//   const offset = circumference - (level / 100) * circumference;

//   return (
//     <svg
//       ref={ref}
//       width={size}
//       height={size}
//       className="progress-ring"
//     >
//       {/* Background circle */}
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         fill="none"
//         stroke="hsl(220 14% 15%)"
//         strokeWidth="4"
//       />
//       {/* Progress circle */}
//       <motion.circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         fill="none"
//         stroke="url(#progressGradient)"
//         strokeWidth="4"
//         strokeLinecap="round"
//         strokeDasharray={circumference}
//         initial={{ strokeDashoffset: circumference }}
//         animate={isInView ? { strokeDashoffset: offset } : {}}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       />
//       <defs>
//         <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="hsl(160 84% 39%)" />
//           <stop offset="100%" stopColor="hsl(165 82% 51%)" />
//         </linearGradient>
//       </defs>
//       {/* Percentage text */}
//       <text
//         x="50%"
//         y="50%"
//         textAnchor="middle"
//         dy="0.35em"
//         className="text-xs font-bold fill-foreground"
//       >
//         {level}%
//       </text>
//     </svg>
//   );
// };

// const SkillChip = ({ name, level }: { name: string; level: number }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, rotate: 2 }}
//       className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:border-primary/50"
//     >
//       <ProgressRing level={level} size={48} />
//       <span className="font-medium text-foreground">{name}</span>
//     </motion.div>
//   );
// };

// const SkillsSection = () => {
//   const containerRef = useRef<HTMLElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="skills"
//       ref={containerRef}
//       className="py-20 md:py-32 relative overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
//       <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
//       <div className="absolute top-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//             Technical <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Technologies and tools I work with
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//               className="glass-card p-6 rounded-2xl"
//             >
//               <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary" />
//                 {category.title}
//               </h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {category.skills.map((skill, skillIndex) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ 
//                       duration: 0.4, 
//                       delay: categoryIndex * 0.1 + skillIndex * 0.05 
//                     }}
//                   >
//                     <SkillChip name={skill.name} level={skill.level} />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;



import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Engineering & Microservices",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 95 },
      { name: "Spring MVC", level: 85 },
      { name: "Spring WebFlux", level: 80 },
      { name: "Spring Security (JWT, OAuth2)", level: 85 },
      { name: "Microservices Architecture", level: 90 },
      { name: "REST API Development", level: 95 },
      { name: "JPA/Hibernate", level: 88 },
      { name: "Maven", level: 80 },
      { name: "Gradle", level: 75 },
      { name: "Event-Driven Architecture", level: 85 },
      { name: "Apache Kafka", level: 80 },
    ],
  },
  {
    title: "Cloud & Platform Engineering",
    skills: [
      { name: "AWS (EC2, S3, Lambda, API Gateway, SQS, CloudWatch, IAM)", level: 90 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Terraform", level: 80 },
      { name: "CI/CD Pipelines (Jenkins, GitHub Actions)", level: 85 },
      { name: "Cloud-Native Design", level: 85 },
      { name: "Serverless Architecture", level: 80 },
      { name: "Distributed Systems", level: 85 },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML", level: 98 },
      { name: "TypeScript", level: 92 },
      { name: "Redux Toolkit", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Component-Driven UI Development", level: 90 },
      { name: "Responsive UI Engineering", level: 92 },
    ],
  },
  {
    title: "Data & Storage Systems",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL Query Optimization", level: 85 },
      { name: "NoSQL Data Modeling", level: 80 },
    ],
  },
  {
    title: "Testing & Quality Automation",
    skills: [
      { name: "JUnit", level: 85 },
      { name: "Mockito", level: 80 },
      { name: "Postman", level: 85 },
      { name: "API Contract Testing", level: 80 },
      { name: "Swagger/OpenAPI", level: 85 },
      { name: "SonarQube", level: 80 },
    ],
  },
  {
    title: "System Tools & Observability",
    skills: [
      { name: "Git", level: 95 },
      { name: "Linux", level: 85 },
      { name: "IntelliJ IDEA", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jira", level: 85 },
      { name: "Confluence", level: 80 },
      { name: "Grafana", level: 80 },
      { name: "Prometheus", level: 75 },
      { name: "ELK Stack", level: 70 },
    ],
  },
];

const ProgressRing = ({ level, size = 60 }: { level: number; size?: number }) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });
  const radius = (size - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      className="progress-ring"
    >
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="hsl(220 14% 15%)"
        strokeWidth="4"
      />
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#progressGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={isInView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160 84% 39%)" />
          <stop offset="100%" stopColor="hsl(165 82% 51%)" />
        </linearGradient>
      </defs>
      {/* Percentage text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.35em"
        className="text-xs font-bold fill-foreground"
      >
        {level}%
      </text>
    </svg>
  );
};

const SkillChip = ({ name, level }: { name: string; level: number }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:border-primary/50"
    >
      <ProgressRing level={level} size={48} />
      <span className="font-medium text-foreground">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                  >
                    <SkillChip name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
