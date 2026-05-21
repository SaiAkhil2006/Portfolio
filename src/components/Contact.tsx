'use client';

import { useState, useEffect } from "react";
import VideoBackground from "./ContactBackground";
import ContactForm from "./ContactForm";

type AppState = 'idle' | 'form_open' | 'success';

export default function Contact(){
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
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 selection:bg-[#c6a96b]/30 selection:text-[#f5d28e]">
        
        {/* Background Controller */}
        <VideoBackground currentState={appState === 'success' ? 'success' : 'idle'} />

        {/* Main Content Layer */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          
          {/* Initial CTA */}
          <div 
            className={`transition-all duration-1000 ease-in-out transform flex flex-col items-center justify-center gap-8 ${
              appState === 'idle' 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
            }`}
          >
            {appState !== 'success' && (
              <>
                <button
                  onClick={handleOpenForm}
                  className="group relative overflow-hidden rounded-sm border border-[#c6a96b]/50 bg-[#c6a96b]/10 px-12 py-4 transition-all hover:bg-[#c6a96b]/30"
                >
                  <span className="text-[#f5d28e] uppercase tracking-[0.3em] text-sm">
                    Open Contact
                  </span>
              </button>
              </>
            )}
          </div>

          {/* Form Modal overlay with transition */}
          <div 
            className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out ${
              appState === 'form_open' 
                ? 'opacity-100 pointer-events-auto scale-100' 
                : 'opacity-0 pointer-events-none scale-95'
            }`}
          >
            {appState === 'form_open' && (
              <ContactForm onClose={handleCloseForm} onSubmit={handleSubmit} />
            )}
          </div>

          {/* Success Message */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 delay-500 ease-in-out ${
              appState === 'success' 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
          >
            {appState === 'success' && (
              <div className="bg-[#0f0e0c]/60 p-12 backdrop-blur-sm border border-[#c6a96b]/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm text-center max-w-2xl">
                <h2 className="text-4xl md:text-5xl text-[#f5d28e] mb-6 drop-shadow-[0_0_10px_rgba(245,210,142,0.5)]">
                  Message Dispatched
                </h2>
                <p className="text-[#e8dcc0] text-xl mb-12 tracking-wide leading-relaxed">
                  Thy raven has taken flight. We shall respond ere the next moon wanes.
                </p>
                <button 
                  onClick={handleReset}
                  className="text-[#c6a96b] hover:text-[#f5d28e] uppercase tracking-widest text-sm transition-colors"
                >
                  Return to the Hall
                </button>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
