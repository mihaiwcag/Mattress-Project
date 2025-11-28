import React from 'react';
import { IconShieldCheck, IconClock, IconStar } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505693416388-b0346efee535?q=80&w=2000&auto=format&fit=crop"
          alt="Clean bright bedroom with comfortable mattress"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent lg:via-white/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary-700 text-xs font-semibold mb-6">
            <IconStar className="w-3.5 h-3.5 fill-primary-600 text-primary-600" fill />
            {t.hero.rated}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-12">
            {t.hero.titleStart} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              {t.hero.titleEnd}
            </span>
          </h1>

          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg text-green-600 flex-shrink-0">
                <IconShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">{t.hero.eco}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-50 rounded-lg text-teal-600 flex-shrink-0">
                <IconShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">{t.hero.no_chem}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600 flex-shrink-0">
                <IconClock className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">{t.hero.dry}</span>
            </div>

            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-50 rounded-lg text-blue-600 flex-shrink-0">
                <IconStar className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">{t.hero.kill_virus}</span>
            </div>
            
             <div className="flex items-center gap-3">
               <div className="p-2 bg-red-50 rounded-lg text-red-600 flex-shrink-0">
                <IconShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">{t.hero.kill_bugs}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;