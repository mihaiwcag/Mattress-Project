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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default Features;