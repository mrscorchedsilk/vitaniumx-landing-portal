
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface BookingCalendarProps {
  className?: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ className }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Load the GHL script after the component is mounted
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    
    // Only append if it doesn't exist yet
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      document.body.appendChild(script);
    }
    
    // Add mobile-specific CSS to reduce text size for the iframe content
    if (isMobile) {
      const styleTag = document.createElement('style');
      styleTag.id = 'calendar-mobile-styles';
      styleTag.innerHTML = `
        iframe[id="Dg6f95EVDvXwEgZ930Y4_1743272468446"] {
          width: 100% !important;
        }
        /* This targets the content inside the iframe when it loads */
        @media (max-width: 768px) {
          :root {
            --calendar-font-size: 0.85rem !important;
          }
        }
      `;
      
      if (!document.getElementById('calendar-mobile-styles')) {
        document.head.appendChild(styleTag);
      }
    }
    
    return () => {
      // Clean up - remove the style tag on unmount if we created one
      const styleTag = document.getElementById('calendar-mobile-styles');
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, [isMobile]);

  return (
    <div className={`glass-card p-2 md:p-4 w-full glow-vitablue hover-pop-sm ${className}`}>
      <iframe 
        ref={iframeRef}
        src="https://api.leadconnectorhq.com/widget/booking/Dg6f95EVDvXwEgZ930Y4"
        style={{ 
          width: '100%', 
          height: isMobile ? '520px' : '550px', 
          border: 'none',
          transform: 'none',
          overflow: 'hidden'
        }}
        id="Dg6f95EVDvXwEgZ930Y4_1743272468446"
        title="Schedule a call"
        allow="fullscreen"
        className={isMobile ? 'calendar-mobile' : ''}
      />
    </div>
  );
};

export default BookingCalendar;
