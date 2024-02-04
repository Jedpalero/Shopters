import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Card from "../components/Card";
import { useState } from "react";
import products from "../db/data";
import Input from "../components/Input";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer";

const Shop = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("b1");

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
      ({ img, title, star, reviews, newPrice, sold, prevPrice, id }) => (
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
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  // put scroll to top for mobile version

  return (
    <div className="grid h-screen grid-rows-[70px_1fr] bg-[#f5f5f5]">
      <div className="flex items-center justify-between md:p-8 md:ml-[100px] md:mr-[120px]">
        <div className="relative flex gap-2 items-center justify-between md:ml-4 ml-2">
          <input
            type="text1"
            id="text1"
            className={`h-10 md:p-4 p-1 md:ps-10 ps-10 text-sm md:dark:bg-neutral-800  rounded-md md:w-full outline-none ease-in-out duration-500 text-white ${
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
            className={`absolute inset-y-0 flex items-center ps-3 md:text-white text-black ${
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
            className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
          />
          <h1 className="md:text-xl text-black font-bold">ShopTers</h1>
        </div>
      </div>
      <div className="md:scrollbar overflow-y-scroll text-white">
        <div className="flex justify-between p-3 overflow-hidden md:ml-[140px]">
          <div className="flex items-center gap-3">
            <button
              onClick={(event) => {
                setSelectedCategory(event.target.value);
                setActive("b1");
              }}
              value=""
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold  ${
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
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800 ${
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
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800 ${
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
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800 ${
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
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800 ${
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
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800 ${
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
              className={`hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer md:text-sm text-xs font-semibold bg-neutral-800 ${
                active === "b7"
                  ? "bg-white text-black border drop-shadow-md"
                  : "bg-neutral-800"
              }`}
            >
              Dream
            </button>
          </div>
        </div>
        <div>
          <div className="text-black flex justify-end mr-2 relative">
            <div
              className="flex gap-3 items-center justify-between md:w-[180px] bg-neutral-800 p-1 rounded-sm pl-3 pr-2 cursor-pointer text-white md:mr-[140px]"
              onClick={() => setDropMenu(!dropMenu)}
            >
              <h1 className="md:text-[15px] text-xs">Sort by: Featured</h1>
              {dropMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            {dropMenu && (
              <div className="bg-neutral-800 text-white border md:mt-6 mt-6 absolute md:w-[300px] w-[200px] h-[250px] z-10 md:mr-[140px]">
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

          <div className="flex flex-wrap justify-center m-auto md:gap-[60px] gap-4 md:mb-10 mb-[10px]">
            {result}
          </div>
        </div>

        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
