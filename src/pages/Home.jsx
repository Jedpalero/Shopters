import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../db/data";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gradient-to-r from-black h-full overflow-hidden flex flex-col items-center gap-y-10">
      <div className="flex items-center justify-center bg-white p-10 w-full md:h-[30rem] drop-shadow-2xl">
        <Slider
          {...settings}
          className="overflow-hidden md:w-[90rem] w-[18rem]"
        >
          {products.slice(0, 15).map((product) => (
            <img
              key={product.title}
              src={product.img}
              alt={product.title}
              className="rounded-lg md:object-contain"
            />
          ))}
        </Slider>
      </div>
      <p className="font-bold uppercase md:text-4xl text-sm bg-gradient-to-r from-black text-white p-4 rounded-lg">
        Shop Through Our Variety of Products
      </p>
      <div className="md:flex md:gap-[3rem] gap-2 grid grid-cols-2">
        <div className="md:h-[300px] md:w-[350px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:translate-y-5 ease-in-out duration-300 md:mb-0 mb-10">
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Shoes
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </div>
        <div className="md:h-[300px] md:w-[350px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10">
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Sneakers
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </div>
        <div className="md:max-h-[300px] md:w-[350px] max-h-[135px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10">
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Heels
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </div>
        <div className="md:h-[300px] md:w-[350px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10">
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Sandals
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
