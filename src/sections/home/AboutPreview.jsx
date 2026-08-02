import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Globe, ArrowRight } from 'lucide-react';
import operatingSuite from '../../assets/operating_suite.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
});

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
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div {...fadeLeft(0.1)} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/15 rounded-3xl blur-xl opacity-40 transform -rotate-2" />
              <div className="relative rounded-3xl overflow-hidden border border-[#DCFCE7] bg-white p-4 shadow-premium">
                <img
                  src={operatingSuite}
                  alt="Aetheris Advanced Surgical Suite"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <motion.div
                {...fadeUp(0.4)}
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white border border-[#DCFCE7] shadow-premium max-w-[200px] text-left hidden sm:block"
              >
                <p className="text-3xl font-extrabold text-primary">14+</p>
                <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mt-1">Years Medical Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <motion.div {...fadeRight(0)} className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
                Pioneering B2B Supply & Hospital Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Founded in 2012, Aetheris has evolved from a regional device supplier to a global medical systems partner. We coordinate procurement, calibrate imaging systems, and engineer gas manifolds for premier hospital organizations.
              </p>
            </motion.div>

            {/* Staggered Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    {...fadeUp(0.15 + index * 0.12)}
                    className="space-y-3 p-5 rounded-2xl bg-white border border-[#DCFCE7] shadow-premium"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div {...fadeUp(0.5)} className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors group"
              >
                Read Our Corporate Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
