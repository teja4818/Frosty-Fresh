
import React, { useState } from 'react';
import { ShoppingBasket, Menu, X, IceCream } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-pink-100 rounded-xl">
              <IceCream className="text-pink-600 h-6 w-6" />
            </div>
            <span className="text-2xl font-black font-serif tracking-tight text-stone-900">
              Frosty<span className="text-pink-500">&</span>Fresh
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Home</a>
            <a href="#menu" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Menu</a>
            <a href="#contact" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Contact</a>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 text-stone-600 hover:text-stone-900 transition-all flex items-center gap-2 group border-none bg-none outline-none ring-0 shadow-none appearance-none"
              style={{ backgroundColor: 'transparent' }}
            >
              <ShoppingBasket className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onCartClick} 
              className="relative p-2 text-stone-600 bg-transparent border-none outline-none"
            >
              <ShoppingBasket className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 p-2 outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-stone-600">Home</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-stone-600">Menu</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-stone-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
