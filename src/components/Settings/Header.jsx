import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (sidebar) => {
  const [dropMenu, setDropMenu] = useState(false);
  const { data } = useDataFetch();

  return (
    <div className="flex justify-between items-center lg:p-4 p-3 ">
      <div
        className={`flex lg:p-6 p-3  ${
          sidebar ? "" : "md:ml-[120px] md:mr-[130px]"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-3  transition hover:-translate-x-2 delay-100"
        >
          <FaArrowCircleLeft className="text-3xl" />
          <h1 className="font-bold text-lg">Home</h1>
        </Link>
      </div>
      {data?.role === "admin" ? (
        <>
          <div
            className={`text-black flex justify-end  mr-2 relative ${
              sidebar ? "" : "lg:ml-[150px]"
            }`}
          >
            <div
              className={` ${sidebar ? "lg:mr-7" : "lg:mr-[140px]"}`}
              onClick={() => setDropMenu(!dropMenu)}
            >
              <GiHamburgerMenu className="md:text-[30px] text-[20px] text-neutral-800 cursor-pointer" />
            </div>
            {dropMenu && (
              <div
                className={`bg-neutral-800 text-white border lg:mt-7 mt-6 absolute lg:w-[224px] w-[200px] h-[250px] text-lg p-2 z-10 ${
                  sidebar ? "lg:mr-7" : "lg:mr-[8.6rem] ml-[10.5rem]"
                }`}
              >
                <div className="flex flex-col text-center space-y-2 mt-3">
                  <Link
                    to={"/settings"}
                    className="hover:bg-neutral-500 p-2 w-full"
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    to={"/admin/allproductlist"}
                    className="hover:bg-neutral-500 p-2 w-full"
                  >
                    All Products
                  </Link>
                  <Link
                    to={"/admin/addproduct"}
                    className="hover:bg-neutral-500 p-2 w-full"
                  >
                    Add Products
                  </Link>
                  <Link
                    to={"/admin/product/update/:_id"}
                    className="hover:bg-neutral-500 p-2 w-full"
                  >
                    Update Products
                  </Link>
                  {/* <Input
                    handleChange={handleChange}
                    value="100"
                    title="Price: $0 to $100"
                    name="test2"
                  /> */}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <h1 className="font-bold text-xl flex justify-end p-4 lg:pr-10">
          Settings
        </h1>
      )}
    </div>
  );
};

export default Header;
