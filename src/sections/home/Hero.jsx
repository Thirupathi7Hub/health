import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import ClinicalTelemetry from '../../components/ClinicalTelemetry';

export default function Hero() {
  const { openQuoteModal } = useUI();

  return (
    <section className="relative min-h-[calc(100vh-73px)] flex items-center justify-center bg-gradient-mesh overflow-hidden py-12 md:py-20 bg-grid-pattern">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none floating-element" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[120px] pointer-events-none floating-element-reverse" />

      {/* Grid container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DCFCE7] text-xs font-semibold text-[#475569] shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Enterprise Clinical Systems & Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight"
            >
              Pioneering the Next Generation of <span className="text-gradient">Clinical Precision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed"
            >
              Aetheris designs and integrates medical imaging systems, modular critical care monitors, and hospital-wide engineering infrastructure for global healthcare groups.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => openQuoteModal()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white font-bold text-sm shadow-xl hover:shadow-primary/20 cursor-pointer flex items-center gap-2 group transition-all"
              >
                Request Procurement Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                to="/products"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] font-semibold text-sm border border-[#DCFCE7] shadow-sm cursor-pointer transition-colors"
              >
                Explore Systems Catalog
              </Link>
            </motion.div>

            {/* Key trusts list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#DCFCE7]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#DCFCE7] text-green-600 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">FDA & CE Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#DCFCE7] text-primary shadow-sm">
                  <Activity size={20} />
                </div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">99.8% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-[#DCFCE7] text-[#10B981] shadow-sm">
                  <Award size={20} />
                </div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">ISO 13485 Standards</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Clinical Telemetry Workstation */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none"
            >
              {/* Ambient screen backing glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20 rounded-3xl blur-2xl opacity-60 transform scale-95" />
              
              {/* ICU Telemetry Monitor */}
              <ClinicalTelemetry />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
