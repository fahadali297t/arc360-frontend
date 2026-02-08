
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Subscribe to a plan',
      desc: 'Choose the design or video plan that best fits your business needs and scale.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Submit unlimited design requests',
      desc: 'Use our streamlined dashboard to queue up as many design tasks as you want.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Get designs delivered fast',
      desc: 'Our expert team works through your queue, delivering initial drafts in 24-48 hours.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Request revisions anytime',
      desc: 'Not 100% happy? Request as many tweaks as you need until it is perfect.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 md:mb-24">
          <span className="text-[#213C51] font-bold uppercase tracking-widest text-xs mb-4 block">Process</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#30364F] mb-6">How ARC360 Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            High-quality design doesn't have to be complicated. Our 4-step process ensures you get exactly what you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="p-8 md:p-10 bg-[#0B0F1A] rounded-[2.5rem] border border-white/5 hover:border-white/10 hover:bg-[#213C51] hover:shadow-[0_40px_80px_-20px_rgba(48,54,79,0.4)] transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-sm group-hover:bg-white group-hover:text-[#213C51] transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-base">{step.desc}</p>
              </div>
              {/* Connector for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gray-100 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-3 bg-[#213C51] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl active:scale-95">
            <span>See How It Works</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
