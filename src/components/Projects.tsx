"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "StudyMate",
    description: "An intelligent platform designed to revolutionize collaborative learning. It harnesses the power of AI to forge real-time synchronization and deep insights, elevating raw data into actionable knowledge.",
    tech: ["Next.js", "TypeScript", "OpenAI", "WebSockets"],
    github: "#",
    demo: "#",
    image: "/images/hero-bg.png", // Reusing cinematic backgrounds for abstract representation
  },
  {
    title: "ATS Resume Checker",
    description: "A machine learning oracle that peers into the architecture of CVs. It deeply evaluates candidate profiles against job descriptions, revealing hidden alignments and providing actionable feedback.",
    tech: ["Python", "FastAPI", "NLP", "React"],
    github: "#",
    demo: "#",
    image: "/images/contact-bg.png",
  },
  {
    title: "SkillPath AI",
    description: "A divine mapping engine that charts the optimal course for skill ascension. Utilizing advanced AI, it dynamically generates personalized learning trajectories for aspiring builders.",
    tech: ["Vue.js", "Django", "Scikit-Learn", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "/images/about-relic.png",
  },
];

export function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="relative w-full">
      
      {/* Title Section */}
      <div className="w-[100%] relative l-30 h-full gap-8 bg-white/40 backdrop-blur-xl p-8 lg:p-10 rounded-2xl border border-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

        <div className="sticky top-0 h-screen w-full flex items-center justify-center z-0 pointer-events-none">
            <h2 className="font-serif text-6xl md:text-8xl text-ivory drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Grand Archives
            </h2>
        </div>
      </div>

       <div className="relative z-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);
  const yText = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [100, 0, -100]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg, scale: scaleImg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover grayscale-[50%] sepia-[20%]"
        />
        <div className="absolute inset-0 " />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-16"
      >
        {/* Project Info */}
        <div className="w-full md:w-1/2">
          <span className="font-serif text-gold text-sm tracking-widest mb-4 block">ARTIFACT 0{index + 1}</span>
          <h3 className="font-serif text-5xl md:text-7xl text-ivory mb-6 drop-shadow-lg">
            {project.title}
          </h3>
          <p className="font-sans text-lg text-pearl/70 leading-relaxed mb-10 font-light text-justify">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 border border-gold/30 bg-black/50 text-gold/80 text-xs font-sans tracking-wide backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <a href={project.demo} className="group relative overflow-hidden border border-gold/50 bg-gold/10 px-8 py-3 backdrop-blur-md transition-all hover:bg-gold/30">
              <span className="relative z-10 font-serif tracking-widest text-gold group-hover:text-ivory transition-colors flex items-center gap-2 text-sm">
                <ExternalLink size={16} /> ENTER
              </span>
            </a>
            <a href={project.github} className="text-pearl/50 hover:text-gold transition-colors flex items-center gap-2 text-sm font-sans tracking-widest">
              <Code size={16} /> SOURCE
            </a>
          </div>
        </div>

        {/* Abstract Relic Representation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-96 border border-gold/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-4 group perspective-1000">
            <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-colors duration-700" />
            <div className="w-full h-full border border-gold/30 relative overflow-hidden">
               {/* Decorative corners */}
               <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold" />
               <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold" />
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold" />
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold" />
               
               <Image 
                 src={project.image}
                 alt="Relic preview"
                 fill
                 className="object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-1000"
               />
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
