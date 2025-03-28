
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
    className="glass-card p-8 animate-fade-in relative" 
    style={{ animationDelay: delay }}
  >
    <div className={`rounded-full inline-flex p-3 mb-4 ${iconColor}`}>
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
    <p className="text-foreground/80 leading-relaxed">{description}</p>
    
    {/* Circuit board pattern overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="circuit-mini" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M10 25 L20 25 L20 10 L30 10 L30 25 L40 25" stroke="#CAA968" strokeWidth="0.5" fill="none" />
          <path d="M10 40 L20 40 L20 30 L40 30" stroke="#CAA968" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="25" r="1.5" fill="#CAA968" />
          <circle cx="30" cy="10" r="1.5" fill="#CAA968" />
          <circle cx="20" cy="40" r="1.5" fill="#CAA968" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-mini)" />
      </svg>
    </div>
    
    {/* Animated corner accent */}
    <div className="absolute bottom-0 right-0 w-12 h-12">
      <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-crypto-gold/30"></div>
      <div className="absolute bottom-0 right-0 h-8 w-[1px] bg-crypto-gold/30"></div>
    </div>
  </div>
);

const DetailedFeatures = () => {
  return (
    <section className="bg-black relative overflow-hidden" id="solutions">
      {/* Animated background elements */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-crypto-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-crypto-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      
      {/* Data flow lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-crypto-gold/5"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-crypto-gold/5"></div>
      
      {/* Scanning line effect */}
      <div className="absolute h-0.5 w-full bg-crypto-gold/10 top-0 left-0" style={{ animation: 'scanline 8s linear infinite' }}></div>
      
      <div className="container-section relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in relative inline-block">
          Solutions to <span className="text-crypto-gold">Supercharge</span> Your Web3 Marketing
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBlock 
            icon={<UserCheck size={24} />} 
            title="Web3 User Identification" 
            description="We go beyond just tracking link clicks—we analyze wallet interactions, cross-chain movements, and community engagement to create a detailed user profile."
            iconColor="bg-crypto-navy/20 text-crypto-gold"
            delay="0.1s"
          />
          
          <FeatureBlock 
            icon={<Database size={24} />} 
            title="Unify All Your Marketing & Community Data" 
            description="Track every link click, wallet connection, smart contract interaction, and token transfer across all marketing channels. Whether it's Twitter campaigns, influencer referrals, Discord invites, or DAO proposals, all data is under one roof for deep analysis."
            iconColor="bg-crypto-navy/20 text-crypto-gold"
            delay="0.2s"
          />
          
          <FeatureBlock 
            icon={<Brain size={24} />} 
            title="AI-Powered Insights with Cryptique Intelligence" 
            description="Skip manual analytics—ask Cryptique AI for deep campaign-level and user-level insights, saving hours of time spent on data interpretation."
            iconColor="bg-crypto-navy/20 text-crypto-gold"
            delay="0.3s"
          />
          
          <FeatureBlock 
            icon={<LineChart size={24} />} 
            title="Track Revenue & Retention from Web3 Users" 
            description="Monitor on-chain conversions, token purchases, and staking behaviors to identify your highest-value users and optimize your marketing spend accordingly."
            iconColor="bg-crypto-navy/20 text-crypto-gold"
            delay="0.4s"
          />
        </div>
        
        {/* Data flow visualization */}
        <div className="mt-16 relative h-16 hidden md:block">
          <div className="absolute left-0 w-full top-1/2 -translate-y-1/2 h-[1px] bg-crypto-gold/20"></div>
          
          {/* Data packet animations */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-crypto-gold/60"
              style={{
                left: '5%',
                animation: 'float 15s linear infinite',
                animationDelay: `${i * 5}s`
              }}
            ></div>
          ))}
          
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-crypto-gold/40 flex items-center justify-center">
            <div className="w-2 h-2 bg-crypto-gold/80 rounded-full animate-pulse"></div>
          </div>
          
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-crypto-gold/40 flex items-center justify-center">
            <div className="w-3 h-3 bg-crypto-gold/80 rounded-full animate-pulse"></div>
          </div>
          
          <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-crypto-gold/40 flex items-center justify-center">
            <div className="w-2 h-2 bg-crypto-gold/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
