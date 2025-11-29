import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsAndStories = ({ data }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white border border-primary/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-2xl cursor-pointer flex flex-col items-center m-6 space-y-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`aspect-4/3 w-full overflow-hidden rounded-t-2xl 
        `}
      >
        <img
          src={data.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="space-y-4 px-4">
        <p className="text-sm text-gray-500">{data.publishedDate}</p>
        <h3 className="font-bold line-clamp-2">{data.title}</h3>
        <p className="text-sm line-clamp-3">{data.description}</p>
      </div>
      <Link
        to={`/news/${data.id}`}
        className="flex items-center justify-between px-4 pb-6 w-full cursor-pointer"
      >
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
      </Link>
    </div>
  );
};

export default NewsAndStories;
