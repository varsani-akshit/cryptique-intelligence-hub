
import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, MessageSquare, Twitter, Discord } from 'lucide-react';
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
            href="#" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors flex items-center`}
          >
            <FileText className="h-4 w-4 mr-1" />
            Documentation
          </a>
          <a 
            href="#" 
            className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors flex items-center`}
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Blog
          </a>
          <div className="flex space-x-3">
            <a 
              href="#" 
              className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className={`${isScrolled ? 'text-crypto-navy' : 'text-crypto-navy'} hover:text-crypto-gold transition-colors`}
              aria-label="Discord"
            >
              <Discord className="h-5 w-5" />
            </a>
          </div>
          <Button variant="ghost">Sign In</Button>
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
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </a>
            <a 
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-crypto-navy hover:text-crypto-gold flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Blog
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <a 
                href="#" 
                className="text-crypto-navy hover:text-crypto-gold"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-crypto-navy hover:text-crypto-gold"
                aria-label="Discord"
              >
                <Discord className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button variant="ghost" className="w-full justify-start">Sign In</Button>
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
