'use client';

import React from 'react';
import { FaShieldAlt, FaHome, FaCheckCircle, FaThumbsUp } from 'react-icons/fa';

export default function WhyWorkWithUs() {
  return (
    <section className="bg-[#fef8f5] py-16 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
          <div className="relative w-60 h-60 rounded-xl overflow-hidden">
            <img
              src="/FatherDaughers.png"
              alt="Happy family"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-[-30px] left-[-20px] bg-yellow-500 text-white rounded-xl px-6 py-4 shadow-lg text-center w-52">
              <p className="text-sm">Properties For Sale</p>
              <p className="font-bold text-lg">14K</p>
            </div>
          </div>

          <div className="w-72 h-48 rounded-xl overflow-hidden shadow-md">
            <img
              src="/building.png"
              alt="Modern House"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why You Should Work <br className="hidden md:block" /> With Us
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            Eorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat neque vel velit interdum, eu aliquet odio mattis.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <p className="flex items-center gap-2">
              <FaShieldAlt className="text-green-600" /> 100% Secure
            </p>
            <p className="flex items-center gap-2">
              <FaHome className="text-green-600" /> Wide Range of Properties
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> Buy or Rent Homes
            </p>
            <p className="flex items-center gap-2">
              <FaThumbsUp className="text-green-600" /> Trusted by Thousands
            </p>
          </div>

          <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
