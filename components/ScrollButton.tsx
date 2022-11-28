import { useEffect, useState } from "react";

const ScrollButton = () => {
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
    <button
      className={`fixed flex border-2 border-darkGreen z-40 bottom-8 right-10 transition-all duration-500 ${
        isScrolled ? "opacity-100" : "opacity-0"
      } items-center justify-center p-2 w-12 h-12 bg-lightGreen rounded-full hover:scale-110`}
      disabled={!isScrolled}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="darkGreen"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
