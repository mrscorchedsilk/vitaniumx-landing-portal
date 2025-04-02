
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface FloatingCertificationLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: string; // Added glowColor prop
}

const FloatingCertificationLogo: React.FC<FloatingCertificationLogoProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  size = 'md',
  glowColor, // Add to component props
}) => {
  const isMobile = useIsMobile();
  
  // Define size classes based on the size prop with bigger sizes for mobile
  const sizeClasses = {
    xs: isMobile ? 'h-14 w-14' : 'h-12 w-12',
    sm: isMobile ? 'h-16 w-16' : 'h-16 w-16',
    md: isMobile ? 'h-18 w-18' : 'h-20 w-20',
    lg: isMobile ? 'h-20 w-20' : 'h-24 w-24',
    xl: isMobile ? 'h-24 w-24' : 'h-28 w-28'
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
      className={`flex items-center justify-center ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} object-contain drop-shadow-md`}
      />
    </motion.div>
  );
};

export default FloatingCertificationLogo;
