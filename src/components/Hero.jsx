import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Over 10,000+ Jobs to Apply!
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm md:text-base font-light px-5">
          Your next big career move starts right here—explore the jobs right now!
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto px-4">
          {/* Job Search */}
          <div className="flex items-center bg-white rounded-full text-gray-600 px-4 py-2 w-full shadow">
            <img src={assets.search_icon} alt="search" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search for Jobs"
              className="text-sm sm:text-base outline-none flex-1 text-gray-700"
            />
          </div>

          {/* Location Search */}
          <div className="flex items-center bg-white rounded-full text-gray-600 px-4 py-2 w-full sm:w-1/2 shadow">
            <img src={assets.location_icon} alt="location" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="text-sm sm:text-base outline-none flex-1 text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-400 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-full shadow transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
