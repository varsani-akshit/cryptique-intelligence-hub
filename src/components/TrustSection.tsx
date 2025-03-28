
import React from 'react';

const ClientTypeCard = ({ 
  type, 
  bgClass, 
  delay 
}: { 
  type: string; 
  bgClass: string; 
  delay: string 
}) => (
  <div 
    className={`glass-card flex items-center justify-center py-6 px-4 animate-fade-in ${bgClass}`}
    style={{ animationDelay: delay }}
  >
    <p className="text-lg font-medium">{type}</p>
  </div>
);

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Trusted by Leading Web3 Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ClientTypeCard 
            type="DeFi Protocols" 
            bgClass="border-l-4 border-crypto-purple" 
            delay="0.1s"
          />
          <ClientTypeCard 
            type="GameFi & NFT Platforms" 
            bgClass="border-l-4 border-crypto-pink" 
            delay="0.2s"
          />
          <ClientTypeCard 
            type="DAOs & SocialFi" 
            bgClass="border-l-4 border-crypto-blue" 
            delay="0.3s"
          />
          <ClientTypeCard 
            type="Layer 1 & Layer 2 Blockchains" 
            bgClass="border-l-4 border-crypto-green" 
            delay="0.4s"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center opacity-30">
          <svg width="800" height="60" viewBox="0 0 800 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C266,10 533,50 800,30" stroke="url(#gradient)" strokeWidth="1" fill="none" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
