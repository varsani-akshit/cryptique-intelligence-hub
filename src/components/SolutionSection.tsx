
import React from 'react';
import { Zap, Database, Activity, LineChart } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-64 h-64 bg-crypto-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-crypto-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-5"></div>
      
      {/* Data flow visualization elements */}
      <div className="absolute h-full w-[1px] left-1/4 top-0 bg-crypto-gold/5"></div>
      <div className="absolute h-full w-[1px] left-2/4 top-0 bg-crypto-gold/5"></div>
      <div className="absolute h-full w-[1px] left-3/4 top-0 bg-crypto-gold/5"></div>
      
      {/* Floating data particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 rounded-full bg-crypto-gold/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: '0 0 10px rgba(202, 169, 104, 0.5)'
          }}
        ></div>
      ))}
      
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
            Our Solution: <span className="text-crypto-gold">Redefining Web3 Marketing Intelligence</span>
          </h2>
          
          <div className="glass-card p-8 md:p-10 animate-fade-in relative overflow-hidden" 
               style={{ 
                 animationDelay: '0.1s',
                 background: 'linear-gradient(145deg, rgba(0,0,0,0.9), rgba(29,12,70,0.1))'
               }}
          >
            {/* Digital circuit pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M20 50 L40 50 L40 20 L60 20 L60 50 L80 50" stroke="#CAA968" strokeWidth="1" fill="none" />
                  <path d="M20 80 L40 80 L40 60 L80 60" stroke="#CAA968" strokeWidth="1" fill="none" />
                  <circle cx="40" cy="50" r="3" fill="#CAA968" />
                  <circle cx="60" cy="20" r="3" fill="#CAA968" />
                  <circle cx="40" cy="80" r="3" fill="#CAA968" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </div>
            
            <p className="text-lg leading-relaxed relative z-10">
              We're redefining how Web3 businesses understand their users by merging Web2 behavioral analytics 
              with on-chain data to create entirely new metrics tailored for the decentralized world. We work 
              hands-on with Web3 projects to identify high-signal metrics that matter.
            </p>
            
            {/* Data flow visualization */}
            <div className="mt-8 flex justify-center relative">
              <div className="relative w-full max-w-md h-24">
                {/* Web2 Data Box */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-16 bg-black border border-crypto-navy flex items-center justify-center rounded-md">
                  <div className="text-xs text-center">
                    <Activity size={16} className="mx-auto mb-1 text-crypto-navy" />
                    <span className="text-crypto-gold">Web2 Data</span>
                  </div>
                </div>
                
                {/* On-Chain Data Box */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-16 bg-black border border-crypto-navy flex items-center justify-center rounded-md">
                  <div className="text-xs text-center">
                    <Database size={16} className="mx-auto mb-1 text-crypto-navy" />
                    <span className="text-crypto-gold">On-Chain Data</span>
                  </div>
                </div>
                
                {/* Cryptique Engine */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-crypto-navy/20 border border-crypto-gold rounded-full flex items-center justify-center z-10 animate-pulse-glow">
                  <div className="text-xs text-center">
                    <img 
                      src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
                      alt="Cryptique Logo" 
                      className="w-6 h-6 mx-auto mb-1"
                    />
                    <span className="text-crypto-gold">Cryptique</span>
                  </div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Web2 to Cryptique */}
                  <path 
                    d="M24 12 L100 30" 
                    stroke="#CAA968" 
                    strokeWidth="1" 
                    strokeDasharray="3,2" 
                    fill="none"
                    className="animate-pulse-glow"
                  />
                  
                  {/* On-Chain to Cryptique */}
                  <path 
                    d="M200 12 L124 30" 
                    stroke="#CAA968" 
                    strokeWidth="1" 
                    strokeDasharray="3,2" 
                    fill="none"
                    className="animate-pulse-glow"
                    style={{ animationDelay: "0.5s" }}
                  />
                  
                  {/* Data Packet Animation */}
                  <circle r="2" fill="#CAA968">
                    <animateMotion
                      path="M24 12 L100 30"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle r="2" fill="#CAA968">
                    <animateMotion
                      path="M200 12 L124 30"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
            
            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
