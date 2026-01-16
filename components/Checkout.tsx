
import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, CreditCard, Wallet, Smartphone } from 'lucide-react';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onSuccess: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, total, onSuccess }) => {
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [method, setMethod] = useState<'card' | 'wallet' | 'apple'>('card');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess();
        onClose();
        setStep('details');
      }, 3000);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        {step === 'details' && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-stone-900 font-serif">Secure Gateway</h2>
              <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-xl">
                <X className="h-6 w-6 text-stone-400" />
              </button>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-3xl mb-8 flex items-center justify-between">
              <div>
                <p className="text-stone-500 text-xs font-black uppercase tracking-widest mb-1">Total Payment</p>
                <p className="text-3xl font-black text-stone-900">${total.toFixed(2)}</p>
              </div>
              <ShieldCheck className="h-10 w-10 text-pink-500 opacity-20" />
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <button 
                onClick={() => setMethod('card')}
                className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${method === 'card' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-500'}`}
              >
                <CreditCard className="h-5 w-5" />
                <span className="text-[10px] font-bold">Card</span>
              </button>
              <button 
                onClick={() => setMethod('wallet')}
                className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${method === 'wallet' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-500'}`}
              >
                <Wallet className="h-5 w-5" />
                <span className="text-[10px] font-bold">PayPal</span>
              </button>
              <button 
                onClick={() => setMethod('apple')}
                className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${method === 'apple' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-500'}`}
              >
                <Smartphone className="h-5 w-5" />
                <span className="text-[10px] font-bold">Apple Pay</span>
              </button>
            </div>

            <form onSubmit={handlePay} className="space-y-6">
              {method === 'card' ? (
                <div className="space-y-4">
                  <input 
                    required
                    type="text" 
                    placeholder="Cardholder Name" 
                    className="w-full px-6 py-4 bg-stone-100 border-none rounded-2xl outline-none focus:ring-2 focus:ring-pink-500 transition-all font-bold"
                  />
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="0000 0000 0000 0000" 
                      className="w-full px-6 py-4 bg-stone-100 border-none rounded-2xl outline-none focus:ring-2 focus:ring-pink-500 transition-all font-bold tracking-widest"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full px-6 py-4 bg-stone-100 border-none rounded-2xl outline-none focus:ring-2 focus:ring-pink-500 transition-all font-bold"
                    />
                    <input 
                      required
                      type="text" 
                      placeholder="CVC" 
                      className="w-full px-6 py-4 bg-stone-100 border-none rounded-2xl outline-none focus:ring-2 focus:ring-pink-500 transition-all font-bold"
                    />
                  </div>
                </div>
              ) : (
                <div className="py-12 bg-stone-50 rounded-2xl text-center">
                  <p className="text-stone-500 font-bold">Redirecting to {method === 'wallet' ? 'PayPal' : 'Apple'} Secure Portal...</p>
                </div>
              )}

              <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold uppercase tracking-wider justify-center mb-4">
                <Lock className="h-3 w-3" />
                <span>256-Bit SSL Secured</span>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-stone-900 text-white rounded-2xl font-black text-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Authorize & Pay
              </button>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="p-16 text-center">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border-8 border-stone-100 rounded-full"></div>
              <div className="absolute inset-0 border-8 border-pink-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <h3 className="text-3xl font-black text-stone-900 mb-4">Verifying...</h3>
            <p className="text-stone-500">Communicating with your financial institution.</p>
          </div>
        )}

        {step === 'success' && (
          <div className="p-16 text-center animate-in zoom-in-50 duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
              <CheckCircle2 className="h-14 w-14" />
            </div>
            <h3 className="text-3xl font-black text-stone-900 mb-4">Payment Recieved!</h3>
            <p className="text-stone-500 mb-8">Order #FF-{Math.floor(10000 + Math.random() * 90000)} is now being prepared.</p>
            <button onClick={onClose} className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold">Done</button>
          </div>
        )}
      </div>
    </div>
  );
};
