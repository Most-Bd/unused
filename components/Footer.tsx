import Image from "next/image";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import full_logo from "../assets/unused_cropped_transparent.png";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-lightGreen rounded-t-2xl py-5 px-4">
      <div className="w-full flex items-center justify-between mx-auto md:w-[90%] lg:w-[75%] xl:w-[1080px]">
        <div>
          <Image
            src={full_logo}
            alt="Unused logo"
            className="w-28 cursor-pointer md:w-40"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="mr-4 flex flex-col space-y-2">
          <p className="text-center font-bold text-lg text-darkGreen md:text-xl">
            Check out our socials:
          </p>
          <div className="mt-4 flex space-x-4 justify-center md:space-x-6">
            <SocialIcon
              url="https://facebook.com/"
              fgColor="white"
              bgColor="#4267B2"
              className="scale-75 md:scale-100"
            />
            <SocialIcon
              url="https://instagram.com/"
              fgColor="white"
              bgColor="#E1306C"
              className="scale-75 md:scale-100"
            />
            <SocialIcon
              url="https://twitter.com/"
              fgColor="#1DA1F2"
              bgColor="white"
              className="scale-75 md:scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
