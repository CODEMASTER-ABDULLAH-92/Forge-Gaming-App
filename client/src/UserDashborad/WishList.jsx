import React from 'react';
import { useState } from 'react';
import Side from './Side';
import { asset } from '../assets/asset';

import { Link } from 'react-router-dom';
const WishList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-[#121212] text-white">
      {/* Sidebar and Main Content */}
      <div className="flex relative">
        
        {/* Sidebar */}
        <Side />

        {/* Main Content */}
        <div className="flex flex-col w-full px-6 py-6 md:px-10">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 relative">
            
            {/* Search Bar */}
            <div className="relative flex items-center">
              <input 
                type="text" 
                className="px-4 py-2 pl-10 w-full md:w-[250px] lg:w-[300px] rounded-3xl bg-[#1b1b1b] text-white outline-none placeholder-gray-400"
                placeholder="Search"
              />
              <img 
                src={asset.Search} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                alt="Search"
              />
            </div>

            {/* Notifications & Profile */}
            <div className="flex items-center gap-4">
              
              {/* Notification Bell */}
              <div className="relative flex justify-center items-center h-11 w-11 rounded-full bg-[#1b1b1b]">
                <div className="absolute -top-1 -right-1 h-5 w-5 flex justify-center items-center bg-red-500 text-xs font-semibold text-white rounded-full border-2 border-[#121212]">
                  <p>10</p>
                </div>
                <img src={asset.bellicon} className="h-6 w-6" alt="Notifications" />
              </div>

              {/* Profile Image */}
              <div className="relative">
      {/* Profile Image & Toggle */}
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={asset.profile}
          className="h-11 w-11 rounded-full"
          alt="Profile"
        />
        <img src={asset.down} className="h-5 w-5" alt="Dropdown Icon" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-52 px-3  bg-[#1b1b1b] text-white shadow-lg rounded-lg py-2">
          <li className='py-1'>
            <Link
              to="/userDash"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <span className="text-lg">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <span className="text-lg">Wish List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <span className="text-lg">Order</span>
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <span className="text-lg">Log Out</span>
            </Link>
          </li>
          {/* Add more dropdown items if needed */}
        </ul>
      )}
    </div>
            </div>
            
          </div>




{/* Wish List */}
<h1 className='text-2xl font-medium pt-6'>Wish List</h1>



<div className="bg-[#1b1b1b] rounded-xl p-4 shadow-lg w-full my-4 flex flex-col sm:flex-row justify-between items-center">
  
  {/* Left Section: Product Image & Details */}
  <div className="flex items-center gap-4">
    {/* Product Image */}
    <img 
      src={asset.longHairman} 
      className="h-[100px] w-[100px] rounded-2xl object-cover" 
      alt="Product" 
    />

    {/* Product Details */}
    <div>
      <h1 className="text-lg font-medium">Chaos Battlom</h1>
      <h1 className="text-lg font-medium text-gray-300">$ 98.00</h1>
      <button className="text-sm px-4 py-1 rounded-lg text-white bg-gradient-to-r from-[#20C375] to-[rgba(32, 195, 117, 0.6)] shadow-md">
        In Stock
      </button>
    </div>
  </div>

  {/* Right Section: Cart & Delete Icons */}
  <div className="flex items-center gap-3 mt-4 sm:mt-0">
    {/* Add to Cart Button */}
    <button className="flex items-center gap-2 border border-red-500 py-2 px-4 rounded-3xl text-white transition-all duration-300 ">
      Add to Cart
      <img src={asset.cart2} alt="Cart" />
    </button>

    {/* Delete Icon */}
    <img src={asset.bin} alt="Delete" className="cursor-pointer hover:opacity-80 transition-opacity duration-300" />
  </div>

</div>
<div className="bg-[#1b1b1b] rounded-xl p-4 shadow-lg w-full my-4 flex flex-col sm:flex-row justify-between items-center">
  
  {/* Left Section: Product Image & Details */}
  <div className="flex items-center gap-4">
    {/* Product Image */}
    <img 
      src={asset.longHairman} 
      className="h-[100px] w-[100px] rounded-2xl object-cover" 
      alt="Product" 
    />

    {/* Product Details */}
    <div>
      <h1 className="text-lg font-medium">Chaos Battlom</h1>
      <h1 className="text-lg font-medium text-gray-300">$ 98.00</h1>
      <button className="text-sm px-4 py-1 rounded-lg text-white bg-gradient-to-r from-[#20C375] to-[rgba(32, 195, 117, 0.6)] shadow-md">
        In Stock
      </button>
    </div>
  </div>

  {/* Right Section: Cart & Delete Icons */}
  <div className="flex items-center gap-3 mt-4 sm:mt-0">
    {/* Add to Cart Button */}
    <button className="flex items-center gap-2 border border-red-500 py-2 px-4 rounded-3xl text-white transition-all duration-300 ">
      Add to Cart
      <img src={asset.cart2} alt="Cart" />
    </button>

    {/* Delete Icon */}
    <img src={asset.bin} alt="Delete" className="cursor-pointer hover:opacity-80 transition-opacity duration-300" />
  </div>

</div>
<div className="bg-[#1b1b1b] rounded-xl p-4 shadow-lg w-full my-4 flex flex-col sm:flex-row justify-between items-center">
  
  {/* Left Section: Product Image & Details */}
  <div className="flex items-center gap-4">
    {/* Product Image */}
    <img 
      src={asset.longHairman} 
      className="h-[100px] w-[100px] rounded-2xl object-cover" 
      alt="Product" 
    />

    {/* Product Details */}
    <div>
      <h1 className="text-lg font-medium">Chaos Battlom</h1>
      <h1 className="text-lg font-medium text-gray-300">$ 98.00</h1>
      <button className="text-sm px-4 py-1 rounded-lg text-white bg-gradient-to-r from-[#20C375] to-[rgba(32, 195, 117, 0.6)] shadow-md">
        In Stock
      </button>
    </div>
  </div>

  {/* Right Section: Cart & Delete Icons */}
  <div className="flex items-center gap-3 mt-4 sm:mt-0">
    {/* Add to Cart Button */}
    <button className="flex items-center gap-2 border border-red-500 py-2 px-4 rounded-3xl text-white transition-all duration-300 ">
      Add to Cart
      <img src={asset.cart2} alt="Cart" />
    </button>

    {/* Delete Icon */}
    <img src={asset.bin} alt="Delete" className="cursor-pointer hover:opacity-80 transition-opacity duration-300" />
  </div>

</div>




        </div>
      </div>
    </div>
  );
};

export default WishList;





