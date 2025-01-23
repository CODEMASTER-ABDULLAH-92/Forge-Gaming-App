import React, { useRef } from 'react';
import { asset, popular } from '../assets/asset';

const Popular = () => {
  const currentRef = useRef(); // Reference for the scrollable container

  // Scroll left functionality
  const scrollLeft = () => {
    if (currentRef.current) {
      currentRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right functionality
  const scrollRight = () => {
    if (currentRef.current) {
      currentRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-[5%] py-10 ">
      {/* Title */}
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-start">
  Popular
  <span className="text-transparent bg-gradient-to-r pl-1 sm:pl-2 from-[#ff1b6b] to-[#2472fc] bg-clip-text">
    Categories
  </span>
</h1>


      {/* Scrollable Content */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <img
          src={asset.right}
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-red-600"
          alt="Scroll Left"
        />

        {/* Scrollable Area */}
        <div
          ref={currentRef}
          className="flex overflow-x-scroll gap-4 scrollbar-hide py-10"
          style={{
            scrollBehavior: 'smooth',
          }}
        >
          {popular.map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-xl p-5 min-w-[200px] flex-shrink-0"
            >
              <img src={item.image} alt={item.name} />
              <h1 className="text-center text-xl text-white pt-3">{item.name}</h1>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <img
          src={asset.left}
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-red-600"
          alt="Scroll Right"
        />
      </div>
    </div>
  );
};

export default Popular;
