
import React from 'react';
import { Bookmark, Link, Wallet } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const BenefitCard = ({ icon, title, delay }: BenefitCardProps) => (
  <div 
    className="glass-card p-6 flex gap-4 items-start animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className="rounded-full bg-muted p-2 text-crypto-purple">
      {icon}
    </div>
    <p className="text-lg">{title}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section className="bg-secondary">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center animate-fade-in">
          Stay Ahead of the Competition
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <BenefitCard 
            icon={<Bookmark size={20} />} 
            title="Use your own branded domain (e.g., track.mydao.com)" 
            delay="0.1s"
          />
          <BenefitCard 
            icon={<Link size={20} />} 
            title="Create unlimited tracking links for influencers, paid ads, and DAO campaigns" 
            delay="0.2s"
          />
          <BenefitCard 
            icon={<Wallet size={20} />} 
            title="Track wallet-based user journeys across different blockchain networks" 
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
