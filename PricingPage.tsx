
import React, { useState } from 'react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      name: 'Starter',
      monthly: 599,
      annual: 499,
      turnaround: '24-48 hour turnaround',
      limit: '1 active request at a time',
      support: 'Standard Email Support',
      features: [
        'Unlimited design requests',
        'Unlimited revisions',
        'Unlimited brand profiles',
        'Native source files',
        'No long-term contracts'
      ],
      highlight: false
    },
    {
      name: 'Business',
      monthly: 899,
      annual: 749,
      turnaround: '24 hour turnaround',
      limit: '2 active requests at a time',
      support: 'Priority Slack Support',
      features: [
        'Everything in Starter',
        'Dedicated Project Manager',
        'Priority creative team',
        'Real-time communication',
        'Brand asset management',
        'Monthly strategy call',
        'Custom template library',
        'Advanced feedback tool'
      ],
      highlight: true
    },
    {
      name: 'Pro',
      monthly: 1499,
      annual: 1249,
      turnaround: 'Same-day turnaround',
      limit: '4 active requests at a time',
      support: '24/7 Dedicated Support',
      features: [
        'Everything in Business',
        'Video Editing & Motion Graphics',
        'UX/UI Design & Prototyping',
        'Custom Illustrations',
        'Presentation Design',
        'Packaging & Print Design',
        'Multi-user account access',
        'API & Workflow integration',
        'Asset storage & hosting',
        'Express delivery options',
        'Quarterly brand audit',
        'Creative direction support'
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      q: 'Can I really submit unlimited requests?',
      a: 'Yes! Once you subscribe, you can add as many requests as you want to your design queue. We work through them based on your plan’s active request limit. As soon as one is finished, we start the next one immediately.'
    },
    {
      q: 'Is there a limit on revisions?',
      a: 'None at all. We will keep refining the design until you are 100% satisfied. You can request changes with a single click in your dashboard.'
    },
    {
      q: 'Can I pause or cancel my subscription?',
      a: 'Absolutely. ARC360 is a month-to-month service. If you don’t have enough design work for a specific month, you can pause your subscription and resume when you’re ready, or cancel entirely with no penalties.'
    },
    {
      q: 'Who owns the designs?',
      a: 'You do. Every design we create for you is 100% yours. We provide all the native source files (AI, PSD, Figma, etc.) as soon as a request is completed.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Page Header - Matching How It Works Page Style */}
      <section className="pt-40 pb-32 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#213C51]/10 blur-[120px] rounded-full -mr-32"></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Pricing Plans
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Simple & Transparent Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-16">
            Choose a plan that fits your business and scale anytime.{" "}
            <br className="hidden md:block" />
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 flex-column gap-5 ">
        {/* 4. Toggle (Monthly / Annual) - Styled for Dark Background */}
        <div className="flex items-center justify-center space-x-6">
          <span
            className={`text-sm font-black uppercase tracking-widest transition-colors ${!isAnnual ? "text-black" : "text-black/40"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-black/10 rounded-full p-1 transition-all relative flex items-center border border-black/10 group"
          >
            <div
              className={`w-6 h-6 bg-black rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? "translate-x-8" : "translate-x-0"}`}
            ></div>
          </button>
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm font-black uppercase tracking-widest transition-colors ${isAnnual ? "text-black" : "text-black/40"}`}
            >
              Annual
            </span>
            <span className="bg-blue-400/20 text-blue-400 text-[10px] font-black px-2 py-0.5 rounded-md uppercase border border-blue-400/20">
              Save 20%
            </span>
          </div>
        </div>
        </section>

      {/* 2 & 3. Pricing Cards */}
      <section className="pb-32 px-6 flex-column gap-5 ">
       
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-[3rem] p-10 lg:p-12 transition-all duration-500 flex flex-col h-full border ${
                plan.highlight
                  ? "bg-[#0B0F1A] text-white border-transparent shadow-[0_40px_100px_-20px_rgba(48,54,79,0.3)] scale-105 z-10"
                  : "bg-white text-[#30364F] border-gray-100 hover:shadow-2xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#213C51] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-widest">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-6xl font-black tracking-tighter">
                    ${isAnnual ? plan.annual : plan.monthly}
                  </span>
                  <span
                    className={`ml-2 text-sm font-bold ${plan.highlight ? "text-white/40" : "text-gray-400"}`}
                  >
                    /month
                  </span>
                </div>

                {/* Specific Card Points */}
                <div className="space-y-3 mb-8">
                  <p className="flex items-center font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3">
                      ✓
                    </span>
                    {plan.turnaround}
                  </p>
                  <p className="flex items-center font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3">
                      ✓
                    </span>
                    {plan.limit}
                  </p>
                  <p className="flex items-center font-bold text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3">
                      ✓
                    </span>
                    {plan.support}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                <p
                  className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? "text-white/40" : "text-gray-400"}`}
                >
                  Included Features:
                </p>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 group">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-colors ${plan.highlight ? "text-blue-400" : "text-[#213C51]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-bold tracking-tight opacity-90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-xl ${
                  plan.highlight
                    ? "bg-white text-[#30364F] hover:bg-gray-100"
                    : "bg-[#213C51] text-white hover:bg-[#2a4d69]"
                }`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Pricing FAQ (4 items) */}
      <section className="py-32 bg-[#0B0F1A] text-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Pricing FAQ</h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
              Got questions about billing?
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-white/5 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left py-8 flex justify-between items-center group"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openFaq === idx ? "text-white" : "text-white/60 group-hover:text-white"}`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openFaq === idx ? "bg-white text-[#30364F] rotate-180" : ""}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openFaq === idx ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-white/50 text-lg leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#30364F] mb-10 leading-tight">
            Design at the <br /> speed of thought.
          </h2>
          <button className="bg-[#213C51] text-white px-14 py-6 rounded-2xl font-black text-2xl hover:bg-[#2a4d69] transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
            Choose Your Plan
          </button>
          <p className="mt-10 text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">
            No onboarding fees • Secure checkout
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
