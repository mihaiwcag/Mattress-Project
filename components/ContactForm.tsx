import React, { useState } from 'react';
import { IconPhone, IconMapPin, IconSend } from './Icons';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 shadow-lg border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Refresh?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Book your slot today or get a free estimate. We usually respond within 15 minutes during business hours.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
                    <IconPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-slate-500">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-primary-600">
                    <IconMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Service Area</h4>
                    <p className="text-slate-500">Greater Metropolitan Area & Suburbs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-green-100">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <IconSend className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600">We'll be in touch shortly to confirm your appointment details.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-primary-600 font-semibold hover:underline">
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mattress Size / Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                      <option>King Size Deep Clean</option>
                      <option>Queen Size Deep Clean</option>
                      <option>Full/Twin Size Deep Clean</option>
                      <option>Stain Removal Only</option>
                      <option>Other (Describe below)</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Any specific stains or concerns?"></textarea>
                  </div>
                  <div className="col-span-2">
                    <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === 'submitting' ? 'Sending...' : 'Request Free Quote'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;