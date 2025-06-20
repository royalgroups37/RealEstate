// components/DownloadsResources.js

const TrustSpace = () => (
  <div className="flex flex-col items-center justify-center w-full px-4 md:px-12 lg:px-[100px] py-16 bg-[#1f4b43]">
    <div className="flex flex-col items-center w-full max-w-[1440px] gap-6">
      <p className="text-center text-white text-xs sm:text-base md:text-sm">
        Thousands of the world’s leading companies trust Space
      </p>

      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 w-full">
        {[
          '/LinkBw1.png',
          '/LinkBw2.png',
          '/LinkBw-3.png',
          '/LinkBw-4.png',
          '/LinkBw5.png',
          '/LinkBw6.png',
        ].map((src, idx) => (
          <div key={idx} className="flex-1 min-w-[120px] max-w-[180px] flex justify-center">
            <img
              src={src}
              alt={`Logo ${idx + 1}`}
              className="w-full h-auto max-h-[25px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustSpace;
