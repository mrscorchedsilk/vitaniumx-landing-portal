
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import FloatingCertificationLogo from './ui/FloatingCertificationLogo';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToContactForm = () => {
    const contactForm = document.querySelector('.contact-form-section');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div id="contact" className="contact-form-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-1"
        >
          <div className="text-left">
            <div className="inline-block glass rounded-full px-5 py-1.5 text-base font-bold text-gradient mb-6 shadow-[0_0_10px_rgba(0,100,255,0.5)]">
              India's Premier Micronutrient Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Micronutrient Premixes
              <br />
              <span className="text-gradient">That Meet Your Production </span>
              <span className="text-gradient">Standards</span>
            </h1>
            
            <p className="text-lg text-gray-700 mt-6">
              Precision-engineered fortification solutions for food producers
            </p>
            
            <p className="text-base text-gray-600 mt-4">
              We craft your perfect premix blend. From concept to completion, our expert 
              team delivers tailored solutions that match your exact needs. Whether you're 
              launching a new product or optimising an existing formula, our specialised 
              premix capabilities adapt to your unique requirements.
            </p>
            
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Staple Food Fortifications
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Processed Food Fortifications
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Animal Nutrition Premixes
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Nutraceutical Applications
              </li>
            </ul>
            
            <div className="mt-8">
              <button 
                className="w-full md:w-auto bg-[#1EAEDB] hover:bg-[#1a9ac3] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover-pop"
                onClick={scrollToContactForm}
              >
                REQUEST FOR CALL BACK
              </button>
            </div>
            
            {/* Updated certification logos section - just floating logos */}
            <div className="mt-12">
              <div className="mb-4 font-semibold text-gray-700">Certified By:</div>
              <div className="flex flex-wrap justify-start items-center gap-3 md:gap-6 w-full">
                {isMobile ? (
                  <div className="flex gap-3 justify-between w-full">
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/a4fce7de-1569-41b2-a92b-229feae147c3.png" 
                      alt="GMP Certified" 
                      size="md" 
                      delay={0.5}
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/f11fa1ed-549c-493c-8243-ec81e8b16c27.png" 
                      alt="FSSAI Certified" 
                      size="md" 
                      delay={1}
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/33f2f1bb-eecb-421d-a59f-1b3e2cef2ccf.png" 
                      alt="ISO 9001:2015 Certified" 
                      size="md" 
                      delay={1.5}
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/f7a0e029-ae4e-48b0-85f9-d7b250426db9.png" 
                      alt="FSSC 22000 Certified" 
                      size="md"
                      delay={0} 
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/33c379f0-2f28-4d91-855a-db914fb96c38.png" 
                      alt="ISO 22000:2018 Certified" 
                      size="md" 
                      delay={2}
                    />
                  </div>
                ) : (
                  <div className="flex gap-8 flex-wrap">
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/a4fce7de-1569-41b2-a92b-229feae147c3.png" 
                      alt="GMP Certified" 
                      size="lg" 
                      delay={0.5}
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/f11fa1ed-549c-493c-8243-ec81e8b16c27.png" 
                      alt="FSSAI Certified" 
                      size="lg" 
                      delay={1}
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/33f2f1bb-eecb-421d-a59f-1b3e2cef2ccf.png" 
                      alt="ISO 9001:2015 Certified" 
                      size="lg" 
                      delay={1.5}
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/f7a0e029-ae4e-48b0-85f9-d7b250426db9.png" 
                      alt="FSSC 22000 Certified" 
                      size="lg"
                      delay={0} 
                    />
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/33c379f0-2f28-4d91-855a-db914fb96c38.png" 
                      alt="ISO 22000:2018 Certified" 
                      size="lg" 
                      delay={2}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-2 lg:order-2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
