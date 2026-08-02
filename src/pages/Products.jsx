import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Download, ChevronRight, Filter } from 'lucide-react';
import { products, categories } from '../data/products';
import { useUI } from '../context/UIContext';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openQuoteModal } = useUI();

  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync category from URL search query parameters (e.g. ?category=imaging)
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      const match = categories.some((c) => c.id === catParam);
      setSelectedCategory(match ? catParam : 'all');
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
    
    // Smoothly scroll back to the top of the product list grid
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Filter products based on category and search query
  const filteredProducts = products.filter((p) => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const searchMatch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const getCategoryName = (id) => {
    if (id === 'all') return 'All Medical Equipment';
    const found = categories.find((c) => c.id === id);
    return found ? found.name : 'Unknown';
  };

  return (
    <>
      <Helmet>
        <title>Premium Medical Equipment & Systems | Aetheris</title>
        <meta
          name="description"
          content="Browse our B2B catalog of premium diagnostic imaging machines, MRI systems, ICU ventilators, anesthesia workstations, and clinical surgical equipment."
        />
        <link rel="canonical" href="https://aetheris-medical.com/products" />
      </Helmet>

      <div className="bg-[#F8FAFC] min-h-screen text-[#475569] text-left">
        {/* Header Section */}
        <section className="py-12 bg-[#F0FDF4] border-b border-[#DCFCE7] relative bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-primary/10 opacity-70" />
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Procurement Center
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0F172A]">
              Clinical Equipment Catalogue
            </h1>
            <p className="text-sm text-[#475569] max-w-xl">
              Browse professional Diagnostic Imaging, Critical Care hardware, Surgical Solutions, and facility Infrastructure.
            </p>
          </motion.div>
        </section>

        {/* Catalog Main Frame */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar: Filter categories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 lg:sticky lg:top-[93px] self-start space-y-6"
            >
              <div className="p-6 bg-white border border-[#DCFCE7] rounded-3xl shadow-premium">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                  <Filter size={14} /> Divisions
                </h3>

                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => handleCategorySelect('all')}
                    className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-[#475569] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    All Systems ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-primary text-white shadow-md'
                          : 'text-[#475569] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      {cat.name} ({products.filter((p) => p.category === cat.id).length})
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Catalog: Search and Products Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-9 space-y-6"
            >
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#DCFCE7] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm shadow-premium transition-all"
                  placeholder="Search products by model, key specifications, or clinical features..."
                />
              </div>

              {/* Status Header */}
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Showing {filteredProducts.length} Systems in {getCategoryName(selectedCategory)}
                </span>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setSelectedProduct(product)}
                      className="group flex flex-col justify-between rounded-3xl bg-white border border-[#DCFCE7] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 cursor-pointer"
                    >
                      <div>
                        {/* Image Frame */}
                        <div className="relative h-56 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-center p-6">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                          />
                        </div>
                        {/* Summary */}
                        <div className="p-6 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                            {getCategoryName(product.category)}
                          </span>
                          <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-primary transition-colors font-sans">
                            {product.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                            {product.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* CTA Panel */}
                      <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-slate-100 pt-4 bg-slate-50/50">
                        <span className="text-xs font-semibold text-primary group-hover:underline">
                          View Specifications
                        </span>
                        <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white border border-[#DCFCE7] rounded-3xl shadow-premium space-y-3">
                  <p className="text-[#64748B] font-medium">No medical equipment matching your parameters was found.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      handleCategorySelect('all');
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-[#DCFCE7] text-xs font-bold text-[#0F172A] transition-all cursor-pointer"
                  >
                    Reset Catalogue Filters
                  </button>
                </div>
              )}
            </motion.div>

          </div>
        </div>

        {/* Detailed Product Modal / Drawer */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-end p-0 overflow-hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
              />

              {/* Right Panel Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 220 }}
                className="relative w-full max-w-4xl h-full bg-white border-l border-[#DCFCE7] shadow-2xl flex flex-col justify-between z-10 text-[#475569]"
              >
                {/* Header panel */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {getCategoryName(selectedProduct.category)}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-display">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#0F172A] cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Inner Content Scroller */}
                <div className="flex-grow p-6 sm:p-8 overflow-y-auto space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left details */}
                    <div className="md:col-span-5 space-y-6 text-left">
                      <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#DCFCE7] flex items-center justify-center h-56">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Applications list */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Clinical Applications</h4>
                        <ul className="space-y-2">
                          {selectedProduct.applications.map((app, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-500 leading-normal">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Downloads list */}
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Technical Library</h4>
                        <div className="space-y-2">
                          {selectedProduct.downloads.map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-[#475569] hover:text-[#0F172A] cursor-default"
                            >
                              <span className="text-xs font-semibold truncate pr-2">{doc.name}</span>
                              <span className="text-[10px] text-slate-550 whitespace-nowrap bg-white px-2 py-0.5 rounded border border-slate-100 flex items-center gap-1 cursor-pointer shadow-sm">
                                <Download size={10} /> {doc.size}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right details */}
                    <div className="md:col-span-7 space-y-6 text-left">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">System Description</h4>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                          {selectedProduct.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Core Features</h4>
                        <ul className="space-y-2">
                          {selectedProduct.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-550 leading-relaxed">
                              <span className="text-green-600 font-bold flex-shrink-0 mt-0.5 font-sans">✓</span>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications Table */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Engineering Specifications</h4>
                        <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                          <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-slate-100">
                              {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                                <tr key={key} className="hover:bg-slate-50/50 transition-colors">
                                  <td className="px-4 py-3 font-semibold text-slate-500 w-1/3 bg-slate-50">{key}</td>
                                  <td className="px-4 py-3 text-[#0F172A] font-medium bg-white">{val}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Products Section */}
                  <div className="pt-8 border-t border-slate-100 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">Related Diagnostic Modalities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {products
                        .filter((p) => p.category === selectedProduct.category && p.id !== selectedProduct.id)
                        .slice(0, 2)
                        .map((relProduct) => (
                          <div
                            key={relProduct.id}
                            onClick={() => setSelectedProduct(relProduct)}
                            className="p-4 rounded-xl border border-slate-100 hover:border-primary bg-slate-50 flex gap-4 cursor-pointer items-center transition-all shadow-sm hover:shadow"
                          >
                            <img
                              src={relProduct.image}
                              alt={relProduct.name}
                              className="w-12 h-12 object-contain bg-white rounded border border-slate-100 p-1"
                            />
                            <div>
                              <h5 className="text-xs font-bold text-[#0F172A] line-clamp-1">{relProduct.name}</h5>
                              <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{relProduct.shortDescription}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Footer panel */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const name = selectedProduct.name;
                      setSelectedProduct(null);
                      openQuoteModal(name);
                    }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md cursor-pointer block transition-colors"
                  >
                    Request Procurement Quote for {selectedProduct.name}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
