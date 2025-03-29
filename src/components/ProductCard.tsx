
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  bgColor?: string;
  className?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  icon, 
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
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Button variant="outline" className="mt-auto w-full">
        Learn More
      </Button>
    </div>
  );
};

export default ProductCard;
