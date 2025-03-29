
import React, { useState, useEffect, useRef } from 'react';
import { Zap, Database, Activity, LineChart } from 'lucide-react';

const SolutionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
            className="relative h-[600px] mt-16 mb-20 overflow-hidden bg-white/20 rounded-xl border border-crypto-gold/10"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-crypto-navy/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-crypto-gold/8 rounded-full blur-2xl"></div>
            
            {/* Web2 Data Sources */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-52 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-64 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-r-lg border-t border-r border-b border-crypto-gold/20">
                <h4 className="text-lg font-bold text-crypto-navy mb-3">Web2 Data</h4>
                <p className="text-sm text-crypto-navy/80 mb-4">User Information & Behavior</p>
                
                <div className="grid grid-cols-3 gap-3">
                  {/* X Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">X</span>
                  </div>
                  
                  {/* Discord Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-5 h-5">
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Discord</span>
                  </div>
                  
                  {/* Telegram Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#0088cc">
                        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm-1.218 19.105c-.339 0-.282-.127-.401-.45l-1.001-3.295 7.132-4.367" />
                        <path d="M18.429 16.034c.16.059-.057.138-.191.138l-1.85.164-.702.213a.473.473 0 01-.461-.112 19.87 19.87 0 01-4.383-2.849c-.23-.185-.47-.37-.702-.552-.599-.467-1.201-.93-1.8-1.392-.127-.099-.254-.198-.381-.297 1.195-.754 2.411-1.529 3.626-2.292.797-.503 1.595-1.006 2.394-1.509a.36.36 0 00.192-.312c.002-.371-.141-.722-.359-1.021-.219-.3-.503-.552-.799-.778a3.139 3.139 0 00-1.493-.515 3.81 3.81 0 00-1.051.05c-.521.1-1.025.301-1.503.562-1.431.783-2.596 2.006-3.641 3.306-1.084 1.348-2.036 2.807-2.822 4.346-.618 1.209-1.124 2.473-1.518 3.78-.099.326-.184.658-.253.994a.458.458 0 01-.126.264 2.69 2.69 0 01-.409.042" />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Telegram</span>
                  </div>
                  
                  {/* QuestN Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold">Q</span>
                    </div>
                    <span className="text-xs mt-1">QuestN</span>
                  </div>
                  
                  {/* Google Ads Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Google Ads</span>
                  </div>
                  
                  {/* Meta Ads Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Meta Ads</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Web3 Data Sources */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-52 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-64 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-l-lg border-t border-l border-b border-crypto-gold/20">
                <h4 className="text-lg font-bold text-crypto-navy mb-3">Web3 Ecosystem</h4>
                <p className="text-sm text-crypto-navy/80 mb-4">Smart Contracts & Blockchains</p>
                
                <div className="grid grid-cols-3 gap-3">
                  {/* Ethereum Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 784.37 1277.39" fill="#627EEA">
                        <path d="M392.07,0L384.14,27V873.74l7.93,7.93,383.87-226.69Z" fill="#343434"/>
                        <path d="M392.07,0L8.2,654.97l383.87,226.69V0Z" fill="#8C8C8C"/>
                        <path d="M392.07,956.52v313.45L392.07,1277.38l384.03-538.86Z" fill="#3C3C3B"/>
                        <path d="M392.07,1277.38V956.52L8.2,738.65Z" fill="#8C8C8C"/>
                        <path d="M392.07,881.65l383.87-226.69-383.87-174.61Z" fill="#141414"/>
                        <path d="M8.2,654.97l383.87,226.69V480.35Z" fill="#393939"/>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Ethereum</span>
                  </div>
                  
                  {/* BNB Chain Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 2500 2500" fill="#F3BA2F">
                        <path d="M764.48,1050.52,1250,565l485.75,485.73,282.5-282.5L1250,0,482,768l282.49,282.5M0,1250,282.51,967.45,565,1249.94,282.49,1532.45Zm764.48,199.51L1250,1935l485.74-485.72,282.65,282.35-.14.15L1250,2500,482,1732l-.4-.4,282.91-282.12M1935,1250.12l282.51-282.51L2500,1250.1l-282.5,282.51Z"/>
                        <path d="M1536.52,1249.85h.12L1250,963.19,1038.13,1175h0l-24.34,24.35-50.2,50.21-.4.39.4.41L1250,1536.81l286.64-286.66.14-.16-.26-.14"/>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">BNB</span>
                  </div>
                  
                  {/* Polygon Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 38.4 33.5" fill="#8247E5">
                        <path d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
                        c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
                        c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                        c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
                        L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                        c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Polygon</span>
                  </div>
                  
                  {/* Solana Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 397.7 311.7" fill="#14F195">
                        <path d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
                        c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z" fill="#9945FF"/>
                        <path d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
                        c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z" fill="#14F195"/>
                        <path d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
                        c5.8,0,8.7-7,4.6-11.1L333.1,120.1z" fill="#00FFA3"/>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Solana</span>
                  </div>
                  
                  {/* Optimism Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0Z" fill="#FF0420"/>
                        <path d="M38.5004 76.9998H27.7004V31.2998H38.5004V50.6998H62.0004V31.2998H72.7004V76.9998H62.0004V59.5998H38.5004V76.9998Z" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Optimism</span>
                  </div>
                  
                  {/* Arbitrum Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                      <svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 100C77.6127 100 100 77.6127 100 50C100 22.3873 77.6127 0 50 0C22.3873 0 0 22.3873 0 50C0 77.6127 22.3873 100 50 100Z" fill="#28A0F0"/>
                        <path d="M50 12L29 50L50 36.5L71.5 50L50 12Z" fill="white"/>
                        <path d="M29 50L50 88L71.5 50L50 67L29 50Z" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-xs mt-1">Arbitrum</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cryptique Platform in the middle */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative w-[280px] h-[280px] rounded-full flex items-center justify-center">
                {/* Pulsing background */}
                <div className="absolute inset-0 bg-gradient-radial from-crypto-gold/5 to-transparent rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
                
                {/* Inner circle with logo */}
                <div className="relative w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center border border-crypto-gold/20 z-10">
                  <img 
                    src="/lovable-uploads/03634fb0-35b0-4a05-bf7c-76242f4083b7.png" 
                    alt="Cryptique Platform" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                
                {/* Orbital ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-crypto-gold/20 animate-spin-slow"></div>
              </div>
              
              {/* Label */}
              <div className="absolute top-[280px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm py-3 px-6 rounded-lg border border-crypto-gold/20 shadow-lg">
                <h3 className="text-lg font-bold text-crypto-navy text-center">Cryptique Platform</h3>
                <p className="text-xs text-crypto-dark/70 text-center mt-1">Seamless Web2/Web3 Integration</p>
              </div>
            </div>
            
            {/* Data flow connections from Web2 to Cryptique */}
            <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <svg width="100%" height="100%" className="absolute inset-0">
                {/* Connection line from Web2 to Cryptique - moved further to the left */}
                <path 
                  d="M207,300 C295,300 315,300 357,300" 
                  stroke="#CAA968" 
                  strokeWidth="1.5" 
                  strokeDasharray="5,5" 
                  fill="none"
                />
                
                {/* Data packets from Web2 to Cryptique */}
                <circle r="4" fill="#CAA968">
                  <animateMotion 
                    path="M207,300 C295,300 315,300 357,300" 
                    dur="3s" 
                    repeatCount="indefinite"
                  />
                </circle>
                
                <circle r="3" fill="#CAA968" opacity="0.7">
                  <animateMotion 
                    path="M207,300 C295,300 315,300 357,300" 
                    dur="4s" 
                    repeatCount="indefinite"
                    begin="1s"
                  />
                </circle>
                
                {/* Connection line from Web3 to Cryptique - moved more to the left */}
                <path 
                  d="M687,300 C585,300 565,300 537,300" 
                  stroke="#CAA968" 
                  strokeWidth="1.5" 
                  strokeDasharray="5,5" 
                  fill="none"
                />
                
                {/* Data packets from Web3 to Cryptique */}
                <circle r="4" fill="#1D0C46">
                  <animateMotion 
                    path="M687,300 C585,300 565,300 537,300" 
                    dur="3.5s" 
                    repeatCount="indefinite"
                  />
                </circle>
                
                <circle r="3" fill="#1D0C46" opacity="0.7">
                  <animateMotion 
                    path="M687,300 C585,300 565,300 537,300" 
                    dur="4.5s" 
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                </circle>
              </svg>
            </div>
            
            {/* Processing nodes */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Node 1 */}
              <div className="absolute top-[25%] left-[35%] w-6 h-6">
                <div className="w-full h-full rounded-full bg-crypto-gold/20 animate-pulse" style={{animationDuration: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-crypto-gold"></div>
              </div>
              
              {/* Node 2 */}
              <div className="absolute bottom-[30%] left-[40%] w-8 h-8">
                <div className="w-full h-full rounded-full bg-crypto-navy/20 animate-pulse" style={{animationDuration: '3s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-crypto-navy"></div>
              </div>
              
              {/* Node 3 */}
              <div className="absolute top-[40%] right-[35%] w-7 h-7">
                <div className="w-full h-full rounded-full bg-crypto-gold/20 animate-pulse" style={{animationDuration: '2.5s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-crypto-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
