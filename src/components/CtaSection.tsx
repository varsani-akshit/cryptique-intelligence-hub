
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/20 via-background to-background"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Talk to Us Today!
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hop on a call with us to see how Cryptique can help you scale Web3 growth 
            (and yes, you can try the platform for free!)
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <a 
              href="mailto:support@cryptique.io" 
              className="glass-card p-4 flex items-center gap-2 hover:bg-muted/30 transition-colors animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Mail size={20} />
              <span>support@cryptique.io</span>
            </a>
            
            <a 
              href="https://calendly.com/founders-cryptique"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="animate-fade-in group"
                style={{ animationDelay: '0.3s' }}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
