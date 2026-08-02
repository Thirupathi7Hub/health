import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, ChevronRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useUI();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products Catalogue', path: '/products' },
    { name: 'Technical Services', path: '/services' },
    { name: 'Contact Engineering', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/40 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-primary text-white shadow-lg group-hover:bg-accent transition-colors duration-300">
              <HeartPulse size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                AETHERIS
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#00AEEF] uppercase -mt-1">
                Medical Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-primary text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-primary/20 cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-slate-950/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[73px] right-0 w-80 h-[calc(100vh-73px)] bg-slate-900 border-l border-slate-800 z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between py-3 border-b border-slate-800/80 text-sm font-semibold tracking-wide ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                <ChevronRight size={16} className={isActive(link.path) ? 'text-accent' : 'text-slate-600'} />
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-slate-800/80 bg-slate-950/40">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openQuoteModal();
            }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm tracking-wide text-center block cursor-pointer transition-all active:scale-95"
          >
            Request Procurement Quote
          </button>
        </div>
      </div>
    </header>
  );
}
