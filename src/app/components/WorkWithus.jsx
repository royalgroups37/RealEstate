'use client';

import Image from 'next/image';
import React from 'react';
import { FaShieldAlt, FaHome, FaCheckCircle, FaThumbsUp } from 'react-icons/fa';

export default function WhyWorkWithUs() {
  return (
    <section className="bg-[#fef8f5] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Images */}
        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Family Image */}
            <div className="w-full sm:w-[284px] h-[300px] sm:h-[373px] rounded-[20px] overflow-hidden">
              <Image
                src="/FatherDaughers.png"
                alt="Family"
                width={284}
                height={373}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="w-full sm:w-[284px] h-[100px] sm:h-[121px] bg-[#dab656] rounded-[20px] p-4 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <FaHome className="text-[#1f4b43]" size={20} />
                </div>
                <p className="text-[#1f4b43] text-sm font-medium">Properties For Sale</p>
              </div>
              <p className="mt-2 text-[#1f4b43] text-xl sm:text-2xl font-semibold">14K</p>
            </div>
          </div>

          {/* Right Column - Villa Image */}
          <div className="w-full sm:w-[284px] h-[350px] sm:h-[518px] rounded-[20px] overflow-hidden">
            <Image
              src="/building.png"
              alt="Modern Villa"
              width={284}
              height={518}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f4b43] mb-4 leading-snug">
            Why You Should Work <br className="hidden md:block" /> With Us
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat neque vel velit interdum, eu aliquet odio mattis.
          </p>

          {/* Feature Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#1f4b43] mb-6 text-sm sm:text-base">
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

          <button className="px-6 py-3 w-full sm:w-auto bg-[#1f4b43] text-white font-semibold rounded-lg hover:bg-[#163d37] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
