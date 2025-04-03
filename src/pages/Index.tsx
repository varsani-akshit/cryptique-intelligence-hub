import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
        <title>Cryptique Intelligence | Web3 Marketing Analytics Platform</title>
        <meta name="description" content="Enterprise-grade Web3 analytics platform for blockchain marketing attribution, on-chain intelligence, DAO tools, and NFT analytics solutions." />
        <meta name="keywords" content="web3 analytics, blockchain analytics, crypto marketing, community management web3, dao tools, on-chain analytics, web3 engagement, nft analytics, crypto community, blockchain marketing platform, web3 marketing analytics with cross-chain data, ai-powered community sentiment analysis web3, blockchain marketing roi tracking software, increase web3 community participation, web3 influencer marketing analytics platform, decentralized community management tools, how to analyze nft community growth" />
        
        {/* Schema.org markup for search engines */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cryptique",
              "url": "https://cryptique.io",
              "logo": "https://cryptique.io/lovable-uploads/540775da-1d19-454b-8cc3-00b93142bc89.png",
              "description": "Enterprise-grade Web3 analytics platform for crypto marketing attribution, on-chain intelligence, web3 engagement, DAO tools, NFT analytics, and blockchain marketing solutions.",
              "sameAs": [
                "https://twitter.com/cryptique_io",
                "https://linkedin.com/company/cryptique"
              ],
              "knowsAbout": [
                "Web3 Marketing",
                "Crypto Marketing",
                "On-chain Attribution",
                "Web3 Analytics",
                "Blockchain Analytics",
                "Community Management Web3",
                "DAO Tools",
                "NFT Analytics",
                "Blockchain Marketing Platform"
              ],
              "offers": {
                "@type": "Service",
                "name": "Cryptique Intelligence Platform",
                "description": "Tools for managing DAO community, Web3 marketing analytics with cross-chain data, AI-powered community sentiment analysis, and blockchain marketing ROI tracking."
              }
            }
          `}
        </script>
        
        {/* Additional SEO tags */}
        <meta name="author" content="Cryptique" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
