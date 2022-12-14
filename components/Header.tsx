import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import cropped_logo from "../assets/unused_cropped_transparent.png";
import { categoryTypeState } from "../utils/recoilAtom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryType, setCategoryType] = useRecoilState(categoryTypeState);
  const router = useRouter();

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

  const handleClick = () => {
    setCategoryType("all");
    setMenuOpen((prev) => !prev);
    router.push("/products");
  };

  return (
    <header
      className={`w-full h-20 ${
        isScrolled ? "bg-lightGreen/90" : "bg-lightGreen"
      }  py-3 px-4 rounded-b-2xl fixed top-0 z-40 md:h-28 md:py-4`}
    >
      <div className="w-full mx-auto md:w-[90%] lg:w-[75%] xl:w-[1080px] flex items-center justify-between">
        <Link href="/">
          <Image
            src={cropped_logo}
            alt="Unused logo"
            className="w-28 cursor-pointer md:w-40"
          />
        </Link>
        <div className="h-10 p-1 md:hidden">
          {/* Menu for small screens */}
          <div
            className={`fixed h-screen z-50 flex justify-end bg-darkGreen/50 w-screen transition-all duration-1000 ease-in-out ${
              menuOpen ? "right-0 opacity-100" : "-right-[100vw] opacity-0"
            }  top-20 md:hidden`}
          >
            <ul className="flex-col items-center h-screen bg-lightGreen rounded-l-2xl pt-4 pr-10 pl-12">
              <Link href="/">
                <li
                  className="font-serif font-semibold text-darkGreen tracking-widest text-xl cursor-pointer link-underline link-underline-black"
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  Home
                </li>
              </Link>
              <div onClick={handleClick}>
                <li className="font-serif font-semibold text-darkGreen tracking-widest text-xl cursor-pointer link-underline link-underline-black mt-6">
                  Products
                </li>
              </div>
              <Link href="/about">
                <li
                  className="font-serif font-semibold text-darkGreen tracking-widest text-xl cursor-pointer link-underline link-underline-black mt-6"
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  About
                </li>
              </Link>
            </ul>
          </div>

          {/* Burger menu div */}
          <div
            className="space-y-1.5 transition-all duration-500 ease-in-out cursor-pointer"
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
        </div>

        {/* Menu for medium and big screens */}
        <ul className="hidden flex-row justify-around items-center space-x-6 mr-2 md:flex md:space-x-8">
          <Link href="/">
            <li className="font-serif font-semibold text-darkGreen tracking-widest text-lg cursor-pointer md:text-xl link-underline link-underline-black text-black">
              Home
            </li>
          </Link>
          <div onClick={handleClick}>
            <li className="font-serif font-semibold text-darkGreen tracking-widest text-lg cursor-pointer md:text-xl link-underline link-underline-black text-black">
              Products
            </li>
          </div>
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
