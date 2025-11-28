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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // Subtract nav height
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
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-700 transition-colors">
            F
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
            Fresh Sleep
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center bg-primary-700/10 rounded-full p-1 border border-primary-500/20">
             <button 
               onClick={() => setLanguage('en')}
               className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-primary-600 text-white shadow-sm' : 'text-slate-500 hover:text-primary-600'}`}
             >
               EN
             </button>
             <button 
               onClick={() => setLanguage('ro')}
               className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'ro' ? 'bg-primary-600 text-white shadow-sm' : 'text-slate-500 hover:text-primary-600'}`}
             >
               RO
             </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className={`w-6 h-6 ${!isScrolled && 'text-slate-900 lg:text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl lg:hidden p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-600 hover:text-primary-600"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex justify-center gap-4 py-2 border-y border-slate-100">
            <button 
               onClick={() => setLanguage('en')}
               className={`font-bold ${language === 'en' ? 'text-primary-600' : 'text-slate-400'}`}
             >
               English
             </button>
             <span className="text-slate-300">|</span>
             <button 
               onClick={() => setLanguage('ro')}
               className={`font-bold ${language === 'ro' ? 'text-primary-600' : 'text-slate-400'}`}
             >
               Română
             </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 w-full text-center px-5 py-3 bg-primary-600 text-white rounded-xl font-semibold"
          >
            {t.nav.bookAppt}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;