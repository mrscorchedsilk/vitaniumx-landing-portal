
import React from 'react';
import { motion } from 'framer-motion';
import BookingCalendar from '@/components/BookingCalendar';
import SectionHeading from '@/components/ui/SectionHeading';
import { useIsMobile } from '@/hooks/use-mobile';

const CalendarSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="calendar" className="pt-6 pb-12 bg-transparent relative overflow-hidden">
      <div className="max-container">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading 
            title="Schedule a Consultation" 
          />
          <p className={`mt-3 md:mt-4 text-gray-600 max-w-2xl mx-auto ${isMobile ? 'text-sm px-4' : ''}`}>
            Our team is ready to discuss your micronutrient requirements. Choose a convenient time slot,
            and we'll reach out to understand your specific needs.
          </p>
        </motion.div>
        
        <BookingCalendar className="w-full max-w-5xl mx-auto" />
      </div>
    </section>
  );
};

export default CalendarSection;
