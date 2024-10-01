import SlideShow from "../comps/effect/slideShow";
import About from "../comps/home/about";
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
    <div className="relative z-40 mx-auto">
        <About />
    </div>
    <div className="my-5">
      <WhyChooseUS />
    </div>
   </div>
  );
}