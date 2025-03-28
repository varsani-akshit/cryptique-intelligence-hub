
import React from 'react';
import { BarChart3, Link, LineChart, Radio } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const FeatureCard = ({ icon, title, delay }: FeatureCardProps) => (
  <div 
    className="glass-card p-6 text-center flex flex-col items-center animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className="rounded-full bg-muted p-4 mb-4 text-crypto-purple">
      {icon}
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

const FeaturesOverview = () => {
  return (
    <section className="bg-secondary" id="features">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Core Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<BarChart3 size={24} />} 
            title="Simplified Dashboard" 
            delay="0.1s"
          />
          <FeatureCard 
            icon={<Link size={24} />} 
            title="On-Chain Attribution" 
            delay="0.2s"
          />
          <FeatureCard 
            icon={<Radio size={24} />} 
            title="Cross-Channel Tracking" 
            delay="0.3s"
          />
          <FeatureCard 
            icon={<LineChart size={24} />} 
            title="Marketing ROI Analysis" 
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
