import React from 'react'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div className='bg-[#0a0a0a] text-white'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Shop' element={<Shop/>}/>
        <Route path={`/detail/:id`} element={<Detail/>}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </div>
  )
}


export default App


// Chaos Battletome
// Chaos Battletome
// Chaos Battletome
// Chaos Battletome
// $98.00
// $98.00
// $98.00
// $98.00
// Add to Cart
// Add to Cart
// Add to Cart
// Add to Cart
// FREE AND FAST DELIVERY
// 24/7 CUSTOMER SERVICE
// MONEY BACK GUARANTEE
// Free delivery for all orders over $140
// Friendly 24/7 customer support
// We reurn money within 30 days
// What Our Client Says
// “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
// “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
// Kristin Watson
// Kristin Watson
// Fashion Designer
// Fashion Designer
// Subscribe to Newsletter!
// Email Address
// Send
// Logo
// Product
// Company
// Access

// Pricing
// About
// Login
// Features
// Contact
// Star Free Trial
// Influencers
// Resources
// Legal
// AI Blog
// Support
// Privacy Policy
// Community
// FAQs
// Terms & Conditions
// Contact Support
// FRONXSOLUTION – All Rights Reserved © Copyright 2024