import { useContext, useState } from "react";
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
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";

const FooterMenu = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [user] = useAuthState(auth);
  const { getTotalCartItems, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/auth");
    toast.success("Logout Successfully");
  };

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
      <a className="mt-1">
        <FaBars onClick={() => setDropMenu(!dropMenu)} />
      </a>
      {dropMenu ? (
        <div className="fixed right-0 bottom-12 bg-[#0f0f0f] bg-opacity-60 ">
          <div className="h-[100px] w-[150px] flex flex-col justify-center items-center">
            {user ? (
              <>
                <div className="flex gap-2 items-center">
                  <FaUser />
                  <p>{user?.displayName}</p>
                </div>
                <button
                  className="flex items-center gap-2"
                  onClick={handleSignOut}
                >
                  <RiLogoutCircleLine />
                  <h3>LOGOUT</h3>
                </button>
              </>
            ) : (
              <>
                <NavLink to="/auth" className="flex items-center gap-2">
                  <RiLoginCircleLine />
                  <h3>LOGIN</h3>
                </NavLink>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FooterMenu;
