
import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { QuoteFormInputs } from './QuoteFormInputs';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingCertificationLogo from '@/components/ui/FloatingCertificationLogo';

export const QuoteFormContainer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    volume: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted', formData);
    
    toast.success('Your quote request has been submitted!');
    
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      productInterest: '',
      volume: '',
      message: '',
      consent: false
    });
  };

  return (
    <ScrollReveal>
      <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_0_25px_rgba(58,183,250,0.3)] hover:shadow-[0_0_30px_rgba(58,183,250,0.5)] transition-all duration-300 relative overflow-hidden">
        {/* Blue tinted background */}
        <div className="absolute inset-0 bg-vitablue/5 pointer-events-none z-0"></div>
        
        {/* Floating Certification Logos */}
        <div className="absolute -right-10 -top-10 opacity-20 pointer-events-none">
          <FloatingCertificationLogo 
            src="/lovable-uploads/fssai.webp" 
            alt="FSSAI Certification" 
            size="xl"
            delay={0.2}
            glowColor="rgba(30, 174, 219, 0.5)"
          />
        </div>
        <div className="absolute -left-10 -bottom-10 opacity-20 pointer-events-none">
          <FloatingCertificationLogo 
            src="/lovable-uploads/gmp.png" 
            alt="GMP Certification" 
            size="xl"
            delay={0.5}
            glowColor="rgba(30, 174, 219, 0.5)"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="relative z-10">
          <QuoteFormInputs formData={formData} handleChange={handleChange} />

          <Button
            type="submit"
            className="bg-vitablue hover:bg-vitablue-dark w-full py-5 md:py-7 text-white font-medium hover:shadow-lg transition-all duration-300 hover-pop glow-vitablue"
          >
            Submit Quote Request
          </Button>
        </form>
      </div>
    </ScrollReveal>
  );
};
