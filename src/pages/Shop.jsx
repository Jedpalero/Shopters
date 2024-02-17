import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Card from "../components/Card";
import { useContext, useRef, useState } from "react";
import products from "../db/data";
import Input from "../components/Input";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ShopContext } from "../Context/ShopContext";

const Shop = ({ sidebar }) => {
  const [dropMenu, setDropMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("b1");
  const carousel = useRef(null);
  const { isMobile } = useContext(ShopContext);

  // input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        newPrice,
        sold,
        prevPrice,
        id,
        company,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          sold={sold}
          id={id}
          company={company}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  const numberOfProducts = result.length;

  return (
    <div className="grid h-screen grid-rows-[70px_1fr] bg-[#f5f5f5]">
      <div
        className={`flex items-center justify-between ${
          sidebar ? "lg:ml-5 lg:mr-11" : "lg:ml-[100px] lg:mr-[120px] lg:p-8 "
        }`}
      >
        <div className="relative flex gap-2 items-center justify-between lg:ml-4 ml-2">
          <input
            type="text1"
            id="text1"
            className={`h-10 lg:p-4 p-1 lg:ps-10 ps-10 text-sm lg:dark:bg-neutral-800  rounded-md lg:w-full outline-none ease-in-out duration-500 text-white ${
              showInput
                ? "w-[200px] bg-[#121212] bg-opactiy-40"
                : "w-[10px] bg-transparent"
            }`}
            placeholder="Search"
            required
            value={query}
            onChange={handleInputChange}
          />
          <div
            className={`absolute inset-y-0 flex items-center ps-3 lg:text-white text-black ${
              showInput ? "text-white" : "text-black"
            }`}
          >
            <FaSearch onClick={() => setShowInput(!showInput)} />
          </div>
        </div>
        <div className="flex items-center p-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlNk5NyNFgk6GT-5bGk2Wrl635pp-0hn9w&usqp=CAU"
            alt="shopping logo"
            className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
          />
          <h1 className="lg:text-xl text-black font-bold">ShopTers</h1>
        </div>
      </div>
      <div className="overflow-y-scroll text-white">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className={`flex justify-between p-3 overflow-hidden ml-2 mr-2 ${
            sidebar ? "" : "lg:ml-[140px]"
          }`}
        >
          <motion.div
            drag={isMobile ? "x" : ""}
            dragConstraints={carousel}
            className="flex items-center gap-3"
          >
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b1");
              }}
              value=""
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold  ${
                active === "b1"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              All
            </button>
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b2");
              }}
              value="Nike"
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b2"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Nike
            </button>
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b3");
              }}
              value="Adidas"
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b3"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Adidas
            </button>
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b4");
              }}
              value="Puma"
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b4"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Puma
            </button>
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b5");
              }}
              value="Vans"
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b5"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Vans
            </button>
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b6");
              }}
              value="Genshuo"
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b6"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Genshuo
            </button>
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b7");
              }}
              value="Dream Pairs"
              className={`lg:hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer lg:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b7"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Dream
            </button>
          </motion.div>
        </motion.div>
        <div>
          <div
            className={`text-black flex justify-end  mr-2 relative ${
              sidebar ? "" : "lg:ml-[150px]"
            }`}
          >
            <div
              className={`flex gap-3 items-center justify-between md:w-[180px] bg-neutral-800 p-1 rounded-sm pl-3 pr-2 cursor-pointer text-white ${
                sidebar ? "lg:mr-7" : "lg:mr-[140px]"
              }`}
              onClick={() => setDropMenu(!dropMenu)}
            >
              <h1 className="md:text-[15px] text-xs">Sort by: Featured</h1>
              {dropMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            {dropMenu && (
              <div
                className={`bg-neutral-800 text-white border lg:mt-6 mt-6 absolute lg:w-[300px] w-[200px] h-[250px] z-10 ${
                  sidebar ? "lg:mr-7" : "lg:mr-[8.6rem] ml-[10.5rem]"
                }`}
              >
                <div className="text-center space-y-2 mt-4">
                  <Input
                    handleChange={handleChange}
                    value="100"
                    title="Price: $0 to $100"
                    name="test2"
                  />
                  <Input
                    handleChange={handleChange}
                    value="150"
                    title="Price: $100 to $150"
                    name="test2"
                  />
                  <Input
                    handleChange={handleChange}
                    value="200"
                    title="Price: Over $200"
                    name="test2"
                  />

                  <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test2"
                  />
                  <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="Sandals"
                    name="test2"
                  />
                  <Input
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="test2"
                  />
                  <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="test2"
                  />
                </div>
              </div>
            )}
          </div>
          <p
            className={`ml-4 text-xs text-black ${
              sidebar ? "lg:ml-8" : "lg:ml-[150px]"
            }`}
          >
            <b>{`Showing ${numberOfProducts}`}</b> out of 31 Products
          </p>

          <div
            className={`flex flex-wrap justify-center m-auto lg:gap-6 gap-4 md:mb-10 mb-[10px] mt-5 ${
              sidebar ? "lg:ml-5 lg:mr-11" : "lg:ml-[100px] lg:mr-[110px]"
            }`}
          >
            {result}
          </div>
        </div>

        <NewsLetter sidebar={sidebar} />
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
