import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase-config";
import { ShopContext } from "../Context/ShopContext";

// const initialState = {
//   homeAddress: "",
//   phoneNumber: "",
//   priceToPay: "",
//   noOfItems: "",
// };
export const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems, getTotalCartAmount, totalQty, dispatch } =
    useContext(ShopContext);

  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            setName(snapshot.data().Name);
            setEmail(snapshot.data().Email);
          });
      } else {
        navigate("/auth");
      }
    });
  });

  const cashoutSubmit = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged((user) => {
      if (user) {
        const date = new Date();
        const time = date.getTime();
        db.collection("Buyer-info " + user.uid)
          .doc("_" + time)
          .set({
            BuyerName: name,
            BuyerEmail: email,
            BuyerCell: cell,
            BuyerAddress: address,
            BuyerPayment: getTotalCartAmount,
            BuyerQuantity: cartItems[e.id],
          })
          .then(() => {
            setCell("");
            setAddress("");
            dispatch({ type: "EMPTY" });
            setSuccessMsg(
              "Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds"
            );
            setTimeout(() => {
              navigate("/");
            }, 5000);
          })
          .catch((err) => setError(err.message));
      }
    });
  };

  return (
    <div className="bg-gray-400 h-screen">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl font-bold mt-10">Cashout Details</h1>
        <form action="submit">
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="name"
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="cell">
              Telephone Number
            </label>
            <input
              type="text"
              id="cell"
              name="name"
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="address">
              Delivery Address
            </label>
            <input
              type="text"
              id="address"
              name="name"
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="priceToPay">
              Price to pay
            </label>
            <input
              type="text"
              id="priceToPay"
              name="name"
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-6 drop-shadow-lg">
            <label className="text-lg font-semibold" htmlFor="noProducts">
              Number of products
            </label>
            <input
              type="text"
              id="noProducts"
              name="name"
              autoComplete="on"
              className="w-[60rem] border p-2 rounded-md"
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
