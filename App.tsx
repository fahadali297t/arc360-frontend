
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import HowItWorks from './components/HowItWorks';
import IncludedTeaser from './components/IncludedTeaser';
import PricingTeaser from './components/PricingTeaser';
import FAQTeaser from './components/FAQTeaser';
import FinalCTA from './components/FinalCTA';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HowItWorksPage from './HowItWorksPage';
import PricingPage from './PricingPage';
import WhatsIncludedPage from './WhatsIncludedPage';
import FaqPage from './FaqPage';
import ContactPage from './ContactPage';
import LegalPage from './LegalPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');

  // Simple scroll-to-top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderContent = () => {
    switch (currentPath) {
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'pricing':
        return <PricingPage />;
      case 'whats-included':
        return <WhatsIncludedPage />;
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage navigate={(path) => setCurrentPath(path)} />;
      case 'legal':
        return <LegalPage />;
      default:
        return (
          <>
            <Hero navigate={(path) => setCurrentPath(path)} />
            <ValueStrip />
            <HowItWorks />
            <IncludedTeaser />
            <PricingTeaser />
            <FAQTeaser />
            <FinalCTA navigate={(path) => setCurrentPath(path)} />
            <ContactUs />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar navigate={(path) => setCurrentPath(path)} currentPath={currentPath} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer navigate={(path) => setCurrentPath(path)} />
    </div>
  );
};

export default App;
