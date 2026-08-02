import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, y = 15, duration = 0.8 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // OutExpo premium easing curve
      }}
    >
      {children}
    </motion.div>
  );
}
