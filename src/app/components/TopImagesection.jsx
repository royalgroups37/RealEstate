// components/DownloadsResources.js

const TopImagesection = () => (
    <div className="relative w-full h-[726px] overflow-hidden">
  {/* Background Image */}
  <img
    src="/div.elementor-element.png"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  />

  {/* Content */}
  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-[690px] px-4 flex flex-col items-center gap-10 md:gap-[35px]">
    {/* Tagline + Subtitle */}
    <div className="flex flex-col items-center gap-4 md:gap-[19px]">
      <div className="px-6 py-2 rounded-full border border-[#1f4b43]">
        <p className="text-[12px] md:text-[13px] font-medium text-center text-[#1f4b43]">
          LET US GUIDE YOUR HOME
        </p>
      </div>
      <p className="text-sm md:text-base text-center text-[#1f4b43]">
        We’ve more than 745,000 apartments, place &amp; plot.
      </p>
    </div>

    {/* Main Heading */}
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[#1f4b43] leading-tight">
      Find Your Perfect Home
    </p>

    {/* Search Section */}
    <div className="flex flex-col items-center gap-10 w-full">
      {/* Search Box */}
      <div className="w-full p-6 rounded-[40px] bg-white border border-[#ebebeb] shadow-[0px_6px_15px_0_rgba(64,79,104,0.06)]">
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-[17px] text-[#1f4b43]">
            Enter Name, Keywords...
          </p>
          {/* Search Icon */}
          <svg
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M19.8 19.0667L14.8667 14.2..."
                fill="#1F4B43"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={20} height={20} fill="white" transform="matrix(1 0 0 -1 0 20.4)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Property Filters */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[320px]">
        <p className="text-sm md:text-base font-medium text-center text-[#1f4b43]">
          Explore all things property
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["All Properties", "For Sale", "For Rent"].map((item) => (
            <div
              key={item}
              className="px-4 py-1.5 rounded-full bg-white border border-[#ebebeb] text-[12px] md:text-[13px] text-[#1f4b43] text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

);

export default TopImagesection;
