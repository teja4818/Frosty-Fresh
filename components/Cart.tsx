
import React from 'react';
import { X, Minus, Plus, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-pink-500" />
            <h2 className="text-2xl font-black text-stone-900">Your Basket</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-xl transition-colors">
            <X className="h-6 w-6 text-stone-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-stone-300" />
              </div>
              <p className="text-stone-400 font-medium">Your basket is empty.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-pink-500 font-bold hover:underline"
              >
                Browse Our Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-stone-900">{item.name}</h3>
                    <p className="text-sm text-stone-500">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-stone-100 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white rounded-md transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white rounded-md transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-black text-stone-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-stone-50 space-y-4">
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Accepted Payments</span>
              <div className="flex gap-3 grayscale opacity-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Apple_Pay_logo.svg" className="h-4" alt="Apple Pay" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-stone-500 font-medium text-sm">Subtotal</span>
                <span className="text-stone-500 font-medium text-sm">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500 font-medium text-sm">Delivery Fee</span>
                <span className="text-stone-500 font-medium text-sm">$2.99</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xl font-black text-stone-900">Total</span>
                <span className="text-2xl font-black text-pink-600">
                  ${(total + 2.99).toFixed(2)}
                </span>
              </div>
            </div>
            
            <button 
              onClick={onCheckout}
              className="w-full py-5 bg-stone-900 text-white rounded-[1.25rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-stone-800 transition-all shadow-xl shadow-stone-200"
            >
              <CreditCard className="h-6 w-6" />
              Pay & Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
