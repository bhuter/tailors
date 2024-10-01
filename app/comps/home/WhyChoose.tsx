import Image from "next/image";

const WhyChooseUS = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Overlay Section */}
      <div className="absolute z-30 w-full h-full flex flex-col text-center bg-opacity-60 bg-sky-600 text-white py-5">
        <div className="text-2xl font-semibold my-5">Why Choose Us?</div>
        <div className="flex flex-wrap justify-center py-5 px-4">
          {/* Individual Boxes */}
          <div className="w-full sm:w-48 md:w-1/4 shadow-sm mx-2 my-4 flex flex-col items-center p-4">
            <i className="bi bi-globe text-5xl text-white"></i>
            <p className="mt-4 text-center">
              We are a National School with more than 1 nationality represented.
            </p>
          </div>
          <div className="w-full sm:w-48 md:w-1/4 shadow-sm mx-2 my-4 flex flex-col items-center p-4">
            <i className="bi bi-clipboard text-5xl text-white"></i>
            <p className="mt-4 text-center">
              Our curriculum includes practical and theoretical training.
            </p>
          </div>
          <div className="w-full sm:w-48 md:w-1/4 shadow-sm mx-2 my-4 flex flex-col items-center p-4">
            <i className="bi bi-people text-5xl text-white"></i>
            <p className="mt-4 text-center">
              We have experienced instructors from diverse backgrounds.
            </p>
          </div>
          <div className="w-full sm:w-48 md:w-1/4 shadow-sm mx-2 my-4 flex flex-col items-center p-4">
            <i className="bi bi-trophy text-5xl text-white"></i>
            <p className="mt-4 text-center">
              Our alumni have succeeded in various industries globally.
            </p>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div className="w-full h-[150vh] sm:h-[90vh] md:h-[70vh] lg:h-[80vh]">
        <div className="relative w-full h-full">
          <Image
            src="/imgs/slides/s4.jpg"
            alt="Tailors"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
