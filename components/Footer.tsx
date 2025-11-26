import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            F
          </div>
          <span className="text-xl font-bold text-slate-900">Fresh Sleep Mattress Care</span>
        </div>
        
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Fresh Sleep Mattress Care. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">Privacy</a>
          <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">Terms</a>
          <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;