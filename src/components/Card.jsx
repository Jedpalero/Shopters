import products from "../db/data";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center m-auto md:gap-[60px] md:mb-12 mb-[60px]">
      {products.map((product) => (
        <div
          className="md:h-[280px] h-[340px] border border-neutral-800 md:w-[260px] w-full flex flex-col items-center bg-neutral-800 rounded-lg mt-4 drop-shadow-lg overflow-hidden"
          key={product.title}
        >
          <img
            src={product.img}
            alt={product.title}
            className="md:h-[150px] h-[200px] md:w-[260px] w-full object-fill"
          />
          <div className="text-center mt-4">
            <h1 className="font-bold">{product.title}</h1>
          </div>
          <div className="flex gap-12 mt-10">
            <h1>{product.prevPrice}</h1>
            <p>{product.sold}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
