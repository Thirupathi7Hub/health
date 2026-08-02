import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What are the typical lead times for imaging equipment procurement?',
      answer: 'Standard B2B procurement timelines for clinical imaging modalities (MRI, CT, DR) range between 8 to 12 weeks. This includes custom fabrication checking, regulatory clearance validations, temperature-controlled transit, and site prep readiness evaluations.'
    },
    {
      question: 'Are all supplied clinical units compliant with FDA and CE standards?',
      answer: 'Yes, Aetheris explicitly partners with manufacturing systems that hold valid ISO 13485:2016 certifications. Every single clinical unit is individually tracked with registered FDA, CE, and regional diagnostic safety certifications.'
    },
    {
      question: 'Do you assist with room structural shielding and planning audits?',
      answer: 'Absolutely. Our hospital planning engineering division works alongside your contractors to detail exact pre-requisites. We calculate structural slab weights for MRI magnets, design electrical isolators, and model lead-lining requirements (lead thicknesses for CT/X-Ray shielding) to clear licensing audits.'
    },
    {
      question: 'What performance metrics are guaranteed under your CMC contracts?',
      answer: 'Our Comprehensive Maintenance Contract (CMC) options guarantee up to 98% operational uptime SLAs for imaging centers. We deploy 24/7 VPN tracking modules to pre-warn of helium boil-off variances, cold-head faults, or tube temperature drifts, enabling off-peak maintenance.'
    }
  ];

  return (
    <section className="py-20 bg-[#030712] border-t border-[rgba(255,255,255,0.08)] relative bg-grid-pattern text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
            Support Portal
          </span>
          <h2 className="text-3xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Procurement FAQ & Licensing
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#111827] overflow-hidden shadow-premium transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-slate-900/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-[#F8FAFC]">{faq.question}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed pl-11">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
