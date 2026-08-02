import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, GitMerge } from 'lucide-react';
import { useUI } from '../../context/UIContext';
import medicalSolutions from '../../assets/medical_solutions.png';

// Reusable 3D spring-animated tilt container
function TiltCard({ children, className, onClick }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    const rx = -(y / (height / 2)) * 6; // Max 6 degrees X
    const ry = (x / (width / 2)) * 6;  // Max 6 degrees Y
    
    setRotateX(rx);
    setRotateY(ry);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.4 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`perspective-1000 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function SolutionsGrid() {
  const { openQuoteModal } = useUI();
  const solutions = [
    {
      icon: GitMerge,
      title: 'Digital EHR & PACS Integration',
      description: 'Synchronizing imaging scans and ICU patient monitor charts directly to HL7 and DICOM databases.'
    },
    {
      icon: HardHat,
      title: 'Structural Cleanroom Engineering',
      description: 'Laminar air flows, custom lead wall shielding, and isolator structures matching strict clinical building guidelines.'
    },
    {
      icon: ShieldCheck,
      title: 'Medical Gas Supply Networks',
      description: 'Turnkey distribution systems for clinical oxygen, nitrous oxide, and hospital vacuums NFPA 99 compliant.'
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden bg-grid-pattern text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Infrastructure Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Integrated Hospital Infrastructure Planning
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Aetheris provides end-to-end design, construction, and engineering integration for large-scale clinical facilities.
          </p>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Solutions List with 3D Tilt */}
          <div className="lg:col-span-6 space-y-5 text-left">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <TiltCard
                  key={index}
                  className="flex gap-5 p-6 rounded-2xl bg-white border border-[#DCFCE7] shadow-premium hover:shadow-premium-hover transition-all duration-300"
                >
                  <div style={{ transform: 'translateZ(20px)' }} className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F0FDF4] text-primary border border-[#DCFCE7] flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div style={{ transform: 'translateZ(10px)' }} className="space-y-1">
                    <h3 className="text-base font-bold text-[#0F172A]">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{sol.description}</p>
                  </div>
                </TiltCard>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => openQuoteModal('Hospital Infrastructure Plan')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-[#DCFCE7] text-[#0F172A] font-semibold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-colors"
              >
                Request Infrastructure Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Solution Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/15 rounded-3xl blur-2xl opacity-40 transform rotate-2" />
              
              <div className="relative rounded-3xl overflow-hidden border border-[#DCFCE7] bg-white p-4 shadow-premium">
                <img
                  src={medicalSolutions}
                  alt="Hospital Layout Blueprint Rendering"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
