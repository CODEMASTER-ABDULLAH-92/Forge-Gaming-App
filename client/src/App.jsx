import React, { useEffect, useState } from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Userdash from './UserDashborad/User.dash';
import WishList from './UserDashborad/WishList';
import OrderHistory from './UserDashborad/OrderHistory';
import LogOut from './UserDashborad/LogOut';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a default animation duration of 1200ms
  }, []);

  return (
    <div className='bg-[#0a0a0a] text-white'>
      
      {/* {location.pathname.includes('/userDash' || '/wishlist') ? '': <Nav />} */}
      {['/userDash', '/wishlist', '/order', '/logout'].some(path => location.pathname.includes(path)) ? '' : <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />



{/* User Dashboard  */}
<Route path='/userDash' element={<Userdash/>}/>
<Route path='/wishlist' element={<WishList/>}/>
<Route path='/order' element={<OrderHistory/>}/>
<Route path='/logout' element={<LogOut/>}/>


        <Route path={`/detail/:id`} element={<Detail />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      {['/userDash', '/wishlist', '/order', '/logout'].some(path => location.pathname.includes(path)) ? '' : <Footer />}

    </div>
  );
};

export default App;