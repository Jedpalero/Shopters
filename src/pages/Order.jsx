import React from "react";
import CartItems from "../components/CartItems/CartItems";

const Order = () => {
  return (
    <div className="scrollbar h-screen overflow-y-scroll">
      <CartItems />
    </div>
  );
};

export default Order;
