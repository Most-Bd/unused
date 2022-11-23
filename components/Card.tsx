import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Collection } from "../assets/collections";
import { useRecoilState } from "recoil";
import { categoryTypeState } from "../utils/recoilAtom";
import { useRouter } from "next/router";

const Card = ({ name, imgUrl, toUrl }: Collection) => {
  const [categoryType, setCategoryType] = useRecoilState(categoryTypeState);
  const [isMounted, setIsMounted] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (isMounted) {
      setCategoryType(toUrl);
    }

    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleClick = () => {
    setCategoryType(toUrl);
    router.push("/products");
  };

  return (
    <div
      className="group mx-auto h-[34rem] w-[28rem] my-5 rounded-xl bg-lightGreen/20 cursor-pointer transition-all duration-300 hover:bg-lightGreen/50 sm:h-[28rem] sm:w-[18rem] md:w-[20rem] xl:w-[23%]"
      onClick={handleClick}
    >
      <div className="mx-auto relative h-[26rem] w-[26rem] mt-7 transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105 sm:h-[20rem] sm:w-[16rem] md:w-[18rem] xl:w-[90%]">
        <Image
          src={imgUrl}
          alt={name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <p className="mt-8 font-bold text-2xl text-center tracking-wider text-darkGreen">
        {name}
      </p>
    </div>
  );
};

export default Card;
