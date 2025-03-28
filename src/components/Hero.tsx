
import React from 'react';
import Logo from '@/components/Logo';
import CertificationIcon from '@/components/CertificationIcon';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="max-container py-16 flex flex-col items-center relative z-10">
      <Logo />
      
      <motion.div 
        className="mt-8 space-y-6 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="inline-block glass rounded-full px-4 py-1 text-sm font-medium text-vitablue mx-auto">
          India's Premier Micronutrient Partner
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Micronutrient Premixes<br />
          <span className="text-gradient">That Meet Your Production Standards</span>
        </h1>
        
        <p className="text-lg text-gray-600">
          At VitaniumX, we're dedicated to combating hidden hunger and malnutrition with scientifically crafted, high-quality micronutrient premixes tailored to fortify staple foods.
        </p>

        <motion.div 
          className="pt-6 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="btn-primary" size="lg">
            <PhoneCall className="mr-2" />
            Get a Call
          </Button>
          <Button variant="outline" size="lg" className="bg-green-500 hover:bg-green-600 text-white border-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              />
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
              />
            </svg>
            Connect on WhatsApp
          </Button>
        </motion.div>

        {/* Certification Icons Section */}
        <div className="flex justify-center flex-wrap gap-4 pt-8">
          <CertificationIcon 
            imageSrc="/lovable-uploads/34d83cd1-d9cc-4729-b5a2-36d3a619208d.png" 
            alt="FSSAI Certification"
            size="lg"
          />
          <CertificationIcon 
            imageSrc="/lovable-uploads/44926a1d-a315-4b53-82ff-577da7418750.png" 
            alt="FSSC 22000 Certification"
            size="lg"
          />
          <CertificationIcon 
            imageSrc="/lovable-uploads/9030ba6e-41af-4847-a715-7b2c001610f8.png" 
            alt="GMP Certification"
            size="lg"
          />
          <CertificationIcon 
            imageSrc="/lovable-uploads/0fd9b7b7-e731-4f37-b7fe-a5cc7210aae8.png" 
            alt="ISO 9001:2015 Certification"
            size="lg"
          />
          <CertificationIcon 
            imageSrc="/lovable-uploads/632ea02c-911f-466f-a4a7-22833cfc2c82.png" 
            alt="ISO 22000:2018 Certification"
            size="lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
