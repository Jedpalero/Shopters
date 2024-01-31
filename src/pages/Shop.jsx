import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Card from "../components/Card";
import { useState } from "react";

const Shop = () => {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <div className="grid h-screen grid-rows-[70px_1fr]">
      <div className="bg-gradient-to-r from-black flex justify-between items-center p-8">
        <div className="relative flex gap-2">
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-[gray-900] border border-gray-300 rounded-lg  dark:bg-neutral-800 dark:border-gray-600  dark:text-white "
            placeholder="Search"
            required
          />
          <div className="absolute inset-y-0 flex items-center ps-3 text-white">
            <FaSearch />
          </div>
        </div>

        <FaShoppingCart className="text-xl" />
      </div>
      <div className="scrollbar bg-gradient-to-r from-black overflow-y-scroll text-white">
        <div className="flex justify-between p-3 overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="bg-neutral-800 hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer">
              <h1>All</h1>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer">
              <h1>Nike</h1>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer">
              <h1>Adidas</h1>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer">
              <h1>Puma</h1>
            </div>
            <div className="bg-neutral-800 hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer">
              <h1>Vans</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="text-black flex justify-end mr-2 relative">
            <div
              className="flex gap-3 items-center justify-between w-[160px] bg-neutral-800 p-1 rounded-md cursor-pointer text-white "
              onClick={() => setDropMenu(!dropMenu)}
            >
              <h1>Sort by: Featured</h1>
              {dropMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            {dropMenu && (
              <div className="bg-neutral-800 text-white border mt-8 absolute w-[300px] h-[230px] z-10">
                <div className="text-center space-y-2 mt-4">
                  <p className="hover:bg-neutral-700 cursor-pointer">
                    Price: $0 to $100
                  </p>
                  <p className="hover:bg-neutral-700 cursor-pointer">
                    Price: $100 to $150
                  </p>
                  <p className="hover:bg-neutral-700 cursor-pointer">
                    Sneakers
                  </p>
                  <p className="hover:bg-neutral-700 cursor-pointer">Sandals</p>
                  <p className="hover:bg-neutral-700 cursor-pointer">Flats</p>
                  <p className="hover:bg-neutral-700 cursor-pointer">Heels</p>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
