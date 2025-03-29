
import React from 'react';
import { Activity, Database, DollarSign, Clock } from 'lucide-react';

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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
            <span className="relative">
              Web3 <span className="gold-navy-text">Marketing is Broken</span>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
            </span>
          </h2>
          
          <p className="text-lg text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Web3 projects presently are relying on outdated web2-centric marketing metrics - likes, impressions, follower counts - to gauge success, but these fail to truly measure value indicators.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 w-40 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="relative flex items-center justify-center">
                  <Database className="absolute text-crypto-gold/30 h-20 w-20" />
                  <div className="flex flex-col items-center justify-center z-10">
                    <div className="text-crypto-gold text-4xl font-bold mb-1">74%</div>
                    <div className="text-crypto-gold/90 font-medium text-sm tracking-wider">DATA LOST</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Fragmented Analytics</h3>
              <p className="text-crypto-dark/70">
                Web3 companies struggle with disconnected data sources across centralized and decentralized platforms, making campaign performance tracking nearly impossible.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-40 w-40 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="relative flex items-center justify-center">
                  <Activity className="absolute text-crypto-gold/30 h-20 w-20" />
                  <div className="flex flex-col items-center justify-center z-10">
                    <div className="text-crypto-gold text-4xl font-bold mb-1">86%</div>
                    <div className="text-crypto-gold/90 font-medium text-sm tracking-wider">UNTRACEABLE</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Attribution Black Hole</h3>
              <p className="text-crypto-dark/70">
                Without proper attribution, teams can't identify which channels drive results, especially across owned social platforms and influential third-party communities.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-40 w-40 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="relative flex items-center justify-center">
                  <DollarSign className="absolute text-crypto-gold/30 h-20 w-20" />
                  <div className="flex flex-col items-center justify-center z-10">
                    <div className="text-crypto-gold text-4xl font-bold mb-1">5x</div>
                    <div className="text-crypto-gold/90 font-medium text-sm tracking-wider">WASTED BUDGET</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-crypto-dark">Budget Inefficiency</h3>
              <p className="text-crypto-dark/70">
                Marketing budgets are frequently wasted on ineffective channels due to insufficient data on what drives on-chain conversions and real user engagement.
              </p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="h-40 w-40 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-crypto-gold/10 animate-pulse"></div>
                <div className="relative flex items-center justify-center">
                  <Clock className="absolute text-crypto-gold/30 h-20 w-20" />
                  <div className="flex flex-col items-center justify-center z-10">
                    <div className="text-crypto-gold text-4xl font-bold mb-1">128</div>
                    <div className="text-crypto-gold/90 font-medium text-sm tracking-wider">HOURS WASTED</div>
                  </div>
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
