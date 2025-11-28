import React from 'react';
import { IconSparkles, IconDroplets, IconShieldCheck, IconStar } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.features.f1_title,
      description: t.features.f1_desc,
      icon: <IconDroplets className="w-6 h-6 text-white" />
    },
    {
      title: t.features.f2_title,
      description: t.features.f2_desc,
      icon: <IconShieldCheck className="w-6 h-6 text-white" />
    },
    {
      title: t.features.f3_title,
      description: t.features.f3_desc,
      icon: <IconSparkles className="w-6 h-6 text-white" />
    },
    {
      title: t.features.f4_title,
      description: t.features.f4_desc,
      icon: <IconStar className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.features.title}</h2>
          <p className="text-slate-500 text-lg">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-primary-50 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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
    </section>
  );
};

export default Features;