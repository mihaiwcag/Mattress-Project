import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { IconStar } from './Icons';

interface BeforeAfterSliderProps {
  src: string;
  alt: string;
  type: 'sweat' | 'dust'; // Define specific stain aesthetic
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ src, alt, type }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, []);

  // Aesthetic Logic: Authentic Stain Simulation
  const getBeforeStyles = () => {
    if (type === 'sweat') {
      // Simulates organic biological stains (yellowing/browning) typically found in center
      return {
        imgFilter: 'sepia(0.5) brightness(0.92) contrast(1.05) saturate(1.2)',
        overlayGradient: 'radial-gradient(ellipse at 50% 50%, rgba(140, 100, 40, 0.35) 0%, rgba(140, 100, 40, 0.1) 50%, transparent 80%)'
      };
    } else {
      // Simulates dust, dander, and general graying over time
      return {
        imgFilter: 'grayscale(0.5) brightness(0.85) contrast(1.05) sepia(0.1)',
        overlayGradient: 'radial-gradient(circle at 30% 30%, rgba(80, 80, 80, 0.25) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(80, 80, 80, 0.25) 0%, transparent 50%)'
      };
    }
  };

  const styles = getBeforeStyles();

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-slate-200 group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onClick={handleClick}
    >
      {/* Background Image (After / Clean) */}
      {/* We apply a very subtle warmth to ensure it looks 'natural' not 'fake white' */}
      <img
        src={src}
        alt={`${alt} - After Cleaning`}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: 'brightness(1.03) saturate(1.02)' }}
      />
      
      {/* Label: After */}
      <div className="absolute top-4 right-4 bg-white/90 text-primary-900 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider backdrop-blur-md z-10 shadow-sm">
        After
      </div>

      {/* Foreground Container (Before / Dirty) - Clipped */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none will-change-[width]"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full">
           {/* Base Dirty Image with Filter */}
           <img
            src={src}
            alt={`${alt} - Before Cleaning`}
            className="absolute top-0 left-0 max-w-none h-full object-cover"
            style={{ 
              width: containerRef.current ? containerRef.current.offsetWidth : '100%', 
              filter: styles.imgFilter 
            }} 
          />
          
          {/* Authentic Stain Overlay (Gradient) - Adds the realistic uneven texture */}
          <div 
            className="absolute inset-0 mix-blend-multiply pointer-events-none"
            style={{ 
              width: containerRef.current ? containerRef.current.offsetWidth : '100%',
              background: styles.overlayGradient 
            }}
          />
        </div>

        {/* Label: Before */}
        <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-600 transition-transform transform group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="m9 18-6-6 6-6"/>
            <path d="m15 6 6 6-6 6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">{t.gallery.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t.gallery.title}</h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Comparison 1: Organic/Sweat Stains */}
          <div>
            <BeforeAfterSlider 
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
              alt="Deep Stain Removal"
              type="sweat"
            />
            <div className="mt-6 px-2">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                {t.gallery.c1_title}
                <span className="text-xs font-normal px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full border border-primary-200">
                  Interactive
                </span>
              </h3>
              <p className="text-slate-500 text-sm mt-1">{t.gallery.c1_desc}</p>
            </div>
          </div>

          {/* Comparison 2: Dust/Graying */}
          <div>
            <BeforeAfterSlider 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
              alt="Texture Restoration"
              type="dust"
            />
             <div className="mt-6 px-2">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                {t.gallery.c2_title}
                <span className="text-xs font-normal px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full border border-primary-200">
                  Interactive
                </span>
              </h3>
              <p className="text-slate-500 text-sm mt-1">{t.gallery.c2_desc}</p>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-primary-900/10 border border-white/10">
           <div className="p-4 bg-white/10 rounded-full backdrop-blur-md flex-shrink-0">
             <IconStar className="w-8 h-8 text-yellow-300" fill />
           </div>
           <div className="text-center md:text-left flex-1">
             <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.gallery.guarantee_title}</h3>
             <p className="text-primary-100 text-sm md:text-base leading-relaxed opacity-90">{t.gallery.guarantee_desc}</p>
           </div>
           <a 
             href="#contact" 
             onClick={handleScrollToContact}
             className="px-8 py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
           >
              {t.nav.book}
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;