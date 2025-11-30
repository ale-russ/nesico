import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { newsItems } from "../../data/newsItems";

const NewsAndStories = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
          News & Stories
        </h2>

        <div className="flex gap-3 md:gap-6 snap-x snap-mandatory overflow-auto">
          {newsItems.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="flex items-center justify-between px-4 pb-6 w-full cursor-pointer"
              >
                <div key={index} className="w-80 shrink-0 snap-center">
                  <div
                    className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white border border-primary/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-2xl flex flex-col items-center m-6 space-y-4"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div
                      className={`aspect-4/3 w-full overflow-hidden rounded-t-2xl 
        `}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-4 px-4">
                      <p className="text-sm text-gray-500">
                        {item.publishedDate}
                      </p>
                      <h3 className="font-bold line-clamp-2">{item.title}</h3>
                      <p className="text-sm line-clamp-3">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between px-4 pb-6 w-full cursor-pointer">
                      <button
                        className={`font-bold text-sm ${
                          isHovering ? "text-primary" : "text-gray-700"
                        } `}
                      >
                        Read More
                      </button>
                      <FaArrowRightLong
                        className={`transition-all duration-300 ${
                          isHovering ? "text-primary" : "text-gray-700"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsAndStories;
