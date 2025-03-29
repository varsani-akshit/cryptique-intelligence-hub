
import React from 'react';
import { TrendingDown, AlertTriangle, DollarSign, Users, Database, LineChart, Activity, Zap } from 'lucide-react';

const ProblemCard = ({ 
  icon: Icon, 
  title, 
  delay,
  visual
}: { 
  icon: React.ElementType; 
  title: string; 
  delay: string;
  visual: React.ReactNode;
}) => (
  <div 
    className="glass-card p-6 flex flex-col items-center space-y-4 animate-fade-in backdrop-blur-md border border-crypto-gold/20 relative overflow-hidden group" 
    style={{ 
      animationDelay: delay,
      background: 'linear-gradient(145deg, rgba(0,0,0,0.9), rgba(29,12,70,0.2))'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black via-crypto-navy/20 to-black bg-[length:200%] animate-cyber-scan opacity-30"></div>
    <div className="rounded-full bg-black/50 p-3 text-crypto-gold relative z-10">
      <Icon size={20} />
    </div>
    <div className="text-lg font-medium relative z-10 text-center">{title}</div>
    
    <div className="relative h-24 w-full flex items-center justify-center">
      {visual}
    </div>
    
    {/* Digital circuit lines */}
    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-crypto-gold/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
    <div className="absolute top-0 right-0 h-full w-[1px] bg-crypto-gold/20 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-200"></div>
  </div>
);

// Data Visualization Component
const DataFlowVisualization = () => (
  <div className="w-full h-40 relative my-8 overflow-hidden">
    <div className="absolute inset-0 flex items-center">
      {/* Data Pipeline Visualization */}
      <svg className="w-full" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
        {/* Data Flow Line */}
        <path 
          d="M50,50 C150,20 250,80 350,50 C450,20 550,80 650,50 C750,20 850,50 950,50" 
          stroke="#CAA968" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5,5"
          className="animate-pulse-glow"
        />
        
        {/* Data Nodes */}
        <g className="animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
          <circle cx="50" cy="50" r="8" fill="#1D0C46" stroke="#CAA968" strokeWidth="1" />
          <circle cx="200" cy="30" r="8" fill="#1D0C46" stroke="#CAA968" strokeWidth="1" />
          <circle cx="350" cy="50" r="8" fill="#1D0C46" stroke="#CAA968" strokeWidth="1" />
          <circle cx="500" cy="30" r="8" fill="#1D0C46" stroke="#CAA968" strokeWidth="1" />
          <circle cx="650" cy="50" r="8" fill="#1D0C46" stroke="#CAA968" strokeWidth="1" />
          <circle cx="750" cy="40" r="8" fill="#1D0C46" stroke="#CAA968" strokeWidth="1" />
        </g>
        
        {/* Data Packets Moving Along Path */}
        <circle cx="50" cy="50" r="4" fill="#CAA968">
          <animate attributeName="cx" values="50;750" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;40;50;30;50" dur="8s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="50" cy="50" r="4" fill="#CAA968" opacity="0.7">
          <animate attributeName="cx" values="50;750" dur="8s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;40;50;30;50" dur="8s" begin="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="50" cy="50" r="4" fill="#CAA968" opacity="0.4">
          <animate attributeName="cx" values="50;750" dur="8s" begin="4s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;40;50;30;50" dur="8s" begin="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
    
    {/* Digital Binary Text Overlay */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5 text-[8px] text-crypto-gold overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="whitespace-nowrap overflow-hidden">
          {'0101010111001010101110010101010101110010101010101001010100101010'.split('').map((char, j) => (
            <span key={j} style={{ animationDelay: `${(i * 0.1) + (j * 0.01)}s` }} className="animate-pulse-glow">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const ProblemSection = () => {
  return (
    <section className="bg-black relative py-16 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-futuristic-glow opacity-30"></div>
      
      {/* Horizontal scan lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="absolute left-0 w-full h-[1px] bg-crypto-gold/10"
          style={{ 
            top: `${(i+1) * 20}%`, 
            boxShadow: '0 0 5px rgba(202, 169, 104, 0.2)',
            animation: `scanline 8s linear infinite`,
            animationDelay: `${i * 1.5}s`
          }}
        ></div>
      ))}
      
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Present <span className="text-crypto-gold">Situation</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Web3 projects are relying on outdated Web2-centric marketing metrics—likes, impressions, 
            follower counts—to gauge success, but these fail to truly measure value indicators.
          </p>
          
          <DataFlowVisualization />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <ProblemCard 
              icon={DollarSign} 
              title="Misallocated marketing budgets" 
              delay="0.2s"
              visual={
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="10" y="40" width="10" height="15" fill="#CAA968" opacity="0.3" />
                    <rect x="30" y="30" width="10" height="25" fill="#CAA968" opacity="0.5" />
                    <rect x="50" y="20" width="10" height="35" fill="#CAA968" opacity="0.7" />
                    <rect x="70" y="10" width="10" height="45" fill="#CAA968" opacity="0.9" />
                    <path d="M10,40 L80,10" stroke="#ff4d4d" strokeWidth="2" strokeDasharray="3,2" />
                    <circle cx="10" cy="40" r="3" fill="#ff4d4d" />
                    <circle cx="30" cy="30" r="3" fill="#ff4d4d" />
                    <circle cx="50" cy="20" r="3" fill="#ff4d4d" />
                    <circle cx="70" cy="10" r="3" fill="#ff4d4d" />
                  </svg>
                </div>
              }
            />
            <ProblemCard 
              icon={Users} 
              title="Shallow community engagement" 
              delay="0.3s"
              visual={
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="50" cy="25" r="20" fill="none" stroke="#CAA968" strokeWidth="1" opacity="0.5" />
                    <circle cx="50" cy="25" r="15" fill="none" stroke="#CAA968" strokeWidth="1" opacity="0.7" />
                    <circle cx="50" cy="25" r="10" fill="none" stroke="#CAA968" strokeWidth="1" opacity="0.9" />
                    <circle cx="50" cy="25" r="5" fill="#CAA968" opacity="0.5" />
                    <g className="animate-pulse" style={{animationDuration: "3s"}}>
                      <circle cx="30" cy="35" r="3" fill="#CAA968" opacity="0.7" />
                      <circle cx="40" cy="45" r="3" fill="#CAA968" opacity="0.7" />
                      <circle cx="60" cy="45" r="3" fill="#CAA968" opacity="0.7" />
                      <circle cx="70" cy="35" r="3" fill="#CAA968" opacity="0.7" />
                      <circle cx="65" cy="15" r="3" fill="#CAA968" opacity="0.7" />
                      <circle cx="35" cy="15" r="3" fill="#CAA968" opacity="0.7" />
                    </g>
                  </svg>
                </div>
              }
            />
            <ProblemCard 
              icon={AlertTriangle} 
              title="Poor Product-Market Fit detection" 
              delay="0.4s"
              visual={
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="10" y="10" width="35" height="35" rx="5" fill="#CAA968" opacity="0.3" />
                    <circle cx="70" cy="30" r="20" fill="#CAA968" opacity="0.3" />
                    <g transform="translate(50, 25)">
                      <line x1="-15" y1="0" x2="15" y2="0" stroke="#ff4d4d" strokeWidth="2" />
                      <line x1="0" y1="-15" x2="0" y2="15" stroke="#ff4d4d" strokeWidth="2" />
                      <circle cx="0" cy="0" r="8" stroke="#ff4d4d" strokeWidth="2" fill="none" className="animate-pulse" />
                    </g>
                  </svg>
                </div>
              }
            />
            <ProblemCard 
              icon={TrendingDown} 
              title="Unsustainable growth" 
              delay="0.5s"
              visual={
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M10,50 Q25,20 40,45 Q55,10 70,30 Q85,50 90,15" stroke="#CAA968" strokeWidth="2" fill="none" />
                    <path d="M10,50 L90,50" stroke="#CAA968" strokeWidth="0.5" strokeDasharray="3,2" />
                    <path d="M90,15 L90,50" stroke="#ff4d4d" strokeWidth="0.5" strokeDasharray="3,2" />
                    <circle cx="10" cy="50" r="3" fill="#CAA968" />
                    <circle cx="40" cy="45" r="3" fill="#CAA968" />
                    <circle cx="70" cy="30" r="3" fill="#CAA968" />
                    <circle cx="90" cy="15" r="3" fill="#CAA968" />
                    <path d="M70,30 L90,50" stroke="#ff4d4d" strokeWidth="2" fill="none" strokeDasharray="3,2" />
                    <circle cx="90" cy="50" r="3" fill="#ff4d4d" />
                  </svg>
                </div>
              }
            />
          </div>
          
          <div className="relative py-6">
            <div className="absolute left-0 w-full h-[1px] top-0 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
            <div className="absolute left-0 w-full h-[1px] bottom-0 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
            
            <p className="text-xl font-semibold text-center animate-fade-in flex items-center justify-center gap-3" style={{ animationDelay: '0.6s' }}>
              <Zap size={20} className="text-crypto-gold" />
              Web3 needs a <span className="text-crypto-gold">new measurement framework</span>
              <Zap size={20} className="text-crypto-gold" />
            </p>
          </div>
          
          {/* Digital data flow indicator */}
          <div className="flex justify-center mt-6">
            <div className="relative h-16 w-1 bg-gradient-to-b from-crypto-gold/0 via-crypto-gold/50 to-crypto-gold/0">
              <div className="absolute h-4 w-4 rounded-full bg-crypto-gold/20 left-1/2 transform -translate-x-1/2 border border-crypto-gold/50 animate-pulse"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-4 h-4 border-t-2 border-r-2 border-crypto-gold/50 transform rotate-135"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
