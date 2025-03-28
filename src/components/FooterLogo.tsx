
import React from 'react';
import { motion } from 'framer-motion';

const FooterLogo = () => {
  return (
    <motion.div 
      className="flex items-center justify-start"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/lovable-uploads/6eccd15e-9eaf-400a-8fa0-562357ebf42e.png" 
        alt="VitaniumX Logo"
        className="h-12 md:h-16" 
      />
    </motion.div>
  );
};

export default FooterLogo;
