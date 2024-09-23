import { useContext } from "react";
import Header from "../../components/Settings/Header";
import { ShopContext } from "../../Context/ShopContext";

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
  return (
    <div className="bg-[#f5f5f5] h-screen overflow-y-scroll">
      <Header />
      <div></div>
    </div>
  );
};

export default AddProducts;
