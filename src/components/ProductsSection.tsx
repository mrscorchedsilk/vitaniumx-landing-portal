
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Star, Award, Shield, Globe, Info, Check } from 'lucide-react';

const ProductsSection = () => {
  return (
    <section className="section-padding bg-transparent">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of micronutrient premixes designed for various applications in food fortification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            title="Staple Food Premixes"
            description="Fortification solutions for wheat flour, rice (including Fortified Rice Kernels), milk, and oil."
            icon={<Star className="text-vitablue h-8 w-8" />}
            delay={200}
          />
          <ProductCard 
            title="Processed Food Fortification"
            description="Custom blends for snacks, bakery, confectionery, dairy, and beverages."
            icon={<Award className="text-vitablue h-8 w-8" />}
            delay={400}
          />
          <ProductCard 
            title="Therapeutic Foods"
            description="Specialized, nutrient-dense formulations for acute malnutrition (WFP standards)."
            icon={<Shield className="text-vitablue h-8 w-8" />}
            delay={600}
          />
          <ProductCard 
            title="Customized Formulations"
            description="Tailored blends for diverse industry applications based on your specific requirements."
            icon={<Globe className="text-vitablue h-8 w-8" />}
            delay={800}
          />
          <ProductCard 
            title="Animal Nutrition"
            description="Vitamin and mineral premixes for livestock, poultry, and aquaculture feed."
            icon={<Info className="text-vitablue h-8 w-8" />}
            delay={1000}
          />
          <ProductCard 
            title="FMCG Fortification"
            description="Solutions for breads, biscuits, breakfast cereals, fruit juices, and more."
            icon={<Check className="text-vitablue h-8 w-8" />}
            delay={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
