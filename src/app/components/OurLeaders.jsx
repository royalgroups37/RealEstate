const leaders = [
  { name: 'MD - Name1', role: 'Chairman', img: '/PROFILEIAMGE.png' },
  { name: 'MD - Name2', role: 'Principal', img: '/PROFILEIAMGE.png' },
  { name: 'MD - Name3', role: 'Vice Principal', img: '/PROFILEIAMGE.png' }
];

const OurLeaders = () => (
  <section className="p-6 text-black">

    <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 gap-10 py-10">
      <p className="text-[32px] md:text-[40px] font-semibold text-center text-[#212121] w-full">
        OUR LEADERS
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {[
          { name: "MR . Vamsi", role: "Chairman & Founder" },
          { name: "MR . VAMSI", role: "Director" },
          { name: "MR . VAMSI", role: "Principal" },
        ].map((leader, idx) => (
          <div key={idx} className="flex flex-col items-center gap-5 w-full sm:w-[300px]">
            <img
              src="/PROFILEIAMGE.png"
              alt={leader.name}
              className="w-full h-[400px] object-cover rounded shadow-md"
            />
            <div className="flex flex-col items-center gap-1">
              <p className="text-xl md:text-2xl font-semibold text-center text-[#212121]">
                {leader.name}
              </p>
              <p className="text-lg md:text-xl font-semibold text-center text-[#212121]">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>


  </section>

);

export default OurLeaders;
