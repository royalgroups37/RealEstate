'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaBath, FaBed, FaHeart, FaRulerCombined } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const properties = [
  {
    title: 'New Apartment Nice View',
    location: 'Gachibowli, Hyderabad',
    beds: 3,
    baths: 1,
    area: 460,
    price: '₹1,00,00,000',
    image: '/NiceView.png',
  },
  {
    title: 'Villa Garden With Pool',
    location: 'Gachibowli, Hyderabad',
    beds: 3,
    baths: 1,
    area: 350,
    price: '₹1,00,00,000',
    image: '/poolView.png',
  },
  {
    title: 'Ely Parkway Apartment',
    location: 'Gachibowli, Hyderabad',
    beds: 4,
    baths: 1,
    area: 560,
    price: '₹1,00,00,000',
    image: '/parkWay.png',
  },
  {
    title: 'Ely Parkway Apartment',
    location: 'Gachibowli, Hyderabad',
    beds: 4,
    baths: 1,
    area: 500,
    price: '₹1,00,00,000',
    image: '/parkWay.png',
  },
];

export default function RecentProperties() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
        Recent Properties for Rent
      </h2>
      <p className="text-center text-gray-500 mb-8">Lorem ipsum dolor sit amet</p>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-md m-5  bg-white">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">FOR RENT</span>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">FEATURED</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-700 mb-4 ">{property.title}</h3>
                <p className="text-sm text-gray-500">{property.location}</p>

                <div className="flex gap-4 text-sm text-gray-600 mt-3 mb-3 flex-wrap">
                  <span className="flex items-center gap-1 p-2  border border-gray-300 rounded-full"><FaBed /> {property.beds}</span>
                  <span className="flex items-center gap-1 p-2 border border-gray-300 rounded-full"><FaBath /> {property.baths}</span>
                  <span className="flex items-center gap-1 p-2 border border-gray-300 rounded-full"><FaRulerCombined /> {property.area}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-800 font-semibold">{property.price}</p>
                  <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
