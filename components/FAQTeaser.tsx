
import React, { useState } from 'react';

const FAQTeaser: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does unlimited design work?',
      a: 'Once subscribed, you can add as many design requests to your queue as you like, and your dedicated designer will work through them one by one. As soon as a request is completed, we move straight to the next one in your queue.',
    },
    {
      q: 'How fast is turnaround?',
      a: 'On average, you will receive your designs in just 24-48 hours. Simpler tasks like social media posts are often delivered even faster, while more complex projects like multi-page websites might take a few days.',
    },
    {
      q: 'Is there a contract?',
      a: 'Absolutely not. ARC360 is a month-to-month subscription service. You can pause or cancel your plan at any time with a single click in your dashboard. No hidden fees, no long-term commitments.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#30364F] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#213C51] rounded-full blur-[100px] opacity-40 -ml-20 -mb-20"></div>

      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          {/* <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 block">Section 06 — Support</span> */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Common Questions</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything you need to know about how ARC360 transforms your creative workflow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-[2rem] overflow-hidden transition-all duration-500 border ${
                openIdx === idx 
                  ? 'bg-white/10 border-white/20 shadow-2xl' 
                  : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-8 md:p-10 flex justify-between items-center group"
              >
                <span className={`text-xl md:text-2xl font-bold transition-colors ${openIdx === idx ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  openIdx === idx 
                    ? 'bg-white text-[#30364F] rotate-180 shadow-lg' 
                    : 'bg-white/10 text-white'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 md:px-10 pb-10 text-white/60 text-lg leading-relaxed border-t border-white/5 pt-8">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 font-medium mb-6">Still have questions?</p>
          <button className="text-white font-black border-b-2 border-white/20 hover:border-blue-400 pb-2 transition-all text-lg inline-flex items-center space-x-2 group">
            <span>Read our full documentation</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;
