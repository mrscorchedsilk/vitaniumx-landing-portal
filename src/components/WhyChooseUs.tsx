
import React from 'react';
import ProcessStep from '@/components/ProcessStep';
import ScrollReveal from '@/components/ScrollReveal';

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
