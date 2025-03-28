
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
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
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
