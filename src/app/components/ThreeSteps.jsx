// components/DownloadsResources.js

const ThreeSteps = () => (
 <div className="w-full px-4 py-10 flex flex-col items-center gap-10">
  {/* Heading */}
  <div className="text-center max-w-3xl">
    <p className="text-2xl md:text-4xl font-semibold text-[#1f4b43]">
      Find Your Dream House as Easy as 1, 2, 3
    </p>
    <p className="mt-2 text-sm md:text-base text-[#1f4b43]">
      Lorem ipsum dolor sit amet
    </p>
  </div>

  {/* Steps */}
  <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full max-w-[1240px]">
    {/* Step 1 */}
    <div className="flex flex-col items-center max-w-sm gap-6 text-center">
      <img src="/h41.png.png" alt="Step 1" className="w-[200px] h-[155px] object-contain" />
      <div className="space-y-3">
        <p className="text-lg md:text-xl font-medium text-[#1f4b43] leading-snug">
          1. Search for your favorite house in<br />your location
        </p>
        <p className="text-sm text-[#757272]">
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center max-w-sm gap-6 text-center">
      <img src="/h42.png.png" alt="Step 2" className="w-[200px] h-[155px] object-contain" />
      <div className="space-y-3">
        <p className="text-lg md:text-xl font-medium text-[#1f4b43] leading-snug">
          2. Make a visit appointment with<br />one of our agents
        </p>
        <p className="text-sm text-[#757272]">
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center max-w-sm gap-6 text-center">
      <img src="/h43.png.png" alt="Step 3" className="w-[200px] h-[155px] object-contain" />
      <div className="space-y-3">
        <p className="text-lg md:text-xl font-medium text-[#1f4b43] leading-snug">
          3. Get your dream house in a<br />month, or less
        </p>
        <p className="text-sm text-[#757272]">
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</div>

);

export default ThreeSteps;
