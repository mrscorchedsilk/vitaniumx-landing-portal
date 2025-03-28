
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { PhoneIcon, MessageSquareIcon } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { Card } from './ui/card';

const PartnershipSection = () => {
  return (
    <section className="section-padding bg-transparent">
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/4dd6e4f0-ddbf-4daf-98db-b48c360e9b47.png" 
                alt="Yellow circular background" 
                className="w-full"
              />
              <img 
                src="/lovable-uploads/391f5f10-5b12-4e04-b1ac-cb33e4b2d493.png" 
                alt="Fortification products" 
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute bottom-10 left-5 bg-vitablue rounded-full p-3 shadow-lg">
                <PhoneIcon className="text-white h-6 w-6" />
              </div>
              <div className="absolute bottom-28 left-5 bg-green-500 rounded-full p-3 shadow-lg">
                <MessageSquareIcon className="text-white h-6 w-6" />
              </div>
            </div>
          </div>

          <ScrollReveal animation="slide-left">
            <div className="space-y-6">
              <p className="text-vitablue uppercase font-bold tracking-wider">YOUR FORTIFICATION PARTNER</p>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Your End-to-End Fortification Partner
              </h2>
              
              <p className="text-gray-600 mt-2">We specialize in:</p>
              
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Custom premix development for specific food applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">In-house stability testing and quality control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Technical documentation for regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Process optimisation support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Flexible batch sizes to match your production needs</span>
                </li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                Join leading food manufacturers who trust us for their fortification requirements. Schedule a consultation to discuss your specific needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-vitablue hover:bg-blue-600 text-white">
                  REQUEST FOR CALL BACK
                </Button>
                <Button variant="outline" className="border-vitablue text-vitablue hover:bg-vitablue/10">
                  I have a question
                </Button>
                <Button variant="outline" className="border-vitablue text-vitablue hover:bg-vitablue/10">
                  Get a quote
                </Button>
              </div>
              
              <Button variant="outline" className="mt-4 border-green-500 text-green-500 hover:bg-green-500/10">
                Consult with a Nutritionist
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
