
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1440px] mx-auto bg-[#0B0F1A] rounded-[4rem] relative overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.5)]">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-60 -mt-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -ml-20 -mb-20 blur-[100px]"></div>

        <div className="relative z-10 p-16 lg:p-32 flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-10">
            Experience Seamless <br />
            <span className="text-blue-400">Design with DesignFlow</span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mb-16 leading-relaxed">
            Join thousands of smart businesses who have scaled their creative output without scaling their costs. Your 7-day trial starts now.
          </p>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="bg-[#213C51] hover:bg-[#2a4d69] text-white px-14 py-6 rounded-3xl font-black text-2xl shadow-2xl transition-all active:scale-95 border border-white/10">
              Start your Free 7-Day Trial
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#30364F] px-14 py-6 rounded-3xl font-black text-2xl shadow-2xl transition-all active:scale-95">
              Book a Demo
            </button>
          </div>
          <p className="mt-12 text-white/30 text-sm font-bold tracking-widest uppercase">
            No credit card required for trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
