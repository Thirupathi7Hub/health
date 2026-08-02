import React from 'react';
import { motion } from 'framer-motion';

export default function TrustSlider() {
  const hospitalPartners = [
    'Mayo Clinical Network',
    'Johns Hopkins Labs',
    'Cleveland Medical Group',
    'Stanford Clinical Trust',
    'Massachusetts Health',
    'Toronto General Hospital',
    'Charité Universitätsmedizin',
    'Singapore Health Partners'
  ];

  return (
    <section className="py-12 bg-white border-y border-[#DCFCE7] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#64748B]">
          Trusted by Premier Global Healthcare Systems
        </p>
      </div>

      {/* Marquee Scroller */}
      <div className="flex w-full select-none overflow-hidden relative after:absolute after:top-0 after:right-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10 before:absolute before:top-0 before:left-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10">
        <div className="flex gap-16 min-w-full shrink-0 items-center justify-around py-2 animate-[marquee_30s_linear_infinite]">
          {hospitalPartners.concat(hospitalPartners).map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap text-[#475569] font-display font-extrabold text-sm sm:text-base tracking-wider opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {partner.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
