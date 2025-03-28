
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooterSection = () => {
  return (
    <footer className="bg-secondary">
      <div className="container-section" id="faq">
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 animate-fade-in">FAQs</h3>
          
          <Accordion type="single" collapsible className="w-full animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <AccordionItem value="item-1">
              <AccordionTrigger>How long before I can track my first campaign?</AccordionTrigger>
              <AccordionContent>
                You can start tracking your first campaign within minutes after setting up your account. 
                Our simple SDK implementation allows for quick integration, and our team is always 
                available to help with the setup process.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Why do I need Cryptique?</AccordionTrigger>
              <AccordionContent>
                Cryptique bridges the gap between Web2 analytics and Web3 on-chain data, providing 
                you with a complete picture of your marketing performance. Without this unified view, 
                you're likely missing critical insights about your users' behavior and the true ROI 
                of your marketing efforts.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Why should I use Cryptique over other alternatives?</AccordionTrigger>
              <AccordionContent>
                Unlike traditional analytics platforms that were built for Web2, Cryptique is 
                specifically designed for Web3 projects. We understand the unique challenges of 
                decentralized applications and provide specialized tools for tracking wallet-based 
                user journeys, token transactions, and community engagement.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How much does Cryptique cost?</AccordionTrigger>
              <AccordionContent>
                Cryptique offers flexible pricing plans to accommodate projects of all sizes. We offer 
                a free tier to get started, with paid plans starting at $199/month for growing projects. 
                Enterprise plans with custom features are also available. Contact us for a personalized quote.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How does Cryptique work?</AccordionTrigger>
              <AccordionContent>
                Cryptique works by combining traditional web analytics with blockchain data. Our SDK 
                tracks user interactions on your website or dApp, while our blockchain integrations 
                monitor on-chain activities. We then correlate these data points to provide a 
                comprehensive view of your users' journey from initial awareness to on-chain conversion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="border-t border-border/40 pt-8 text-center">
          <p className="text-xl font-medium gradient-text mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The Best Way for Web3 Businesses to Grow is to Understand Their Users.
          </p>
          
          <p className="text-foreground/60 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering Web3 marketing teams to make better, data-driven decisions.
          </p>
          
          <div className="flex justify-center gap-8 text-sm text-foreground/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <p className="mt-8 text-sm text-foreground/40 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            © {new Date().getFullYear()} Cryptique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
