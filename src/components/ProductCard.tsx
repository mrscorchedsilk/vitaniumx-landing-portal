
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
        "glass-card h-full flex flex-col animate-fade-in", 
        bgColor,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && <div className="mb-4">{icon}</div>}
      
      {imageSrc && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/90 mb-4 flex-grow">{description}</p>
    </div>
  );
};

export default ProductCard;
