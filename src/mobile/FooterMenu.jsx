import { useContext, useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaShoppingBag,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { IoMdSettings } from "react-icons/io";

const FooterMenu = ({ openCloseDropDown, dropMenu }) => {
  const [user] = useAuthState(auth);
  const { getTotalCartItems, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

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
          {user && (
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
