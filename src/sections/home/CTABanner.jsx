import React from 'react';
import { Link } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import { PhoneCall, Calendar } from 'lucide-react';

export default function CTABanner() {
  const { openQuoteModal } = useUI();

  return (
    <section className="py-20 bg-gradient-to-br from-[#ECFDF5] to-[#FFFFFF] border-t border-[#DCFCE7] text-[#475569] relative overflow-hidden text-left bg-grid-pattern">
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] border border-primary/5 rounded-full blur-sm pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Procurement & Engineering Consulting
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-[#0F172A]">
              Optimize Your Hospital's Clinical Procurement Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
              Connect directly with our senior project managers. We assist in configuring diagnostic imaging fleets, establishing service levels (SLAs), and drawing lead-lining room shielding schematics.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-start sm:justify-start lg:justify-center">
            <button
              onClick={() => openQuoteModal('Enterprise Procurement Consultation')}
              className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-primary/25 cursor-pointer text-center transition-all active:scale-95"
            >
              Request Quote & Spec Review
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-[#DCFCE7] text-[#0F172A] font-bold text-xs uppercase tracking-wider text-center cursor-pointer transition-colors"
            >
              Talk to Logistics Team
            </Link>
          </div>

        </div>

        {/* Support hotline metadata */}
        <div className="mt-12 pt-8 border-t border-[#DCFCE7] flex flex-wrap gap-8 items-center text-xs text-[#475569]">
          <div className="flex items-center gap-2">
            <PhoneCall size={14} className="text-primary" />
            <span>Emergency Repair Hotline: <strong>+1 (800) 459-2348</strong> (24/7 Dispatch)</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-primary" />
            <span>Biomedical Calibration Lead-times: <strong>3-5 Business Days</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
