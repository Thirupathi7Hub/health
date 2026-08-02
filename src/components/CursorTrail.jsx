import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Spring settings for organic physics lag
  const springConfig = { damping: 45, stiffness: 220, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      // Offset by half the width of the glow circle (e.g., 150px) to center it under the pointer
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(0,174,239,0.12)_0%,_rgba(0,86,210,0.04)_50%,_transparent_100%)] rounded-full blur-3xl pointer-events-none z-50 hidden md:block"
      style={{
        x: trailX,
        y: trailY,
      }}
    />
  );
}
