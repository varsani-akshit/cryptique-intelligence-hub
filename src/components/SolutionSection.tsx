
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
                 background: 'linear-gradient(145deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))'
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
            
            {/* Enhanced Data Pipeline Visualization */}
            <div className="mt-12 relative h-64 mx-auto">
              {/* Data Flow Lines */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                <svg className="w-full h-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100">
                  {/* Web2 to Cryptique Paths */}
                  <path 
                    d="M50,30 C100,30 150,50 200,50" 
                    stroke="#CAA968" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="5,3"
                  />
                  
                  {/* On-Chain to Cryptique Paths */}
                  <path 
                    d="M750,30 C700,30 650,50 600,50" 
                    stroke="#CAA968" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="5,3"
                  />
                  
                  {/* Main Flow Path */}
                  <path 
                    d="M200,50 C250,50 270,20 300,20 C330,20 350,80 380,80 C410,80 430,20 460,20 C490,20 510,80 540,80 C570,80 590,50 600,50" 
                    stroke="#CAA968" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                  
                  {/* Animated Data Packets */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <circle key={i} r="3" fill="#CAA968">
                      <animateMotion
                        path="M50,30 C100,30 150,50 200,50 C250,50 270,20 300,20 C330,20 350,80 380,80 C410,80 430,20 460,20 C490,20 510,80 540,80 C570,80 590,50 600,50"
                        dur="6s"
                        begin={`${i * 1.2}s`}
                        repeatCount="indefinite"
                      />
                      <animate attributeName="opacity" values="0;1;1;0" dur="6s" begin={`${i * 1.2}s`} repeatCount="indefinite" />
                    </circle>
                  ))}
                  
                  {Array.from({ length: 5 }).map((_, i) => (
                    <circle key={i+5} r="3" fill="#CAA968">
                      <animateMotion
                        path="M750,30 C700,30 650,50 600,50 C550,50 530,80 500,80 C470,80 450,20 420,20 C390,20 370,80 340,80 C310,80 290,50 260,50 C230,50 210,20 200,20"
                        dur="6s"
                        begin={`${i * 1.2}s`}
                        repeatCount="indefinite"
                      />
                      <animate attributeName="opacity" values="0;1;1;0" dur="6s" begin={`${i * 1.2}s`} repeatCount="indefinite" />
                    </circle>
                  ))}
                </svg>
              </div>
              
              {/* Web2 Data Box */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-36 h-24 bg-black border border-crypto-gold/50 flex items-center justify-center rounded-md z-10 cyber-frame">
                <div className="text-sm text-center">
                  <Activity size={20} className="mx-auto mb-2 text-crypto-gold" />
                  <span className="text-crypto-gold font-semibold">Web2 Data</span>
                  <div className="text-xs text-white/70 mt-1">User Behavior</div>
                </div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-crypto-gold/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* On-Chain Data Box */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-36 h-24 bg-black border border-crypto-gold/50 flex items-center justify-center rounded-md z-10 cyber-frame">
                <div className="text-sm text-center">
                  <Database size={20} className="mx-auto mb-2 text-crypto-gold" />
                  <span className="text-crypto-gold font-semibold">On-Chain Data</span>
                  <div className="text-xs text-white/70 mt-1">Blockchain Events</div>
                </div>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-crypto-gold/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* Processing Nodes */}
              <div className="absolute left-1/4 top-1/4 w-8 h-8 bg-black border border-crypto-gold/30 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-crypto-gold/20 rounded-full animate-pulse"></div>
              </div>
              
              <div className="absolute left-1/3 bottom-1/4 w-10 h-10 bg-black border border-crypto-gold/30 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-crypto-gold/20 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
              </div>
              
              <div className="absolute left-1/2 top-1/4 w-12 h-12 bg-black border border-crypto-gold/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-crypto-gold/20 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
              </div>
              
              <div className="absolute left-2/3 bottom-1/4 w-10 h-10 bg-black border border-crypto-gold/30 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-crypto-gold/20 rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
              </div>
              
              <div className="absolute left-3/4 top-1/4 w-8 h-8 bg-black border border-crypto-gold/30 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-crypto-gold/20 rounded-full animate-pulse" style={{animationDelay: "2s"}}></div>
              </div>
              
              {/* Cryptique Engine in Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 flex items-center justify-center z-20">
                {/* Concentric animated rings */}
                <div className="absolute w-full h-full rounded-full border border-crypto-gold/30 animate-pulse" style={{animationDuration: "3s"}}></div>
                <div className="absolute w-[85%] h-[85%] rounded-full border border-crypto-gold/20 animate-pulse" style={{animationDuration: "4s", animationDelay: "0.5s"}}></div>
                <div className="absolute w-[70%] h-[70%] rounded-full border border-crypto-gold/10 animate-pulse" style={{animationDuration: "5s", animationDelay: "1s"}}></div>
                
                {/* Center piece */}
                <div className="relative w-32 h-32 bg-black/90 border border-crypto-gold rounded-full flex items-center justify-center z-10 animate-pulse-glow">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
                      alt="Cryptique Logo" 
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    <span className="text-crypto-gold font-semibold">Cryptique</span>
                    <div className="text-xs text-white/70 mt-1">Data Intelligence</div>
                  </div>
                </div>
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
