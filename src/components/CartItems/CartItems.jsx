import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase-config";

const CartItems = () => {
  const {
    data,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    deleteFromCart,
  } = useContext(ShopContext);

  // const [user] = useAuthState(auth);

  return (
    <div className="w-full m-auto space-y-5">
      <div className="md:grid hidden grid-cols-6 m-8 font-semibold">
        <h1>Products</h1>
        <h1>Title</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
        <h1>Remove</h1>
      </div>
      <div className="md:hidden grid grid-cols-2 text-center font-semibold">
        <h1 className="">Products</h1>
        <h1>Details</h1>
      </div>
      <hr className="rounded lg:my-10 dark:bg-gray-700 lg:block" />
      {data.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="md:grid hidden md:grid-cols-6 items-center m-8">
                <img src={e.img} alt="shoe" className="h-[50px] w-[90px]" />
                <p>{e.title}</p>
                <p>{`$${e.newPrice}`}</p>
                <div className="flex items-center">
                  <div className=" border p-1 hover:bg-neutral-300  active:bg-neutral-600 items-center  flex">
                    <FaMinus
                      className="cursor-pointer text-center "
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </div>
                  <p className="border w-10 text-center">{cartItems[e.id]}</p>
                  <div className=" border p-1 hover:bg-neutral-300 active:bg-neutral-600 items-center text-center flex">
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
              {/* For Mobile */}
              <div className="md:hidden grid grid-cols-2 items-center mt-8 mb-8 mr-8">
                <img
                  src={e.img}
                  alt="shoe"
                  className="h-[50px] w-[90px] m-auto"
                />
                <div className="space-y-1 relative mb-3">
                  <p>{e.title}</p>
                  <div className="flex items-center">
                    <div className=" border p-1 hover:bg-neutral-300 active:bg-neutral-600 items-center  flex">
                      <FaMinus
                        className="cursor-pointer text-center"
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                      />
                    </div>
                    <p className="border w-10 text-center">{cartItems[e.id]}</p>
                    <div className=" border p-1 hover:bg-neutral-300 active:bg-neutral-600 items-center text-center flex">
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
                    className="absolute right-0 flex border w-[80px] cursor-pointer hover:bg-neutral-300"
                    onClick={() => {
                      deleteFromCart(e.id);
                    }}
                  >
                    <MdDelete className=" fill-red-600 w-6 h-6" />
                    <p>Delete</p>
                  </div>
                </div>
              </div>

              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="lg:ml-5 ml-0">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <p className="font-bold text-2xl lg:mb-0 mb-4">Cart Totals</p>
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
        <div className="lg:block flex flex-col justify-between items-center lg:mt-0 mt-4">
          <div className="flex justify-between lg:w-[40rem] w-[22rem] space-y-5 items-center">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="lg:w-[40rem] w-[22rem]" />
          <div className="flex justify-between lg:w-[40rem] w-[22rem] space-y-5 items-center">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className="lg:w-[40rem] w-[22rem]" />
          <div className="flex justify-between lg:w-[40rem] w-[22rem] space-y-5 items-center font-bold lg:mb-5 mb-10">
            <p>Total</p>
            <p>{`$${getTotalCartAmount()}.00`}</p>
          </div>
        </div>

        <NavLink
          to={`${user ? "/checkout" : "/auth"}`}
          className="w-[15rem] border p-3 text-center flex m-auto justify-center uppercase bg-black text-white mt-5 mb-10 lg:m-0"
        >
          Proceed to Checkout
        </NavLink>
      </div>
    </div>
  );
};

export default CartItems;
