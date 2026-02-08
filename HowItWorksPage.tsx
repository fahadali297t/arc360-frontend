
import React from 'react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      title: 'Subscribe to a plan',
      desc: 'Choose the design or video plan that best fits your business needs and scale. Our plans are transparent with no hidden fees.',
      details: [
        'Transparent monthly pricing',
        'No long-term contracts',
        'Pause or cancel anytime',
        'Instant access to dashboard'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: 'Submit unlimited design requests',
      desc: 'Use our streamlined dashboard to queue up as many design tasks as you want. Provide details, brand assets, and deadlines for each request.',
      details: [
        'Unlimited request queue',
        'Centralized brand assets',
        'Easy-to-use task manager',
        'Set priority for each task'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Get designs delivered fast',
      desc: 'Our expert team works through your queue, delivering initial drafts in 24-48 hours. Receive high-quality, professional designs tailored to your brand.',
      details: [
        '24-48 hour turnaround',
        'Professional design quality',
        'Tailored to your brief',
        'Direct dashboard notifications'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Request revisions anytime',
      desc: 'Not 100% happy? Request as many tweaks as you need until it is perfect. We iterate quickly based on your feedback.',
      details: [
        'Unlimited revisions',
        'Fast turnaround on tweaks',
        'No extra costs',
        'Ensured satisfaction'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      <section className="pt-40 pb-32 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#213C51]/10 blur-[120px] rounded-full -mr-32"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            The Process
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            How It Works
          </h1>
          <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            A simple, subscription-based approach to professional design. <br />
            Get started in minutes and scale your creative output instantly.
          </p>
        </div>
      </section>

      {/* 2. Step Blocks (Expanded) */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="space-y-32">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-[#213C51] shadow-sm border border-gray-100">
                      {step.icon}
                    </div>
                    <span className="text-7xl font-black text-gray-100">0{idx + 1}</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-[#30364F] mb-8 tracking-tight">{step.title}</h2>
                  <p className="text-xl text-gray-500 leading-relaxed mb-10">
                    {step.desc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-3 text-gray-700 font-bold">
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 bg-gray-50 rounded-[3rem] p-1 border border-gray-100 shadow-inner overflow-hidden aspect-[4/3] group">
                   <img 
                    src="./request.png" 
                    alt={step.title} 
                    className="w-full h-full object-cover rounded-[2.8rem] grayscale transition-all duration-700 group-hover:grayscale-0"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Visual flow icons */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-black text-[#30364F] mb-4">The Creative Lifecycle</h3>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">A peek inside the loop</p>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto space-y-16 md:space-y-0">
            {/* Dashed line connector */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -translate-y-1/2 z-0"></div>
            
            {[
              { label: 'Select Plan', icon: '💳' },
              { label: 'Request', icon: '📝' },
              { label: 'Design', icon: '🎨' },
              { label: 'Refine', icon: '✨' },
              { label: 'Deliver', icon: '📦' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-3xl shadow-lg group-hover:border-[#213C51] transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="mt-4 font-black text-[#30364F] uppercase tracking-widest text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0B0F1A] rounded-[4rem] text-center p-16 lg:p-24 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-tight">
             Ready to scale <br />
             your creative output?
           </h2>
           <button className="bg-[#213C51] text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl border border-white/10 active:scale-95">
             Get Started
           </button>
           <p className="mt-10 text-white/30 text-xs font-bold uppercase tracking-widest">
             First designs delivered in 24-48 hours.
           </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
