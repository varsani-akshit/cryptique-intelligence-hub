import React, { useRef, useEffect } from 'react';
import { Bookmark, Link, Wallet, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
  index: number;
}

const BenefitCard = ({ icon, title, delay, index }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
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
      className={`glass-card p-8 flex gap-6 items-start transform translate-y-20 opacity-0 transition-all duration-700 interactive-element`} 
      style={{ 
        transitionDelay: delay,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,249,250,0.85))',
        borderColor: index % 2 === 0 ? 'rgba(202,169,104,0.3)' : 'rgba(29,12,70,0.2)'
      }}
    >
      <div className="rounded-full bg-gradient-to-br from-crypto-gold/20 to-crypto-navy/20 p-4 text-crypto-navy">
        {icon}
      </div>
      <div>
        <p className="text-xl font-montserrat font-semibold mb-2 text-crypto-dark">{title}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headingRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight * 0.8) {
        headingRef.current.classList.add('translate-y-0', 'opacity-100');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
      id="benefits"
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #f8f9fa, #ffffff)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Navy accent spots */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-crypto-navy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-crypto-navy/8 rounded-full blur-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container-section relative z-10">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center transform translate-y-20 opacity-0 transition-all duration-1000"
        >
          <span className="text-crypto-navy">Stay Ahead of the </span>
          <span className="bg-gold-navy-gradient bg-clip-text text-transparent">Competition</span>
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          <BenefitCard 
            icon={<Bookmark size={24} className="text-gradient-gold-navy" />} 
            title="40% less marketing spend, 3x more conversion & 120+ hours saved." 
            delay="0.1s"
            index={0}
          />
          <BenefitCard 
            icon={<Link size={24} className="text-gradient-gold-navy" />} 
            title="Create unlimited tracking links for influencers, paid ads, and DAO campaigns" 
            delay="0.3s"
            index={1}
          />
          <BenefitCard 
            icon={<Wallet size={24} className="text-gradient-gold-navy" />} 
            title="Track wallet-based user journeys across different blockchain networks" 
            delay="0.5s"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
