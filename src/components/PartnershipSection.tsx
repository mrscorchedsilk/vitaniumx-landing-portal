
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { PhoneIcon, MessageSquareIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnershipSection = () => {
  const scrollToContactForm = () => {
    // Find the contact form element and scroll to it
    const contactForm = document.querySelector('.contact-form-section');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-green-500 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-vitablue/70 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div 
              className="relative glow-multi rounded-full p-4 hover-pop"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/micronutrient-lp/lovable-uploads/57bb13a1-d547-4f58-9cc6-590e9225eb13.png" 
                alt="Yellow circular background" 
                className="w-full"
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              />
              <motion.img 
                src="/micronutrient-lp/lovable-uploads/ebffafc2-e9af-46d5-9ac1-837426db5e84.png" 
                alt="Fortification products" 
                className="absolute inset-0 w-3/4 h-3/4 m-auto object-cover rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          <ScrollReveal animation="slide-left">
            <div className="space-y-6 glow-white p-8 rounded-xl hover-pop">
              <motion.p 
                className="text-vitablue uppercase font-bold tracking-wider"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                SCALE YOUR FORTIFIED PRODUCT LINE WITH CONFIDENCE
              </motion.p>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                As a manufacturer, you need a fortification partner who understands your challenges
              </motion.h2>
              
              <ul className="space-y-4 mt-8 font-bold">
                {[
                  "Consistent quality that meets your specifications",
                  "Technical support for seamless integration",
                  "Reliable supply chain for uninterrupted production",
                  "Competitive pricing to maintain margins",
                  "Regulatory compliance documentation"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                className="text-gray-600 mt-4 font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Our modern manufacturing facility delivers premixes that work perfectly in your production process. Let's discuss your specific requirements.
              </motion.p>
              
              <motion.div 
                className="flex flex-col md:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Button 
                  className="bg-vitablue hover:bg-blue-600 text-white relative group overflow-hidden glow-vitablue hover-pop-sm"
                  onClick={scrollToContactForm}
                >
                  <span className="relative z-10">REQUEST FOR CALL BACK</span>
                  <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
