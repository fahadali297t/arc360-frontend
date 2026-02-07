
import React, { useState } from 'react';

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the subscription work?',
      a: 'ARC360 operates on a flat monthly fee. Once subscribed, you get access to our dashboard where you can add as many design requests as you want. We process them one at a time (or more depending on your plan) in the order they were received.'
    },
    {
      q: 'Is there a limit to how many requests I can make?',
      a: 'No. You can queue up as many requests as you like. We will work through them sequentially. Once a request is approved, we move straight to the next one in your queue.'
    },
    {
      q: 'How fast will I receive my designs?',
      a: 'On average, most requests are completed in 24 to 48 hours. Complex projects like multi-page website mockups or long video edits may take longer, but we provide regular updates on progress.'
    },
    {
      q: 'What determines the speed of delivery?',
      a: 'Delivery speed is determined by the complexity of the task and the quality of the brief. Clear, concise instructions help our designers work faster and reduce the need for revisions.'
    },
    {
      q: 'Are revisions really unlimited?',
      a: 'Yes. We will keep refining the design until you are 100% satisfied with the result. You can request a revision with a single click in the dashboard.'
    },
    {
      q: 'How long do revisions take?',
      a: 'Revisions are typically prioritized and delivered within 24 hours of the request.'
    },
    {
      q: 'How do I communicate with my designer?',
      a: 'All communication happens through our custom dashboard. This keeps feedback tied directly to specific requests. Business and Pro plans also include a dedicated Slack channel for real-time collaboration.'
    },
    {
      q: 'Can I have a call with the design team?',
      a: 'Business and Pro plans include monthly strategy calls with your dedicated Project Manager. For day-to-day requests, text-based communication in the dashboard is the fastest way to get results.'
    },
    {
      q: 'Who owns the final designs?',
      a: 'You do. Once a request is completed and approved, all intellectual property rights for that work belong entirely to you. We just keep the lights on.'
    },
    {
      q: 'Do I get the source files?',
      a: 'Absolutely. We provide native source files (Figma, AI, PSD, etc.) for every completed project as part of your subscription.'
    },
    {
      q: 'Can I cancel or pause my subscription?',
      a: 'Yes, you can pause or cancel your subscription at any time via your dashboard settings. There are no long-term contracts or cancellation fees.'
    },
    {
      q: 'What happens if I pause my account?',
      a: 'If you pause your account, your remaining days in the billing cycle are saved. You can reactivate whenever you have more design work, and those days will be applied to your next month.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="pt-40 pb-32 bg-[#30364F] relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#213C51]/10 blur-[120px] rounded-full -mr-32"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Help Center
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ARC360's <br className="hidden md:block" />
            unlimited creative workflow.
          </p>
        </div>
      </section>

      {/* 2. Simplified FAQ List */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  openIndex === idx 
                    ? 'bg-white border-blue-400 shadow-xl' 
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-8 md:p-10 flex justify-between items-center group"
                >
                  <span className={`text-xl font-bold tracking-tight transition-colors pr-8 ${openIndex === idx ? 'text-[#30364F]' : 'text-gray-500 group-hover:text-[#30364F]'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${
                    openIndex === idx 
                      ? 'bg-[#30364F] text-white rotate-180 border-transparent shadow-lg' 
                      : 'bg-gray-50 text-gray-400 border-gray-100'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 md:px-10 pb-10 text-gray-500 text-lg leading-relaxed border-t border-gray-100/50 pt-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto bg-[#30364F] rounded-[4rem] text-center p-16 lg:p-24 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
           <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-tight tracking-tight">
             Still have questions?
           </h2>
           <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto">
             Our team is always happy to chat about your specific design needs.
           </p>
           <button 
             className="bg-[#213C51] text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl border border-white/10 active:scale-95"
           >
             Contact Support
           </button>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
