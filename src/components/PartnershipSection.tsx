
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { PhoneIcon, MessageSquareIcon } from 'lucide-react';

const PartnershipSection = () => {
  return (
    <section className="section-padding bg-transparent">
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/57bb13a1-d547-4f58-9cc6-590e9225eb13.png" 
                alt="Yellow circular background" 
                className="w-full"
              />
              <img 
                src="/lovable-uploads/ebffafc2-e9af-46d5-9ac1-837426db5e84.png" 
                alt="Fortification products" 
                className="absolute inset-0 w-3/4 h-3/4 m-auto object-cover rounded-full"
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
              <p className="text-vitablue uppercase font-bold tracking-wider">SCALE YOUR FORTIFIED PRODUCT LINE WITH CONFIDENCE</p>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                As a manufacturer, you need a fortification partner who understands your challenges
              </h2>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Consistent quality that meets your specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Technical support for seamless integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Reliable supply chain for uninterrupted production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Competitive pricing to maintain margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">Regulatory compliance documentation</span>
                </li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                Our modern manufacturing facility delivers premixes that work perfectly in your production process. Let's discuss your specific requirements.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mt-8">
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
