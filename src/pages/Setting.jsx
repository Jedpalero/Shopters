import { useAuthState } from "react-firebase-hooks/auth";
import { FaArrowCircleLeft, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Setting = (sidebar) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [order, setOrders] = useState([]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/auth");
    toast.success("Logout Successfully");
  };

  useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(db, "userCheckout"),
        where("userId", "==", user ? auth?.currentUser?.uid : null)
      ),
      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setOrders(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

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
            {user ? (
              <>
                <p className="font-bold text-xl">{user?.displayName}</p>
                <p className="text-sm"> {`Email: ${user?.email}`}</p>
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
      <h1 className="font-bold text-xl mt-8 text-center">ORDER SUMMARY</h1>
      <div className="grid grid-cols-3 justify-between text-center border p-2 mt-5 uppercase font-semibold">
        <p>Id</p>
        <p>Qty</p>
        <p>Total</p>
      </div>
      {user ? (
        <>
          {order.length ? (
            <>
              {order?.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-3 justify-between text-center border p-2 lg:text-lg text-sm"
                >
                  <p className="lg:text-lg text-xs">{item.id}</p>
                  <p>{item.totalQty}</p>
                  <p>${item.totalAmount}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="flex justify-center mt-[5rem] pb-[10rem]">
                <p className="">Your Order Summary is Empty</p>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="flex justify-center mt-[5rem] pb-[10rem]">
            <p className="">Please Login to see your orders.</p>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Setting;
