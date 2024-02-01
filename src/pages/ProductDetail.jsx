// import products from "../db/data";
// import { useDispatch } from "react-redux";
import { useContext } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";

const ProductDetail = () => {
  const { data } = useContext(ShopContext);
  const { id: productId } = useParams();
  const product = data.find((e) => e.id === Number(productId));

  return (
    <div>
      <img src={product.img} alt="picture" />
      Hello
    </div>
  );
};

export default ProductDetail;
