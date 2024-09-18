import { createContext, useEffect, useState } from "react";
import data from "../db/data";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 600);
  const [state, setState] = useState(initialState);
  const { first_name, last_name, email, password, confirm_password } = state;

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
    toast.success("Removed From Cart");
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += itemInfo.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      await axios.post(
        "http://localhost:8081/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success("Login Successfully");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      throw new Error(errorMessage);
    }
  };

  const register = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        toast.error("Registration failed. Please try again.", errorData.err);
        return;
      }

      const data = await response.json();
      console.log(data);
      toast.success("Registration successful. You can now log in.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:8081/api/auth/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success("Logout Successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete("http://localhost:8081/api/user/delete_user/" + id, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        toast.success("Delete Successfully");
        window.location.reload();
      } catch (error) {
        toast.error("Delete Failed");
      }
    }
  };

  const updateUser = async () => {
    try {
      await axios.put("http://localhost:8081/api/user/update_user", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("Update Successfully");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  const contextValue = {
    data,
    cartItems,
    resetCart,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    deleteFromCart,
    handleResize,
    isMobile,
    login,
    handleChange,
    first_name,
    last_name,
    password,
    email,
    confirm_password,
    register,
    logout,
    deleteUser,
    updateUser,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
