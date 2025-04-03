
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import PartnersCarousel from '@/components/ui/PartnersCarousel';

const TrustedPartnersSection = () => {
  const partnerLogos = [
    {
      src: "/lovable-uploads/63e4b09f-2bc2-4a2e-8840-03deefba1190.png",
      alt: "Chandigarh Sweets",
    },
    {
      src: "/lovable-uploads/a3c56c11-5aff-467d-8c29-fc2a87cd65a6.png",
      alt: "Devesh Foods",
    },
    {
      src: "/lovable-uploads/b6cb18f6-c1a7-455c-9d82-4c7581adbaa0.png",
      alt: "interlink FOODS",
    },
    {
      src: "/lovable-uploads/2aee1202-8de6-4710-b673-abd951ff6a94.png",
      alt: "Continental Milkose",
    },
    {
      src: "/lovable-uploads/3da5f323-2859-41c1-acce-249a7155a15d.png",
      alt: "SPR FOODS",
    },
    {
      src: "/lovable-uploads/6dc644d7-b0fd-43ac-a2fb-d68874f84f31.png",
      alt: "RAUSHEENA GROUP",
    },
    {
      src: "/lovable-uploads/Shree Lal i Logo.png",
      alt: "SHREE LALJI ENERGY FOODS PVT LTD",
    },
    {
      src: "/lovable-uploads/25931309-7c87-40c2-9e72-6ceb29ffda3e.png",
      alt: "SURUCHI FOODS",
    },
    {
      src: "/lovable-uploads/48560100-0f0c-4d33-ae66-12a08fe864b9.png",
      alt: "M.P. AGRO",
    },
    {
      src: "/lovable-uploads/haryana_gov_logo.png",
      alt: "Government of Haryana",
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-vitablue/50 to-blue-600/50">
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vitablue/30 rounded-full filter blur-[80px] animate-pulse"></div>
      </div>
      
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>
      
      <div className="max-container relative z-10">
        <motion.div 
          className="text-center mb-12 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Trusted Partners" 
            description="We're proud to collaborate with leading organizations across the food industry to enhance nutrition worldwide."
            titleColor="black"
            fontWeight="bold"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden"
        >
          <PartnersCarousel logos={partnerLogos} />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
