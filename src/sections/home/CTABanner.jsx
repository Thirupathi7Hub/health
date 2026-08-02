import React from 'react';
import { Link } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import { PhoneCall, Calendar } from 'lucide-react';

export default function CTABanner() {
  const { openQuoteModal } = useUI();

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] border-t border-[rgba(255,255,255,0.08)] text-white relative overflow-hidden text-left">
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] border border-white/5 rounded-full blur-sm pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent/20 text-accent border border-accent/30">
              Procurement & Engineering Consulting
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Optimize Your Hospital's Clinical Procurement Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-350 max-w-2xl leading-relaxed">
              Connect directly with our senior project managers. We assist in configuring diagnostic imaging fleets, establishing service levels (SLAs), and drawing lead-lining room shielding schematics.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-start sm:justify-start lg:justify-center">
            <button
              onClick={() => openQuoteModal('Enterprise Procurement Consultation')}
              className="px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-accent/25 cursor-pointer text-center transition-all hover:brightness-105 active:scale-95"
            >
              Request Quote & Spec Review
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#030712]/50 hover:bg-[#030712] border border-[rgba(255,255,255,0.08)] text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer transition-colors"
            >
              Talk to Logistics Team
            </Link>
          </div>

        </div>

        {/* Support hotline metadata */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <PhoneCall size={14} className="text-accent" />
            <span>Emergency Repair Hotline: <strong>+1 (800) 459-2348</strong> (24/7 Dispatch)</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-accent" />
            <span>Biomedical Calibration Lead-times: <strong>3-5 Business Days</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
