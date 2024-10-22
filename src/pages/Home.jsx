import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import products from "../db/data";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PopularProducts from "../components/ProductDisplay/PopularProducts";
import useProductFetchAll from "../hooks/useProductFetchAll";

const Home = ({ sidebar }) => {
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
  const { data: products } = useProductFetchAll();

  return (
    <div className=" bg-white h-screen overflow-hidden flex flex-col items-center gap-y-10 overflow-y-scroll">
      {/* md:w-[96rem] md:h-[30rem] */}
      <div className="flex items-center justify-center bg-white xl:p-10 box-border  mt-8">
        <Slider
          {...settings}
          className={`overflow-hidden  ${
            sidebar
              ? "xl:w-[70rem] lg:w-[40rem] md:w-[20rem]"
              : "xl:w-[80rem] lg:w-[60rem] md:w-[40rem] w-[20rem]"
          }`}
        >
          {products?.slice(0, 15).map((product) => (
            <img
              key={product.title}
              src={product.img}
              alt={product.title}
              // md:object-contain
              className={`rounded-lg box-border`}
            />
          ))}
        </Slider>
      </div>
      <p className="font-bold lg:text-3xl text-sm text-black p-4 rounded-lg ">
        Shop Through Our Variety of Products
      </p>
      <div className="xl:flex lg:gap-[3rem] gap-2 grid grid-cols-2 mb-10">
        <NavLink
          to="/shop"
          className={`w-[160px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10 ${
            sidebar
              ? "lg:h-[240px] lg:w-[250px] h-[140px]"
              : "lg:h-[250px] lg:w-[300px] h-[180px]"
          }`}
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Shoes
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/51t3v0drWbL._AC_SY395_.jpg"
            alt="shoe"
            className="lg:h-[210px] lg:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
        <NavLink
          to="/shop"
          className={`w-[160px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10 ${
            sidebar
              ? "lg:h-[240px] lg:w-[250px] h-[140px]"
              : "lg:h-[250px] lg:w-[300px] h-[180px]"
          }`}
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Sneakers
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/7106GdadSGL._AC_SY395_.jpg"
            alt="shoe"
            className="lg:h-[210px] lg:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
        <NavLink
          to="/shop"
          className={` w-[160px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10 ${
            sidebar
              ? "lg:h-[240px] lg:w-[250px] h-[140px]"
              : "lg:h-[250px] lg:w-[300px] h-[180px]"
          }`}
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Heels
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/71iX3CoNNcL._AC_SY500_.jpg"
            alt="shoe"
            className="lg:h-[210px] lg:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
        <NavLink
          to="/shop"
          className={` w-[160px] bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-2xl transition hover:-translate-y-5 ease-in-out md:duration-300 md:mb-0 mb-10 ${
            sidebar
              ? "lg:h-[240px] lg:w-[250px] h-[140px]"
              : "lg:h-[250px] lg:w-[300px] h-[180px]"
          }`}
        >
          <h1 className=" text-black z-10 font-semibold m-2 md:text-xl text-sm italic">
            Flats
          </h1>
          <img
            src="https://m.media-amazon.com/images/I/71gyleEVlaL._AC_SY395_.jpg"
            alt="shoe"
            className="lg:h-[210px] lg:w-[300px] h-[100px] w-[160px] rounded-lg"
          />
        </NavLink>
      </div>
      <h1 className="font-bold text-3xl flex justify-start">
        Our Popular Products
      </h1>
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default Home;
