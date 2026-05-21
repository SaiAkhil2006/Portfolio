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
  const hasEnteredRef = useRef(false); // prevents double-trigger
  const [isEntered, setIsEntered] = useState(false);

  // Restore body overflow on unmount in case the animation never completed
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Exit animation — only runs once when isEntered flips to true
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
        // Give the overlay a moment to be visible before snapping container out
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            document.body.style.overflow = "auto";
          },
        });
    },
    { dependencies: [isEntered] }
  );

  const handleEnter = async () => {
    // Guard against double-clicks / re-entry
    if (hasEnteredRef.current) return;
    hasEnteredRef.current = true;

    const active = activeVideoRef.current;
    const idle = idleVideoRef.current;

    if (!active || !idle) return;

    // Immediately hide text
    gsap.to(".hero-content", {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    });

    // Wait for video metadata so .duration is reliable
    await new Promise<void>((resolve) => {
      if (active.readyState >= 1) {
        resolve();
      } else {
        active.addEventListener("loadedmetadata", () => resolve(), {
          once: true,
        });
      }
    });

    active.currentTime = 0;

    // Play with error handling — autoplay may be blocked
    try {
      active.playbackRate = 2;
      
      await active.play();
    } catch (err) {
      console.warn("Hero active video play() blocked:", err);
      // Still transition even if video can't play
      setIsEntered(true);
      return;
    }

    // Cross-fade videos
    gsap.to(active, { opacity: 1, duration: 1, ease: "power2.out" });
    gsap.to(idle, { opacity: 0, duration: 1, ease: "power2.out" });

    // Use the real duration now that metadata is guaranteed to be loaded
    const playDuration = isFinite(active.duration) && active.duration > 0.15
      ? ((active.duration - 0.15)/ active.playbackRate) * 1000
      : 3000; // fallback: 3 s

    setTimeout(() => {
      active.pause();
      setIsEntered(true);
    }, playDuration);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Transition overlay */}
      <div className="transition-overlay absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 pointer-events-none z-50" />

      {/* Video layer */}
      <div
        onClick={handleEnter}
        className="absolute inset-0 z-0 h-full w-full cursor-pointer"
      >
        <video
          ref={idleVideoRef}
          src="/videos/HeroIdle.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={activeVideoRef}
          src="/videos/HeroActive.mp4"
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <Fog opacity={0.6} className="z-10" />
      <Particles className="z-10" />

      <AnimatePresence>
        {!isEntered && (
          <motion.div
            className="hero-content relative z-20 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }} // was duration: 0 — now intentional
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