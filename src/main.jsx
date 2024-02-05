import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
// import {
//   Navigate,
//   Route,
//   RouterProvider,
//   createRoutesFromElements,
// } from "react-router";
import "./index.css";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import Home from "./pages/Home.jsx";
// import Shop from "./pages/Shop.jsx";
// import ProductDetail from "./pages/ProductDetail.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import MyContextProvider from "./MyContext.jsx";
// import Order from "./pages/Order.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/shop" element={<Shop />} />
//       <Route path="/detail/:id" element={<ProductDetail />} />
//       <Route path="/order" element={<Order />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </ShopContextProvider>
  </MyContextProvider>
);
