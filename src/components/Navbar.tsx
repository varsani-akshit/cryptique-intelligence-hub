
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-white/80 shadow-[0_0_15px_rgba(0,0,0,0.1)]' : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png"
                alt="Cryptique"
                className="h-10 w-10"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-crypto-navy hover:text-crypto-gold transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-crypto-navy hover:text-crypto-gold transition-colors">
              Solutions
            </a>
            <div className="relative group">
              <button className="text-crypto-navy hover:text-crypto-gold transition-colors flex items-center">
                Products
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/90 border border-crypto-gold/20 backdrop-blur-lg transform scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-crypto-navy hover:bg-crypto-gold/10 hover:text-crypto-gold">
                    Analytics Dashboard
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-crypto-navy hover:bg-crypto-gold/10 hover:text-crypto-gold">
                    Attribution Tool
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-crypto-navy hover:bg-crypto-gold/10 hover:text-crypto-gold">
                    Custom Audience Builder
                  </a>
                </div>
              </div>
            </div>
            <a 
              href="https://www.blogs.cryptique.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-crypto-navy hover:text-crypto-gold transition-colors"
            >
              Blogs
            </a>
            <a 
              href="https://www.docs.cryptique.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-crypto-navy hover:text-crypto-gold transition-colors"
            >
              Documentation
            </a>
            <a 
              href="https://discord.gg/7vnk8duN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-crypto-navy hover:text-crypto-gold transition-colors" 
              title="Join our Discord community"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="h-5 w-5 fill-current">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-crypto-gold text-crypto-navy hover:bg-crypto-gold/90 border border-crypto-navy"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-crypto-navy focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/90 backdrop-blur-md`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-4 pb-4">
            <a
              href="#features"
              className="text-crypto-navy hover:text-crypto-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-crypto-navy hover:text-crypto-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-crypto-navy hover:text-crypto-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="https://www.blogs.cryptique.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crypto-navy hover:text-crypto-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </a>
            <a
              href="https://www.docs.cryptique.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crypto-navy hover:text-crypto-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </a>
            <a
              href="https://discord.gg/7vnk8duN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crypto-navy hover:text-crypto-gold transition-colors py-2 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="h-5 w-5 fill-current mr-2">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Discord
            </a>
            <Button
              className="bg-crypto-gold text-crypto-navy hover:bg-crypto-gold/90 border border-crypto-navy w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
