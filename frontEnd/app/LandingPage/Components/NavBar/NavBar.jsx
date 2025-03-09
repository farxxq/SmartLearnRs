import React, { useState } from 'react';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="flex justify-between items-center p-5 bg-[#87A2FF]">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/path/to/logo.png" alt="SmartLearn Logo" className="w-32" />
      </div>
      
      {/* Navbar Links */}
      <ul className={`flex space-x-8 md:flex ${isMobile ? "flex-col space-y-4 absolute top-16 left-0 w-full bg-[#87A2FF] md:flex-row md:space-y-0 md:absolute md:w-auto md:bg-transparent md:top-0" : "hidden"}`}>
        <li><a href="#home" className="text-white font-semibold hover:text-[#FFF4B5]">Home</a></li>
        <li><a href="#courses" className="text-white font-semibold hover:text-[#FFF4B5]">Courses</a></li>
        <li><a href="#about" className="text-white font-semibold hover:text-[#FFF4B5]">About</a></li>
      </ul>

      {/* Login Button */}
      <div className="flex-shrink-0">
        <button className="bg-[#FFD7C4] text-[#333] px-6 py-2 rounded-md font-semibold hover:bg-[#87A2FF] hover:text-white transition-all duration-300">
          Login
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center" onClick={() => setIsMobile(!isMobile)}>
        <span className="text-white text-2xl">☰</span>
      </div>
    </div>
  );
}

export default Navbar;
