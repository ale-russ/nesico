import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Shield, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavLinks } from "../../components/NavLinks";

import AfricanFamily from "../../assets/african_family_1.jpg";
import Life1 from "../../assets/life_1.jpg";
import Health from "../../assets/health.jpg";
import CarInsurance from "../../assets/car_insurance.jpg";

const heroSlides = [
  {
    image: AfricanFamily,
    title: "Protect What Matters Most",
    subtitle: "Comprehensive Life Insurance",
    description:
      "Secure your family's future with our award-winning life insurance plans. Trusted by over 50,000 families nationwide.",
  },
  {
    image: Life1,
    title: "Drive With Confidence",
    subtitle: "Auto Insurance Solutions",
    description:
      "Get the coverage you deserve at prices you'll love. 24/7 roadside assistance included with every policy.",
  },
  {
    image: Health,
    title: "Health Is Wealth",
    subtitle: "Premium Health Coverage",
    description:
      "Access world-class healthcare with our comprehensive medical plans. Your wellness journey starts here.",
  },
  {
    image: CarInsurance,
    title: "Secure Your Assets",
    subtitle: "Property & Home Insurance",
    description:
      "From natural disasters to unexpected events, protect your biggest investment with complete peace of mind.",
  },
];

export const HeroSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section className="relative h-[40vh] min-h-[500px] max-h-[700px] w-full overflow-hidden">
      {/* Full-width Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-2000",
                    selectedIndex === index ? "scale-105" : "scale-100"
                  )}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-r from-black/15 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-background/30" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container-width px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-primary/20 mb-6 transition-all duration-700",
                        selectedIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h1
                      className={cn(
                        "text-4xl sm:text-5xl font-bold text-muted mb-6 leading-[1.1] transition-all duration-700",
                        selectedIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      )}
                      style={{ transitionDelay: "400ms" }}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={cn(
                        "text-lg sm:text-xl text-muted mb-8 leading-relaxed transition-all duration-700",
                        selectedIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      )}
                      style={{ transitionDelay: "600ms" }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div
                      className={cn(
                        "flex flex-wrap gap-4 transition-all duration-700",
                        selectedIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      )}
                      style={{ transitionDelay: "800ms" }}
                    >
                      <NavLinks
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl group"
                      >
                        Get Free Quote
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </NavLinks>
                      <NavLinks
                        to="/services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-background/80 backdrop-blur-sm text-foreground rounded-full font-semibold text-lg border border-border/50 transition-all duration-300 hover:bg-background hover:scale-105"
                      >
                        Explore Plans
                      </NavLinks>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollNext}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-foreground transition-all duration-300 hover:bg-background/40 hover:scale-110 group z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={scrollPrev}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-foreground transition-all duration-300 hover:bg-background/40 hover:scale-110 group z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "relative h-2 rounded-full transition-all duration-500 overflow-hidden",
              selectedIndex === index
                ? "w-12 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          >
            {selectedIndex === index && (
              <span className="absolute inset-0 bg-primary-foreground/30 animate-[shimmer_2s_linear_infinite]" />
            )}
          </button>
        ))}
      </div>

      {/* Shadow */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-background via-background/80 to-transparent pt-16 pb-6" />
    </section>
  );
};

// export default HeroSection;
