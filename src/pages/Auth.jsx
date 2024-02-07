import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const { firstName, lastName, email, password, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast.success("Login Successfully");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password didn't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        toast.success("Registered Successfully");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 flex flex-col justify-center items-center wide:landscape:overflow-y-scroll wide:landscape:p-[5rem] h-screen">
      <div className="bg-[#f5f5f5] box-border lg:pb-[2rem] lg:pt-1 lg:p-2 rounded-lg drop-shadow-2xl wide:landscape:mt-[10rem]">
        <div className="flex items-center gap-3 pl-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlNk5NyNFgk6GT-5bGk2Wrl635pp-0hn9w&usqp=CAU"
            alt="shopping logo"
            className="lg:w-[70px] lg:h-[70px] w-[55px] h-[55px]"
          />
          <h1 className="lg:text-3xl text-xl text-black font-bold">ShopTers</h1>
        </div>
        <form
          className=" drop-shadow-lg lg:pl-[60px] lg:pr-[60px] pl-4 pr-4"
          onSubmit={handleAuth}
        >
          <h1 className="font-bold">{!signUp ? "SIGN IN" : "REGISTER"}</h1>

          {signUp && (
            <>
              <div className="lg:mt-5 mt-2 flex justify-between">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    id="firstname"
                    autoComplete="on"
                    className="bg-transparent border border-b-[3px] rounded-md p-2 w-[170px]"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="lastname" className="font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    id="lastname"
                    autoComplete="on"
                    className="bg-transparent border border-b-[3px] rounded-md p-2 w-[170px]"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          )}
          <div className="lg:mt-5 mt-2 flex flex-col">
            <label htmlFor="emails" className="font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              id="emails"
              autoComplete="on"
              className="bg-transparent drop-shadow-lg border border-gray-300 rounded-md p-2 lg:w-[400px] w-[340px]"
              onChange={handleChange}
            />
          </div>
          <div className="lg:mt-5 mt-2 flex flex-col">
            <label htmlFor="passwords" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              id="passwords"
              autoComplete="on"
              className="bg-transparent drop-shadow-lg border border-gray-300  rounded-md p-2  lg:w-[400px] w-[340px]"
              onChange={handleChange}
            />
          </div>
          {signUp && (
            <>
              <div className="lg:mt-5 mt-2 flex flex-col">
                <label htmlFor="conPassword" className="font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="conPassword"
                  value={confirmPassword}
                  autoComplete="on"
                  className="bg-transparent border border-b-[3px] rounded-md p-2 lg:w-[400px] w-[340px]"
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className={` mt-5 mb-5 p-2 w-[100px] text-white rounded-md flex m-auto font-semibold justify-center ease-in duration-100 hover:translate-y-1 hover:scale-110  ${
              !signUp
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            {!signUp ? "Sign in" : "Submit"}
          </button>
        </form>
        {!signUp ? (
          <>
            <div className="flex gap-1 justify-center cursor-pointer pb-3">
              <h1>No Account Yet?</h1>
              <span
                className="text-blue-700 font-semibold"
                onClick={() => setSignUp(true)}
              >
                <i>Register</i>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-1 justify-center cursor-pointer pb-3">
              <h1>Already have an account?</h1>
              <span
                className={`text-red-700 font-semibold $`}
                onClick={() => setSignUp(false)}
              >
                <i>Sign In</i>
              </span>
            </div>
          </>
        )}

        {/* {error && <div className="text-red-600 text-center mt-4">{error}</div>} */}
      </div>
    </div>
  );
};

export default Auth;
