import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

// export const MyContext = createContext("");
export const MyContext = createContext(null);

const MyContextProvider = (props) => {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  // const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 720);

  //ccc@gmail.cm 123456
  //uninstall redux toolkit

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
    // setLoading(true);
    setError("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login successfully");
        // setLoading(false);
        // navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
        // navigate("/login");
        // setLoading(false);
      });
  };

  const contextValue = {
    handleCredentials,
    handleRegister,
    error,
    handleSignin,
    isMobile,
  };
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
