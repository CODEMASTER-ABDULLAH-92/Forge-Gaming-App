import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import {asset} from '../assets/asset'

const Nav = () => {
  const [hide,setHide] = useState(false);
  return (
    <nav className="bg-transparent text-white md:px-[3%] lg:px-[5%] py-3 relative">
      <div className='flex items-center justify-between'>
        <Link to="/">
        <img src={asset.logo} alt="" />
        </Link>
        <ul className='lg:flex hidden gap-3 '>
          <NavLink className="md:text-[17px]  text-[14px] ">Home</NavLink>
          <NavLink className="md:text-[17px]  text-[14px]">Shop</NavLink>
          <NavLink className="md:text-[17px]  text-[14px]">Custom Orders</NavLink>
          <NavLink className="md:text-[17px]  text-[14px]">Collections</NavLink>
          <NavLink className="md:text-[17px]  text-[14px]">Gallery</NavLink>
          <NavLink className="md:text-[17px]  text-[14px]">Contact Us</NavLink>
        </ul>
   <div className='sm:flex hidden gap-4'>
        <img src={asset.menu} onClick={()=>setHide(!hide)} className='w-10 lg:hidden block' alt="" />
<div className='flex items-center gap-1'>
  <img src={asset.profileIcon} alt="" />
  <h1 className='text-[12px] font-semibold'><span className='text-gray-500 font-light'>Welcome</span><br />
  Sign In/Register</h1>
</div>
<div className='flex items-center gap-3 relative'>
  <img src={asset.cart} alt="" />
  <div className='h-4 w-4 rounded-full bg-[#f9d759] absolute top-1 left-3 text-black text-[10px] font-bold flex justify-center items-center'>4</div>
  <h1 className='text-[16px] text-red-500 font-bold'><span className='text-gray-500 text-xs'>Shopping Card</span><br />
  $0.00</h1>
</div>

   </div>
   <img src={asset.menu} className='w-10 sm:hidden block' onClick={()=>setHide(!hide)} alt="" />



      </div>

<div className='min-w-full flex justify-end '>
<ul className={`lg:hidden flex flex-col gap-3  w-[40%] z-30 bg-[#3e3e3e] p-5 h-screen top-0 right-0 absolute ${hide ? "":'hidden'}`}>
  <img src={asset.cross} className='w-10' onClick={()=>setHide(!hide)} alt="" />
          <NavLink className="md:text-[19px] pt-2 text-[14px] ">Home</NavLink>
          <NavLink className="md:text-[19px] pt-2 text-[14px]">Shop</NavLink>
          <NavLink className="md:text-[19px] pt-2 text-[14px]">Custom Orders</NavLink>
          <NavLink className="md:text-[19px] pt-2 text-[14px]">Collections</NavLink>
          <NavLink className="md:text-[19px] pt-2 text-[14px]">Gallery</NavLink>
          <NavLink className="md:text-[19px] pt-2 text-[14px]">Contact Us</NavLink>
          <NavLink className="md:text-[19px] pt-2 text-[14px]">Sign In</NavLink>

        </ul>
</div>
    </nav>
  );
};

export default Nav;


// // background: linear-gradient(90deg, #FF1B6B 0%, #2472FC 100%);

