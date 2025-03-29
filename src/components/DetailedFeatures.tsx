
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
      className="bg-white border border-crypto-gold/20 backdrop-blur-lg rounded-xl animate-fade-in relative overflow-hidden transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-[0_0_30px_rgba(202,169,104,0.2)] h-full" 
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 h-full">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className={`rounded-full inline-flex p-3 mb-4 ${iconColor} relative ${isHovered ? 'animate-feature-hover' : ''}`}>
              {icon}
              <div className={`absolute inset-0 rounded-full opacity-30 transition-opacity duration-500 ${isHovered ? 'animate-ping' : ''}`} style={{background: 'radial-gradient(circle, rgba(202,169,104,0.3) 0%, rgba(0,0,0,0) 70%)'}}></div>
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isHovered ? 'gold-navy-text' : 'text-crypto-dark'} transition-colors duration-300`}>{title}</h3>
            <p className="text-crypto-dark/80 leading-relaxed">{description}</p>
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
  // Define consistent descriptions with similar length
  const features = [
    {
      icon: <Link2 className="w-6 h-6 text-white" />,
      title: "Simplified Integration & Use",
      description: "Streamlined integration with social media, Dapps & smart contracts, with intuitive analytics for quicker growth optimization.",
      iconColor: "bg-gradient-to-br from-crypto-gold to-amber-600",
      image: "/lovable-uploads/f962f9fa-c482-4862-b8d7-4153300ff96c.png"
    },
    {
      icon: <Radio className="w-6 h-6 text-white" />,
      title: "Multi-Channel Attribution",
      description: "Track user journeys from first click to final transaction. Identify drop-off points to boost retention and target re-engagement effectively.",
      iconColor: "bg-gradient-to-br from-crypto-navy to-blue-700",
      image: "/lovable-uploads/7d013bca-7892-4c58-87ee-24c57b680f14.png"
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: "Campaign Analysis",
      description: "Monitor every interaction across marketing channels - from clicks and wallet connections to smart contract interactions and token transfers.",
      iconColor: "bg-gradient-to-br from-purple-600 to-indigo-700",
      image: "/lovable-uploads/4a9f07f6-15d0-4d26-b886-d47c43f1ffc1.png"
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI-Powered Insights",
      description: "Let Cryptique AI handle data interpretation, delivering actionable campaign and user insights that save hours of manual analytics work.",
      iconColor: "bg-gradient-to-br from-crypto-gold to-amber-600",
      image: "/lovable-uploads/ebd7ff3a-c501-4c22-a327-a3498a5d6047.png"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Smart KOL Payouts",
      description: "Automate Key Opinion Leader compensation based on actual conversion metrics through smart contracts, ensuring fair value for marketing spend.",
      iconColor: "bg-gradient-to-br from-crypto-navy to-blue-700",
      image: "/lovable-uploads/914b279a-f76b-427f-9046-5787335e9bda.png"
    }
  ];

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
          {features.map((feature, index) => (
            <FeatureBlock 
              key={`feature-${index}`}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              delay={`${0.1 + index * 0.2}s`}
              index={index + 1}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
