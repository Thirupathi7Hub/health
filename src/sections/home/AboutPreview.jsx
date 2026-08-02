import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Globe, ArrowRight } from 'lucide-react';
import operatingSuite from '../../assets/operating_suite.png';

export default function AboutPreview() {
  const highlights = [
    {
      icon: Shield,
      title: 'Certified Integrity',
      description: 'Fully compliant with ISO 13485 clinical quality standards and CE/FDA certifications.'
    },
    {
      icon: Users,
      title: 'Expert Support Force',
      description: 'Over 450 certified biomedical engineers deployed across regional logistics depots.'
    },
    {
      icon: Globe,
      title: 'Global Supply Channels',
      description: 'Active equipment distribution and network setups across 42 countries.'
    }
  ];

  return (
    <section className="py-20 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image with layered visual depth */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative gradient backing */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl blur-xl opacity-50 transform -rotate-2" />
              
              <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0F172A] p-4 shadow-premium">
                <img
                  src={operatingSuite}
                  alt="Aetheris Advanced Surgical Suite"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Little overlapping overlay card */}
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#111827] border border-[rgba(255,255,255,0.08)] shadow-premium max-w-[200px] text-left hidden sm:block">
                <p className="text-3xl font-extrabold text-accent">14+</p>
                <p className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mt-1">Years Medical Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
                Pioneering B2B Supply & Hospital Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                Founded in 2012, Aetheris has evolved from a regional device supplier to a global medical systems partner. We coordinate procurement, calibrate imaging systems, and engineer gas manifolds for premier hospital organizations.
              </p>
            </div>

            {/* Grid of Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="space-y-3 p-5 rounded-2xl bg-[#111827] border border-[rgba(255,255,255,0.08)] shadow-premium">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 text-accent flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-[#F8FAFC]">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors group"
              >
                Read Our Corporate Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
