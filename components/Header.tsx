import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import cropped_logo from "../assets/unused_cropped_transparent.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-24 ${
        isScrolled ? "bg-lightGreen/90" : "bg-lightGreen"
      }  py-3 px-4 rounded-b-2xl fixed top-0 z-50 md:h-28 md:py-4`}
    >
      <div className="w-full mx-auto md:w-[90%] lg:w-[75%] xl:w-[1024px] flex items-center justify-between">
        <Link href="/">
          <Image
            src={cropped_logo}
            alt="Unused logo"
            className="w-36 cursor-pointer md:w-40"
          />
        </Link>
        <ul className="flex flex-row justify-around items-center space-x-6 mr-2 md:space-x-8">
          <Link href="/">
            <li className="font-serif font-semibold text-darkGreen tracking-widest text-lg cursor-pointer md:text-xl link-underline link-underline-black text-black">
              Home
            </li>
          </Link>
          <Link href="/products">
            <li className="font-serif font-semibold text-darkGreen tracking-widest text-lg cursor-pointer md:text-xl link-underline link-underline-black text-black">
              Products
            </li>
          </Link>
          <Link href="/about">
            <li className="font-serif font-semibold text-darkGreen tracking-widest text-lg cursor-pointer md:text-xl link-underline link-underline-black text-black">
              About
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
