import Image from "next/image";
import { useEffect, useState } from "react";
import bannerImage from "../assets/prudence-earl-8F0I12ypHPA-unsplash.jpg";

const Banner = () => {
  const [fill, setFill] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setFill(false);
      } else {
        setFill(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-0 left-0 min-h-[90vh] w-screen">
      <Image
        src={bannerImage}
        alt="Banned image"
        fill={fill}
        className="object-cover rounded-b-2xl -z-10"
      />
      <div className="relative my-4 w-[90%] mx-auto md:top-[30vh] lg:w-[75%]">
        <h1 className="font-sans font-bold text-darkGreen tracking-wider leading-relaxed z-40 w-96 mx-auto text-center text-3xl md:mr-0 md:text-right md:text-4xl md:w-[28rem] lg:text-5xl lg:w-[46rem] lg:leading-relaxed">
          Brand new quality, with SECOND-HAND prices!!
          <div className="hidden md:block absolute w-96 h-24 bg-lightGreen/80 -z-10 rounded-[50%] top-0 right-8 scale-x-125 skew-y-[4deg] scale-y-150 drop-shadow-lg lg:w-[36rem] lg:h-[10rem] lg:right-2 lg:scale-y-[1.3]"></div>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
