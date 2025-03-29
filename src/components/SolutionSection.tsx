
import React, { useState, useEffect, useRef } from 'react';
import { Zap, Database, Activity, LineChart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SolutionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Define Web2 and Web3 icons
  const web2Icons = [
    { name: 'X', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg> 
    },
    { name: 'Discord', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-full h-full">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
    },
    { name: 'Telegram', 
      icon: <img src="/lovable-uploads/20e8e068-4233-4367-bf9c-e275b95c573e.png" alt="Telegram Logo" className="w-full h-full object-contain" />
    },
    { name: 'Meta Ads', 
      icon: <img src="/lovable-uploads/b28bbf9f-cbf5-4d75-8777-0d11d86fb0e9.png" alt="Meta Logo" className="w-full h-full object-contain" />
    },
    { name: 'Google Ads', 
      icon: <img src="/lovable-uploads/f89b5608-32f7-432e-a8df-6469ad60dcd3.png" alt="Google Ads Logo" className="w-full h-full object-contain" />
    },
    { name: 'QuestN', 
      icon: <img src="/lovable-uploads/d98846ba-c367-45ff-a7d6-c8ffa5012877.png" alt="QuestN Logo" className="w-full h-full object-contain" />
    },
  ];

  const web3Icons = [
    { name: 'Ethereum', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 784.37 1277.39" fill="#627EEA">
              <path d="M392.07,0L384.14,27V873.74l7.93,7.93,383.87-226.69Z" fill="#343434"/>
              <path d="M392.07,0L8.2,654.97l383.87,226.69V0Z" fill="#8C8C8C"/>
              <path d="M392.07,956.52v313.45L392.07,1277.38l384.03-538.86Z" fill="#3C3C3B"/>
              <path d="M392.07,1277.38V956.52L8.2,738.65Z" fill="#8C8C8C"/>
              <path d="M392.07,881.65l383.87-226.69-383.87-174.61Z" fill="#141414"/>
              <path d="M8.2,654.97l383.87,226.69V480.35Z" fill="#393939"/>
            </svg>
    },
    { name: 'BNB', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 2500 2500" fill="#F3BA2F">
              <path d="M764.48,1050.52,1250,565l485.75,485.73,282.5-282.5L1250,0,482,768l282.49,282.5M0,1250,282.51,967.45,565,1249.94,282.49,1532.45Zm764.48,199.51L1250,1935l485.74-485.72,282.65,282.35-.14.15L1250,2500,482,1732l-.4-.4,282.91-282.12M1935,1250.12l282.51-282.51L2500,1250.1l-282.5,282.51Z"/>
              <path d="M1536.52,1249.85h.12L1250,963.19,1038.13,1175h0l-24.34,24.35-50.2,50.21-.4.39.4.41L1250,1536.81l286.64-286.66.14-.16-.26-.14"/>
            </svg>
    },
    { name: 'Polygon', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 38.4 33.5" fill="#8247E5">
              <path d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
            </svg>
    },
    { name: 'Solana', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 397.7 311.7" fill="#14F195">
              <path d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z" fill="#9945FF"/>
              <path d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z" fill="#14F195"/>
              <path d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z" fill="#00FFA3"/>
            </svg>
    },
    { name: 'Optimism', 
      icon: <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0Z" fill="#FF0420"/>
              <path d="M38.5004 76.9998H27.7004V31.2998H38.5004V50.6998H62.0004V31.2998H72.7004V76.9998H62.0004V59.5998H38.5004V76.9998Z" fill="white"/>
            </svg>
    },
    { name: 'Arbitrum', 
      icon: <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 100C77.6127 100 100 77.6127 100 50C100 22.3873 77.6127 0 50 0C22.3873 0 0 22.3873 0 50C0 77.6127 22.3873 100 50 100Z" fill="#28A0F0"/>
              <path d="M50 12L29 50L50 36.5L71.5 50L50 12Z" fill="white"/>
              <path d="M29 50L50 88L71.5 50L50 67L29 50Z" fill="white"/>
            </svg>
    },
  ];

  // Generate positions for the orbital rings
  const generateOrbitalPositions = (count, radius, offset = 0) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i * 2 * Math.PI / count) + offset;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { x, y, angle };
    });
  };

  // Further increased sizes for wider rings and more space between them
  const outerRingSize = isMobile ? 180 : 230; // Increased even more
  const innerRingSize = isMobile ? 110 : 150; // Increased even more
  const iconSizeOuter = isMobile ? 32 : 42; 
  const iconSizeInner = isMobile ? 26 : 34; 
  
  // Text ring sizes
  const outerTextRingSize = outerRingSize + 50; // Place text ring outside the icons
  const innerTextRingSize = innerRingSize - 40; // Place text ring inside the icons
  
  const web2Positions = generateOrbitalPositions(web2Icons.length, outerRingSize, Math.PI / 8);
  const web3Positions = generateOrbitalPositions(web3Icons.length, innerRingSize, 0);
  
  // Generate positions for text elements
  const web2TextPosition = { x: Math.cos(-Math.PI/4) * outerTextRingSize, y: Math.sin(-Math.PI/4) * outerTextRingSize }; 
  const web3TextPosition = { x: Math.cos(Math.PI/4) * innerTextRingSize, y: Math.sin(Math.PI/4) * innerTextRingSize };

  return (
    <section className="bg-white relative overflow-hidden py-10">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-64 h-64 bg-crypto-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-crypto-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-5"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
            <span className="relative">
              The Future of <span className="gold-navy-text">Web3 Marketing</span> Starts Here
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></span>
            </span>
          </h2>
          
          <div 
            ref={containerRef}
            className="relative mx-auto"
            style={{ 
              height: isMobile ? '560px' : '680px', // Increased height even more
              maxWidth: isMobile ? '100%' : '680px'  // Increased width even more
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-crypto-navy/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-crypto-gold/8 rounded-full blur-2xl"></div>
            
            {/* Orbital system */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {/* Cryptique Logo in Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg flex items-center justify-center border border-crypto-gold/20">
                    <img 
                      src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
                      alt="Cryptique Platform" 
                      className="w-20 h-20 md:w-28 md:h-28 object-contain"
                    />
                  </div>
                  <div className="absolute -inset-4 rounded-full border border-crypto-gold/20"></div>
                </div>
                
                {/* Center glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-crypto-gold/20 to-transparent rounded-full blur-xl"></div>
              </div>
              
              {/* Outer Ring - Web2 icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-crypto-gold/20 border-dashed animate-spin-slow" style={{ width: outerRingSize * 2, height: outerRingSize * 2 }}></div>
                
                {web2Positions.map((pos, index) => (
                  <div 
                    key={`web2-${index}`}
                    className="absolute rounded-full bg-white shadow-md border border-crypto-gold/20 flex items-center justify-center z-10 hover:scale-110 transition-transform duration-300 icon-orbit"
                    style={{ 
                      width: iconSizeOuter, 
                      height: iconSizeOuter,
                      left: `calc(50% + ${pos.x}px - ${iconSizeOuter/2}px)`, 
                      top: `calc(50% + ${pos.y}px - ${iconSizeOuter/2}px)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="w-full h-full p-1.5 flex items-center justify-center">
                      {web2Icons[index].icon}
                    </div>
                    
                    {!isMobile && (
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-70">
                        {web2Icons[index].name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Inner Ring - Web3 icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-crypto-navy/20 border-dashed animate-spin-slow-reverse" style={{ width: innerRingSize * 2, height: innerRingSize * 2, animationDuration: '30s' }}></div>
                
                {web3Positions.map((pos, index) => (
                  <div 
                    key={`web3-${index}`}
                    className="absolute rounded-full bg-white shadow-md border border-crypto-navy/20 flex items-center justify-center z-10 hover:scale-110 transition-transform duration-300 icon-orbit-reverse"
                    style={{ 
                      width: iconSizeInner, 
                      height: iconSizeInner,
                      left: `calc(50% + ${pos.x}px - ${iconSizeInner/2}px)`, 
                      top: `calc(50% + ${pos.y}px - ${iconSizeInner/2}px)`,
                      animationDelay: `${index * 0.15}s`
                    }}
                  >
                    <div className="w-full h-full p-1 flex items-center justify-center">
                      {web3Icons[index].icon}
                    </div>
                    
                    {!isMobile && (
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-70">
                        {web3Icons[index].name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Rotating Text Ring - Web2 Data Sources */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div 
                  className="rounded-full border border-crypto-gold/20 animate-spin-slow" 
                  style={{ 
                    width: outerTextRingSize * 2, 
                    height: outerTextRingSize * 2,
                    animationDuration: '45s'
                  }}
                >
                  {/* Web2 Data Sources Text */}
                  <div 
                    className="absolute flex items-center justify-center z-10 text-orbit"
                    style={{ 
                      left: `calc(50% + ${web2TextPosition.x}px)`, 
                      top: `calc(50% + ${web2TextPosition.y}px)`,
                      transform: 'translate(-50%, -50%) rotate(45deg)',
                    }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg border border-crypto-gold/20 shadow-sm rotate-text-counter">
                      <h4 className="text-sm md:text-base font-bold text-crypto-dark">Web2 Data Sources</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Rotating Text Ring - Web3 Ecosystem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div 
                  className="rounded-full border border-crypto-navy/20 animate-spin-slow-reverse" 
                  style={{ 
                    width: innerTextRingSize * 2, 
                    height: innerTextRingSize * 2,
                    animationDuration: '40s' 
                  }}
                >
                  {/* Web3 Ecosystem Text */}
                  <div 
                    className="absolute flex items-center justify-center z-10 text-orbit-reverse"
                    style={{ 
                      left: `calc(50% + ${web3TextPosition.x}px)`, 
                      top: `calc(50% + ${web3TextPosition.y}px)`,
                      transform: 'translate(-50%, -50%) rotate(-45deg)',
                    }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg border border-crypto-navy/20 shadow-sm rotate-text">
                      <h4 className="text-sm md:text-base font-bold text-crypto-dark">Web3 Ecosystem</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Remove the old static labels since we now have them rotating */}
          </div>
          
          {/* Description under the orbital visualization */}
          <div className="mt-8 max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gold-navy-text">One Platform</span>, Unlimited Possibilities
            </h3>
            <p className="text-gray-700">
              Cryptique seamlessly integrates Web2 data sources with Web3 blockchain ecosystems to 
              provide comprehensive marketing analytics and insights for your crypto projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
