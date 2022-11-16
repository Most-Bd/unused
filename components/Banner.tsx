import Image from "next/image";
import Link from "next/link";
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
    <div className="relative top-0 left-0 w-screen md:min-h-[90vh]">
      <Image
        src={bannerImage}
        alt="Banned image"
        fill={fill}
        priority
        className="object-cover rounded-b-2xl -z-10 max-h-[85vh]"
      />
      <div className="relative my-4 w-[90%] mx-auto md:top-[40vh] lg:w-[75%]">
        <h1 className="font-sans font-bold text-darkGreen tracking-wider leading-relaxed z-40 w-96 mx-auto text-center text-3xl md:mr-0 md:text-right md:text-4xl md:w-[28rem] lg:text-5xl lg:w-[46rem] lg:leading-relaxed">
          Brand new quality, with SECOND-HAND prices!!
          <div className="hidden md:block absolute w-96 h-24 bg-lightGreen/80 -z-10 rounded-[50%] top-0 right-8 scale-x-125 skew-y-[4deg] scale-y-150 drop-shadow-lg lg:w-[36rem] lg:h-[10rem] lg:right-2 lg:scale-y-[1.3]"></div>
        </h1>
      </div>
      <Link
        href={{
          pathname: "/products",
          query: {
            type: "all",
          },
        }}
        className="w-[90%] md:absolute md:top-[60vh] lg:top-[70vh]"
      >
        <button className="block font-sans rounded-2xl bg-lightGreen/80 p-4 mx-auto text-darkGreen text-center text-xl font-bold transition-all duration-300 md:text-2xl md:mr-0 lg:mr-28 hover:bg-lightGreen hover:scale-105">
          CHECK OUT OUR PRODUCTS
        </button>
      </Link>
    </div>
  );
};

export default Banner;
