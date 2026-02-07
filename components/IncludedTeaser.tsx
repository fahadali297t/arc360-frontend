
import React from 'react';

const IncludedTeaser: React.FC = () => {
  const items = [
    {
      title: 'Social media creatives',
      desc: 'Engaging posts, stories, and headers for all your social platforms.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
    },
    {
      title: 'Website & landing page designs',
      desc: 'High-converting, pixel-perfect layouts for your web presence.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Marketing & ad creatives',
      desc: 'Static and motion ads that grab attention and drive results.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      title: 'Brand & visual assets',
      desc: 'Logos, iconography, and full brand identity kits for consistency.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="included" className="py-24 md:py-32 bg-[#30364F] text-white relative overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#213C51] rounded-full blur-[120px] opacity-30 -mr-20 -mt-20"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Header and CTA */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 block">Our Scope</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
              What's Included <br />
              <span className="text-white/40">in ARC360</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
              Stop hunting for individual freelancers. Get a full-service creative department that handles all your recurring design needs.
            </p>
            <button className="inline-flex items-center space-x-3 bg-[#213C51] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl border border-white/10 group">
              <span>View What's Included</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {items.map((item, idx) => (
                <div key={idx} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="text-blue-400 mb-8 transform group-hover:scale-110 transition-transform origin-left">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IncludedTeaser;
