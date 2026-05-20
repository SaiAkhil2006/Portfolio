"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-transparent overflow-hidden py-24 md:py-0"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl h-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-5/12 flex flex-col justify-center items-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [1, -1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[250px] h-[350px] lg:w-[350px] lg:h-[450px]"
          >
            <Image
              src="/images/about-relic.png"
              alt="Divine Relic"
              fill
              className="object-contain "
            />
          </motion.div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
            <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase">Ascend</span>
            <div className="w-[1px] h-8 " />
          </div>
        </motion.div>

        {/* Right Side: Compact Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-7/12 flex flex-col gap-8 bg-white/40 backdrop-blur-xl p-8 lg:p-10 rounded-2xl border border-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-gold mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold/50"></span>
              The Architect
            </h2>
            <p className="font-sans text-lg lg:text-xl text-foreground/90 leading-relaxed font-light">
              I am an AI Engineer and Full Stack Developer, weaving complex algorithms into elegant, scalable architectures. I build digital sanctuaries that are both technically elite and visually divine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-background/30 border border-gold/10 hover:border-gold/40 transition-all duration-300 group">
              <h3 className="font-serif text-xl text-gold mb-3 flex items-center gap-2 group-hover:scale-105 origin-left transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]"></span>
                Current Focus
              </h3>
              <p className="font-sans text-sm lg:text-base text-foreground/80 leading-relaxed font-light">
                Pushing the boundaries of ML and GenAI within performant web experiences. Turning research-grade intelligence into seamless realities.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-background/30 border border-gold/10 hover:border-gold/40 transition-all duration-300 group">
              <h3 className="font-serif text-xl text-gold mb-3 flex items-center gap-2 group-hover:scale-105 origin-left transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]"></span>
                Philosophy
              </h3>
              <p className="font-sans text-sm lg:text-base text-foreground/80 leading-relaxed font-light">
                Every line of code serves a higher purpose. I approach problem-solving with rigorous logic, yet construct interfaces with creative intuition.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 mt-2 border-t border-gold/10">
            <span className="font-sans text-sm text-foreground/50 tracking-wider uppercase">Stats //</span>
            <div className="flex gap-6 lg:gap-10">
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">4+</span>
                <span className="text-xs text-foreground/50 uppercase tracking-widest mt-1">Years Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">20+</span>
                <span className="text-xs text-foreground/50 uppercase tracking-widest mt-1">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">100%</span>
                <span className="text-xs text-foreground/50 uppercase tracking-widest mt-1">Divine</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
