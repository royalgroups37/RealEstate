// src/components/ImageCarousel.jsx
'use client'; // Only needed if used in Next.js Server Components (like app directory)

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    '/SCHOOLBANNERHOMEPAGEBANNER.png',
    '/SCHOOLBANNERHOMEPAGEBANNER.png',
    '/SCHOOLBANNERHOMEPAGEBANNER.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full mx-auto my-10">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
