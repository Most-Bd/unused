import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import cropped_logo from "../assets/unused_cropped_transparent.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`w-full h-20 ${
        isScrolled ? "bg-lightGreen/90" : "bg-lightGreen"
      }  py-3 px-4 rounded-b-2xl fixed top-0 z-50 md:h-28 md:py-4`}
    >
      <div className="w-full mx-auto md:w-[90%] lg:w-[75%] xl:w-[1080px] flex items-center justify-between">
        <Link href="/">
          <Image
            src={cropped_logo}
            alt="Unused logo"
            className="w-28 cursor-pointer md:w-40"
          />
        </Link>
        <div
          className="space-y-1.5 transition-all duration-500 ease-in-out md:hidden cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-8 h-1 bg-darkGreen rounded-lg transition-all duration-500 ease-in-out ${
              menuOpen ? "-rotate-45 translate-y-2.5" : "rotate-0"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-darkGreen rounded-lg transition-all duration-500 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-darkGreen rounded-lg transition-all duration-500 ease-in-out ${
              menuOpen ? "rotate-45 -translate-y-2.5" : "rotate-0"
            }`}
          ></span>
        </div>
        <ul className="hidden flex-row justify-around items-center space-x-6 mr-2 md:flex md:space-x-8">
          <Link href="/">
            <li className="font-serif font-semibold text-darkGreen tracking-widest text-lg cursor-pointer md:text-xl link-underline link-underline-black text-black">
              Home
            </li>
          </Link>
          <Link
            href={{
              pathname: "/products",
              query: {
                type: "all",
              },
            }}
            as="/products?type=all"
          >
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
