
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CertificationIconProps {
  imageSrc: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

const CertificationIcon = ({ 
  imageSrc, 
  alt, 
  className, 
  delay = 0,
  size = 'md'
}: CertificationIconProps) => {
  // Define size classes based on the size prop
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20"
  };

  return (
    <motion.div 
      className={cn(
        "inline-flex items-center justify-center glass rounded-full p-1 shadow-lg transition-all hover:scale-110", 
        sizeClasses[size],
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: delay / 1000,
      }}
      // Add floating animation
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 4,
        delay: delay / 1000,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-contain rounded-full"
      />
    </motion.div>
  );
};

export default CertificationIcon;
