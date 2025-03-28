
import React from 'react';
import { BeakerIcon, CheckCircleIcon, TruckIcon, ClockIcon, UsersIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature = ({ icon, title, description, delay = 0 }: FeatureProps) => {
  return (
    <div className="flex items-start gap-4 mb-6" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex-shrink-0 rounded-full bg-vitablue h-12 w-12 flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-abstract">
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-up">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Reliable Partners in <span className="text-gradient">Micronutrient Fortification.</span>
              </h2>
              
              <p className="text-gray-600 mb-8">
                Founded in 2018, VitaniumX by Progressive Processors Private Limited has been a trusted partner in manufacturing customized micronutrient fortification solutions designed to meet the evolving demands of the food and nutrition industry.
              </p>

              <Feature 
                icon={<BeakerIcon className="h-6 w-6" />}
                title="Custom Formulations"
                description="Get premix formulations precisely matched to your product specifications and regulatory requirements."
                delay={100}
              />
              
              <Feature 
                icon={<CheckCircleIcon className="h-6 w-6" />}
                title="Quality Assurance & Consistency"
                description="Every batch tested for potency and homogeneity. Full compliance with FSSAI, ISO, and GMP standards."
                delay={200}
              />
              
              <Feature 
                icon={<TruckIcon className="h-6 w-6" />}
                title="Simplified Supply Chain"
                description="Single-source solution for all your fortification needs. Direct manufacturer relationship means faster delivery."
                delay={300}
              />
              
              <Feature 
                icon={<ClockIcon className="h-6 w-6" />}
                title="Time and Cost Efficiency"
                description="Quick turnaround times on custom orders. Competitive pricing through direct manufacturing capabilities."
                delay={400}
              />
              
              <Feature 
                icon={<UsersIcon className="h-6 w-6" />}
                title="Technical Expertise"
                description="Access our food scientists and fortification experts for formulation support and regulatory compliance."
                delay={500}
              />
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="glass-card animate-float">
              <img 
                src="/lovable-uploads/ca9cf586-b336-4748-8eba-133a808d968e.png" 
                alt="Micronutrient Fortification Ingredients" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
