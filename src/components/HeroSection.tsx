
import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Hero content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
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
              <button className="bg-[#1EAEDB] hover:bg-[#1a9ac3] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg">
                REQUEST FOR CALL BACK
              </button>
            </div>
            
            {/* Certification Icons Section */}
            <div className="flex flex-wrap gap-4 mt-8">
              <img src="/lovable-uploads/gmp.png" alt="GMP Certified" className="h-16" />
              <img src="/lovable-uploads/fssai.webp" alt="FSSAI Certified" className="h-16" />
              <img src="/lovable-uploads/7fc3bae2-9485-4fc2-b7e0-91e18ba73ae6.png" alt="100% Vegan" className="h-16" />
              <img src="/lovable-uploads/0fd9b7b7-e731-4f37-b7fe-a5cc7210aae8.png" alt="ISO 9001 Certified" className="h-16" />
            </div>
          </div>
        </motion.div>
        
        {/* Right side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
