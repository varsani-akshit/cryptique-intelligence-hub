
import React from 'react';
import { TrendingDown, AlertTriangle, DollarSign, Users } from 'lucide-react';

const ProblemCard = ({ 
  icon: Icon, 
  title, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  delay: string 
}) => (
  <div 
    className="glass-card p-6 flex items-center space-x-4 animate-fade-in backdrop-blur-md border border-crypto-gold/20" 
    style={{ 
      animationDelay: delay,
      background: 'linear-gradient(145deg, rgba(0,0,0,0.9), rgba(29,12,70,0.2))'
    }}
  >
    <div className="rounded-full bg-black/50 p-3 text-crypto-gold">
      <Icon size={20} />
    </div>
    <div className="text-lg font-medium">{title}</div>
  </div>
);

const ProblemSection = () => {
  return (
    <section className="bg-black relative py-20 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-futuristic-glow opacity-30"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            The Problem: <span className="text-crypto-gold">Outdated Metrics Hinder Web3 Growth</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Web3 projects are relying on outdated, Web2-centric marketing metrics—likes, impressions, 
            follower counts—to gauge success. But in the decentralized world, these are vanity proxies, 
            not value indicators. They fail to measure what truly matters: community contribution, 
            sentiment, on-chain behavior, and token-based incentivization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <ProblemCard 
              icon={DollarSign} 
              title="Misallocated marketing budgets" 
              delay="0.2s" 
            />
            <ProblemCard 
              icon={Users} 
              title="Shallow community engagement" 
              delay="0.3s" 
            />
            <ProblemCard 
              icon={AlertTriangle} 
              title="Poor Product-Market Fit detection" 
              delay="0.4s" 
            />
            <ProblemCard 
              icon={TrendingDown} 
              title="Unsustainable growth" 
              delay="0.5s" 
            />
          </div>
          
          <p className="text-xl font-semibold text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Web3 needs a <span className="text-crypto-gold">new measurement framework</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
