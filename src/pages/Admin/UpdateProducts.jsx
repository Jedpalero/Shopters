import { useContext, useEffect, useState } from "react";
import Header from "../../components/Settings/Header";
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify";
import useProductFetchAll from "../../hooks/useProductFetchAll";
import { useNavigate, useParams } from "react-router";

const UpdateProducts = () => {
  // const { deleteUser, updateUser } = useContext(ShopContext);
  const { id } = useParams();
  const { data: Product } = useProductFetchAll();
  const { updateProduct } = useContext(ShopContext);
  const navigate = useNavigate();

  const [editedUserData, setEditedUserData] = useState({
    img: "",
    img1: "",
    img2: "",
    details: "",
    title: "",
    star: "",
    reviews: "",
    sold: "",
    prevPrice: "",
    newPrice: "",
    company: "",
    color: "",
    category: "",
  });

  // Filter and fetch the product by ID
  useEffect(() => {
    const selectedProduct = Product?.find((prod) => prod.id === parseInt(id));
    if (selectedProduct) {
      setEditedUserData({
        img: selectedProduct.img,
        img1: selectedProduct.img1,
        img2: selectedProduct.img2,
        details: selectedProduct.details,
        title: selectedProduct.title,
        star: selectedProduct.star,
        reviews: selectedProduct.reviews,
        sold: selectedProduct.sold,
        prevPrice: selectedProduct.prevPrice,
        newPrice: selectedProduct.newPrice,
        company: selectedProduct.company,
        color: selectedProduct.color,
        category: selectedProduct.category,
      });
    }
  }, [id, Product]);

  // const {
  //   img,
  //   img1,
  //   img2,
  //   details,
  //   title,
  //   star,
  //   reviews,
  //   sold,
  //   prevPrice,
  //   newPrice,
  //   company,
  //   color,
  //   category,
  //   handleChanges,

  //   updateProduct,
  // } = useContext(ShopContext);

  // const handleAuth = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (
  //       img &&
  //       company &&
  //       details &&
  //       title &&
  //       star &&
  //       reviews &&
  //       sold &&
  //       prevPrice &&
  //       newPrice &&
  //       category &&
  //       color
  //     ) {
  //       registerProduct();
  //     }
  //   } catch (error) {
  //     return toast.error("All fields are mandatory to fill");
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  const handleAuth = async (event) => {
    event.preventDefault();
    try {
      const {
        img,
        img1,
        img2,
        company,
        details,
        title,
        star,
        reviews,
        sold,
        prevPrice,
        newPrice,
        category,
        color,
      } = editedUserData;

      if (
        img &&
        img1 &&
        img2 &&
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
        // Send the updated data to the server (registerProduct can be used here)
        //   updateProduct(editedUserData);
        // }
        // Add id to the request data
        const productData = { ...editedUserData, id }; // Ensure ID is included
        await updateProduct(productData); // Call the updateProduct function with the data
        navigate("/admin/allproductlist");
      } else {
        toast.error("All fields are mandatory to fill");
      }
    } catch (error) {
      return toast.error("All fields are mandatory to fill");
    }
    console.log(editedUserData);
  };

  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll">
      <Header />

      <div className="container">
        {/* {editUserId === prod.id ? ( */}
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
                value={editedUserData.img}
                id="imgs"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2 "
                onChange={handleInputChange}
              />
              <label htmlFor="image1" className="font-semibold">
                Image URL (Optional)
              </label>
              <input
                type="text"
                name="img1"
                value={editedUserData.img1}
                id="image1"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleInputChange}
              />
              <label htmlFor="image2" className="font-semibold">
                Image URL (Optional)
              </label>
              <input
                type="text"
                name="img2"
                value={editedUserData.img2}
                id="image2"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleInputChange}
              />
              <label htmlFor="company_" className="font-semibold">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={editedUserData.company}
                id="company_"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleInputChange}
              />
              <label htmlFor="color_" className="font-semibold">
                Flagship Brand Color
              </label>
              <input
                type="text"
                name="color"
                value={editedUserData.color}
                id="color_"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleInputChange}
              />
            </div>

            {/* Second Column */}
            <div className="flex flex-col">
              <label htmlFor="detail" className="font-semibold">
                Description
              </label>
              <textarea
                name="details"
                value={editedUserData.details}
                id="detail"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleInputChange}
              />
              <label htmlFor="titles" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={editedUserData.title}
                id="titles"
                autoComplete="on"
                required
                className="bg-transparent border border-b-[3px] rounded-md p-2"
                onChange={handleInputChange}
              />
              <div className="lg:flex lg:space-x-7">
                <div className="flex items-center gap-2">
                  <label htmlFor="stars" className="font-semibold">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="star"
                    value={editedUserData.star}
                    id="stars"
                    autoComplete="on"
                    placeholder="0-5"
                    min="0"
                    max="5"
                    required
                    className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="review" className="font-semibold">
                    Reviews
                  </label>
                  <input
                    type="number"
                    name="reviews"
                    value={editedUserData.reviews}
                    id="review"
                    autoComplete="on"
                    placeholder="0"
                    required
                    className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="sold_" className="font-semibold">
                    Sold
                  </label>
                  <input
                    type="number"
                    name="sold"
                    value={editedUserData.sold}
                    id="sold_"
                    autoComplete="on"
                    placeholder="0"
                    required
                    className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                    onChange={handleInputChange}
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
                  value={editedUserData.prevPrice}
                  id="previous_price"
                  autoComplete="on"
                  placeholder="0.00"
                  required
                  className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                  onChange={handleInputChange}
                />
                <label htmlFor="new_price" className="font-semibold">
                  New Price
                </label>
                <input
                  type="number"
                  name="newPrice"
                  value={editedUserData.newPrice}
                  id="new_price"
                  autoComplete="on"
                  placeholder="0.00"
                  required
                  className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-40"
                  onChange={handleInputChange}
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
                  value={editedUserData.category}
                  onChange={handleInputChange}
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
        {/* ) : (
            <>
              <div></div>
            </>
          )} */}
      </div>
    </div>
  );
};

export default UpdateProducts;
