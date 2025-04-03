
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('hero');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      <Button 
        onClick={scrollToContactForm} 
        className="mt-auto bg-white/20 hover:bg-white/30 text-white self-start flex items-center gap-2 glow-vitablue hover-pop-sm"
      >
        Know More <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProductCard;
