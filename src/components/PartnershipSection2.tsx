
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CalendarIcon, FileTextIcon } from 'lucide-react';

const PartnershipSection2 = () => {
  return (
    <section className="section-padding bg-transparent">
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-right">
            <div className="space-y-6">
              <SectionHeading 
                align="left" 
                title="Your End-to-End Fortification Partner" 
                titleSize="md"
              />
              
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
                Join leading food manufacturers who trust us for their fortification requirements. Schedule a consultation to discuss your specific needs.
              </p>
              
              <div className="mt-6">
                <Button className="bg-vitablue hover:bg-blue-600 text-white">
                  REQUEST FOR CALL BACK
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/7fc3bae2-9485-4fc2-b7e0-91e18ba73ae6.png" 
                alt="Yellow circular background" 
                className="w-full"
              />
              <img 
                src="/lovable-uploads/1ffcb39f-a4a2-4462-a4aa-7fda40c425b6.png" 
                alt="Fortification ingredients" 
                className="absolute inset-0 w-3/4 h-3/4 m-auto object-cover rounded-full"
              />
              <div className="absolute bottom-10 right-10 bg-vitablue rounded-full p-3 shadow-lg">
                <CalendarIcon className="text-white h-6 w-6" />
              </div>
              <div className="absolute top-20 right-10 bg-green-500 rounded-full p-3 shadow-lg">
                <FileTextIcon className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection2;
