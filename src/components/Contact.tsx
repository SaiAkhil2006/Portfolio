'use client';

import { useState, useEffect } from "react";
import VideoBackground from "./ContactBackground";
import ContactForm from "./ContactForm";

type AppState = 'idle' | 'form_open' | 'success';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring we only render client-side state after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenForm = () => {
    setAppState('form_open');
  };

  const handleCloseForm = () => {
    setAppState('idle');
  };

  const handleSubmit = () => {
    setAppState('success');
  };

  const handleReset = () => {
    setAppState('idle');
  };

  if (!mounted) return null;

  return (
    <div>

      <main className="cursor-pointer relative min-h-screen w-full flex flex-col items-center justify-center p-4 selection:bg-[#c6a96b]/30 selection:text-[#f5d28e]">
        
        {/* Background Controller */}
        <VideoBackground currentState={appState === 'success' ? 'success' : 'idle'} />

        {/* Main Content Layer */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          
          {/* Initial CTA */}
        
            {appState !== 'success' && (
              <>
                      
                <div onClick={handleOpenForm}
                  className="w-[50%] h-[300px]">
                  .
                </div>

              </>
            )}

          {/* Form Modal overlay with transition */}
          {appState === 'form_open' && (
            <ContactForm
              onClose={handleCloseForm}
              onSubmit={handleSubmit}
            />
          )}

          {/* Success Message */}
            {appState === 'success' && (
              <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-10 md:p-14 text-center max-w-2xl">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />

  {/* Top Accent */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

  {/* Icon */}
  <div className="relative z-10 mb-8 flex justify-center">
    <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gold/20 bg-gold/10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
      <span className="text-3xl text-gold">✦</span>
    </div>
  </div>

  {/* Heading */}
  <h2 className="relative z-10 font-serif text-4xl md:text-6xl text-gold mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.25)]">
    Message Sent
  </h2>

  {/* Description */}
  <p className="relative z-10 text-foreground/75 text-lg md:text-xl leading-relaxed font-light max-w-xl mx-auto mb-12">
    Your transmission has been received.
    I shall review your message and respond
    with precision and intent.
  </p>

  {/* Button */}
  <button
    onClick={handleReset}
    className="group relative z-10 inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-gold/20 bg-gold/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:border-gold/50 hover:bg-gold/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
  >
    <span className="relative z-10">
      Return
    </span>

    <div className="w-5 h-[1px] bg-gold/60 transition-all duration-300 group-hover:w-8" />

    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  </button>
</div>
            )}

        </div>
      </main>
    </div>
  );
}
