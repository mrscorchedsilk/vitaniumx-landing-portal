
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vitablue rounded-full filter blur-[120px] animate-pulse"></div>
      </div>
      
      <div className="max-container">
        <motion.div 
          className="glass-card max-w-4xl mx-auto text-center p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-vitablue/20 via-green-300/20 to-vitablue/20 animate-pulse"></div>
          
          <motion.h2 
            className="text-3xl font-bold relative z-10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transform Your Manufacturing Impact
          </motion.h2>
          
          <motion.p 
            className="my-6 text-gray-600 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            As a manufacturer, you need a fortification partner who understands your challenges. 
            Our team combines technical expertise with innovative solutions to help you deliver 
            nutritionally enhanced products that make a difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary relative group overflow-hidden">
              <span className="relative z-10">Request a Consultation</span>
              <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
