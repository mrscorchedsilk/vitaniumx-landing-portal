
import React from 'react';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface PartnerLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface PartnersCarouselProps {
  logos: PartnerLogo[];
  className?: string;
}

const PartnersCarousel = ({ logos, className }: PartnersCarouselProps) => {
  // Duplicate logos to create a seamless loop effect
  const extendedLogos = [...logos, ...logos];
  
  const autoplayOptions = React.useMemo(() => 
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }), 
    []
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: true,
    },
    [autoplayOptions]
  );

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {extendedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.666%] min-w-0 pl-2"
              >
                <div
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 flex items-center justify-center h-32
                           shadow-[0_10px_20px_-5px_rgba(139,92,246,0.15)] transition-all duration-300
                           hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.25)] hover:scale-105"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-24 max-w-full object-contain" 
                    width={logo.width || 'auto'} 
                    height={logo.height || 'auto'} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
