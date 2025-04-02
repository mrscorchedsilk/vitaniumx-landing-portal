
import React from 'react';
import AnimatedElement from '@/components/ui/AnimatedElement';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface FloatingCertificationLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  const isMobile = useIsMobile();
  
  // Define size classes based on the size prop with bigger sizes for desktop
  const sizeClasses = {
    xs: isMobile ? 'h-8 w-8' : 'h-12 w-12',
    sm: isMobile ? 'h-10 w-10' : 'h-16 w-16',
    md: isMobile ? 'h-14 w-14' : 'h-20 w-20',
    lg: isMobile ? 'h-16 w-16' : 'h-24 w-24',
    xl: isMobile ? 'h-20 w-20' : 'h-28 w-28'
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
