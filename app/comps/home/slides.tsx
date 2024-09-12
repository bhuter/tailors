// pages/index.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const slides = [
  { image: '/imgs/cat/cat1.jpg', text: 'Handcrafted Baskets with a Touch of Tradition' },
  { image: '/imgs/cat/cat5.jpg', text: 'Discover the Elegance of Rwandan Fashion' },
  { image: '/imgs/cat/cat7.jpg', text: 'Learn the Art of Tailoring with Us' },
  { image: '/imgs/cat/cat20.jpg', text: 'Your Dream Turn True with Tailors Dream College' },
  
  // Add more slide objects as needed
];

const SlideShow: NextPage = () => {
  return (
    <div className="relative w-full h-max overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[80vh]"
        modules={[Autoplay, Pagination]} 
        speed={1000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-screen">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              width={1920} // Set the image width here
              height={1080} // Set the image height here
              className="w-[100%] h-full object-cover"
              style={{width: '100%', height: 'calc(92vh - 4rem)'} } // Adjust height based on needs
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <p className="text-white text-3xl text-center px-4 flex flex-col">{slide.text} <Link href="" className='px-4 py-[6px] mt-5 rounded-md m-auto text-[14px] text-nowrap bg-green-500 text-white w-min h-min'>Get Statred</Link></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #fff; /* Light color for inactive dots */
          border-radius: 50%;
          width: 10px; /* Size of the dot */
          height: 10px;
          transition: 0.7s;
          opacity: 0.8; /* Slightly transparent */
        }
        .swiper-pagination-bullet-active {
          background-color: #ff5722; /* Color for the active dot */
          opacity: 1; /* Fully opaque */
          width: 40px;
          border-radius: 10px;
        }
      `}</style>
    </div>
    
  );
};

export default SlideShow;
