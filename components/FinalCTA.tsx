
import React from 'react';

interface FinalCTAProps {
  navigate: (path: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ navigate }) => {
  return (
    <section id="final-cta" className="py-24 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-[#0B0F1A] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(48,54,79,0.3)] border border-white/10">
          {/* Abstract decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#213C51] rounded-full -mr-48 -mt-48 opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>

          <div className="relative z-10 p-12 lg:p-24 flex flex-col items-center text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl tracking-tight">
              Start Your Design <br className="hidden md:block" />
              Subscription Today
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Unlimited design requests, flat monthly pricing, and fast turnaround. Join ARC360 today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('pricing')}
                className="bg-[#213C51] text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95 border border-white/10"
              >
                Get Started
              </button>
            </div>
            <p className="mt-10 text-white/30 text-xs font-bold uppercase tracking-widest">
              Cancel or pause anytime • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
