
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What does "unlimited graphic design" and "unlimited video design" mean?',
      a: 'It means you can submit as many requests as you want to your queue. We work through them one at a time (or more depending on your plan). As soon as one is done, we start the next.',
    },
    {
      q: 'Who is DesignFlow for?',
      a: 'Marketing agencies, small businesses, startups, and creative teams that need consistent, high-quality creative work without the overhead of hiring in-house.',
    },
    {
      q: 'Which countries does DesignFlow serve?',
      a: 'We serve clients globally. Our team is distributed across time zones to ensure maximum coverage and fast turnaround.',
    },
    {
      q: 'How do I submit and manage my requests?',
      a: 'You will get access to our custom dashboard where you can log requests, share assets, and provide feedback directly on the designs.',
    },
    {
      q: 'Can you create print-ready designs?',
      a: 'Yes, we handle everything from digital social posts to high-resolution print banners, billboards, and brochures.',
    },
  ];

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#30364F] mb-6">FAQs</h2>
          <p className="text-gray-500 text-lg">Common questions about our unlimited creative services.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[1.5rem] overflow-hidden shadow-sm border transition-all duration-500 ${
                openIdx === idx ? 'border-blue-400 shadow-xl' : 'border-gray-100 hover:border-gray-300'
              }`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-8 flex justify-between items-center"
              >
                <span className="text-xl font-bold text-[#30364F] pr-10">{faq.q}</span>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 ${openIdx === idx ? 'rotate-180 bg-blue-500 text-white shadow-lg' : 'text-gray-400'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIdx === idx ? 'max-h-[600px]' : 'max-h-0'}`}>
                <div className="px-8 pb-10 text-gray-500 text-lg leading-relaxed border-t border-gray-50 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
