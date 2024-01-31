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

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //ccc@gmail.cm 123456

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
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");

        // ...
      })
      .catch((error) => {
        setError(error.message);
        navigate("/login");
      });
  };

  return (
    <div
      className={`main overflow-hidden ${
        sidebar ? "grid-cols-[300px_1fr]" : "grid-cols-[70px_1fr]"
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
    </div>
  );
}

export default App;
