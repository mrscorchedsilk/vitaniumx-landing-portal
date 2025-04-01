
import React from 'react';
import { motion } from 'framer-motion';
import BookingCalendar from '@/components/BookingCalendar';
import SectionHeading from '@/components/ui/SectionHeading';

const CalendarSection = () => {
  return (
    <section id="calendar" className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading 
            title="Schedule a Consultation" 
            subtitle="Book a time that works for you" 
          />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our team is ready to discuss your micronutrient requirements. Choose a convenient time slot,
            and we'll reach out to understand your specific needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="glass-card max-w-4xl mx-auto p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <BookingCalendar className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarSection;
