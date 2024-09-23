import { Link } from "react-router-dom";
import Header from "../../components/Settings/Header";
import useProductFetchAll from "../../hooks/useProductFetchAll";

const AllProducts = () => {
  const { data: Product } = useProductFetchAll();

  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll">
      <Header />
      {/* <div className="grid grid-cols-2 gap-4 p-4">
        {Product?.length > 0 && (
          Product?.map((product) => (
            <div key={product?.id}>
              <img
                src={product?.img}
                alt={`product-${product?.id}`}
                className="w-full h-auto"
              />
            </div>
          ))
        )}
      </div> */}
      <div className="container mx-[9rem]">
        <div className="flex flex-col md:flex-row">
          <div className="p-3">
            <div className="ml-[2rem] text-xl font-bold h-12">
              All Products ({Product?.length})
            </div>

            <div className="flex flex-wrap justify-around items-center">
              {Product?.map((product) => (
                <Link
                  key={product.id}
                  to={`/admin/product/update/${product._id}`}
                  className="block mb-4 overflow-hidden"
                >
                  <div className="flex">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-[10rem] object-contain"
                    />

                    <div className="p-4 flex-flex-col justify-around">
                      <div className="flex justify-between">
                        <h5 className="text-xl font-semibold mb-2">
                          {product?.title}
                        </h5>

                        <p className="text-gray-400 text-sm">
                          {/* {moment(product.createAt).format("MMMM Do YYYY")} */}
                        </p>
                      </div>

                      <p className="text-gray-400 xl:w-[30rem] md:w-[20rem] sm:w-[10rem] text-sm mb-4">
                        {product?.details.substring(0, 160)}...
                      </p>

                      <div className="flex justify-between">
                        {/* <Link
                        to={`/admin/product/update/${product._id}`}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                      >
                        Update Product
                        <svg
                          className="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link> */}
                        <p>$ {product?.newPrice}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
