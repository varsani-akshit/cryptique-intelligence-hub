
import React, { useState } from 'react';
import { UserCheck, Database, Brain, LineChart, ChevronRight, Zap, Link2, Radio, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  delay: string;
  index: number;
  image?: string;
}

const FeatureBlock = ({ 
  icon, 
  title, 
  description, 
  iconColor, 
  delay,
  index,
  image
}: FeatureBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-white border border-crypto-gold/20 backdrop-blur-lg rounded-xl animate-fade-in relative overflow-hidden transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-[0_0_30px_rgba(202,169,104,0.2)]" 
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className={`rounded-full inline-flex p-3 mb-4 ${iconColor} relative ${isHovered ? 'animate-feature-hover' : ''}`}>
              {icon}
              <div className={`absolute inset-0 rounded-full opacity-30 transition-opacity duration-500 ${isHovered ? 'animate-ping' : ''}`} style={{background: 'radial-gradient(circle, rgba(202,169,104,0.3) 0%, rgba(0,0,0,0) 70%)'}}></div>
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isHovered ? 'gold-navy-text' : 'text-crypto-dark'} transition-colors duration-300`}>{title}</h3>
            <p className="text-crypto-dark/80 leading-relaxed">{description}</p>
            {isHovered && (
              <button className="mt-4 text-crypto-navy border border-crypto-gold/50 px-4 py-2 rounded-md flex items-center hover:bg-crypto-gold/10 transition-colors duration-300">
                <span className="mr-2">Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {image && (
            <div className="md:w-1/2 relative group overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={title} 
                className={`w-full h-auto rounded-md border border-crypto-gold/20 transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`} 
              />
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-crypto-navy/10 to-crypto-gold/10 opacity-50"></div>
              )}
            </div>
          )}
        </div>
        
        {/* Interactive data visualization */}
        <div className="absolute bottom-0 right-0 w-full h-32 opacity-20 overflow-hidden pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
            <path 
              d={`M0,${50 + Math.sin(index) * 20} ${Array.from({length: 10}, (_, i) => `L${50 * (i+1)},${50 + Math.sin(index + i/2) * 20}`).join(' ')}`} 
              stroke={isHovered ? "#1D0C46" : "#CAA968"} 
              strokeWidth="2" 
              fill="none" 
              className={isHovered ? 'animate-pulse' : ''}
            />
            <circle r="4" fill="#CAA968" opacity="0.6">
              <animateMotion 
                path={`M0,${50 + Math.sin(index) * 20} ${Array.from({length: 10}, (_, i) => `L${50 * (i+1)},${50 + Math.sin(index + i/2) * 20}`).join(' ')}`} 
                dur={`${10 - index}s`} 
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        
        {/* Digital circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id={`micro-circuit-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M10 25 L20 25 L20 10 L30 10 L30 25 L40 25" stroke="#CAA968" strokeWidth="0.5" fill="none" />
              <path d="M10 40 L20 40 L20 30 L40 30" stroke="#CAA968" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="25" r="1" fill="#CAA968" />
              <circle cx="30" cy="10" r="1" fill="#CAA968" />
              <circle cx="20" cy="40" r="1" fill="#CAA968" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#micro-circuit-${index})`} />
          </svg>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div className="absolute top-0 right-0 w-6 h-[1px] bg-crypto-gold/30"></div>
          <div className="absolute top-0 right-0 h-6 w-[1px] bg-crypto-gold/30"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-6 h-[1px] bg-crypto-gold/30"></div>
          <div className="absolute bottom-0 left-0 h-6 w-[1px] bg-crypto-gold/30"></div>
        </div>
        
        {/* Glowing edge on hover */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-crypto-navy/50 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-crypto-gold/50 to-transparent"></div>
        </div>
      </CardContent>
    </Card>
  );
};

const DetailedFeatures = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white" id="features">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      
      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            <span className="relative">
              <span className="gold-navy-text">Features</span>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
            </span>
          </h2>
          <p className="text-crypto-dark/80 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover how Cryptique revolutionizes marketing in Web3, bringing together the best of both worlds for unprecedented engagement and conversion optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10">
          <FeatureBlock 
            icon={<Link2 className="w-6 h-6 text-white" />}
            title="Simplified Integration & Use"
            description="We believe in simplification both with integration and analytics, we analyse every interaction with your socials, Dapps & smart contracts and present it in an easy to comprehend medium so that you can optimise your growth much quicker."
            iconColor="bg-gradient-to-br from-crypto-gold to-amber-600"
            delay="0.1s"
            index={1}
            image="/lovable-uploads/1c358ad9-706c-4b04-acf1-de20a43a1047.png"
          />
          
          <FeatureBlock 
            icon={<Radio className="w-6 h-6 text-white" />}
            title="Cross Channel Tracking"
            description="Track every link click, wallet connection, smart contract interaction, and token transfer across all marketing channels. Whether it's Twitter campaigns, influencer referrals, Discord invites, or DAO proposals, all data is under one roof for deep analysis."
            iconColor="bg-gradient-to-br from-crypto-navy to-blue-700"
            delay="0.3s"
            index={2}
            image="/lovable-uploads/932fd99b-baaf-48b3-a282-032c154ed936.png"
          />
          
          <FeatureBlock 
            icon={<BarChart className="w-6 h-6 text-white" />}
            title="Campaign Analysis"
            description="Track every link click, wallet connection, smart contract interaction, and token transfer across all marketing channels. Whether it's Twitter campaigns, influencer referrals, Discord invites, or DAO proposals, all data is under one roof for deep analysis."
            iconColor="bg-gradient-to-br from-purple-600 to-indigo-700"
            delay="0.5s"
            index={3}
            image="/lovable-uploads/3cb936f6-fcfe-4837-b598-10e19661614a.png"
          />
          
          <FeatureBlock 
            icon={<Brain className="w-6 h-6 text-white" />}
            title="AI-Powered Insights with CQ AI"
            description="Skip manual analytics—ask Cryptique AI for deep campaign-level and user-level insights, saving hours of time spent on data interpretation."
            iconColor="bg-gradient-to-br from-crypto-gold to-amber-600"
            delay="0.7s"
            index={4}
            image="/lovable-uploads/ef32b86b-83ad-4452-9c2b-22a3505a4ea8.png"
          />
          
          <FeatureBlock 
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Smart KOL Payouts"
            description="Don't overpay KOL's without knowing how much they bring to the table, with Cryptique we revolutionise the way KOL's get incentivesed by paying them for the conversions they bring, all automated using smart contracts."
            iconColor="bg-gradient-to-br from-crypto-navy to-blue-700"
            delay="0.9s"
            index={5}
            image="/lovable-uploads/05063647-f89a-4f6a-b43f-6d693aeaa772.png"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
