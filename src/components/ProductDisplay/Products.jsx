import { Link, NavLink } from "react-router-dom";
import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const Products = ({ product, image, setImage, sidebar }) => {
  const { addToCart, getTotalCartItems } = useContext(ShopContext);

  return (
    <div>
      <div
        className={`flex items-center justify-between m-6  ${
          sidebar ? "" : "md:ml-[120px] md:mr-[130px]"
        }`}
      >
        <Link
          to="/shop"
          className="flex items-center gap-3  transition hover:-translate-x-2 delay-100"
        >
          <FaArrowCircleLeft className="text-3xl" />
          <h1 className="font-bold text-lg">Go Back</h1>
        </Link>
        <NavLink to="/order" className="flex relative">
          <FaShoppingCart className="text-3xl mt-4 mr-5" />
          <p className="bg-red-500 text-white ml-5 absolute w-6 text-center rounded-full">
            {getTotalCartItems()}
          </p>
        </NavLink>
      </div>
      <div className="md:flex md:justify-center md:gap-10 mb-[60px] md:ml-[120px] md:mr-[130px]">
        <img
          src={image}
          alt="picture"
          className="block md:h-[500px] md:w-[800px] h-[200px] w-[300px] m-auto md:m-0 object-contain"
        />
        <div className="md:space-y-10 space-y-5 md:block flex flex-col items-center">
          <h1 className="font-bold md:text-4xl text-xl md:text-start text-center">
            {product.title}
          </h1>
          <p className="md:w-[690px] w-[370px] md:text-start text-center">
            {product.details}
          </p>
          <div className="flex items-center md:justify-start justify-center gap-1">
            {product.star}
            {product.star}
            {product.star}
            {product.star}
            {product.reviews}
          </div>
          <div className="flex gap-5 font-bold text-blue-700 text-xl md:justify-start justify-center">
            <del>{product.prevPrice}</del>
            <h1>{`$${product.newPrice}.00`}</h1>
          </div>
          <h1 className="font-semibold md:text-start text-center">
            Select Size
          </h1>
          <div className="flex gap-3 md:justify-start justify-center">
            <div className="border md:w-[70px] w-12 text-center md:p-2 rounded-lg">
              SM
            </div>
            <div className="border md:w-[70px] w-12 text-center md:p-2 rounded-lg">
              MD
            </div>
            <div className="border md:w-[70px] w-12 text-center md:p-2 rounded-lg">
              LG
            </div>
            <div className="border md:w-[70px] w-12 text-center md:p-2 rounded-lg">
              XL
            </div>
            <div className="border md:w-[70px] w-12 text-center md:p-2 rounded-lg">
              XLL
            </div>
          </div>
          <h1 className="md:text-start text-center">Color: White/Black</h1>
          <div className="flex gap-2 md:justify-start justify-center">
            <img
              src={product.img}
              alt="img"
              className="h-10 w-12 border border-black cursor-pointer"
              onClick={() => setImage(product.img)}
            />
            <img
              src={product.img1}
              alt="img1"
              className="h-10 w-12 border border-black cursor-pointer"
              onClick={() => setImage(product.img1)}
            />
            <img
              src={product.img2}
              alt="img2"
              className="h-10 w-12 border border-black cursor-pointer"
              onClick={() => setImage(product.img2)}
            />
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
              toast.success(`${product.title} Added To Cart`);
            }}
            className="uppercase font-bold bg-neutral-800 w-[200px] text-center text-white md:p-5 p-2 rounded-lg m-auto md:m-0 cursor-pointer active:bg-neutral-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
