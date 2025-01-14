import { Route, Routes, Navigate } from "react-router-dom";
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
import Setting from "./pages/Setting";
import ErrorNotFound from "./components/ErrorNotFound";
import AdminRoute from "./pages/Admin/AdminRoute";
import AllProducts from "./pages/Admin/AllProducts";
import AddProducts from "./pages/Admin/AddProducts";
import UpdateProducts from "./pages/Admin/UpdateProducts";
import useDataFetch from "./hooks/useDataFetch";
// import { ShopContext } from "./Context/ShopContext";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const { data } = useDataFetch();

  // const openCloseDropDown = () => {
  //   setDropMenu((prev) => !prev);
  // };

  const closeDropDown = () => {
    if (setDropMenu) {
      setDropMenu(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        className={`main overflow-hidden grid-rows-[70px_1fr] ${
          sidebar
            ? "lg:grid-cols-[300px_1fr] grid-cols-[0px_1fr]"
            : "lg:grid-cols-[70px_1fr] grid-cols-[0px_1fr]"
        }`}
      >
        <div className={`sidebar lg:flex hidden`}>
          <Navigation sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <main className="content" onClick={closeDropDown}>
          <Routes>
            <Route path="/" element={<Home sidebar={sidebar} />} />
            <Route
              path="/auth"
              element={!data ? <Auth /> : <Navigate to="/" />}
            />
            <Route path="/shop" element={<Shop sidebar={sidebar} />} />
            <Route
              path="/detail/:id"
              element={<ProductDetail sidebar={sidebar} />}
            />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<Checkout sidebar={sidebar} />} />

            <Route path="/settings" element={<Setting sidebar={sidebar} />} />

            <Route path="/admin" element={<AdminRoute />}>
              <Route
                path="allproductlist"
                element={
                  data?.role === "admin" ? (
                    <AllProducts />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="addproduct"
                element={
                  data?.role === "admin" ? (
                    <AddProducts />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="product/update/:id"
                // path="product/update"
                element={
                  data?.role === "admin" ? (
                    <UpdateProducts />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Route>

            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </main>
        <div className="lg:hidden block h-[50px] bg-[#0f0f0f] bg-opacity-60 w-full fixed bottom-0">
          <FooterMenu
          // openCloseDropDown={openCloseDropDown}
          // dropMenu={dropMenu}
          />
        </div>
      </div>
    </>
  );
}

export default App;
