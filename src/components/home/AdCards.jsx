import React from "react";
import Life1 from "../../assets/life_1.jpg";

export const AdCards = ({ label, url }) => {
  return (
    <section className="group mx-auto my-3 md:my-6 w-full max-w-sm overflow-hidden rounded-2xl bg-white border border-primary/20 shadow-primary/8 transition-all duration-300 hover:border-primary drop-shadow-xl hover:scale-105 hover:shadow-2xl hover:drop-shadow-2xl cursor-pointer">
      <div className="p-6 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-black mb-4">
          {label}
        </h2>

        {/* Responsive Image with fixed aspect ratio */}
        <div className="aspect-w-16 h-54 md:aspect-h-10 w-full overflow-hidden rounded-xl shadow-md hover:drop-shadow-xl hover:shadow-xl">
          <img
            src={url || Life1}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};
