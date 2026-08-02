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
        <title>Premium Medical Equipment & Clinical Systems | Aetheris</title>
        <meta
          name="description"
          content="Browse our B2B catalog of premium diagnostic imaging machines, MRI systems, ICU ventilators, anesthesia workstations, and clinical surgical equipment."
        />
        <link rel="canonical" href="https://aetheris-medical.com/products" />
      </Helmet>

      <div className="bg-[#030712] min-h-screen text-[#F8FAFC] text-left">
        {/* Header Section */}
        <section className="py-12 bg-[#0F172A] border-b border-[rgba(255,255,255,0.08)] relative bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-primary/10 opacity-70" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-accent border border-primary/30">
              Procurement Center
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              Clinical Equipment Catalogue
            </h1>
            <p className="text-sm text-[#CBD5E1] max-w-xl">
              Browse professional Diagnostic Imaging, Critical Care hardware, Surgical Solutions, and facility Infrastructure.
            </p>
          </div>
        </section>

        {/* Catalog Main Frame */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar: Filter categories */}
            <div className="lg:col-span-3 lg:sticky lg:top-[93px] self-start space-y-6">
              <div className="p-6 bg-[#0F172A] border border-[rgba(255,255,255,0.08)] rounded-3xl shadow-premium">
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                  <Filter size={14} /> Divisions
                </h3>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => handleCategorySelect('all')}
                    className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-slate-950 shadow-md'
                        : 'text-[#CBD5E1] hover:bg-[#111827]'
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
                          ? 'bg-primary text-slate-950 shadow-md'
                          : 'text-[#CBD5E1] hover:bg-[#111827]'
                      }`}
                    >
                      {cat.name} ({products.filter((p) => p.category === cat.id).length})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Catalog: Search and Products Grid */}
            <div className="lg:col-span-9 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#111827] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm shadow-premium transition-all"
                  placeholder="Search products by model, key specifications, or clinical features..."
                />
              </div>

              {/* Status Header */}
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Showing {filteredProducts.length} Systems in {getCategoryName(selectedCategory)}
                </span>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="group flex flex-col justify-between rounded-3xl bg-[#111827] border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 cursor-pointer"
                    >
                      <div>
                        {/* Image Frame */}
                        <div className="relative h-56 bg-[#0F172A] border-b border-slate-900 flex items-center justify-center p-6">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                          />
                        </div>
                        {/* Summary */}
                        <div className="p-6 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                            {getCategoryName(product.category)}
                          </span>
                          <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                            {product.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* CTA Panel */}
                      <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-slate-800 pt-4 bg-[#0F172A]/50">
                        <span className="text-xs font-semibold text-accent group-hover:underline">
                          View Specifications
                        </span>
                        <ChevronRight size={16} className="text-slate-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-[#0F172A] border border-[rgba(255,255,255,0.08)] rounded-3xl shadow-premium space-y-3">
                  <p className="text-slate-400 font-medium">No medical equipment matching your parameters was found.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      handleCategorySelect('all');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#111827] hover:bg-slate-900 border border-[rgba(255,255,255,0.08)] text-xs font-bold text-white transition-all cursor-pointer"
                  >
                    Reset Catalogue Filters
                  </button>
                </div>
              )}
            </div>

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
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Right Panel Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 220 }}
                className="relative w-full max-w-4xl h-full bg-[#0F172A] border-l border-[rgba(255,255,255,0.08)] shadow-2xl flex flex-col justify-between z-10 text-[#F8FAFC]"
              >
                {/* Header panel */}
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      {getCategoryName(selectedProduct.category)}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-display">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Inner Content Scroller */}
                <div className="flex-grow p-6 sm:p-8 overflow-y-auto space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left details (Image + Downloads + Applications) */}
                    <div className="md:col-span-5 space-y-6 text-left">
                      <div className="p-6 rounded-2xl bg-[#111827] border border-[rgba(255,255,255,0.08)] flex items-center justify-center h-56">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Applications list */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Clinical Applications</h4>
                        <ul className="space-y-2">
                          {selectedProduct.applications.map((app, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Downloads list */}
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Technical Library</h4>
                        <div className="space-y-2">
                          {selectedProduct.downloads.map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 rounded-xl bg-[#111827] border border-slate-800 text-[#CBD5E1] hover:text-white cursor-default"
                            >
                              <span className="text-xs font-semibold truncate pr-2">{doc.name}</span>
                              <span className="text-[10px] text-slate-400 whitespace-nowrap bg-[#0F172A] px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1 cursor-pointer">
                                <Download size={10} /> {doc.size}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right details (Description + Features + Specifications Table) */}
                    <div className="md:col-span-7 space-y-6 text-left">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">System Description</h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {selectedProduct.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Core Features</h4>
                        <ul className="space-y-2">
                          {selectedProduct.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                              <span className="text-green-400 font-bold flex-shrink-0 mt-0.5 font-sans">✓</span>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications Table */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">Engineering Specifications</h4>
                        <div className="border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                          <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-slate-850">
                              {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                                <tr key={key} className="hover:bg-slate-900/40 transition-colors">
                                  <td className="px-4 py-3 font-semibold text-slate-400 w-1/3 bg-[#111827]">{key}</td>
                                  <td className="px-4 py-3 text-[#F8FAFC] font-medium bg-[#0F172A]">{val}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Products Section */}
                  <div className="pt-8 border-t border-slate-800 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4">Related Diagnostic Modalities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {products
                        .filter((p) => p.category === selectedProduct.category && p.id !== selectedProduct.id)
                        .slice(0, 2)
                        .map((relProduct) => (
                          <div
                            key={relProduct.id}
                            onClick={() => setSelectedProduct(relProduct)}
                            className="p-4 rounded-xl border border-slate-800 hover:border-primary bg-[#111827] flex gap-4 cursor-pointer items-center transition-all"
                          >
                            <img
                              src={relProduct.image}
                              alt={relProduct.name}
                              className="w-12 h-12 object-contain bg-[#0F172A] rounded border border-slate-800 p-1"
                            />
                            <div>
                              <h5 className="text-xs font-bold text-[#F8FAFC] line-clamp-1">{relProduct.name}</h5>
                              <p className="text-[10px] text-slate-450 mt-0.5 line-clamp-1">{relProduct.shortDescription}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Footer panel */}
                <div className="p-6 bg-[#111827] border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const name = selectedProduct.name;
                      setSelectedProduct(null);
                      openQuoteModal(name);
                    }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider text-center shadow-md cursor-pointer block transition-colors"
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
