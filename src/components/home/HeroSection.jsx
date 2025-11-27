import React, { useEffect, useState } from "react";
import AfricanFamily from "../../assets/african_family_1.jpg";
import Life1 from "../../assets/life_1.jpg";
import Health from "../../assets/health.jpg";
import CarInsurance from "../../assets/car_insurance.jpg";

const slides = [
  { src: AfricanFamily, alt: "African Family" },
  { src: Life1, alt: "Life Insurance" },
  { src: Health, alt: "Health Insurance" },
  { src: CarInsurance, alt: "Car Insurance" },
];

export const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto text-white  w-full md:w-5/6 xl:w-2/4">
      <div className="my-8">
        <h1 className="mx-auto text-center font-medium text-2xl animate-none">
          Empowering Brands And Businesses <br /> Through Life Insurance
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
      {/* Image Slider */}
      {/* Carousel */}
      <div className="relative -mb-24 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 25}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className=" mx-auto shrink-0 px-2 bg-transparent ">
              <div className="relative">
                {/* White circular background (behind image) */}
                <div className="absolute inset-0 bg-white rounded-full scale-90" />
                {/* Image */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="relative w-48 h-48 md:h-44 md:w-44 xl:h-52 xl:w-52 object-cover rounded-full shadow-xl border-8 border-white"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                i === active ? "bg-primary w-8" : "bg-red-800/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
