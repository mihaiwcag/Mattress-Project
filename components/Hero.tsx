import React from 'react';
import { IconShieldCheck, IconClock, IconStar } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505693416388-b0346efee535?q=80&w=2000&auto=format&fit=crop"
          alt="Clean bright bedroom with comfortable mattress"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/60" />
      </div>

      {/* Full Width Impressive Banner */}
      <div className="relative z-20 w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-5 mb-8 md:mb-12 border-y border-white/20 shadow-2xl shadow-primary-900/20 backdrop-blur-md transform transition-all hover:scale-[1.005] duration-500">
        <div className="container mx-auto px-6 flex items-center gap-4 md:gap-6">
           <div className="flex-shrink-0 p-2 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.6)] animate-pulse">
              <IconStar className="w-5 h-5 md:w-6 md:h-6 text-slate-900" fill />
           </div>
           <span className="font-bold text-sm md:text-lg tracking-wide leading-snug drop-shadow-md">
             {t.hero.rated}
           </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
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