import { Link } from "react-router-dom";
import data from "../../db/data";

const PopularProducts = () => {
  return (
    <div className="flex gap-2">
      <div className="text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-white rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150">
        <div className="flex items-center justify-center mt-10">
          <img
            src="https://m.media-amazon.com/images/I/61FwDD6em2L._AC_SX575_.jpg"
            alt="shoe"
            className="lg:w-[200px] lg:h-[130px] w-[100px] h-[80px] object-scale-down"
          />
        </div>
        <div className="lg:mt-8 lg:p-5 p-2 lg:space-y-5 space-y-2 lg:text-md text-xs">
          <p className="text-orange-500">:</p>
          <p className="font-semibold"></p>
          <div className="text-yellow-400 flex">
            {/* {product.star}
              {product.star}
              {product.star}
              {product.star} */}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="text-red-500"></p>
              <del className="text-gray-600"></del>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-white rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150">
        <div className="flex items-center justify-center mt-10">
          <img
            src="https://m.media-amazon.com/images/I/61FwDD6em2L._AC_SX575_.jpg"
            alt="shoe"
            className="lg:w-[200px] lg:h-[130px] w-[100px] h-[80px] object-scale-down"
          />
        </div>
        <div className="lg:mt-8 lg:p-5 p-2 lg:space-y-5 space-y-2 lg:text-md text-xs">
          <p className="text-orange-500">:</p>
          <p className="font-semibold"></p>
          <div className="text-yellow-400 flex">
            {/* {product.star}
              {product.star}
              {product.star}
              {product.star} */}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="text-red-500"></p>
              <del className="text-gray-600"></del>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {data.slice(0, 4).map((product) => (
        <div
          className="text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-white rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150"
          key={product.title}
        >
          <Link to={`/detail/${product.id}`}>
            <div className="flex items-center justify-center mt-10">
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
