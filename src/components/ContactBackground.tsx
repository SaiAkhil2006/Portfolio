'use client';

import { useEffect, useRef, useState } from 'react';

type VideoState = 'idle' | 'success';

export default function VideoBackground({ currentState }: { currentState: VideoState }) {
  const idleVideoRef = useRef<HTMLVideoElement>(null);
  const successVideoRef = useRef<HTMLVideoElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    idleVideoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const idleVideo = idleVideoRef.current;
    const successVideo = successVideoRef.current;
    if (!idleVideo || !successVideo) return;

    if (currentState === 'success') {
      setShowSuccess(true);
      idleVideo.pause();
      idleVideo.currentTime = 0;
      successVideo.currentTime = 0;
      successVideo.play().catch(() => {});
    } else {
      setShowSuccess(false);
      successVideo.pause();
      successVideo.currentTime = 0;
      idleVideo.play().catch(() => {});
    }
  }, [currentState]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[#0f0e0c]">
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
      />
    </div>
  );
}