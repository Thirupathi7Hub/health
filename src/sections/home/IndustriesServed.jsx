import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Microscope, ShieldCheck } from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    {
      icon: Landmark,
      title: 'Public Health Networks',
      description: 'Supporting national clinics and municipal health authorities with large-volume procurement logistics and regional installation SLAs.'
    },
    {
      icon: Building2,
      title: 'Private Hospital Chains',
      description: 'Providing comprehensive equipment leasing, priority technical support, and PACS digital record integrations across hospital groups.'
    },
    {
      icon: Microscope,
      title: 'Clinical Diagnostics Labs',
      description: 'Supplying and calibrating high-speed computed tomography (CT), MRI systems, and molecular diagnostic monitors.'
    },
    {
      icon: ShieldCheck,
      title: 'Specialized Surgery Centers',
      description: 'Designing and engineering laminar airflow ventilation ceilings, lead shielding boundaries, and integrated operating theater lighting.'
    }
  ];

  return (
    <section className="py-20 bg-[#030712] relative bg-grid-pattern text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
            Market Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Clinical Environments We Serve
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1]">
            Aetheris configures clinical systems and gas pipe networks across private, public, and specialized medical centers.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 rounded-3xl bg-[#111827] border border-[rgba(255,255,255,0.08)] shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-accent border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </div>
                  
                  <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  SLA Active
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
