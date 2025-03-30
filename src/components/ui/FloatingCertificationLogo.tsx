
import React from 'react';
import AnimatedElement from '@/components/ui/AnimatedElement';

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
    <AnimatedElement 
      animation="float" 
      delay={delay} 
      className={`rounded-full flex items-center justify-center ${className}`}
      viewportOnce={true}
      skipHiddenState={true} // This will prevent the blinking effect by skipping the hidden state
    >
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} object-contain`}
      />
    </AnimatedElement>
  );
};

export default FloatingCertificationLogo;
