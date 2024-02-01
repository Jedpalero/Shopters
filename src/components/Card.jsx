const Card = ({ img, title, star, reviews, sold, newPrice }) => {
  return (
    <div className="md:w-auto w-full">
      {/* {products.map((product) => ( */}
      <div
        className="md:h-[280px] h-[340px] border border-neutral-800 md:w-[260px] flex flex-col items-center bg-neutral-800 rounded-lg mt-4 drop-shadow-lg overflow-hidden"
        key={title}
      >
        <img
          src={img}
          alt={title}
          className="md:h-[150px] h-[200px] md:w-[260px] w-full object-fill"
        />
        <div className="text-center mt-4">
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex gap-12 mt-10">
          <h1>{newPrice}</h1>
          <p>{sold}</p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Card;
