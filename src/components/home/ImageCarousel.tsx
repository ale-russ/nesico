import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

import insuranceCar from "../../assets/insurance-car.jpg";
import insuranceHealth from "@/assets/insurance-health.jpg";
import insuranceLife from "@/assets/insurance-life.jpg";
import insuranceProperty from "@/assets/insurance-property.jpg";

interface ImageCarouselProps {
  images?: { src: string; alt: string }[];
  className?: string;
}

const defaultImages = [
  { src: insuranceCar, alt: "Car Insurance Coverage" },
  { src: insuranceHealth, alt: "Health Insurance Plans" },
  { src: insuranceLife, alt: "Life Insurance Protection" },
  { src: insuranceProperty, alt: "Property Insurance Security" },
];

const ImageCarousel = ({
  images = defaultImages,
  className,
}: ImageCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <section className={cn("py-16 bg-muted/30", className)}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative aspect-21/9 overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg md:text-xl font-medium text-white drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bullet Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
