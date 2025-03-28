
import React, { useRef, useEffect } from 'react';
import { BarChart3, Link, Radio, LineChart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const FeatureCard = ({ icon, title, delay }: FeatureCardProps) => {
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
        background: 'linear-gradient(145deg, rgba(0,0,0,0.9), rgba(29,12,70,0.2))',
        boxShadow: '0 0 20px rgba(29, 12, 70, 0.3)'
      }}
    >
      <div className="rounded-full bg-black/50 p-4 mb-4 text-crypto-gold relative">
        <div className="absolute inset-0 rounded-full animate-neon-pulse opacity-50"></div>
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
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
    <section ref={sectionRef} className="bg-black relative overflow-hidden" id="features">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-futuristic-glow opacity-30"></div>
      
      <div className="scanline"></div>
      
      <div className="container-section relative z-10">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-6 text-center transform translate-y-10 opacity-0 transition-all duration-700"
        >
          Core <span className="text-crypto-gold">Features</span>
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
