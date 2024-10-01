const About = () => {
    return (
      <div className="flex flex-col-reverse sm:flex-row mt-[-70px] justify-between w-full sm:w-[90%] mx-auto">
        {/* Left Section */}
        <div className="bg-white rounded-lg shadow-md sm:w-[50%] w-full p-6 sm:p-10 mt-6 sm:mt-0 mx-0 sm:mx-4">
          <h1 className="text-orange-600 text-lg text-center">
            Together We Can Prosper
          </h1>
          <p className="py-2 leading-7 text-sm text-sky-900 text-center">
            <div className="mt-2 py-2">
              "Welcome to Tailor's Dream College, where creativity meets
              craftsmanship! Founded in 2023 by BIA - The African Touch, our
              school is dedicated to empowering the Rwandan community by
              transforming the art of tailoring into a global skill. Our mission
              is simple: to help every Rwandan discover their potential, enhance
              their career opportunities, and master the beautiful craft of
              clothing and design.
            </div>
            <div className="mt-2 py-2">
              From clothes to shoes, baskets, and more, we're here to inspire a
              new wave of local production, proudly made in Rwanda. At Tailor's
              Dream College, we offer dynamic, hands-on learning that prepares our
              students to compete confidently on the world stage.
            </div>
            <div className="mt-2 py-2">
              In just a few months, you'll be amazed by the skills you develop,
              and we guarantee you'll leave as a competent, globally-minded
              professional. Joining our college is the best decision you'll ever
              make!"
            </div>
            <div className="mt-2 py-2 text-start">- Gisele</div>
          </p>
        </div>
  
        {/* Right Section */}
        <div className="flex flex-col h-min justify-center items-center bg-white rounded-lg shadow-md sm:w-[40%] w-full p-6 sm:p-10 py-10 sm:py-20 mt-6 sm:mt-0 mx-0 sm:mx-4 hover:shadow-2xl hover:cursor-pointer transition-shadow duration-300">
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
            <img
              src="/imgs/slides/s5.jpg"
              alt="Gisele Umutoni"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h4 className="text-2xl py-3 text-sky-800 text-center">
            Miss Gisele Umutoni
          </h4>
          <h5 className="text-sm text-center">CEO, CO - FOUNDER OF BIA</h5>
        </div>
      </div>
    );
  };
  
  export default About;
  