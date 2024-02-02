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
import Loader from "./Loader";
import { useState } from "react";
import { toast } from "react-toastify";

const Navigation = ({ sidebar, setSidebar }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut(auth);
    navigate("/login");
    toast.success("Logout Successfully");
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`md:h-screen flex ${sidebar ? "" : ""}`}>
      <div className="flex flex-col justify-between text-white m-5 space-y-10">
        <div className="flex flex-col gap-y-10">
          <FaBars
            className="text-white cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          />
          <NavLink
            to="/home"
            className={`${sidebar ? "flex gap-10 " : ""}`}
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
              textDecoration: isActive ? "underline" : "",
              fontWeight: isActive ? "bold" : "",
            })}
          >
            <FaHome />
            {sidebar && <h3>HOME</h3>}
          </NavLink>
          <NavLink
            to="/shop"
            className={`${sidebar ? "flex gap-10" : "mt-2"}`}
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
              textDecoration: isActive ? "underline" : "",
              fontWeight: isActive ? "bold" : "",
            })}
          >
            <FaShoppingBag />
            {sidebar && <h3>SHOP</h3>}
          </NavLink>
          <NavLink
            className={`${sidebar ? "flex gap-10" : "mt-2"}`}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "white",
              fontWeight: isActive ? "bold" : "",
            })}
          >
            <FaShoppingCart />
            {sidebar && <h3>ORDER</h3>}
          </NavLink>
        </div>
        {user ? (
          <>
            <div className="space-y-4">
              {sidebar && <p>{user?.email}</p>}
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
                to="/login"
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
              <NavLink
                to="/register"
                className="flex gap-10"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "gray",
                  textDecoration: isActive ? "underline" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                <FaUser className="mt-2" />
                {sidebar && <h3>REGISTER</h3>}
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
