
// import React from 'react';
// import { asset } from '../assets/asset';

// const Snack = () => {
//   return (
//     <div
//       className="px-[5%] relative py-10 flex"
//       style={{
//         overflow: 'hidden',
//       }}
//     >
//       {/* Blur Effect */}
//       <div
//         style={{
//           backgroundImage: 'radial-gradient(closest-side, #e15084, #000)',
//           filter: 'blur(600px)', // Adjust the blur intensity
//           position: 'absolute',
//           height: '600px',
//           width: '600px',
//           top: '-150px',
//           left: '-150px',
//           zIndex: '1', // Ensures it is behind the content
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10">
//         <img src={asset.logosnake} alt="Logo" className="mb-4" />
//         <h1 className="text-4xl font-bold py-4 text-[#ffb800]">
//           WARHAMMER <br />
//           Age of SIGMAR
//         </h1>
//         <p className="text-[#A8AEBF] max-w-[40%] pb-4">
//           Use our specialist motion graphics agency and access highly skilled motion designers giving you access to modern.
//         </p>
//         <button className="text-[#000] text-xs px-12 py-3 rounded-3xl bg-[#ffb800]">
//           Buy Now
//         </button>
//       </div>
//       <img src={asset.snakeBanner} className='z-10' alt="" />
//       <div
//         style={{
//           backgroundImage: 'radial-gradient(closest-side, #168bf0, #000)',
//           filter: 'blur(600px)', // Adjust the blur intensity
//           position: 'absolute',
//           height: '600px',
//           width: '600px',
//           top: '-150px',
//           right: '-150px',
//           zIndex: '1', // Ensures it is behind the content
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Snack;




import React from 'react';
import { asset } from '../assets/asset';

const Snack = () => {
  return (
    <div
      className="relative px-[5%] py-10 flex flex-col lg:flex-row items-center justify-between"
      style={{
        overflow: 'hidden',
      }}
    >
      {/* Left Blur Effect */}
      <div
        className="absolute"
        style={{
          backgroundImage: 'radial-gradient(closest-side, #e15084, #000)',
          filter: 'blur(400px)',
          position: 'absolute',
          height: '600px',
          width: '600px',
          top: '-150px',
          left: '-200px',
          zIndex: '1',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center lg:text-left lg:max-w-[50%]">
        <img
          src={asset.logosnake}
          alt="Logo"
          className="mb-6 w-[120px] sm:w-[150px] lg:w-[200px] mx-auto lg:mx-0"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-4 text-[#ffb800]">
          WARHAMMER <br />
          Age of SIGMAR
        </h1>
        <p className="text-[#A8AEBF] max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0 pb-4 text-sm sm:text-base lg:text-lg">
          Use our specialist motion graphics agency and access highly skilled motion designers giving you access to modern.
        </p>
        <button className="text-[#000] text-xs sm:text-sm px-8 sm:px-10 py-3 rounded-3xl bg-[#ffb800] hover:bg-[#ffa700] transition-all">
          Buy Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative z-10 flex items-center justify-center mt-10 lg:mt-0">
        <img
          src={asset.snakeBanner}
          alt="Snake Banner"
          className=" lg:w-full sm:w-[60%] "
        />
      </div>

      {/* Right Blur Effect */}
      <div
        className="absolute"
        style={{
          backgroundImage: 'radial-gradient(closest-side, #168bf0, #000)',
          filter: 'blur(400px)',
          position: 'absolute',
          height: '600px',
          width: '600px',
          top: '-150px',
          right: '-200px',
          zIndex: '1',
        }}
      ></div>
    </div>
  );
};

export default Snack;
