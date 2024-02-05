import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "./firebase-config";
// import { MyContext } from "./MyContext";
// import { useNavigate } from "react-router-dom";
import FooterMenu from "./mobile/FooterMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Order from "./pages/Order";
import Auth from "./pages/Auth";

function App() {
  const [sidebar, setSidebar] = useState(false);
  // const [userCredentials, setUserCredentials] = useState({});
  // const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const [isMobile, setIsMobile] = useState(() => window.innerWidth < 720);

  // //ccc@gmail.cm 123456
  // //uninstall redux toolkit

  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  // // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  // const handleCredentials = (e) => {
  //   setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  // };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   setError("");

  //   createUserWithEmailAndPassword(
  //     auth,
  //     userCredentials.email,
  //     userCredentials.password
  //   )
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       toast.success("User successfully registered");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       toast.error(error.message);
  //     });
  // };

  // const handleSignin = (e) => {
  //   e.preventDefault();
  //   // setLoading(true);
  //   setError("");

  //   signInWithEmailAndPassword(
  //     auth,
  //     userCredentials.email,
  //     userCredentials.password
  //   )
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       toast.success("Login successfully");
  //       // setLoading(false);
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       toast.error(error.message);
  //       navigate("/login");
  //       // setLoading(false);
  //     });
  // };

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <ToastContainer />
      <div
        className={`main overflow-hidden grid-rows-[70px_1fr] ${
          sidebar
            ? "grid-cols-[300px_1fr]"
            : "md:grid-cols-[70px_1fr] grid-cols-[0px_1fr]"
        }`}
      >
        <div className={`sidebar md:flex hidden`}>
          <Navigation sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="auth" element={<Auth />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/order" element={<Order />} />
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
