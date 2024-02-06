import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../db/data";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

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
    <div className=" bg-white h-full overflow-hidden flex flex-col items-center gap-y-10 overflow-y-scroll">
      <div className="flex items-center justify-center bg-white p-10 md:w-[96rem] md:h-[30rem]  mt-8">
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
      <p className="font-bold uppercase md:text-4xl text-sm drop-shadow-lg bg-white text-black p-4 rounded-lg">
        Shop Through Our Variety of Products
      </p>
      <div className="md:flex md:gap-[3rem] gap-2 grid grid-cols-2 mb-10">
        <NavLink
          to="/shop"
          className="md:h-[250px] md:w-[300px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out duration-300 md:mb-0 mb-10"
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Shoes
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/51t3v0drWbL._AC_SY395_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
        <NavLink
          to="/shop"
          className="md:h-[250px] md:w-[300px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10"
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Sneakers
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/7106GdadSGL._AC_SY395_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
        <NavLink
          to="/shop"
          className="md:max-h-[250px] md:w-[300px] max-h-[135px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10"
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Heels
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/71gbhKDkYLL._AC_SY500_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
        <NavLink
          to="/shop"
          className="md:h-[250px] md:w-[300px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10"
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Flats
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/71gyleEVlaL._AC_SY395_.jpg"
            alt="shoe"
            className="md:h-[210px] md:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
