
import React from 'react';
import { Code, Server, FileCode } from 'lucide-react';

interface SdkCardProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const SdkCard = ({ icon, title, delay }: SdkCardProps) => (
  <div 
    className="glass-card p-4 flex items-center gap-3 animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className="text-crypto-blue">
      {icon}
    </div>
    <span className="font-medium">{title}</span>
  </div>
);

const IntegrationSection = () => {
  return (
    <section className="relative overflow-hidden" id="integration">
      <div className="absolute top-0 -right-24 w-64 h-64 bg-crypto-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          Seamless Integration with Your Web3 Stack
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            SDKs Available for:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <SdkCard 
              icon={<FileCode size={20} />} 
              title="Solidity Smart Contracts" 
              delay="0.2s"
            />
            <SdkCard 
              icon={<Code size={20} />} 
              title="Next.js & React Apps" 
              delay="0.3s"
            />
            <SdkCard 
              icon={<Server size={20} />} 
              title="Firebase & Cloud Functions" 
              delay="0.4s"
            />
          </div>
          
          <div className="code-block animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <pre className="text-foreground/90">
{`useEffect(() => {
    async function initCryptique() {
        await cryptique.init('PROJECT_TOKEN');
    }
    initCryptique();
}, []);`}
            </pre>
          </div>
          
          <p className="text-center mt-6 text-foreground/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Data Available on Cryptique Dashboard & APIs
          </p>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card p-4 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <p className="font-medium">Multi-Chain Support</p>
            </div>
            <div className="glass-card p-4 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="font-medium">On-Chain & Off-Chain Data</p>
            </div>
            <div className="glass-card p-4 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <p className="font-medium">Real-Time User Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
