
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedPartnersSection from '@/components/TrustedPartnersSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Achievements from '@/components/Achievements';
import PartnershipSection from '@/components/PartnershipSection';
import PartnershipSection2 from '@/components/PartnershipSection2';
import ProductsSection from '@/components/ProductsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-abstract">
      {/* Navbar */}
      <Navbar />
      
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section with Side-by-side Form */}
        <HeroSection />

        {/* Partners Section */}
        <TrustedPartnersSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Achievements Section */}
        <Achievements />
        
        {/* Partnership Section */}
        <PartnershipSection />
        
        {/* Second Partnership Section */}
        <PartnershipSection2 />

        {/* Products Section */}
        <ProductsSection />

        {/* CTA Section */}
        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
