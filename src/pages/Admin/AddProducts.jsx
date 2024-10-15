import { useContext } from "react";
import Header from "../../components/Settings/Header";
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify";

const AddProducts = () => {
  const {
    img,
    img1,
    img2,
    details,
    title,
    star,
    reviews,
    sold,
    prevPrice,
    newPrice,
    company,
    color,
    category,
    handleChanges,
    registerProduct,
  } = useContext(ShopContext);

  const handleAuth = async (event) => {
    event.preventDefault();
    try {
      if (
        img &&
        company &&
        details &&
        title &&
        star &&
        reviews &&
        sold &&
        prevPrice &&
        newPrice &&
        category &&
        color
      ) {
        registerProduct();
      }
    } catch (error) {
      return toast.error("All fields are mandatory to fill");
    }
  };
  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll">
      <Header />
      <div className="container">
        <form
          className=" drop-shadow-lg lg:pl-[60px] lg:pr-[60px] pl-4 pr-4"
          onSubmit={handleAuth}
        >
          <div className="grid grid-cols-2 gap-2">
            {/* first Column */}
            <div className="flex flex-col">
              <label htmlFor="imgs" className="font-semibold">
                Image URL
              </label>
              <input
                type="text"
                name="img"
                value={img}
                id="imgs"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2 "
                onChange={handleChanges}
              />
              <label htmlFor="image1" className="font-semibold">
                Image URL (Optional)
              </label>
              <input
                type="text"
                name="img1"
                value={img1}
                id="image1"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleChanges}
              />
              <label htmlFor="image2" className="font-semibold">
                Image URL (Optional)
              </label>
              <input
                type="text"
                name="img2"
                value={img2}
                id="image2"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleChanges}
              />
              <label htmlFor="company_" className="font-semibold">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={company}
                id="company_"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleChanges}
              />
              <label htmlFor="color_" className="font-semibold">
                Flagship Brand Color
              </label>
              <input
                type="text"
                name="color"
                value={color}
                id="color_"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleChanges}
              />
            </div>

            {/* Second Column */}
            <div className="flex flex-col">
              <label htmlFor="detail" className="font-semibold">
                Description
              </label>
              <textarea
                name="details"
                value={details}
                id="detail"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleChanges}
              />
              <label htmlFor="titles" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                id="titles"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleChanges}
              />
              <div className="lg:flex lg:space-x-7">
                <div className="flex items-center gap-2">
                  <label htmlFor="stars" className="font-semibold">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="star"
                    value={star}
                    id="stars"
                    autoComplete="on"
                    placeholder="0-5"
                    min="0"
                    max="5"
                    required
                    className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                    onChange={handleChanges}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="review" className="font-semibold">
                    Reviews
                  </label>
                  <input
                    type="number"
                    name="reviews"
                    value={reviews}
                    id="review"
                    autoComplete="on"
                    placeholder="0"
                    required
                    className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                    onChange={handleChanges}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="sold_" className="font-semibold">
                    Sold
                  </label>
                  <input
                    type="number"
                    name="sold"
                    value={sold}
                    id="sold_"
                    autoComplete="on"
                    placeholder="0"
                    required
                    className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="space-x-2">
                <label htmlFor="previous_price" className="font-semibold">
                  Previous Price
                </label>
                <input
                  type="number"
                  name="prevPrice"
                  value={prevPrice}
                  id="previous_price"
                  autoComplete="on"
                  placeholder="0.00"
                  required
                  className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                  onChange={handleChanges}
                />
                <label htmlFor="new_price" className="font-semibold">
                  New Price
                </label>
                <input
                  type="number"
                  name="newPrice"
                  value={newPrice}
                  id="new_price"
                  autoComplete="on"
                  placeholder="0.00"
                  required
                  className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                  onChange={handleChanges}
                />
              </div>
              <div className="mt-2 flex flex-col">
                <label htmlFor="categories" className="font-semibold">
                  Type of shoe:
                </label>

                <select
                  name="category"
                  id="categories"
                  className="p-2 rounded-md"
                  value={category}
                  onChange={handleChanges}
                >
                  <option value="...">...</option>
                  <option value="sneakers">sneakers</option>
                  <option value="sandals">sandals</option>
                  <option value="flats">flats</option>
                  <option value="heels">heels</option>
                  <option value="boots">boots</option>
                  <option value="flip-flops">flip-flops</option>
                  <option value="cleats">cleats</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 mb-5 p-2  text-white rounded-md flex m-auto font-semibold justify-center ease-in duration-100 hover:translate-y-1 hover:scale-110  bg-blue-700 hover:bg-blue-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
