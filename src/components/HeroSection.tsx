import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MousePointer } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cryptiqueLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !titleRef.current || !cryptiqueLogoRef.current) return;
      
      // Parallax effect for title
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply subtle movement to the title
      titleRef.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
      
      // 3D rotation effect for the logo
      cryptiqueLogoRef.current.style.transform = `rotateY(${x * 30}deg) rotateX(${-y * 30}deg)`;
    };
    
    // Scroll effect
    const handleScroll = () => {
      if (!heroRef.current || !titleRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 500, 0);
      const scale = Math.max(1 - scrollPosition / 2000, 0.8);
      
      titleRef.current.style.opacity = opacity.toString();
      titleRef.current.style.transform = `scale(${scale}) translate3d(0, ${scrollPosition * 0.5}px, 0)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-glitch');
        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.classList.remove('animate-glitch');
          }
        }, 200);
      }
    }, 5000);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-white min-h-screen"
      id="hero"
    >
      {/* Background elements with navy accent spots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-navy/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-crypto-gold/10 rounded-full blur-3xl animate-pulse-glow" 
             style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-crypto-navy/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-crypto-navy/8 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-5"></div>
      </div>
      
      <div className="container-section relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        {/* 3D rotating logo */}
        <div 
          ref={cryptiqueLogoRef}
          className="relative mb-8 w-32 h-32 transition-transform duration-300 ease-out perspective"
          style={{
            perspective: '1000px', 
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 30px rgba(202, 169, 104, 0.3)'
          }}
        >
          <img 
            src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
            alt="Cryptique Logo" 
            className="object-contain w-full h-full animate-float"
          />
          <div className="absolute inset-0 bg-gradient-radial from-crypto-gold/20 to-transparent rounded-full blur-xl animate-neon-pulse"></div>
        </div>

        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 transition-all duration-300 ease-out"
          style={{transformStyle: 'preserve-3d'}}
        >
          <span className="bg-gold-navy-gradient bg-clip-text text-transparent">Intelligence</span>
          <span className="text-crypto-navy"> That </span>
          <span className="text-crypto-navy">Accelerates </span>
          <span className="bg-gold-navy-gradient bg-clip-text text-transparent">Web3</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="text-base px-10 py-7 bg-crypto-gold text-crypto-navy border-2 border-crypto-navy hover:bg-crypto-gold/90 interactive-element relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-crypto-gold/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </Button>
          <a 
            href="https://calendly.com/founders-cryptique"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-10 py-7 border border-gradient-to-r from-crypto-navy to-crypto-gold text-crypto-navy hover:bg-crypto-gold/10 group interactive-element relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-crypto-gold/20 to-crypto-navy/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2 text-crypto-dark/70">Scroll to Explore</p>
            <MousePointer size={20} className="text-crypto-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
