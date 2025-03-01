import React from 'react';
import { useState } from 'react';
import Side from './Side';
import { asset } from '../assets/asset';

import { Link } from 'react-router-dom';
const Userdash = () => {
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
          {/* Additional Content Can Be Placed Below */}
          <h1 className='text-2xl font-medium pt-6'>Profile Information</h1>
          <p className='pt-2 text-gray-500'>Manage Your Profile Details</p>



          <div className="bg-[#1b1b1b] min-w-full my-5 rounded-xl p-6 shadow-lg">
  <h1 className="text-2xl font-semibold text-white py-3 border-b border-[#333743]">
    General Information
  </h1>

  <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-4">
    {/* Name Input */}
    <label htmlFor="name" className="block">
      <input 
        type="text" 
        name="name" 
        id="name" 
        value="John Simity" 
        placeholder="Full Name" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 rounded-lg bg-[#121212] border-2 border-[#333743] w-full transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
    
    {/* Email Input */}
    <label htmlFor="email" className="block">
      <input 
        type="email" 
        name="email" 
        id="email" 
        value="john@gmail.com" 
        placeholder="Email Address" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 rounded-lg bg-[#121212] border-2 border-[#333743] w-full transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
    
    {/* Phone Number Input */}
    <label htmlFor="number" className="block sm:col-span-2">
      <input 
        type="text" 
        name="number" 
        id="number" 
        value="+989-774672994" 
        placeholder="Phone Number" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 rounded-lg bg-[#121212] border-2 border-[#333743] w-full sm:w-[49%] transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
    
    {/* Address Textarea */}
    <label htmlFor="textarea" className="block sm:col-span-2">
      <textarea 
        name="address" 
        id="textarea" 
        value="Address" 
        placeholder="Address" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 resize-none h-[120px] rounded-lg bg-[#121212] border-2 border-[#333743] w-full transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
  </div>

  {/* Update Button */}
  <div className="flex justify-center items-center mt-6">
    <button className="px-6 py-3 w-[220px] rounded-full text-lg font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white transition-all duration-300 hover:shadow-md hover:scale-105">
      Update
    </button>
  </div>
</div>







<div className="bg-[#1b1b1b] min-w-full my-5 rounded-xl p-6 shadow-lg">
  <h1 className="text-2xl font-semibold text-white py-3 border-b border-[#333743]">
Security
  </h1>

  <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-4">
    {/* Name Input */}
    <label htmlFor="old" className="block">
      <input 
        type="text" 
        name="name" 
        id="old" 
        // value="John Simity" 
        placeholder="Old Password" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 rounded-lg bg-[#121212] border-2 border-[#333743] w-full transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
    
    {/* Email Input */}
    <label htmlFor="new" className="block">
      <input 
        type="email" 
        name="email" 
        id="new" 
        // value="john@gmail.com" 
        placeholder="New Password" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 rounded-lg bg-[#121212] border-2 border-[#333743] w-full transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
    
    {/* Phone Number Input */}
    <label htmlFor="confirm" className="block">
      <input 
        type="text" 
        name="number" 
        id="confirm" 
        // value="+989-774672994" 
        placeholder="Confirm Password" 
        className="text-white placeholder-slate-300 outline-none border-none p-4 rounded-lg bg-[#121212] border-2 border-[#333743] w-full transition-all duration-300 focus:ring-2 focus:ring-red-500" 
      />
    </label>
    {/* <div className="flex justify-center items-center mt-6"> */}
    <label>
    <button className="px-6 py-3 w-[220px] rounded-full text-lg font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white transition-all duration-300 hover:shadow-md hover:scale-105">
      Update
    </button>

    </label>

  {/* </div> */}
    {/* Address Textarea */}

  </div>
</div>






<div className="bg-[#1b1b1b] min-w-full my-5 rounded-xl p-6 shadow-lg">
  <h1 className="text-2xl font-semibold text-white py-3 border-b border-[#333743]">
Payment Information
  </h1>




  <div className="flex items-center gap-6">
  {/* Display Image */}
  <img 
    src={asset.cardDash} 
    className="my-3 max-w-[324px] max-h-[192px] rounded-lg shadow-lg" 
    alt="Card Preview" 
  />

  {/* Custom File Input with Gradient Border */}
  <label 
    htmlFor="image" 
    className="cursor-pointer my-3 w-[324px] h-[192px] flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-lg bg-black font-medium shadow-md transition-all duration-300 relative group"
  >
    {/* Gradient Border Effect */}
    <div className="absolute inset-0 rounded-lg p-1 bg-gradient-to-r from-[#ff1b6b] to-[#2472fc] transition-transform duration-300">
      <div className="w-full h-full bg-black rounded-lg"></div>
    </div>

    {/* Content */}
    <div className="relative flex flex-col items-center">
      <img src={asset.plus2} alt="Plus Icon" />
      <span className="text-lg text-white">Choose Card</span>
      <input 
        type="file" 
        name="image" 
        id="image" 
        className="hidden" // Hides the default input styling
      />
    </div>
  </label>
</div>


</div>





        </div>
      </div>
    </div>
  );
};

export default Userdash;




