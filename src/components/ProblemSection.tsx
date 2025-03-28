
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
    className="glass-card p-6 flex items-center space-x-4 animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className="rounded-full bg-muted p-3 text-crypto-orange">
      <Icon size={20} />
    </div>
    <div className="text-lg font-medium">{title}</div>
  </div>
);

const ProblemSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            The Problem: <span className="text-crypto-orange">Outdated Metrics Hinder Web3 Growth</span>
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
            Web3 needs a new measurement framework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
