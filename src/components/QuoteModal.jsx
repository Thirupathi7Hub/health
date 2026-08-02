import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useUI } from '../context/UIContext';
import { products } from '../data/products';

export default function QuoteModal() {
  const { isQuoteModalOpen, prefilledProduct, closeQuoteModal } = useUI();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      product: prefilledProduct || ''
    }
  });

  // Update default value if prefilledProduct changes
  React.useEffect(() => {
    if (prefilledProduct) {
      reset({ product: prefilledProduct });
    }
  }, [prefilledProduct, reset]);

  const onSubmit = (data) => {
    console.log('B2B Quote Request Data:', data);
    setIsSubmitted(true);
    // Simulate submission
    setTimeout(() => {
      reset();
    }, 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeQuoteModal();
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#0F172A] border border-[rgba(255,255,255,0.08)] shadow-2xl text-[#F8FAFC] z-10"
          >
            {/* Header background glow */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#111827] border border-[rgba(255,255,255,0.08)] text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
                      B2B Solutions Portal
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F8FAFC]">
                      Request a Procurement Quote
                    </h3>
                    <p className="text-[#CBD5E1] text-xs sm:text-sm mt-1">
                      Configure your clinical hardware order and receive engineering consultation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#111827] border text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.name ? 'border-red-500/80 ring-1 ring-red-500/30' : 'border-[rgba(255,255,255,0.08)]'
                          }`}
                          placeholder="e.g. Dr. Arthur Pendelton"
                        />
                        {errors.name && (
                          <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <ShieldAlert size={12} /> {errors.name.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                          Corporate / Work Email *
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
                          className={`w-full px-4 py-3 rounded-xl bg-[#111827] border text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500/80 ring-1 ring-red-500/30' : 'border-[rgba(255,255,255,0.08)]'
                          }`}
                          placeholder="e.g. apendelton@stjude.org"
                        />
                        {errors.email && (
                          <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <ShieldAlert size={12} /> {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                          Institution / Organization *
                        </label>
                        <input
                          type="text"
                          {...register('institution', { required: 'Institution is required' })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#111827] border text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.institution ? 'border-red-500/80 ring-1 ring-red-500/30' : 'border-[rgba(255,255,255,0.08)]'
                          }`}
                          placeholder="e.g. St. Jude Healthcare Network"
                        />
                        {errors.institution && (
                          <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <ShieldAlert size={12} /> {errors.institution.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                          Direct Contact Number *
                        </label>
                        <input
                          type="text"
                          {...register('phone', { required: 'Phone is required' })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#111827] border text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                            errors.phone ? 'border-red-500/80 ring-1 ring-red-500/30' : 'border-[rgba(255,255,255,0.08)]'
                          }`}
                          placeholder="e.g. +1 (555) 019-2834"
                        />
                        {errors.phone && (
                          <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <ShieldAlert size={12} /> {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                          Medical Equipment / System
                        </label>
                        <select
                          {...register('product')}
                          className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                        >
                          <option value="">-- General Infrastructure Solutions --</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                          Target Department
                        </label>
                        <select
                          {...register('department')}
                          className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                        >
                          <option value="radiology">Radiology & Imaging</option>
                          <option value="icu">Intensive Care & Critical Care</option>
                          <option value="surgery">Operating Theater & Surgery</option>
                          <option value="pediatrics">Neonatal & Pediatrics</option>
                          <option value="infrastructure">Facility & Maintenance</option>
                          <option value="procurement">Corporate Procurement Office</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1">
                        Estimated Project Timeline & Budget Details
                      </label>
                      <textarea
                        rows={3}
                        {...register('message')}
                        className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Please detail your quantity needs, installation timeline, and utility planning requirements..."
                      />
                    </div>

                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-110"
                      >
                        <Send size={16} /> Submit Corporate Request
                      </motion.button>
                    </div>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="p-4 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-6"
                  >
                    <CheckCircle2 size={56} />
                  </motion.div>
                  <h3 className="text-3xl font-bold font-display text-white">
                    Request Received
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mt-2">
                    Thank you. Your corporate RFQ has been logged. A senior biomedical engineer will contact you shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 px-6 py-3 rounded-xl bg-[#111827] border border-[rgba(255,255,255,0.08)] text-sm font-semibold transition-colors cursor-pointer text-white"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
