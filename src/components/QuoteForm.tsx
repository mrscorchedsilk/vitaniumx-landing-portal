
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { QuoteFormContainer } from './quote/QuoteFormContainer';
import { QuoteFormSidebar } from './quote/QuoteFormSidebar';

const QuoteForm = () => {
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
              <QuoteFormContainer />
            </div>
            <div>
              <QuoteFormSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
