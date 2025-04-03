
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Success = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30);
  
  useEffect(() => {
    // Redirect after 30 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 30000);
    
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-vitablue/10 to-blue-400/10 p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-vitablue/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-300/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <motion.div 
        className="max-w-3xl w-full glass-card p-8 md:p-16 text-center shadow-xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-vitablue to-blue-600 bg-clip-text text-transparent 
                         [text-shadow:_0_2px_20px_rgba(30,174,219,0.4)] transform-gpu">
            Thank You!
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-vitablue to-blue-600 mx-auto my-6 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Thank you for contacting us. Our team will contact you at earliest.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 mb-8">
            You will be redirected to the home page in {countdown} seconds
          </p>
          
          <Link to="/">
            <Button 
              className="btn-primary px-8 py-6 text-lg hover:scale-105 transition-transform"
              variant="default"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Success;
