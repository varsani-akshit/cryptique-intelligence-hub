import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

const ClientLogo = ({ 
  imageSrc, 
  name, 
  description,
  isLarge
}: { 
  imageSrc: string; 
  name: string; 
  description: string;
  isLarge?: boolean;
}) => (
  <div className="glass-card p-6 flex flex-col items-center justify-center h-full">
    <div className="h-24 flex items-center justify-center mb-4">
      <img 
        src={imageSrc} 
        alt={`${name} logo`} 
        className={`${isLarge ? 'h-28' : 'h-24'} max-w-[80%] object-contain`}
      />
    </div>
    <h3 className="text-lg font-semibold mb-1 text-crypto-gold text-center">{name}</h3>
    <p className="text-sm text-center text-crypto-dark/70">{description}</p>
  </div>
);

const TrustSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: true,
    direction: 'ltr' // Ensure left-to-right direction
  });

  // Enhanced automatic scrolling with continuous loop
  useEffect(() => {
    if (!emblaApi) return;
    
    // Disable any drag interaction to ensure only automatic scrolling
    emblaApi.on('pointerDown', () => false);
    
    const autoScrollInterval = setInterval(() => {
      emblaApi.scrollNext({ loop: true });
    }, 2000);

    return () => {
      clearInterval(autoScrollInterval);
      emblaApi.off('pointerDown');
    };
  }, [emblaApi]);
  
  const [categoryEmblaRef, categoryEmblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: true,
    direction: 'ltr' // Ensure left-to-right direction
  });

  // Enhanced automatic scrolling for categories
  useEffect(() => {
    if (!categoryEmblaApi) return;
    
    // Disable any drag interaction to ensure only automatic scrolling
    categoryEmblaApi.on('pointerDown', () => false);
    
    const autoCategoryScrollInterval = setInterval(() => {
      categoryEmblaApi.scrollNext({ loop: true });
    }, 3000);

    return () => {
      clearInterval(autoCategoryScrollInterval);
      categoryEmblaApi.off('pointerDown');
    };
  }, [categoryEmblaApi]);
  
  return (
    <section className="relative overflow-hidden bg-white py-0" id="trust">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in relative inline-block mx-auto">
          Trusted by Leading <span className="text-crypto-gold">Web3 Projects</span>
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-crypto-gold/30 to-transparent"></div>
        </h2>
        
        <div className="mb-12">
          <Carousel 
            ref={emblaRef} 
            className="w-full"
          >
            <CarouselContent>
              {[0, 1].map((duplicateIndex) => (
                <React.Fragment key={`duplicate-${duplicateIndex}`}>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <ClientLogo 
                      imageSrc="/lovable-uploads/34f29667-ddfa-4020-bc58-e3534bcd019a.png" 
                      name="Zeebu" 
                      description="Protocol & Neobank for Telecoms"
                    />
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <ClientLogo 
                      imageSrc="/lovable-uploads/4b4a96ef-2445-45a7-83d9-fbdef45423fd.png" 
                      name="Cubane" 
                      description="Layer 1 Blockchain"
                      isLarge={true}
                    />
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <ClientLogo 
                      imageSrc="/lovable-uploads/ca51f057-4832-4bc8-9b33-d34d76e5dcbd.png" 
                      name="Mobile Wallet (MWT)" 
                      description="DePIN & Consumer Crypto"
                    />
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <ClientLogo 
                      imageSrc="/lovable-uploads/4b6bb044-040e-4c81-9dd5-96b69ef95dd5.png" 
                      name="Vingt" 
                      description="DeFi - Asset Management"
                    />
                  </CarouselItem>
                </React.Fragment>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Category carousel */}
        <div className="mt-8">
          <Carousel 
            ref={categoryEmblaRef} 
            className="w-full"
          >
            <CarouselContent>
              {[0, 1, 2].map((dupIndex) => (
                <React.Fragment key={`category-dup-${dupIndex}`}>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-gold h-full" style={{ animationDelay: "0.1s" }}>
                      <p className="text-lg font-medium text-crypto-dark">DeFi Protocols</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-navy h-full" style={{ animationDelay: "0.2s" }}>
                      <p className="text-lg font-medium text-crypto-dark">GameFi & NFT Platforms</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-navy h-full" style={{ animationDelay: "0.3s" }}>
                      <p className="text-lg font-medium text-crypto-dark">DAOs & SocialFi</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="glass-card flex items-center justify-center py-6 px-4 animate-fade-in border-l-4 border-crypto-gold h-full" style={{ animationDelay: "0.4s" }}>
                      <p className="text-lg font-medium text-crypto-dark">Layer 1 & Layer 2 Blockchains</p>
                    </div>
                  </CarouselItem>
                </React.Fragment>
              ))}
            </CarouselContent>
          </Carousel>
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
