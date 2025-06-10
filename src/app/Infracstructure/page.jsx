import Header from '../components/Header';

import Footer from '../components/Footer';

export default function InfrastructurePage() {

  const facilities = [
    {
      icon: "🏫",
      title: "Classroom Learning at Our School",
      description:
        "Our classrooms are vibrant, tech-enabled spaces designed for student-centric learning. With ergonomic furniture, natural lighting, and digital teaching aids, we ensure a productive and safe learning atmosphere.",
    },
    {
      icon: "💻",
      title: "Computer Lab at Our School",
      description:
        "Our computer lab features high-performance PCs, high-speed internet, and the latest software, enabling students to develop digital literacy, coding skills, and more.",
    },
    {
      icon: "🧪",
      title: "Science Lab at Our School",
      description:
        "Our lab is fully equipped for Physics, Chemistry, and Biology experiments. Students learn through hands-on exploration, enhancing conceptual clarity.",
    },
    {
      icon: "🏅",
      title: "Sports at Our School",
      description:
        "We offer various sports programs and physical activities, promoting fitness, teamwork, and discipline. Facilities include courts, tracks, and indoor play areas.",
    },
    {
      icon: "🎭",
      title: "Cultural Activities at Our School",
      description:
        "Our cultural activities foster creativity and expression through music, dance, arts, and drama, building confidence and team spirit.",
    },
    {
      icon: "🚌",
      title: "Transport Facility at Our School",
      description:
        "Our school operates a safe and efficient transport service with GPS-enabled buses and experienced staff, ensuring convenience and security.",
    },
  ];

  return (
    <div className="">
      <Header />

      <div className=" h-full tracking-wide  bg-white max-w-8xl mx-auto px-4 py-12">

        <img
          src="/SCHOOLIMAGE.png"
          alt="School Building"
          className="w-full rounded-lg mb-10"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-700">
          Infrastructure and Facilities
        </h2>

        <div className="space-y-10 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/HOMEPAGEINTRODUCTIONSECTIONIMAGEpng.png"
                alt={facility.title}
                className="w-full md:w-64 h-50 object-cover rounded-md shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">
                  {facility.icon} {facility.title}
                </h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
                        <Footer/>

    </div>

  );
}
