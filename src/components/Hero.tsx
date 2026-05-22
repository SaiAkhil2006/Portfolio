"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Fog } from "./ui/Fog";
import { Particles } from "./ui/Particles";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const idleVideoRef = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef<HTMLVideoElement>(null);
  const hasEnteredRef = useRef(false);

  const [isEntered, setIsEntered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Prevent scrolling during hero intro
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Fully remove Hero after animation completes
  useGSAP(
    () => {
      if (!isEntered) return;

      const tl = gsap.timeline();

      tl.to(activeVideoRef.current, {
        scale: 1.08,
        filter: "brightness(1.15)",
        duration: 2,
        ease: "power3.inOut",
      })
        .to(
          ".hero-content",
          {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power2.out",
          },
          "<0.2"
        )
        .to(
          ".transition-overlay",
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.4"
        )
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            document.body.style.overflow = "auto";
            setIsHidden(true);
          },
        });
    },
    { dependencies: [isEntered] }
  );

  const handleEnter = async () => {
    if (hasEnteredRef.current) return;

    hasEnteredRef.current = true;

    const active = activeVideoRef.current;
    const idle = idleVideoRef.current;

    if (!active || !idle) return;

    gsap.to(".hero-content", {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    });

    await new Promise<void>((resolve) => {
      if (active.readyState >= 1) {
        resolve();
      } else {
        active.addEventListener(
          "loadedmetadata",
          () => resolve(),
          { once: true }
        );
      }
    });

    active.currentTime = 0;

    try {
      active.playbackRate = 2;
      await active.play();
    } catch (err) {
      console.warn("Hero active video play() blocked:", err);
      setIsEntered(true);
      return;
    }

    gsap.to(active, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(idle, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    const playDuration =
      isFinite(active.duration) && active.duration > 0.15
        ? ((active.duration - 0.15) / active.playbackRate) * 1000
        : 3000;

    setTimeout(() => {
      active.pause();
      setIsEntered(true);
    }, playDuration);
  };

  // Completely remove Hero after intro finishes
  if (isHidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Transition overlay */}
      <div className="transition-overlay absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 pointer-events-none z-50" />

      {/* Video layer */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          ref={idleVideoRef}
          src="/videos/HeroIdle.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />

        <video
          ref={activeVideoRef}
          src="/videos/HeroActive.mp4"
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-0 pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Effects */}
      <Fog opacity={0.6} className="z-10 pointer-events-none" />
      <Particles className="z-10 pointer-events-none" />

      <AnimatePresence>
        {!isEntered && (
          <motion.div
            onClick={handleEnter}
            className="hero-content relative z-20 flex cursor-pointer flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="text-glow-gold font-serif text-5xl md:text-7xl lg:text-9xl tracking-widest text-ivory"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Sai Akhil
            </motion.h1>

            <motion.p
              className="mt-6 text-sm md:text-lg tracking-[0.2em] text-pearl/80 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            >
              ML ENGINEER • FULL STACK DEVELOPER • COMPETITIVE PROGRAMMER
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}