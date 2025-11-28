
import React, { useState } from 'react';
import { IconPhone, IconMapPin, IconSend } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50/90 rounded-[2.5rem] p-8 md:p-16 shadow-lg border border-slate-100 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
                <p className="text-slate-600 leading-relaxed">
                  {t.contact.subtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
                    <IconPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{t.contact.call}</h4>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+14169992647" className="group flex flex-wrap items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors">
                          <span className="font-bold font-mono tracking-tight">+1 416-999-2647</span>
                          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100 group-hover:bg-primary-50 group-hover:text-primary-700">Mihai (EN)</span>
                      </a>
                      <a href="tel:+40727527147" className="group flex flex-wrap items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors">
                          <span className="font-bold font-mono tracking-tight">+40 727-527-147</span>
                          <span className="text-xs font-medium bg-red-50 text-red-700 px-2 py-0.5 rounded-md border border-red-100 group-hover:bg-primary-50 group-hover:text-primary-700">Alex (RO)</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
                    <IconMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.contact.area}</h4>
                    <p className="text-slate-500">{t.contact.areaDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/50 rounded-3xl border border-green-100">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <IconSend className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.successTitle}</h3>
                  <p className="text-slate-600">{t.contact.successDesc}</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-primary-600 font-semibold hover:underline">
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labelName}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder={t.contact.placeholderName} />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labelPhone}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder={t.contact.placeholderPhone} />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labelService}</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                      <option>{t.contact.opt1}</option>
                      <option>{t.contact.opt2}</option>
                      <option>{t.contact.opt3}</option>
                      <option>{t.contact.opt4}</option>
                      <option>{t.contact.opt5}</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.labelMsg}</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder={t.contact.placeholderMsg}></textarea>
                  </div>
                  <div className="col-span-2">
                    <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === 'submitting' ? t.contact.btnSending : t.contact.btnSubmit}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
