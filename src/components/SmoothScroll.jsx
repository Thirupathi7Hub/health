import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  // Dynamically calculate and sync document body height with scrolling container
  useEffect(() => {
    if (!scrollRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setPageHeight(entry.contentRect.height);
      }
    });
    resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();

  // Inertial momentum spring physics (low damping and high stiffness for smooth ease out)
  const springConfig = {
    damping: 24,
    stiffness: 85,
    mass: 0.5,
    restSpeed: 0.01,
    restDelta: 0.01
  };

  const smoothY = useSpring(scrollY, springConfig);
  const y = useTransform(smoothY, (value) => -value);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform flex flex-col min-h-screen"
      >
        {children}
      </motion.div>
      {/* Dummy block to match native scrolling heights */}
      <div style={{ height: pageHeight }} className="w-full pointer-events-none" />
    </>
  );
}
