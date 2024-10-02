import SlideShow from "../comps/effect/slideShow";
import About from "../comps/home/about";
import Gallery from "../comps/home/Gallery";
import Testimonials from "../comps/home/Testimonials";
import Updates from "../comps/home/UpdatesCount";
import WhyChooseUS from "../comps/home/WhyChoose";

export default function College() {
  return (
   <div>
    <head>
      <title>Home - Tailors Dream College</title>
    </head>
    <div className="slideshow">
      <SlideShow />
    </div>
    <div className="relative z-40 w-[96%] mx-auto">
        <About />
    </div>
    <div className="my-5">
      <WhyChooseUS />
    </div>
    <div className="my-6">
      <Gallery />
    </div>
    <div className="updates">
      <Updates />
    </div>
    <div className="testmonials">
      <Testimonials />
    </div>
   </div>
  );
}