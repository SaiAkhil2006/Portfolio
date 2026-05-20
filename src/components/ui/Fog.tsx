"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FogProps {
  className?: string;
  opacity?: number;
}

export function Fog({ className, opacity = 0.5 }: FogProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0 z-10 h-[200%] w-[200%] -translate-x-1/4 -translate-y-1/4"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/04/20/07/16/smoke-1340417_960_720.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          opacity: 0.3,
          filter: "blur(8px) contrast(1.2)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-20%", "-10%", "-20%"],
          y: ["-20%", "-10%", "-20%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />
    </div>
  );
}
