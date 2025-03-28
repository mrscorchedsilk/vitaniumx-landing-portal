
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
