import React from "react";

export default function Navbar() {
    return (
      <div className="top-0 left-0 w-full p-5 backdrop-blur-lg bg-gray-500/50 flex items-center sm:flex-col sticky">
        <div className="container mx-auto flex justify-between items-center flex-wrap gap-5 px-10 py-2">
          {/* Left Section - Logo & Home */}
          <div className="flex items-center flex-row gap-5">
            <span className="text-xl font-bold text-white">🔥 Logo</span>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </div>
  
          {/* Right Section - Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-64 rounded-full bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>
    );
  }
  