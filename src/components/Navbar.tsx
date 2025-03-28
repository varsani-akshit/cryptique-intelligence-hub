
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Integration', href: '#integration' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-crypto-gold/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#hero" className="font-montserrat font-bold text-2xl text-white flex items-center glow-effect p-2 rounded-md">
            <img 
              src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
              alt="Cryptique Logo" 
              className="h-10"
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative flex gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-white/80 hover:text-crypto-gold transition-colors py-2 px-3 relative interactive-element"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-crypto-gold transform origin-left transition-transform duration-300 ${
                    hoveredItem === item.label ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-crypto-gold text-crypto-gold hover:bg-crypto-gold/10 interactive-element"
            >
              Request a Demo
            </Button>
            <Button 
              className="bg-crypto-gold text-crypto-navy hover:bg-crypto-gold/90 interactive-element"
            >
              Get Started
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-crypto-gold p-2 rounded-md hover:bg-crypto-gold/10 transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-20 inset-x-0 bg-black/95 border-b border-crypto-gold/20 backdrop-blur-md py-6 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="container flex flex-col space-y-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-white/90 hover:text-crypto-gold transition-colors py-3 px-4 border-l-2 border-transparent hover:border-crypto-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
            <Button 
              variant="outline" 
              className="border-crypto-gold text-crypto-gold hover:bg-crypto-gold/10 w-full"
            >
              Request a Demo
            </Button>
            <Button 
              className="bg-crypto-gold text-crypto-navy hover:bg-crypto-gold/90 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
