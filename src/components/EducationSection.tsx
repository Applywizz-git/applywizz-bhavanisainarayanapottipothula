// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { GraduationCap, Calendar, MapPin } from "lucide-react";

// const education = [
//   {
//     id: 1,
//     degree: "Master of Science in Computer Science",
//     school: "University of California, Berkeley",
//     location: "Berkeley, CA",
//     year: "2021 - 2023",
//     description: "Specialized in Distributed Systems and Cloud Computing. GPA: 3.9/4.0",
//     achievements: [
//       "Dean's List - All Semesters",
//       "Research Assistant - Cloud Computing Lab",
//       "Published paper on microservices optimization",
//     ],
//   },
//   {
//     id: 2,
//     degree: "Bachelor of Technology in Computer Science",
//     school: "Indian Institute of Technology",
//     location: "Hyderabad, India",
//     year: "2017 - 2021",
//     description: "Core focus on Software Engineering and Data Structures. GPA: 8.8/10",
//     achievements: [
//       "First Class with Distinction",
//       "Led university coding club",
//       "Won multiple hackathons",
//     ],
//   },
// ];

// const EducationCard = ({ edu, index }: { edu: typeof education[0]; index: number }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       whileHover={{ scale: 1.02 }}
//       className="glass-card rounded-2xl p-8 card-hover"
//     >
//       <div className="flex flex-col md:flex-row md:items-start gap-6">
//         {/* Icon */}
//         <motion.div
//           whileHover={{ rotate: 10 }}
//           className="shrink-0"
//         >
//           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
//             <GraduationCap className="w-8 h-8 text-primary-foreground" />
//           </div>
//         </motion.div>

//         {/* Content */}
//         <div className="flex-grow">
//           <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
//             <div>
//               <h3 className="text-xl font-display font-bold text-foreground mb-1">
//                 {edu.degree}
//               </h3>
//               <p className="text-primary font-medium text-lg">{edu.school}</p>
//             </div>
//             <div className="flex flex-col items-start lg:items-end gap-1 text-muted-foreground text-sm">
//               <div className="flex items-center gap-1">
//                 <Calendar size={14} />
//                 <span>{edu.year}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <MapPin size={14} />
//                 <span>{edu.location}</span>
//               </div>
//             </div>
//           </div>

//           <p className="text-foreground/80 mb-4">{edu.description}</p>

//           {/* Achievements */}
//           <div className="flex flex-wrap gap-2">
//             {edu.achievements.map((achievement, i) => (
//               <motion.span
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
//               >
//                 {achievement}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const EducationSection = () => {
//   const containerRef = useRef<HTMLElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="education"
//       ref={containerRef}
//       className="py-20 md:py-32 relative overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//             <span className="gradient-text">Education</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             My academic background and achievements
//           </p>
//         </motion.div>

//         {/* Education Cards */}
//         <div className="space-y-8 max-w-4xl mx-auto">
//           {education.map((edu, index) => (
//             <EducationCard key={edu.id} edu={edu} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationSection;


import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Master of Science, Information Technology",
    school: "Arizona State University",
    location: "USA",
    year: "Jan 2024 - Dec 2025",
    description: "Focusing on advanced topics in Information Technology and research.",
    achievements: [
      "Expected Graduation: Dec 2025",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    school: "SRM Institute of Science & Technology",
    location: "India",
    year: "Jun 2019 - May 2023",
    description: "Core focus on Software Engineering, Data Structures, and Algorithms.",
    achievements: [
      "Graduated with distinction",
    ],
  },
];

const EducationCard = ({ edu, index }: { edu: typeof education[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card rounded-2xl p-8 card-hover"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10 }}
          className="shrink-0"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
            <GraduationCap className="w-8 h-8 text-primary-foreground" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {edu.degree}
              </h3>
              <p className="text-primary font-medium text-lg">{edu.school}</p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-1 text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{edu.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          <p className="text-foreground/80 mb-4">{edu.description}</p>

          {/* Achievements */}
          <div className="flex flex-wrap gap-2">
            {edu.achievements.map((achievement, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {achievement}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and achievements
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
