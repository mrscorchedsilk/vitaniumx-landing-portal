
import React from 'react';
import StatCard from '@/components/StatCard';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className="section-padding bg-transparent text-white relative overflow-hidden">
      {/* Enhanced gradient background with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-vitablue/70 to-blue-600/70 backdrop-blur-sm"
        animate={{ 
          background: [
            'linear-gradient(to right, rgba(30, 174, 219, 0.7), rgba(37, 99, 235, 0.7))',
            'linear-gradient(to right, rgba(37, 99, 235, 0.7), rgba(30, 174, 219, 0.7))',
            'linear-gradient(to right, rgba(30, 174, 219, 0.7), rgba(37, 99, 235, 0.7))'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="max-container relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Achievements & Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-bold mx-auto max-w-4xl">
              <StatCard 
              number="573M+"
              text="Fortified Meals Delivered"
              delay={200}
              className="glow-vitablue hover-pop"
              />
              <StatCard 
              number="10"
              text="Tonnes Daily Production"
              delay={400}
              className="glow-vitablue hover-pop"
              />
              <StatCard 
              number="100%"
              text="Quality Assurance"
              delay={600}
              className="glow-vitablue hover-pop"
              />
            </div>
      </div>
    </section>
  );
};

export default Achievements;
