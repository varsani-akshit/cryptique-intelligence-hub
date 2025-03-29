
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Database, DollarSign, Clock } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="bg-white relative overflow-hidden py-16">
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
            {/* Stat Card 1 - Data Lost */}
            <Card className="overflow-hidden border-crypto-gold/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-crypto-gold/10 to-transparent h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-full bg-crypto-gold/10 flex items-center justify-center flex-shrink-0">
                    <Database className="h-8 w-8 text-crypto-gold" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-crypto-navy">74%</h3>
                      <span className="font-semibold text-crypto-gold/70 uppercase text-sm tracking-wider">Data Lost</span>
                    </div>
                    <p className="text-crypto-dark/70">
                      Web3 companies struggle with disconnected data sources across centralized and decentralized platforms, making campaign performance tracking nearly impossible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stat Card 2 - Attribution Black Hole */}
            <Card className="overflow-hidden border-crypto-gold/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-r from-crypto-gold/10 to-transparent h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-full bg-crypto-gold/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="h-8 w-8 text-crypto-gold" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-crypto-navy">86%</h3>
                      <span className="font-semibold text-crypto-gold/70 uppercase text-sm tracking-wider">Untraceable</span>
                    </div>
                    <p className="text-crypto-dark/70">
                      Without proper attribution, teams can't identify which channels drive results, especially across owned social platforms and influential third-party communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stat Card 3 - Budget Inefficiency */}
            <Card className="overflow-hidden border-crypto-gold/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-r from-crypto-gold/10 to-transparent h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-full bg-crypto-gold/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-8 w-8 text-crypto-gold" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-crypto-navy">5x</h3>
                      <span className="font-semibold text-crypto-gold/70 uppercase text-sm tracking-wider">Wasted Budget</span>
                    </div>
                    <p className="text-crypto-dark/70">
                      Marketing budgets are frequently wasted on ineffective channels due to insufficient data on what drives on-chain conversions and real user engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stat Card 4 - Resource Drain */}
            <Card className="overflow-hidden border-crypto-gold/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-r from-crypto-gold/10 to-transparent h-1"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-full bg-crypto-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-8 w-8 text-crypto-gold" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-crypto-navy">128</h3>
                      <span className="font-semibold text-crypto-gold/70 uppercase text-sm tracking-wider">Hours Wasted</span>
                    </div>
                    <p className="text-crypto-dark/70">
                      Teams spend countless hours manually collecting and analyzing data from multiple platforms instead of focusing on strategic growth initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
