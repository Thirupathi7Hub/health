import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import CursorTrail from '../components/CursorTrail';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1], // premium cubic-bezier easing
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col relative text-[#475569] font-sans">
      {/* Interactive mouse light trail aura */}
      <CursorTrail />
      
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="flex-grow pt-[73px]" // Offset for sticky navbar
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
      
      {/* Global B2B Request Quote Portal */}
      <QuoteModal />
    </div>
  );
}
