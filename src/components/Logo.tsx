
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  minimal?: boolean;
}

const Logo = ({ minimal = false }: LogoProps) => {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/micronutrient-lp/public/lovable-uploads/23a708c5-b3da-4d93-b63c-4ee5465679da.png" 
        alt="VitaniumX Logo"
        className={minimal ? "h-8 md:h-10" : "h-10 md:h-16"} // Smaller size for navbar, especially on mobile
      />
      {!minimal && (
        <div className="ml-2 text-xs text-gray-500">
          A Company of Progressive Processors
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
