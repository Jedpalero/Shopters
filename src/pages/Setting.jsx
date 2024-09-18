import { FaArrowCircleLeft, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import useDataFetch from "../hooks/useDataFetch";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import useFetchAll from "../hooks/useFetchAll";

const Setting = ({ sidebar }) => {
  const { logout, deleteUser, updateUser } = useContext(ShopContext);
  const { data } = useDataFetch();
  const { data: Users } = useFetchAll();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    logout();
    navigate("/auth");
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  // console.log(Users);

  const [editUserId, setEditUserId] = useState(null); // Track the user being edited
  const [editedUserData, setEditedUserData] = useState({
    // user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
  });

  const handleEditClick = (user) => {
    setEditUserId(user.user_id); // Set the user in edit mode
    setEditedUserData(user); // Set the current values to editable inputs
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    // Save logic here (e.g., API call to update the user)
    await updateUser();
    console.log("Saving updated data for user:", editedUserData);

    setEditUserId(null); // Exit edit mode after saving
  };

  const handleCancelClick = () => {
    setEditUserId(null); // Exit edit mode without saving
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
          {/* <Users /> */}
        </div>
      </div>
      {/* admin dashboard */}
      {data?.role === "admin" ? (
        <>
          <h1 className="font-bold text-xl mt-8 text-center">
            ADMIN DASHBOARD
          </h1>
          <div className="grid grid-cols-5 justify-between text-center border p-2 mt-5 uppercase font-semibold">
            {/* <p>ID</p> */}
            <p>First Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <p>Role</p>
            <p>Delete</p>
          </div>

          {Users?.map((user) => (
            <div
              key={user.user_id}
              className="grid grid-cols-5 justify-between text-center border p-2 lg:text-lg text-sm"
            >
              {editUserId === user.user_id ? (
                <>
                  {/* <input
                    type="text"
                    name="user_id"
                    value={editedUserData.user_id}
                    onChange={handleInputChange}
                    className="border p-1"
                  /> */}
                  <input
                    type="text"
                    name="first_name"
                    value={editedUserData.first_name}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                  <input
                    type="text"
                    name="last_name"
                    value={editedUserData.last_name}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editedUserData.email}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                  <input
                    type="text"
                    name="role"
                    value={editedUserData.role}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                  <div>
                    <button
                      onClick={() => handleSaveClick()}
                      className="border bg-green-800 text-white rounded-md p-2 w-20"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="border bg-gray-800 text-white rounded-md p-2 w-20"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* <p>{user.user_id}</p> */}
                  <p>{user.first_name}</p>
                  <p>{user.last_name}</p>
                  <p>{user.email}</p>
                  <p>{user.role}</p>
                  {user.role === "user" ? (
                    <div>
                      <button
                        onClick={() => handleEditClick(user)}
                        className="border bg-blue-800 text-white rounded-md p-2 w-20"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.user_id)}
                        className="border bg-red-800 text-white rounded-md p-2 w-20"
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </>
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          <h1 className="font-bold text-xl mt-8 text-center">ORDER SUMMARY</h1>
          <div className="grid grid-cols-3 justify-between text-center border p-2 mt-5 uppercase font-semibold">
            <p>Id</p>
            <p>Qty</p>
            <p>Total</p>
          </div>
          {data ? (
            // <>
            //   {order.length ? (
            //     <>
            //       {order?.map((item) => (
            //         <div
            //           key={item.id}
            //           className="grid grid-cols-3 justify-between text-center border p-2 lg:text-lg text-sm"
            //         >
            //           <p className="lg:text-lg text-xs">{item.id}</p>
            //           <p>{item.totalQty}</p>
            //           <p>${item.totalAmount}</p>
            //         </div>
            //       ))}
            //     </>
            //   ) : (
            //     <>
            //       <div className="flex justify-center mt-[5rem] pb-[10rem]">
            //         <p className="">Your Order Summary is Empty</p>
            //       </div>
            //     </>
            //   )}
            // </>
            <>
              <div className="flex justify-center mt-[5rem] pb-[10rem]">
                <p className="">Your Order Summary is Empty</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center mt-[5rem] pb-[10rem]">
                <p className="">Please Login to see your orders.</p>
              </div>
            </>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default Setting;
