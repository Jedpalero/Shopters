import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import useDataFetch from "../hooks/useDataFetch";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import UsersPage from "../components/Settings/UsersPage";
import AdminPage from "../components/Settings/AdminPage";
import Header from "../components/Settings/Header";

const Setting = ({ sidebar }) => {
  const { logout } = useContext(ShopContext);
  const { data } = useDataFetch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll">
      {/* header */}
      <Header sidebar={sidebar} />
      <div className="flex justify-center m-auto lg:pt-10 pt-4">
        <div className="flex lg:gap-[100px] gap-6 items-center">
          <FaUserCircle className="lg:size-[8rem] size-[5rem] text-black" />
          <div className="space-y-2">
            {data ? (
              <>
                <p className="font-bold text-xl">{`Name: ${data?.first_name}`}</p>
                <p className="text-sm"> {`Email: ${data?.email}`}</p>
                <button
                  className="border p-3 w-[10rem] bg-red-700 text-white text-center font-bold rounded-lg"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3">
                <p>Login to see your profile</p>
                <Link
                  to="/auth"
                  className="border p-3 bg-blue-700 text-white text-center font-bold rounded-lg"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {data?.role === "admin" ? (
        <>
          {/* admin dashboard */}
          <AdminPage />
        </>
      ) : (
        <>
          {/* <Users /> */}
          <UsersPage data={data} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Setting;
