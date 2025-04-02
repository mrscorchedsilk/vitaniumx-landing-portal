
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import FloatingCertificationLogo from './ui/FloatingCertificationLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToContactForm = () => {
    const contactForm = document.querySelector('.contact-form-section');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div id="contact" className="contact-form-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
            
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              {isMobile ? (
                <a 
                  href="tel:+919429694121"
                  className="bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-[0_0_15px_rgba(58,183,250,0.5)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 w-full"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 9429694121</span>
                </a>
              ) : (
                <a 
                  href="https://api.whatsapp.com/send?phone=919429694121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-[0_0_15px_rgba(58,183,250,0.5)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 9429694121</span>
                </a>
              )}
              
              <a 
                href="https://api.whatsapp.com/send?phone=919429694121"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 w-full md:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 0.16 5.334 0.157 11.892c0 2.096.546 4.142 1.588 5.946L0 24l6.304-1.654a11.9 11.9 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.894-11.893 0-3.18-1.24-6.165-3.493-8.413zm-8.413 18.317h-.004a9.89 9.89 0 01-5.042-1.38l-.36-.214-3.733.979.996-3.648-.236-.375a9.859 9.859 0 01-1.51-5.276c.002-5.45 4.437-9.884 9.893-9.884 2.641 0 5.124 1.03 6.991 2.898a9.84 9.84 0 012.898 6.994c-.003 5.45-4.437 9.886-9.893 9.886zm5.424-7.403c-.299-.149-1.765-.87-2.037-.967-.272-.099-.47-.148-.669.148-.198.298-.767.967-.94 1.164-.173.198-.345.223-.644.075-.299-.15-1.261-.465-2.402-1.483-.888-.792-1.487-1.77-1.66-2.069-.173-.298-.019-.458.13-.606.134-.133.297-.347.446-.52.148-.174.197-.298.297-.497.1-.199.05-.372-.025-.522-.075-.149-.67-1.612-.917-2.207-.241-.578-.487-.5-.67-.51-.172-.01-.37-.012-.569-.012-.198 0-.52.075-.793.373s-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.489.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.695.247-1.29.173-1.414-.074-.124-.273-.198-.572-.347z"
                  />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
            
            {/* Updated certification logos section - single row for web, consistent mobile sizing */}
            <div className="mt-12">
              <div className="mb-4 font-semibold text-gray-700">Certified By:</div>
              {isMobile ? (
                <div className="grid grid-cols-5 gap-2 w-full">
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
                <div className="flex items-center justify-between gap-4 w-full">
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
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-2 lg:order-2 lg:min-h-[700px]"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
