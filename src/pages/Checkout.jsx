import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { ShopContext } from "../Context/ShopContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { FaArrowCircleLeft } from "react-icons/fa";

const initialState = {
  homeAddress: "",
  phoneNumber: "",
};

const Checkout = ({ sidebar }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [user] = useAuthState(auth);

  let { homeAddress, phoneNumber } = form;

  let { getTotalCartAmount, getTotalCartItems, resetCart } =
    useContext(ShopContext);

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
    } else {
      return toast.error("All fields are mandatory to fill");
    }
    navigate("/");
    toast.success("Thank you for shopping in our store.");
    resetCart();
  };

  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll mb-[100px]">
      <div
        className={`flex m-6  ${sidebar ? "" : "md:ml-[120px] md:mr-[130px]"}`}
      >
        <Link
          to="/order"
          className="flex items-center gap-3  transition hover:-translate-x-2 delay-100"
        >
          <FaArrowCircleLeft className="text-3xl" />
          <h1 className="font-bold text-lg">Go Back</h1>
        </Link>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="md:text-4xl text-2xl font-bold">Cashout Details</h1>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={user?.displayName}
              autoComplete="off"
              className="md:w-[40rem] w-[20rem] border p-2 rounded-md lg:w-[44rem]"
              disabled
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email}
              autoComplete="on"
              className="md:w-[40rem] w-[20rem] border p-2 rounded-md lg:w-[44rem]"
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
              placeholder="e.g. 09095151606"
              autoComplete="on"
              className="md:w-[40rem] w-[20rem] border p-2 rounded-md lg:w-[44rem]"
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
              className="md:w-[40rem] w-[20rem] border p-2 rounded-md lg:w-[44rem]"
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
              defaultValue={`$${getTotalCartAmount()}.00`}
              className="md:w-[40rem] w-[20rem] border p-2 rounded-md lg:w-[44rem]"
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
              defaultValue={getTotalCartItems()}
              className="md:w-[40rem] w-[20rem] border p-2 rounded-md lg:w-[44rem]"
              disabled
            />
          </div>
          <button
            className="flex m-auto mt-10 lg:w-[20rem] w-[10rem] p-4  justify-center rounded-lg bg-blue-700 text-white "
            type="submit"
          >
            Checkout
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
