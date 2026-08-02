import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ShieldCheck, Activity } from 'lucide-react';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#030712] border-t border-[rgba(255,255,255,0.08)] text-white relative overflow-hidden text-left bg-grid-pattern">
      {/* Background visual element */}
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#030712] to-primary/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
              Corporate Showreel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-[#F8FAFC]">
              Inside Aetheris: Engineering Clinical Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl leading-relaxed">
              Take a virtual walkthrough of our Rotterdam calibration labs, Baltimore logistics depots, and watch our field engineers install a 3.0T MRI wide-bore system on-site.
            </p>

            <div className="flex flex-wrap gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-accent" />
                <span>OEM-Certified Calibration Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity size={14} className="text-accent" />
                <span>98% Guaranteed Fleet Uptime SLAs</span>
              </div>
            </div>
          </div>

          {/* Pulsing Play Button */}
          <div className="lg:col-span-5 flex justify-start lg:justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="relative group flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Play Showreel Video"
            >
              {/* Pulsing rings */}
              <span className="absolute w-24 h-24 rounded-full bg-accent/20 animate-ping opacity-75" />
              <span className="absolute w-20 h-20 rounded-full bg-primary/30 animate-pulse" />
              
              {/* Play icon container */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Play size={24} fill="currentColor" className="ml-1" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Video player card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#0F172A] border border-[rgba(255,255,255,0.08)] shadow-2xl z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#111827] border border-[rgba(255,255,255,0.08)] text-slate-400 hover:text-white cursor-pointer z-20"
                aria-label="Close video player"
              >
                <X size={18} />
              </button>

              {/* Video placeholder with telemetry loading details */}
              <div className="relative aspect-video flex flex-col items-center justify-center bg-[#030712] p-6 text-center">
                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />
                
                <div className="space-y-4 z-10">
                  <Activity className="text-accent mx-auto animate-pulse" size={48} />
                  <h3 className="text-xl font-bold font-display text-white">Stream: Corporate Showreel</h3>
                  <p className="text-xs text-slate-405 max-w-sm mx-auto leading-relaxed">
                    Connecting to local asset servers... Establishing secure DICOM media channel.
                  </p>
                  
                  {/* Calibrator bar */}
                  <div className="w-64 h-1.5 rounded-full bg-slate-950 overflow-hidden mx-auto border border-slate-900">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">System Diagnostics: 100% OK</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
