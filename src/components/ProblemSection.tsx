
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-white relative overflow-hidden py-0">
      {/* Background elements with navy spots */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-crypto-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-crypto-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-crypto-navy/8 rounded-full blur-xl"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
            Present <span className="text-crypto-gold">Situation</span>
          </h2>
          
          <p className="text-lg text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Web3 projects presently are relying on outdated web2-centric marketing metrics - likes, impressions, follower counts - to gauge success, but these fail to truly measure value indicators.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 w-40 mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#CAA968" strokeWidth="2" />
                    <path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="#CAA968" strokeWidth="4" strokeLinecap="round" />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="16" fontWeight="bold">74%</text>
                    <text x="50" y="65" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="8">DATA LOST</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Fragmented Analytics</h3>
              <p className="text-crypto-dark/70">
                Web3 companies struggle with disconnected data sources across centralized and decentralized platforms, making campaign performance tracking nearly impossible.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-40 w-40 mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <rect x="20" y="30" width="60" height="40" fill="none" stroke="#CAA968" strokeWidth="2" />
                    <line x1="20" y1="45" x2="80" y2="45" stroke="#CAA968" strokeWidth="2" />
                    <circle cx="30" cy="38" r="3" fill="#CAA968" />
                    <text x="50" y="60" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="16" fontWeight="bold">86%</text>
                    <text x="50" y="75" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="8">UNTRACEABLE CONVERSIONS</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Attribution Black Hole</h3>
              <p className="text-crypto-dark/70">
                Without proper attribution, teams can't identify which channels drive results, especially across owned social platforms and influential third-party communities.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-40 w-40 mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <path d="M20,80 L20,50 L40,50 L40,30 L60,30 L60,60 L80,60 L80,80 Z" fill="none" stroke="#CAA968" strokeWidth="2" />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="18" fontWeight="bold">5x</text>
                    <text x="50" y="65" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="10">WASTED BUDGET</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Budget Inefficiency</h3>
              <p className="text-crypto-dark/70">
                Marketing budgets are frequently wasted on ineffective channels due to insufficient data on what drives on-chain conversions and real user engagement.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="h-40 w-40 mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#CAA968" strokeWidth="2" />
                    <path d="M50,20 L50,50 L70,70" fill="none" stroke="#CAA968" strokeWidth="2" strokeLinecap="round" />
                    <text x="50" y="90" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="14" fontWeight="bold">128 HOURS</text>
                    <text x="50" y="98" textAnchor="middle" dominantBaseline="middle" fill="#CAA968" fontSize="8">MANUAL WORK/MONTH</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Resource Drain</h3>
              <p className="text-crypto-dark/70">
                Teams spend countless hours manually collecting and analyzing data from multiple platforms instead of focusing on strategic growth initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
