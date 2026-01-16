
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, Category } from '../types';
import { Plus, Info, Search } from 'lucide-react';
import { getFlavorRecommendation } from '../services/geminiService';

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<{ productId: string, reason: string } | null>(null);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAiAsk = async () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    const result = await getFlavorRecommendation(aiPrompt);
    setAiResult(result);
    setAiLoading(false);
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-serif text-stone-900 mb-4">Our Handcrafted Menu</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Explore our selection of premium cold treats. Filter by category or ask our AI Flavor Assistant for a personalized suggestion!</p>
        </div>

        {/* AI Assistant Tool */}
        <div className="mb-12 p-8 bg-stone-50 border border-stone-100 rounded-[2.5rem] shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full">
              <label className="block text-sm font-bold text-stone-500 mb-2 uppercase tracking-widest">AI Flavor Assistant</label>
              <div className="relative">
                <input 
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="e.g. 'I want something sour and refreshing for a hot day'"
                  className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all pr-32"
                />
                <button 
                  onClick={handleAiAsk}
                  disabled={aiLoading}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-colors disabled:opacity-50"
                >
                  {aiLoading ? 'Thinking...' : 'Recommend'}
                </button>
              </div>
            </div>
          </div>
          
          {aiResult && (
            <div className="mt-6 p-4 bg-pink-50 rounded-2xl animate-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <Info className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-pink-900 font-bold mb-1">We recommend: {PRODUCTS.find(p => p.id === aiResult.productId)?.name}</p>
                  <p className="text-pink-700 text-sm">{aiResult.reason}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex p-1 bg-stone-100 rounded-2xl">
            {['All', 'Ice Cream', 'Juice'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-stone-900 shadow-md' 
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`group relative rounded-[2.5rem] p-6 transition-all hover:-translate-y-2 duration-500 ${product.color} border border-transparent hover:border-stone-100 hover:shadow-2xl`}
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-[2rem]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-stone-900 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black text-stone-900">{product.name}</h3>
                <span className="text-xl font-black text-pink-600">${product.price.toFixed(2)}</span>
              </div>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transform group-hover:scale-[1.02] transition-all hover:bg-stone-800"
              >
                <Plus className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-stone-50 rounded-[3rem]">
            <p className="text-stone-400 font-medium text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};
