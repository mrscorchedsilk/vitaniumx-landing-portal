
import React from 'react';
import { BeakerIcon, CheckCircleIcon, TruckIcon, ClockIcon, UsersIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature = ({ icon, title, description, delay = 0 }: FeatureProps) => {
  return (
    <motion.div 
      className="flex items-start gap-4 mb-6" 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex-shrink-0 rounded-full bg-vitablue h-12 w-12 flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        animate={{ boxShadow: ['0px 0px 0px rgba(30, 174, 219, 0)', '0px 0px 15px rgba(30, 174, 219, 0.5)', '0px 0px 0px rgba(30, 174, 219, 0)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-abstract relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-vitablue rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-green-400 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-up">
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Your Reliable Partners in <span className="text-gradient">Micronutrient Fortification.</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Founded in 2018, VitaniumX by Progressive Processors Private Limited has been a trusted partner in manufacturing customized micronutrient fortification solutions designed to meet the evolving demands of the food and nutrition industry.
              </motion.p>

              <Feature 
                icon={<BeakerIcon className="h-6 w-6" />}
                title="Custom Formulations"
                description="Get premix formulations precisely matched to your product specifications and regulatory requirements."
                delay={100}
              />
              
              <Feature 
                icon={<CheckCircleIcon className="h-6 w-6" />}
                title="Quality Assurance & Consistency"
                description="Every batch tested for potency and homogeneity. Full compliance with FSSAI, ISO, and GMP standards."
                delay={200}
              />
              
              <Feature 
                icon={<TruckIcon className="h-6 w-6" />}
                title="Simplified Supply Chain"
                description="Single-source solution for all your fortification needs. Direct manufacturer relationship means faster delivery."
                delay={300}
              />
              
              <Feature 
                icon={<ClockIcon className="h-6 w-6" />}
                title="Time and Cost Efficiency"
                description="Quick turnaround times on custom orders. Competitive pricing through direct manufacturing capabilities."
                delay={400}
              />
              
              <Feature 
                icon={<UsersIcon className="h-6 w-6" />}
                title="Technical Expertise"
                description="Access our food scientists and fortification experts for formulation support and regulatory compliance."
                delay={500}
              />
            </div>
          </ScrollReveal>

          <div className="relative">
            <motion.div 
              className="glass-card animate-float"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-vitablue/10 via-transparent to-green-400/10 animate-pulse"></div>
              
              <motion.img 
                src="/micronutrient-lp/public/lovable-uploads/ca9cf586-b336-4748-8eba-133a808d968e.png" 
                alt="Micronutrient Fortification Ingredients" 
                className="rounded-lg w-full relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-vitablue/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-12 h-12 bg-green-400/20 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
