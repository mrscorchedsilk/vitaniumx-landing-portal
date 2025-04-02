
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  number: string;
  text: string;
  delay?: number;
  className?: string;
  glowColor?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'pink';
  animationDuration?: number;
  noFormat?: boolean;
}

const StatCard = ({ 
  number, 
  text, 
  delay = 0, 
  className,
  glowColor = 'blue',
  animationDuration = 2000,
  noFormat = false
}: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Map of glow colors
  const glowColors = {
    blue: 'shadow-[0_10px_25px_-5px_rgba(92,138,238,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(92,138,238,0.4)]',
    green: 'shadow-[0_10px_25px_-5px_rgba(34,197,94,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(34,197,94,0.4)]',
    amber: 'shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.4)]',
    red: 'shadow-[0_10px_25px_-5px_rgba(239,68,68,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(239,68,68,0.4)]',
    purple: 'shadow-[0_10px_25px_-5px_rgba(139,92,246,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.4)]',
    pink: 'shadow-[0_10px_25px_-5px_rgba(236,72,153,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.4)]'
  };

  // Text accent colors to match glow
  const textColors = {
    blue: 'text-vitablue',
    green: 'text-emerald-600',
    amber: 'text-amber-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600'
  };

  // Format the number with commas for thousands
  const formatNumber = (num: number): string => {
    if (noFormat) {
      return num.toString(); // Return as plain string without commas
    }
    return num.toLocaleString('en-US');
  };

  useEffect(() => {
    // Only start animation when in view
    if (!isInView) return;

    // Parse the target number (removing commas, if any)
    const targetNumber = parseInt(number.replace(/,/g, ''), 10);
    
    // If the number isn't valid, just display it as is
    if (isNaN(targetNumber)) {
      setDisplayValue(number);
      return;
    }

    // Calculate increment per frame
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.min(animationDuration / frameDuration, 180); // cap at 180 frames
    const increment = targetNumber / totalFrames;

    let currentCount = 0;
    let frame = 0;

    // Animation function
    const counter = setInterval(() => {
      frame++;
      currentCount += increment;
      
      // Update display value
      setDisplayValue(formatNumber(Math.floor(currentCount)));
      
      // Stop animation when we reach target or max frames
      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayValue(formatNumber(targetNumber)); // Ensure we end with exact target
      }
    }, frameDuration);

    // Cleanup
    return () => clearInterval(counter);
  }, [number, isInView, animationDuration, noFormat]);

  return (
    <motion.div 
      className={cn(
        "stat-card", 
        glowColors[glowColor],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
      ref={ref}
    >
      <div className={cn("stat-number", textColors[glowColor])}>{displayValue}</div>
      <div className="stat-text">{text}</div>
    </motion.div>
  );
};

export default StatCard;
