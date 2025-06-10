// import { redirect } from 'next/navigation';

// export default function Home() {
//   redirect('/HomeScreen');
// }
import Header from '../components/Header';

import ImageCarousel from '../components/BannerCarousel';

// import Header from './components/Header';

import Gallery from '../components/Gallery';
import OurLeaders from '../components/OurLeaders';
import Testimonials from '../components/Testimonials';
import EducationProcess from "../components/EducationProcess";
import DownloadsResources from "../components/DownloadsResources";
import AlumniStudents from "../components/AlumniStudents";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" h-full tracking-wide  bg-[#fdfbf7]" id="homeScreen">

      <Header />

      <ImageCarousel />
      <section className=" max-w-7xl mx-auto px-4 sm:px-4 lg:px-10 flex flex-col md:flex-row items-center p-6 text-black">
        <img src="/HOMEPAGEINTRODUCTIONSECTIONIMAGEpng.png" className=" h-80 md:w-1/2 rounded" />
        <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
          <h2 className="text-2xl font-bold  text-gray-800">Where Dreams Begin and Leaders Rise</h2>
          <p className="mt-6 text-justify leading-loose">At our school, we believe every child holds the potential to dream big and achieve greatness. We nurture curiosity, creativity, and confidence in a safe and inspiring environment. Our vision is to build strong foundations where academic excellence and character go hand in hand. By fostering leadership, empathy, and innovation, we prepare students for a changing world. Here, every child is encouraged to rise beyond limits and lead with purpose. This is where dreams take flight — and tomorrow’s leaders are born.</p>
        </div>
      </section>
      <Gallery />

      <section className="p-6">
        <img src="/HOMEPAGEINTRODUCTIONBANNER.png" className="w-full rounded" />
      </section>

      <OurLeaders />
      <section className="p-6">
        <img src="/SCHOOLSTATSIMAGE.png" className="w-full rounded" />
      </section>
      <Testimonials />
      <EducationProcess />
      <DownloadsResources />
      <AlumniStudents />
      {/* Components */}


      <Footer />
    </div>
  );
}
