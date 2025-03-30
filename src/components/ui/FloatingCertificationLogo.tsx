
import React from 'react';
import AnimatedElement from '@/components/ui/AnimatedElement';
import { motion } from 'framer-motion';

interface FloatingCertificationLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: string;
}

const FloatingCertificationLogo: React.FC<FloatingCertificationLogoProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  size = 'md',
  glowColor = 'rgba(30, 174, 219, 0.5)'
}) => {
  const sizeClasses = {
    sm: 'h-10 w-10 md:h-12 md:w-12',
    md: 'h-14 w-14 md:h-20 md:w-20',
    lg: 'h-16 w-16 md:h-24 md:w-24',
    xl: 'h-20 w-20 md:h-28 md:w-28'
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -12, 0],
        rotate: [-1, 1, -1]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity, 
        repeatType: "reverse",
        delay: delay,
        ease: "easeInOut"
      }}
      className={`rounded-full flex items-center justify-center ${className}`}
      style={{
        boxShadow: `0 0 15px 5px ${glowColor}`,
        transition: 'box-shadow 0.3s ease'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} object-contain drop-shadow-lg`}
      />
    </motion.div>
  );
};

export default FloatingCertificationLogo;
