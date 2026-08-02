import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, ArrowRight, Mail, ShieldAlert } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function Footer() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [subscribed, setSubscribed] = React.useState(false);

  const onSubmitNewsletter = (data) => {
    console.log('Newsletter subscription request:', data.email);
    setSubscribed(true);
    setTimeout(() => {
      reset();
    }, 1000);
  };

  const footerLinks = {
    company: [
      { name: 'About Our Systems', path: '/about' },
      { name: 'Leadership & Vision', path: '/about' },
      { name: 'Global Presence Map', path: '/about' },
      { name: 'Case Studies', path: '/' }
    ],
    products: [
      { name: 'Diagnostic Imaging', path: '/products' },
      { name: 'Critical Care Units', path: '/products' },
      { name: 'Surgical Solutions', path: '/products' },
      { name: 'Hospital Gas Pipings', path: '/products' }
    ],
    services: [
      { name: 'Clinical Calibration', path: '/services' },
      { name: 'Equipment Supply', path: '/services' },
      { name: 'Hospital Planning', path: '/services' },
      { name: 'Technical Support', path: '/services' }
    ],
    resources: [
      { name: 'Technical Whitepapers', path: '/' },
      { name: 'User Manuals & Guides', path: '/products' },
      { name: 'Regulatory Standards', path: '/about' },
      { name: 'ISO & FDA Registries', path: '/about' }
    ]
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden">
      {/* Background soft glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0056D2]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-primary text-white shadow-lg">
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
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Aetheris Medical Systems is a leading Fortune 500 B2B supplier, designing and integrating premium hospital infrastructure, advanced diagnostic imaging systems, and critical clinical ventilation devices globally.
            </p>
            {/* Regulatory and Quality Tags */}
            <div className="flex items-center gap-4 border-t border-slate-900 pt-6">
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300">
                ISO 13485:2016
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300">
                FDA REGISTERED
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300">
                CE CERTIFIED
              </div>
            </div>
          </div>

          {/* Sitemap Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Enterprise
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Equipment
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter and Socials Panel */}
        <div className="mt-16 border-t border-slate-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:max-w-md">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">
              Subscribe to Healthcare Insights
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Get the latest clinical research briefs, regulatory updates, and B2B catalog news.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubmit(onSubmitNewsletter)} className="relative flex">
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email'
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-l-xl bg-slate-900 border text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500/80' : 'border-slate-800'
                  }`}
                  placeholder="Enter corporate email address"
                />
                <button
                  type="submit"
                  className="px-5 rounded-r-xl bg-primary hover:bg-primary/95 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs font-semibold">
                Subscription confirmed. Thank you.
              </div>
            )}
            {errors.email && (
              <span className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                <ShieldAlert size={10} /> {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800/60 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800/60 transition-colors"
              aria-label="Twitter Profile"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800/60 transition-colors"
              aria-label="Facebook Profile"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Copyright and Legal Link */}
        <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aetheris Medical Systems. All clinical system rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-350 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-350 transition-colors">B2B Terms of Sale</Link>
            <Link to="/" className="hover:text-slate-350 transition-colors">Supply Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
