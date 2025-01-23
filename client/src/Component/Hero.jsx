import React from 'react';
import { asset } from '../assets/asset';

const Hero = () => {
  return (
    <div
      style={{
        position: 'relative', // Ensures content is positioned correctly
        height: '100vh', // Fills the viewport height
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      <div
  style={{
    backgroundImage: 'radial-gradient(closest-side, #e15084, #000)',
    filter: 'blur(600px)',
    position: 'absolute',
    height: '600px', // Fixed height
    width: '600px', // Fixed width
    top: "-120px", // 100px from the top
    right: '-220px', // Center horizontally
    transform: 'translateX(0)', // Adjust for centering
    zIndex: 1, // Ensure it's behind the content
  }}
></div>


      {/* Foreground Content */}
      <div className="px-[5%] py-10 mx-auto max-w-screen-xl relative z-10">
        {/* Content Section */}
        <div className="text-center">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Bring Battlefields to Life with Custom <br />
            <span className="text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#2472fc] bg-clip-text">
              3D Printed Terrain and Models
            </span>
          </h1>
          <p className="text-[#a8aebf] text-base sm:text-lg md:text-xl leading-relaxed my-4 mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
            Discover a vast collection of detailed miniatures, modular terrains, and accessories to elevate your
            tabletop games. Fully customizable for your unique adventures.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center items-center mt-6">
          <img
            src={asset.herobannar}
            className="object-cover object-center rounded-lg shadow-lg w-full max-h-[500px]"
            alt="Hero Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

