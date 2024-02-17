import { Link } from "react-router-dom";
import data from "../../db/data";
import { motion } from "framer-motion";

const PopularProducts = () => {
  return (
    <div className="flex flex-wrap over flex-row justify-center gap-3">
      <div className="text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-white rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150">
        <div className="lg:p-8 p-3 lg:space-y-8 space-y-3">
          <div className="flex gap-10">
            <img
              src="https://m.media-amazon.com/images/I/51n1wPtHEAL._AC_SY395_.jpg"
              alt="shoe1"
              className="lg:w-[50px] lg:h-[20px] w-[30px] h-[20px] object-scale-down"
            />
            <h1 className="font-semibold lg:text-[15px] text-xs">
              Shoe Collection
            </h1>
          </div>
          <div className="flex gap-10">
            <img
              src="https://m.media-amazon.com/images/I/61d2WpLPqBL._AC_SY575_.jpg"
              alt="shoe1"
              className="lg:w-[50px] lg:h-[20px] w-[30px] h-[20px] object-scale-down"
            />
            <h1 className="font-semibold lg:text-[15px] text-xs">
              Sneaker Collection
            </h1>
          </div>
          <div className="flex gap-10">
            <img
              src="https://m.media-amazon.com/images/I/61wxJLeH+zL._AC_SY500_.jpg"
              alt="shoe1"
              className="lg:w-[50px] lg:h-[33px] w-[30px] h-[20px] object-scale-down"
            />
            <h1 className="font-semibold lg:text-[15px] text-xs">
              Heels Collection
            </h1>
          </div>
        </div>
      </div>
      <div className="text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-[#fad76f] rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150 overflow-hidden">
        <div className="p-8 lg:space-y-6 space-y-1 lg:text-sm text-xs">
          <p>15% OFF</p>
          <p className="font-bold lg:text-xl">Sneakers</p>
          <p>From $199 or $6.72/mo. for 24 mo.*</p>
        </div>
        <div className="flex ml-12">
          <img
            src="https://img.freepik.com/premium-vector/drawing-shoe-with-yellow-background_410516-81019.jpg"
            alt="shoe"
            className="lg:w-[300px] lg:h-[230px] object-contain"
          />
        </div>
      </div>
      {data.slice(0, 3).map((product) => (
        <div
          className="grid text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-white rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150"
          key={product.title}
        >
          <Link to={`/detail/${product.id}`}>
            <div className="grid items-center justify-center mt-10">
              <img
                src={product.img}
                alt={product.title}
                className="lg:w-[200px] lg:h-[130px] w-[100px] h-[80px] object-scale-down"
              />
            </div>
            <div className="lg:mt-8 lg:p-5 p-2 lg:space-y-5 space-y-2 lg:text-md text-xs">
              <p className="text-orange-500">{product.company}</p>
              <p className="font-semibold">{product.title}</p>
              <div className="text-yellow-400 flex">
                {product.star}
                {product.star}
                {product.star}
                {product.star}
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <p className="text-red-500">{`$${product.newPrice}.00`}</p>
                  <del className="text-gray-600">{product.prevPrice}</del>
                </div>
                <div>{product.sold}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
