import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Heart, Award, Sparkles, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import operatingSuite from '../assets/operating_suite.png';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Clinical Safety First',
      description: 'We believe equipment reliability directly influences patient outcomes. All calibration is backed by ISO 13485 certifications.'
    },
    {
      icon: Award,
      title: 'Engineering Excellence',
      description: 'Our engineers are OEM-certified. We invest continuously in master calibration phantoms and high-grade diagnostics.'
    },
    {
      icon: ShieldCheck,
      title: 'Regulatory Integrity',
      description: 'Aetheris operates with absolute compliance. All products hold validated FDA 510(k), CE, and local licenses.'
    },
    {
      icon: Sparkles,
      title: 'Responsive Partnerships',
      description: 'Medical settings cannot wait. Our depots ensure critical spare parts arrive on site within 4 hours.'
    }
  ];

  const leaders = [
    {
      name: 'Dr. Alistair Vance',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Imaging Systems at GE Healthcare, Alistair leads Aetheris with 25 years of biomedical engineering experience.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sarah Jenkins, MSc',
      role: 'Chief Technology Officer',
      bio: 'A specialist in medical PACS networks and clinical HL7 systems integration, Sarah coordinates our digital health division.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Jean-Louis Dupont',
      role: 'Director of Global Service & SLAs',
      bio: 'Managing our 450-strong engineering crew, Jean-Louis ensures client-side uptimes stay above our promised 98%.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const certifications = [
    { name: 'ISO 13485:2016', issuer: 'TÜV SÜD', desc: 'Standard for Quality Management Systems in Medical Devices' },
    { name: 'CE Mark MDR 2017/745', issuer: 'European Commission', desc: 'Compliant with Medical Devices Regulations for EU markets' },
    { name: 'FDA 510(k) Clearance', issuer: 'US Food & Drug Administration', desc: 'Registered premarket notifications for clinical distribution' },
    { name: 'IEC 60601-1-2', issuer: 'IEC Certification Board', desc: 'Safety and essential performance standards for medical electrical units' }
  ];

  return (
    <>
      <Helmet>
        <title>About Our Legacy & Systems | Aetheris</title>
        <meta
          name="description"
          content="Learn about Aetheris Medical Systems. Our vision, leadership, ISO/FDA quality certifications, global logistics networks, and corporate historical milestones."
        />
        <link rel="canonical" href="https://aetheris-medical.com/about" />
      </Helmet>

      <div className="bg-[#F8FAFC] min-h-screen text-[#475569]">
        {/* Sub-page Hero */}
        <section className="relative py-20 bg-[#F0FDF4] border-b border-[#DCFCE7] overflow-hidden text-left bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-primary/10 opacity-70" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Corporate Legacy
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0F172A]">
              Pioneering the Standards of Medical Engineering
            </h1>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
              Serving global healthcare providers since 2012 by designing, supplying, and maintaining the systems that save lives.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <ScrollReveal>
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left bg-[#F8FAFC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Story text */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0F172A]">
                  Our Journey Towards Life-Saving Integrity
                </h2>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  Aetheris Medical Systems was founded with a single premise: clinical safety should never be compromised by supply chain inefficiencies or subpar field engineering. What began as a regional specialized ICU ventilator supplier has grown into an international systems partner.
                </p>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  Today, we supply whole diagnostic radiology systems, engineer lead-shielding boundaries, configure clinical DICOM database synchronizations, and keep hospital equipment online under stringent uptime contracts. We operate as an integrated technical partner for healthcare groups globally.
                </p>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-white border border-[#DCFCE7] space-y-2 shadow-premium">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Our Mission</h3>
                    <p className="text-xs text-slate-550 leading-relaxed">
                      To supply hospital systems with highly calibrated equipment, ensuring surgeons and physicians work with absolute diagnostic confidence.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#DCFCE7] space-y-2 shadow-premium">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Our Vision</h3>
                    <p className="text-xs text-slate-550 leading-relaxed">
                      To be the leading global standard in B2B medical equipment supply, certified digital hospital layout engineering, and preventive SLAs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphic image */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/15 rounded-3xl blur-xl opacity-60" />
                <div className="relative rounded-3xl overflow-hidden border border-[#DCFCE7] bg-white p-4 shadow-premium">
                  <img
                    src={operatingSuite}
                    alt="Operating Room Design Suite"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* Corporate Values */}
        <ScrollReveal>
          <section className="py-20 bg-white border-y border-[#DCFCE7] text-left bg-grid-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Ethical Pillars
                </span>
                <h2 className="text-3xl font-display font-extrabold text-[#0F172A] tracking-tight">
                  Our Core B2B Commitments
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-[#DCFCE7] space-y-4 hover:bg-white transition-all shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A]">{v.title}</h3>
                      <p className="text-xs text-slate-550 leading-relaxed">{v.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Leadership */}
        <ScrollReveal>
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left bg-[#F8FAFC]">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                Executive Board
              </span>
              <h2 className="text-3xl font-display font-extrabold text-[#0F172A] tracking-tight">
                Clinical & Engineering Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leaders.map((l, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl bg-white border border-[#DCFCE7] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-64 overflow-hidden bg-slate-100 relative">
                      <img
                        src={l.image}
                        alt={l.name}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-primary transition-colors">{l.name}</h3>
                      <p className="text-xs font-extrabold text-primary uppercase tracking-wider">{l.role}</p>
                      <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">{l.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Certifications and Compliance */}
        <ScrollReveal>
          <section className="py-20 bg-[#F0FDF4] border-y border-[#DCFCE7] text-left bg-grid-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-5 space-y-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                    Compliance Registries
                  </span>
                  <h2 className="text-3xl font-display font-extrabold tracking-tight text-[#0F172A] leading-tight">
                    Global Quality Auditing & Registries
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    We verify calibration accuracy using standards traceable to national laboratories, ensuring every X-ray beam, anesthesia gas mixer, and ICU ventilator meets ISO metrics before handover.
                  </p>
                  <div className="flex gap-4">
                    <div className="px-3 py-1 rounded bg-white border border-[#DCFCE7] text-[10px] font-bold text-[#0F172A] shadow-sm">
                      ISO 13485 CERTIFIED
                    </div>
                    <div className="px-3 py-1 rounded bg-white border border-[#DCFCE7] text-[10px] font-bold text-[#0F172A] shadow-sm">
                      FDA 510(K) COMPLIANT
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {certifications.map((c, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-[#DCFCE7] space-y-2 shadow-premium">
                      <div className="flex justify-between items-start">
                        <h3 className="text-base font-bold text-primary">{c.name}</h3>
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                      <p className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-widest leading-none">Issuer: {c.issuer}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-2">{c.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Global Presence Map block */}
        <ScrollReveal>
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left bg-[#F8FAFC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Logistics Footprint
                </span>
                <h2 className="text-3xl font-display font-extrabold text-[#0F172A] tracking-tight">
                  Global Operations Network
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  With regional logistics centers and parts depots located near international air freight corridors, we support clinical clients quickly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-[#DCFCE7] shadow-sm">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center h-10 w-10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">North American Depot & HQ</h4>
                      <p className="text-xs text-slate-500 mt-0.5">East Coast Logistics Hub, Baltimore, MD</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-[#DCFCE7] shadow-sm">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center h-10 w-10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">European Logistics Center</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Rotterdam Port Industrial Corridor, Netherlands</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-[#DCFCE7] shadow-sm">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex items-center justify-center h-10 w-10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">Asia-Pacific Service Hub</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Changi Aero-depot Complex, Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 h-[380px] rounded-3xl bg-[#F0FDF4] border border-[#DCFCE7] shadow-premium relative flex items-center justify-center overflow-hidden p-6">
                {/* Mesh background glow */}
                <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative text-center space-y-4 z-10 max-w-sm">
                  <Globe size={48} className="text-primary mx-auto floating-element" />
                  <h3 className="text-lg font-bold text-[#0F172A]">Interactive Network Footprint</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Supplying equipment, routing pipelines, and maintaining system calibrations in hospitals across 42 countries worldwide.
                  </p>
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

      </div>
    </>
  );
}
