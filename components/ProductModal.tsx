import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, productState } from "../utils/recoilAtom";

const ProductModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const productForModal = useRecoilValue(productState);
  const modalRef = useRef<HTMLDivElement>(null);

  const carousselRef = useRef<HTMLDivElement>(null);

  // Caroussel scroll function
  const handleClick = (direction: string) => {
    if (carousselRef.current) {
      const { scrollLeft, clientWidth } = carousselRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      carousselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Checking if clocked outside the modal div
  useEffect(() => {
    const outsideClickHandler = (e: Event) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        carousselRef.current!.scrollLeft = 0;
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", outsideClickHandler);
    }

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });

  return (
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } absolute w-full h-[100vh] p-4 bg-[gray]/80 z-50 justify-center items-center`}
    >
      <div
        ref={modalRef}
        className="relative w-[90%] max-w-screen-md min-h-[50vh] flex flex-col space-y-2 bg-lightGreen p-4 text-darkGreen rounded-xl"
      >
        {/* X icon */}
        <div
          className="absolute h-12 cursor-pointer flex flex-col justify-center px-2 right-4 transition-all duration-300 rounded-xl hover:bg-darkGreen/10"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <span
            className={
              "block w-8 h-1 bg-darkGreen rounded-lg -rotate-45 translate-y-1"
            }
          ></span>
          <span
            className={"block w-8 h-1 bg-darkGreen rounded-lg rotate-45"}
          ></span>
        </div>

        {/* Image caroussel */}
        <div className="flex justify-between items-center mx-auto">
          <div
            className="p-4 rounded-xl cursor-pointer mr-2 transition-all duration-300 hover:bg-darkGreen/20"
            onClick={() => handleClick("left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            ref={carousselRef}
            className="relative flex w-[10rem] items-center overflow-x-scroll scrollbar-hide sm:w-[18rem] md:w-[26rem]"
          >
            {productForModal.images?.map(
              (imgSrc) =>
                imgSrc && (
                  <Image
                    key={imgSrc}
                    src={imgSrc}
                    alt="product image"
                    width={1000}
                    height={1000}
                    className="h-[10rem] w-[10rem] p-4 sm:w-[18rem] sm:h-[18rem] md:w-[26rem] md:h-[26rem]"
                  />
                )
            )}
          </div>
          <div
            className="p-4 rounded-xl cursor-pointer mr-2 transition-all duration-300 hover:bg-darkGreen/20"
            onClick={() => handleClick("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        {/* The rest of the modal */}
        <div className="flex items-center space-x-8 font-bold text-xl">
          <h1>
            <span className="font-normal text-lg">Price :</span>{" "}
            {productForModal.price} $
          </h1>
          <p className="font-semibold tracking-wider text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffcd3c"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="none"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {productForModal.rating}
          </p>
        </div>
        <h1 className="text-2xl font-bold first-letter:uppercase">
          {productForModal.title}
        </h1>
        <div className="flex flex-col space-y-4">
          <p className="text-lg">
            Brand :{" "}
            <span className="font-bold font-serif tracking-widest">
              {productForModal.brand}
            </span>
          </p>
          <p className="border border-darkGreen"></p>
          <p className="text-lg first-letter:uppercase">
            {productForModal.description}
          </p>
        </div>
        <div className="m-2">
          <p className="my-2 mx-auto max-w-[500px] text-center p-2 bg-darkGreen rounded-3xl text-[#9be8d2] font-serif text-lg tracking-widest">
            To purchase, please visit our store
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
