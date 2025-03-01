import React, { useState } from "react";
import { asset } from "../assets/asset";
import { motion } from "framer-motion";
import { battle } from "../assets/asset";
import { Link } from "react-router-dom";
const Shop = () => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleCategory1, setToggleCategory1] = useState(false);
  const [toggleCategory2, setToggleCategory2] = useState(false);
  const [rangeValue, setRangeValue] = useState(50);









  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(battle.length / itemsPerPage);

  const currentItems = battle.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };











const [hide,setHide] = useState(false);
  const [optionValue,setOptionValue] = useState('Digital Products');

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const toggleAnimation = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="py-10 px-[5%] flex relative">
      {/* Sidebar */}
      <div className="max-w-64 border-r-2 h-screen pr-4">
        {/* Categories */}
        <div className="mb-4">
          <h1
            className="flex justify-between items-center cursor-pointer font-semibold text-2xl"
            onClick={() => setToggleCategory(!toggleCategory)}
          >
            Categories
            <motion.img
              src={asset.Vector}
              animate={{ rotate: toggleCategory ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              alt="Toggle"
            />
          </h1>
          <motion.div
            initial="hidden"
            animate={toggleCategory ? "visible" : "hidden"}
            variants={toggleAnimation}
          >
            <div className="relative">
              <input
                type="text"
                className="py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950"
                placeholder="Search"
              />
              <img
                src={asset.Search}
                className="absolute top-3 left-3"
                alt="Search"
              />
            </div>

            {/* Scale */}
            <div className="mb-4">
              <h1
                className="flex justify-between items-center cursor-pointer text-[#fd4960] font-semibold text-2xl"
                onClick={() => setToggleCategory1(!toggleCategory1)}
              >
                Scale
                <motion.img
                  src={asset.Vector}
                  animate={{ rotate: toggleCategory1 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  alt="Toggle"
                />
              </h1>
              <motion.ul
                initial="hidden"
                animate={toggleCategory1 ? "visible" : "hidden"}
                variants={toggleAnimation}
              >
                <li className="pl-16 pt-1">25mm</li>
                <li className="pl-16 pt-1">50mm</li>
                <li className="pl-16 pt-1">75mm</li>
              </motion.ul>
            </div>

            <ul>
              <li className="pt-1 text-[17px]">Rollers</li>
              <li className="pt-1 text-[17px]">Dice Game</li>
              <li className="pt-1 text-[17px]">Cases</li>
              <li className="pt-1 text-[17px]">Acessories</li>
            </ul>
          </motion.div>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <h1
            className="flex justify-between items-center cursor-pointer font-semibold text-2xl"
            onClick={() => setToggleCategory2(!toggleCategory2)}
          >
            Budget
            <motion.img
              src={asset.Vector}
              animate={{ rotate: toggleCategory2 ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              alt="Toggle"
            />
          </h1>
          <motion.div
            initial="hidden"
            animate={toggleCategory2 ? "visible" : "hidden"}
            variants={toggleAnimation}
          >
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="from">
                From
                <input
                  id="from"
                  type="number"
                  className="py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950"
                  placeholder="Min"
                />
              </label>
              <span className="flex self-center">-</span>
              <label htmlFor="to">
                To
                <input
                  id="to"
                  type="number"
                  className="py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950"
                  placeholder="Max"
                />
              </label>
            </div>
          </motion.div>
        </div>

        {/* Range Input */}
        <div className="py-4">
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={handleRangeChange}
            className="w-full h-2 bg-[#fd4960] rounded-lg outline-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="mt-2 text-center text-sm text-gray-700">
            Selected value: {rangeValue}
          </div>
        </div>

        {/* Custom Input */}
        <label htmlFor="custom">
          Add Custom
          <input
            type="number"
            id="custom"
            className="py-3 rounded-lg px-2 w-full bg-white my-2 outline-none text-gray-950"
          />
        </label>
      </div>

      {/* other  */}

      {/* Search bar  and other input  */}
      <div className="w-[80%] relative">
      <div className="relative">
        {/* Search  */}
        <div className="flex md:flex-row flex-col justify-between px-10 gap-10 items-start ">
          {/* Search Box 1 */}
          <div className="relative w-[100%] md:w-[500px]">
            <input
              type="text"
              placeholder="Search here..."
              className="py-3 px-4 text-gray-800 w-full rounded-3xl outline-none border-none"
            />
            <div className="bg-red-500 h-10 w-10 absolute top-1/2 right-4 transform -translate-y-1/2 flex justify-center items-center rounded-full">
              <img src={asset.Search} className="rounded-full" alt="Search Icon" />
            </div>
          </div>

          {/* Search Box 2 */}
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              placeholder="Digital Purchase" value={optionValue}
              className="py-3 px-4 text-gray-800 w-full rounded-3xl outline-none border-none"
            />
              <img src={asset.down} onClick={()=>setHide(!hide)} className={`rounded-full absolute top-6 right-4 transform -translate-y-1/2`} alt="Dropdown Icon" />
              <motion.ul
                initial="hidden"
                animate={hide ? "visible" : "hidden"}
                variants={toggleAnimation} className={`${hide ? 'block' : 'hidden'} px-3 mt-2 absolute w-full rounded-lg`}>
                <li onClick={()=>setOptionValue("Digital Products")} className={`pt-1 min-w-full rounded-lg bg-[#1b1b1b] p-3 ${optionValue === 'Digital Products'? 'text-red-500':''}`}>Digital Products</li>
                <li onClick={()=>setOptionValue("2D Characters")} className={`pt-1  min-w-full bg-[#1b1b1b] p-3 ${optionValue === '2D Characters'? 'text-red-500':''}`}>2D Characters</li>
                <li onClick={()=>setOptionValue("3D Characters")} className={`pt-1  min-w-full rounded-lg bg-[#1b1b1b] p-3 ${optionValue === '3D Characters'? 'text-red-500':''}`}>3D Characters</li>
              </motion.ul>
          </div>
        </div>



{/* //Cards */}









<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center my-16">
        {currentItems.map((item, index) => {
          return (
            <Link
              to={`/detail/${item._id}`}
              key={item._id}
              className="bg-[#1b1b1b] p-4 rounded-xl justify-between py-5 items-start flex h-[500px] flex-col"
            >
              <img src={item.ImgArray[0]} className="self-center" alt="" />
              <p className="pl-4 pt-2 text-xl font-semibold">{item.gameName}</p>
              <p className="pl-4 pt-2 text-[16px]">{item.price}</p>
              <button className="flex border-2 border-red-500 gap-3 my-5 px-[21%] py-3 rounded-3xl self-end">
                <img src={asset.cart2} alt="" /> Add To cart
              </button>
            </Link>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>







      </div>
    </div>
    </div>
  );
};

export default Shop;
