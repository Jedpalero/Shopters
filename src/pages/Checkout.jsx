import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { ShopContext } from "../Context/ShopContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const initialState = {
  homeAddress: "",
  phoneNumber: 0,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [user] = useAuthState(auth);

  let { homeAddress, phoneNumber } = form;

  let { getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);

  console.log("form", form);
  console.log(getTotalCartItems());
  console.log(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (homeAddress && phoneNumber) {
      try {
        await addDoc(collection(db, "userCheckout"), {
          ...form,
          timestamp: serverTimestamp(),
          author: user?.displayName,
          userId: user?.uid,
          totalAmount: getTotalCartAmount(),
          totalQty: getTotalCartItems(),
        });
      } catch (error) {
        console.log(error);
      }
    }
    navigate("/");
    toast.success("Thank you for shopping in our store.");
  };

  return (
    <div className="bg-gray-400 h-screen">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl font-bold mt-10">Cashout Details</h1>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.displayName}
              autoComplete="off"
              className="w-[60rem] border p-2 rounded-md"
              required
              disabled
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
              required
              disabled
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="phoneNumber">
              Telephone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="homeAddress">
              Delivery Address
            </label>
            <input
              type="text"
              id="homeAddress"
              name="homeAddress"
              value={homeAddress}
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="priceToPay">
              Price to pay
            </label>
            <input
              type="text"
              id="priceToPay"
              name="priceToPay"
              autoComplete="on"
              value={`$${getTotalCartAmount()}.00`}
              className="w-[60rem] border p-2 rounded-md"
              required
              disabled
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="noOfItems">
              Number of products
            </label>
            <input
              type="number"
              id="noOfItems"
              name="noOfItems"
              autoComplete="on"
              value={getTotalCartItems()}
              className="w-[60rem] border p-2 rounded-md"
              required
              disabled
            />
          </div>
          <button
            className="flex m-auto mt-10 w-[20rem] p-4  justify-center rounded-lg bg-blue-700 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
