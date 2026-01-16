
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black font-serif mb-8 leading-tight">
              Get in touch <br />
              <span className="text-pink-500">with our kitchen.</span>
            </h2>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed">
              Have questions about our ingredients or want to cater an event? Drop us a line or visit our store in Chilakaluripeta.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <MapPin className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Location</h4>
                  <p className="text-stone-400">Padmasalipeta, Chilakaluripeta,<br />Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <Clock className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Store Hours</h4>
                  <p className="text-stone-400">Mon - Sun: 10am - 11pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <Phone className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-stone-400">+91 9032440126</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] text-stone-900 shadow-2xl">
            <h3 className="text-3xl font-black mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-stone-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-pink-500" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-stone-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-pink-500" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Subject</label>
                <select className="w-full px-6 py-4 bg-stone-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-pink-500 appearance-none">
                  <option>General Inquiry</option>
                  <option>Catering Request</option>
                  <option>Order Support</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Your Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-stone-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-pink-500 resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              <button className="w-full py-5 bg-pink-500 text-white rounded-2xl font-black text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
