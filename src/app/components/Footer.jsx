'use client';
import React, { useState } from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa6';

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  return (
   <div className="w-full bg-[#1f4b43] text-white">
  {/* Newsletter Section */}
  <div className="flex flex-col items-center px-4 py-20 text-center max-w-5xl mx-auto gap-10">
    <svg
      width={62}
      height={61}
      viewBox="0 0 62 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1120_498)">
        <g clipPath="url(#clip1_1120_498)">
          <path
            d="M31 60.8999C47.5685 60.8999 61 47.4684 61 30.8999C61 14.3314 47.5685 0.899902 31 0.899902C14.4315 0.899902 1 14.3314 1 30.8999C1 47.4684 14.4315 60.8999 31 60.8999Z"
            fill="#E7C873"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.4207 20.0212C44.5107 19.4287 44.2582 18.8349 43.7695 18.4862C43.2807 18.1387 42.637 18.0949 42.1057 18.3737C37.8545 20.6062 22.9832 28.4137 18.4157 30.8112C17.852 31.1062 17.5195 31.7087 17.5682 32.3424C17.617 32.9762 18.037 33.5212 18.6395 33.7274C20.4182 34.3362 22.592 35.0824 26.0007 36.2512L39.7507 23.3999L28.6232 37.1499C32.2582 38.3962 37.942 40.3449 39.3682 40.8337C39.8145 40.9874 40.307 40.9337 40.7107 40.6899C41.1145 40.4449 41.3882 40.0337 41.4595 39.5662L44.4207 20.0212Z"
            fill="#1F4B43"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.04 37.9287V42.0162C27.04 42.6437 27.4088 43.2125 27.98 43.4687C28.5525 43.7262 29.2213 43.6237 29.69 43.2062L33.2375 40.0537L27.04 37.9287Z"
            fill="#1F4B43"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1120_498">
          <rect width={61} height={61} fill="white" transform="translate(0.5)" />
        </clipPath>
        <clipPath id="clip1_1120_498">
          <rect width={61} height={61} fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>

    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold">Stay Up to Date</h2>
      <p className="text-sm md:text-base text-white/80">Subscribe to our newsletter to receive our weekly feed.</p>
    </div>

    {/* Email Input Area */}
    <div className="bg-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-lg">
      <input
        type="email"
        placeholder="Your e-mail"
        className="bg-transparent outline-none text-white placeholder-white/60 text-sm flex-grow"
      />
      <button className="flex items-center gap-2 text-white font-medium text-sm">
        Send
        <svg
          width={14}
          height={13}
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M0.8125 6.04506H12.0341L7.73716 1.95231C7.51216 1.738 7.50344 1.38193 7.71775 1.15693C7.93178 0.932215 8.28784 0.923215 8.51312 1.13753L13.4204 5.8119C13.6327 6.02453 13.75 6.3069 13.75 6.60756C13.75 6.90793 13.6327 7.19059 13.4105 7.4125L8.51284 12.0773C8.404 12.1811 8.2645 12.2326 8.125 12.2326C7.9765 12.2326 7.828 12.1741 7.71747 12.0579C7.50316 11.8329 7.51188 11.4771 7.73688 11.2628L12.0518 7.17006H0.8125C0.502 7.17006 0.25 6.91806 0.25 6.60756C0.25 6.29706 0.502 6.04506 0.8125 6.04506Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Footer Section */}
  <div className="bg-[#757272] py-6 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
      <p className="text-white/90">&copy; 2025. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white"></a>
        <a href="#" className="hover:text-white"></a>
        <a href="#" className="hover:text-white"></a>
        <a href="#" className="hover:text-white"></a>
      </div>
    </div>
  </div>
</div>

  );
}
