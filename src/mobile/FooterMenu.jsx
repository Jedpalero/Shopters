import { useContext } from "react";
import { FaShoppingCart, FaShoppingBag, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { auth } from "../firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";
import { ShopContext } from "../Context/ShopContext";
import { IoMdSettings } from "react-icons/io";
import useDataFetch from "../hooks/useDataFetch";

const FooterMenu = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  const { data } = useDataFetch();

  return (
    <div className="text-white flex justify-between m-3">
      <NavLink
        to="/"
        className="flex flex-col items-center"
        style={({ isActive }) => ({
          color: isActive ? "white" : "gray",
        })}
      >
        <FaHome />
        <h3 className="text-[10px]">HOME</h3>
      </NavLink>
      <NavLink
        to="/shop"
        className=" flex flex-col items-center"
        style={({ isActive }) => ({
          color: isActive ? "white" : "gray",
        })}
      >
        <FaShoppingBag />
        <h3 className="text-[10px]">SHOP</h3>
      </NavLink>
      <NavLink
        to="/order"
        className="flex flex-col items-center"
        style={({ isActive }) => ({
          color: isActive ? "white" : "gray",
        })}
      >
        <div>
          {data && (
            <p className="bg-red-500 absolute  text-white ml-4 top-0 w-6 h-6 text-center rounded-full">
              {getTotalCartItems()}
            </p>
          )}
          <FaShoppingCart />
          <h3 className="text-[10px]">ORDER</h3>
        </div>
      </NavLink>
      <NavLink
        to="/settings"
        style={({ isActive }) => ({
          color: isActive ? "white" : "gray",
        })}
      >
        <IoMdSettings className="size-6" />
      </NavLink>
    </div>
  );
};

export default FooterMenu;
