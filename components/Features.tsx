import React, { useState } from 'react';
import { IconSparkles, IconDroplets, IconShieldCheck, IconStar, IconX } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface Feature {
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      title: t.features.f1_title,
      description: t.features.f1_desc,
      detail: t.features.f1_detail,
      icon: <IconDroplets className="w-6 h-6 text-white" />
    },
    {
      title: t.features.f2_title,
      description: t.features.f2_desc,
      detail: t.features.f2_detail,
      icon: <IconShieldCheck className="w-6 h-6 text-white" />
    },
    {
      title: t.features.f3_title,
      description: t.features.f3_desc,
      detail: t.features.f3_detail,
      icon: <IconSparkles className="w-6 h-6 text-white" />
    },
    {
      title: t.features.f4_title,
      description: t.features.f4_desc,
      detail: t.features.f4_detail,
      icon: <IconStar className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.features.title}</h2>
          <p className="text-slate-500 text-lg">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveFeature(feature)}
              className="group p-8 rounded-3xl bg-slate-50 hover:bg-primary-50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary-100"
            >
              <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
              <span className="text-sm font-bold text-primary-600 group-hover:underline">
                {t.language === 'ro' ? 'Află mai multe →' : 'Read more →'}
              </span>
            </div>
          ))}
        </div>

        {/* Business Info / Extra Services */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <IconShieldCheck className="w-6 h-6 text-primary-400" />
                  {t.features.biz_title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                      <h4 className="font-bold text-lg mb-2 text-primary-200">{t.features.biz_comm_title}</h4>
                      <p className="text-sm text-slate-300">{t.features.biz_comm_desc}</p>
                   </div>
                   <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                      <h4 className="font-bold text-lg mb-2 text-primary-200">{t.features.biz_emerg_title}</h4>
                      <p className="text-sm text-slate-300">{t.features.biz_emerg_desc}</p>
                   </div>
                </div>
             </div>
             <div className="hidden lg:block w-px h-32 bg-white/10"></div>
             <div>
               <a href="#contact" className="inline-flex px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-primary-900/50">
                  {t.nav.book}
               </a>
             </div>
           </div>
           
           {/* Decor */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-primary-600 rounded-full blur-3xl opacity-20"></div>
           <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Feature Detail Modal */}
      {activeFeature && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveFeature(null)}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveFeature(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <IconX className="w-5 h-5 text-slate-600" />
            </button>
            
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
              {activeFeature.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{activeFeature.title}</h3>
            <div className="prose prose-slate">
               <p className="text-slate-600 leading-relaxed text-lg">
                 {activeFeature.detail}
               </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setActiveFeature(null)}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
              >
                {t.language === 'ro' ? 'Închide' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;