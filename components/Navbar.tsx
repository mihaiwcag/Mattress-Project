import React, { useState, useEffect } from 'react';
import { IconMenu, IconX } from './Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-700 transition-colors">
            F
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
            Fresh Sleep Mattress Care
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30"
          >
            Book Now
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
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 bg-primary-600 text-white rounded-xl font-semibold"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;