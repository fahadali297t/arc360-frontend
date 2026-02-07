
import React from 'react';

const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Submit Request',
      desc: 'Submit requests via our custom dashboard. Your Project Manager will review and assign your task immediately.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Design Phase',
      desc: 'Our specialized designers get to work. You receive initial concepts or complete designs within 24-48 hours.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Review & Deliver',
      desc: 'Give feedback or approve with one click. We deliver source files instantly once you are 100% satisfied.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-32 bg-[#30364F] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-[200px] left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

        <div className="text-center mb-24">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Our Method</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-8">Experience Seamless Workflow</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Managing your design requests shouldn't be a full-time job. Our system makes it easy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-20 xl:gap-32">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 relative z-10 group-hover:bg-[#213C51] group-hover:border-blue-400/30 transition-all duration-500 transform group-hover:-translate-y-2">
                <span className="absolute -top-4 -left-4 text-5xl font-black text-white/5 group-hover:text-blue-400/10 transition-colors">
                  {step.num}
                </span>
                <div className="text-blue-400 group-hover:text-white transition-colors">{step.icon}</div>
              </div>
              <h3 className="text-3xl font-bold mb-6">{step.title}</h3>
              <p className="text-white/60 leading-relaxed px-2 text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
