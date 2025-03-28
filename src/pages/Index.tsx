
import React from 'react';
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

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
