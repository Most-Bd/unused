import Image from "next/image";
import Link from "next/link";
import full_logo from "../assets/unused_cropped_transparent.png";

const Footer = () => {
  return (
    <div className="w-full bg-lightGreen mt-6 pb-6">
      <div className="border-4">
        <Link href="/">
          <Image
            src={full_logo}
            alt="Unused logo"
            className="w-40 cursor-pointer p-6 md:w-60"
          />
        </Link>
        <p>Brand new quality, with SECOND-HAND prices!!</p>
      </div>
    </div>
  );
};

export default Footer;
