import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/timeline';

export default function TimelineSection() {
  return (
    <section className="py-20 bg-[#030712] border-t border-[rgba(255,255,255,0.08)] relative bg-grid-pattern text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Corporate Development Timeline
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1]">
            Tracing our history from regional instrumentation supply to global clinical systems integration.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l border-[rgba(255,255,255,0.08)] max-w-3xl mx-auto pl-8 sm:pl-10 space-y-12">
          {timelineData.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-left group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full border-4 border-[#030712] bg-[#0F172A] group-hover:bg-primary transition-all duration-300 flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>

              {/* Year Tag */}
              <span className="inline-block px-3 py-1 mb-3 text-[10px] font-extrabold uppercase tracking-widest rounded-full bg-[#111827] border border-[rgba(255,255,255,0.08)] text-accent">
                {milestone.year}
              </span>

              {/* Milestone Info */}
              <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-primary transition-colors duration-300">
                {milestone.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-1">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
