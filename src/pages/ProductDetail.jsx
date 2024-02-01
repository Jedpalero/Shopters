// import products from "../db/data";
// import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
  const { data } = useContext(ShopContext);
  const { id: productId } = useParams();
  const product = data.find((e) => e.id === Number(productId));
  const [image, setImage] = useState(product.img);

  return (
    <div>
      <div className="flex items-center justify-between m-6">
        <Link
          to="/shop"
          className="flex items-center gap-3  transition hover:-translate-x-2 delay-100"
        >
          <FaArrowCircleLeft className="text-3xl" />
          <h1 className="font-bold text-lg">Go Back</h1>
        </Link>
        <FaShoppingCart className="text-3xl" />
      </div>
      <div className="flex justify-center gap-10">
        <img src={image} alt="picture" className="block h-[500px] w-[800px]" />
        <div className="space-y-10">
          <h1 className="font-bold text-4xl">{product.title}</h1>
          <p className="w-[600px]">{product.details}</p>
          <div className="flex items-center gap-1">
            {product.star}
            {product.star}
            {product.star}
            {product.star}
            {product.reviews}
          </div>
          <div className="flex gap-5 font-bold text-blue-700 text-xl">
            <del>{product.prevPrice}</del>
            <h1>{product.newPrice}</h1>
          </div>
          <h1 className="font-semibold">Select Size</h1>
          <div className="flex gap-3">
            <div className="border w-[70px] text-center p-2 rounded-lg">SM</div>
            <div className="border w-[70px] text-center p-2 rounded-lg">MD</div>
            <div className="border w-[70px] text-center p-2 rounded-lg">LG</div>
            <div className="border w-[70px] text-center p-2 rounded-lg">XL</div>
            <div className="border w-[70px] text-center p-2 rounded-lg">
              XLL
            </div>
          </div>
          <h1>Color: White/Black</h1>
          <div className="flex gap-2">
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
          <div className="uppercase font-bold bg-neutral-800 w-[200px] text-center text-white p-5 rounded-lg">
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
