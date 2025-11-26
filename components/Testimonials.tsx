import React from 'react';
import { IconStar } from './Icons';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Downtown",
    text: "I was about to throw away my expensive mattress because of a coffee stain. PureRest saved it! Looks brand new.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Westside",
    text: "My allergies have improved significantly since the cleaning. The technicians were professional and on time.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    location: "Suburbs",
    text: "Fast, efficient, and no chemical smell afterwards. Highly recommend for anyone with pets.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-primary-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 500+ Homes</h2>
          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <IconStar key={s} fill className="w-6 h-6" />)}
          </div>
          <p className="text-primary-200">Average 4.9/5 rating based on local reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Testimonials;