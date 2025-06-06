
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CertificationIconProps {
  imageSrc: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const CertificationIcon = ({ 
  imageSrc, 
  alt, 
  className, 
  delay = 0,
  size = 'md'
}: CertificationIconProps) => {
  // Define size classes based on the size prop - make sm larger for mobile
  const sizeClasses = {
    xs: "h-12 w-12",
    sm: "h-14 w-14",
    md: "h-16 w-16",
    lg: "h-20 w-20"
  };

  return (
    <motion.div 
      className={cn(
        "inline-flex items-center justify-center rounded-full p-1",
        sizeClasses[size],
        className
      )}
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay / 1000
        }
      }}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default CertificationIcon;
