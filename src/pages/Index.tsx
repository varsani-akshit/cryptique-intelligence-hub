
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesOverview from '@/components/FeaturesOverview';
import TrustSection from '@/components/TrustSection';
import DetailedFeatures from '@/components/DetailedFeatures';
import IntegrationSection from '@/components/IntegrationSection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulated loading with progress
    const startTime = Date.now();
    const duration = 2000; // 2 seconds loading
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setLoadingProgress(progress * 100);
      
      if (progress >= 1) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 300); // Keep loading screen briefly after 100%
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <div 
          ref={cryptiqueLogoRef => {
            if (cryptiqueLogoRef) {
              cryptiqueLogoRef.style.transform = 'rotateY(20deg) rotateX(-10deg)';
            }
          }}
          className="relative mb-8 w-32 h-32 transition-transform duration-300 ease-out"
          style={{perspective: '1000px', transformStyle: 'preserve-3d'}}
        >
          <img 
            src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
            alt="Cryptique Logo" 
            className="object-contain w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-radial from-crypto-gold/20 to-transparent rounded-full blur-xl animate-neon-pulse"></div>
        </div>
        
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-8">
          <div 
            className="h-full bg-crypto-gold"
            style={{ width: `${loadingProgress}%`, transition: 'width 0.3s ease-out' }}
          ></div>
        </div>
        
        <div className="text-crypto-gold mt-4 text-sm font-mono">
          {Math.floor(loadingProgress)}%
        </div>
        
        <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen transition-opacity duration-1000 opacity-100">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesOverview />
        <TrustSection />
        <DetailedFeatures />
        <IntegrationSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
