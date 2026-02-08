
import React from 'react';

const WhatsIncludedPage: React.FC = () => {
  const featureGroups = [
    {
      title: 'Marketing & Social Media',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
      items: [
        'Custom social media posts & stories',
        'LinkedIn & Twitter header designs',
        'Email newsletter templates',
        'Digital banner ads (Static & Animated)',
        'Podcast cover art',
        'YouTube thumbnails',
        'Event posters & flyers',
        'Presentation decks (Pitch decks, sales)'
      ]
    },
    {
      title: 'Web & UI Design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        'Landing page designs',
        'Full website mockups',
        'Mobile app UI screens',
        'Dashboard & SaaS interfaces',
        'E-commerce layout design',
        'Custom web icons & elements',
        'User flow mapping',
        'Wireframing & Prototyping'
      ]
    },
    {
      title: 'Branding & Visual Assets',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        'Logo design & refinements',
        'Full brand style guides',
        'Color palette development',
        'Typography selection',
        'Custom illustrations',
        'Icon library creation',
        'Packaging & Label design',
        'Business card & Stationery'
      ]
    },
    {
      title: 'Ongoing Creative Support',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        'Unlimited design requests',
        'Unlimited revisions',
        'Dedicated Project Manager',
        'Real-time Slack communication',
        'Native source file delivery',
        'Active request queue management',
        'Creative strategy consulting',
        'Asset storage & organization'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="pt-40 pb-32 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#213C51]/10 blur-[120px] rounded-full -mr-32"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
          {/* <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Platform Capabilities
          </span> */}
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            What’s Included <br className="hidden md:block" /> with ARC360
          </h1>
          <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            From social media posts to complex UI kits, ARC360 is the last design partner you will ever need.
          </p>
        </div>
      </section>

      {/* 2 & 3. Feature Groups & Bullet Descriptions */}
      <section className="py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featureGroups.map((group, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-[3rem] p-10 lg:p-16 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B0F1A] text-white flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-[#30364F] mb-10 tracking-tight">
                  {group.title}
                </h2>
                
                <ul className="grid grid-cols-1 gap-5">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start space-x-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-lg text-gray-600 font-bold tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0B0F1A] rounded-[4rem] text-center p-16 lg:p-24 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
           <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-tight">
             See your brand <br />
             come to life.
           </h2>
           <button 
             onClick={() => window.scrollTo(0,0)} // Simple way to suggest navigation or trigger action
             className="bg-[#213C51] text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl border border-white/10 active:scale-95"
           >
             Start Your Subscription
           </button>
           <p className="mt-10 text-white/30 text-xs font-bold uppercase tracking-widest">
             Access all services with any plan.
           </p>
        </div>
      </section>
    </div>
  );
};

export default WhatsIncludedPage;
