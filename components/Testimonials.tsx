import React from 'react';
import { IconStar, IconShieldCheck } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Jenkins",
      location: "Downtown",
      text: t.testimonials.t1,
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Westside",
      text: t.testimonials.t2,
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "Suburbs",
      text: t.testimonials.t3,
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-primary-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <IconStar key={s} fill className="w-6 h-6" />)}
          </div>
          <p className="text-primary-200">{t.testimonials.rating}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((review, i) => (
            <div key={i} className="bg-primary-800/50 p-8 rounded-2xl border border-primary-700/50 hover:bg-primary-800 transition-colors">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, idx) => <IconStar key={idx} fill className="w-4 h-4" />)}
              </div>
              <p className="text-primary-100 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <div className="font-bold">{review.name}</div>
                <div className="text-sm text-primary-400">{review.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Certifications */}
        <div className="border-t border-primary-800 pt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-3">
             <IconShieldCheck className="w-6 h-6 text-primary-300" />
             <span className="font-semibold">{t.testimonials.cert_insured}</span>
           </div>
           <div className="flex items-center gap-3">
             <IconShieldCheck className="w-6 h-6 text-primary-300" />
             <span className="font-semibold">{t.testimonials.cert_iicrc}</span>
           </div>
           <div className="flex items-center gap-3">
             <IconShieldCheck className="w-6 h-6 text-primary-300" />
             <span className="font-semibold">{t.testimonials.cert_bbb}</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;