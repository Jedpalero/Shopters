import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import useFetchAll from "../../hooks/useFetchAll";

const AdminPage = () => {
  const { deleteUser, updateUser } = useContext(ShopContext);
  const [editUserId, setEditUserId] = useState(null); // Track the user being edited
  const [editedUserData, setEditedUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const { data: Users } = useFetchAll();

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

  const handleSaveClick = () => {
    // Save logic here (e.g., API call to update the user)
    updateUser(editedUserData);
    setEditUserId(null); // Exit edit mode after saving
  };

  const handleCancelClick = () => {
    setEditUserId(null); // Exit edit mode without saving
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <>
      <h2 className="font-bold lg:text-xl text-sm mt-8 lg:ml-12 ml-5">
        ADMIN DASHBOARD
      </h2>
      <div className="grid grid-cols-5 justify-between text-center border p-2 mt-5 uppercase font-semibold lg:text-lg text-xs">
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
              {/* <input
                    type="text"
                    name="role"
                    value={user.role}
                    // onChange={handleInputChange}
                    className="border p-1"
                  /> */}
              <p>{user.role}</p>
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
              <p className="truncate lg:w-50 w-30">{user.email}</p>
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
  );
};

export default AdminPage;
