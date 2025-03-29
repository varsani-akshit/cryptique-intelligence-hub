import React, { useState, useEffect } from 'react';
import { Menu, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);
  
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
  
  // When mobile menu is open, prevent background scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
                src="/lovable-uploads/b1e36bb6-d421-4078-b7c4-8fc57cfa5092.png" 
                alt="Cryptique Logo" 
                className="h-10 md:h-12" 
              />
            </div>
          </a>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a 
            href="#hero" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors text-sm lg:text-base`}
          >
            Home
          </a>
          <a 
            href="#trust" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors text-sm lg:text-base`}
          >
            Partners
          </a>
          <a 
            href="#features" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors text-sm lg:text-base`}
          >
            Features
          </a>
          <a 
            href="https://docs.cryptique.io" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors text-sm lg:text-base`}
          >
            Documentation
          </a>
          <a 
            href="https://blog.cryptique.io" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors text-sm lg:text-base`}
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
              {/* Twitter/X logo SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="M18 4H14a4 4 0 0 0-4 4v12" />
                <path d="M18 10V4" />
                <path d="m8.5 9 5 5" />
                <path d="m14.5 4-5 5" />
              </svg>
            </a>
            <a 
              href="https://discord.gg/7vnk8duN" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
              aria-label="Discord"
            >
              {/* Discord SVG icon */}
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
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size={isMobile ? "sm" : "default"} 
              className="border border-crypto-navy text-xs lg:text-sm flex items-center gap-1.5"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
            <a 
              href="https://calendly.com/founders-cryptique"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-crypto-gold hover:bg-crypto-gold/90 text-crypto-navy text-xs lg:text-sm"
                size={isMobile ? "sm" : "default"}
              >
                Request a Demo
              </Button>
            </a>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${
              isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <Menu className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - improved with better transitions and accessibility */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-40 md:hidden pt-16 transition-all duration-300 ease-in-out"
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        >
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-6 flex flex-col h-full">
            <a 
              href="#hero"
              className="block px-3 py-3 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#trust"
              className="block px-3 py-3 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </a>
            <a 
              href="#features"
              className="block px-3 py-3 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="https://docs.cryptique.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </a>
            <a 
              href="https://blog.cryptique.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <div className="flex space-x-6 px-3 py-3">
              <a 
                href="https://x.com/Cryptiqueio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-navy hover:text-crypto-gold"
                aria-label="X (Twitter)"
              >
                {/* Twitter/X logo SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6"
                >
                  <path d="M18 4H14a4 4 0 0 0-4 4v12" />
                  <path d="M18 10V4" />
                  <path d="m8.5 9 5 5" />
                  <path d="m14.5 4-5 5" />
                </svg>
              </a>
              <a 
                href="https://discord.gg/7vnk8duN" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-navy hover:text-crypto-gold"
                aria-label="Discord"
              >
                {/* Discord SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-auto p-4 border-t border-gray-200 space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-center border border-crypto-navy flex items-center gap-1.5"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
              <a 
                href="https://calendly.com/founders-cryptique"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  className="w-full bg-crypto-gold hover:bg-crypto-gold/90 text-crypto-navy"
                >
                  Request a Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
