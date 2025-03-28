
import React from 'react';
import StatCard from '@/components/StatCard';

const Achievements = () => {
  return (
    <section className="section-padding bg-transparent text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-vitablue/70 to-blue-600/70 backdrop-blur-sm"></div>
      <div className="max-container relative z-10">
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
  );
};

export default Achievements;
