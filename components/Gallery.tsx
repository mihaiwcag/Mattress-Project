import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">See The Difference</h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base">
            Our results speak for themselves. Slide through our recent restoration projects to see how effective our deep cleaning process is.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Comparison 1 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=2938&auto=format&fit=crop" 
                 alt="Dirty mattress before cleaning"
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
               />
               <img 
                 src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop" 
                 alt="Clean mattress after cleaning"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               
               <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md group-hover:opacity-0 transition-opacity">
                 Before
               </div>
               <div className="absolute top-4 right-4 bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                 After
               </div>
               
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium text-center opacity-80 group-hover:opacity-0 transition-opacity">Hover to reveal clean</p>
               </div>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-bold text-slate-900 text-lg">Deep Stain Removal</h3>
              <p className="text-slate-500 text-sm">5-year-old memory foam mattress restoration.</p>
            </div>
          </div>

          {/* Comparison 2 */}
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1616627547584-978bc83dc938?q=80&w=2940&auto=format&fit=crop" 
                 alt="Mattress with dust mite allergens"
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
               />
               <img 
                 src="https://images.unsplash.com/photo-1505693416388-95af37d8b5a5?q=80&w=2800&auto=format&fit=crop" 
                 alt="Sanitized fresh mattress"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md group-hover:opacity-0 transition-opacity">
                 Before
               </div>
               <div className="absolute top-4 right-4 bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                 After
               </div>
               
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium text-center opacity-80 group-hover:opacity-0 transition-opacity">Hover to reveal clean</p>
               </div>
            </div>
            <div className="mt-4 px-2">
              <h3 className="font-bold text-slate-900 text-lg">Allergen Sanitization</h3>
              <p className="text-slate-500 text-sm">Full sanitation treatment for severe dust mite allergy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;