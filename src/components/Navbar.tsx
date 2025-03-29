
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-section mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="animate-float">
              <img 
                src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
                alt="Cryptique Logo" 
                className="h-10 mr-3" 
              />
            </div>
          </a>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#hero" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
          >
            Home
          </a>
          <a 
            href="#trust" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
          >
            Partners
          </a>
          <a 
            href="#features" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
          >
            Features
          </a>
          <a 
            href="https://docs.cryptique.io" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
          >
            Documentation
          </a>
          <a 
            href="https://blog.cryptique.io" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
          >
            Blog
          </a>
          <div className="flex space-x-3">
            <a 
              href="https://x.com/Cryptiqueio" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
              aria-label="X (Twitter)"
            >
              <X className="h-5 w-5" />
            </a>
            <a 
              href="https://discord.gg/7vnk8duN" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
              aria-label="Discord"
            >
              {/* Replace Discord icon with an SVG for the Discord logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.14 96.36"
                className="h-5 w-5 fill-current"
              >
                <path
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                />
              </svg>
            </a>
          </div>
          <Button variant="ghost" className="border border-crypto-navy">Sign In</Button>
          <Button 
            className="bg-crypto-gold hover:bg-crypto-gold/90 text-crypto-navy"
          >
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${
              isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#hero"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#trust"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </a>
            <a 
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="https://docs.cryptique.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </a>
            <a 
              href="https://blog.cryptique.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <a 
                href="https://x.com/Cryptiqueio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-navy hover:text-crypto-gold"
                aria-label="X (Twitter)"
              >
                <X className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/7vnk8duN" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-navy hover:text-crypto-gold"
                aria-label="Discord"
              >
                {/* Replace Discord icon with an SVG for the Discord logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  className="h-5 w-5 fill-current"
                >
                  <path
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button variant="ghost" className="w-full justify-start border border-crypto-navy">Sign In</Button>
              <Button 
                className="w-full mt-2 bg-crypto-gold hover:bg-crypto-gold/90 text-crypto-navy"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
