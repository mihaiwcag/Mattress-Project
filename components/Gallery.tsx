import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">{t.gallery.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t.gallery.title}</h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Comparison 1 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group cursor-ew-resize">
               {/* After Image: Clean (Bottom Layer) */}
               <img 
                 src="https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=2000&auto=format&fit=crop" 
                 alt="Clean white mattress after cleaning"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               
               {/* Before Image: Dirty (Top Layer) - Fades out on hover */}
               <img 
                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
                 alt="Dirty stained mattress fabric before cleaning"
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
               />
               
               <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md group-hover:opacity-0 transition-opacity duration-700">
                 {t.gallery.before}
               </div>
               <div className="absolute top-4 right-4 bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 {t.gallery.after}
               </div>
               
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                  <p className="text-white font-medium text-center opacity-80 group-hover:opacity-0 transition-opacity duration-700">{t.gallery.hover}</p>
               </div>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-bold text-slate-900 text-lg">{t.gallery.c1_title}</h3>
              <p className="text-slate-500 text-sm">{t.gallery.c1_desc}</p>
            </div>
          </div>

          {/* Comparison 2 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group cursor-ew-resize">
               {/* After Image: Clean (Bottom Layer) */}
               <img 
                 src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop" 
                 alt="Sanitized fresh mattress fabric"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               
               {/* Before Image: Dirty (Top Layer) */}
               <img 
                 src="https://images.unsplash.com/photo-1603252109303-27514432cd44?q=80&w=2000&auto=format&fit=crop" 
                 alt="Dusty mattress fabric before sanitization"
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
               />
               
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md group-hover:opacity-0 transition-opacity duration-700">
                 {t.gallery.before}
               </div>
               <div className="absolute top-4 right-4 bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 {t.gallery.after}
               </div>
               
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                  <p className="text-white font-medium text-center opacity-80 group-hover:opacity-0 transition-opacity duration-700">{t.gallery.hover}</p>
               </div>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-bold text-slate-900 text-lg">{t.gallery.c2_title}</h3>
              <p className="text-slate-500 text-sm">{t.gallery.c2_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;