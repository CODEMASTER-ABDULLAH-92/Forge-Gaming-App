import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { asset } from '../assets/asset';

const Nav = () => {
  const [hide, setHide] = useState(false);

  return (
    <nav className="bg-transparent text-white md:px-[3%] lg:px-[5%] py-3 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={asset.logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="lg:flex hidden gap-6 items-center">
          <NavLink to="/" className="md:text-[17px] text-[14px]">
            Home
          </NavLink>
          <NavLink to="/Shop" className="md:text-[17px] text-[14px]">
            Shop
          </NavLink>
          <NavLink to="/custom-orders" className="md:text-[17px] text-[14px]">
            Custom Orders
          </NavLink>
          <NavLink to="/contact" className="md:text-[17px] text-[14px]">
            Contact Us
          </NavLink>
        </ul>

        {/* Actions */}
        <div className="sm:flex hidden gap-6 items-center">
          {/* Profile */}
          <div className="flex items-center gap-2">
            <img src={asset.profileIcon} alt="Profile Icon" />
            <h1 className="text-[12px] font-semibold">
              <span className="text-gray-500 font-light">Welcome</span>
              <br />
             <Link to="/SignIn">Sign In</Link>  <Link to="/register">/Register</Link> 
            </h1>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-3 relative">
            <img src={asset.cart} alt="Cart Icon" />
            <div className="h-4 w-4 rounded-full bg-[#f9d759] absolute top-0 right-0 text-black text-[10px] font-bold flex justify-center items-center">
              0
            </div>
            <h1 className="text-[16px] text-red-500 font-bold">
              <span className="text-gray-500 text-xs">Shopping Cart</span>
              <br />
              $0.00
            </h1>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <img
          src={asset.menu}
          className="w-10 lg:hidden block cursor-pointer"
          onClick={() => setHide(!hide)}
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen  w-[50%] md:w-[40%] bg-[#3e3e3e] p-5 transform transition-transform duration-500 ${
          hide ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-30`}
      >
        <div className="flex justify-end">
          <img
            src={asset.cross}
            className="w-10 cursor-pointer"
            onClick={() => setHide(false)}
            alt="Close Icon"
          />
        </div>
        <ul className="flex flex-col gap-4 mt-5">
          <NavLink
            to="/"
            className="md:text-[19px] text-[14px]"
            onClick={() => setHide(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Shop"
            className="md:text-[19px] text-[14px]"
            onClick={() => setHide(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/custom-orders"
            className="md:text-[19px] text-[14px]"
            onClick={() => setHide(false)}
          >
            Custom Orders
          </NavLink>
          <NavLink
            to="/contact"
            className="md:text-[19px] text-[14px]"
            onClick={() => setHide(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/signin"
            className="md:text-[19px] text-[14px]"
            onClick={() => setHide(false)}
          >
            Sign In
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
