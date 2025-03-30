
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

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
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="bg-green-500 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] w-full md:w-auto"
          size="sm"
        >
          <Calendar className="mr-2 h-4 w-4" />
          <span>Schedule a call</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden">
        <div className="w-full h-[500px]">
          <iframe 
            ref={iframeRef}
            src="https://api.leadconnectorhq.com/widget/booking/Dg6f95EVDvXwEgZ930Y4"
            style={{ width: '100%', height: '100%', border: 'none' }}
            scrolling="no"
            id="Dg6f95EVDvXwEgZ930Y4_1743272468446"
            title="Schedule a call"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingCalendar;
