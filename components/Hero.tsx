
import React from 'react';

interface HeroProps {
  navigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-60 lg:pb-48 bg-[#30364F] overflow-hidden">
      {/* Decorative background elements for a modern feel */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1200px] h-[1200px] rounded-full bg-white opacity-[0.02] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[1000px] h-[1000px] rounded-full bg-[#213C51] opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[70%] text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
              <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Unlimited Creative Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-10 tracking-tight">
              Unlimited Design. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">
                One Simple Monthly Subscription.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 mb-14 leading-relaxed">
              ARC360 gives you a dedicated design team for all your creative needs — without hiring, delays, or long-term contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              {/* Primary CTA: View Plans */}
              <button 
                onClick={() => navigate('pricing')}
                className="w-full sm:w-auto px-12 py-5 bg-[#213C51] border border-white/20 text-white rounded-2xl font-bold text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:bg-[#2a4d69] transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                View Plans
              </button>
              {/* Secondary CTA: Book Demo */}
              {/* <button 
                onClick={() => navigate('contact')}
                className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/5 transition-all duration-300"
              >
                Book Demo
              </button> */}
            </div>
            
            {/* <div className="mt-16 flex items-center justify-center lg:justify-start space-x-8 opacity-40">
              <span className="text-white text-xs font-bold tracking-widest uppercase">Trusted by 5k+ brands</span>
              <div className="flex items-center space-x-6 grayscale invert brightness-0">
                <span className="text-xl font-black italic">Forbes</span>
                <span className="text-xl font-black italic">Wired</span>
                <span className="text-xl font-black italic">TechCrunch</span>
              </div>
            </div> */}
          </div>

          {/* Right Illustration Column */}
          <div className="w-full lg:w-[40%] relative">
            <div className="relative z-20 group">
              {/* Modern Layered Illustration Frame */}
              <div className="relative bg-[#213C51] p-2 rounded-[3rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-700 group-hover:scale-[1.03]">
                <div className="overflow-hidden rounded-[2.8rem] aspect-[4/3] relative">
                  <img 
                    src="./image.png" 
                    alt="Creative Design Platform" 
                    className="w-full h-full object-cover transition-all duration-700 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#30364F]/60 to-transparent"></div>
                  
                  {/* Internal Mockup Element */}
                  {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                         <svg className="w-10 h-10 text-[#30364F]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                         </svg>
                      </div>
                      <p className="text-white font-bold text-xl tracking-tight">Watch Production Workflow</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Floating Illustration Cards */}
              {/* <div className="absolute -top-10 -right-6 md:-right-12 bg-white p-6 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25)] animate-bounce-slow z-30 hidden sm:block">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#213C51]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Graphics</p>
                    <p className="text-lg font-black text-[#30364F]">Landing Page.png</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="absolute -bottom-14 -left-6 md:-left-16 bg-white p-7 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25)] animate-float z-30 hidden sm:block">
                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-4">
                    <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a" alt="User" />
                    <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm" src="https://i.pravatar.cc/150?u=b" alt="User" />
                    <div className="w-12 h-12 rounded-full bg-[#213C51] border-4 border-white flex items-center justify-center text-xs text-white font-bold">+5</div>
                  </div>
                  <div className="h-12 w-px bg-gray-100"></div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Team Status</p>
                    <div className="flex items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2.5"></span>
                      <p className="text-sm font-bold text-[#30364F]">Ready to design</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-white/5 rounded-full pointer-events-none scale-105"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/[0.03] rounded-full pointer-events-none scale-110"></div>
          </div>

        </div>
      </div>
      
      {/* Visual Slant for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform origin-bottom-right -skew-y-2 translate-y-12"></div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
