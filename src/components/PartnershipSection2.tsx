
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CalendarIcon, FileTextIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnershipSection2 = () => {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vitablue rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-400 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-up">
            <div className="space-y-6">
              <SectionHeading 
                align="left" 
                title="Your End-to-End Fortification Partner" 
                titleSize="md"
              />
              
              <p className="text-gray-600 mt-2">We specialize in:</p>
              
              <ul className="space-y-4 mt-4">
                {[
                  "Custom premix development for specific food applications",
                  "In-house stability testing and quality control",
                  "Technical documentation for regulatory compliance",
                  "Process optimisation support",
                  "Flexible batch sizes to match your production needs"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <p className="text-gray-600 mt-4">
                Join leading food manufacturers who trust us for their fortification requirements. Schedule a consultation to discuss your specific needs.
              </p>
              
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="bg-vitablue hover:bg-blue-600 text-white relative group overflow-hidden">
                  <span className="relative z-10">REQUEST FOR CALL BACK</span>
                  <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/lovable-uploads/7fc3bae2-9485-4fc2-b7e0-91e18ba73ae6.png" 
                alt="Yellow circular background" 
                className="w-full"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
              <motion.img 
                src="/lovable-uploads/1ffcb39f-a4a2-4462-a4aa-7fda40c425b6.png" 
                alt="Fortification ingredients" 
                className="absolute inset-0 w-3/4 h-3/4 m-auto object-cover rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-10 right-10 bg-vitablue rounded-full p-3 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <CalendarIcon className="text-white h-6 w-6" />
              </motion.div>
              <motion.div 
                className="absolute top-20 right-10 bg-green-500 rounded-full p-3 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <FileTextIcon className="text-white h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection2;
