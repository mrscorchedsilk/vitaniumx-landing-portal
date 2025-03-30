
import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FloatingCertificationLogo from '@/components/ui/FloatingCertificationLogo';

const QuoteForm = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <div className="pt-10 md:pt-20 pb-10 md:pb-15 px-4">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <ScrollReveal>
              <h1 className="heading-lg mb-2 md:mb-4 text-2xl md:text-3xl font-bold">Request a Quote</h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base md:text-xl text-neutral-600 max-w-2xl mx-auto">
                Fill out the form below and our team will provide a tailored quotation for your micronutrient premix needs.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_0_25px_rgba(58,183,250,0.3)] hover:shadow-[0_0_30px_rgba(58,183,250,0.5)] transition-all duration-300 relative overflow-hidden">
                  {/* Floating Certification Logos */}
                  <div className="absolute -right-10 -top-10 opacity-20 pointer-events-none">
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/fssai.webp" 
                      alt="FSSAI Certification" 
                      size="xl"
                      delay={0.2}
                    />
                  </div>
                  <div className="absolute -left-10 -bottom-10 opacity-20 pointer-events-none">
                    <FloatingCertificationLogo 
                      src="/lovable-uploads/gmp.png" 
                      alt="GMP Certification" 
                      size="xl"
                      delay={0.5}
                    />
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                          First Name*
                        </label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="hover:border-vitablue focus:glow-vitablue"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                          Last Name*
                        </label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="hover:border-vitablue focus:glow-vitablue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address*
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="hover:border-vitablue focus:glow-vitablue"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number*
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="hover:border-vitablue focus:glow-vitablue"
                        />
                      </div>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                        Company Name*
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="hover:border-vitablue focus:glow-vitablue"
                      />
                    </div>

                    <div className="mb-4 md:mb-6">
                      <label htmlFor="productInterest" className="block text-sm font-medium text-neutral-700 mb-1">
                        Product Interest*
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:glow-vitablue transition-all duration-300 hover:border-vitablue disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select a product category</option>
                        <option value="staple">Micronutrient Premixes</option>
                        <option value="processed">Government Nutritional Schemes</option>
                        <option value="therapeutic">Therapeutic Foods</option>
                        <option value="animal">Animal Nutrition</option>
                        <option value="custom">Customized Formulations</option>
                        <option value="fmcg">FMCG Fortification</option>
                      </select>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <label htmlFor="volume" className="block text-sm font-medium text-neutral-700 mb-1">
                        Estimated Volume (Tonnes/Month)
                      </label>
                      <Input
                        type="text"
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="hover:border-vitablue focus:glow-vitablue"
                      />
                    </div>

                    <div className="mb-4 md:mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Message & Requirements*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="hover:border-vitablue focus:glow-vitablue"
                        placeholder="Please describe your specific requirements, including the type of food you want to fortify, target nutrients, etc."
                      />
                    </div>

                    <div className="mb-6 md:mb-8">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="mt-1 mr-3 focus:ring-2 focus:ring-vitablue cursor-pointer"
                        />
                        <span className="text-xs md:text-sm text-neutral-600">
                          I consent to VitaniumX collecting and processing my personal data for the purpose of providing me with a quote. 
                          I understand that my information will be handled in accordance with the privacy policy.
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="bg-vitablue hover:bg-vitablue-dark w-full py-5 md:py-7 text-white font-medium hover:shadow-lg transition-all duration-300 hover-pop glow-vitablue"
                    >
                      Submit Quote Request
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={200}>
                <div className="bg-neutral-50 p-4 md:p-8 rounded-xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Why Choose VitaniumX?</h3>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitablue mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-neutral-700">Multiple quality certifications including GMP and ISO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitablue mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-neutral-700">10 tonnes daily production capacity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitablue mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-neutral-700">Advanced testing equipment for quality assurance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitablue mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-neutral-700">Customized formulations tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitablue mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-neutral-700">Proven track record with government programs</span>
                    </li>
                  </ul>

                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-neutral-200">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Information</h3>
                    <div className="space-y-1 md:space-y-2 text-sm md:text-base text-neutral-700">
                      <p>
                        <span className="font-medium">Phone:</span> +91 94296 94121
                      </p>
                      <p>
                        <span className="font-medium">Email:</span> hello@vitaniumx.com
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
