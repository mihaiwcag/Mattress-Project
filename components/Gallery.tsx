import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { IconStar } from './Icons';

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Comparison 1: Patterned Mattress - Deep Stains */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group cursor-ew-resize">
               {/* After Image: Clean (Bottom Layer) */}
               {/* We use the same image but without filters for the clean look */}
               <img 
                 src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop" 
                 alt="Clean white patterned mattress"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               
               {/* Before Image: Dirty (Top Layer) - Fades out on hover */}
               {/* We use CSS filters to simulate heavy yellowing and age on the exact same texture */}
               <img 
                 src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop" 
                 alt="Yellowed and stained mattress fabric before cleaning"
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                 style={{ filter: 'sepia(0.8) contrast(1.1) brightness(0.9) saturate(1.5)' }} 
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

          {/* Comparison 2: Fabric Texture & Graying */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group cursor-ew-resize">
               {/* After Image: Clean (Bottom Layer) */}
               <img 
                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
                 alt="Sanitized fresh mattress fabric close up"
                 className="absolute inset-0 w-full h-full object-cover"
                 style={{ filter: 'brightness(1.05)' }}
               />
               
               {/* Before Image: Dirty (Top Layer) */}
               <img 
                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
                 alt="Dusty beige mattress fabric before sanitization"
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                 style={{ filter: 'sepia(0.3) brightness(0.85) contrast(0.9) grayscale(0.2)' }}
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

        {/* Guarantee Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-primary-900/10">
           <div className="p-4 bg-white/10 rounded-full backdrop-blur-md">
             <IconStar className="w-8 h-8 text-yellow-300" fill />
           </div>
           <div className="text-center md:text-left flex-1">
             <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.gallery.guarantee_title}</h3>
             <p className="text-primary-100 text-sm md:text-base">{t.gallery.guarantee_desc}</p>
           </div>
           <a href="#contact" className="px-6 py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-colors">
              {t.nav.book}
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;