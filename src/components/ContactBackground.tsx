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
  const idleVideo = idleVideoRef.current;
  const successVideo = successVideoRef.current;

  if (!idleVideo || !successVideo) return;

  if (currentState === 'success') {
    setShowSuccess(true);

    // Stop idle video
    idleVideo.pause();
    idleVideo.currentTime = 0;

    // Start success video
    successVideo.currentTime = 0;
    successVideo.play().catch(() => {});
  } else {
    setShowSuccess(false);

    // Reset success video
    successVideo.pause();
    successVideo.currentTime = 0;

    // Resume idle video
    idleVideo.play().catch(() => {});
  }
}, [currentState]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#0f0e0c]">
      <video
        ref={idleVideoRef}
        src="/videos/ContactIdle.mp4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
  showSuccess ? 'opacity-0 invisible' : 'opacity-100 visible'
}`}
        loop
        muted
        playsInline
      />
      
      <video
        ref={successVideoRef}
        src="/videos/ContactActive.mp4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
  showSuccess ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}
        muted
        playsInline
        // We only want it to play once
      />
    </div>
  );
}
