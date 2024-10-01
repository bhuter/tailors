import SlideShow from "../comps/effect/slideShow";
import About from "../comps/home/about";

export default function College() {
  return (
   <div>
    <head>
      <title>Home - Tailors Dream College</title>
    </head>
    <div className="slideshow">
      <SlideShow />
    </div>
    <div className="relative about z-40 w-[90%] mx-auto">
        <About />
    </div>
   </div>
  );
}