import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useState } from "react";
import FooterMenu from "./mobile/FooterMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Order from "./pages/Order";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        className={`main overflow-hidden grid-rows-[70px_1fr] ${
          sidebar
            ? "md:grid-cols-[300px_1fr]"
            : "md:grid-cols-[70px_1fr] grid-cols-[0px_1fr]"
        }`}
      >
        <div className={`sidebar md:flex hidden`}>
          <Navigation sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/shop" element={<Shop sidebar={sidebar} />} />
            <Route
              path="/detail/:id"
              element={<ProductDetail sidebar={sidebar} />}
            />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<Checkout sidebar={sidebar} />} />
          </Routes>
        </main>
        <div className="md:hidden block h-[50px] bg-[#0f0f0f] bg-opacity-60 w-full absolute bottom-0">
          <FooterMenu />
        </div>
      </div>
    </>
  );
}

export default App;
