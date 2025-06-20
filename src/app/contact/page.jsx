'use client';

import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white tracking-wide">
      <Header />

      <div className="px-4 md:px-8 lg:px-24 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-gray-900 font-semibold mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          We’re excited to connect with you and learn more about your real estate goals. Use the form
          below to get in touch with Estaten. Whether you’re a prospective client, partner, or simply
          curious about our services, we’re here to answer your questions and provide the assistance you
          need.
        </p>

        <form className="bg-white border border-[#1F4B43] rounded-xl p-6 md:p-10 shadow-sm space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#1F4B43] mb-2">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F4B43] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F4B43] mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F4B43] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F4B43] mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F4B43] outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#1F4B43] mb-2">Phone</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F4B43] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F4B43] mb-2">Inquiry Type</label>
              <select className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#1F4B43] outline-none">
                <option>Select Inquiry Type</option>
                <option>Buy</option>
                <option>Sell</option>
                <option>Rent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F4B43] mb-2">How Did You Hear About Us?</label>
              <select className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#1F4B43] outline-none">
                <option>Select</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#1F4B43] mb-2">Message</label>
            <textarea
              placeholder="Enter your Message here."
              rows={5}
              className="w-full border border-[#1F4B43] rounded-md px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F4B43] outline-none"
            ></textarea>
          </div>

          {/* Checkbox + Submit */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1 accent-[#1F4B43]" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree with <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#1F4B43] text-white px-6 py-3 rounded-md hover:bg-[#163d37] transition"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
