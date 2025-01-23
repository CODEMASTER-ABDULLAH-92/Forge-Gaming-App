import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setMessage('Please enter a valid email address.');
      return;
    }

    // Simulate an API call or backend interaction
    setTimeout(() => {
      setMessage(`Thank you for subscribing, ${email}!`);
      setEmail(''); // Clear the input
    }, 500);
  };

  return (
    <div className="mx-[5%] my-10 rounded-lg bg-gradient-to-r from-[#f56d80] to-[#a82034] py-16 px-6 sm:px-10 lg:py-20 lg:px-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white mb-6">
        Subscribe To Newsletter!
      </h1>

      {/* Input and Button Section */}
      <div className="relative flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black text-white placeholder-gray-400 py-4 px-5 rounded-full w-full sm:w-[60%] lg:w-[50%] focus:outline-none focus:ring-2 focus:ring-white pr-20"
        />
        <button
          onClick={handleSubscribe}
          className=" z-20 left-10 absolute bg-white text-red-500 py-2 px-6 rounded-3xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          Send
        </button>
      </div>

      {/* Message */}
      {message && (
        <p className="text-center mt-4 text-white text-sm sm:text-base">
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsLetter;
