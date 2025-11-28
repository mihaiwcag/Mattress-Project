import React, { useState, useEffect } from 'react';
import { IconMenu, IconX } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80; // Subtract nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.reviews, href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-end lg:justify-center">
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-extrabold text-slate-900 hover:text-primary-600 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full p-1 border border-slate-200/50 shadow-sm ml-4">
             <button 
               onClick={() => setLanguage('en')}
               className={`w-8 h-6 rounded-full overflow-hidden border border-slate-200 transition-all ${language === 'en' ? 'ring-2 ring-primary-500 scale-110' : 'opacity-70 hover:opacity-100'}`}
               title="English"
             >
               <img 
                 src="https://flagcdn.com/w40/gb.png" 
                 alt="English" 
                 className="w-full h-full object-cover"
               />
             </button>
             <div className="w-2" />
             <button 
               onClick={() => setLanguage('ro')}
               className={`w-8 h-6 rounded-full overflow-hidden border border-slate-200 transition-all ${language === 'ro' ? 'ring-2 ring-primary-500 scale-110' : 'opacity-70 hover:opacity-100'}`}
               title="Română"
             >
               <img 
                 src="https://flagcdn.com/w40/ro.png" 
                 alt="Română" 
                 className="w-full h-full object-cover"
               />
             </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30 ml-4"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-900 p-2 bg-white/80 rounded-lg backdrop-blur-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IconX className="w-8 h-8" /> : <IconMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl lg:hidden p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-slate-800 hover:text-primary-600 text-center"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex justify-center gap-4 py-4 border-y border-slate-100">
             <button 
               onClick={() => setLanguage('en')}
               className={`flex items-center gap-2 font-bold text-lg ${language === 'en' ? 'text-primary-600' : 'text-slate-400'}`}
             >
               <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 rounded-sm object-cover" />
               English
             </button>
             <span className="text-slate-300">|</span>
             <button 
               onClick={() => setLanguage('ro')}
               className={`flex items-center gap-2 font-bold text-lg ${language === 'ro' ? 'text-primary-600' : 'text-slate-400'}`}
             >
               <img src="https://flagcdn.com/w40/ro.png" alt="Română" className="w-6 h-4 rounded-sm object-cover" />
               Română
             </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full text-center px-5 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-lg"
          >
            {t.nav.bookAppt}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;