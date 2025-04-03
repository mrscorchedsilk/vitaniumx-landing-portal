
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Wheat, Heart, Shield, Globe, Leaf, ShoppingCart } from 'lucide-react';
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
            title="Staple Food Fortification"
            description="We manufacture premium wheat flour premixes, fortifying everyday staples with vital nutrients to improve health and nutrition."
            icon={<Wheat className="text-white h-6 w-6" />}
            imageSrc="/micronutrient-lp/public/lovable-uploads/staple-food-premix-hero.png"
            delay={200}
            className="glow-vitablue hover-pop gradient-bg"
          />
          <ProductCard 
            title="Public Health Nutrition Scheme Fortification"
            description="As a leading manufacturer, we provide high-quality FRK premixes to enhance rice with essential vitamins and minerals, helping to combat malnutrition."
            icon={<Heart className="text-white h-6 w-6" />}
            imageSrc="/micronutrient-lp/public/lovable-uploads/government-program-solutions-hero.jpg"
            delay={400}
            className="glow-vitablue hover-pop gradient-bg"
          />
          <ProductCard 
            title="Nutraceutical Applications"
            description="As manufacturers, we offer fortified rice kernels that enrich rice with critical nutrients, promoting healthier diets and communities."
            icon={<Shield className="text-white h-6 w-6" />}
            imageSrc="/micronutrient-lp/public/lovable-uploads/therapeutic-nutrition-hero.jpg"
            delay={600}
            className="glow-vitablue hover-pop gradient-bg"
          />
          <ProductCard 
            title="Customized Formulations"
            description="Tailored blends for diverse industry applications based on your specific requirements."
            icon={<Globe className="text-white h-6 w-6" />}
            imageSrc="/micronutrient-lp/public/lovable-uploads/micronutrient-premix-hero-section.jpg"
            delay={800}
            className="glow-vitablue hover-pop gradient-bg"
          />
          <ProductCard 
            title="Animal Nutrition"
            description="We produce fortified edible oils and milk, enhancing their nutritional content to improve public health and meet dietary needs."
            icon={<Leaf className="text-white h-6 w-6" />}
            imageSrc="/micronutrient-lp/public/lovable-uploads/animal-nutrition-hero.webp"
            delay={1000}
            className="glow-vitablue hover-pop gradient-bg"
          />
          <ProductCard 
            title="FMCG Products"
            description="We specialize in manufacturing food fortified premixes that boost the nutritional value of various food products, ensuring better health for consumers."
            icon={<ShoppingCart className="text-white h-6 w-6" />}
            imageSrc="/micronutrient-lp/public/lovable-uploads/fmcg-premix.jpg"
            delay={1200}
            className="glow-vitablue hover-pop gradient-bg"
          />
        </div>
        
        {/* Floating particles */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div> */}
      </div>
    </section>
  );
};

export default ProductsSection;
