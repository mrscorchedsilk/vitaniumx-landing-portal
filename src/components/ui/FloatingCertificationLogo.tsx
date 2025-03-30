
import React from 'react';
import AnimatedElement from '@/components/ui/AnimatedElement';
import { motion } from 'framer-motion';

interface FloatingCertificationLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const FloatingCertificationLogo: React.FC<FloatingCertificationLogoProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-24 w-24',
    xl: 'h-28 w-28'
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
        rotate: [-1, 1, -1]
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity, 
        repeatType: "reverse",
        delay: delay,
        ease: "easeInOut"
      }}
      className={`rounded-full flex items-center justify-center ${className} glow-white`}
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
