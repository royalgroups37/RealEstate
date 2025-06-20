
'use client';

import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
export default function PropertyForm() {
  return (
    <div className="bg-white px-4 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1f4b43]">
          Let's Make it Happen
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Ready to take the first step toward your dream property? Fill out the form below, and our real estate
          wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">First Name</label>
            <input type="text" placeholder="Enter First Name" className="input-field border border-gray-400 text-gray-400 rounded-md px-4 py-3" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">Last Name</label>
            <input type="text" placeholder="Enter Last Name" className="input-field border border-gray-400 text-gray-400 rounded-md px-4 py-3" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">Email</label>
            <input type="email" placeholder="Enter your Email" className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">Phone</label>
            <input type="tel" placeholder="Enter Phone Number" className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">Preferred Location</label>
            <select className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3">
              <option>Select Location</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">Property Type</label>
            <select className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3">
              <option>Select Property Type</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">No. of Bathrooms</label>
            <select className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3">
              <option>Select no. of Bathrooms</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">No. of Bedrooms</label>
            <select className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3">
              <option>Select no. of Bedrooms</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#1f4b43] mb-2">Budget</label>
            <select className="input-field border border-gray-400 text-gray-400 rounded-md px-6 py-3">
              <option>Select Budget</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 md:col-span-3">
            <label className="text-sm text-[#1f4b43] mb-2">Preferred Contact Method</label>
            <div className="flex flex-wrap gap-4">
              {/* Phone Input */}
              <div className="flex items-center border border-gray-300 rounded-md px-6 py-3 w-full md:w-auto gap-2">
                <FaPhoneAlt className="text-[#1f4b43]" />
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center border border-gray-300 rounded-md px-6 py-3 w-full md:w-auto gap-2">
                <FaEnvelope className="text-[#1f4b43]" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#1f4b43]  mb-2">Message</label>
          <textarea
            placeholder="Enter your Message here."
            rows={4}
            className="w-full border border-gray-400 text-gray-400 rounded-md px-4 py-3 text-sm "
          />
        </div>

        {/* Terms & Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <label className="flex items-center text-sm text-gray-600 gap-2">
            <input type="checkbox" className="accent-[#1f4b43]" />
            I agree with Terms of Use and Privacy Policy
          </label>
          <button
            type="submit"
            className="bg-[#1f4b43] hover:bg-[#163d37] text-white px-6 py-3 rounded-md transition font-semibold"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
}
