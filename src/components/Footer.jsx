import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center m-auto items-center bg-[#f5f5f5] text-black w-full space-y-5 mb-5 bottom-0 right-0">
      <div className="flex items-center gap-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlNk5NyNFgk6GT-5bGk2Wrl635pp-0hn9w&usqp=CAU"
          alt="shopping logo"
          className="w-[100px] h-[100px]"
        />
        <h1 className="text-4xl text-black font-bold">ShopTers</h1>
      </div>
      <div className="flex gap-[80px] font-semibold">
        <p className="border p-2 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Company
        </p>
        <p className="border p-2 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Product
        </p>
        <p className="border p-2 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Offices
        </p>
        <p className="border p-2 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          About
        </p>
        <p className="border p-2 rounded-lg hover:bg-neutral-800 hover:text-white cursor-pointer transition ease-in-out duration-150 delay-100">
          Contact
        </p>
      </div>
      <div className="flex gap-8">
        <FaInstagram className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
        <FaSquareXTwitter className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
        <FaWhatsapp className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
        <FaPinterest className="h-6 w-6 hover:translate-y-2 transition cursor-pointer" />
      </div>
      <p>Copyright @ 2024 - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
