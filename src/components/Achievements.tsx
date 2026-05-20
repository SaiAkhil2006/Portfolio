"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "The Awakening",
    desc: "Started Competitive Programming. Ascended to Knight status on LeetCode.",
  },
  {
    year: "2025",
    title: "Forging the Core",
    desc: "Built complex AI-powered systems and mastered Full Stack Development.",
  },
  {
    year: "2025",
    title: "Visual Alchemy",
    desc: "Began architecting immersive, cinematic interfaces that merge logic with art.",
  },
  {
    year: "2026",
    title: "The Beyond",
    desc: "Exploring Deep Learning architectures and high-level System Design.",
  },
];

export function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="achievements" ref={containerRef} className="relative py-40 overflow-hidden">
      
      {/* Volumetric ambient background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gold/5 blur-[150px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-white/40 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="font-serif tracking-[0.5em] text-xs text-gold uppercase mb-6 block">Path of Ascension</span>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
            Chronicles
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-70" />
        </motion.div>

        <div className="relative">
          {/* Central Golden Beam - Background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-warm-gray/30" />
          
          {/* Central Golden Beam - Active Fill */}
          <motion.div 
            style={{ height: beamHeight }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] " 
          />

          <div className="flex flex-col gap-32">
            {timeline.map((item, i) => (
              <TimelineNode key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex items-center justify-between w-full ${isEven ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Empty space for the other side */}
      <div className="w-5/12" />

      {/* Center Node Marker */}
      <div className="z-20 flex items-center justify-center w-10 h-10 rounded-full bg-pearl border-2 border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]">
        <div className="w-3 h-3 bg-gold rounded-full" />
      </div>

      {/* Content */}
      <div className={`w-5/12 ${isEven ? "text-right pr-12" : "text-left pl-12"}`}>
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="relative border border-warm-gray/30 bg-white/40 backdrop-blur-md p-8 rounded-sm hover:border-gold/40 transition-colors duration-500 shadow-lg hover:shadow-xl">
            <span className="font-serif text-3xl text-gold mb-2 block">{item.year}</span>
            <h3 className="font-serif text-xl text-foreground mb-4">{item.title}</h3>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed font-light">
              {item.desc}
            </p>
            
            {/* Decorative corners */}
            <div className={`absolute top-0 ${isEven ? "right-0 border-r" : "left-0 border-l"} w-3 h-3 border-t border-gold opacity-50`} />
            <div className={`absolute bottom-0 ${isEven ? "right-0 border-r" : "left-0 border-l"} w-3 h-3 border-b border-gold opacity-50`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
