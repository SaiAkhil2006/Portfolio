'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface ContactFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

export default function ContactForm({ onClose, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      onSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Form Container */}
      <div className="relative w-full max-w-lg p-8 sm:p-12 border border-[#c6a96b]/30 shadow-[0_0_40px_rgba(15,14,12,0.9)] bg-[#0f0e0c]/80 backdrop-blur-sm rounded-sm z-50">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#f5d28e] opacity-20 blur-[10px] animate-pulse" />
        
        <h2 className="text-3xl sm:text-4xl text-center mb-8 text-[#f5d28e] font-bold tracking-wider drop-shadow-[0_0_8px_rgba(245,210,142,0.3)]">
          Send a Raven
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col relative z-10">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm tracking-widest text-[#c6a96b] uppercase ml-1">Thy Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full parchment-input p-3 sm:p-4 text-lg placeholder-[#e8dcc0]/30"
              placeholder="e.g., Lord John of Snow"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm tracking-widest text-[#c6a96b] uppercase ml-1">Where to Dispatch</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full parchment-input p-3 sm:p-4 text-lg placeholder-[#e8dcc0]/30"
              placeholder="e.g., lord@winterfell.castle"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm tracking-widest text-[#c6a96b] uppercase ml-1">Thy Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full parchment-input p-3 sm:p-4 text-lg resize-none placeholder-[#e8dcc0]/30"
              placeholder="Write thy missive here..."
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-[#c6a96b] hover:text-[#f5d28e] transition-colors text-sm uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="medieval-btn px-8 py-3 text-lg font-semibold tracking-widest"
            >
              Dispatch
            </button>
          </div>
        </form>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c6a96b]/40 -translate-x-2 -translate-y-2" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c6a96b]/40 translate-x-2 -translate-y-2" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#c6a96b]/40 -translate-x-2 translate-y-2" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c6a96b]/40 translate-x-2 translate-y-2" />
      </div>
    </div>
  );
}
