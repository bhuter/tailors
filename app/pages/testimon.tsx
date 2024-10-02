"use client";

import Image from "next/image";
import { NextPage } from "next";

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: '/imgs/slides/s1.jpg', // Replace with the actual image path
    name: 'John Doe',
    role: 'CEO, Kamero Co. Ltd',
    text: 'Tailor’s Dream College gave me the confidence and skills to pursue my career. The hands-on experience was invaluable!',
  },
  {
    image: '/imgs/slides/s2.jpg', // Replace with the actual image path
    name: 'Jane Smith',
    role: 'Fashion Designer',
    text: 'The learning environment here is unparalleled. I’ve been able to turn my passion into a successful business.',
  },
  {
    image: '/imgs/slides/s3.jpg', // Replace with the actual image path
    name: 'Sam Wilson',
    role: 'Creative Director',
    text: 'From day one, I knew I was in the right place. The instructors were mentors, helping me shape my future.',
  },
  {
    image: '/imgs/slides/s4.jpg', // Replace with the actual image path
    name: 'Alice Johnson',
    role: 'Entrepreneur',
    text: 'The skills I gained here have allowed me to start my own tailoring business. I am forever grateful!',
  },
  {
    image: '/imgs/slides/s5.jpg', // Replace with the actual image path
    name: 'Mark Twain',
    role: 'Author',
    text: 'The experiences shared here are invaluable. It shaped my career and my life!',
  },
  {
    image: '/imgs/slides/s6.jpg', // Replace with the actual image path
    name: 'Laura Lee',
    role: 'Designer',
    text: 'The supportive community at Tailor’s Dream College made all the difference in my education.',
  },
  {
    image: '/imgs/slides/s7.jpg', // Replace with the actual image path
    name: 'Michael Brown',
    role: 'Business Owner',
    text: 'I learned practical skills that I could apply immediately in my career. Highly recommend!',
  },
  {
    image: '/imgs/slides/s8.jpg', // Replace with the actual image path
    name: 'Sarah Connor',
    role: 'Fashion Innovator',
    text: 'The mentorship here has been crucial to my development as a professional in the fashion industry.',
  },
  {
    image: '/imgs/slides/s2.jpg', // Replace with the actual image path
    name: 'Tom Hardy',
    role: 'Entrepreneur',
    text: 'A transformative experience that equipped me with the tools to succeed in my business endeavors.',
  },
];

const Testimonials: NextPage = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What People Are Saying</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <h4 className="text-sm text-orange-600 mb-4">{testimonial.role}</h4>
            <p className="text-sm text-gray-700 text-center">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
