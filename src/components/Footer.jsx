import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center m-auto items-center bg-[#f5f5f5] text-black w-full space-y-5 bottom-0 right-0 mt-10 md:mb-0 mb-10">
      <div className="flex items-center gap-6 mt-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlNk5NyNFgk6GT-5bGk2Wrl635pp-0hn9w&usqp=CAU"
          alt="shopping logo"
          className="md:w-[100px] md:h-[100px] w-[60px] h-[60px]"
        />
        <h1 className="md:text-4xl text-3xl text-black font-bold">ShopTers</h1>
      </div>
      <div className="flex md:gap-[80px] gap-2 font-semibold text-sm">
        <p className="border md:p-2 p-1 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Company
        </p>
        <p className="border md:p-2 p-1 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Product
        </p>
        <p className="border md:p-2 p-1 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Offices
        </p>
        <p className="border md:p-2 p-1 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          About
        </p>
        <p className="border md:p-2 p-1 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Contact
        </p>
      </div>
      <div className="flex gap-8">
        <FaInstagram className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
        <FaSquareXTwitter className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
        <FaWhatsapp className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
        <FaPinterest className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
      </div>
      <p className="md:text-sm text-xs p-5">
        Copyright @ 2024 - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
