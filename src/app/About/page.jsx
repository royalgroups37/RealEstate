import React from 'react';
import { FaHandshake, FaAward, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { FaHandPeace, FaLinkedinIn } from 'react-icons/fa';



import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
  {
    name: 'Max Mitchell',
    role: 'Founder',
    image: '/Team-1.png',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Real Estate Officer',
    image: '/Team-2.png',
  },
  {
    name: 'David Brown',
    role: 'Head of Property Management',
    image: '/Team-3.png',
  },
  {
    name: 'Michael Turner',
    role: 'Legal Counsel',
    image: '/Team-4.png',
  },
];
  return (
    <div className="min-h-screen bg-white tracking-wide">
      <Header />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-semibold text-[#1f4b43]">
              Our Journey
            </h2>
            <p className="text-base md:text-lg font-medium text-[#999]">
              Our story is one of continuous growth and evolution. We started as a small team with big
              dreams, determined to create a real estate platform that transcended the ordinary. Over the
              years, we've expanded our reach, forged valuable partnerships, and gained the trust of
              countless clients.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="bg-[#1f4b43] border border-[#1f4b43] text-[#f4f4f4] rounded-xl p-6 w-full sm:w-1/3">
              <p className="text-3xl md:text-4xl font-bold">200+</p>
              <p className="text-[#999] text-base md:text-lg">Happy Customers</p>
            </div>
            <div className="bg-[#1f4b43] border border-[#1f4b43] text-[#f4f4f4] rounded-xl p-6 w-full sm:w-1/3">
              <p className="text-3xl md:text-4xl font-bold">10k+</p>
              <p className="text-[#999] text-base md:text-lg">Properties For Clients</p>
            </div>
            <div className="bg-[#1f4b43] border border-[#1f4b43] text-[#f4f4f4] rounded-xl p-6 w-full sm:w-1/3">
              <p className="text-3xl md:text-4xl font-bold">16+</p>
              <p className="text-[#999] text-base md:text-lg">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-72 md:h-[386px] rounded-xl overflow-hidden ">
            <img
              src="/SubContainer.png"
              alt="About"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-start">
          {/* Left Content */}
          <div className="w-full md:w-1/4 space-y-4 p-8">
            <h2 className="text-4xl font-semibold text-[#1f4b43]">Our Values</h2>
            <p className="text-[#1f4b43] font-medium text-base leading-loose">
              Our story is one of continuous growth and evolution. We started as a small team with big
              dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-3/4 flex flex-col gap-8 ">
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row gap-6 ">
              {/* Trust */}
              <div className="flex flex-col gap-3  w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full border border-[#1f4b43] text-[#1f4b43] text-2xl">
                    🌟
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1f4b43]">Trust</h3>
                </div>
                <p className="text-[#1f4b43] text-base font-medium">
                  Trust is the cornerstone of every successful real estate transaction.
                </p>
              </div>

              {/* Excellence */}
              <div className="flex flex-col gap-3   border-l-2 pl-4  border-[#1f4b43]  w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full border border-[#1f4b43] text-[#1f4b43] text-2xl">
                    🏆
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1f4b43]">Excellence</h3>
                </div>
                <p className="text-[#1f4b43] text-base font-medium">
                  We set the bar high for ourselves. From the properties we list to the services we provide.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row gap-6 border-t-2 py-5  border-[#1f4b43]">
              {/* Client-Centric */}
              <div className="flex flex-col gap-3    w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full border border-[#1f4b43] text-[#1f4b43] text-2xl">
                    👥
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1f4b43]">Client-Centric</h3>
                </div>
                <p className="text-[#1f4b43] text-base font-medium">
                  Your dreams and needs are at the center of our universe. We listen, understand.
                </p>
              </div>

              {/* Our Commitment */}
              <div className="flex flex-col gap-3   border-l-2 pl-4  border-[#1f4b43] w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full border border-[#1f4b43] text-[#1f4b43] text-2xl">
                    🤝
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1f4b43]">Our Commitment</h3>
                </div>
                <p className="text-[#1f4b43] text-base font-medium">
                  We are dedicated to providing you with the highest level of service, professionalism, and
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full max-w-[1440px] mx-auto px-4 md:px-[100px] py-[50px]">
        {/* Header Text Section */}
        <div className="flex flex-col justify-start items-start w-full lg:max-w-[1240px] gap-3.5 lg:pr-[300px]">
          <p className="text-4xl md:text-5xl font-semibold text-left text-[#1f4b43]">
            Our Achievements
          </p>
          <p className="text-base md:text-lg font-medium text-left text-[#1f4b43]">
            Our story is one of continuous growth and evolution. We started as a small team with big
            dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:max-w-[1240px] gap-6 mt-10">
          {/* Card 1 */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[400px] gap-[30px] p-6 md:p-[50px] rounded-xl">
            <p className="text-xl md:text-[25px] font-semibold text-left text-[#1f4b43]">
              3+ Years of Excellence
            </p>
            <p className="text-base md:text-lg font-medium text-left text-[#1f4b43]">
              With over 3 years in the industry, we've amassed a wealth of knowledge and experience,
              becoming a go-to resource for all things real estate.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[400px] gap-[30px] p-6 md:p-[50px] rounded-xl">
            <p className="text-xl md:text-[25px] font-semibold text-left text-[#1f4b43]">
              Happy Clients
            </p>
            <p className="text-base md:text-lg font-medium text-left text-[#1f4b43]">
              Our greatest achievement is the satisfaction of our clients. Their success stories fuel our
              passion for what we do.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[400px] gap-[30px] p-6 md:p-[50px] rounded-xl">
            <p className="text-xl md:text-[25px] font-semibold text-left text-[#1f4b43]">
              Industry Recognition
            </p>
            <p className="text-base md:text-lg font-medium text-left text-[#1f4b43]">
              We've earned the respect of our peers and industry leaders, with accolades and awards that
              reflect our commitment to excellence.
            </p>
          </div>
        </div>
      </div>

   
    <div className="flex flex-col items-center w-full px-6 py-10 md:px-20 lg:px-[100px] bg-white">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1f4b43] mb-4">
          Meet the Team
        </h2>
        <p className="text-lg text-[#999] font-medium">
          Our success is driven by the dedication and expertise of our team. Get to know the people
          behind our mission to make your real estate dreams a reality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-md p-5">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[250px] object-cover rounded-xl mb-6"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#1f4b43]">{member.name}</h3>
              <p className="text-[#999] text-lg font-medium">{member.role}</p>
            </div>
            <div className="mt-6 flex items-center justify-between w-full px-4 py-3 border border-[#f4f4f4] rounded-full">
              <p className="text-[#1f4b43] text-lg font-medium">Say Hello 👋</p>
              <div className="bg-[#1f4b43] p-2.5 rounded-full text-white">
                <FaLinkedinIn className="text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default About;
