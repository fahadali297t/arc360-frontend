
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Unlimited Requests',
      desc: 'For a flat monthly fee, clients can submit unlimited design and revision requests.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
      bg: 'bg-blue-50',
    },
    {
      title: 'Faster Turnaround',
      desc: 'Turnaround times: 24 hours for simple tasks, 2-4 days for complex designs.',
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bg: 'bg-purple-50',
    },
    {
      title: 'Unlimited Revisions',
      desc: 'You can request unlimited revisions until your designs meet your exact specifications.',
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      bg: 'bg-teal-50',
    },
    {
      title: 'Top 1% Designers',
      desc: 'We enlist top-notch graphic and motion graphics designers for your projects.',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      bg: 'bg-yellow-50',
    },
    {
      title: 'Dedicated Team',
      desc: 'You deserve a team that understands and designs according to your preferences.',
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bg: 'bg-red-50',
    },
    {
      title: '100+ Categories',
      desc: 'Choose from over 100 types of graphic or video designs with a single subscription.',
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section id="benefits" className="py-32 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#30364F] mb-6">Discover Key Benefits</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            We're not your average design service. Our unlimited subscriptions help you achieve more while saving time and money.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className={`${benefit.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#30364F] mb-4">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
