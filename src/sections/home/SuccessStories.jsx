import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Activity } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      institution: 'St. Jude Capital Health Network',
      project: 'Laminar OR & Digital Integration',
      metric: '35% Efficiency Gain',
      detail: 'Completed a full setup of 6 advanced operating theatres with laminar flow ventilation and integrated EHR systems in 90 days.',
      icon: Zap
    },
    {
      institution: 'Metropolitan Trauma Hub',
      project: '128-Slice CT Scan Center',
      metric: '99.9% Scanning Uptime',
      detail: 'Supplied and configured high-speed computed tomography and MRI scanners, integrating secure PACS clinical imaging routing.',
      icon: Activity
    },
    {
      institution: 'Nordic Care Hospital Group',
      project: 'ICU Ventilators Deployment',
      metric: '180 beds fully equipped',
      detail: 'Deployed custom OmniVent critical care ventilators and modular AuraSense patient monitors with central control channels.',
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden bg-grid-pattern text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Clinical Deployment Case Studies
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Read about our major equipment supply and infrastructure integrations across leading networks.
          </p>
        </div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <div
                  className="p-8 rounded-3xl bg-white border border-[#DCFCE7] shadow-premium hover:shadow-premium-hover transition-all duration-300 text-left flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-primary border border-[#DCFCE7] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                        {story.project}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F172A]">
                        {story.institution}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {story.detail}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Project Outcome</span>
                    <p className="text-lg font-extrabold text-primary font-display mt-0.5">{story.metric}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
