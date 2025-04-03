
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooterSection = () => {
  return (
    <footer className="bg-white relative overflow-hidden" itemScope itemType="https://schema.org/WPFooter">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-futuristic-glow opacity-20"></div>
      
      <div className="container-section relative z-10" id="faq">
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 animate-fade-in">FAQs about Web3 Marketing & On-Chain Attribution</h3>
          
          <Accordion type="single" collapsible className="w-full animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <AccordionItem value="item-1" className="border-crypto-gold/20">
              <AccordionTrigger className="hover:text-crypto-gold">How long before I can track my first crypto marketing campaign?</AccordionTrigger>
              <AccordionContent>
                You can start tracking your first Web3 marketing campaign within minutes after setting up your account. 
                Our simple SDK implementation allows for quick integration, and our team is always 
                available to help with the setup process for on-chain attribution.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-crypto-gold/20">
              <AccordionTrigger className="hover:text-crypto-gold">Why do I need Cryptique's martech platform?</AccordionTrigger>
              <AccordionContent>
                Cryptique bridges the gap between Web2 analytics and Web3 on-chain data, providing 
                you with a complete picture of your crypto marketing performance. Without this unified view, 
                you're likely missing critical insights about your users' behavior and the true ROI 
                of your Web3 marketing efforts.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-crypto-gold/20">
              <AccordionTrigger className="hover:text-crypto-gold">Why should I use Cryptique over other Web3 marketing alternatives?</AccordionTrigger>
              <AccordionContent>
                Unlike traditional analytics platforms that were built for Web2, Cryptique is 
                specifically designed for Web3 projects. We understand the unique challenges of 
                decentralized applications and provide specialized tools for tracking wallet-based 
                user journeys, token transactions, and community engagement with precise on-chain attribution.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-crypto-gold/20">
              <AccordionTrigger className="hover:text-crypto-gold">How much does Cryptique's crypto marketing platform cost?</AccordionTrigger>
              <AccordionContent>
                Cryptique offers flexible pricing plans to accommodate projects of all sizes. We offer 
                a free tier to get started, with paid plans starting at $599/month for growing projects. 
                Enterprise plans with custom features are also available. Contact us for a personalized quote.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-crypto-gold/20">
              <AccordionTrigger className="hover:text-crypto-gold">How does Cryptique's on-chain attribution work?</AccordionTrigger>
              <AccordionContent>
                Cryptique works by combining traditional web analytics with blockchain data. Our SDK 
                tracks user interactions on your website or dApp, while our blockchain integrations 
                monitor on-chain activities. We then correlate these data points to provide a 
                comprehensive view of your users' journey from initial awareness to on-chain conversion,
                giving you accurate Web3 marketing attribution.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="border-t border-crypto-gold/20 pt-8 text-center">
          <p className="text-xl font-medium text-gradient-primary mb-8 animate-fade-in gold-navy-text" style={{ animationDelay: '0.2s' }}>
            The Best Way for Web3 Businesses to Grow is Through Data-Driven Crypto Marketing
          </p>
          
          <p className="text-foreground/60 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering Web3 marketing teams with on-chain attribution to make better, data-driven decisions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-foreground/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="/privacy-policy" className="hover:text-crypto-gold transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-crypto-gold transition-colors">Terms of Service</a>
            <a href="https://www.blogs.cryptique.io" className="hover:text-crypto-gold transition-colors" target="_blank" rel="noopener noreferrer">Web3 Marketing Blog</a>
            <a href="https://x.com/Cryptiqueio" className="hover:text-crypto-gold transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a href="https://discord.gg/7vnk8duN" className="hover:text-crypto-gold transition-colors" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
          
          <p className="mt-8 text-sm text-foreground/40 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            © {new Date().getFullYear()} Cryptique. All rights reserved. The leading Web3 marketing and on-chain attribution platform.
          </p>
          
          {/* Digital circuit pattern */}
          <div className="mt-8 h-8 relative">
            <div className="absolute w-full h-[1px] bg-crypto-gold/10"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2 h-2 bg-white border border-crypto-gold/30 rounded-full"></div>
            <div className="absolute left-1/4 -translate-x-1/2 top-0 w-2 h-2 bg-white border border-crypto-gold/30 rounded-full"></div>
            <div className="absolute left-3/4 -translate-x-1/2 top-0 w-2 h-2 bg-white border border-crypto-gold/30 rounded-full"></div>
          </div>
          
          {/* Hidden SEO text - carefully used and not keyword stuffing */}
          <div className="sr-only">
            <h2>Cryptique - Web3 Marketing Platform with On-Chain Attribution</h2>
            <p>Track and optimize your crypto marketing campaigns with our comprehensive martech platform that connects marketing efforts to on-chain results. Perfect for DeFi projects, NFT launches, and Web3 startups.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
