import Link from "next/link";

const Tabs = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-5">
        <Link href="" className="px-3 py-2 text-md text-slate-800 hover:text-orange-400 transition-colors duration-300">
          <span>Home</span>
        </Link>
        <Link href="" className="px-3 py-2 text-md text-slate-800 hover:text-orange-400 transition-colors duration-300 flex items-center">
          <span>Schools</span>
        </Link>
        <Link href="" className="px-3 py-2 text-md text-slate-800 hover:text-orange-400 transition-colors duration-300">
          <span>Plans & Calendar</span>
        </Link>
        <Link href="" className="px-3 py-2 text-md text-slate-800 hover:text-orange-400 transition-colors duration-300">
          <span>Testimonials</span>
        </Link>
        <Link href="" className="px-3 py-2 text-md text-slate-800 hover:text-orange-400 transition-colors duration-300">
          <span>Contact Us</span>
        </Link>
      </div>
      <div className="auth ml-6 mt-6 md:mt-0 md:ml-6">
        <Link
          href=""
          className="bg-orange-500 py-2 px-5 rounded text-white hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
