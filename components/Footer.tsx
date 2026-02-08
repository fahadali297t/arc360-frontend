
import React from 'react';

interface FooterProps {
  navigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#0B0F1A] py-16 text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">
            ARC360 – Powered by Imperium Global Media
          </h3>
          <p className="text-white/50 font-medium">
            Unlimited design subscription for modern businesses.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <button 
            onClick={() => navigate('legal')}
            className="text-white/30 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
          >
            Legal (Terms, Privacy & Refund)
          </button>
          <span className="hidden md:block text-white/10">|</span>
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2025 ARC360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
