"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "AI / ML",
    items: ["Machine Learning", "Generative AI", "RAG", "Scikit-learn", "Hugging Face", "FAISS", "OpenCV", "Pandas", "NumPy"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Firebase"],
  },
  {
    category: "Programming",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Linux", "Streamlit", "Vercel"],
  },
];

export function Skills() {
  const containerRef = useRef(null);

  return (
    <section id="skills" className="w-[90%] h-[90%] ml-[5%] mt-[5%] relative py-40 bg-pearl overflow-hidden  gap-8 bg-white/40 backdrop-blur-xl p-8 lg:p-10 rounded-2xl border border-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Background ambient gold lines connecting areas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M-100,100 C200,300 400,0 800,400 C1200,800 1400,200 1800,600" fill="none" stroke="url(#goldLine)" strokeWidth="2" />
          <path d="M-100,500 C300,600 500,200 900,800 C1300,1400 1500,500 1900,900" fill="none" stroke="url(#goldLine)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-gold mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            Arsenal of Light
          </h2>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-70" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
              className="relative group perspective-1000"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                className="rounded-xl relative h-full border border-warm-gray/40 bg-white/40 backdrop-blur-xl p-8 shadow-lg hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-700 rounded-sm"
              >
                {/* Glow border trail effect */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors duration-700" />
                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-700 -z-10" />

                <h3 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-gold to-transparent" />
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <div
                      key={item}
                      className="relative px-4 py-2 border border-warm-gray/50 bg-background/50 hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 cursor-default"
                    >
                      <span className="font-sans text-sm text-foreground/80 font-medium tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
