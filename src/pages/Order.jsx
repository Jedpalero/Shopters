import React from "react";
import CartItems from "../components/CartItems/CartItems";
import Footer from "../components/Footer";

const Order = () => {
  return (
    <div className="scrollbar h-screen overflow-y-scroll bg-[#f5f5f5]">
      <CartItems />
      <Footer />
    </div>
  );
};

export default Order;
