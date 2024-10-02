"use client";

import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { NextPage } from 'next';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: '/imgs/testmonials/t2.jpg', // Replace with the actual image path
    name: 'John Doe',
    role: 'Graduated Student',
    text: 'Tailors Dream College gave me the confidence and skills to pursue my career. The hands-on experience was invaluable!',
  },
  {
    image: '/imgs/testmonials/t1.jpg', // Replace with the actual image path
    name: 'Jane Smith',
    role: 'Fashion Designer',
    text: "The learning environment here is unparalleled. I've been able to turn my passion into a successful business.",
  },
  {
    image: '/imgs/testmonials/t2.jpg', // Replace with the actual image path
    name: 'Sam Wilson',
    role: 'Creative Director',
    text: 'From day one, I knew I was in the right place. The instructors were mentors, helping me shape my future.',
  },
  {
    image: '/imgs/testmonials/t1.jpg', // Replace with the actual image path
    name: 'Joseph Reveur',
    role: 'Full-stack Developer',
    text: "Working with BIA - Tailor's dream college is the good choice ever. Helped me to shape my future.",
  },
];

const Testimonials: NextPage = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What People Are Saying</h2>

      {/* Swiper Component */}
      <Swiper
        spaceBetween={20} // Spacing between slides
        slidesPerView={1} // Change based on screen size
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        className="w-[80%] mx-auto"
        speed={2000}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {/* Image Container */}
            <div className="flex justify-center items-center w-24 h-24 mb-3 mx-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-[100px] h-[100px] object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <h4 className="text-sm text-orange-600 mb-4">{testimonial.role}</h4>
            <p className="text-sm text-gray-700 text-center">{testimonial.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
