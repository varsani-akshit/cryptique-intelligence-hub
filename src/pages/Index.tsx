
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

  useEffect(() => {
    // Simulated loading for a smoother intro animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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
