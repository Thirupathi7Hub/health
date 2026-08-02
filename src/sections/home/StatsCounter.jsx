import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

// Custom high-performance count-up with smooth quadratic ease-out easing
function SafeCountUp({ end, duration = 2.5, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    const endValue = parseInt(end, 10);
    if (isNaN(endValue)) return;

    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // f(t) = t * (2 - t)
      const easeOutQuad = progress * (2 - progress);
      
      setCount(Math.floor(easeOutQuad * (endValue - startValue) + startValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsCounter() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 14, suffix: '+', label: 'Years Operations' },
    { value: 2500, suffix: '+', label: 'Clinical Installs' },
    { value: 450, suffix: '+', label: 'Biomedical Engineers' },
    { value: 42, suffix: '', label: 'Countries Supplied' }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F0FDF4] border-y border-[#DCFCE7] text-[#475569] relative overflow-hidden bg-grid-pattern text-left">
      {/* Background graphic elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary font-display">
                {isInView ? (
                  <SafeCountUp
                    end={stat.value}
                    duration={2.2}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#475569]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
