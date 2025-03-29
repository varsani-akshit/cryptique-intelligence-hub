
import React, { useState } from 'react';
import { UserCheck, Database, Brain, LineChart, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  delay: string;
  index: number;
}

const FeatureBlock = ({ 
  icon, 
  title, 
  description, 
  iconColor, 
  delay,
  index
}: FeatureBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-black/80 border border-crypto-gold/20 backdrop-blur-lg rounded-xl animate-fade-in relative overflow-hidden transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-[0_0_30px_rgba(202,169,104,0.2)]" 
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8">
        <div className={`rounded-full inline-flex p-3 mb-4 ${iconColor} relative`}>
          {icon}
          <div className={`absolute inset-0 rounded-full opacity-30 transition-opacity duration-500 ${isHovered ? 'animate-ping' : ''}`} style={{background: 'radial-gradient(circle, rgba(202,169,104,0.3) 0%, rgba(0,0,0,0) 70%)'}}></div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
        
        {/* Data visualization elements */}
        <div className="absolute bottom-0 right-0 w-full h-20 opacity-20 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
            <path 
              d={`M0,${50 + Math.sin(index) * 20} ${Array.from({length: 10}, (_, i) => `L${50 * (i+1)},${50 + Math.sin(index + i/2) * 20}`).join(' ')}`} 
              stroke="#CAA968" 
              strokeWidth="2" 
              fill="none" 
            />
            <circle r="4" fill="#CAA968" opacity="0.6">
              <animateMotion 
                path={`M0,${50 + Math.sin(index) * 20} ${Array.from({length: 10}, (_, i) => `L${50 * (i+1)},${50 + Math.sin(index + i/2) * 20}`).join(' ')}`} 
                dur="10s" 
                repeatCount="indefinite"
              />
            </circle>
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
        
        {/* Hover indicator */}
        <div className={`absolute bottom-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <ChevronRight className="w-5 h-5 text-crypto-gold" />
        </div>
      </CardContent>
    </Card>
  );
};

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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in relative inline-block mx-auto">
          Solutions to <span className="text-crypto-gold">Supercharge</span> Your Web3 Marketing
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBlock 
            icon={<UserCheck size={24} />} 
            title="Web3 User Identification" 
            description="We go beyond just tracking link clicks—we analyze wallet interactions, cross-chain movements, and community engagement to create a detailed user profile."
            iconColor="bg-black text-crypto-gold"
            delay="0.1s"
            index={0}
          />
          
          <FeatureBlock 
            icon={<Database size={24} />} 
            title="Unify All Your Marketing & Community Data" 
            description="Track every link click, wallet connection, smart contract interaction, and token transfer across all marketing channels. Whether it's Twitter campaigns, influencer referrals, Discord invites, or DAO proposals, all data is under one roof for deep analysis."
            iconColor="bg-black text-crypto-gold"
            delay="0.2s"
            index={1}
          />
          
          <FeatureBlock 
            icon={<Brain size={24} />} 
            title="AI-Powered Insights with Cryptique Intelligence" 
            description="Skip manual analytics—ask Cryptique AI for deep campaign-level and user-level insights, saving hours of time spent on data interpretation."
            iconColor="bg-black text-crypto-gold"
            delay="0.3s"
            index={2}
          />
          
          <FeatureBlock 
            icon={<LineChart size={24} />} 
            title="Track Revenue & Retention from Web3 Users" 
            description="Monitor on-chain conversions, token purchases, and staking behaviors to identify your highest-value users and optimize your marketing spend accordingly."
            iconColor="bg-black text-crypto-gold"
            delay="0.4s"
            index={3}
          />
        </div>
        
        {/* Data visualization */}
        <div className="mt-20 relative">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h3 className="text-2xl font-bold text-center mb-4">Real-Time <span className="text-crypto-gold">Data Processing</span></h3>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
            </div>
          </div>
          
          <div className="relative h-32 mx-auto max-w-4xl">
            <svg className="w-full h-full" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
              {/* Base line */}
              <path d="M100 50 L900 50" stroke="#CAA968" strokeWidth="0.5" strokeDasharray="5,3" opacity="0.3" />
              
              {/* Data Flow Visualization */}
              <path 
                d="M100,50 C200,90 300,10 400,50 C500,90 600,10 700,50 C800,90 900,10 900,50" 
                stroke="#CAA968" 
                strokeWidth="2" 
                fill="none"
                opacity="0.7"
              />
              
              {/* Data Points */}
              {Array.from({length: 9}).map((_, i) => (
                <circle 
                  key={i} 
                  cx={100 + i * 100} 
                  cy={50 + (i % 2 === 0 ? -15 : 15) * Math.sin(i/2)} 
                  r={3 + Math.random() * 2} 
                  fill="#CAA968" 
                  opacity="0.8"
                >
                  <animate 
                    attributeName="opacity" 
                    values="0.3;0.8;0.3" 
                    dur={`${2 + i % 3}s`} 
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
              
              {/* Moving Data Packets */}
              {Array.from({length: 5}).map((_, i) => (
                <circle key={i + 10} r="4" fill="#CAA968">
                  <animateMotion
                    path="M100,50 C200,90 300,10 400,50 C500,90 600,10 700,50 C800,90 900,10 900,50"
                    dur="8s"
                    begin={`${i * 1.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur="8s"
                    begin={`${i * 1.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
              
              {/* Vertical Data Points */}
              {Array.from({length: 5}).map((_, i) => (
                <g key={i + 20}>
                  <line 
                    x1={200 + i * 150} 
                    y1="35" 
                    x2={200 + i * 150} 
                    y2="65" 
                    stroke="#CAA968" 
                    strokeWidth="0.5" 
                    opacity="0.5"
                  />
                  <circle 
                    cx={200 + i * 150} 
                    cy="35" 
                    r="2" 
                    fill="#CAA968" 
                    opacity="0.6"
                  />
                  <circle 
                    cx={200 + i * 150} 
                    cy="65" 
                    r="2" 
                    fill="#CAA968" 
                    opacity="0.6"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
