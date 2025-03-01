import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../assets/asset';

const Side = () => {
    const location = useLocation(); // Get the current route
    const menuItems = [
        { name: "Profile", path: "/userDash" },
        { name: "Wish List", path: "/wishlist" },
        { name: "Order History", path: "/order" },
        { name: "Log Out", path: "/logout" },
    ];

    return (
        <div className="w-60 h-screen py-24 px-10 bg-[#1b1b1b] flex flex-col gap-3">
            {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link key={index} to={item.path} className="flex gap-3 items-center">
                        <img src={isActive ? asset.gridWhite : asset.gridGray} alt="" />
                        <span className={`${isActive ? "text-white" : "text-gray-500"} text-lg`}>
                            {item.name}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};

export default Side;

