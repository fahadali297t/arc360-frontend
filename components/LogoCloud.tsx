
import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = [
    { name: 'Abbott', src: 'https://cdn.worldvectorlogo.com/logos/abbott-logo.svg' },
    { name: 'Decathlon', src: 'https://cdn.worldvectorlogo.com/logos/decathlon-1.svg' },
    { name: 'Universal', src: 'https://cdn.worldvectorlogo.com/logos/universal-studios-logo.svg' },
    { name: '1&1', src: 'https://cdn.worldvectorlogo.com/logos/1and1.svg' },
    { name: 'Harley', src: 'https://cdn.worldvectorlogo.com/logos/harley-davidson-logo.svg' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-center text-gray-400 font-bold mb-14 tracking-widest uppercase text-xs">
          Every day DesignFlow is trusted by over 5,000 businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <img 
              key={logo.name} 
              src={logo.src} 
              alt={logo.name} 
              className="h-10 md:h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
