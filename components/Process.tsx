import React from 'react';

const steps = [
  {
    num: "01",
    title: "UV-C Light",
    desc: "We use high-intensity UV-C light to penetrate the mattress surface, neutralizing the DNA of dust mites, bacteria, and viruses on contact."
  },
  {
    num: "02",
    title: "Dry Steam",
    desc: "Chemical-free dry steam heated to 250°F+ sanitizes the mattress and breaks down dirt without soaking the inner layers."
  },
  {
    num: "03",
    title: "Industrial Vacuum",
    desc: "Our HEPA-filtered industrial vacuum extraction system removes dead skin, mite waste, and debris that standard vacuums miss."
  },
  {
    num: "04",
    title: "Ozone (O3)",
    desc: "Ozone treatment neutralizes biological odors and airborne pathogens, leaving your mattress smelling fresh and crisp."
  },
  {
    num: "05",
    title: "Infrared Heating Chamber",
    desc: "Safe infrared heat penetrates deep to ensure a 100% kill rate for bed bugs and eggs while ensuring the mattress is perfectly dry."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Revolutionary 5-Step System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Mattress Cleaning and Sanitization</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Fresh Sleep Mattress Care’s revolutionary mobile mattress cleaning and sanitization process comes to you! Our green, chemical-free 5-Step process has been proven by a third-party laboratory to eradicate 99.99% of viruses, bacteria, dust mites and other allergens. We also have a 100% kill rate against bed bugs.
            </p>
            <div className="grid gap-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 font-bold text-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative lg:sticky lg:top-32">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2940&auto=format&fit=crop" 
                 alt="Mattress Cleaning and Sanitization"
                 className="w-full h-full object-cover aspect-[3/4] lg:aspect-[4/5]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Effectiveness</span>
                     <span className="text-primary-600 font-bold text-3xl">99.99%</span>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                     <div className="bg-primary-600 h-2 rounded-full w-[99.99%]"></div>
                   </div>
                   <p className="text-xs text-slate-500">Proven removal of viruses, bacteria & allergens</p>
                 </div>
               </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-20 -right-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
             <div className="absolute -z-10 -bottom-20 -left-20 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;