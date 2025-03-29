
import React from 'react';

const ClientLogo = ({ 
  imageSrc, 
  name, 
  description,
  delay 
}: { 
  imageSrc: string; 
  name: string; 
  description: string;
  delay: string;
}) => (
  <div 
    className="glass-card p-6 flex flex-col items-center justify-center animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <img 
      src={imageSrc} 
      alt={`${name} logo`} 
      className="h-16 mb-4 object-contain"
    />
    <h3 className="text-lg font-semibold mb-1 text-crypto-gold">{name}</h3>
    <p className="text-sm text-center text-white/70">{description}</p>
  </div>
);

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-0">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in relative inline-block mx-auto">
          Trusted by Leading <span className="text-crypto-gold">Web3 Projects</span>
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ClientLogo 
            imageSrc="/lovable-uploads/34f29667-ddfa-4020-bc58-e3534bcd019a.png" 
            name="Zeebu" 
            description="DeFi Project & Neobank for Telecoms"
            delay="0.1s"
          />
          <ClientLogo 
            imageSrc="/lovable-uploads/205f1d5b-8cab-4c36-9060-a06e0adfc531.png" 
            name="Cubane" 
            description="Layer 1 Blockchain"
            delay="0.2s"
          />
          <ClientLogo 
            imageSrc="/lovable-uploads/ca51f057-4832-4bc8-9b33-d34d76e5dcbd.png" 
            name="Mobile Wallet (MWT)" 
            description="DePIN & DeFi Project"
            delay="0.3s"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div 
            className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-gold" 
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-lg font-medium">DeFi Protocols</p>
          </div>
          <div 
            className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-navy" 
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg font-medium">GameFi & NFT Platforms</p>
          </div>
          <div 
            className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-navy" 
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-lg font-medium">DAOs & SocialFi</p>
          </div>
          <div 
            className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-gold" 
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg font-medium">Layer 1 & Layer 2 Blockchains</p>
          </div>
        </div>
        
        {/* Enhanced data visualization element */}
        <div className="mt-12 relative h-16">
          <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-crypto-gold/40 to-transparent"></div>
          
          {/* Data nodes */}
          {Array.from({ length: 7 }).map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-crypto-gold/60 rounded-full"
              style={{
                left: `${(i+1) * 14}%`,
                animation: 'pulse 2s infinite',
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-crypto-gold/40" style={{animationDuration: '3s'}}></div>
            </div>
          ))}
          
          {/* Moving data packets */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i + 10}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(202,169,104,0.8) 0%, rgba(202,169,104,0) 70%)',
                filter: 'blur(1px)',
                animation: 'dataPacket 15s linear infinite',
                animationDelay: `${i * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
