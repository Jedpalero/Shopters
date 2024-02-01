import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import FooterMenu from "./mobile/FooterMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //ccc@gmail.cm 123456
  //uninstall redux toolkit

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast.success("User successfully registered");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        navigate("/login");
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

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
        <div className={`sidebar flex`}>
          <Navigation sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <main className="content">
          <MyContext.Provider
            value={{
              // register,
              // setRegisterEmail,
              // setRegisterPassword,
              // users,
              handleCredentials,
              handleRegister,
              error,
              handleSignin,
            }}
          >
            <Outlet />
          </MyContext.Provider>
        </main>
        <div className="md:hidden block h-[50px] bg-[#0f0f0f] bg-opacity-60 w-full absolute bottom-0">
          <FooterMenu />
        </div>
      </div>
    </>
  );
}

export default App;
