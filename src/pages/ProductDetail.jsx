// import products from "../db/data";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";
import Products from "../components/ProductDisplay/Products";
import Description from "../components/ProductDisplay/Description";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { data } = useContext(ShopContext);
  const { id: productId } = useParams();
  const product = data.find((e) => e.id === Number(productId));
  const [image, setImage] = useState(product.img);

  return (
    <div className="overflow-y-scroll h-screen overflow-hidden">
      <Products product={product} image={image} setImage={setImage} />
      <Description product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
