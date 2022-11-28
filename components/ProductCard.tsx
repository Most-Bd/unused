import Image from "next/image";
import Product from "../utils/types";
import brandImg from "../assets/brand.png";
import { useRecoilState } from "recoil";
import { modalState, productState } from "../utils/recoilAtom";

const ProductCard = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}: Product) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [productForModal, setProductForModal] = useRecoilState(productState);

  const handleOpen = () => {
    setProductForModal({
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    });
    setShowModal(true);
  };

  return (
    <div
      className="group h-[30rem] w-[20rem] my-4 rounded-xl border-2 border-darkGreen/40 bg-lightGreen/20 cursor-pointer transition-all duration-300 hover:bg-lightGreen/50"
      onClick={handleOpen}
    >
      <div className="mx-auto relative transition-all duration-300 ease-in-out h-[12rem] w-[12rem] md:w-[14rem]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover mt-4 rounded-2xl"
          sizes="(max-width: 500px)"
        />
      </div>
      <p className="mt-10 font-bold w-[85%] block mx-auto text-xl text-center tracking-widest text-darkGreen uppercase h-[4rem] line-clamp-2">
        {title}
      </p>
      <p className="mt-1 block mx-auto text-center text-lg line-clamp-2 w-[80%] text-darkGreen h-[3.4rem]">
        {description}
      </p>
      <p className="mt-2 text-center bg-lightGreen py-2 text-3xl font-bold text-darkGreen">
        {price} $
      </p>
      <div className="flex flex-row justify-between mt-4 mx-4 items-center">
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
          {rating}
        </p>
        <p className="font-serif font-semibold tracking-wider text-sm flex items-center">
          <Image src={brandImg} alt="brand icon" className="w-8 h-8 mr-2" />
          {brand}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
