
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Side: Info */}
          <div>
            <span className="text-[#213C51] font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#30364F] mb-8 leading-tight tracking-tight">
              Have a question? <br />
              Let's talk design.
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-md">
              Whether you need a custom enterprise solution or just want to clarify how our queue works, our team is here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#213C51] shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#30364F]">Email Us</h4>
                  <p className="text-gray-500">hello@arc360.design</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#213C51] shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#30364F]">Live Chat</h4>
                  <p className="text-gray-500">Available Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#30364F] ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#213C51] focus:ring-2 focus:ring-[#213C51]/10 transition-all outline-none bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#30364F] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#213C51] focus:ring-2 focus:ring-[#213C51]/10 transition-all outline-none bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#30364F] ml-1">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project or questions..."
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#213C51] focus:ring-2 focus:ring-[#213C51]/10 transition-all outline-none bg-white resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#213C51] text-white py-5 rounded-xl font-black text-lg hover:bg-[#2a4d69] transition-all transform active:scale-[0.98] shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
