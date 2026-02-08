
import React, { useState } from 'react';

interface ContactPageProps {
  navigate: (path: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your request has been received.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="pt-40 pb-32 bg-[#0B0F1A] relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#213C51]/10 blur-[120px] rounded-full -mr-32"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Connect With Us
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Book a Demo or <br className="hidden md:block" /> Talk to Us
          </h1>
          <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Ready to scale your design output? Fill out the form below and <br className="hidden md:block" /> our team will be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Simple Form Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative">
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#213C51] rounded-2xl flex items-center justify-center text-white shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div> */}
            
            <form onSubmit={handleSubmit} className="space-y-8 mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-black text-[#30364F] uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-6 py-5 rounded-2xl border border-gray-200 focus:border-[#213C51] focus:ring-4 focus:ring-[#213C51]/5 transition-all outline-none bg-gray-50/50 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-black text-[#30364F] uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-6 py-5 rounded-2xl border border-gray-200 focus:border-[#213C51] focus:ring-4 focus:ring-[#213C51]/5 transition-all outline-none bg-gray-50/50 font-bold"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-black text-[#30364F] uppercase tracking-widest ml-1">Company</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full px-6 py-5 rounded-2xl border border-gray-100 focus:border-[#213C51] focus:ring-4 focus:ring-[#213C51]/5 transition-all outline-none bg-gray-50/50 font-bold"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-black text-[#30364F] uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="How can we help your business?"
                  className="w-full px-6 py-5 rounded-2xl border border-gray-100 focus:border-[#213C51] focus:ring-4 focus:ring-[#213C51]/5 transition-all outline-none bg-gray-50/50 resize-none font-bold"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#213C51] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. WhatsApp CTA (Optional) */}
      <section className="pb-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="bg-green-50 rounded-[2.5rem] p-10 border border-green-100 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="text-left">
              <h3 className="text-2xl font-black text-[#30364F] mb-2 tracking-tight">Need a quick answer?</h3>
              <p className="text-gray-500 font-bold">Chat with our team directly on WhatsApp for instant support.</p>
            </div>
            <a 
              href="https://wa.me/#" 
              className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#20bd5a] transition-all flex items-center space-x-3 shadow-xl active:scale-95 whitespace-nowrap"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Trust Line */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs">
            ARC360 – Powered by Imperium Global Media
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
