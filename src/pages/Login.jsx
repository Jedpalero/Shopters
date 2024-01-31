import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../MyContext";
// import Loader from "../components/Loader";

const Login = () => {
  const { handleSignin, handleCredentials, error } = useContext(MyContext);
  // const [loading, setLoading] = useState(true);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="bg-gradient-to-r from-blue-700 h-full flex flex-col justify-center items-center">
      <form className="md:w-[500px] w-[300px]">
        <h1 className="font-bold">SIGN IN</h1>
        <div className="mt-10 flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            className="bg-transparent border border-b-[3px] rounded-md p-3"
            onChange={handleCredentials}
          />
        </div>
        <div className="mt-10 flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            className="bg-transparent border border-b-[3px] rounded-md p-3"
            onChange={handleCredentials}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 mt-10 mb-5 p-2 text-white rounded-md flex m-auto transition ease-in hover:translate-y-1 hover:scale-110 hover:bg-blue-700 delay-150 duration-300"
          onClick={(e) => handleSignin(e)}
        >
          Sign In
        </button>
      </form>
      <div className="flex gap-1">
        <h1>No Account Yet?</h1>
        <NavLink to="/register" className="text-blue-600 font-semibold">
          <i>Register</i>
        </NavLink>
      </div>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default Login;
