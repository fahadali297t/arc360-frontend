
import React from 'react';

const ValueStrip: React.FC = () => {
  const items = [
    {
      label: 'Unlimited Requests',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      label: 'Flat Monthly Pricing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      label: 'Fast Turnaround',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: 'Dedicated Designers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      label: 'Simple Workflow',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-10 gap-x-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#213C51] group-hover:bg-[#213C51] group-hover:text-white transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <span className="text-base md:text-lg font-bold text-[#30364F] tracking-tight whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;
