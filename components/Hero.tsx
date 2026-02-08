
import React from 'react';

interface HeroProps {
  navigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-60 lg:pb-48 bg-[#0B0F1A] overflow-hidden">
      {/* Dynamic Mesh Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[100px] animate-pulse-delayed"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-3 animate-ping"></span>
              <span className="text-white/60 text-[10px] font-black tracking-[0.2em] uppercase">Unlimited Creative Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-10 tracking-tighter">
              Unlimited Design. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400 animate-gradient-x">
                One Simple Monthly Subscription.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto lg:mx-0 mb-14 font-medium leading-relaxed">
              ARC360 gives you a dedicated design team to handle all your creative needs — fast, reliable, and without hiring or long-term contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button 
                onClick={() => navigate('pricing')}
                className="group relative w-full sm:w-auto px-12 py-5 bg-[#213C51] text-white rounded-2xl font-black text-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(33,60,81,0.5)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">View Plans</span>
              </button>
              
              {/* <button 
                onClick={() => navigate('contact')}
                className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-95"
              >
                Book Demo
              </button> */}
            </div>
          </div>

          {/* Right Visual Column (3D-like Mockup) */}
          <div className="w-full lg:w-[40%] relative perspective-1000">
            <div className="relative z-20 animate-float-slow">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-[3rem] shadow-2xl border border-white/20 backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="overflow-hidden rounded-[2.8rem] aspect-[4/5] relative">
                  <img 
                    src="./image.png" 
                    alt="ARC360 Dashboard Preview" 
                    className="w-full h-full object-cover brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Internal Floating UI Element */}
                  {/* <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 animate-slide-up">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-black">360</div>
                      <div>
                        <p className="text-white font-black text-sm uppercase tracking-widest">Active Request</p>
                        <p className="text-white/60 text-xs">Mobile App Redesign • In Progress</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Decorative Accent Rings */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse-delayed"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Wave Break */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1.1); }
          50% { opacity: 0.4; transform: scale(1); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 10s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 15s ease infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default Hero;
