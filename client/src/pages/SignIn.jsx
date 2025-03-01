import React, { useState } from 'react';
import { asset } from '../assets/asset';
import {Link} from 'react-router-dom'
const SignIn = () => {
  const [hide, setHide] = useState(false);








  
  const handleGoogleSignIn = () => {
  
  };

  const handleFacebookSignIn = () => {

  };

  return (
    <div className="px-[5%] py-10">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="font-semibold text-4xl text-center">
          Welcome Back To
          <span className="text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#2472fc] bg-clip-text pl-2">
            masah-dev.
          </span>
        </h1>
        <p className="text-[#a8aebf] pt-2">Sign in to continue to your account</p>
      </div>

      {/* Form Section */}
      <div className="bg-[#1b1b1b] max-w-[600px] mx-auto p-6 rounded-lg shadow-lg">
        {/* Email Input */}
        <label htmlFor="email" className="flex flex-col mb-4 text-white">
          Email
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="px-5 py-3 mt-2 w-full rounded-lg bg-gray-900 text-white tracking-tight outline-none focus:ring-2 focus:ring-[#2472fc]"
          />
        </label>

        {/* Password Input */}
        <label htmlFor="password" className="flex flex-col mb-4 text-white">
          Password
          <div className="flex items-center px-5 py-3 mt-2 w-full rounded-lg bg-gray-900">
            <input
              type={hide ? 'password' : 'text'}
              id="password"
              placeholder="Enter password"
              className="w-full bg-transparent text-white tracking-tight outline-none"
            />
            <img
              src={asset.eye}
              onClick={() => setHide(!hide)}
              alt="Show/Hide Password"
              className="cursor-pointer"
            />
          </div>
        </label>

        <div className="flex justify-between items-center mb-4">
          <label htmlFor="tick" className="flex items-center text-[14px] sm:text-xl text-white">
            <input
              type="checkbox"
              name="tick"
              id="tick"
              className="mr-2 bg-gray-900 border-2 text-[14px] border-[#2472fc] rounded checked:ring-2 checked:ring-[#2472fc] focus:outline-none"
            />
            Remember me
          </label>
          <a
            href="/reset"
            className="text-transparent sm:text-xl text-[14px] bg-gradient-to-r from-[#ff1b6b] to-[#2472fc] bg-clip-text">
            Forget Password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full py-3 mt-4 bg-[#fd4960] rounded-3xl text-white font-semibold text-lg hover:opacity-90 transition duration-200">
          Sign In
        </button>
        <p className="py-5 text-center text-white">or</p>

        <div className="flex md:flex-row flex-col gap-4">
          <button
            onClick={handleFacebookSignIn}
            className="flex items-center justify-center w-full py-3 rounded-3xl bg-[#262626] text-white font-medium hover:opacity-90 transition duration-200">
            <img src={asset.face} alt="Facebook" className="w-6 h-6 mr-3" />
            Continue with Facebook
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-3  bg-[#262626] rounded-3xl text-white font-medium hover:opacity-90 transition duration-200">
            <img src={asset.google} alt="Google" className="w-6 h-6 mr-3" />
            Continue with Google
          </button>
        </div>
        <p className="text-[#fff] -tracking-tighter text-center pt-2">Not a member Yet! <Link to="/register" className='text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#2472fc] bg-clip-text'>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
