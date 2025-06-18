

const Featurescategory = () => (
  <div className="w-full px-4 py-10 bg-[#f9f9f9] flex flex-col items-center gap-10">
  {/* Heading */}
  <div className="text-center max-w-md">
    <p className="text-2xl md:text-4xl font-medium text-[#1f4b43]">
      Featured Categories
    </p>
    <p className="mt-2 text-sm md:text-base text-[#1f4b43]">
      Lorem ipsum dolor sit amet
    </p>
  </div>

  {/* Cards */}
  <div className="flex flex-wrap justify-center gap-6 max-w-[1240px] w-full">
    {/* Card 1 */}
    <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
      <img
        src="/modern-villa.png"
        alt="Modern Villa"
        className="w-[60px] h-[60px] object-contain"
      />
      <div>
        <p className="text-[19px] font-medium text-[#1f4b43]">Modern Villa</p>
        <p className="text-[13px] text-[#1f4b43]">10 Properties</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
      <img
        src="/apartment.png"
        alt="Apartment"
        className="w-[60px] h-[60px] object-contain"
      />
      <div>
        <p className="text-[19px] font-medium text-[#1f4b43]">Apartment</p>
        <p className="text-[13px] text-[#1f4b43]">3 Properties</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
      <img
        src="/office.png"
        alt="Office"
        className="w-[60px] h-[60px] object-contain"
      />
      <div>
        <p className="text-[19px] font-medium text-[#1f4b43]">Office</p>
        <p className="text-[13px] text-[#1f4b43]">3 Properties</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
      <img
        src="/single-family.png"
        alt="Single Family"
        className="w-[60px] h-[60px] object-contain"
      />
      <div>
        <p className="text-[19px] font-medium text-[#1f4b43]">Single Family</p>
        <p className="text-[13px] text-[#1f4b43]">5 Properties</p>
      </div>
    </div>
  </div>
</div>

);

export default Featurescategory;
