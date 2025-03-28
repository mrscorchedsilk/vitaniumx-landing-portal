
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PartnerLogo {
  src: string;
  alt: string;
}

interface PartnersCarouselProps {
  logos: PartnerLogo[];
}

const PartnersCarousel = ({ logos }: PartnersCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="py-4">
        {logos.map((logo, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-4">
            <div className="glass-card h-40 flex items-center justify-center p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 max-w-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious className="relative static left-auto transform-none mx-2" />
        <CarouselNext className="relative static right-auto transform-none mx-2" />
      </div>
    </Carousel>
  );
};

export default PartnersCarousel;
