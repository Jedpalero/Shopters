import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Card from "../components/Card";
import { useState } from "react";
import products from "../db/data";
import Button from "../components/Button";
import Input from "../components/Input";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer";

const Shop = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

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

  // button filter
  const handleClick = (event) => {
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
      <div className=" flex items-center p-8">
        <div className="relative flex gap-2">
          <input
            type="text1"
            id="text1"
            className="block w-full md:p-4 p-1 md:ps-10 ps-10 text-sm text-[gray-900] border border-gray-300 rounded-lg  dark:bg-neutral-800 dark:border-gray-600  dark:text-white "
            placeholder="Search"
            required
            value={query}
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 flex items-center ps-3 text-white">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="scrollbar overflow-y-scroll text-white">
        <div className="flex justify-between p-3 overflow-hidden">
          <div className="flex items-center gap-3">
            <Button onClickHandler={handleClick} value="" title="All" />
            <Button onClickHandler={handleClick} value="Nike" title="Nike" />
            <Button
              onClickHandler={handleClick}
              value="Adidas"
              title="Adidas"
            />
            <Button onClickHandler={handleClick} value="Puma" title="Puma" />
            <Button onClickHandler={handleClick} value="Vans" title="Vans" />
            <Button
              onClickHandler={handleClick}
              value="Genshuo"
              title="Genshuo"
            />
            <Button
              onClickHandler={handleClick}
              value="Dream Pairs"
              title="Dream"
            />
          </div>
        </div>
        <div>
          <div className="text-black flex justify-end mr-2 relative">
            <div
              className="flex gap-3 items-center justify-between md:w-[180px] bg-neutral-800 p-1 rounded-md pl-3 pr-2 cursor-pointer text-white "
              onClick={() => setDropMenu(!dropMenu)}
            >
              <h1 className="md:text-[15px] text-xs">Sort by: Featured</h1>
              {dropMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            {dropMenu && (
              <div className="bg-neutral-800 text-white border md:mt-6 mt-6 absolute w-[300px] h-[250px] z-10">
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

          <div className="flex flex-wrap justify-center m-auto md:gap-[60px] gap-4 md:mb-12 mb-[60px]">
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
