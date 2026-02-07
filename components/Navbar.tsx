
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  navigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ navigate, currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'How It Works', path: 'how-it-works' },
    { name: 'What\'s Included', path: 'whats-included' },
    { name: 'Pricing', path: 'pricing' },
    { name: 'FAQ', path: 'faq' },
    { name: 'Contact', path: 'contact' },
  ];

  const isDarkBgPage = currentPath !== 'home' || isScrolled;

  const getTextColor = () => {
    if (isDarkBgPage) return 'text-[#30364F]';
    return 'text-white';
  };

  const getBgColor = () => {
    if (isDarkBgPage) return 'bg-white shadow-md py-3';
    return 'bg-transparent py-6';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getBgColor()}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={(e) => handleNavClick('home', e)} className="flex items-center space-x-2">
              <span className={`text-2xl font-black tracking-tighter ${getTextColor()}`}>
                ARC360<span className="text-blue-500 rounded-md px-1 ml-0.5">.</span>
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => handleNavClick(link.path, e)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  getTextColor() === 'text-white' 
                    ? 'text-white/60 hover:text-white' 
                    : 'text-gray-500 hover:text-[#30364F]'
                } ${currentPath === link.path ? 'text-[#213C51] opacity-100' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className={`text-sm font-black uppercase tracking-widest ${getTextColor()}`}>
              Log In
            </button>
            <button 
              onClick={(e) => handleNavClick('contact', e)}
              className="bg-[#213C51] text-white px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#2a4d69] transition-all shadow-xl active:scale-95"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${getTextColor()} p-2`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 pt-4 pb-8 space-y-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className="block px-4 py-4 text-base font-black uppercase tracking-widest text-[#30364F] hover:bg-gray-50 rounded-xl"
                onClick={(e) => handleNavClick(link.path, e)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 pb-2 border-t border-gray-100 mt-4 space-y-4">
              <button className="w-full text-center py-4 text-[#30364F] font-black uppercase tracking-widest">Log In</button>
              <button 
                onClick={(e) => handleNavClick('contact', e)}
                className="w-full bg-[#213C51] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
