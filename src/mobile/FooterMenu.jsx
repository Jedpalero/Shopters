import { useState } from "react";
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
import Loader from "../components/Loader";

const FooterMenu = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut(auth);
    navigate("/login");
    console.log("Logout Successfully");
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="text-white flex justify-between m-3">
      {/* <div className="flex"> */}
      <NavLink
        to="/home"
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
        <FaShoppingCart />
        <h3 className="text-[10px]">ORDER</h3>
      </NavLink>
      <a className="mt-1">
        <FaBars
          onClick={() => setDropMenu(!dropMenu)}
          style={({ isActive }) => ({
            color: isActive ? "white" : "gray",
          })}
        />
      </a>
      {/* </div> */}
      {dropMenu ? (
        <div className="fixed right-0 bottom-12 bg-[#0f0f0f] bg-opacity-60 ">
          <div className="h-[100px] w-[150px] flex flex-col justify-center items-center">
            {user ? (
              <>
                <p>{user?.email}</p>
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
                <NavLink to="/login" className="flex items-center gap-2">
                  <RiLoginCircleLine />
                  <h3>LOGIN</h3>
                </NavLink>
                <NavLink to="/register" className="flex items-center gap-2">
                  <FaUser />
                  <h3>REGISTER</h3>
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
