import { Link } from "react-router-dom";

const Card = ({ img, title, star, reviews, sold, newPrice, id }) => {
  return (
    <div className="md:w-auto">
      {/* {products.map((product) => ( */}
      <div
        className="lg:h-[280px] h-[180px] lg:w-[260px] w-[150px]  border-neutral-800  lg:flex lg:flex-col grid grid-col-2 lg:items-center bg-gradient-to-t from-black rounded-lg mt-4 drop-shadow-xl overflow-hidden transition ease-in-out hover:translate-y-3 duration-150"
        key={title}
      >
        <Link to={`/detail/${id}`}>
          <img
            src={img}
            alt={title}
            className="lg:h-[150px] h-[100px] lg:w-[260px] w-[200px] object-fill"
          />
          <div className="text-center mt-4">
            <h1 className="font-bold lg:text-[15px] text-[10px]">{title}</h1>
          </div>
          <div className="flex justify-between m-5 lg:mt-10 mt-3 lg:text-[15px] text-[10px]">
            <h1>{`$${newPrice}.00`}</h1>
            <p>{sold}</p>
          </div>
        </Link>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Card;
