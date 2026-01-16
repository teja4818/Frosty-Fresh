
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Contact } from './components/Contact';
import { Product, CartItem } from './types';
import { ShoppingBasket } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleCheckoutSuccess = () => {
    setCart([]);
    setIsCartOpen(false);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + (cart.length > 0 ? 2.99 : 0);

  return (
    <div className="min-h-screen">
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <Menu onAddToCart={handleAddToCart} />
        <Contact />
      </main>

      <footer className="py-12 bg-stone-900 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl font-black font-serif tracking-tight text-white">
              Frosty<span className="text-pink-500">&</span>Fresh
            </span>
          </div>
          <p className="text-stone-500 text-sm">
            © 2024 Frosty & Fresh Artisanal Kitchen. <br />
            Premium Ice Creams & Cold-Pressed Juices.
          </p>
        </div>
      </footer>

      {/* Floating Cart Button for Mobile */}
      {cart.length > 0 && !isCartOpen && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-pink-500 text-white p-6 rounded-full shadow-2xl shadow-pink-500/40 animate-bounce md:hidden"
        >
          <ShoppingBasket className="h-8 w-8" />
        </button>
      )}

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        total={totalAmount}
        onSuccess={handleCheckoutSuccess}
      />
    </div>
  );
};

export default App;
