import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#030712] border-t border-[rgba(255,255,255,0.08)] relative overflow-hidden bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
            Endorsements
          </span>
          <h2 className="text-3xl font-display font-extrabold text-[#F8FAFC] tracking-tight">
            Client Executive Success Stories
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-[#0F172A] border border-[rgba(255,255,255,0.08)] shadow-premium">
          <div className="absolute top-6 left-6 text-slate-800 pointer-events-none">
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
              <SwiperSlide key={t.id} className="text-left select-none">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-[#F8FAFC] font-medium leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#F8FAFC]">{t.author}</h4>
                      <p className="text-xs text-[#CBD5E1] font-semibold">{t.role} — {t.institution}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
