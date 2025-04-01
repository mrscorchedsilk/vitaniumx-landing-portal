
import React, { useEffect, useRef } from 'react';

interface BookingCalendarProps {
  className?: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ className }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Load the GHL script after the component is mounted
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    
    // Only append if it doesn't exist yet
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      document.body.appendChild(script);
    }
    
    return () => {
      // Clean up - optional since scripts usually stay loaded
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <iframe 
        ref={iframeRef}
        src="https://api.leadconnectorhq.com/widget/booking/Dg6f95EVDvXwEgZ930Y4"
        style={{ width: '100%', height: '560px', border: 'none' }}
        id="Dg6f95EVDvXwEgZ930Y4_1743272468446"
        title="Schedule a call"
        allow="fullscreen"
      />
    </div>
  );
};

export default BookingCalendar;
