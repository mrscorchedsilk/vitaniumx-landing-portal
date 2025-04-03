import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedPartnersSection from '@/components/TrustedPartnersSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Achievements from '@/components/Achievements';
import PartnershipSection from '@/components/PartnershipSection';
import PartnershipSection2 from '@/components/PartnershipSection2';
import ProductsSection from '@/components/ProductsSection';
import CallToAction from '@/components/CallToAction';
import CalendarSection from '@/components/CalendarSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import MobileMenuButton from '@/components/MobileMenuButton';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash === '#') {
      navigate('/micronutrient-lp/', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    // Append the "#" to the URL when the component is loaded
    if (!window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}#`);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceItems = [
    { title: 'Staple Food Fortification', id: 'staplefoodfortification' },
    { title: 'Public Health Nutrition Scheme Fortification', id: 'governmentschemes' },
    { title: 'Nutraceutical Applications', id: 'nutraceutical' },
    { title: 'Customized Formulations', id: 'customformulations' },
    { title: 'Animal Nutrition', id: 'animalnutrition' },
    { title: 'FMCG Products', id: 'fmcgproducts' },
  ];

  return (
    <div className="min-h-screen bg-abstract">
      {/* Navbar */}
      <Navbar />

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Mobile Menu Button - only displays in mobile view */}
      {isMobile && <MobileMenuButton serviceItems={serviceItems} onSectionScroll={scrollToSection} />}

      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section with Side-by-side Form */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Partners Section */}
        <TrustedPartnersSection />

        {/* Why Choose Us Section */}
        <section id="aboutus">
          <WhyChooseUs />
        </section>

        {/* Achievements Section */}
        <Achievements />

        {/* Partnership Section */}
        <PartnershipSection />

        {/* Second Partnership Section */}
        <PartnershipSection2 />

        {/* Products Section */}
        <section id="products">
          <ProductsSection />
        </section>

        {/* CTA Section */}
        <CallToAction />

        {/* Calendar Section - New */}
        <section id="contactus" className="contact-form-section">
          <CalendarSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
