import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItems = () => {
  const {
    data,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    deleteFromCart,
  } = useContext(ShopContext);

  return (
    <div className="w-[100rem] m-auto space-y-5">
      <div className="grid grid-cols-6 m-8 font-semibold">
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
            <div key={e.id}>
              <div className="grid grid-cols-6 items-center m-8">
                <img src={e.img} alt="shoe" className="h-[50px] w-[90px]" />
                <p>{e.title}</p>
                <p>{`$${e.newPrice}`}</p>
                <div className="flex items-center">
                  <div className=" border p-1 hover:bg-neutral-300 items-center  flex">
                    <FaMinus
                      className="cursor-pointer text-center"
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </div>
                  <p className="border w-10 text-center">{cartItems[e.id]}</p>
                  <div className=" border p-1 hover:bg-neutral-300 items-center text-center flex">
                    <FaPlus
                      className="cursor-pointer"
                      onClick={() => {
                        addToCart(e.id);
                      }}
                    />
                  </div>
                </div>
                <p>{`$${Number(e.newPrice) * cartItems[e.id]}`}</p>
                <div
                  className="flex border w-[80px] cursor-pointer hover:bg-neutral-300"
                  onClick={() => {
                    deleteFromCart(e.id);
                  }}
                >
                  <MdDelete className=" fill-red-600 w-6 h-6" />
                  <p>Delete</p>
                </div>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">Cart Totals</p>
          <div>
            <p>If you have a promo code. Enter here</p>
            <div>
              <input
                type="text"
                id="text"
                name="text"
                autoComplete="on"
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
          <p>{`$${getTotalCartAmount()}.00`}</p>
        </div>
        <div className="w-[15rem] border p-3 text-center uppercase bg-black text-white mt-5 mb-10">
          Proceed to Checkout
        </div>
      </div>
    </div>
  );
};

export default CartItems;
