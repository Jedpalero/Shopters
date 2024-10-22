import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";
import Products from "../components/ProductDisplay/Products";
import Description from "../components/ProductDisplay/Description";
import Footer from "../components/Footer";
import useProductFetchAll from "../hooks/useProductFetchAll";

const ProductDetail = ({ sidebar }) => {
  // const { data } = useContext(ShopContext);
  const { data } = useProductFetchAll();
  const { id: productId } = useParams();
  const product = data?.find((e) => e.id === Number(productId));
  const [image, setImage] = useState(product.img);

  return (
    <div className="overflow-y-scroll h-screen overflow-hidden">
      <Products
        product={product}
        image={image}
        setImage={setImage}
        sidebar={sidebar}
      />
      <Description product={product} sidebar={sidebar} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
