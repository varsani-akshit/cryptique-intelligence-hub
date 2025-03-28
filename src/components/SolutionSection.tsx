
import React from 'react';

const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-64 h-64 bg-crypto-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-crypto-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
            Our Solution: <span className="gradient-text">Redefining Web3 Marketing Intelligence</span>
          </h2>
          
          <div className="glass-card p-8 md:p-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg leading-relaxed">
              We're redefining how Web3 businesses understand their users by merging Web2 behavioral analytics 
              with on-chain data to create entirely new metrics tailored for the decentralized world. We work 
              hands-on with Web3 projects to identify high-signal metrics that matter.
            </p>
            
            {/* Decorative graphic */}
            <div className="mt-8 flex justify-center">
              <svg width="400" height="80" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                  <rect x="20" y="20" width="100" height="40" rx="4" fill="#1A1F2C" stroke="#8B5CF6" strokeWidth="1" />
                  <text x="70" y="45" textAnchor="middle" fill="white" fontSize="12">Web2 Data</text>
                  
                  <rect x="280" y="20" width="100" height="40" rx="4" fill="#1A1F2C" stroke="#0EA5E9" strokeWidth="1" />
                  <text x="330" y="45" textAnchor="middle" fill="white" fontSize="12">On-Chain Data</text>
                  
                  <rect x="150" y="30" width="100" height="40" rx="20" fill="#D946EF" fillOpacity="0.2" stroke="#D946EF" strokeWidth="1" />
                  <text x="200" y="55" textAnchor="middle" fill="white" fontSize="12">Cryptique</text>
                  
                  <path d="M120 40 L150 50" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3,3" />
                  <path d="M250 50 L280 40" stroke="#0EA5E9" strokeWidth="1" strokeDasharray="3,3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
