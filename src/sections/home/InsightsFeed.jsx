import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function InsightsFeed() {
  const posts = [
    {
      id: 1,
      title: 'Deep Learning Reconstruction in 3.0T MRI Scans',
      excerpt: 'How convolutional neural networks are reducing image reconstruction times by 50% while improving signal-to-noise ratio in clinical diagnostics.',
      author: 'Biomedical R&D Team',
      date: 'July 24, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=350&q=80'
    },
    {
      id: 2,
      title: 'Laminar Airflow Standards in Operating Suites',
      excerpt: 'Evaluating HVAC air change frequencies, laminar filter ceiling dimensions, and building safety codes to maintain sterile surgical environments.',
      author: 'Clinical Infrastructure Group',
      date: 'June 18, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=350&q=80'
    },
    {
      id: 3,
      title: 'The Real Cost of ICU Ventilation Downtime',
      excerpt: 'A comprehensive cost-benefit analysis comparing preventative telemetry sensors against unexpected critical ventilation breakdowns in pediatric wards.',
      author: 'SLA Support Operations',
      date: 'May 12, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=350&q=80'
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#DCFCE7] relative bg-grid-pattern text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Insights Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Latest Clinical & Engineering Whitepapers
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-[#DCFCE7] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-305 text-left"
            >
              <div>
                {/* Post Cover */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover transition-colors cursor-pointer">
                  Read Article Brief
                  <ArrowRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
