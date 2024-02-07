import {
  FaShoppingCart,
  FaBars,
  FaShoppingBag,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../Context/ShopContext";

const Navigation = ({ sidebar, setSidebar }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/auth");
    toast.success("Logout Successfully");
  };

  return (
    <div className={`xl:h-screen flex ${sidebar ? "" : ""}`}>
      <div className="flex flex-col justify-between text-white m-5 space-y-10">
        <div className="flex flex-col gap-y-10">
          <FaBars
            className="text-white cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          />
          <NavLink
            to="/"
            className={`${sidebar ? "flex gap-10 " : ""}`}
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
              textDecoration: isActive ? "underline" : "",
              fontWeight: isActive ? "bold" : "",
            })}
          >
            <FaHome className="w-6 h-6" />
            {sidebar && <h3>HOME</h3>}
          </NavLink>
          <NavLink
            to="/shop"
            className={`${sidebar ? "flex gap-10" : ""}`}
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
              textDecoration: isActive ? "underline" : "",
              fontWeight: isActive ? "bold" : "",
            })}
          >
            <FaShoppingBag className="w-6 h-6" />
            {sidebar && <h3>SHOP</h3>}
          </NavLink>
          <NavLink
            to="/order"
            className={` ${sidebar ? "flex gap-10" : ""}`}
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            <div>
              {user && (
                <p className="bg-red-500 absolute mt-5 text-white ml-4 w-6 h-6 text-center rounded-full">
                  {getTotalCartItems()}
                </p>
              )}
              <FaShoppingCart className="w-6 h-6" />
            </div>
            {sidebar && <h3>ORDER</h3>}
          </NavLink>
        </div>
        {user ? (
          <>
            <div className="space-y-4">
              <div className="flex gap-10 items-center">
                <FaUser className="mt-2" />
                {sidebar && <p>{user?.displayName}</p>}
              </div>
              <button className="flex gap-10" onClick={handleSignOut}>
                <RiLogoutCircleLine className="mt-2" />
                {sidebar && <h3>LOGOUT</h3>}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <NavLink
                to="/auth"
                className="flex gap-10"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "gray",
                  textDecoration: isActive ? "underline" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                <RiLoginCircleLine className="mt-2" />
                {sidebar && <h3>LOGIN</h3>}
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
