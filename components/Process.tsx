import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.process.s1_title,
      desc: t.process.s1_desc
    },
    {
      num: "02",
      title: t.process.s2_title,
      desc: t.process.s2_desc
    },
    {
      num: "03",
      title: t.process.s3_title,
      desc: t.process.s3_desc
    },
    {
      num: "04",
      title: t.process.s4_title,
      desc: t.process.s4_desc
    },
    {
      num: "05",
      title: t.process.s5_title,
      desc: t.process.s5_desc
    }
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">{t.process.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">{t.process.title}</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t.process.description}
            </p>
            <div className="grid gap-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 font-bold text-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative lg:sticky lg:top-32">
             {/* Video Container */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 aspect-video group">
               <iframe 
                 width="100%" 
                 height="100%" 
                 src="https://www.youtube.com/embed/crKRSH2Xtmc?rel=0" 
                 title="Mattress Cleaning Process" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
                 className="absolute inset-0 w-full h-full"
               ></iframe>
             </div>

             {/* Stats Box - Moved below video */}
             <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative z-10">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">{t.process.effectiveness}</span>
                 <span className="text-primary-600 font-bold text-3xl">99.99%</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                 <div className="bg-primary-600 h-2 rounded-full w-[99.99%]"></div>
               </div>
               <p className="text-xs text-slate-500">{t.process.proven}</p>
             </div>

             {/* Decorative blobs */}
             <div className="absolute -z-10 top-20 -right-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
             <div className="absolute -z-10 -bottom-20 -left-20 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;