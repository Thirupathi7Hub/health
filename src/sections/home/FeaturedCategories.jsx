import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Eye, ShieldCheck, Database } from 'lucide-react';

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
    
    const rx = -(y / (height / 2)) * 8; // Max 8 degrees X
    const ry = (x / (width / 2)) * 8;  // Max 8 degrees Y
    
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

export default function FeaturedCategories() {
  const categoriesList = [
    {
      id: 'imaging',
      name: 'Diagnostic Imaging Systems',
      description: 'AI-guided 3.0T MRI systems, 128-slice CT scanners, and floor-mounted digital radiography.',
      icon: Eye,
      color: 'from-primary/10 to-primary/20',
      badge: 'Advanced AI Integrated'
    },
    {
      id: 'critical-care',
      name: 'Critical Care Hardware',
      description: 'Lung-protective ICU ventilators, multiparameter patient monitors, and electronic gas anesthesia machines.',
      icon: Cpu,
      color: 'from-accent/10 to-accent/20',
      badge: '24/7 Ward Integration'
    },
    {
      id: 'surgical',
      name: 'Surgical Operating Solutions',
      description: 'Shadow-free LED lights with 4K recording, electro-hydraulic surgical tables, and electrosurgical generators.',
      icon: ShieldCheck,
      color: 'from-secondary/15 to-secondary/25',
      badge: 'OR Precision Standard'
    },
    {
      id: 'infrastructure',
      name: 'Clinical Infrastructure',
      description: 'Autonomous UV-C disinfection robots and medical gas pipeline networks NFPA 99 compliant.',
      icon: Database,
      color: 'from-slate-100 to-slate-200',
      badge: 'NFPA 99 Compliant'
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
    hidden: { opacity: 0, y: 35 },
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
    <section className="py-20 bg-[#F8FAFC] relative bg-grid-pattern text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Systems Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Featured B2B Product Categories
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Hover to experience 3D diagnostic alignment. Click any division to view specifications.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categoriesList.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.id} variants={cardVariants}>
                <TiltCard
                  className="relative rounded-3xl border border-[#DCFCE7] bg-white p-8 sm:p-10 flex flex-col justify-between shadow-premium hover:shadow-premium-hover transition-all duration-300 group glow-overlay"
                >
                  {/* Visual color corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cat.color} rounded-bl-full blur-2xl opacity-60 group-hover:scale-125 transition-transform duration-500`} />

                  <div style={{ transform: 'translateZ(30px)' }} className="transition-transform duration-300">
                    {/* Category Badge & Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] text-primary border border-[#DCFCE7] shadow-sm flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F0FDF4] border border-[#DCFCE7] text-primary px-2.5 py-1 rounded-full">
                        {cat.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold font-display text-[#0F172A] mb-3 font-sans">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                      {cat.description}
                    </p>
                  </div>

                  <div style={{ transform: 'translateZ(15px)' }} className="mt-8 pt-6 border-t border-slate-100 w-full">
                    <Link
                      to={`/products?category=${cat.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover transition-colors"
                    >
                      Browse Catalog
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
