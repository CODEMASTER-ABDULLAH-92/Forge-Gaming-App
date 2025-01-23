import React, { useRef, useState } from "react";
import { asset, battle } from "../assets/asset";
import { Link } from "react-router-dom";

const LongHair = () => {
  const currentRef = useRef(null);
  const [toogle, setToogle] = useState("0");
  const scrollLeft = () => {
    if (currentRef.current) {
      currentRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (currentRef.current) {
      currentRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div
        className="px-[5%] flex justify-between items-center overflow-x-scroll gap-6 my-16"
        ref={currentRef}
      >
        {battle.slice(-7).map((item, index) => {
          return (
            // <Link
            //   to={`/detail/${item._id}`}
            //   key={item._id}
            //   className="bg-[#1b1b1b] min-h-[500px] min-w-[312px] rounded-xl justify-start py-5 items-start flex flex-col"
            // >
            //   <img src={item.image} className="self-center" alt="" />
            //   <p className="pl-4 pt-2 text-xl font-semibold">{item.gameName}</p>
            //   <p className="pl-4 pt-2 text-[16px]">{item.price}</p>
            //   <button className="flex self-center border-2 border-red-500 gap-3 my-5 px-[21%] py-3 rounded-3xl">
            //     {" "}
            //     <img src={asset.cart2} alt="" /> Add To cart
            //   </button>
            // </Link>
            <Link
  to={`/detail/${item._id}`}
  key={item._id}
  className="bg-[#1b1b1b] min-h-[500px] min-w-[312px] rounded-xl justify-start py-5 items-start flex flex-col"
>
  <img src={item.image} className="self-center" alt={item.gameName} />
  <p className="pl-4 pt-2 text-xl font-semibold">{item.gameName}</p>
  <p className="pl-4 pt-2 text-[16px]">{item.price}</p>
  <button
    className="flex self-center border-2 border-red-500 gap-3 my-5 px-[21%] py-3 rounded-3xl"
    onClick={(e) => {
      e.preventDefault(); // Prevent navigation when the button is clicked
      // Add your "Add to Cart" logic here
      console.log(`Added ${item.gameName} to cart`);
    }}
  >
    <img src={asset.cart2} alt="Cart" /> Add To Cart
  </button>
</Link>

          );
        })}
      </div>
      <div className="flex justify-center items-center gap-2">
        <button
          className={`h-5 w-5 rounded-full ${
            toogle === "0" ? "bg-[#fd4960]" : "bg-[#3e3e3e]"
          }`}
          onClick={() => {
            scrollLeft();
            setToogle("0");
          }}
        ></button>
        <button
          className={`h-5 w-5 rounded-full ${
            toogle === "1" ? "bg-[#fd4960]" : "bg-[#3e3e3e]"
          }`}
          onClick={() => {
            scrollLeft();
            setToogle("1");
          }}
        ></button>
        <button
          className={`h-5 w-5 rounded-full ${
            toogle === "2" ? "bg-[#fd4960]" : "bg-[#3e3e3e]"
          }`}
          onClick={() => {
            scrollRight();
            setToogle("2");
          }}
        ></button>
        <button
          className={`h-5 w-5 rounded-full ${
            toogle === "3" ? "bg-[#fd4960]" : "bg-[#3e3e3e]"
          }`}
          onClick={() => {
            scrollRight();
            setToogle("3");
          }}
        ></button>
      </div>
    </>
  );
};

export default LongHair;
