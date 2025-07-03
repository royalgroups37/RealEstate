import React from "react";

const CallToActionBanners = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 py-12">
      {/* Left Banner */}
      <div className="relative bg-[#f9f9f9] rounded-2xl flex-1 p-6 md:p-10 w-full">
        <div className="w-full max-w-md">
          <h3 className="text-[22px] sm:text-[26px] font-medium text-[#1f4b43] leading-snug">
            Looking for the new <br /> home?
          </h3>
          <p className="mt-4 text-sm sm:text-base text-[#1f4b43] leading-relaxed">
            10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
          </p>
          <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-[#1f4b43] text-white rounded-xl hover:opacity-90 transition">
            Get Started
            <svg
              width={16}
              height={13}
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.17725 5.90824H13.1879L8.58883 1.529C8.34801 1.29967 8.33867 0.918689 8.56805 0.677939C8.79713 0.43749 9.17823 0.42786 9.41935 0.657175L14.6717 5.65876C14.8989 5.88626 15.0245 6.18841 15.0245 6.51011C15.0245 6.83151 14.8989 7.13396 14.6611 7.37139L9.41905 12.3628C9.30256 12.4737 9.15325 12.5288 9.00394 12.5288C8.845 12.5288 8.68606 12.4662 8.56775 12.342C8.33837 12.1013 8.34771 11.7206 8.58853 11.4913L13.2069 7.11199H1.17725C0.844915 7.11199 0.575195 6.84235 0.575195 6.51011C0.575195 6.17788 0.844915 5.90824 1.17725 5.90824Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <img
          src="/h47.png"
          alt="Banner Icon"
          className="absolute bottom-6 right-6 w-20 sm:w-[130px] h-auto object-contain"
        />
      </div>

      {/* Right Banner */}
      <div className="relative bg-[#fff8f6] rounded-2xl flex-1 p-6 md:p-10 w-full">
        <div className="w-full max-w-md">
          <h3 className="text-[22px] sm:text-[26px] font-medium text-[#1f4b43] leading-snug">
            Want to sell your <br /> home?
          </h3>
          <p className="mt-4 text-sm sm:text-base text-[#1f4b43] leading-relaxed">
            10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
          </p>
          <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-[#1f4b43] text-white rounded-xl hover:opacity-90 transition">
            Get Started
            <svg
              width={16}
              height={13}
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.17725 5.90824H13.1879L8.58883 1.529C8.34801 1.29967 8.33867 0.918689 8.56805 0.677939C8.79713 0.43749 9.17823 0.42786 9.41935 0.657175L14.6717 5.65876C14.8989 5.88626 15.0245 6.18841 15.0245 6.51011C15.0245 6.83151 14.8989 7.13396 14.6611 7.37139L9.41905 12.3628C9.30256 12.4737 9.15325 12.5288 9.00394 12.5288C8.845 12.5288 8.68606 12.4662 8.56775 12.342C8.33837 12.1013 8.34771 11.7206 8.58853 11.4913L13.2069 7.11199H1.17725C0.844915 7.11199 0.575195 6.84235 0.575195 6.51011C0.575195 6.17788 0.844915 5.90824 1.17725 5.90824Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <img
          src="/h48.png"
          alt="Banner Icon"
          className="absolute bottom-6 right-6 w-20 sm:w-[130px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CallToActionBanners;
