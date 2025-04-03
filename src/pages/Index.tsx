
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TrustSection from '@/components/TrustSection';
import DetailedFeatures from '@/components/DetailedFeatures';
import IntegrationSection from '@/components/IntegrationSection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulated loading with progress
    const startTime = Date.now();
    const duration = isMobile ? 1500 : 2000; // Faster loading on mobile
    
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
  }, [isMobile]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div 
          ref={cryptiqueLogoRef => {
            if (cryptiqueLogoRef) {
              cryptiqueLogoRef.style.transform = 'rotateY(20deg) rotateX(-10deg)';
            }
          }}
          className="relative mb-8 w-24 md:w-32 h-24 md:h-32 transition-transform duration-300 ease-out"
          style={{perspective: '1000px', transformStyle: 'preserve-3d'}}
        >
          <img 
            src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
            alt="Cryptique Logo" 
            className="object-contain w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-radial from-crypto-gold/20 to-transparent rounded-full blur-xl animate-neon-pulse"></div>
        </div>
        
        <div className="w-48 md:w-64 h-1 bg-crypto-dark/10 rounded-full overflow-hidden mt-8">
          <div 
            className="h-full bg-crypto-gold"
            style={{ width: `${loadingProgress}%`, transition: 'width 0.3s ease-out' }}
          ></div>
        </div>
        
        <div className="text-crypto-gold mt-4 text-sm font-mono">
          {Math.floor(loadingProgress)}%
        </div>
        
        <div className="absolute inset-0 bg-cyber-grid bg-[size:20px_20px] md:bg-[size:30px_30px] opacity-5"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen transition-opacity duration-1000 opacity-100 bg-white">
      <Helmet>
        <title>Cryptique | Web3 Marketing & On-Chain Attribution Platform for Crypto Projects</title>
        <meta name="description" content="Cryptique is the leading Web3 martech platform with on-chain attribution. Track wallet journeys, optimize marketing ROI, and connect crypto marketing efforts to measurable on-chain results." />
        <meta name="keywords" content="cryptique, martech platform, web3 marketing, crypto marketing, on chain attribution, blockchain analytics" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://cryptique.io/",
              "name": "Cryptique - Web3 Marketing & On-Chain Attribution Platform",
              "description": "Advanced martech platform for Web3 and crypto marketing with on-chain attribution",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cryptique.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>
      {!isMobile && <CustomCursor />}
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow space-y-0">
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
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
