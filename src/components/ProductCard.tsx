
import React from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  delay?: number;
  bgColor?: string;
  className?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  icon, 
  imageSrc,
  delay = 0, 
  bgColor,
  className 
}: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card h-full flex flex-col animate-fade-in p-3 md:p-6", 
        bgColor,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {imageSrc && (
        <div className="w-full h-40 md:h-52 mb-3 md:mb-4 overflow-hidden rounded-md relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          {icon && (
            <div className="absolute top-3 left-3 bg-vitablue/80 rounded-full p-2 shadow-lg">
              {icon}
            </div>
          )}
        </div>
      )}
      
      <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white">{title}</h3>
      <p className="text-sm md:text-base text-white/90 mb-2 md:mb-4 flex-grow">{description}</p>
    </div>
  );
};

export default ProductCard;
