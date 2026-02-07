
import React from 'react';

const Services: React.FC = () => {
  const serviceCategories = [
    { name: 'Graphic Design', image: 'https://picsum.photos/seed/graphics/400/300' },
    { name: 'Custom Illustrations', image: 'https://picsum.photos/seed/illus/400/300' },
    { name: 'Visual Identity', image: 'https://picsum.photos/seed/brand/400/300' },
    { name: 'Motion Graphics', image: 'https://picsum.photos/seed/motion/400/300' },
    { name: 'Web & App Design', image: 'https://picsum.photos/seed/ui/400/300' },
    { name: 'Packaging Design', image: 'https://picsum.photos/seed/package/400/300' },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-[#213C51] font-bold uppercase tracking-widest text-xs">Versatility</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#30364F] mt-3 mb-6">Unlimited Creative Potential</h2>
            <p className="text-gray-500 text-lg">
              One subscription, hundreds of possibilities. From social media posts to complex UI kits.
            </p>
          </div>
          <button className="text-[#213C51] font-black border-b-2 border-[#213C51] pb-2 hover:border-blue-400 transition-colors text-lg">
            View All Design Types
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] h-[400px] shadow-sm hover:shadow-2xl transition-all duration-500">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#30364F]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-bold text-white mb-3">{service.name}</h3>
                <div className="w-12 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-16 bg-gray-50 p-16 lg:p-24 rounded-[3rem]">
          <div className="text-center">
            <p className="text-6xl font-black text-[#30364F] mb-3">600K+</p>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Designs Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-black text-[#30364F] mb-3">275+</p>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Expert Designers</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-black text-[#30364F] mb-3">60+</p>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
