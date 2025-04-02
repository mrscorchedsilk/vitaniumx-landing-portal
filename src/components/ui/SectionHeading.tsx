
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  titleSize?: 'sm' | 'md' | 'lg';
}

const SectionHeading = ({ 
  title, 
  subtitle,
  description, 
  align = 'center',
  titleSize = 'lg'
}: SectionHeadingProps) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const titleSizeClass = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  };

  return (
    <div className={`mb-8 ${alignClass[align]}`}>
      {subtitle && (
        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">
          {subtitle}
        </p>
      )}
      <h2 className={`font-bold ${titleSizeClass[titleSize]}`}>
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
