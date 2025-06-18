import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaVolumeUp, FaDatabase, FaChartBar, FaChartPie, FaHome, FaKey, FaTools, FaChartLine } from 'react-icons/fa';
export default function Services() {
  const services = [
    {
      title: "Find Your Dream Home",
      icon: FaHome,
    },
    {
      title: "Unlock Property Value",
      icon: FaKey,
    },
    {
      title: "Effortless Property Management",
      icon: FaTools,
    },
    {
      title: "Smart Investments, Informed Decisions",
      icon: FaChartLine,
    },
  ];
  return (
    <div className="bg-white">
      <Header />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="mb-10">
          <p className="text-3xl sm:text-4xl lg:text-5xl  text-[#2c2c2c]">
            Elevate Your Real Estate Experience
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#999] max-w-4xl">
            Welcome, where your real estate aspirations meet expert guidance. Explore our comprehensive
            range of services, each designed to cater to your unique needs and dreams.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
          
             <div
              key={index}
              className="flex flex-col items-center gap-5 px-6 py-10 border border-gray-400 rounded-xl"
            >
              {/* You can add icons inside this div */}
              <div className="flex items-center justify-center w-16 h-16  rounded-full text-2xl">
             <service.icon className="text-[#1F4B43] text-3xl" />
              </div>
              <p className="text-center text-lg  text-[#2c2c2c]">
                {service.title}
              </p>
            </div>
          ))}
         
        </div>
      </div>


      <div className="flex flex-col justify-start items-start mb-10 w-full max-w-[1440px] gap-12 px-6 md:px-12 lg:px-[100px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-4 max-w-[940px]">
          <p className="text-3xl md:text-5xl  text-[#2c2c2c]">
            Unlock Property Value
          </p>
          <p className="text-base md:text-lg font-medium text-[#999]">
            Selling your property should be a rewarding experience, and at Our Website, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="flex flex-col gap-8 w-full">
          {/* First Row */}
          <div className="flex flex-wrap gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full md:w-[48%] lg:w-[32%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaChartBar className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Valuation Mastery</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Discover the true worth of your property with our expert valuation services.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full md:w-[48%] lg:w-[32%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaChartPie className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Strategic Marketing</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Selling a property requires more than just a listing; it demands a strategic marketing approach.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full md:w-[48%] lg:w-[32%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaDatabase className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Negotiation Wizardry</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Negotiating the best deal is an art, and our negotiation experts are masters of it.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Card 4 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full lg:w-[50%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaVolumeUp className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Closing Success</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                A successful sale is not complete until the closing. We guide you through the intricate closing process.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col gap-6 p-6 rounded-xl bg-[#1f4b43] border border-neutral-800 w-full lg:w-[50%]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-2xl md:text-3xl text-white max-w-[437px]">
                  Unlock the Value of Your Property Today
                </p>

              </div>
              <p className="text-base font-medium text-[#ccc]">
                Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start mb-10 w-full max-w-[1440px] gap-12 px-6 md:px-12 lg:px-[100px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-4 max-w-[940px]">
          <p className="text-3xl md:text-5xl  text-[#2c2c2c]">
            Effortless Property Management
          </p>
          <p className="text-base md:text-lg font-medium text-[#999]">
            Owning a property should be a pleasure, not a hassle. Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you          </p>
        </div>

        {/* Grid Cards */}
        <div className="flex flex-col gap-8 w-full">
          {/* First Row */}
          <div className="flex flex-wrap gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full md:w-[48%] lg:w-[32%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaChartBar className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Tenant Harmony</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full md:w-[48%] lg:w-[32%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaChartPie className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Maintenance Ease</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full md:w-[48%] lg:w-[32%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaDatabase className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Legal Guardian</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Stay compliant with property laws and regulations effortlessly.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Card 4 */}
            <div className="flex flex-col gap-6 p-6 rounded-xl border border-neutral-800 w-full lg:w-[50%]">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-full bg-white">
                  <FaVolumeUp className="text-[#1F4B43] text-3xl" />
                </div>
                <p className="text-2xl  text-[#2c2c2c]">Financial Peace of Mind</p>
              </div>
              <p className="text-base font-medium text-[#999]">
                Managing property finances can be complex. Our financial experts take care of rent collection
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col gap-6 p-6 rounded-xl bg-[#1f4b43] border border-neutral-800 w-full lg:w-[50%]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-2xl md:text-3xl text-white max-w-[437px]">
                  Experience Effortless Property Management
                </p>

              </div>
              <p className="text-base font-medium text-[#ccc]">
                Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
