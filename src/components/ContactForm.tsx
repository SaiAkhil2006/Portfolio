'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

export default function ContactForm({
  onClose,
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.message
    ) {
      onSubmit();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
      />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-2xl rounded-3xl border border-gold/20 bg-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        
        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

        <div className="relative p-8 md:p-12">

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-gold/50"></span>

              <h2 className="font-serif text-3xl md:text-5xl text-gold">
                Contact
              </h2>
            </div>

            <p className="text-foreground/70 font-sans text-sm md:text-base leading-relaxed max-w-lg">
              Let us forge something extraordinary together.
              Whether it's AI, systems architecture, or
              immersive digital experiences — send your vision.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* Name */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.25em] text-gold/70 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-2xl border border-gold/10 bg-background/20 px-5 py-4 text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-gold/40 focus:bg-background/30"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.25em] text-gold/70 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-gold/10 bg-background/20 px-5 py-4 text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-gold/40 focus:bg-background/30"
              />
            </div>

            {/* Message */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.25em] text-gold/70 font-medium">
                Message
              </label>

              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your vision..."
                className="w-full resize-none rounded-2xl border border-gold/10 bg-background/20 px-5 py-4 text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-gold/40 focus:bg-background/30"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4">
              
              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground/50 transition-all duration-300 hover:text-gold"
              >
                <span className="w-5 h-[1px] bg-foreground/30 transition-all duration-300 group-hover:w-8 group-hover:bg-gold" />
                Cancel
              </button>

              <button
                type="submit"
                className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-gold/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:border-gold/50 hover:bg-gold/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                <span className="relative z-10">
                  Send Message
                </span>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}