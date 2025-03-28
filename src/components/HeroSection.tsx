
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-crypto-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-crypto-blue/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container-section relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 max-w-4xl gradient-text animate-fade-in">
          Intelligence That Accelerates Web3
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The Future of Web3 Marketing Starts Here.
        </p>
        
        <p className="text-lg text-foreground/70 mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Driven by Data. Designed for Web3 Growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="text-base px-8 py-6">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 group">
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Abstract blockchain graphic */}
        <div className="mt-16 w-full max-w-3xl mx-auto opacity-60 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M100,50 L400,50 M800,50 L1100,50" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeDasharray="10,10" />
            <circle cx="100" cy="50" r="10" fill="#8B5CF6" />
            <circle cx="400" cy="50" r="10" fill="#0EA5E9" />
            <circle cx="800" cy="50" r="10" fill="#D946EF" />
            <circle cx="1100" cy="50" r="10" fill="#10B981" />
            <path d="M100,50 L800,90 M400,50 L1100,90" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeDasharray="5,5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
