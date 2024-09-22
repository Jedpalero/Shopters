import Header from "../../components/Settings/Header";
import useProductFetchAll from "../../hooks/useProductFetchAll";

const AllProducts = () => {
  const { data: Product } = useProductFetchAll();

  console.log(Product);

  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll">
      <Header />
      <div className="grid grid-cols-2 gap-4 p-4">
        {Product?.length > 0 ? (
          Product?.map((product) => (
            <div key={product?.id}>
              <img
                src={product?.img}
                alt={`product-${product?.id}`}
                className="w-full h-auto"
              />
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
