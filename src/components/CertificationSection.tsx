// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Award, ExternalLink, Calendar, Building } from "lucide-react";

// const certifications = [
//   {
//     id: 1,
//     name: "AWS Certified Solutions Architect",
//     organization: "Amazon Web Services",
//     date: "2023",
//     credentialId: "AWS-SAA-123456",
//     verifyUrl: "#",
//     description: "Professional certification for designing distributed systems on AWS",
//   },
//   {
//     id: 2,
//     name: "Spring Professional Certification",
//     organization: "VMware",
//     date: "2023",
//     credentialId: "SPRING-PRO-789",
//     verifyUrl: "#",
//     description: "Advanced certification for Spring Framework and Spring Boot development",
//   },
//   {
//     id: 3,
//     name: "Certified Kubernetes Administrator",
//     organization: "Cloud Native Computing Foundation",
//     date: "2022",
//     credentialId: "CKA-456789",
//     verifyUrl: "#",
//     description: "Certification for deploying and managing Kubernetes clusters",
//   },
//   {
//     id: 4,
//     name: "Meta Front-End Developer",
//     organization: "Meta (Coursera)",
//     date: "2022",
//     credentialId: "META-FE-321654",
//     verifyUrl: "#",
//     description: "Professional certification for modern frontend development practices",
//   },
// ];

// const CertificationCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="flip-card h-64"
//     >
//       <div className="flip-card-inner w-full h-full">
//         {/* Front */}
//         <div className="flip-card-front glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
//           <motion.div
//             animate={{ rotate: [0, 5, -5, 0] }}
//             transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
//           >
//             <Award className="w-16 h-16 text-primary mb-4" />
//           </motion.div>
//           <h3 className="font-display font-bold text-foreground text-lg mb-2">
//             {cert.name}
//           </h3>
//           <p className="text-primary text-sm font-medium">{cert.organization}</p>
//         </div>

//         {/* Back */}
//         <div className="flip-card-back glass-card rounded-2xl p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="font-display font-bold text-foreground text-lg mb-3">
//               {cert.name}
//             </h3>
//             <p className="text-muted-foreground text-sm mb-4">
//               {cert.description}
//             </p>
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center gap-2 text-foreground/80">
//                 <Building size={14} className="text-primary" />
//                 <span>{cert.organization}</span>
//               </div>
//               <div className="flex items-center gap-2 text-foreground/80">
//                 <Calendar size={14} className="text-primary" />
//                 <span>Issued: {cert.date}</span>
//               </div>
//               <div className="flex items-center gap-2 text-foreground/80">
//                 <Award size={14} className="text-primary" />
//                 <span className="text-xs">{cert.credentialId}</span>
//               </div>
//             </div>
//           </div>

//           <motion.a
//             href={cert.verifyUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm mt-4"
//           >
//             Verify Credential
//             <ExternalLink size={14} />
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const CertificationSection = () => {
//   const containerRef = useRef<HTMLElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="certification"
//       ref={containerRef}
//       className="py-20 md:py-32 relative overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//             <span className="gradient-text">Certifications</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Professional certifications that validate my expertise
//           </p>
//         </motion.div>

//         {/* Certifications Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {certifications.map((cert, index) => (
//             <CertificationCard key={cert.id} cert={cert} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationSection;



import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    organization: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-123456",
    verifyUrl: "#", // Add the AWS verification URL here
    description: "Professional certification for designing distributed systems on AWS",
  },
  {
    id: 2,
    name: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CCP-654321",
    verifyUrl: "#", // Add the AWS verification URL here
    description: "Fundamental AWS certification for cloud practitioners",
  },
  {
    id: 3,
    name: "Java Spring Boot Microservices Specialization",
    organization: "Coursera",
    date: "2023",
    credentialId: "JAVA-SPRING-BOOT-123",
    verifyUrl: "#", // Add the Coursera verification URL here
    description: "Specialization in building microservices using Java and Spring Boot",
  },
  {
    id: 4,
    name: "React Front-End Development Professional Certificate",
    organization: "Coursera",
    date: "2023",
    credentialId: "REACT-FE-456",
    verifyUrl: "#", // Add the Coursera verification URL here
    description: "Professional certification in React Front-End Development",
  },
  {
    id: 5,
    name: "Docker & Kubernetes for Developers",
    organization: "LinkedIn Learning",
    date: "2023",
    credentialId: "DOCKER-K8S-789",
    verifyUrl: "#", // Add the LinkedIn Learning verification URL here
    description: "Certification for containerized application development using Docker and Kubernetes",
  },
  {
    id: 6,
    name: "GitHub Actions for CI/CD",
    organization: "LinkedIn Learning",
    date: "2023",
    credentialId: "GH-ACTIONS-CI-CD-012",
    verifyUrl: "#", // Add the LinkedIn Learning verification URL here
    description: "CI/CD pipelines using GitHub Actions for automation and deployments",
  },
];

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flip-card h-64"
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front */}
        <div className="flip-card-front glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Award className="w-16 h-16 text-primary mb-4" />
          </motion.div>
          <h3 className="font-display font-bold text-foreground text-lg mb-2">
            {cert.name}
          </h3>
          <p className="text-primary text-sm font-medium">{cert.organization}</p>
        </div>

        {/* Back */}
        <div className="flip-card-back glass-card rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-foreground text-lg mb-3">
              {cert.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {cert.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-foreground/80">
                <Building size={14} className="text-primary" />
                <span>{cert.organization}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Calendar size={14} className="text-primary" />
                <span>Issued: {cert.date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Award size={14} className="text-primary" />
                <span className="text-xs">{cert.credentialId}</span>
              </div>
            </div>
          </div>

          <motion.a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm mt-4"
          >
            Verify Credential
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="certification"
      ref={containerRef}
      className="py-15 md:py-25 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
