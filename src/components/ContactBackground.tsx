'use client';

import { useEffect, useState, useRef } from 'react';

type VideoState = 'idle' | 'success';

interface VideoBackgroundProps {
  currentState: VideoState;
}

export default function VideoBackground({ currentState }: VideoBackgroundProps) {
  const idleVideoRef = useRef<HTMLVideoElement>(null);
  const successVideoRef = useRef<HTMLVideoElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (currentState === 'success') {
      setShowSuccess(true);
      if (successVideoRef.current) {
        successVideoRef.current.play();
      }
    } else {
      setShowSuccess(false);
      // Ensure idle plays (might need user interaction to autoplay in some browsers, but muted usually works)
      if (idleVideoRef.current) {
        idleVideoRef.current.play().catch(() => {});
      }
    }
  }, [currentState]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#0f0e0c]">
      {/* Idle Video */}
      <video
        ref={idleVideoRef}
        src="/videos/ContactIdle.mp4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          showSuccess ? 'opacity-0' : 'opacity-100'
        }`}
        loop
        muted
        playsInline
      />
      
      {/* Success Video */}
      <video
        ref={successVideoRef}
        src="/videos/ContactActive.mp4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          showSuccess ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        // We only want it to play once
      />
    </div>
  );
}
