import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Settings, HeartPulse, ShieldAlert, Award, FileSpreadsheet, Check } from 'lucide-react';
import { services, getIcon } from '../data/services';
import { useUI } from '../context/UIContext';

export default function Services() {
  const { openQuoteModal } = useUI();

  return (
    <>
      <Helmet>
        <title>Technical Biomedical Services & Hospital Planning | Aetheris</title>
        <meta
          name="description"
          content="Explore our biomedical engineering services, including medical equipment supply, lead-shielding installations, preventive calibration, AMC contracts, and hospital layout consultations."
        />
        <link rel="canonical" href="https://aetheris-medical.com/services" />
      </Helmet>

      <div className="bg-[#030712] min-h-screen text-[#F8FAFC] text-left">
        {/* Sub-page Hero */}
        <section className="relative py-20 bg-[#0F172A] border-b border-[rgba(255,255,255,0.08)] overflow-hidden bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-primary/10 opacity-70" />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
              Technical Division
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
              Biomedical Engineering & Support Services
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl leading-relaxed">
              OEM-certified clinical calibrators, structural shielding specialists, and 24/7 technical dispatch keeping critical systems active.
            </p>
          </div>
        </section>

        {/* Services List with Alternating Layouts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24 sm:space-y-32">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image/Icon Block (Alternates position) */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? 'order-2 lg:order-1' : 'order-2'
                  }`}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/15 rounded-3xl blur-2xl opacity-40 transform" />
                  
                  {/* Luxury graphics wrapper */}
                  <div className="relative rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#111827] p-10 text-center shadow-premium flex flex-col items-center justify-center min-h-[320px]">
                    <div className="p-5 rounded-2xl bg-[#0F172A] border border-[rgba(255,255,255,0.08)] text-accent mb-6 shadow-sm">
                      <IconComponent size={48} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Aetheris Service Division</span>
                    <h3 className="text-lg font-bold text-[#F8FAFC] mt-2">{service.title}</h3>
                    <p className="text-xs text-slate-400 mt-2 max-w-xs leading-normal">
                      Full compliance with Joint Commission mandates and ISO regulatory requirements.
                    </p>
                  </div>
                </div>

                {/* Content Block */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? 'order-1 lg:order-2' : 'order-1'
                  }`}
                >
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed uppercase tracking-wider text-accent">
                      {service.shortDescription}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">What We Do</h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                            <Check size={12} className="text-primary mt-1 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Service Advantages</h4>
                      <ul className="space-y-1.5">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote Trigger */}
                  <div className="pt-6">
                    <button
                      onClick={() => openQuoteModal(service.title)}
                      className="px-6 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#111827] border border-[rgba(255,255,255,0.08)] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-slate-900/10 cursor-pointer transition-colors"
                    >
                      Request SLA & Pricing details
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </section>

        {/* Support Call Banner */}
        <section className="py-16 bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] border-t border-[rgba(255,255,255,0.08)] text-white text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <ShieldAlert size={40} className="text-accent mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold font-display text-white">Need Immediate Engineering Dispatch?</h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl mx-auto">
              Our B2B technical clients receive a dedicated direct hotline number. Call our dispatcher desk for emergency equipment faults. On-site engineer teams arrive within 4 hours.
            </p>
            <div className="pt-2 text-lg font-extrabold text-accent tracking-wide font-display">
              Support Center: +1 (800) 459-2348 (Toll Free)
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
