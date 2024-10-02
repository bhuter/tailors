import Image from "next/image";

const Gallery = () => {
  const images = [
    "/imgs/slides/s1.jpg",
    "/imgs/slides/s2.jpg",
    "/imgs/slides/s3.jpg",
    "/imgs/slides/s4.jpg",
    "/imgs/slides/s5.jpg",
    "/imgs/slides/s6.jpg",
    "/imgs/slides/s7.jpg",
    "/imgs/slides/s8.jpg",
  ];

  return (
    <div className="relative bg-white py-16 px-5 md:px-10 lg:px-20 overflow-hidden">
      {/* Zigzag top border */}
      <div className="absolute top-0 left-0 w-full h-10 bg-red-200 zigzag"></div>
      
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-10">
        What Is Happing At College
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white"
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
      
      {/* Zigzag bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-red-200 zigzag rotate-180"></div>
    </div>
  );
};

export default Gallery;
