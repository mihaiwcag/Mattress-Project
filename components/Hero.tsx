import React from 'react';
import { IconShieldCheck, IconClock, IconStar } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2940&auto=format&fit=crop"
          alt="Clean bright bedroom with comfortable mattress"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent lg:via-white/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <IconStar className="w-3.5 h-3.5 fill-primary-600 text-primary-600" fill />
            #1 Rated Mattress Cleaning Service
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Fresh Sleep Mattress Care. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Wake Up Refreshed.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            Remove 99.9% of dust mites, allergens, and stubborn stains with our eco-friendly deep steam technology. Restore your mattress to showroom condition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg transition-all shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2">
              Get Your Free Quote
            </a>
            <a href="#process" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
              How It Works
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <IconShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-slate-700">100% Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <IconClock className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-slate-700">Dry in 2-4 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;