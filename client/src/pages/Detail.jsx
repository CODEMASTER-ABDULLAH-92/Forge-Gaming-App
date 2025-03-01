// // import React, { useEffect, useState, useCallback } from "react";
// // import { useParams } from "react-router-dom";
// // import { asset, battle } from "../assets/asset";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addToCart, removeFromCart } from "../redux/feature/Game.slice";

// // const Detail = () => {
// //   const { id } = useParams(); // Extracts the dynamic `id` from the URL
// //   const [data, setData] = useState(null); // Initialize as `null`
// //   const dispatch = useDispatch();
// //   const value = useSelector((state) => state.game.value);

// //   const handleAdd = useCallback((id) => {
// //     dispatch(addToCart(id));
// //   }, [dispatch]);

// // const handleRemove =useCallback((id)=>{
// // dispatch(removeFromCart(id));
// // })


// //   const fetchData = useCallback(() => {
// //     const foundItem = battle.find((item) => item._id === id); // Use `find` for better performance
// //     setData(foundItem || null); // Explicitly set null if not found
// //   }, [id]);

// //   useEffect(() => {
// //     fetchData(); // Fetch data whenever `id` changes
// //   }, [id, fetchData]);

// //   return (
// //     <div className="min-h-full relative">
// //       <div className="flex justify-center items-center relative">
// //         <img src={asset.bannaer} alt="Banner" className="w-full h-auto" />
// //         <h1 className="lg:text-6xl md:text-4xl font-semibold text-center absolute text-white">
// //           Chaos Battletome
// //         </h1>
// //       </div>

// //       {data ? (
// //   <div className="px-4 sm:px-6 lg:px-10 py-10 flex flex-wrap lg:flex-nowrap gap-6">
// //     {/* Image Section */}
// //     <div className="flex flex-1 flex-col sm:flex-row gap-4 items-center">
// //       <div className="space-y-2 lg:flex-col flex-row flex">
// //         {data.ImgArray.map((item, index) => (
// //           <div key={index} className="py-2">
// //             <div
// //               className="p-[2px] max-w-[100px] w-[90px] rounded-lg border-[1px] border-transparent"
// //               style={{
// //                 background: "linear-gradient(to right, #FF1B6B, #2472FC)",
// //                 backgroundSize: "200% 200%",
// //               }}
// //             >
// //               <img
// //                 src={item}
// //                 className="rounded-lg"
// //                 alt={`Thumbnail ${index + 1}`}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <img
// //         src={data.image || "/fallback-image.jpg"}
// //         className="min-h-[500px] sm:max-h-[200px] object-contain rounded-lg"
// //         alt={data.gameName || "Game Image"}
// //       />
// //     </div>

// //     {/* Details Section */}
// //     <div className="lg:max-w-[50%] flex flex-col justify-center items-start space-y-4">
// //       <h1 className="text-3xl sm:text-4xl font-bold">{data.gameName}</h1>
// //       <p className="text-[#a8aebf] text-sm sm:text-lg">{data.description}</p>
// //       <h1 className="text-2xl font-semibold">{data.price}</h1>
// //       <div className="flex gap-4 border-2 bg-[#1b1b1b] border-[#474747] rounded-md px-4 py-2 my-3 justify-between items-center w-[150px]">
// //         <button
// //           className="text-4xl font-light text-white rounded transition-all hover:bg-opacity-80 active:scale-95 px-2"
// //           onClick={() => handleRemove(data._id)}
// //         >
// //           -
// //         </button>
// //         <span className="text-lg text-white">{value[id] || 0}</span>
// //         <button
// //           className="text-4xl font-light text-white rounded transition-all hover:bg-opacity-80 active:scale-95 px-2"
// //           onClick={() => handleAdd(data._id)}
// //         >
// //           +
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // ) : (
// //   <p className="text-center text-gray-500 mt-10 flex justify-center items-center gap-2">
// //     <span>Loading...</span>
// //     <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291V12H0c0 4.63 3.134 8.531 7.23 9.496l1.77-2.205z"></path>
// //     </svg>
// //   </p>
// // )}

// //     </div>
// //   );
// // };

// // export default Detail;




// import React, { useEffect, useState, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import { asset, battle } from "../assets/asset";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/feature/Game.slice";

// const Detail = () => {
//   const { id } = useParams(); // Extract dynamic `id` from URL
//   const [data, setData] = useState(null); // Initialize as `null`
//   const dispatch = useDispatch();
//   const value = useSelector((state) => state.game.value);

//   const handleAdd = useCallback(
//     (id) => {
//       dispatch(addToCart(id));
//     },
//     [dispatch]
//   );

//   const handleRemove = useCallback(
//     (id) => {
//       dispatch(removeFromCart(id));
//     },
//     [dispatch]
//   );

//   const fetchData = useCallback(() => {
//     const foundItem = battle.find((item) => item._id === id); // Use `find` for better performance
//     setData(foundItem || null); // Explicitly set null if not found
//   }, [id]);

//   useEffect(() => {
//     fetchData(); // Fetch data whenever `id` changes
//   }, [id, fetchData]);

//   return (
//     <div className="min-h-full relative bg-gray-900 text-white">
//       {/* Header Section */}
//       <div className="relative">
//         <img src={asset.bannaer} alt="Banner" className="w-full h-auto" />
//         <h1 className="absolute inset-0 flex items-center justify-center text-center text-white font-bold text-4xl sm:text-5xl md:text-6xl">
//           Chaos Battletome
//         </h1>
//       </div>

//       {/* Content Section */}
//       {data ? (
//         <div className="px-4 sm:px-6 lg:px-10 py-10 flex flex-wrap lg:flex-nowrap gap-6">
//           {/* Image Section */}
//           <div className="flex-1 flex flex-col-reverse lg:flex-row lg:items-start gap-4 h-[500px]">
//             <div className="flex lg:flex-col gap-4">
//               {data.ImgArray.map((item, index) => (
//                 <div key={index} className="py-2">
//                   <div
//                     className="p-[2px] lg:max-w-[100px] lg:w-[90px] rounded-lg border-[1px] border-transparent"
//                     style={{
//                       background: "linear-gradient(to right, #FF1B6B, #2472FC)",
//                       backgroundSize: "200% 200%",
//                     }}
//                   >
//                     <img
//                       src={item}
//                       className="rounded-lg min-h-full"
//                       alt={`Thumbnail ${index + 1}`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <img
//               src={data.image || "/fallback-image.jpg"}
//               className="w-full max-h-[500px] sm:max-h-[300px] object-contain rounded-lg"
//               alt={data.gameName || "Game Image"}
//             />
//           </div>

//           {/* Details Section */}
//           <div className="lg:max-w-[50%] flex flex-col justify-center items-start space-y-4">
//             <h1 className="text-3xl sm:text-4xl font-bold">{data.gameName}</h1>
//             <p className="text-[#a8aebf] text-sm sm:text-lg leading-relaxed">
//               {data.description}
//             </p>
//             <h1 className="text-2xl font-semibold">{data.price}</h1>
//             <div className="flex gap-4 border-2 bg-[#1b1b1b] border-[#474747] rounded-md px-4 py-2 my-3 justify-between items-center w-[200px] sm:w-[250px]">
//               <button
//                 className="text-2xl sm:text-4xl font-light text-white rounded transition-all hover:bg-opacity-80 active:scale-95 px-2"
//                 onClick={() => handleRemove(data._id)}
//               >
//                 -
//               </button>
//               <span className="text-lg sm:text-xl">{value[id] || 0}</span>
//               <button
//                 className="text-2xl sm:text-4xl font-light text-white rounded transition-all hover:bg-opacity-80 active:scale-95 px-2"
//                 onClick={() => handleAdd(data._id)}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 mt-10 flex justify-center items-center gap-2">
//           <span>Loading...</span>
//           <svg
//             className="animate-spin h-5 w-5 text-gray-500"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             ></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291V12H0c0 4.63 3.134 8.531 7.23 9.496l1.77-2.205z"
//             ></path>
//           </svg>
//         </p>
//       )}
//     </div>
//   );
// };

// export default Detail;
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { asset, battle } from "../assets/asset";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/feature/Game.slice";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.game.value);

  const handleAdd = useCallback(
    (id) => {
      dispatch(addToCart(id));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const fetchData = useCallback(() => {
    const foundItem = battle.find((item) => item._id === id);
    setData(foundItem || null);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

  return (
    <div className="min-h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header Section */}
      <div className="relative">
        <img src={asset.bannaer} alt="Banner" className="w-full h-auto rounded-lg shadow-md" />
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-white font-extrabold text-4xl sm:text-5xl md:text-6xl  bg-opacity-40">
          Chaos Battletome
        </h1>
      </div>

      {/* Content Section */}
      {data ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            {/* Image Section */}
            <div className="flex-1 flex lg:flex-row flex-col-reverse gap-4 lg:gap-6">
              <div className="flex lg:flex-col gap-4 overflow-auto pb-2">
                {data.ImgArray.map((item, index) => (
                  <div key={index} className="p-1 rounded-lg shadow-md">
                    <img
                      src={item}
                      className="rounded-lg border border-gray-700 object-cover w-20 h-20 md:w-24 md:h-24"
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <img
                src={data.ImgArray[0] || "/fallback-image.jpg"}
                className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
                alt={data.gameName || "Game Image"}
              />
            </div>

            {/* Details Section */}
            <div className="lg:max-w-[50%] flex flex-col space-y-6">
              <h1 className="text-4xl font-bold text-white">{data.gameName}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">{data.description}</p>
              <h2 className="text-3xl font-semibold text-green-400">{data.price}</h2>
              <div className="flex gap-4 items-center border border-gray-700 bg-gray-800 rounded-lg px-6 py-4 shadow-md">
                <button
                  className="text-2xl sm:text-3xl font-bold text-gray-300 transition-transform hover:scale-110"
                  onClick={() => handleRemove(data._id)}
                >
                  -
                </button>
                <span className="text-xl sm:text-2xl font-semibold text-gray-200">{value[id] || 0}</span>
                <button
                  className="text-2xl sm:text-3xl font-bold text-gray-300 transition-transform hover:scale-110"
                  onClick={() => handleAdd(data._id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400 text-lg flex items-center gap-3">
            <span>Loading...</span>
            <svg
              className="animate-spin h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291V12H0c0 4.63 3.134 8.531 7.23 9.496l1.77-2.205z"
              ></path>
            </svg>
          </p>
        </div>
      )}
    </div>
  );
};

export default Detail;
