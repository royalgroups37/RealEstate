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
    <footer className="bg-[#f4f4f4] w-full">
      <div className="relative overflow-hidden py-20 px-4 sm:px-8 md:px-16 lg:px-[179px]">
        <div className="flex flex-col gap-20">
          <div className="w-full h-0.5 bg-[#1a76bb]" />
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-72">
            {/* Logo Box */}
            <div className="flex justify-center items-center w-full max-w-[200px] h-[119px] px-6 py-[11px] bg-[#f4f4f4] border border-[#2c2c2c] border-dashed">
              <p className="text-[28px] font-bold text-[#2c2c2c] leading-tight text-center">
                School<br />Logo
              </p>
            </div>

            {/* Contact Info + Social */}
            <div className="flex flex-col gap-10 w-full max-w-[565px]">
              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-[#1A76BB] w-6 h-6" />
                  <p className="text-sm text-[#2c2c2c]">
                    8-10-1/564 Nehru Nagar Mallapur 500062.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-[120px] gap-4">
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-[#1A76BB] w-6 h-6" />
                    <p className="text-sm text-[#2c2c2c]">(123) 456-7890</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-[#1A76BB] w-6 h-6" />
                    <p className="text-sm text-[#2c2c2c]">
                      support@royalpremiumgroups.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-6 flex-wrap">
                <p className="opacity-50 text-sm font-medium text-[#2c2c2c]">
                  Social Media
                </p>
                <div className="flex gap-6">
                  <FaInstagram className="w-6 h-6 text-[#1A76BB]" />
                  <FaLinkedin className="w-6 h-6 text-[#1A76BB]" />
                  <FaYoutube className="w-6 h-6 text-[#1A76BB]" />
                  <FaXTwitter className="w-6 h-6 text-[#1A76BB]" />
                  <FaWhatsapp className="w-6 h-6 text-[#1A76BB]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
