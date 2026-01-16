
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-bold mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Voted Best Local Treats 2024</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-serif text-stone-900 leading-[1.1] mb-8">
              Cold Delights <br />
              <span className="text-pink-500">Freshly Pressed.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the perfect fusion of organic cold-pressed juices and hand-churned artisanal ice cream. Freshly made every single day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#menu" 
                onClick={scrollToMenu}
                className="w-full sm:w-auto px-10 py-5 bg-stone-900 text-white rounded-[1.5rem] font-black text-lg hover:bg-stone-800 transition-all transform hover:scale-105 flex items-center justify-center gap-3 group shadow-2xl shadow-stone-300"
              >
                Order Online
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-200/30 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4 float-animation">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-3xl object-cover h-64 w-full shadow-2xl border-4 border-white" 
                  alt="Artisanal Vanilla Ice Cream" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-3xl object-cover h-48 w-full shadow-2xl border-4 border-white" 
                  alt="Fresh Green Cold-Pressed Juice" 
                />
              </div>
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-3xl object-cover h-48 w-full shadow-2xl border-4 border-white" 
                  alt="Vibrant Orange Citrus Juice" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-3xl object-cover h-64 w-full shadow-2xl border-4 border-white" 
                  alt="Midnight Dark Chocolate Ice Cream" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
