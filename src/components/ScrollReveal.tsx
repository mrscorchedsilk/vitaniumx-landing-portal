
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  animation?: "fade" | "slide-up" | "slide-left" | "scale" | "none";
  className?: string; // Add className prop
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  animation = "fade",
  className = "" // Add default empty string
}: ScrollRevealProps) => {
  // Define animation variants based on the animation type
  const getAnimationProps = () => {
    switch (animation) {
      case "fade":
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: delay / 1000 }
        };
      case "slide-up":
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: delay / 1000 }
        };
      case "slide-left":
        return {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: delay / 1000 }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: delay / 1000 }
        };
      case "none":
        return {
          initial: {},
          animate: {},
          transition: {}
        };
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: delay / 1000 }
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      className={className} // Pass the className prop to motion.div
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={animationProps.transition}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
