
import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/lovable-uploads/23a708c5-b3da-4d93-b63c-4ee5465679da.png" 
        alt="VitaniumX Logo"
        className="h-16 md:h-24"
      />
    </motion.div>
  );
};

export default Logo;
