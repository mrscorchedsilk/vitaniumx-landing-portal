
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Wheat, Heart, Shield, Globe, Info, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-vitablue/50 rounded-full filter blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-green-400/50 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-container relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
             <span className="text-gradient">Our Products</span>
          </h2>
          <motion.p 
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive range of micronutrient premixes designed for various applications in food fortification.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            title="Micronutrient Premixes"
            description="Fortification solutions for wheat flour, rice (including Fortified Rice Kernels), milk, and oil."
            icon={<Wheat className="text-vitablue h-8 w-8" />}
            delay={200}
            bgColor="bg-[#F2FCE2]"
            className="glow-green hover-pop"
          />
          <ProductCard 
            title="Government Nutritional Schemes"
            description="Custom blends for government schemes targeting health and nutrition needs across populations."
            icon={<Heart className="text-vitablue h-8 w-8" />}
            delay={400}
            bgColor="bg-[#FFDEE2]"
            className="glow-vitablue hover-pop"
          />
          <ProductCard 
            title="Therapeutic Foods"
            description="Specialized, nutrient-dense formulations for acute malnutrition (WFP standards)."
            icon={<Shield className="text-vitablue h-8 w-8" />}
            delay={600}
            bgColor="bg-[#D3E4FD]"
            className="glow-multi hover-pop"
          />
          <ProductCard 
            title="Customized Formulations"
            description="Tailored blends for diverse industry applications based on your specific requirements."
            icon={<Globe className="text-vitablue h-8 w-8" />}
            delay={800}
            bgColor="bg-[#FDE1D3]"
            className="glow-vitablue hover-pop"
          />
          <ProductCard 
            title="Animal Nutrition"
            description="Vitamin and mineral premixes for livestock, poultry, and aquaculture feed."
            icon={<Info className="text-vitablue h-8 w-8" />}
            delay={1000}
            bgColor="bg-[#E5DEFF]"
            className="glow-multi hover-pop"
          />
          <ProductCard 
            title="FMCG Fortification"
            description="Solutions for breads, biscuits, breakfast cereals, fruit juices, and more."
            icon={<Check className="text-vitablue h-8 w-8" />}
            delay={1200}
            bgColor="bg-[#FEF7CD]"
            className="glow-green hover-pop"
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-vitablue/15"
              style={{
                width: Math.random() * 10 + 3,
                height: Math.random() * 10 + 3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 4 + 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
