
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Graphics',
      price: '698',
      desc: 'Graphic designs for day-to-day marketing needs.',
      features: ['Unlimited Requests', 'Unlimited Revisions', 'Unlimited Brands', 'No Contract', '24 Hour Turnaround', '3 Active Requests'],
      color: 'bg-white',
      textColor: 'text-gray-900',
      btnColor: 'bg-[#213C51]',
    },
    {
      name: 'Graphics + Video',
      price: '848',
      desc: 'Everything from Graphics + Video edits on a monthly flat fee.',
      features: ['Unlimited Requests', 'Unlimited Revisions', 'Unlimited Brands', 'No Contract', '24 Hour Turnaround', '5 Active Requests', 'Video Editing & Motion Graphics'],
      highlight: true,
      color: 'bg-[#0B0F1A]',
      textColor: 'text-white',
      btnColor: 'bg-white',
      btnTextColor: 'text-[#30364F]',
    },
    {
      name: 'Video',
      price: '698',
      desc: 'Video designs and motion graphics for your content marketing.',
      features: ['Unlimited Requests', 'Unlimited Revisions', 'Unlimited Brands', 'No Contract', '48 Hour Turnaround', '2 Active Requests'],
      color: 'bg-white',
      textColor: 'text-gray-900',
      btnColor: 'bg-[#213C51]',
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-[#213C51] font-bold tracking-widest uppercase text-sm">Flexible Pricing</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#30364F] mt-4 mb-8">Design Without Boundaries</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Get 50% OFF for the first 4 months on all plans. No strings attached, just pure creative power.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 relative">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-40"></div>

          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-[2.5rem] p-12 shadow-2xl transition-transform duration-500 hover:-translate-y-4 ${plan.color} ${plan.textColor} ${plan.highlight ? 'ring-8 ring-blue-400/10 scale-105 z-10' : 'border border-gray-100'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-white px-8 py-2 rounded-full text-sm font-bold shadow-xl tracking-widest uppercase">
                  BEST VALUE
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-6xl font-extrabold font-mono tracking-tighter">${plan.price}</span>
                  <span className={`ml-2 text-base font-medium ${plan.highlight ? 'text-white/70' : 'text-gray-400'}`}>/month</span>
                </div>
                <p className={`text-base leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}>{plan.desc}</p>
              </div>

              <div className="space-y-5 mb-14">
                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Includes:</p>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/10 text-blue-300' : 'bg-blue-50 text-blue-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl hover:shadow-2xl active:scale-95 ${plan.btnColor} ${plan.btnTextColor || 'text-white'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
