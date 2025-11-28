import React, { useState } from 'react';
import { getStainAdvice } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { IconSparkles, IconShieldCheck } from './Icons';

const StainConsultant: React.FC = () => {
  const { t, language } = useLanguage();
  const [description, setDescription] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setAdvice(null);
    
    const result = await getStainAdvice(description, language);
    
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 text-primary-600">
               <IconSparkles className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.consultant.title}</h2>
            <p className="text-slate-600 text-lg">{t.consultant.subtitle}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div>
                   <textarea 
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                     className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none text-slate-700 placeholder:text-slate-400"
                     placeholder={t.consultant.placeholder}
                   ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading || !description.trim()}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.consultant.analyzing}
                    </>
                  ) : (
                    <>
                      <IconSparkles className="w-5 h-5" />
                      {t.consultant.button}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Result Area */}
            {advice && (
              <div className="bg-primary-50 p-8 md:p-10 border-t border-primary-100 animate-in slide-in-from-top-4">
                 <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <IconShieldCheck className="w-6 h-6 text-primary-600" />
                   {t.consultant.resultTitle}
                 </h3>
                 <div className="prose prose-slate max-w-none">
                    <p className="whitespace-pre-wrap leading-relaxed text-slate-700">{advice}</p>
                 </div>
                 <div className="mt-6 pt-6 border-t border-primary-200/50 text-sm text-slate-500 italic">
                   {t.consultant.disclaimer}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StainConsultant;
