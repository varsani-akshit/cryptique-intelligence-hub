
import React from 'react';
import { UserCheck, Database, Brain, LineChart } from 'lucide-react';

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  delay: string;
}

const FeatureBlock = ({ 
  icon, 
  title, 
  description, 
  iconColor, 
  delay 
}: FeatureBlockProps) => (
  <div 
    className="glass-card p-8 animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className={`rounded-full inline-flex p-3 mb-4 ${iconColor}`}>
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
    <p className="text-foreground/80 leading-relaxed">{description}</p>
  </div>
);

const DetailedFeatures = () => {
  return (
    <section className="bg-secondary" id="solutions">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Solutions to Supercharge Your Web3 Marketing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBlock 
            icon={<UserCheck size={24} />} 
            title="Web3 User Identification" 
            description="We go beyond just tracking link clicks—we analyze wallet interactions, cross-chain movements, and community engagement to create a detailed user profile."
            iconColor="bg-crypto-purple/20 text-crypto-purple"
            delay="0.1s"
          />
          
          <FeatureBlock 
            icon={<Database size={24} />} 
            title="Unify All Your Marketing & Community Data" 
            description="Track every link click, wallet connection, smart contract interaction, and token transfer across all marketing channels. Whether it's Twitter campaigns, influencer referrals, Discord invites, or DAO proposals, all data is under one roof for deep analysis."
            iconColor="bg-crypto-blue/20 text-crypto-blue"
            delay="0.2s"
          />
          
          <FeatureBlock 
            icon={<Brain size={24} />} 
            title="AI-Powered Insights with Cryptique Intelligence" 
            description="Skip manual analytics—ask Cryptique AI for deep campaign-level and user-level insights, saving hours of time spent on data interpretation."
            iconColor="bg-crypto-pink/20 text-crypto-pink"
            delay="0.3s"
          />
          
          <FeatureBlock 
            icon={<LineChart size={24} />} 
            title="Track Revenue & Retention from Web3 Users" 
            description="Monitor on-chain conversions, token purchases, and staking behaviors to identify your highest-value users and optimize your marketing spend accordingly."
            iconColor="bg-crypto-green/20 text-crypto-green"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
