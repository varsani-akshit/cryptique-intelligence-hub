import React from 'react';

const SolutionSection = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-crypto-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-crypto-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
            <span className="relative">
              The Future of Web3 <span className="gold-navy-text">Marketing</span> Starts Here
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
            </span>
          </h2>
          
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 gold-navy-text">Smart, On-Chain Attribution</h3>
                <p className="text-crypto-dark/80 mb-6">
                  Cryptique connects Web2 channels to Web3 actions, giving you complete visibility into which campaigns drive real results—from discovery to conversion.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-crypto-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-crypto-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-crypto-dark/80">Track any on-chain action from simple wallet connects to complex smart contract interactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-crypto-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-crypto-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-crypto-dark/80">Identify high-value users by connecting wallet activity to acquisition source</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-crypto-gold/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-crypto-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-crypto-dark/80">Make data-driven decisions about channel allocation and campaign optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/34f29667-ddfa-4020-bc58-e3534bcd019a.png" 
                    alt="Cryptique Attribution Dashboard" 
                    className="w-full h-auto rounded-xl shadow-lg border border-crypto-gold/20 animate-float"
                    style={{ animationDelay: '0.3s' }}
                  />
                  <div className="absolute inset-0 bg-gradient-radial from-crypto-gold/10 to-transparent opacity-70 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
