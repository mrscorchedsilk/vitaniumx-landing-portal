
import React from 'react';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const QuoteFormSidebar = () => {
  return (
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
  );
};
