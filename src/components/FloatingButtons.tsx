
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingButtons = () => {
  const isMobile = useIsMobile();
  
  // Phone number
  const phoneNumber = "919429694121";
  
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3 ml-4">
      {/* Call Button */}
      <a 
        href={isMobile ? `tel:+${phoneNumber}` : `https://api.whatsapp.com/send?phone=${phoneNumber}`}
        target={isMobile ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-lg transition-all hover:scale-110"
        aria-label={isMobile ? "Call" : "WhatsApp Call"}
      >
        <Phone size={24} />
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
