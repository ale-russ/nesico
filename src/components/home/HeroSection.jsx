import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

import AfricanFamily from "../../assets/african_family_1.jpg";
import Life1 from "../../assets/life_1.jpg";
import Health from "../../assets/health.jpg";
import CarInsurance from "../../assets/car_insurance.jpg";
import insuranceCar from "../../assets/insurance-car.jpg";
import insuranceHealth from "../../assets/insurance-health.jpg";
import insuranceLife from "../../assets/insurance-life.jpg";
import insuranceProperty from "../../assets/insurance-property.jpg";

const slides = [
  { src: AfricanFamily, alt: "African Family" },
  { src: Life1, alt: "Life Insurance" },
  { src: Health, alt: "Health Insurance" },
  { src: CarInsurance, alt: "Car Insurance" },
  { src: insuranceProperty, alt: "African Family" },
  { src: insuranceLife, alt: "Life Insurance" },
  { src: insuranceHealth, alt: "Health Insurance" },
  { src: insuranceCar, alt: "Car Insurance" },
];

export const HeroSection = () => {
  // const [active, setActive] = useState(0);
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

  const scrollTo = (index) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="mx-auto text-white w-full md:w-5/6 xl:w-2/4">
      <div className="my-4">
        <h1 className="mx-auto text-center font-medium text-2xl animate-none">
          Your Risk Managers in <br />
          the Republic of South Sudan
        </h1>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row mb-8 px-4">
        <div className="w-full md:w-1/2 text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur. Quam id ut risus montes felis
          at nullam. Lorem ipsum dolor sit amet consectetur. Quam id ut risus
          montes felis at nullam. Lorem ipsum dolor sit amet consectetur. Quam
          id ut risus montes felis at nullam. Lorem ipsum dolor sit amet
          consectetur. Quam id ut risus montes felis at nullam.
        </div>
        <div className=" flex justify-center md:justify-end mt-8 md:mt-0">
          <h1 className="font-bold text-4xl ">10 Years</h1>
        </div>
      </div>

      <div className="relative -mb-24 overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <div ref={emblaRef} className="overflow-hidden rounded-xl">
            <div className="flex">
              {slides.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_35%] sm:flex-[0_0_40%] md:flex-[0_0_30%] flex justify-center py-6"
                >
                  <div className="relative w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56">
                    {/* <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-48 xl:h-48"> */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="
                  relative z-10 w-full h-full object-cover rounded-full 
                  border-2 border-primary shadow-xl
                  transition-transform duration-500 hover:scale-105
                "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  selectedIndex === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/40 w-2 hover:bg-muted-foreground/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
