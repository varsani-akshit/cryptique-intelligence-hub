
import React from 'react';
import { Code, Server, FileCode, Smartphone } from 'lucide-react';

interface SdkCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
  comingSoon?: boolean;
}

const SdkCard = ({ icon, title, delay, comingSoon }: SdkCardProps) => (
  <div 
    className="glass-card p-4 flex items-center gap-3 animate-fade-in relative" 
    style={{ animationDelay: delay }}
  >
    <div className="text-crypto-gold">
      {icon}
    </div>
    <div>
      <span className="font-medium">{title}</span>
      {comingSoon && (
        <span className="ml-2 text-xs text-crypto-gold/70 bg-crypto-gold/10 px-2 py-0.5 rounded-full">Coming Soon</span>
      )}
    </div>
  </div>
);

const IntegrationSection = () => {
  return (
    <section className="relative overflow-hidden bg-black" id="integration">
      {/* Dynamic background elements */}
      <div className="absolute top-0 -right-24 w-64 h-64 bg-crypto-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-32 w-80 h-80 bg-crypto-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      
      {/* Data flow lines */}
      <div className="absolute w-full h-[1px] top-1/3 left-0 bg-crypto-gold/10"></div>
      <div className="absolute w-full h-[1px] top-2/3 left-0 bg-crypto-gold/10"></div>
      
      {/* Animated data points */}
      <div className="absolute h-full w-full pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-crypto-gold/40 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              boxShadow: '0 0 8px rgba(202, 169, 104, 0.5)',
              animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Interactive holographic scanner effect */}
      <div className="absolute w-full h-40 top-1/3 -translate-y-1/2 bg-gradient-to-b from-transparent via-crypto-gold/5 to-transparent opacity-30 pointer-events-none" style={{ animation: 'cyber-scan 15s linear infinite' }}></div>
      
      <div className="container-section relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          <span className="relative">
            Seamless <span className="text-crypto-gold">Integration</span> with Your Web3 Stack
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="border-l-2 border-crypto-gold pl-3">SDKs Available for:</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <SdkCard 
              icon={<Code size={20} />} 
              title="Web" 
              delay="0.2s"
            />
            <SdkCard 
              icon={<Smartphone size={20} />} 
              title="Android" 
              delay="0.3s"
              comingSoon={true}
            />
            <SdkCard 
              icon={<Smartphone size={20} />} 
              title="iOS" 
              delay="0.4s"
              comingSoon={true}
            />
          </div>
          
          <div className="code-block animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
            {/* Animated scanning line */}
            <div className="absolute w-full h-0.5 bg-crypto-gold/30 top-0 left-0" style={{ animation: 'scanline 4s linear infinite' }}></div>
            
            <pre className="text-foreground/90 relative">
{`useEffect(() => {
    async function initCryptique() {
        await cryptique.init('PROJECT_TOKEN');
    }
    initCryptique();
}, []);`}
            </pre>
            
            {/* Blinking cursor effect */}
            <div className="absolute bottom-8 right-8 w-2 h-4 bg-crypto-gold/70 animate-pulse"></div>
          </div>
          
          <div className="mt-10 relative">
            <p className="text-center mb-6 text-foreground/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span className="bg-black px-4 relative z-10">Data Available on Cryptique Dashboard & APIs</span>
            </p>
            
            {/* Data flow visualization */}
            <div className="absolute w-full h-[1px] top-3 left-0 bg-crypto-gold/20"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.7s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-crypto-navy/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-5 h-5">
                  <div className="absolute top-0 right-0 w-10 h-[1px] bg-crypto-gold/50"></div>
                  <div className="absolute top-0 right-0 h-10 w-[1px] bg-crypto-gold/50"></div>
                </div>
                <p className="font-medium relative z-10">Multi-Chain Support</p>
              </div>
              
              <div className="glass-card p-4 text-center animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.8s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-crypto-navy/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-5 h-5">
                  <div className="absolute top-0 right-0 w-10 h-[1px] bg-crypto-gold/50"></div>
                  <div className="absolute top-0 right-0 h-10 w-[1px] bg-crypto-gold/50"></div>
                </div>
                <p className="font-medium relative z-10">On-Chain & Off-Chain Data</p>
              </div>
              
              <div className="glass-card p-4 text-center animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.9s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-crypto-navy/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-5 h-5">
                  <div className="absolute top-0 right-0 w-10 h-[1px] bg-crypto-gold/50"></div>
                  <div className="absolute top-0 right-0 h-10 w-[1px] bg-crypto-gold/50"></div>
                </div>
                <p className="font-medium relative z-10">Real-Time User Insights</p>
              </div>
            </div>
          </div>
          
          {/* Data nodes/connections visualization */}
          <div className="mt-12 relative h-32 hidden md:block">
            <svg className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,16 C200,16 300,80 400,80" stroke="#CAA968" strokeWidth="1" strokeDasharray="5,3" fill="none"/>
              <path d="M100,80 C200,80 300,16 400,16" stroke="#CAA968" strokeWidth="1" strokeDasharray="5,3" fill="none"/>
              <path d="M100,48 L400,48" stroke="#CAA968" strokeWidth="1" strokeDasharray="5,3" fill="none"/>
              
              <circle cx="100" cy="16" r="4" fill="#CAA968">
                <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="100" cy="48" r="4" fill="#CAA968">
                <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" begin="1s"/>
              </circle>
              <circle cx="100" cy="80" r="4" fill="#CAA968">
                <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" begin="2s"/>
              </circle>
              
              <circle cx="400" cy="16" r="4" fill="#CAA968">
                <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" begin="2s"/>
              </circle>
              <circle cx="400" cy="48" r="4" fill="#CAA968">
                <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" begin="1s"/>
              </circle>
              <circle cx="400" cy="80" r="4" fill="#CAA968">
                <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite"/>
              </circle>
              
              <circle cx="250" cy="48" r="6" fill="#1D0C46" stroke="#CAA968" strokeWidth="1">
                <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
