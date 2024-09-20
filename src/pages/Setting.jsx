import { FaArrowCircleLeft, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import useDataFetch from "../hooks/useDataFetch";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import UsersPage from "../components/Settings/UsersPage";
import AdminPage from "../components/Settings/AdminPage";

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
        <h1 className="font-bold text-xl flex justify-end p-4 lg:pr-10">
          Settings
        </h1>
      </div>
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
