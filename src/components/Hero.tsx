
import React from 'react';
import Logo from '@/components/Logo';
import CertificationIcon from '@/components/CertificationIcon';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContactForm = () => {
    // Find the contact form element and scroll to it
    const contactForm = document.querySelector('.contact-form-section');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, redirect to home page with #contact fragment
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="max-container py-5 flex flex-col items-center relative z-10">
      
      <motion.div 
        className="mt-8 space-y-6 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="inline-block glass rounded-full px-5 py-1.5 text-base font-bold text-gradient mx-auto shadow-[0_0_10px_rgba(0,100,255,0.5)]">
          India's Premier Micronutrient Partner
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Micronutrient Premixes<br />
          <span className="text-gradient">That Meet Your Production </span>
          <span className="text-gradient">Standards</span>
        </h1>
        
        <p className="text-lg text-gray-600">
          At VitaniumX, we're dedicated to combating hidden hunger and malnutrition with scientifically crafted, high-quality micronutrient premixes tailored to fortify staple foods.
        </p>

        <motion.div 
          className="pt-6 flex flex-col justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            onClick={scrollToContactForm}
            className="w-full max-w-md mx-auto text-lg font-bold bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-[0_0_15px_rgba(58,183,250,0.5)]" 
            size="lg">
            <PhoneCall className="mr-2 h-5 w-5" />
            Get a Call
          </Button>
          <a 
            href="https://api.whatsapp.com/send?phone=919876543210" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md mx-auto text-lg font-bold bg-green-500 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-11 px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 0.16 5.334 0.157 11.892c0 2.096.546 4.142 1.588 5.946L0 24l6.304-1.654a11.9 11.9 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.894-11.893 0-3.18-1.24-6.165-3.493-8.413zm-8.413 18.317h-.004a9.89 9.89 0 01-5.042-1.38l-.36-.214-3.733.979.996-3.648-.236-.375a9.859 9.859 0 01-1.51-5.276c.002-5.45 4.437-9.884 9.893-9.884 2.641 0 5.124 1.03 6.991 2.898a9.84 9.84 0 012.898 6.994c-.003 5.45-4.437 9.886-9.893 9.886zm5.424-7.403c-.299-.149-1.765-.87-2.037-.967-.272-.099-.47-.148-.669.148-.198.298-.767.967-.94 1.164-.173.198-.345.223-.644.075-.299-.15-1.261-.465-2.402-1.483-.888-.792-1.487-1.77-1.66-2.069-.173-.298-.019-.458.13-.606.134-.133.297-.347.446-.52.148-.174.197-.298.297-.497.1-.199.05-.372-.025-.522-.075-.149-.67-1.612-.917-2.207-.241-.578-.487-.5-.67-.51-.172-.01-.37-.012-.569-.012-.198 0-.52.075-.793.373s-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.489.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.695.247-1.29.173-1.414-.074-.124-.273-.198-.572-.347z"
              />
            </svg>
            Connect on WhatsApp
          </a>
        </motion.div>

        {/* Certification heading and logos section */}
        <div className="pt-10">
          <div className="mb-4 font-semibold text-gray-700 text-center">Certified By:</div>
          {/* Mobile View - Larger icons in a single row with more spacing */}
          <div className="flex justify-between gap-1 md:hidden">
            <CertificationIcon 
              imageSrc="/lovable-uploads/a4fce7de-1569-41b2-a92b-229feae147c3.png" 
              alt="GMP Certification"
              size="sm" 
              className="bg-transparent border-0 shadow-none"
            />
            <CertificationIcon 
              imageSrc="/lovable-uploads/f11fa1ed-549c-493c-8243-ec81e8b16c27.png" 
              alt="FSSAI Certification"
              size="sm"
              className="bg-transparent border-0 shadow-none"
            />
            <CertificationIcon 
              imageSrc="/lovable-uploads/33f2f1bb-eecb-421d-a59f-1b3e2cef2ccf.png" 
              alt="ISO 9001:2015 Certification"
              size="sm"
              className="bg-transparent border-0 shadow-none"
            />
            <CertificationIcon 
              imageSrc="/lovable-uploads/f7a0e029-ae4e-48b0-85f9-d7b250426db9.png" 
              alt="FSSC 22000 Certification"
              size="sm"
              className="bg-transparent border-0 shadow-none"
            />
            <CertificationIcon 
              imageSrc="/lovable-uploads/33c379f0-2f28-4d91-855a-db914fb96c38.png" 
              alt="ISO 22000:2018 Certification"
              size="sm"
              className="bg-transparent border-0 shadow-none"
            />
          </div>
          
          {/* Desktop View - No backgrounds, just floating logos */}
          <div className="hidden md:block">
            <div className="flex justify-center gap-8 mb-4">
              <CertificationIcon 
                imageSrc="/lovable-uploads/a4fce7de-1569-41b2-a92b-229feae147c3.png" 
                alt="GMP Certification"
                size="md" 
                className="bg-transparent border-0 shadow-none"
              />
              <CertificationIcon 
                imageSrc="/lovable-uploads/f11fa1ed-549c-493c-8243-ec81e8b16c27.png" 
                alt="FSSAI Certification"
                size="lg"
                className="bg-transparent border-0 shadow-none"
              />
              <CertificationIcon 
                imageSrc="/lovable-uploads/33f2f1bb-eecb-421d-a59f-1b3e2cef2ccf.png" 
                alt="ISO 9001:2015 Certification"
                size="lg"
                className="bg-transparent border-0 shadow-none"
              />
            </div>
            
            <div className="flex justify-center gap-8">
              <CertificationIcon 
                imageSrc="/lovable-uploads/f7a0e029-ae4e-48b0-85f9-d7b250426db9.png" 
                alt="FSSC 22000 Certification"
                size="md"
                className="bg-transparent border-0 shadow-none"
              />
              <CertificationIcon 
                imageSrc="/lovable-uploads/33c379f0-2f28-4d91-855a-db914fb96c38.png" 
                alt="ISO 22000:2018 Certification"
                size="lg"
                className="bg-transparent border-0 shadow-none"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
