import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact message submitted:', data);
    setSubmitted(true);
    setTimeout(() => {
      reset();
    }, 1000);
  };

  const officeLocations = [
    {
      title: 'North American HQ & Logistics Center',
      address: '750 Logistics Drive, Suite 200, Baltimore, MD 21202',
      phone: '+1 (410) 555-0190',
      email: 'na-sales@aetheris-medical.com',
      hours: 'Mon - Fri: 8:00 AM - 6:00 PM EST'
    },
    {
      title: 'European Logistics & Support Hub',
      address: 'Rotterdam Port Corridor, Block C-4, Rotterdam, Netherlands',
      phone: '+31 10 555-0840',
      email: 'eu-support@aetheris-medical.com',
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM CET'
    },
    {
      title: 'Asia-Pacific Services HQ',
      address: 'Changi Aero-depot Complex, Sector 9, Singapore 819642',
      phone: '+65 6789-0120',
      email: 'apac-logistics@aetheris-medical.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM SGT'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact B2B Support & Sales Engineering | Aetheris</title>
        <meta
          name="description"
          content="Connect with Aetheris Medical Systems. Register equipment sales inquiries, request service agreement pricing, or coordinate emergency biomedical dispatch."
        />
        <link rel="canonical" href="https://aetheris-medical.com/contact" />
      </Helmet>

      <div className="bg-[#F8FAFC] min-h-screen text-[#475569] text-left">
        {/* Sub-page Hero */}
        <section className="relative py-20 bg-[#F0FDF4] border-b border-[#DCFCE7] overflow-hidden bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-primary/10 opacity-70" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Contact Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0F172A]">
              Connect with Aetheris Engineering
            </h1>
            <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
              Coordinate logistics timelines, request equipment certifications, or register service inquiries with our regional offices.
            </p>
          </div>
        </section>

        {/* Contact Split Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Office Locations & Hotlines */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0F172A] font-display">
                  Corporate Offices
                </h2>
                <div className="space-y-6">
                  {officeLocations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-[#DCFCE7] shadow-premium space-y-4 hover:shadow-premium-hover transition-all duration-300"
                    >
                      <h3 className="text-sm font-bold text-[#0F172A]">{loc.title}</h3>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-500">
                        <div className="flex gap-3">
                          <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </div>
                        <div className="flex gap-3">
                          <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{loc.phone}</span>
                        </div>
                        <div className="flex gap-3">
                          <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{loc.email}</span>
                        </div>
                        <div className="flex gap-3 border-t border-slate-100 pt-2 mt-2">
                          <Clock size={16} className="text-slate-405 flex-shrink-0 mt-0.5" />
                          <span>{loc.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Call Box */}
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 text-[#475569] space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="text-red-650" size={24} />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-550">Emergency dispatch hotline</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Certified client hospitals with active comprehensive service plans have direct access to our emergency backup line. Contact the regional center for system crashes or medical gas pressure leaks.
                </p>
                <p className="text-sm font-extrabold text-red-650 font-display">
                  Support: +1 (800) 459-2348 (24/7 Priority Desk)
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form & Map placeholder */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-6 sm:p-8 bg-white border border-[#DCFCE7] rounded-3xl shadow-premium">
                <h2 className="text-2xl font-bold text-[#0F172A] font-display mb-2 font-sans">
                  Submit Corporate Inquiry
                </h2>
                <p className="text-xs text-[#64748B] mb-6">
                  Detail your equipment procurement list, maintenance schedules, or facility layouts, and our team will review the specifications.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.name ? 'border-red-500/80' : 'border-[#DCFCE7]'
                          }`}
                          placeholder="e.g. Dr. Jane Sterling"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                            <ShieldAlert size={10} /> {errors.name.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500/80' : 'border-[#DCFCE7]'
                          }`}
                          placeholder="e.g. jsterling@mountsinai.org"
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-505 mt-1 flex items-center gap-1">
                            <ShieldAlert size={10} /> {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Institution / Organization
                        </label>
                        <input
                          type="text"
                          {...register('company')}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCFCE7] text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="e.g. Mount Sinai Hospital"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Subject Segment
                        </label>
                        <select
                          {...register('segment')}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCFCE7] text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                        >
                          <option value="sales">Equipment Supply & Pricing</option>
                          <option value="service">Maintenance & Calibration SLA</option>
                          <option value="consulting">Facility Planning & Shielding</option>
                          <option value="support">General Technical Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Inquiry Narrative *
                      </label>
                      <textarea
                        rows={5}
                        {...register('message', { required: 'Message is required' })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                          errors.message ? 'border-red-500/80' : 'border-[#DCFCE7]'
                        }`}
                        placeholder="Detail your equipment configurations, volume requirements, or service terms..."
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                          <ShieldAlert size={10} /> {errors.message.message}
                        </span>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      >
                        <Send size={12} /> Submit Engineering Inquiry
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                    <div className="p-3 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] font-display">Inquiry Received Successfully</h3>
                    <p className="text-xs text-slate-500 max-w-sm">
                      Thank you. Your technical request has been logged. An engineering manager in your regional office segment will follow up within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-slate-50 border border-[#DCFCE7] hover:bg-[#F8FAFC] text-xs font-semibold text-[#0F172A] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>

              {/* Map visualization block */}
              <div className="h-[320px] rounded-3xl bg-[#F0FDF4] border border-[#DCFCE7] shadow-premium relative flex items-center justify-center overflow-hidden p-6">
                {/* Mesh background glow */}
                <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative text-center space-y-4 z-10 max-w-sm">
                  <MapPin size={40} className="text-primary mx-auto floating-element" />
                  <h3 className="text-lg font-bold text-[#0F172A]">Central Operations Mapping</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Baltimore, Rotterdam, and Singapore offices link dynamically to support logistics channels in North America, EMEA, and APAC.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
