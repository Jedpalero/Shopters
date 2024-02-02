import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";

const CartItems = () => {
  const { data, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="w-[100rem] m-auto space-y-5">
      <div className="grid grid-cols-6 m-8">
        <h1>Products</h1>
        <h1>Title</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
        <h1>Remove</h1>
      </div>
      <hr className="bg-gray-400 rounded md:my-10 dark:bg-gray-700" />
      {data.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="">
              <div key={e.id} className="grid grid-cols-6 items-center m-8">
                <img src={e.img} alt="shoe" className="h-[50px] w-[90px]" />
                <p>{e.title}</p>
                <p>{`$${e.newPrice}`}</p>
                <button className="border w-10">{cartItems[e.id]}</button>
                <p>{Number(e.newPrice) * cartItems[e.id]}</p>
                <MdDelete
                  className="cursor-pointer"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">Cart Totals</p>
          <div>
            <p>If you have a promo code. Enter here</p>
            <div className="">
              <input
                type="text"
                className="border p-2 bg-gray-200"
                placeholder="promo code..."
              />
              <button className="border p-2 bg-black text-white">Submit</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[60rem] space-y-5 items-center">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr className="w-[60rem]" />
        <div className="flex justify-between w-[60rem] space-y-5 items-center">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr className="w-[60rem]" />
        <div className="flex justify-between w-[60rem] space-y-5 items-center font-bold">
          <p>Total</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <div className="w-[15rem] border p-3 text-center uppercase bg-black text-white mt-5 mb-10">
          Proceed to Checkout
        </div>
      </div>
    </div>
  );
};

export default CartItems;
