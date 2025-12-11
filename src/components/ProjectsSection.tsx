// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ExternalLink, Github, ArrowRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
//     techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Healthcare Management System",
//     description: "HIPAA-compliant healthcare platform for patient management, appointments, and telemedicine.",
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//     techStack: ["Next.js", "Spring Boot", "MongoDB", "Docker", "Kubernetes"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Real-Time Analytics Dashboard",
//     description: "Interactive dashboard for visualizing business metrics with real-time data streaming.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//     techStack: ["React", "TypeScript", "D3.js", "WebSocket", "Redis"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 4,
//     title: "Social Media Automation Tool",
//     description: "AI-powered tool for scheduling posts, analyzing engagement, and managing multiple platforms.",
//     image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
//     techStack: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 5,
//     title: "DevOps Pipeline Manager",
//     description: "Centralized platform for managing CI/CD pipelines, deployments, and infrastructure monitoring.",
//     image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
//     techStack: ["React", "Go", "Docker", "Terraform", "AWS"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 6,
//     title: "Learning Management System",
//     description: "Comprehensive LMS with video streaming, progress tracking, and interactive quizzes.",
//     image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
//     techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind", "AWS S3"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ];

// const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden group">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

//         {/* Overlay buttons */}
//         <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <motion.a
//             href={project.liveUrl}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-3 rounded-full bg-primary text-primary-foreground"
//             aria-label="View live project"
//           >
//             <ExternalLink size={20} />
//           </motion.a>
//           <motion.a
//             href={project.githubUrl}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-3 rounded-full bg-foreground text-background"
//             aria-label="View source code"
//           >
//             <Github size={20} />
//           </motion.a>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6 flex flex-col flex-grow">
//         <h3 className="text-xl font-display font-bold text-foreground mb-2">
//           {project.title}
//         </h3>
//         <p className="text-muted-foreground text-sm mb-4 flex-grow">
//           {project.description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.techStack.map((tech) => (
//             <motion.span
//               key={tech}
//               whileHover={{ scale: 1.05 }}
//               className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
//             >
//               {tech}
//             </motion.span>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3">
//           <motion.a
//             href={project.liveUrl}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all"
//           >
//             Preview
//             <ArrowRight size={16} />
//           </motion.a>
//           <motion.a
//             href={project.githubUrl}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-all"
//           >
//             <Github size={16} />
//             Code
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectsSection = () => {
//   const containerRef = useRef<HTMLElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="projects"
//       ref={containerRef}
//       className="py-20 md:py-32 relative overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work and side projects
//           </p>
//         </motion.div>

//         {/* Swiper Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <Swiper
//             modules={[Navigation, Pagination, EffectCoverflow]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             effect="coverflow"
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: false,
//             }}
//             breakpoints={{
//               640: { slidesPerView: 1.5 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="projects-swiper pb-12"
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <ProjectCard project={project} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       </div>

//       {/* Swiper custom styles */}
//       <style>{`
//         .projects-swiper .swiper-button-next,
//         .projects-swiper .swiper-button-prev {
//           color: hsl(160 84% 39%);
//           background: hsl(220 20% 8% / 0.8);
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           backdrop-filter: blur(8px);
//         }
//         .projects-swiper .swiper-button-next::after,
//         .projects-swiper .swiper-button-prev::after {
//           font-size: 18px;
//         }
//         .projects-swiper .swiper-pagination-bullet {
//           background: hsl(160 84% 39%);
//           opacity: 0.5;
//         }
//         .projects-swiper .swiper-pagination-bullet-active {
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProjectsSection;


import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    id: 1,
    title: "Smart Email Assistant",
    description: "Developed Spring Boot services integrating Gmail API, Spring AI, pgvector, enabling automated email drafting reducing manual review work 80%.",
    image: "/project1.png",  // Placeholder image
    techStack: ["Spring Boot", "Gmail API", "pgvector", "Docker", "AWS EC2"],

  },
  {
    id: 2,
    title: "NetflixGPT - Personalized Movie Intelligence",
    description: "Architected Spring Boot APIs integrating TMDB, user patterns, GPT prompts, improving recommendation accuracy reducing content search effort 40%.",
    image: "/project2.png",  // Placeholder image
    techStack: ["Spring Boot", "TMDB API", "GPT", "MongoDB", "Redis"],
 
  },
  {
    id: 3,
    title: "Cloud Invoice Automation System",
    description: "Built Spring Boot invoice ingestion using AWS Textract, achieving 92%+ field extraction accuracy across vendor and amount data.",
    image: "/project3.png",  // Placeholder image
    techStack: ["Spring Boot", "AWS Textract", "Kafka", "Docker", "Kubernetes"],
  
  },

];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Overlay buttons */}
        {/* <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
           
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-primary text-primary-foreground"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-foreground text-background"
            aria-label="View source code"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div> */}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        {/* <div className="flex gap-3">
          <motion.a
          
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all"
          >
            Preview
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
      
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-all"
          >
            <Github size={16} />
            Code
          </motion.a>
        </div> */}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-15 md:py-25 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="projects-swiper pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Swiper custom styles */}
      <style>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: hsl(160 84% 39%);
          background: hsl(220 20% 8% / 0.8);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(8px);
        }
        .projects-swiper .swiper-button-next::after,
        .projects-swiper .swiper-button-prev::after {
          font-size: 18px;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: hsl(160 84% 39%);
          opacity: 0.5;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
