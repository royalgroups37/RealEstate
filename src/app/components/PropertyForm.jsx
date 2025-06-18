'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function PropertyForm() {
  const [contactMethod, setContactMethod] = useState('phone');

  return (
    <div className="px-4 md:px-20 py-10 bg-white text-[#1f4b43]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's Make it Happen</h2>
        <p className="text-gray-700 mb-10">
          Ready to take the first step toward your dream property? Fill out the form below, and our real
          estate wizards will work their magic to find your perfect match. Don’t wait; let’s embark on this
          exciting journey together.
        </p>

        <form className="space-y-8">
          {/* Grid Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input type="text" placeholder="Enter First Name" className="input" />
            <input type="text" placeholder="Enter Last Name" className="input" />
            <input type="email" placeholder="Enter your Email" className="input" />
            <input type="tel" placeholder="Enter Phone Number" className="input" />
          </div>

          {/* Property Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <select className="input"><option>Select Location</option></select>
            <select className="input"><option>Select Property Type</option></select>
            <select className="input"><option>Select no. of Bathrooms</option></select>
            <select className="input"><option>Select no. of Bedrooms</option></select>
          </div>

          {/* Budget and Preferred Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="input"><option>Select Budget</option></select>

            {/* Preferred Contact */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Preferred Contact Method</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <label className="flex items-center gap-2 border rounded px-3 py-2 cursor-pointer w-full">
                  <FaPhoneAlt />
                  <input
                    type="radio"
                    name="contact"
                    checked={contactMethod === 'phone'}
                    onChange={() => setContactMethod('phone')}
                  />
                  <span className="flex-grow">Enter Your Number</span>
                </label>
                <label className="flex items-center gap-2 border rounded px-3 py-2 cursor-pointer w-full">
                  <FaEnvelope />
                  <input
                    type="radio"
                    name="contact"
                    checked={contactMethod === 'email'}
                    onChange={() => setContactMethod('email')}
                  />
                  <span className="flex-grow">Enter Your Email</span>
                </label>
              </div>
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Enter your Message here.."
            rows="5"
            className="w-full border border-gray-400 p-4 rounded resize-none"
          ></textarea>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree with <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>
            </label>
          </div>

          {/* Button */}
          <button type="submit" className="bg-[#1f4b43] text-white px-6 py-3 rounded hover:opacity-90">
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}
