import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Card = ({
  img,
  title,
  star,
  reviews,
  sold,
  newPrice,
  id,
  company,
  prevPrice,
}) => {
  const totalStars = 5; // Maximum number of stars to display
  const filledStars = Math.min(star, totalStars);
  return (
    <div className="text-black lg:w-[18rem] lg:h-[25rem] w-[10rem] h-[15rem] bg-white rounded-lg drop-shadow-lg transition ease-in-out hover:translate-y-3 duration-150">
      <Link to={`/detail/${id}`}>
        <div className="flex items-center justify-center mt-10">
          <img
            src={img}
            alt={title}
            className="lg:w-[200px] lg:h-[130px] w-[100px] h-[80px] object-scale-down"
          />
        </div>
        <div className="lg:mt-8 lg:p-5 p-2 lg:space-y-5 space-y-2 lg:text-md text-xs">
          <p className="text-orange-500">{company}</p>
          <p className="font-semibold lg:text-sm">{title}</p>
          {/* <div className="text-yellow-400 flex">
            {star}
            {star}
            {star}
            {star}
          </div> */}
          <div className="text-yellow-400 flex">
            {/* Render filled stars */}
            {[...Array(filledStars)].map((_, index) => (
              <AiFillStar key={index} />
            ))}

            {/* Render empty stars for the remaining */}
            {[...Array(totalStars - filledStars)].map((_, index) => (
              <AiFillStar key={index + filledStars} className="text-gray-300" />
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p className="text-red-500">{`$${newPrice}`}</p>
              <del className="text-gray-600">{prevPrice}</del>
            </div>
            <div>{sold} sold</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
