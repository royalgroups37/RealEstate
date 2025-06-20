'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { name: 'Properties', href: '/Properties' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] py-5 flex items-center justify-between">
        {/* Logo */}
        <p className="text-3xl font-semibold text-[#1f4b43]">LOGO</p>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-start items-center gap-10 text-base font-medium capitalize">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? 'text-[#dab656]' : 'text-[#1f4b43]'
              } hover:text-[#dab656] transition`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Action + Avatar */}
        <div className="hidden md:flex items-center gap-5">
          <svg
            width={41}
            height={41}
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <rect x="1.28027" y={1} width={39} height={39} rx="19.5" stroke="#1F4B43" />
          </svg>
          <div className="w-[148.22px] h-[42.5px] rounded-full border border-[#1f4b43] flex items-center justify-center cursor-pointer hover:bg-[#1f4b43] hover:text-white transition">
            <p className="text-[15px] text-[#1f4b43]">Add Property</p>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1f4b43] text-3xl"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 text-base font-medium capitalize space-y-4">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block ${
                pathname === href ? 'text-[#dab656]' : 'text-[#1f4b43]'
              } hover:text-[#dab656] transition`}
            >
              {name}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <svg
              width={41}
              height={41}
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <rect x="1.28027" y={1} width={39} height={39} rx="19.5" stroke="#1F4B43" />
            </svg>
            <div className="w-full h-[42.5px] rounded-full border border-[#1f4b43] flex items-center justify-center hover:bg-[#1f4b43] hover:text-white transition cursor-pointer">
              <p className="text-[15px] text-[#1f4b43]">Add Property</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
