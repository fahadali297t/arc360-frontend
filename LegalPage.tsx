
import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl font-black text-[#30364F] mb-12 pb-6 border-b border-gray-100">Legal Center</h1>
        
        <div className="space-y-16">
          {/* Terms of Service */}
          <section>
            <h2 className="text-2xl font-black text-[#30364F] mb-6 uppercase tracking-wider">Terms of Service</h2>
            <div className="prose prose-blue text-gray-500 space-y-4 leading-relaxed font-medium">
              <p>
                By using ARC360 services, you agree to be bound by the following terms and conditions. These terms govern your subscription and use of our design platform.
              </p>
              <p>
                <strong>Subscription & Billing:</strong> You agree to pay the monthly or annual fee associated with your selected plan. Subscriptions renew automatically until cancelled.
              </p>
              <p>
                <strong>Service Scope:</strong> We provide design services on an "as-available" basis. While we strive for 24-48 hour turnarounds, complex tasks may require more time.
              </p>
              <p>
                <strong>User Conduct:</strong> You agree not to use the service for any illegal or unauthorized purpose. You are responsible for the content and briefs provided to our designers.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-2xl font-black text-[#30364F] mb-6 uppercase tracking-wider">Privacy Policy</h2>
            <div className="prose prose-blue text-gray-500 space-y-4 leading-relaxed font-medium">
              <p>
                At ARC360, your privacy is a top priority. This policy outlines how we collect, use, and protect your personal and business information.
              </p>
              <p>
                <strong>Data Collection:</strong> We collect information necessary to provide our services, including contact details, company information, and project assets.
              </p>
              <p>
                <strong>Data Security:</strong> We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
              </p>
              <p>
                <strong>Third-Party Sharing:</strong> We do not sell your data. We only share information with third-party service providers (like payment processors) essential to our operations.
              </p>
            </div>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-2xl font-black text-[#30364F] mb-6 uppercase tracking-wider">Refund Policy</h2>
            <div className="prose prose-blue text-gray-500 space-y-4 leading-relaxed font-medium">
              <p>
                We stand behind the quality of our work. However, due to the nature of creative services and immediate access to design resources, our refund policy is as follows:
              </p>
              <p>
                <strong>Subscription Fees:</strong> Generally, subscription fees are non-refundable once the billing cycle has started and work has commenced.
              </p>
              <p>
                <strong>Cancellations:</strong> You may cancel at any time. Your access will continue until the end of the current paid billing period.
              </p>
              <p>
                <strong>Exceptional Circumstances:</strong> If you feel you have a unique case, please contact our support team. We review refund requests on a case-by-case basis within the first 7 days of service.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            Last Updated: October 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
