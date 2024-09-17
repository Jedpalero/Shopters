import {
  FaShoppingCart,
  FaBars,
  FaShoppingBag,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { IoMdSettings } from "react-icons/io";
import useDataFetch from "../hooks/useDataFetch";

const Navigation = ({ sidebar, setSidebar }) => {
  const navigate = useNavigate();
  const { getTotalCartItems, logout } = useContext(ShopContext);

  const handleSignOut = async () => {
    logout();
    navigate("/auth");
  };

  const { data } = useDataFetch();

  return (
    <div className="xl:h-screen flex">
      <div className="flex flex-col justify-between text-white m-5 space-y-10">
        <div className="flex flex-col gap-y-10">
          <FaBars
            className="text-white cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          />
          <NavLink
            to="/"
            className="flex gap-10 "
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
            className="flex gap-10"
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
            className="flex gap-10"
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            <div>
              {data && (
                <p className="bg-red-500 absolute mt-5 text-white ml-4 w-6 h-6 text-center rounded-full">
                  {getTotalCartItems()}
                </p>
              )}
              <FaShoppingCart className="w-6 h-6" />
            </div>
            {sidebar && <h3>ORDER</h3>}
          </NavLink>
        </div>
        {/* {user ? ( */}
        {data ? (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex gap-10">
                <FaUser className="h-6 size-3" />
                {sidebar && <p>{data?.first_name}</p>}
              </div>
              <button
                className="flex gap-10 text-gray-400"
                onClick={handleSignOut}
              >
                <RiLogoutCircleLine className="h-6" />
                {sidebar && <h3>LOGOUT</h3>}
              </button>
              <NavLink
                to="/settings"
                className="flex gap-10"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "gray",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                <IoMdSettings className="h-6" />
                {sidebar && <h3>SETTING</h3>}
              </NavLink>
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
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                <RiLoginCircleLine className="mt-2" />
                {sidebar && <h3>LOGIN</h3>}
              </NavLink>
              <NavLink
                to="/settings"
                className="flex gap-10"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "gray",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                <IoMdSettings className="h-6" />
                {sidebar && <h3>SETTING</h3>}
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
