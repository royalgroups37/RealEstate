
import Header from '../components/Header';

import TopImagesection from '../components/TopImagesection';

import ThreeSteps from '../components/ThreeSteps';

import TrustSpace from '../components/TrustSpace';
import Featurescategory from '../components/Featurescategory';
import RecentProperties from '../components/RecentProperties';
import WorkWithus from '../components/WorkWithus';
import CustomerReview from '../components/CustomerReview';
import PropertiesByArea from '../components/PropertiesByArea';
import RecentArticles from '../components/RecentArticles';
import CallToActionBanners from '../components/CallToActionBanners';

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" h-full tracking-wide  bg-[#fdfbf7]" id="homeScreen">

      <Header />
      <TopImagesection />

      <TrustSpace />
      <ThreeSteps />


      <Featurescategory />
      <RecentProperties />
      <WorkWithus />
      <CustomerReview/>
      <PropertiesByArea/>
      <RecentArticles/>
      <CallToActionBanners/>
      <Footer />
    </div>
  );
}
