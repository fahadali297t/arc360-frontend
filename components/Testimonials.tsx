
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Jacob Lopez',
      role: 'Social Media Manager',
      text: 'I have been using DesignFlow for a few months now and I am very happy with the service! They are quick about changes and wants which turns it into a easily flowing process.',
      avatar: 'https://i.pravatar.cc/150?u=jacob',
    },
    {
      name: 'Liana Fox',
      role: 'CEO, Nexona',
      text: 'These guys are absolutely amazing! I highly recommend them. Its so great to work with competent people who are incredibly good and super fast at what they do.',
      avatar: 'https://i.pravatar.cc/150?u=liana',
    },
    {
      name: 'Seth Evans',
      role: 'Founder, Big Fish',
      text: 'I have been very pleased with the quality of work we have received. I would definitely recommend their services for anyone with ongoing design needs.',
      avatar: 'https://i.pravatar.cc/150?u=seth',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-24">
          <div className="flex justify-center items-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#30364F] mb-6">5,000+ Happy Customers</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            DesignFlow delivers a powerful design solution with a talented in-house team, offering unlimited graphic and video design services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center space-x-5 mb-8">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-xl text-[#30364F]">{review.name}</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-500 italic leading-relaxed text-lg">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
