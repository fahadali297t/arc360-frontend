
import React, { useState } from 'react';

const PricingTeaser: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 599,
      annualPrice: 499,
      description: 'Perfect for small startups and solo entrepreneurs.',
      features: [
        'Unlimited requests',
        '24-48 hour turnaround',
        '1 active request at a time',
        'Email support'
      ],
      highlight: false,
    },
    {
      name: 'Business',
      monthlyPrice: 899,
      annualPrice: 749,
      description: 'Ideal for growing teams and active marketing departments.',
      features: [
        'Unlimited requests',
        '24 hour turnaround',
        '2 active requests at a time',
        'Priority Slack support',
        'Dedicated Project Manager',
        'Native source files'
      ],
      highlight: true,
    },
    {
      name: 'Pro',
      monthlyPrice: 1299,
      annualPrice: 1099,
      description: 'For power users requiring high-volume creative output.',
      features: [
        'Unlimited requests',
        'Same-day turnaround',
        '4 active requests at a time',
        '24/7 Premium support',
        'Video & Motion graphics',
        'Custom brand styling',
        'Brand identity consulting'
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          {/* <span className="text-[#213C51] font-bold uppercase tracking-widest text-xs mb-4 block">Section 05 — Pricing</span> */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#30364F] mb-10 tracking-tight">Flexible Plans for Every Stage</h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-[#30364F]' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-100 rounded-full p-1 transition-colors outline-none ring-2  ring-[#213C51]"
            >
              <div className={`w-6 h-6 bg-[#213C51] rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-[#30364F]' : 'text-gray-400'}`}>
              Annual <span className="text-green-500 font-black ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full ${
                plan.highlight 
                  ? 'bg-[#30364F] text-white shadow-2xl scale-105 z-10 border-4 border-[#213C51]' 
                  : 'bg-gray-50 text-[#30364F] border border-gray-100 hover:bg-white hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-black px-6 py-2 rounded-full tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-3">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-black tracking-tighter">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className={`ml-2 text-sm font-bold ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>/month</span>
                </div>
                <p className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/10 text-blue-300' : 'bg-[#213C51]/10 text-[#213C51]'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-base font-bold tracking-tight ${plan.highlight ? 'text-white/90' : 'text-[#30364F]'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg ${
                plan.highlight 
                  ? 'bg-white text-[#30364F] hover:bg-gray-100' 
                  : 'bg-[#213C51] text-white hover:bg-[#2a4d69]'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-3 text-[#213C51] font-black text-xl hover:text-[#30364F] transition-colors group">
            <span>View Full Pricing</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
