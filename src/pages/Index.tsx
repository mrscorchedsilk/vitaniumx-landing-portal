import React from 'react';
import Logo from '@/components/Logo';
import StatCard from '@/components/StatCard';
import CertificationIcon from '@/components/CertificationIcon';
import ProcessStep from '@/components/ProcessStep';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Calendar, Check, Star, Award, Globe, Shield, Info, PhoneCall, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-abstract">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dots"></div>
        
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

            {/* Updated Certification Icons Section */}
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
        
        {/* New Form Section */}
        <div className="pt-24 pb-20">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <ScrollReveal>
                  <h1 className="heading-lg mb-4 text-3xl font-bold">Request a Quote</h1>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    Fill out the form below and our team will provide a tailored quotation for your micronutrient premix needs.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <ScrollReveal>
                    <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                              First Name*
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              required
                              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                              Last Name*
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              required
                              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                              Email Address*
                            </label>
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                              Phone Number*
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              required
                              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                            Company Name*
                          </label>
                          <input
                            type="text"
                            id="company"
                            required
                            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                          />
                        </div>

                        <div className="mb-6">
                          <label htmlFor="productInterest" className="block text-sm font-medium text-neutral-700 mb-1">
                            Product Interest*
                          </label>
                          <select
                            id="productInterest"
                            required
                            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                          >
                            <option value="">Select a product category</option>
                            <option value="staple">Staple Food Fortification</option>
                            <option value="processed">Processed Food Solutions</option>
                            <option value="therapeutic">Therapeutic Foods</option>
                            <option value="animal">Animal Nutrition</option>
                            <option value="custom">Customized Formulations</option>
                            <option value="fmcg">FMCG Fortification</option>
                          </select>
                        </div>

                        <div className="mb-6">
                          <label htmlFor="volume" className="block text-sm font-medium text-neutral-700 mb-1">
                            Estimated Volume (Tonnes/Month)
                          </label>
                          <input
                            type="text"
                            id="volume"
                            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                          />
                        </div>

                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                            Message & Requirements*
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            required
                            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitablue focus:border-transparent"
                            placeholder="Please describe your specific requirements, including the type of food you want to fortify, target nutrients, etc."
                          ></textarea>
                        </div>

                        <div className="mb-8">
                          <label className="flex items-start">
                            <input
                              type="checkbox"
                              required
                              className="mt-1 mr-3"
                            />
                            <span className="text-sm text-neutral-600">
                              I consent to VitaniumX collecting and processing my personal data for the purpose of providing me with a quote. 
                              I understand that my information will be handled in accordance with the privacy policy.
                            </span>
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="btn-primary bg-vitablue hover:bg-vitablue-dark w-full py-4"
                        >
                          Submit Quote Request
                        </button>
                      </form>
                    </div>
                  </ScrollReveal>
                </div>

                <div>
                  <ScrollReveal delay={200}>
                    <div className="bg-neutral-50 p-8 rounded-xl">
                      <h3 className="text-xl font-bold mb-6">Why Choose VitaniumX?</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-vitablue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Multiple quality certifications including GMP and ISO</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-vitablue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">10 tonnes daily production capacity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-vitablue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Advanced testing equipment for quality assurance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-vitablue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Customized formulations tailored to your needs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-vitablue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Proven track record with government programs</span>
                        </li>
                      </ul>

                      <div className="mt-8 pt-8 border-t border-neutral-200">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <div className="space-y-2 text-neutral-700">
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
      </header>

      {/* Partners Section */}
      <section className="py-16 bg-abstract-light">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">Reputable Food Producers We Work With</h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 w-24 glass flex items-center justify-center rounded-lg p-4">
                <div className="text-gray-400 text-sm font-medium">Client {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-abstract">
        <div className="max-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass-card animate-float">
                <img 
                  src="/lovable-uploads/7d07a954-2614-4225-adbb-44aae710dec4.png" 
                  alt="Micronutrient Fortification" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Food Producers <span className="text-gradient">Trust VitaniumX</span>
              </h2>

              <div className="space-y-6">
                <ProcessStep 
                  number={1}
                  title="Superior Formulations"
                  description="Micronutrient premixes designed for optimal bioavailability and stability during processing."
                  delay={200}
                />
                <ProcessStep 
                  number={2}
                  title="Quality Certifications"
                  description="GMP, ISO 9001:2015, FSSC 22000, FSSAI, and ISO 22000:2018 certified processes."
                  delay={400}
                />
                <ProcessStep 
                  number={3}
                  title="Industry Expertise"
                  description="Deep understanding of food fortification requirements and nutritional science."
                  delay={600}
                />
                <ProcessStep 
                  number={4}
                  title="Proven Impact"
                  description="Over 573 million fortified meals delivered from 2020 to 2024."
                  delay={800}
                />
                <ProcessStep 
                  number={5}
                  title="Technical Support"
                  description="In-house nutritionists and technical experts to support your production needs."
                  delay={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-r from-vitablue to-blue-600 text-white">
        <div className="max-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Achievements & Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard 
              number="573M+"
              text="Fortified Meals Delivered"
              delay={200}
            />
            <StatCard 
              number="114,736"
              text="Tonnes of Food Fortified"
              delay={400}
            />
            <StatCard 
              number="10"
              text="Tonnes Daily Production"
              delay={600}
            />
            <StatCard 
              number="100%"
              text="Quality Assurance"
              delay={800}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-abstract-light">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of micronutrient premixes designed for various applications in food fortification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard 
              title="Staple Food Premixes"
              description="Fortification solutions for wheat flour, rice (including Fortified Rice Kernels), milk, and oil."
              icon={<Star className="text-vitablue h-8 w-8" />}
              delay={200}
            />
            <ProductCard 
              title="Processed Food Fortification"
              description="Custom blends for snacks, bakery, confectionery, dairy, and beverages."
              icon={<Award className="text-vitablue h-8 w-8" />}
              delay={400}
            />
            <ProductCard 
              title="Therapeutic Foods"
              description="Specialized, nutrient-dense formulations for acute malnutrition (WFP standards)."
              icon={<Shield className="text-vitablue h-8 w-8" />}
              delay={600}
            />
            <ProductCard 
              title="Customized Formulations"
              description="Tailored blends for diverse industry applications based on your specific requirements."
              icon={<Globe className="text-vitablue h-8 w-8" />}
              delay={800}
            />
            <ProductCard 
              title="Animal Nutrition"
              description="Vitamin and mineral premixes for livestock, poultry, and aquaculture feed."
              icon={<Info className="text-vitablue h-8 w-8" />}
              delay={1000}
            />
            <ProductCard 
              title="FMCG Fortification"
              description="Solutions for breads, biscuits, breakfast cereals, fruit juices, and more."
              icon={<Check className="text-vitablue h-8 w-8" />}
              delay={1200}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-abstract">
        <div className="max-container">
          <div className="glass-card max-w-4xl mx-auto text-center p-8 md:p-12">
            <h2 className="text-3xl font-bold">
              Transform Your Manufacturing Impact
            </h2>
            <p className="my-6 text-gray-600">
              As a manufacturer, you need a fortification partner who understands your challenges. 
              Our team combines technical expertise with innovative solutions to help you deliver 
              nutritionally enhanced products that make a difference.
            </p>
            <Button className="btn-primary">Request a Consultation</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-400">
                Progressive Processors Private Limited
              </p>
              <p className="mt-2 text-gray-400">
                Leading the global fight against micronutrient deficiencies
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-vitablue-light" />
                  <span className="text-sm">
                    F-80, Ramghat Rd, Sector 1, Talanagri, Aligarh, Uttar Pradesh 202001, India
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-vitablue-light" />
                  <a href="mailto:hello@vitaniumx.com" className="text-sm hover:text-vitablue-light">
                    hello@vitaniumx.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-vitablue-light" />
                  <a href="tel:+919429694121" className="text-sm hover:text-vitablue-light">
                    +91 9429694121
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Sales Inquiries</h3>
              <p className="text-sm text-gray-400 mb-4">
                For sales queries and technical details, please contact:
              </p>
              <div className="space-y-2">
                <a href="mailto:farhan.anis@vitaniumx.com" className="text-sm block hover:text-vitablue-light">
                  farhan.anis@vitaniumx.com
                </a>
                <a href="mailto:vageesh.shukla@vitaniumx.com" className="text-sm block hover:text-vitablue-light">
                  vageesh.shukla@vitaniumx.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Progressive Processors Private Limited (VitaniumX). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
