
import React, { useRef, useEffect } from 'react';
import { BarChart3, Link, Radio, LineChart, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              cardRef.current.classList.add('translate-y-0', 'opacity-100');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-6 text-center flex flex-col items-center transform translate-y-10 opacity-0 transition-all duration-700 cyber-frame" 
      style={{ 
        transitionDelay: delay,
        background: 'linear-gradient(145deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
        boxShadow: '0 0 20px rgba(29, 12, 70, 0.3)'
      }}
    >
      <div className="rounded-full bg-black/50 p-4 mb-4 text-crypto-gold relative">
        <div className="absolute inset-0 rounded-full animate-neon-pulse opacity-50"></div>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="micro-circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M10 25 L20 25 L20 10 L30 10 L30 25 L40 25" stroke="#CAA968" strokeWidth="0.5" fill="none" />
            <path d="M10 40 L20 40 L20 30 L40 30" stroke="#CAA968" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="25" r="1" fill="#CAA968" />
            <circle cx="30" cy="10" r="1" fill="#CAA968" />
            <circle cx="20" cy="40" r="1" fill="#CAA968" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#micro-circuit)" />
        </svg>
      </div>
    </div>
  );
};

const FeaturesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && headingRef.current) {
            headingRef.current.classList.add('translate-y-0', 'opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-black relative overflow-hidden py-0" 
      id="features"
      aria-labelledby="features-heading"
    >
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-futuristic-glow opacity-30"></div>
      
      <div className="container-section relative z-10">
        <h2 
          id="features-heading"
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-6 text-center transform translate-y-10 opacity-0 transition-all duration-700"
        >
          <span className="relative">
            Powerful <span className="text-crypto-gold">Web3 Marketing</span> Features
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          <FeatureCard 
            icon={<BarChart3 size={24} />} 
            title="Simplified Dashboard" 
            description="All your Web3 marketing metrics in one intuitive platform"
            delay="0.1s"
          />
          <FeatureCard 
            icon={<Link size={24} />} 
            title="On-Chain Attribution" 
            description="Connect marketing efforts to blockchain transactions"
            delay="0.2s"
          />
          <FeatureCard 
            icon={<Radio size={24} />} 
            title="Cross-Channel Tracking" 
            description="Unified view of all crypto marketing channels"
            delay="0.3s"
          />
          <FeatureCard 
            icon={<LineChart size={24} />} 
            title="Marketing ROI Analysis" 
            description="Measure real returns on your Web3 campaigns"
            delay="0.4s"
          />
          <FeatureCard 
            icon={<Users size={24} />} 
            title="Custom Audiences" 
            description="Target wallet segments for better crypto ads"
            delay="0.5s"
          />
        </div>
        
        {/* Data flow visualization */}
        <div className="mt-12 relative h-40">
          <svg 
            className="w-full h-full absolute top-0 left-0" 
            viewBox="0 0 1000 120" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.5 }}
            aria-hidden="true"
          >
            {/* Base grid */}
            <line x1="0" y1="60" x2="1000" y2="60" stroke="#CAA968" strokeWidth="0.5" strokeDasharray="5,5" />
            
            {/* Data flow path */}
            <path 
              d="M0,60 C200,20 400,100 600,60 C800,20 1000,60 1000,60" 
              stroke="#CAA968" 
              strokeWidth="1.5" 
              fill="none" 
            />
            
            {/* Moving data particles */}
            {Array.from({ length: 5 }).map((_, i) => (
              <circle key={i} r="3" fill="#CAA968">
                <animateMotion
                  path="M0,60 C200,20 400,100 600,60 C800,20 1000,60 1000,60"
                  dur="10s"
                  begin={`${i * 2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="10s"
                  begin={`${i * 2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            
            {/* Data nodes */}
            {Array.from({ length: 6 }).map((_, i) => (
              <g key={i + 10}>
                <circle 
                  cx={i * 200} 
                  cy="60" 
                  r="4" 
                  fill="#CAA968" 
                  opacity="0.7"
                >
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="3s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle 
                  cx={i * 200} 
                  cy="60" 
                  r="8" 
                  stroke="#CAA968" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.3"
                />
              </g>
            ))}
          </svg>
        </div>
        
        {/* SEO-friendly section with schema markup */}
        <div className="mt-12 text-center" itemScope itemType="https://schema.org/ItemList">
          <meta itemProp="itemListOrder" content="Unordered" />
          <h3 className="text-xl text-crypto-gold mb-4">Why Choose Our Web3 Marketing Platform</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Complete On-Chain Attribution</span>
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Web3 Native Analytics</span>
              <meta itemProp="position" content="2" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Crypto Marketing Optimization</span>
              <meta itemProp="position" content="3" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Wallet Journey Tracking</span>
              <meta itemProp="position" content="4" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Martech Integration</span>
              <meta itemProp="position" content="5" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
