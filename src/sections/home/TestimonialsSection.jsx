import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#DCFCE7] relative overflow-hidden bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 space-y-4"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Endorsements
          </span>
          <h2 className="text-3xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Client Executive Success Stories
          </h2>
        </motion.div>

        {/* Slider Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-10 rounded-3xl bg-white border border-[#DCFCE7] shadow-premium"
        >
          <div className="absolute top-6 left-6 text-slate-100 pointer-events-none">
            <Quote size={56} className="transform rotate-180 opacity-40" />
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="text-left select-none font-sans">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">{t.author}</h4>
                      <p className="text-xs text-[#475569] font-semibold">{t.role} — {t.institution}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
