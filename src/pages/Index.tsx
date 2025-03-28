
import React from 'react';
import PageHeader from '@/components/PageHeader';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
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
      {/* Header with Hero Section */}
      <PageHeader>
        <Hero />
        {/* Form Section */}
        <QuoteForm />
      </PageHeader>

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
  );
};

export default Index;
