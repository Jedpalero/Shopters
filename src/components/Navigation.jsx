import {
  FaShoppingCart,
  FaBars,
  FaShoppingBag,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navigation = ({ sidebar, setSidebar }) => {
  return (
    <div className={`h-screen flex ${sidebar ? "" : ""}`}>
      <div className="flex flex-col justify-between text-white m-5 space-y-10">
        <div className="flex flex-col gap-y-10">
          <FaBars className="text-white" onClick={() => setSidebar(!sidebar)} />
          <a className={`${sidebar ? "flex gap-10" : ""}`}>
            <FaHome />
            {sidebar && <h3>HOME</h3>}
          </a>
          <a className={`${sidebar ? "flex gap-10" : "mt-2"}`}>
            <FaShoppingBag />
            {sidebar && <h3>SHOP</h3>}
          </a>
          <a className={`${sidebar ? "flex gap-10" : "mt-2"}`}>
            <FaShoppingCart />
            {sidebar && <h3>ORDER</h3>}
          </a>
        </div>
        <div className="space-y-4">
          <NavLink to="/login" className="flex gap-10">
            <RiLoginCircleLine className="mt-2" />
            {sidebar && <h3>LOGIN</h3>}
          </NavLink>
          <NavLink to="/register" className="flex gap-10">
            <FaUser className="mt-2" />
            {sidebar && <h3>REGISTER</h3>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
