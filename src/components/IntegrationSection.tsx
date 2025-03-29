
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
    <section className="relative overflow-hidden bg-white" id="integration">
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
      
      <div className="container-section relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          <span className="relative">
            Seamless <span className="gold-navy-text">Integration</span> with Your Web3 Stack
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {/* SDK cards section - moved here, right after the title */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <SdkCard 
              icon={<Code size={24} />} 
              title="Web SDK" 
              delay="0.2s"
            />
            <SdkCard 
              icon={<Smartphone size={24} />} 
              title="iOS SDK" 
              delay="0.3s"
              comingSoon={true}
            />
            <SdkCard 
              icon={<Smartphone size={24} />} 
              title="Android SDK" 
              delay="0.4s"
              comingSoon={true}
            />
          </div>
          
          <div className="code-block animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
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
          
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
