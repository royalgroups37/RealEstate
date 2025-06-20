import { MdHouse } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';
import { TbHomeEco } from 'react-icons/tb';

const Featurescategory = () => (
  <div className="w-full px-4 py-10 bg-gray-100 flex flex-col items-center gap-10">
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
    <div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">
      {/* Card 1 - Modern Villa */}
      <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
        <MdHouse size={60} className="text-[#1f4b43]" />
        <div>
          <p className="text-[19px] font-medium text-[#1f4b43]">Modern Villa</p>
          <p className="text-[13px] text-[#1f4b43]">10 Properties</p>
        </div>
      </div>

      {/* Card 2 - Apartment */}
      <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
        <FaBuilding size={60} className="text-[#1f4b43]" />
        <div>
          <p className="text-[19px] font-medium text-[#1f4b43]">Apartment</p>
          <p className="text-[13px] text-[#1f4b43]">3 Properties</p>
        </div>
      </div>

      {/* Card 3 - Office */}
      <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
        <HiOfficeBuilding size={60} className="text-[#1f4b43]" />
        <div>
          <p className="text-[19px] font-medium text-[#1f4b43]">Office</p>
          <p className="text-[13px] text-[#1f4b43]">3 Properties</p>
        </div>
      </div>

      {/* Card 4 - Single Family */}
      <div className="flex items-center gap-4 w-full sm:w-[300px] h-[122px] bg-white border border-[#e9e9e9] rounded-2xl px-4 py-2">
        <TbHomeEco size={60} className="text-[#1f4b43]" />
        <div>
          <p className="text-[19px] font-medium text-[#1f4b43]">Single Family</p>
          <p className="text-[13px] text-[#1f4b43]">5 Properties</p>
        </div>
      </div>
    </div>
  </div>
);

export default Featurescategory;
