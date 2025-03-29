
import React, { useState } from 'react';
import { UserCheck, Database, Brain, LineChart, ChevronRight, Zap, BarChart, Link2, Radio } from 'lucide-react';
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
        
        {/* Hover indicator - now handled by the button above */}
        
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
    <section className="bg-white relative overflow-hidden py-0" id="solutions">
      {/* Animated background elements */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-crypto-navy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-crypto-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      
      {/* Data flow lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-crypto-gold/5"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-crypto-gold/5"></div>
      
      <div className="container-section relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          The Future of <span className="gold-navy-text">Web3 Marketing</span> Starts Here
        </h2>
        
        <div className="space-y-8">
          <FeatureBlock 
            icon={<BarChart size={24} className="text-crypto-navy" />} 
            title="Simplified Integration & Use" 
            description="We believe in simplification both with integration and analytics, we analyse every interaction with your socials, Dapps & smart contracts and present it in an easy to comprehend medium so that you can optimise your growth much quicker."
            iconColor="bg-white text-crypto-gold"
            delay="0.1s"
            index={0}
            image="/lovable-uploads/02c84c52-6d08-455a-a5da-fd3cadfdc771.png"
          />
          
          <FeatureBlock 
            icon={<Radio size={24} className="text-crypto-navy" />} 
            title="Cross Channel Tracking" 
            description="Skip manual analytics—ask Cryptique AI for deep campaign-level and user-level insights, saving hours of time spent on data interpretation."
            iconColor="bg-white text-crypto-gold"
            delay="0.2s"
            index={1}
            image="/lovable-uploads/ef32b86b-83ad-4452-9c2b-22a3505a4ea8.png"
          />
        
          <FeatureBlock 
            icon={<Link2 size={24} className="text-crypto-navy" />} 
            title="Campaign Analysis" 
            description="Track every link click, wallet connection, smart contract interaction, and token transfer across all marketing channels. Whether it's Twitter campaigns, influencer referrals, Discord invites, or DAO proposals, all data is under one roof for deep analysis."
            iconColor="bg-white text-crypto-gold"
            delay="0.3s"
            index={2}
            image="/lovable-uploads/54599ecb-81e5-4644-9f45-3a41fd39edd3.png"
          />
          
          <FeatureBlock 
            icon={<Brain size={24} className="text-crypto-navy" />} 
            title="AI-Powered Insights with CQ AI" 
            description="Skip manual analytics—ask Cryptique AI for deep campaign-level and user-level insights, saving hours of time spent on data interpretation."
            iconColor="bg-white text-crypto-gold"
            delay="0.4s"
            index={3}
            image="/lovable-uploads/3cb936f6-fcfe-4837-b598-10e19661614a.png"
          />
        
          <FeatureBlock 
            icon={<Zap size={24} className="text-crypto-navy" />} 
            title="Smart KOL Payouts" 
            description="Don't overpay KOL's without knowing how much they bring to the table, with Cryptique we revolutionise the way KOL's get incentivesed by paying them for the conversions they bring, all automated using smart contracts."
            iconColor="bg-white text-crypto-gold"
            delay="0.5s"
            index={4}
            image="/lovable-uploads/1c358ad9-706c-4b04-acf1-de20a43a1047.png"
          />
        </div>
        
        {/* SDKs Available Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            SDKs Available for
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center flex flex-col items-center space-y-4 animate-fade-in">
              <div className="rounded-full bg-white/50 p-3 text-crypto-gold relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                <div className="absolute inset-0 rounded-full animate-neon-pulse opacity-50"></div>
              </div>
              <h3 className="text-xl font-semibold text-crypto-dark">Web</h3>
            </div>
            
            <div className="glass-card p-6 text-center flex flex-col items-center space-y-4 animate-fade-in opacity-70">
              <div className="rounded-full bg-white/50 p-3 text-crypto-gold/70 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                <div className="absolute inset-0 rounded-full animate-neon-pulse opacity-50"></div>
              </div>
              <h3 className="text-xl font-semibold text-crypto-dark">Android <span className="text-sm text-crypto-gold/60">(Coming Soon)</span></h3>
            </div>
            
            <div className="glass-card p-6 text-center flex flex-col items-center space-y-4 animate-fade-in opacity-70">
              <div className="rounded-full bg-white/50 p-3 text-crypto-gold/70 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a8 8 0 0 0 8-8"/><path d="M12 22a8 8 0 0 1-8-8"/><path d="M17 22a8 8 0 0 0 4-4"/><path d="M17 2a8 8 0 0 0-4 4"/><path d="M7 22a8 8 0 0 1-4-4"/><path d="M7 2a8 8 0 0 1 4 4"/><path d="M12 2a8 8 0 0 0-8 8"/><path d="M12 2a8 8 0 0 1 8 8"/><circle cx="12" cy="12" r="3"/></svg>
                <div className="absolute inset-0 rounded-full animate-neon-pulse opacity-50"></div>
              </div>
              <h3 className="text-xl font-semibold text-crypto-dark">iOS <span className="text-sm text-crypto-gold/60">(Coming Soon)</span></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
