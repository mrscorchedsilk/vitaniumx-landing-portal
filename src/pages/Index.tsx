
import React from 'react';
import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
import StatCard from '@/components/StatCard';
import CertificationIcon from '@/components/CertificationIcon';
import ProcessStep from '@/components/ProcessStep';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Calendar, Check, Star, Award, Globe, Shield, Info, PhoneCall, Whatsapp } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-radial from-vitablue-light/10 to-transparent"></div>
        
        <div className="max-container py-16 flex flex-col items-center">
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
                <Whatsapp className="mr-2" />
                Connect on WhatsApp
              </Button>
            </motion.div>

            <div className="flex justify-center gap-4 pt-4">
              {['GMP', 'ISO', 'FSSC', 'FSSAI'].map((cert, i) => (
                <CertificationIcon 
                  key={cert} 
                  name={cert}
                  delay={i * 200}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="max-container grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
          <div></div>
          <div>
            <ContactForm />
          </div>
        </div>
      </header>

      {/* Partners Section */}
      <section className="py-16 bg-white/50">
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
      <section className="section-padding">
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
      <section className="section-padding">
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
      <section className="section-padding bg-gradient-radial from-vitablue/10 to-transparent">
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
